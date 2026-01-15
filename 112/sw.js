self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vm-cache").then(cache =>
      cache.addAll(["index.html"])
    )
  );
});
