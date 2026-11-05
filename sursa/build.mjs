// Build: src.html -> fișier HTML autonom
//   node build.mjs offline calculator_nutritional.html   (fonturi incluse, merge fără internet, fără PWA)
//   node build.mjs sites   (font din Google Fonts, fișier mai mic → ../google-sites/)
//   node build.mjs github  ../index.html   (offline + PWA: manifest, service worker, iconițe — pentru GitHub Pages)
import { readFileSync, writeFileSync, cpSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import colors from 'tailwindcss/colors.js';

const VARIANT = process.argv[2] || 'offline';
const OUT = process.argv[3] || (VARIANT === 'sites' ? '../google-sites/calculator_nutritional_google_sites.html' : '../index.html');
const FA_DIR = 'node_modules/@fortawesome/fontawesome-free/svgs/solid';
const FONT_DIR = 'node_modules/@fontsource-variable/inter/files';

let html = readFileSync('src.html', 'utf8');

// ---------- Iconițe ----------
function loadIcon(name) {
  const svg = readFileSync(`${FA_DIR}/${name}.svg`, 'utf8');
  const viewBox = svg.match(/viewBox="([^"]+)"/)[1];
  const d = [...svg.matchAll(/<path[^>]*\sd="([^"]+)"/g)].map(m => m[1]).join(' ');
  return { viewBox, d };
}
html = html.replace(/<i data-fa="([a-z0-9-]+)"(?: class="([^"]*)")?><\/i>/g, (_, name, cls) => {
  const { viewBox, d } = loadIcon(name);
  return `<svg class="fa-ico${cls ? ' ' + cls : ''}" viewBox="${viewBox}" aria-hidden="true"><path fill="currentColor" d="${d}"/></svg>`;
});
if (/data-fa=/.test(html)) throw new Error('Iconițe neînlocuite rămase');

const dynamic = ['mug-hot', 'bowl-food', 'apple-whole', 'moon', 'fire', 'sun', 'circle-half-stroke',
  'circle-check', 'circle-exclamation', 'clipboard-check', 'up-right-from-square', 'download', 'flag-checkered', 'triangle-exclamation', 'circle-info', 'user', 'chart-pie', 'utensils', 'chart-line', 'square-root-variable', 'book', 'globe'];
html = html.replace('/*__ICONS__*/{}', JSON.stringify(Object.fromEntries(dynamic.map(n => [n, loadIcon(n)]))));

// ---------- Fonturi ----------
let fonts;
if (VARIANT === 'sites') {
  fonts = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap');";
} else {
  const b64 = f => readFileSync(`${FONT_DIR}/${f}`).toString('base64');
  fonts = `
@font-face{font-family:'Inter';font-style:normal;font-display:swap;font-weight:100 900;src:url(data:font/woff2;base64,${b64('inter-latin-ext-wght-normal.woff2')}) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'Inter';font-style:normal;font-display:swap;font-weight:100 900;src:url(data:font/woff2;base64,${b64('inter-latin-wght-normal.woff2')}) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}`.trim();
}
html = html.replace('/*__FONTS__*/', fonts);

// ---------- PWA (doar varianta GitHub Pages) ----------
if (VARIANT === 'github') {
  html = html.replace('<!--__PWA_HEAD__-->', '<link rel="manifest" href="manifest.webmanifest">\n  <meta name="theme-color" content="#2F6755">\n  <link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">\n  <link rel="apple-touch-icon" href="icons/apple-touch-icon.png">');
  html = html.replace('/*__PWA_JS__*/', "if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) { window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); }); }");
} else {
  html = html.replace('<!--__PWA_HEAD__-->', '').replace('/*__PWA_JS__*/', '');
}

// ---------- Culori ca variabile CSS (mod întunecat = scala inversată) ----------
const PALETTES = ['slate', 'red', 'rose', 'pink', 'orange', 'amber', 'lime', 'emerald', 'teal', 'sky', 'blue', 'indigo', 'violet'];

// Botanical Precision: wellness-oriented semantic remapping. Maintain legacy Tailwind
// utilities so the nutritional calculations, chart logic and UI selectors stay intact.
const wellnessPalettes = {
  indigo: {50:'#F1F7F2',100:'#DCEAE0',200:'#C1DACA',300:'#9CC4A9',400:'#73A58A',500:'#4B856B',600:'#2F6755',700:'#275744',800:'#203B34',900:'#19352D',950:'#10251E'},
  // 500/600 darkened vs. the first draft (#74867C/#576B61) so small muted text meets WCAG AA (≥4.5:1) on canvas and tinted panels
  slate:  {50:'#F7F6F2',100:'#EFEEE8',200:'#DFE2D9',300:'#CBD2C7',400:'#A0AFA4',500:'#5B6D63',600:'#4D6157',700:'#3D5047',800:'#2C4037',900:'#1C3028',950:'#10221C'}
};

const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
const rgb = hex => { const n = parseInt(hex.slice(1), 16); return `${n >> 16} ${(n >> 8) & 255} ${n & 255}`; };
// Surfaces: warm paper white in light mode, deep botanical green in dark mode (was Tailwind slate-900)
const light = [`--c-white:${rgb('#FFFEFB')}`];
const dark = [`--c-white:${rgb('#192A22')}`];
const twColors = { transparent: 'transparent', current: 'currentColor', black: '#000', white: 'rgb(var(--c-white) / <alpha-value>)' };
for (const p of PALETTES) {
  twColors[p] = {};
  SHADES.forEach((s, i) => {
    light.push(`--c-${p}-${s}:${rgb((wellnessPalettes[p] || colors[p])[s])}`);
    dark.push(`--c-${p}-${s}:${rgb((wellnessPalettes[p] || colors[p])[SHADES[SHADES.length - 1 - i]])}`);
    twColors[p][s] = `rgb(var(--c-${p}-${s}) / <alpha-value>)`;
  });
}
// Variabilele întunecate se aplică doar pe ecran: la tipărire rămân culorile luminoase
html = html.replace('/*__COLOR_VARS__*/', `:root{${light.join(';')}}@media screen{html.dark{${dark.join(';')}}}`);

// ---------- Tailwind ----------
writeFileSync('.tw-content.html', html);
writeFileSync('.tw-in.css', '@tailwind base;@tailwind components;@tailwind utilities;');
writeFileSync('.tw.config.cjs', `module.exports = ${JSON.stringify({ content: ['./.tw-content.html'], theme: { colors: twColors } })};`);
execFileSync('npx', ['tailwindcss', '-c', '.tw.config.cjs', '-i', '.tw-in.css', '-o', '.tw-out.css', '--minify'], { stdio: 'inherit' });
html = html.replace('/*__TAILWIND__*/', readFileSync('.tw-out.css', 'utf8'));

writeFileSync(OUT, html);
if (VARIANT === 'github' && existsSync('pwa')) cpSync('pwa', dirname(OUT), { recursive: true }); // manifest, sw.js, iconițe lângă index.html
console.log(`OK [${VARIANT}] -> ${OUT} (${(html.length / 1024).toFixed(0)} KB)`);
