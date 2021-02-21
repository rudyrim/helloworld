const cacheName = 'news-v1';

const staticAssets = [
  './',
  './app.js',
  './style.css',
  './manifest.json',
];


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('serviceWorker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed'));
}