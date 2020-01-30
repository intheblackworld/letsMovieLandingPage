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
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import Navigation from '@/layouts/Navigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Footer from '@/layouts/Footer.vue'
import gtm from '@/mixins/gtm.js'

export default {
  name: 'rule',
  mixins: [gtm],
  components: {
    // Navigation,
    Loading,
    Footer,
  },

  data() {
    return {
      load: true,
    }
  },
  created() {
    window.addEventListener('load', event => {
      this.load = false
    })
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
