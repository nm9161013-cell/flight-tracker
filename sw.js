const CACHE_NAME = 'flight-tracker-v1';
const urlsToCache = [
    '/flight-tracker/',
    '/flight-tracker/index.html',
    '/flight-tracker/manifest.json'
];

// 安裝 Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// 擷取請求
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
