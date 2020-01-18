import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue_fb from './plugins/fb-sdk'
import './registerServiceWorker'

import '@/assets/style/global.scss'

/* 全局配置 https://blog.csdn.net/FireBird_one/article/details/80295229 */
import config from './lib/config.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueScrollTo from 'vue-scrollto' // scroll 錨點
import VueLazyload from 'vue-lazyload' // 圖片 lazy load
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faBars,
  faTimes,
  faPhone,
  faPen,
  faMapMarkerAlt,
  faIdCard,
  faExclamationTriangle,
  faRobot,
  faMale,
  faFemale,
} from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { faFacebookMessenger, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSvgIcon from 'vue-svgicon'

AOS.init()

library.add(faBars)
library.add(faTimes)
library.add(faPhone)
library.add(faPen)
library.add(faFacebookMessenger)
library.add(faFacebookF)
library.add(faMapMarkerAlt)
library.add(faIdCard)
library.add(faExclamationTriangle)
library.add(faRobot)
library.add(faMale)
library.add(faFemale)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueSvgIcon, {
  tagName: 'icon'
})

Vue.use(config)

Vue.use(vue_fb, {
  appId: '902252186774664',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9'
})

Vue.use(ElementUI)
Vue.use(VueScrollTo)
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
