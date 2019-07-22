<template>
  <div class="section3">
    <div class="container">
      <p v-scroll-reveal.reset="$fadeInUp()" class="title flex-c mb-20">配對流程</p>
      <p class="sub-title">
        我們在背後用了超級複雜的技術
        <br />只為了讓你有最好的交友體驗
        <br />
      </p>
      <p>
        1. 加入我們的 Line Bot
        2. 根據我們給出的選項，填寫你的個人資料
        3. 女生填寫自己想要的時段，以及電影
        4. 男生則可以選擇我們推薦配對成功率高的時段
        5. 配對成功後，喬好電影跟電影院，就可以準備約會了！
      </p>
      <div class="btn border flex-c">現在就開始配對</div>
    </div>
    <!-- <img v-scroll-reveal.reset="$fadeIn()" src="./s3_bg.png" alt="心天畝的圖片" class="bg" /> -->
  </div>
</template>
<style lang="scss" scoped>
.section3 {
  position: relative;
}
.container {
  width: 980px;
  margin: 0 auto;

  .bg {
    width: 60%;
    position: absolute;
    display: block;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.41;
  }

  .row {
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .img1 {
    width: 367px;
    margin-left: 70px;
  }

  .img2 {
    width: 530px;
    margin-right: 70px;
  }

  .img3 {
    width: 583px;
    margin-left: 45px;
  }

  .text {
    text-align: left;
  }

  .title {
    width: 340px;
    height: 101px;
    background-image: url('./s3_title_bg.png');
    background-size: cover;
    margin-bottom: 30px;
    color: #fff;
    font-size: 28px;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 10px;
  }

  .small-title {
    font-size: 24px;
    color: #2b466f;
    margin-bottom: 50px;
  }

  .special-title {
    font-size: 32px;
    color: #7b8125;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 1px solid #4d4d4d;

    &.no-border {
      border: none;
    }
  }

  .label-title {
    font-size: 24px;
    color: #005b96;
    padding-left: 10px;
    border-left: 10px solid #999;
  }

  .desc {
    font-size: 16px;
    line-height: 1.25;
    color: #4d4d4d;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 724px;
    margin: 0 auto;

    .bg {
      width: 60%;
      position: absolute;
      display: block;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.41;
    }

    .row {
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .img1 {
      width: 271px;
      margin-left: 55px;
    }

    .img2 {
      width: 390px;
      margin-right: 70px;
    }

    .img3 {
      width: 430px;
      margin-left: 45px;
    }

    .text {
      text-align: left;
    }

    .title {
      width: 250px;
      height: 75px;
      background-image: url('./s3_title_bg.png');
      background-size: cover;
      margin-bottom: 20px;
      color: #fff;
      font-size: 20px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 10px;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 50px;
    }

    .special-title {
      font-size: 24px;
      color: #7b8125;
      display: inline-block;
      padding-bottom: 10px;
      border-bottom: 1px solid #4d4d4d;

      &.no-border {
        border: none;
      }
    }

    .label-title {
      font-size: 17px;
      color: #005b96;
      padding-left: 10px;
      border-left: 6px solid #999;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 12px;
      line-height: 1.25;
      color: #4d4d4d;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100%;
    margin: 0 auto;

    .bg {
      width: 60%;
      position: absolute;
      display: block;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.41;
    }

    .row {
      align-items: center;
      position: relative;
      z-index: 1;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .img1 {
      width: 217px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .img2 {
      width: 390px;
      margin-right: 0px;
    }

    .img3 {
      width: 430px;
      margin-left: 45px;
    }

    .text {
      text-align: center;
    }

    .title {
      width: 300px;
      height: 90px;
      margin: 0 auto;
      margin-top: 20px;
      background-image: url('./s3_title_bg.png');
      background-size: cover;
      margin-bottom: 20px;
      color: #fff;
      font-size: 32px;
    }

    .sub-title {
      font-size: 21px;
      color: #2b466f;
      margin-bottom: 10px;
      margin-left: 0;
    }

    .small-title {
      font-size: 18px;
      color: #2b466f;
      margin-bottom: 0px;
      margin-left: 0;
    }

    .special-title {
      font-size: 24px;
      color: #7b8125;
      display: inline-block;
      padding-bottom: 10px;
      border-bottom: 1px solid #4d4d4d;
      margin-bottom: 10px;
      margin-top: 30px;
      margin-left: 0;

      &.no-border {
        border: none;
      }
    }

    .label-title {
      font-size: 17px;
      color: #005b96;
      padding-left: 10px;
      border-left: 6px solid #999;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 12px;
      line-height: 1.25;
      color: #4d4d4d;
      margin-left: 0;
      margin-bottom: 20px;
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
import { isMobile } from '@/utils'
// @ is an alias to /src
export default {
  name: 'section3',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
