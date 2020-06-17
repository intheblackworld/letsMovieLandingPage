<template>
  <div class="dating">
    <div class="title">常見問題</div>
    <!-- <div class="end">Let’s Movie 電影約會團隊 祝你約會順利</div> -->
  </div>
</template>
<style lang="scss" scoped>
.dating {
  width: 1280px;
  margin: 0px auto;
  margin-bottom: 60px;
  text-align: justify;
  min-height: calc(100vh - 40px);

  img {
    width: 100%;
  }

  .content {
    width: 52%;
    margin: 0 auto;
    display: block;
  }

  .title {
    font-size: 36px;
    color: #333;
    margin-bottom: 30px;
  }

  .pre {
    margin-bottom: 30px;
  }

  p {
    line-height: 2.5;
    margin-bottom: 15px;
    color: #444;
  }

  .talk {
    color: #000;
    font-weight: bold;
    font-size: 17px;
    margin-left: -0.5rem;
  }

  .end {
    font-size: 20px;
    color: #990000;
    margin-top: 30px;
  }

  .boy {
    color: rgb(47, 96, 125);
  }

  .girl {
    color: rgb(187, 80, 144);
  }

  .strong {
    color: #000;
  }

  .red {
    color: rgb(131, 29, 29);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .dating {
    width: 100vw;
    padding: 25px 5vw;
    margin-top: 0px;
    min-height: calc(100vh - 40px);

    img {
      width: 100vw;
      margin-left: -5vw;
    }

    .title {
      font-size: 30px;
      font-weight: bold;
    }

    .pre {
    }

    p {
      font-size: 18px;
      letter-spacing: 1.5px !important;
      line-height: 35px !important;
    }

    .talk {
      font-size: 15px;
    }

    .end {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
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
  name: 'question',
  components: {
    // Loading,
  },

  data() {
    return {}
  },

  methods: {},

  created() {},
}
</script>
