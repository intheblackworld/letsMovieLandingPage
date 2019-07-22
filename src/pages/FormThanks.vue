<template>
  <div class="thanks">
    <h3>感謝您</h3>
    <p>
      預約成功
      <br />我們將會盡快與您聯繫
    </p>
    <a href="/">回到首頁</a>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.thanks {
  width: 100vw;
  height: 100vh;
  background-color: $phone_thanks_bg;
  // background-image: linear-gradient(to top, rgba(0, 0, 0, 0.24), rgba(156, 30, 35, 0));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 36px;
    color: $phone_thanks_title_color;
  }

  p {
    font-size: 24px;
    color: $phone_thanks_desc_color;
  }
  a {
    color: $phone_thanks_link_color !important;
    width: 270px !important;
  }
}
</style>

<script>
import gtm from '@/mixins/gtm.js'

export default {
  name: 'formThanks',
  mixins: [gtm],
  components: {},

  methods: {},
}
</script>
