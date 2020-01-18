<template>
  <div class="webview">
    <form action="/optionspostback" method="get">
    <input type="hidden" name="psid" id="psid">
    <h3>Pillows</h3>
    <input type="radio" name="pillows" value="soft" checked>Soft<br>
    <input type="radio" name="pillows" value="hard">Hard<br>
    <h3>Bed</h3>
    <input type="radio" name="bed" value="single" checked>Single<br>
    <input type="radio" name="bed" value="double">Double<br>
    <input type="radio" name="bed" value="twin">Twin<br>
    <input type="submit" value="Submit" id="submitButton" @click="closeWebView">
</form>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
// import Loading from '@/components/Loading.vue'
// import { setTimeout } from 'timers'

export default {
  name: 'test',
  components: {
    // Loading,
  },

  data() {
    return {}
  },

  methods: {
    closeWebView() {
      this.me.requestCloseBrowser(function success() {
      }, function error(err) {
        console.log(err)
      })
    }
  },

  created() {},
}
</script>
