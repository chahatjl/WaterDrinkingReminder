const CACHE = 'hydrate-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

// Background periodic reminder (where supported)
self.addEventListener('periodicsync', e => {
  if (e.tag === 'water-reminder') {
    e.waitUntil(
      self.registration.showNotification('💧 Hydrate, Love', {
        body: "Time to drink a glass of water! 🩷",
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [200, 100, 200]
      })
    );
  }
});
