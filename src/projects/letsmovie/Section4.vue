<template>
  <div class="section4">
    <div class="container">
      <p class="title flex-c" v-scroll-reveal.reset="!isMobile ? $fadeInUp(0) : $fadeInUp()">安心的理由</p>

      <p>
        為了讓你們能更放心地使用我們的服務
        我們的配對機制
        在傳訊息時
        通過嚴格把空的監督中心
        絕對不會洩漏以下資料
        1. Line, 臉書帳號等名稱
        2. 真實姓名
        3. 其它隱密個資
        同時，註冊時會採取實名認證以及年齡驗證
        以下幾點請在配對成功
        出去看電影的時候嚴格遵守
        我們很認真的看待關於安全的議題
        所以對於沒有遵守的人，我們採取零容忍的態度
        一律黑名單，未來不得參與 Let’s Movie 的任何活動
      </p>
      <div class="btn border flex-c">點擊查看守則</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 1090px;
  margin: 0 auto;

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s4_title_bg.png');
    background-size: cover;
    margin-bottom: 25px;
    color: #fff;
    font-size: 28px;
    margin-top: 30px;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 40px;
  }

  .img1 {
    width: 670px;
    margin-right: 30px;
  }

  .row {
    margin-bottom: 30px;
  }

  .text {
    text-align: left;
    .item {
      width: 360px;
      margin-bottom: 15px;
    }

    .label-title {
      padding-left: 15px;
      border-left: 5px solid rgba(77, 77, 77, 0.3);
      font-size: 24px;
      line-height: 1.25;
      color: #005b96;
      margin-bottom: 15px;
    }

    hr {
    }
    p {
      font-size: 16px;
      line-height: 1.44;
      color: #4d4d4d;
    }
  }

  .gold-title {
    font-size: 32px;
    color: #7b8125;
    padding-left: 150px;
    text-align: left;
    margin-bottom: 30px;
  }

  .map {
    width: 465px;
    margin-right: 55px;
  }

  .slide {
    width: 460px;
    height: 360px;

    .slide-img {
      width: 460px;
    }

    .btn-group {
      width: 280px;
      bottom: 10px;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 810px;
    margin: 0 auto;

    .title {
      width: 251px;
      height: 75px;
      background-image: url('./s4_title_bg.png');
      background-size: cover;
      margin-bottom: 25px;
      color: #fff;
      font-size: 21px;
      margin-top: 30px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 40px;
    }

    .img1 {
      width: 495px;
      margin-right: 30px;
    }

    .row {
      margin-bottom: 30px;
    }

    .text {
      text-align: left;
      .item {
        width: 360px;
        margin-bottom: 15px;
      }

      .label-title {
        padding-left: 15px;
        border-left: 5px solid rgba(77, 77, 77, 0.3);
        font-size: 18px;
        line-height: 1.25;
        color: #005b96;
        margin-bottom: 15px;
      }

      hr {
      }
      p {
        font-size: 12px;
        line-height: 1.44;
        color: #4d4d4d;
      }
    }

    .map {
      width: 345px;
      margin-right: 55px;
    }

    .slide {
      width: 340px;
      height: 227px;

      .slide-img {
        width: 340px;
      }

      .btn-group {
        width: 180px;
        bottom: -35px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;

    .title {
      width: 300px;
      height: 90px;
      background-image: url('./s4_title_bg.png');
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

    .img1 {
      width: 100vw;
      margin-right: 0px;
    }

    .row {
      margin-bottom: 10px;
      display: block;
    }

    .text {
      text-align: left;
      margin: 0 auto;
      margin-top: 20px;
      .item {
        width: 230px;
        margin: 0 auto;
        margin-bottom: 15px;
      }

      .label-title {
        padding-left: 16px;
        border-left: 5px solid rgba(77, 77, 77, 0.3);
        font-size: 18px;
        line-height: 1.25;
        color: #005b96;
        margin-bottom: 10px;
      }

      hr {
      }
      p {
        font-size: 14px;
        line-height: 1.44;
        color: #4d4d4d;
      }
    }

    .gold-title {
      padding-left: 30px;
      font-size: 23px;
    }

    .map {
      width: 100vw;
      margin-right: 0px;
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (250 / 375) + 60px);

      .slide-img {
        width: 100vw;
      }

      .btn-group {
        width: 180px;
        bottom: 0px;
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
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s4_item1.png'),
        },
        {
          src: require('./s4_item2.png'),
        },
      ],
    }
  },

  created() {},
}
</script>
