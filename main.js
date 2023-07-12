import App from './App.vue'
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locale/index'

const i18nConfig = {
  locale: uni.getLocale(),
  messages
}
const i18n = createI18n(i18nConfig)

export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)
  return {
    app
  }
}