import './bootstrap'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import * as Sentry from '@sentry/vue'

import Layout from '@/Components/Layout.vue'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = page.default.layout || Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })

    Sentry.init({
      app,
      dsn: import.meta.env.VITE_SENTRY_DSN_PUBLIC,
      tunnel: '/api/sentry-tunnel',
      trackComponents: true,
      logErrors: true
    })

    app.use(plugin).mount(el)
  }
}).then()
