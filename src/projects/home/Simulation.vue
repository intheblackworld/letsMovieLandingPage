<template>
  <div class="simulation fullscreen relative">
    <div class="frame relative bg-cover"></div>
  </div>
</template>
<style lang="scss" scoped>
.frame {
  top: 10%;
  height: 80vh;
  width: 40vh;
  margin: 0 auto;
  margin-bottom: 20px;
  background-image: url('./s3_phone.png');
}

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
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section8',
  mixins: [slider],
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  mounted() {},
}
</script>
