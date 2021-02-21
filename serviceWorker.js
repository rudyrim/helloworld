const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "https://raw.githubusercontent.com/rudyrim/helloworld/main/index.html",
  "https://raw.githubusercontent.com/rudyrim/helloworld/main/style.css",
  "https://raw.githubusercontent.com/rudyrim/helloworld/main/app.js"
]

if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('https://raw.githubusercontent.com/rudyrim/helloworld/main/servicWorker.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});
