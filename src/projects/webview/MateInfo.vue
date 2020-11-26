<template>
  <div class="check-detail">
    <!-- <input type="submit" value="Submit" id="submitButton" @click="closeWebView" /> -->
    <el-form class="form" :model="form" ref="form">
      <div class="form-title">對方個人資訊</div>
      <el-form-item label="暱稱" class="form-item" prop="nickname">
      </el-form-item>
      <div class="info">{{form.nickname}}</div>
      <el-form-item label="主要活動地區" class="form-item" prop="address">
      </el-form-item>
      <div class="info">{{form.address}}</div>

      <el-form-item label="個人特質" class="form-item" prop="personality">
      </el-form-item>
      <div class="info">{{form.personality}}</div>

      <el-form-item label="興趣" class="form-item" prop="habbit">
      </el-form-item>
      <div class="info">{{form.habbit}}</div>
      <el-form-item label="職業" class="form-item" prop="job">
      </el-form-item>
      <div class="info">{{form.job}}</div>
      <div class="flex-ac flex-jb mt-40 mb-20">
        <div class="intro-title">
          關於我
        </div>
      </div>
      <div v-if="fb_id">
        <div class="intro-content mb-20" v-if="!form.intro">
          <div v-html="defaultIntro"></div>

        </div>
        <div class="intro-content mb-20" v-else>
          <div v-html="form.intro"></div>
        </div>
      </div>
      <strong class="hint">如果沒有資料請重開網頁</strong>
    </el-form>
    <!-- <div class="box">
      <div class="wave -one"></div>
      <div class="wave -two"></div>
      <div class="wave -three"></div>
    </div>-->
  </div>
</template>
<style lang="scss">
.el-date-table td.current:not(.disabled) span {
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
.check-detail {
  background: linear-gradient(to bottom, #000, #222, #252525);
  color: #fff;
  min-height: 100vh;

  &::v-deep {
    .el-form-item__label {
      font-weight: bold !important;
      font-size: 16px;
    }

    .form-item {
      width: 100%;
      margin: 20px auto 5px;
    }
  }
}

.info {
  text-align: left;
}
.form {
  padding: 40px 20px 40px 20px;
}

.form-title {
  text-align: left;
  color: #fff;
  border-left: 3px solid #af0404;
  padding-left: 15px;
  font-size: 30px;
  margin-bottom: 25px;
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

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #000, #222, #252525);
  overflow: scroll;
}

.dialog-title {
  color: #fff;
}

.intro-btn {
  border: 1px solid;
}

.intro-title {
  text-align: left;
  font-weight: bold !important;
}

.intro-link {
  color: #fff;
  padding: 2px 15px;
  border-radius: 3px;
  background-color: #c31432;
}

.intro-content {
  width: 100%;
  text-align: left;
}

.hint {
  color: #999;
}

.dialog-title {
  text-align: left;
  color: #fff;
  border-left: 3px solid #af0404;
  padding-left: 15px;
  font-size: 24px;
  margin-bottom: 15px;
}

.dialog-subtitle {
  font-size: 14px;
  color: #ccc;
  text-align: left;
  margin-bottom: 25px;
}

.intro-q {
  color: #fff;
  text-align: left;
  font-size: 15px;
  font-weight: bold !important;
  margin-bottom: 15px;
}

.intro-s {
  margin-top: 10px;
  margin-bottom: 25px;
  text-align: left;
  .el-radio {
    margin-right: 0;
    margin-bottom: 5px;
  }
  &::v-deep .el-radio__label {
    white-space: normal;
  }
}

.intro-select-btns {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  .intro-btn {
    flex: 1;
    border: none;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
    &:nth-child(1) {
      border-left: 1px solid #999;
    }
    // &:nth-last-child(1) {
    //   border-right: 1px solid #ccc;
    // }
  }
}

span.label {
  color: #777;
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
  name: 'mateInfo',
  components: {
    // Loading,
  },

  data() {
    return {
      me: '',
      loading: false,
      city: '台北',
      moment: moment,
      fb_id: '',
      form: {
        fb_id: '',
        gender: '',
        nickname: '',
        address: '',
        personality: '',
        habbit: '',
        job: '',
      },

      defaultIntro: `
        我喜歡交朋友，與人相處和樂；但有時也希望有自己獨處的空間<br />
        有點隨和，善解人意。喜歡觀察和了解人<br />
        不過平常沒什麼機會認識不同環境的人<br />
        所以想要在這個平台上找一個一起看電影的夥伴<br />
      `,

      interval: '',
    }
  },

  computed: {},
  destroyed() {
    // clearInterval(this.interval)
  },

  mounted() {
    this.fb_id = this.$route.query.id
    // More code to follow
    fetch('https://bot-production.letsmovienow.com/api/webview/getMateData', {
      // fetch(`https://009e367078af.ngrok.io/api/webview/getUserData`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ fb_id: this.fb_id }),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res.err) {
          // const h = this.$createElement
          this.$notify({
            title: res.err,
          })
        } else {
          // console.log(res.data)
          this.form = res.data
        }
      })
    // window.extAsyncInit = () => {
    // this.interval = setInterval(() => {
    //   if (!this.fb_id) {
    //     // the Messenger Extensions JS SDK is done loading
    //     this.me = MessengerExtensions
    //     MessengerExtensions.getContext(
    //       // '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
    //       '1405269929631051', // Let's Movie 電影約會 BOT ID
    //       thread_context => {
    //         // success
    //         this.fb_id = thread_context.psid
    //         // More code to follow
    //         fetch(
    //           'https://bot-production.letsmovienow.com/api/webview/getMateData',
    //           {
    //             // fetch(`https://009e367078af.ngrok.io/api/webview/getUserData`, {
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             method: 'POST',
    //             body: JSON.stringify({ fb_id: this.fb_id }),
    //           },
    //         )
    //           .then(res => {
    //             return res.json()
    //           })
    //           .then(res => {
    //             if (res.err) {
    //               // const h = this.$createElement
    //               this.$notify({
    //                 title: res.err,
    //               })
    //             } else {
    //               // console.log(res.data)
    //               this.form = res.data
    //             }
    //           })
    //       },
    //       err => {
    //         console.log(err)
    //         this.fb_id = ''
    //       },
    //     )
    //   }
    // }, 2000)

    // setTimeout(() => {
    //   clearInterval(this.interval)
    // }, 1000 * 30)
  },

  methods: {
    closeWebView() {
      this.me.requestCloseBrowser(
        function success() {},
        function error(err) {
          console.log(err)
        },
      )
    },
  },

  created() {},
}
</script>
