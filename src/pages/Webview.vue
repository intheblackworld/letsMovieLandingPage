<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <!-- <Navigation /> -->
    <router-view></router-view>
    <!-- <div id="section8">
      <Section8 />
    </div>-->
    <!-- <ContactSection />
    <MobileNav />-->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Navigation from '@/layouts/Navigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Footer from '@/layouts/Footer.vue'
// import gtm from '@/mixins/gtm.js'
// import

// 結構
// 1. 主視覺
// 2. 價值延伸
// 3. 使用流程
// 4. 安心的理由
// 5. FAQ
// 6. 使用者回饋
// 7. final CTA

// import Section1 from '@/projects/home/Section1.vue'
// import Section2 from '@/projects/home/Section2.vue'
// import Section3 from '@/projects/home/Section3.vue'
// import Section4 from '@/projects/home/Section4.vue'
// import Section5 from '@/projects/home/Section5.vue'
// import Section6 from '@/projects/home/Section6.vue'
// import Section7 from '@/projects/home/Section7.vue'
// import Simulation from '@/projects/home/Simulation.vue'

export default {
  name: 'webview',
  // mixins: [gtm],
  components: {
    // Navigation,
    // ContactSection,
    // MobileNav,
    // Section1,
    // Section2,
    // Section3,
    // Section4,
    // Section5,
    // Section6,
    // Section7,
    // Simulation,
    Loading,
    Footer,
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
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
    window.FB.CustomerChat.hide()
  },
  beforeDestroy: function() {
    window.removeEventListener('fb-sdk-ready', this.onFBReady)
  },
  methods: {
    onFBReady: function() {
      this.isFBReady = true
      console.log('sdfasready')
      console.log(this.ME)
      // console.log(this.FB.getUserID())
      // this.fb_id = this.FB.getUserID()

      //       MessengerExtensions.getSupportedFeatures(function success(result) {
      //   let features = result.supported_features;
      //   if (features.indexOf("context") != -1) {
      //     MessengerExtensions.getContext('<YOUR_APP_ID>',
      //       function success(thread_context) {
      //         // success
      //         document.getElementById("psid").value = thread_context.psid;
      //         // More code to follow
      //       },
      //       function error(err) {
      //         console.log(err);
      //       }
      //     );
      //   }
      // }, function error(err) {
      //   console.log(err);
      // });
    },
  },
}
</script>
