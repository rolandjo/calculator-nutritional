// Service worker: aplicația funcționează offline după prima vizită.
// Strategie: răspuns imediat din cache, actualizare în fundal (stale-while-revalidate).
// La o versiune nouă, schimbă CACHE ca să fie șters cache-ul vechi.
const PREFIX = 'calc-nutritional-';
const CACHE = PREFIX + 'v50';
const ASSETS = ['./', './index.html', './en/', './en/index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png', './fonts/inter-latin-wght-normal.woff2', './fonts/inter-latin-ext-wght-normal.woff2'];

// Calea aplicației (ex. /calculator-nutritional/), din scope-ul service worker-ului
const BASE = new URL(self.registration.scope).pathname;

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      // Doar versiunile vechi ale acestui calculator: alte aplicații de pe aceeași origine (*.github.io) au cache-urile lor
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Paginile aplicației: '' și 'index.html' → română; 'en/' și 'en/index.html' → engleză. Orice altă navigare
// (ex. deschiderea directă a manifestului) nu este o pagină și nu are voie să scrie peste cheile paginilor.
function pageKey(pathname) {
  if (!pathname.startsWith(BASE)) return null;
  const rest = pathname.slice(BASE.length);
  if (rest === '' || rest === 'index.html') return './index.html';
  if (rest === 'en/' || rest === 'en/index.html') return './en/index.html';
  return null;
}

const isHtml = (res) => (res.headers.get('content-type') || '').includes('text/html');

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    // /en fără slash final: redirect la /en/ (căile relative ale paginii engleze presupun slash-ul final)
    if (url.pathname === BASE + 'en') {
      event.respondWith(Response.redirect(new URL('en/', self.registration.scope).href + url.search + url.hash, 301));
      return;
    }
    const key = pageKey(url.pathname);
    if (!key) return; // nu e o pagină a aplicației: rețeaua obișnuită, fără cache
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(key);
        const network = fetch(req).then((res) => {
          // În cache intră doar HTML-ul paginii (nu redirecturi, erori sau alte tipuri de conținut)
          if (res && res.ok && !res.redirected && isHtml(res)) cache.put(key, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req);
      const network = fetch(req).then((res) => {
        if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
