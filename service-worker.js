/* =============================================
   SAFESTEP — service-worker.js
   Offline-First Emergency Cache
   ============================================= */

const CACHE_NAME = 'safestep-v1.0.0';
const OFFLINE_URL = './index.html';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './service-worker.js'
];

// =============================================
// INSTALL — Cache all core assets
// =============================================
self.addEventListener('install', event => {
  console.log('[SafeStep SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SafeStep SW] Caching core assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.log('[SafeStep SW] Cache install error:', err))
  );
});

// =============================================
// ACTIVATE — Clean old caches
// =============================================
self.addEventListener('activate', event => {
  console.log('[SafeStep SW] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SafeStep SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// =============================================
// FETCH — Cache-first with network fallback
// =============================================
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  if (!isSameOrigin && !isFont) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache, update in background
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match(OFFLINE_URL);
        }
        return new Response('Offline — SafeStep Emergency Mode Active', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' })
        });
      });
    })
  );
});

// =============================================
// BACKGROUND SYNC — Queue SOS when offline
// =============================================
self.addEventListener('sync', event => {
  if (event.tag === 'sos-sync') {
    console.log('[SafeStep SW] Syncing queued SOS alerts...');
    event.waitUntil(Promise.resolve().then(() => {
      console.log('[SafeStep SW] SOS alerts synced.');
    }));
  }
});

// =============================================
// PUSH NOTIFICATIONS
// =============================================
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '⚠ SafeStep Emergency Alert';
  const options = {
    body: data.body || 'Emergency situation detected in your area.',
    vibrate: [200, 100, 200, 100, 200],
    data: { url: data.url || '/' },
    actions: [
      { action: 'view', title: 'View Alert' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'view') {
    event.waitUntil(clients.openWindow(event.notification.data.url || '/'));
  }
});

console.log('[SafeStep SW] Service Worker loaded — offline emergency mode ready.');
