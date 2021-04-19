const CACHE_NAME = 'myWorker-v0.0.2'

// assets for cache
const cacheAssets = ['index.html', 'favicon.svg', '/src/sw.ts']

// install webworker
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')

  e.waitUntil(async () => {
    try {
      const cache = await caches.open(CACHE_NAME)
      console.log(`sw [${CACHE_NAME}]: Caching Files`)
      return cache.addAll(cacheAssets)
    } catch (e) {
      self.skipWaiting()
    }
  })
})

// cleaning old cache
self.addEventListener('activate', async (e) => {
  console.log('Service Worker: Activated')

  e.waitUntil(async () => {
    const cacheNames = await caches.keys()

    return Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_NAME) {
          console.log(`sw [${cacheName}]: remove old cache`)
          return caches.delete(cacheName)
        }
      })
    )
  })
})
