// Service worker: aplicația funcționează offline după prima vizită.
// Strategie: răspuns imediat din cache, actualizare în fundal (stale-while-revalidate).
// La o versiune nouă, schimbă CACHE ca să fie șters cache-ul vechi.
const CACHE = 'calc-nutritional-v22';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const key = req.mode === 'navigate' ? './index.html' : req;
      const cached = await cache.match(key, { ignoreSearch: req.mode === 'navigate' });
      const network = fetch(req).then((res) => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
