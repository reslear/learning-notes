export const registerServiceWorker = async () => {
  try {
    let reg = await navigator.serviceWorker.register('./src/sw.ts')
    console.log('Service Worker register, scope:', reg)
  } catch (err) {
    console.error(err)
  }
}

export const initServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', registerServiceWorker)
  }
}
