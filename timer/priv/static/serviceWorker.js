const CACHE_NAME = "timer-cache-v1";

// List of files to cache
const urlsToCache = [
  "./index.html",
  "./priv/static/tiime.css", // Your CSS file
  "./priv/static/tiime.js", // Your JavaScript file
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
