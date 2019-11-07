<template>
  <div class="section3 fullscreen bg-cover">
    <div class="fullscreen mask flex-c">
      <div class="container flex-ja wrap">
        <div class="content flex-c">
          <div>
            <p
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="0"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
              class="title mb-20"
            >配對流程</p>
            <p
              class="sub-title"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              我們在背後用了超級複雜的技術
              <br />只為了讓你有最好的交友體驗
              <br />
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="0"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
              class="title mb-20"
            >服務費用</p>
            <p
              class="sub-title"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              配對成功後<br />
              男生收取媒合費 500 元
              <br />女生則<span class="pink">完全免費</span>
            </p>

            <div
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
              v-if="!isMobile"
            >
              <a
                class="btn border flex-c"
                target="_blank"
                href="https://m.me/108301937223847"
              >現在就開始配對</a>
              <!-- <div class="btn flex-c">體驗配對</div> -->
            </div>
          </div>
        </div>
        <div
          class="content"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="slide bg-cover">
            <img src="./s3_phone.png" alt class="absolute-c phone-frame" />
            <img
              :src="slide.src"
              alt
              v-for="(slide, index) in slideList"
              :key="`img-${index}-${slide.src}`"
              :class="`slide-img absolute-c ${slideIndex === index ? 'active' : ''}`"
            />
            <div class="flex-ac flex-jb dot-group">
              <div
                class="dot"
                v-for="(slide, index) in slideList"
                :key="index"
                @click="setSlide(index)"
              ></div>
            </div>
          </div>
          <p class="desc">{{slideList[slideIndex].title}}</p>
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="500"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
            v-if="isMobile"
          >
            <div class="btn border flex-c show-in-mobile">現在就開始配對</div>
          </div>
        </div>
      </div>
    </div>
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

a {
  text-decoration: none;
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

.pink {
  color: #db7093;
}

.title {
  margin-bottom: 10px;
  color: #fff;
  font-size: 36px;
  text-align: left;
}

.sub-title {
  font-size: 20px;
  color: #eee;
  letter-spacing: 2px !important;
  line-height: 1.5 !important;
  margin-bottom: 50px;
  text-align: left;
}

.slide {
  width: 220px;
  height: 420px;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;

  .phone-frame {
    width: 220px;
    height: 420px;
    z-index: 1;
  }

  .slide-img {
    width: 185px;
    height: 390px;
  }

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
  white-space: nowrap;
}

.btn {
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 25px;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    background-image: url('./s3_bg_m.png');
    background-attachment: scroll;
  }

  .fullscreen {
    height: auto;
  }
  .container {
    width: 100vw;
    padding: 30px 10px;
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

    img {
      width: 100%;
    }

    .phone-frame, .slide-img {
      width: 100%;
      height: auto;
    }

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
        {
          title: '1. 加入我們的 FB Bot',
          src: require('./s3_img_2.png'),
        },
        {
          title: '2. 根據我們給出的選項，填寫你的個人資料',
          src: require('./s3_img_2.png'),
        },
        {
          title: '3. 女生填寫自己想要的時段，以及電影',
          src: require('./s3_img_3.png'),
        },
        {
          title: '4. 男生則可以選擇我們推薦配對成功率高的時段',
          src: require('./s3_img_4.png'),
        },
        {
          title: '5. 配對成功後，喬好電影院跟詳細時間，就可以準備約會了！',
          src: require('./s3_img_5.png'),
        },
      ],
    }
  },

  created() {
    setInterval(() => {
      this.addIndex()
    }, 3500)
  },

  methods: {
    setSlide(index) {
      this.slideIndex = index
    },
  },
}
</script>
