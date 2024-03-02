import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const env = loadEnv('all', process.cwd())

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    laravel({
      input: ['resources/scss/app.scss', 'resources/js/app.js'],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    sentryVitePlugin({
      org: 'norman-huth',
      project: 'documentations',
      release: {
        name: new Date().getTime()
      },
      authToken: env.VITE_SENTRY_AUTH_TOKEN.trim()
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./resources/js')
    }
  }
})
