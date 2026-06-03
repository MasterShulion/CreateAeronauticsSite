const CACHE_NAME = 'create-aero-v17';
const URLS = [
  '/',
  '/index.html',
  '/install.html',
  '/changelog.html',
  '/privacy.html',
  '/404.html',
  '/offline.html',
  '/manifest.json',
  '/og-image.svg',
  '/config.json',
  '/assets/site.css',
  '/assets/lucide-lite.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS).catch(()=>{});
    }).catch(()=>{})
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Network-first for navigation requests (documents)
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy)).catch(()=>{});
          return response;
        })
        .catch(() => caches.match(e.request).then(cached => cached || caches.match('/offline.html')))
    );
    return;
  }

  // Freshness for API/config: try network, fallback to cache
  if (url.pathname === '/config.json' || url.pathname.startsWith('/api/')) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone)).catch(()=>{});
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for static assets (CSS/JS/images)
  if (e.request.destination === 'style' || e.request.destination === 'script' || e.request.destination === 'image' || url.pathname.startsWith('/assets/')) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy)).catch(()=>{});
          return res;
        }).catch(() => {
          if (e.request.destination === 'image') return caches.match('/og-image.svg');
          return new Response('Offline', { status: 503 });
        });
      })
    );
    return;
  }

  // Default fall back to cache then network
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request)).catch(() => caches.match('/offline.html'))
  );
});
