import { resolve } from 'path'

export default {
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './assets')
    },
  },
  build: {
    assetsInlineLimit: 0,
  }
}
