<template>
  <div :class="`loading-bg ${loading ? '' : 'hide'}`">
    <ClipLoader class="loading-icon" loading="loading" :size="150" sizeUnit="px" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';

.loading-bg {
  background-color: $loading_bg_color;
  background-image: $loading_bg_image;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .loading-icon {
    width: 150px;
    border-color: $loading_icon_color;
  }

  &.hide {
    animation: hide 1s ease 0s forwards;
  }

  @keyframes hide {
    0% {
      oacity: 1;
      display: block;
    }

    99% {
      opacity: 0;
      display: block;
      z-index: 1000;
    }

    100% {
      opacity: 0;
      display: none;
      z-index: -1000;
    }
  }
}
</style>

<script>
import { ClipLoader } from '@saeris/vue-spinners'

export default {
  name: 'loading',
  components: {
    ClipLoader,
  },

  props: ['loading'],
}
</script>
