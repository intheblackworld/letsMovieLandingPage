<template>
  <div class="datings relative">
    <div class="title">最新成功約會</div>
    <div class="animate-slide">
      <div v-for="(date, index) in datings" :key="date.girl_name + date.boy_name + date.movie_name + date.theater + index" class="dating-item">
        <div class="dating-inner">
          <img :src="date.img_url" alt="">
          <div class="dating-content">
            <p>
              恭喜
              <span class="red"> {{date.girl_name}} </span>與<span class="blue"> {{date.boy_name}} </span><br />
              在<span class="hot"> {{date.meet_time}} </span>成功出去約會<br />
              🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟<br />
              他們觀看的電影是: <span class="hot">{{date.movie_name}}</span><br />
            </p>
          </div>
        </div>
      </div>
      <div v-for="(date, index) in datings" :key="date.girl_name + date.boy_name + date.movie_name + date.theater + index" class="dating-item">
        <div class="dating-inner">
          <img :src="date.img_url" alt="">
          <div class="dating-content">
            <p>
              恭喜
              <span class="red"> {{date.girl_name}} </span>與<span class="blue"> {{date.boy_name}} </span><br />
              在<span class="hot"> {{date.meet_time}} </span>成功出去約會<br />
              🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟<br />
              他們觀看的電影是: <span class="hot">{{date.movie_name}}</span><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.datings {
  background: #222126;
  color: #fff;
  min-height: calc(100vw * (710 / 1680));
  padding: 40px 0px 40px 0px;
}

.container {
  width: auto;
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
  width: 25vw;
  padding: 25px;
  position: relative;
  z-index: 10;
  .dating-inner {
    border-radius: 10px;
    overflow: hidden;
    background-color: #1d1c26;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.8);
  }
  .dating-content {
    padding: 20px 15px 15px 20px;
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
    background-color: #1d1c26;
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

.animate-slide {
  display: flex;
  position: absolute;
  z-index: 4;
  left: 0;
  animation: moving 80s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes moving {
  0% {
    transform: translateX(0vw);
  }

  100% {
    transform: translateX(-250vw);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .datings {
    background: #222126;
    color: #fff;
    min-height: calc(100vw * (720 / 375));
    padding: 40px 0px 40px 0px;
  }

  .dating-item {
    width: 100vw;
  }

  .animate-slide {
    display: flex;
    position: absolute;
    z-index: 4;
    left: 0;
    animation: moving 160s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes moving {
    0% {
      transform: translateX(0vw);
    }

    100% {
      transform: translateX(-2000vw);
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
import { isMobile } from '@/utils'
import moment from 'moment'

export default {
  name: 'datings',

  data() {
    return {
      me: '',
      moment: moment,
      fb_id: '',
      datings: [
        {
          girl_name: '***',
          boy_name: '***',
          movie_name: '***',
          theater: '***',
          img_url: '***',
          meet_time: '***',
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
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res.err) {
          this.$notify({
            title: res.err,
          })
        } else {
          this.datings = res.data.filter((date) => !!date)
          console.log(this.datings)
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
