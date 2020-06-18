<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <!-- <Navigation /> -->
    <router-view></router-view>
    <!-- <div id="section8">
      <Section8 />
    </div> -->
    <!-- <ContactSection />
    <MobileNav /> -->
    <div class="footer-nav flex flex-ac">
      <router-link
        :to="`/rule/guide`"
        tag="div"
        class="nav-item flex-c wrap"
      >
      <font-awesome-icon :icon="['fab', 'readme']" class="readme" />
      使用說明</router-link>
      <router-link
        :to="`/rule/platform`"
        tag="div"
        class="nav-item flex-c wrap"
      >
      <font-awesome-icon icon="clipboard-list" class="readme" />
      平台守則</router-link>
      <router-link
        :to="`/rule/notice`"
        tag="div"
        class="nav-item flex-c wrap"
      ><font-awesome-icon icon="exclamation-triangle" />
      注意事項</router-link>
      <!-- <router-link
        :to="`/rule/question`"
        tag="div"
        class="nav-item flex-c wrap"
      ><font-awesome-icon icon="question-circle" />
      常見問題</router-link> -->
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Navigation from '@/layouts/Navigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import Vue from 'vue'
import Loading from '@/components/Loading.vue'
// import Footer from '@/layouts/Footer.vue'
// import gtm from '@/mixins/gtm.js'

export default {
  name: 'rule',
  // mixins: [gtm],
  components: {
    // Navigation,
    Loading,
    // Footer,
  },

  data: function() {
    return { load: true, isFBReady: false }
  },
  created() {
    window.addEventListener('load', event => {
      this.load = false
    })
  },
  mounted: function() {
    this.isFBReady = Vue.FB !== undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
  },
  beforeDestroy: function() {
    window.removeEventListener('fb-sdk-ready', this.onFBReady)
  },
  methods: {
    onFBReady: function() {
      this.isFBReady = true
      this.getUserData()
    },

    getUserData() {
      window.extAsyncInit = () => {
        // the Messenger Extensions JS SDK is done loading
        setTimeout(() => {
          this.me = MessengerExtensions
          MessengerExtensions.getContext(
            // '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
            '1405269929631051', // Let's Movie 電影約會 BOT ID
            thread_context => {
              // success
              this.fb_id = thread_context.psid
              // More code to follow

              fetch(
                'https://bot-production.letsmovienow.com/api/webview/getUserData',
                {
                  // fetch(`https://0a46f965.ngrok.io/api/webview/checkDetail`, {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify({ fb_id: this.fb_id }),
                },
              )
                .then(res => {
                  return res.json()
                })
                .then(res => {
                  if (res.err) {
                    // const h = this.$createElement
                    this.$notify({
                      title: res.err,
                    })
                  } else {
                    // console.log(res.data)
                    this.gender = res.data.gender
                  }
                })
            },
            err => {
              this.fb_id = err
            },
          )
        }, 1500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 63px;
  width: 100vw;
  box-shadow: 0 -2px 10px 2px rgba(0,0, 0, .2);
  .nav-item {
    width: 33.33%;
    height: 100%;
    padding-top: 10px;
    background-color: #333;
    color: #fff;
    font-size: 16px;

    > svg {
      width: 100%;
      font-size: 24px;
      display: block;
    }


  }
}

</style>
<style lang="scss">
.fb_dialog {
  display: none !important;
}
</style>
