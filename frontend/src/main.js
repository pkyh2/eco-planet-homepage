import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import messages from './i18n'
import './assets/main.less'

const i18n = createI18n({
  locale: "English",
  fallbackLocale: "Korean",
  messages
})

createApp(App).use(store).use(router).use(MotionPlugin).use(i18n).mount('#app')
