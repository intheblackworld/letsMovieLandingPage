<template>
  <div id="app">
    <AstrictMask />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:200,300,400,500,600,700,900&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&subset=chinese-traditional');
</style>

<script>
import AstrictMask from '@/components/AstrictMask'

export default {
  name: 'App',
  components: {
    AstrictMask,
  },

  mounted() {
    window.extAsyncInit = function() {
      // the Messenger Extensions JS SDK is done loading
      console.log('ext!!!!!')
      window.alert('ext!!!')
    }
  }
}
</script>
