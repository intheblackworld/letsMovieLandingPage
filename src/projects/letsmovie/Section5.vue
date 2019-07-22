<template>
  <div class="section5">
    <div class="container">
      <p class="title flex-c" v-scroll-reveal.reset="!isMobile ? $fadeInUp() : $fadeInUp()">你可能想問</p>
      <p>
        1. 這個服務要付費嗎？會很貴嗎？
        A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 980px;
  margin: 0 auto;
  text-align: center;

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s5_title_bg.png');
    background-size: cover;
    margin-bottom: 25px;
    color: #fff;
    font-size: 28px;
    margin: 0 auto;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 24px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .slide {
    width: 955px;
    height: 458px;
    margin-left: 50px;
    margin-bottom: 30px;

    .slide-img {
      width: 810px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .slide-content {
      position: absolute;
      bottom: 30px;
      .slide-title {
        padding: 15px 20px;
        text-align: center;
        background: #2b466f;
        color: #fff;
        font-size: 24px;
        position: relative;
        z-index: 1;
      }

      .slide-desc {
        padding: 15px 20px;
        padding-top: 50px;
        text-align: left;
        color: #1a2739;
        background-color: #9ca5b2;
        font-size: 18px;
        transform: translate(30px, -30px);
      }
    }
  }

  .btn-group {
    display: none;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 810px;
    margin: 0 auto;
    text-align: center;

    .title {
      width: 251px;
      height: 75px;
      background-image: url('./s5_title_bg.png');
      background-size: cover;
      margin-bottom: 25px;
      color: #fff;
      font-size: 21px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .slide {
      width: 710px;
      height: 340px;
      margin-left: 50px;
      margin-bottom: 30px;

      .slide-img {
        width: 600px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }

      .left-btn,
      .right-btn {
        width: 40px;
      }

      .slide-content {
        position: absolute;
        bottom: 0px;
        .slide-title {
          padding: 10px 15px;
          text-align: center;
          background: #2b466f;
          color: #fff;
          font-size: 18px;
          position: relative;
          z-index: 1;
        }

        .slide-desc {
          padding: 10px 15px;
          padding-top: 40px;
          text-align: left;
          color: #1a2739;
          background-color: #9ca5b2;
          font-size: 13px;
          transform: translate(30px, -30px);
        }
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    text-align: center;

    .title {
      width: 300px;
      height: 90px;
      background-image: url('./s5_title_bg.png');
      background-size: cover;
      margin-bottom: 15px;
      color: #fff;
      font-size: 32px;
    }

    .sub-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 20px;
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (180 / 320) + 40px);
      margin-left: 0px;
      margin-bottom: 100px;

      .slide-img {
        width: 100vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }

      .left-btn,
      .right-btn {
        display: none;
      }

      .btn-group {
        width: 180px;
        bottom: 0px;
        display: flex;
      }

      .slide-content {
        position: absolute;
        bottom: -100px;
        .slide-title {
          padding: 10px 15px;
          text-align: center;
          background: #2b466f;
          color: #fff;
          font-size: 18px;
          position: relative;
          z-index: 1;
          margin: 0 10%;
        }

        .slide-desc {
          width: 100vw;
          padding-top: 0px;
          padding: 20px 15px 10px;
          text-align: left;
          color: #1a2739;
          background-color: #9ca5b2;
          font-size: 13px;
          transform: translate(0px, -8px);
        }
      }
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
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'

export default {
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5_item1.png'),
          title: '水碓觀景公園，健康作靠山',
          desc:
            '出門200步就到水碓觀景公園<br />這是企業家的早餐會報，更是讓健康有靠的不二法門',
        },
        {
          src: require('./s5_item2.png'),
          title: '走步道看風景，樂觀向前行',
          desc:
            '10.5公頃的水碓觀景公園，六條步道七座涼亭<br />山上視野好、空氣乾淨，心境自然輕鬆開朗',
        },
        {
          src: require('./s5_item3.png'),
          title: '散步石德公園，每天做早操 ',
          desc:
            '大樹下是楚漢棋局，林蔭底是孩子的開心笑聲，<br />一片波光樹海是清幽雅緻的寧靜公園',
        },
      ],
    }
  },

  methods: {},

  created() {},
}
</script>
