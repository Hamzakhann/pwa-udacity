let cacheName = 'weatherPWA-v1';
let filesToCache = [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/styles/ud811.css',
  '/images/clear.png',
  '/images/cloudy-scattered-showers.png',
  '/images/cloudy.png',
  '/images/fog.png',
  '/images/cloudy_s_sunny.png',
  '/images/ic_refresh_white_24px.svg',
  '/images/ic_add_white_24px.svg',
  '/images/wind.png',
  'images/thunderstorm.png',
  '/images/snow.png',
  '/images/sleet.png',
  '/images/scattered-showers.png',
  '/images/rain.png',
  '/images/partly-cloudy.png',
  '/images/cloudy_s_sunny.png'
];

self.addEventListener('install' , (e) =>{
  console.log('Service worker install')
  console.log(e)
  e.waitUntil(
    caches.open(cacheName).then((cache) =>{
      console.log('Service worker  : Caching app shell');
      console.log(cache)
      return cache.addAll(filesToCache)
    })
  );
});