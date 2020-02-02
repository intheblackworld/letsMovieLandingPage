<template>
  <div class="check-detail">
    <!-- <input type="submit" value="Submit" id="submitButton" @click="closeWebView" /> -->
    <el-form class="form" :model="form" :rules="rules" ref="form">
      <div class="form-title">敲定約會細節</div>
      <el-form-item class="form-item" prop="theater">
        <el-select
          v-model="form.theater"
          filterable
          placeholder="你們要去的電影院是？"
          no-data-text="沒有對應的電影院"
        >
          <el-option v-for="item in theaters['台北']" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="form-item" prop="meet_time">
        <el-date-picker
          v-model="form.meet_time"
          type="datetime"
          placeholder="你們要碰面的時間是？"
          format="yyyy年 MM月 dd日 HH:mm"
          :editable="false"
          :time-arrow-control="true"
          :picker-options="pickerOptions"
        >></el-date-picker>
      </el-form-item>
      <div class="form-item">
        <el-button type="primary" round @click="submitForm('form')" :loading="loading">確定</el-button>
      </div>
    </el-form>
    <div class="box">
      <div class="wave -one"></div>
      <!-- <div class="wave -two"></div> -->
      <!-- <div class="wave -three"></div> -->
    </div>
    <!-- 敲定約會細節 -->
    <!-- 電影院 -->
    <!-- 碰面時間 -->
    <!-- <form action="/optionspostback" method="get">
      <input type="hidden" name="fb_id" id="fb_id" />
      <h3>Pillows</h3>
      <input type="radio" name="pillows" value="soft" checked />Soft
      <br />
      <input type="radio" name="pillows" value="hard" />Hard
      <br />
      <h3>Bed</h3>
      <input type="radio" name="bed" value="single" checked />Single
      <br />
      <input type="radio" name="bed" value="double" />Double
      <br />
      <input type="radio" name="bed" value="twin" />Twin
      <br />
    </form>-->
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
}
.form-item {
  width: 100%;
  margin: 25px auto;
}
.el-select,
.el-date-editor.el-input {
  width: 100%;
}

.el-button {
  width: 70%;
  border-radius: 999px !important;
  color: #fff;
  font-size: 18px;
  margin-top: 15px;
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
// import Loading from '@/components/Loading.vue'
// import { setTimeout } from 'timers'
import theaters from '@/info/theaters.js'
import moment from 'moment'

export default {
  name: 'checkDetail',
  components: {
    // Loading,
  },

  data() {
    return {
      me: '',
      loading: false,
      theaters,
      form: {
        theater: '',
        meet_time: '',
        fb_id: '',
      },

      rules: {
        theater: [
          { required: true, message: '請選擇電影院', trigger: 'change' },
        ],
        meet_time: [
          { required: true, message: '請選擇碰面時間', trigger: 'change' },
        ],
      },

      pickerOptions: {
        disabledDate(time) {
          return (
            moment(time).isAfter(
              moment()
                .clone()
                .add(14, 'd'),
            ) || moment(time).isBefore(moment())
          )
        },
      },
    }
  },

  mounted() {
    window.extAsyncInit = () => {
      // the Messenger Extensions JS SDK is done loading
      this.me = MessengerExtensions
      MessengerExtensions.getContext(
        '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
        // '1405269929631051', // Let's Movie 電影約會 BOT ID
        thread_context => {
          // success
          this.form.fb_id = thread_context.psid
          // More code to follow
        },
        err => {
          this.fb_id = err
        },
      )
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          fetch(`https://0a46f965.ngrok.io/api/webview/checkDetail`, {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(this.form),
          }).then(res => {
            return res.json()
          }).then(res => {
            console.log(res)
            if (res.err) {
              // const h = this.$createElement
              this.$notify({
                title: res.err,
              })
              this.loading = false
              this.closeWebView()
            } else {
              this.loading = false
              this.closeWebView()
            }
          })
        } else {
          console.log('error submit!!')

          return false
        }
      })
    },
    closeWebView() {
      this.me.requestCloseBrowser(
        function success() {
          console.log(2)
        },
        function error(err) {
          console.log(err)
        },
      )
    },
  },

  created() {},
}
</script>