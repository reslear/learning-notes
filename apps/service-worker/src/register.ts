export const ext = import.meta.env.DEV ? 'ts' : 'js'

export const registerServiceWorker = async () => {
  try {
    let reg = await navigator.serviceWorker.register(`./sw.${ext}`)
    console.log('[sw] registered successfully', reg)
  } catch (err) {
    console.error('[sw] register failed', err)
  }
}

export const initServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', registerServiceWorker)
  }
}
