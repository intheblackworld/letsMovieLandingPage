import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'

import '@/assets/style/global.scss'

import VueJsonLD from 'vue-jsonld'

/* 全局配置 https://blog.csdn.net/FireBird_one/article/details/80295229 */
import config from './lib/config.js'

import lang from 'element-ui/lib/locale/lang/zh-TW'
import ElementUI from 'element-ui'
import './lib/theme/index.css'
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
  faQuestionCircle,
  faClipboardList,
  faRobot,
  faMale,
  faFemale,
} from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { faFacebookMessenger, faFacebookF, faReadme } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSvgIcon from 'vue-svgicon'

AOS.init()

library.add(faBars)
library.add(faTimes)
library.add(faPhone)
library.add(faPen)
library.add(faFacebookMessenger)

library.add(faFacebookF)

library.add(faReadme)
library.add(faQuestionCircle)
library.add(faClipboardList)

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

Vue.use(ElementUI)
Vue.use(VueScrollTo)
Vue.use(VueLazyload)

Vue.use(VueJsonLD)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    return (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.com/en_US/messenger.Extensions.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'Messenger'))
  }
}).$mount('#app')
