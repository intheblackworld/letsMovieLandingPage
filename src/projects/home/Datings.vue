<template>
  <div class="datings relative">
    <div class="title">最新成功約會</div>
    <swiper
      :options="swiperOption"
      ref="mySwiper"
    >
      <swiper-slide
        v-for="(date, index) in datings"
        :key="date.girl_name + date.boy_name + date.movie_name + date.theater + index"
        class="dating-item"
      >
        <img
          :src="date.img_url"
          alt=""
        >
        <div class="dating-content">
          <p>
            恭喜
            <span class="red"> {{date.girl_name}} </span>與<span class="blue"> {{date.boy_name}} </span><br />
            在<span class="hot"> {{date.meet_time}} </span>成功出去約會<br />
            🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟<br />
            他們觀看的電影是: <span class="hot">{{date.movie_name}}</span><br />
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style lang="scss">
.el-date-table td.current:not(.disabled) span {
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
.datings {
  background: #222126;
  color: #fff;
  min-height: calc(100vw * (710 / 1680));
  padding: 40px 0px 40px 0px;
}

.container {
  width: 100vw;
  margin: 0 auto;
}

.title {
  text-align: left;
  color: #fff;
  border-bottom: 3px solid #af0404;
  padding: 0 15px 5px;
  font-size: 30px;
  display: inline-block;
  margin-bottom: 25px;
}
.dating-item {
  // width: 30%;
  margin: 25px auto;
  background-color: #1d1c26;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 10;

  .dating-content {
    padding: 20px 15px 15px 20px;
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
    border: none
  }

  p {
    line-height: 1.8 !important;
    text-align: left;
  }

  .red {
    color: #db7093;
  }

  .blue {
    color: #87cefa;
  }

  .hot {
    font-weight: bold !important;
    color: rgb(240, 198, 119);
  }
}

.box {
  position: absolute;
  top: 40vh;
  transform: rotate(80deg);
  left: 30vw;
}
.wave {
  top: 0;
  left: 0;
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 10%;
  background: linear-gradient(to left, #c31432, #240b36);
  width: 1500px;
  height: 1300px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 7000ms infinite linear;

  // &.-two {
  //   background: #af0404;
  //   opacity: 0.1;
  //   width: 300vw;
  //   height: 180vw;
  //   animation: drift 10000ms infinite linear;
  // }

  // &.-three {
  //   background: #ff0000;
  //   opacity: 0.05;
  //   width: 1000px;
  //   height: 700px;
  //   animation: drift 13000ms infinite linear;
  // }
}
@keyframes drift {
  from {
    transform: rotate(180deg);
  }
  from {
    transform: rotate(360deg);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
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
import { isMobile } from '@/utils'
import moment from 'moment'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'datings',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      me: '',
      moment: moment,
      fb_id: '',
      swiperOption: {
        slidesPerView: isMobile ? 1.3 : 4,
        centeredSlides: true,
        spaceBetween: isMobile ? 20 : 50,
        slidesPerColumn: 1,
        autoplay: {
          delay: isMobile ? 3000 : 2500,
        },
        loop: true,
      },
      datings: [
        {
          movie_name: '',
          theater: '',
          meet_time: '',
          girl_scores: '',
          boy_scores: '',
          girl_name: '',
          boy_name: '',
        },
        {
          movie_name: '',
          theater: '',
          meet_time: '',
          girl_scores: '',
          boy_scores: '',
          girl_name: '',
          boy_name: '',
        },
        {
          movie_name: '',
          theater: '',
          meet_time: '',
          girl_scores: '',
          boy_scores: '',
          girl_name: '',
          boy_name: '',
        },
        {
          movie_name: '',
          theater: '',
          meet_time: '',
          girl_scores: '',
          boy_scores: '',
          girl_name: '',
          boy_name: '',
        },
        {
          movie_name: '',
          theater: '',
          meet_time: '',
          girl_scores: '',
          boy_scores: '',
          girl_name: '',
          boy_name: '',
        },
      ],
      // interval: '',
    }
  },

  computed: {},
  // destroyed() {
  //   clearInterval(this.interval)
  // },

  mounted() {
    fetch('https://bot-production.letsmovienow.com/api/webview/getDatingData', {
      // fetch('https://9571028eb789.ngrok.io/api/webview/getUserData', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ fb_id: this.fb_id, needImg: true }),
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.err) {
          this.$notify({
            title: res.err,
          })
        } else {
          this.datings = res.data
          this.$refs.mySwiper.swiper.update()
        }
      })
  },

  methods: {
    // closeWebView() {
    //   this.me.requestCloseBrowser(
    //     function success() {},
    //     function error(err) {
    //       console.log(err)
    //     },
    //   )
    // },
  },

  created() {},
}
</script>
