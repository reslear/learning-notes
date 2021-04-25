const CACHE_NAME = 'myWorker-v0.0.0'

// assets for cache
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/settings.svg',
  '/offline.html',
  '/about.html',
  `/src/main.js`,
]

// install webworker
self.addEventListener('install', (e) => {
  console.log('sw [install]: init')

  const preCache = async () => {
    try {
      const cache = await caches.open(CACHE_NAME)

      return Promise.all(
        CACHE_ASSETS.map((path) =>
          cache.add(path).catch((e) => console.error(path, e))
        )
      )
    } catch (e) {
      console.log(`sw [install]: skip waiting`)
      self.skipWaiting()
    }
  }

  e.waitUntil(preCache())
})

// cleaning old cache
self.addEventListener('activate', async (e) => {
  console.log('sw [activate]: init')

  const activate = async () => {
    console.log('sw [activate]: init wait')
    try {
      const cacheNames = await caches.keys()

      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`sw [${cacheName}]: remove old cache`)
            return caches.delete(cacheName)
          }
        })
      )
    } catch (e) {
      console.log(`sw [activate]: skip waiting`)
      self.skipWaiting()
    }
  }

  e.waitUntil(activate())
})

self.addEventListener('fetch', async (e) => {
  console.log('Service Worker: Fetching')

  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
