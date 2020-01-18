// Vuejs component wait for facebook sdk to load
// https://stackoverflow.com/questions/43665115/how-to-use-facebook-sdk-with-nuxt-js/44932013#44932013
const vue_fb = {}
vue_fb.install = function install(Vue, options) {
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.com/en_US/messenger.Extensions.js'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'Messenger'))

  window.extAsyncInit = function onSDKInit() {
    // window.alert('123')
    // FB.init(options)
    // FB.AppEvents.logPageView()
    Vue.prototype.ME = MessengerExtensions
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
  Vue.ME = undefined
}

export default vue_fb
