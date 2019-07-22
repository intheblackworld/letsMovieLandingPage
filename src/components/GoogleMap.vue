<template>
  <div class="google-map">
    <iframe
    title="googlemap"
    :src="googleSrc"
    width="100%"
    height="455"
    frameBorder="0"
    style="border: 0"
    allowFullScreen
    />
  </div>
</template>
<script>
import info from '@/info'
export default {
  name: 'googleMap',
  data() {
    return {
      googleSrc: info.googleSrc,
    }
  },
}
</script>

<style lang="scss" scoped>
.google-map {
  display: flex;
}
</style>
