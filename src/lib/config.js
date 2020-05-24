import info from '../info/index.js'

const fadeOption = (origin, duration, delay, distance) => ({
  origin,
  delay,
  distance: `${distance}px`,
  duration,
  viewOffset: {
    top: -100,
    right: 0,
    bottom: 0,
    left: 0
  }
})

export default {
  install(Vue, options) {
    Vue.prototype.$gtmCode = info.gtmCode

    // Vue.prototype.showFootTab = {
    //   isShow: false,
    //   active: 0
    // }
  }
}
