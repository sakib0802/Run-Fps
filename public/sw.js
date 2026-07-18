const CACHE_NAME = 'runfps-v5';
const DATA_VERSION = 'v1';

const PRECACHE_URLS = [
  '/en/',
  '/en/calculator',
  '/en/optimizer',
  '/en/bottleneck',
  '/en/games',
  '/en/about',
  '/en/contact',
  '/en/privacy',
  '/en/terms',
  '/en/compare',
  '/en/faq',
  '/en/benchmarks/gpu',
  '/en/benchmarks/cpu',
  '/de/',
  '/de/calculator',
  '/de/optimizer',
  '/de/bottleneck',
  '/de/games',
  '/de/about',
  '/de/contact',
  '/de/privacy',
  '/de/terms',
  '/de/compare',
  '/de/faq',
  '/de/benchmarks/gpu',
  '/de/benchmarks/cpu',
  '/fr/',
  '/fr/calculator',
  '/fr/optimizer',
  '/fr/bottleneck',
  '/fr/games',
  '/fr/about',
  '/fr/contact',
  '/fr/privacy',
  '/fr/terms',
  '/fr/compare',
  '/fr/faq',
  '/fr/benchmarks/gpu',
  '/fr/benchmarks/cpu',
  '/es/',
  '/es/calculator',
  '/es/optimizer',
  '/es/bottleneck',
  '/es/games',
  '/es/about',
  '/es/contact',
  '/es/privacy',
  '/es/terms',
  '/es/compare',
  '/es/faq',
  '/es/benchmarks/gpu',
  '/es/benchmarks/cpu',
  `/gpus.json?v=${DATA_VERSION}`,
  `/cpus.json?v=${DATA_VERSION}`,
  `/games.json?v=${DATA_VERSION}`,
  '/engine.js',
  '/images/bg-pattern.svg',
  '/fonts/SpaceGrotesk-Variable.woff2',
  '/fonts/JetBrainsMono-Variable.woff2',
  '/fonts/Inter-400.woff2',
  '/fonts/Inter-500.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(
        PRECACHE_URLS.map((url) => new Request(url, { cache: 'reload' }))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Network-first for HTML navigations — always get fresh pages
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // Stale-while-revalidate for JSON data — serve cached, update in background
  if (url.pathname.endsWith('.json') && url.searchParams.has('v')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(url.pathname).then((cached) => {
          const fetchPromise = fetch(event.request).then((res) => {
            cache.put(url.pathname, res.clone());
            return res;
          }).catch(() => cached);
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

