import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    assetsDir: '',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        sw: resolve(__dirname, 'sw.ts'),
      },
      output: {
        chunkFileNames: 'src/[name].js',
        entryFileNames: '[name].js',
      },
    },
  },
})
