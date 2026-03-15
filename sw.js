const CACHE_NAME = 'banda-ens-v8';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-512.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            clients.claim(),
            caches.keys().then(keys => {
                return Promise.all(
                    keys.filter(key => key !== CACHE_NAME)
                        .map(key => caches.delete(key))
                );
            })
        ])
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request, { cache: 'no-store' })
            .then(networkResponse => {
                // Si la red funcionó, guardamos una copia nueva en caché (opcional) o simplemente devolvemos la red
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Si falla la red (sin internet), caemos al caché
                return caches.match(event.request);
            })
    );
});
