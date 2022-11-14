import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.less'

createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
