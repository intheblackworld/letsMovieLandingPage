<template>
  <div class="datings">
    <div class="title">最新成功約會</div>
    <div
      class="dating-item"
      v-for="date in datings"
      :key="date.girl_name + date.boy_name + date.movie_name + date.theater"
    >
      <p>
        恭喜
        <span class="red"> {{date.girl_name}} </span>與<span class="blue"> {{date.boy_name}} </span><br />
        在<span class="hot"> {{date.meet_time}} </span>成功出去約會<br />
        🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟<br />
        他們觀看的電影是: <span class="hot">{{date.movie_name}}</span><br />
      </p>
      <!-- <div class="row">
        <div class="label">觀看電影</div>
        <div class="value">{{date.movie_nae}}</div>
      </div>
      <div class="row">
        <div class="label">男生評價</div>
        <div class="value">{{date.boy_scores}}</div>
      </div>
      <div class="row">
        <div class="label">女生評價</div>
        <div class="value">{{date.girl_scores}}</div>
      </div>
      <div class="row">
        <div class="label">觀看電影</div>
        <div class="value">{{date.movie_nae}}</div>
      </div>
      "movie_name": "非常母親",
      "theater": "信義威秀影城",
      "meet_time": "2020-06-22",
      "girl_scores": "5",
      "boy_scores": "4",
      "girl_name": "魯*******",
      "boy_name": "林*******" -->
    </div>
    <!-- <div class="box">
      <div class="wave -one"></div>
      <div class="wave -two"></div>
      <div class="wave -three"></div>
    </div> -->
  </div>
</template>
<style lang="scss">
.el-date-table td.current:not(.disabled) span {
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
.datings {
  background: linear-gradient(to bottom, #000, #222, #252525);
  color: #fff;
  min-height: 100vh;
  padding: 40px 20px 40px 20px;
}

.title {
  text-align: left;
  color: #fff;
  border-left: 3px solid #af0404;
  padding-left: 15px;
  font-size: 30px;
  margin-bottom: 25px;
}
.dating-item {
  width: 100%;
  margin: 25px auto;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 15px 15px 50px;
  border-radius: 10px;
  position: relative;
  z-index: 10;

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
  position: fixed;
  top: 40vh;
  transform: rotate(80deg);
  left: 30vw;
}
.wave {
  position: fixed;
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
import moment from 'moment'

export default {
  name: 'datings',
  components: {
    // Loading,
  },

  data() {
    return {
      me: '',
      loading: false,
      moment: moment,
      fb_id: '',
      datings: [],
      interval: '',
    }
  },

  computed: {},
  destroyed() {
    clearInterval(this.interval)
  },

  mounted() {
    fetch('https://bot-production.letsmovienow.com/api/webview/getDatingData', {
      // fetch('https://165d54a196b7.ngrok.io/api/webview/getUserData', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ fb_id: this.fb_id }),
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.err) {
          // const h = this.$createElement
          this.$notify({
            title: res.err,
          })
        } else {
          // console.log(res.data)
          this.datings = res.data
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