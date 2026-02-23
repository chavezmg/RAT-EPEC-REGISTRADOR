const CACHE_NAME = 'rat-epec-v1';
const ASSETS = [
  './',
  './index.html'
];

// Instalar y guardar la App en el "cerebro" del celular
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Hacer que la App funcione Offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});