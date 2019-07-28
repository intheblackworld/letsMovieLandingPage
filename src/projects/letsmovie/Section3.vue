<template>
  <div class="section3 fullscreen bg-cover">
    <div class="fullscreen mask flex-c">
      <div class="container flex-ja wrap">
        <div class="content flex-c">
          <div>
            <p v-scroll-reveal.reset="$fadeInUp()" class="title mb-20">配對流程</p>
            <p class="sub-title" v-scroll-reveal.reset="$fadeInUp(300)">
              我們在背後用了超級複雜的技術
              <br />只為了讓你有最好的交友體驗
              <br />
            </p>
            <div v-scroll-reveal.reset="$fadeInUp(500)" v-if="!isMobile">
              <div class="btn border flex-c">現在就開始配對</div>
            </div>
          </div>
        </div>
        <div class="content" v-scroll-reveal.reset="$fadeInUp(300)">
          <div class="slide bg-cover">
            <div class="flex-ac flex-jb dot-group">
              <div
                class="dot"
                v-for="(slide, index) in slideList"
                :key="slide"
                @click="setSlide(index)"
              ></div>
            </div>
          </div>
          <p class="desc">{{slideList[slideIndex]}}</p>
          <div v-scroll-reveal.reset="$fadeInUp(500)" v-if="isMobile">
            <div class="btn border flex-c show-in-mobile">現在就開始配對</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img v-scroll-reveal.reset="$fadeIn()" src="./s3_bg.png" alt="心天畝的圖片" class="bg" /> -->
  </div>
</template>
<style lang="scss" scoped>
.section3 {
  position: relative;
  background-color: #000;
  background-image: url('./s3_bg.png');
  background-attachment: fixed;
}

.mask {
  background: rgba(0, 0, 0, 0.7);
}

.container {
  width: 980px;
  margin: 0 auto;
}

.content {
  width: 50%;
}

.row {
  align-items: center;
  position: relative;
  z-index: 1;
}

.title {
  margin-bottom: 10px;
  color: #fff;
  font-size: 36px;
}

.sub-title {
  font-size: 24px;
  color: #eee;
  letter-spacing: 2px !important;
  line-height: 1.3 !important;
  margin-bottom: 50px;
  text-align: left;
}

.slide {
  width: 220px;
  height: 420px;
  margin: 0 auto;
  margin-bottom: 40px;
  background-image: url('./s3_phone.png');
  position: relative;

  .dot-group {
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -35px;
    width: 120px;
    margin: 0 auto;

    div {
      background: #bb926d;
      width: 12px;
      height: 12px;
      border-radius: 999px;
    }
  }
}

.desc {
  color: #fff;
  font-size: 18px;
  margin-bottom: 40px;
}

.btn {
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    padding: 0 10px;
    margin: 0 auto;
  }

  .content {
    width: 100%;
  }

  .row {
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .title {
    display: none;
  }

  .sub-title {
    font-size: 16px;
    color: #eee;
    letter-spacing: 2px !important;
    line-height: 1.3 !important;
    margin-bottom: 20px;
    text-align: left;
  }

  .slide {
    width: 150px;
    height: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
    background-image: url('./s3_phone.png');
    position: relative;

    .dot-group {
      display: none;

      div {
        background: #bb926d;
        width: 12px;
        height: 12px;
        border-radius: 999px;
      }
    }
  }

  .desc {
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .btn {
    margin: 0 auto;
    font-size: 15px;
    color: #fff;
    display: none;

    &.show-in-mobile {
      display: flex;
      height: 45px;
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
import slider from '@/mixins/slider.js'
// @ is an alias to /src
export default {
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      isMobile,

      slideList: [
        '1. 加入我們的 FB Bot',
        '2. 根據我們給出的選項，填寫你的個人資料',
        '3. 女生填寫自己想要的時段，以及電影',
        '4. 男生則可以選擇我們推薦配對成功率高的時段',
        '5. 配對成功後，喬好電影跟電影院，就可以準備約會了！',
      ],
    }
  },

  created() {
    setInterval(() => {
      this.addIndex()
    }, 2500)
  },

  methods: {
    setSlide(index) {
      this.slideIndex = index
    },
  },
}
</script>
