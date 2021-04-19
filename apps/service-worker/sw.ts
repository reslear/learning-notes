const cacheName = 'myWorker'
const version = 'v0.0.1'

self.addEventListener('activate', async (e: ExtendableEvent) => {
  console.log('Service Worker: Activated')

  e.waitUntil(async () => {
    const cacheNames = await caches.keys()

    return Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          console.log('Service Worker: Clearing Old Cache')
          return caches.delete(cache)
        }
      })
    )
  })
})
