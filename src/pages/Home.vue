<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <Navigation />
    <div id="section1">
      <Section1 />
    </div>
    <!-- <div id="simulation">
      <Simulation />
    </div> -->
    <div id="section2">
      <Section2 />
    </div>

    <div id="section3">
      <Section3 />
    </div>
    <div id="section4">
      <Section4 />
    </div>
    <div id="section5">
      <Section5 />
    </div>
    <div id="section6">
      <Section6 :feedback="feedback" />
    </div>
    <div id="section7">
      <Section7 />
    </div>
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
import Navigation from '@/layouts/Navigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Footer from '@/layouts/Footer.vue'
import gtm from '@/mixins/gtm.js'

// 結構
// 1. 主視覺
// 2. 價值延伸
// 3. 使用流程
// 4. 安心的理由
// 5. FAQ
// 6. 使用者回饋
// 7. final CTA

import Section1 from '@/projects/home/Section1.vue'
import Section2 from '@/projects/home/Section2.vue'
import Section3 from '@/projects/home/Section3.vue'
import Section4 from '@/projects/home/Section4.vue'
import Section5 from '@/projects/home/Section5.vue'
import Section6 from '@/projects/home/Section6.vue'
import Section7 from '@/projects/home/Section7.vue'
import feedback from '@/projects/home/feedback.js'
// import Simulation from '@/projects/home/Simulation.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Navigation,
    // ContactSection,
    // MobileNav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    // Simulation,
    Loading,
    Footer,
  },

  data() {
    return {
      load: true,
      routeString: '',
      feedback,
    }
  },
  beforeMount() {
    if (this.$route.query.source && this.$route.query.name) {
      this.$store.commit('setCTA', this.$route.query)
      this.$router.replace({ query: null })
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
