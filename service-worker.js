
const CACHE = "samidin-pwa-v1";
const FILES = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/Samidin_cv.pdf"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(FILES);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => { if (key !== CACHE) return caches.delete(key); })
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", evt => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(
    caches.match(evt.request).then(resp => {
      return resp || fetch(evt.request).then(fetchResp => {
        return caches.open(CACHE).then(cache => {
          cache.put(evt.request, fetchResp.clone());
          return fetchResp;
        });
      }).catch(() => caches.match('/'));
    })
  );
});
