<template>
  <div class="check-detail">
    <el-form class="form" :model="form" :rules="rules" ref="form">
      <div class="form-title">敲定約會細節</div>
      <el-select v-model="city" placeholder="你的地區？">
        <el-option
          v-for="item in ['台北', '桃園', '新竹', '台中', '台南', '高雄']"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
      <el-form-item class="form-item" prop="theater">
        <el-select
          v-model="form.theater"
          filterable
          placeholder="你們要去的電影院是？"
          no-data-text="沒有對應的電影院"
        >
          <el-option v-for="item in theaters[city]" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="form-item" prop="date">
        <el-date-picker
          v-model="form.date"
          placeholder="你們要碰面的日期是？"
          format="yyyy年MM月dd日"
          :editable="false"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </el-form-item>
      <el-form-item class="form-item" prop="time">
        <el-time-select
          v-model="form.time"
          :editable="false"
          :picker-options="{
            start: '12:00',
            step: '00:10',
            end: '22:00',
            minTime,
          }"
          placeholder="你們要碰面的時間？不可選則重選日期"
        ></el-time-select>
        <div class="hint">此為24小時制，有分白天晚上時間</div>
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
  margin-bottom: 25px;
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

.hint {
  text-align: left;
  margin-top: 10px;
  font-weight: bold !important;
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
      city: '台北',
      moment: moment,
      meet_time: '',
      form: {
        theater: '',
        date: '',
        time: '',
        meet_time: '',
        fb_id: '',
      },

      rules: {
        theater: [
          { required: true, message: '請選擇電影院', trigger: 'change' },
        ],
        date: [
          { required: true, message: '請選擇碰面日期', trigger: 'change' },
        ],
        time: [
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
            ) || moment(time).isBefore(moment().subtract(1, 'd'))
          )
        },
      },
    }
  },

  computed: {
    minTime() {
      return moment(this.form.date).isSame(moment(), 'day')
        ? moment()
            .add(3, 'h')
            .format('HH:mm')
        : moment()
            .startOf('day')
            .format('HH:mm')
    },
  },

  mounted() {
    this.form.fb_id = this.$route.query.id
    // window.extAsyncInit = () => {
    //   // the Messenger Extensions JS SDK is done loading
    //   setTimeout(() => {
    //     this.me = MessengerExtensions
    //     MessengerExtensions.getContext(
    //       // '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
    //       '1405269929631051', // Let's Movie 電影約會 BOT ID
    //       thread_context => {
    //         // success
    //         this.form.fb_id = thread_context.psid
    //       },
    //       err => {
    //         this.fb_id = err
    //       },
    //     )
    //   }, 800)
    // }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // 如果選擇的日期是當天
        if (valid) {
          const meet_time =
            moment(this.form.date).format('YYYY-MM-DD') + ' ' + this.form.time
          if (moment(this.form.date).isSame(moment(), 'day')) {
            if (moment(meet_time).isBefore(moment().add(3, 'h'))) {
              this.$notify({
                title: '選擇的時間有誤，請重新選擇時間',
              })
              return
            }
          }
          this.loading = true
          this.form.meet_time = meet_time
          fetch(
            'https://bot-production.letsmovienow.com/api/webview/checkDetail',
            {
              // fetch(`https://0a46f965.ngrok.io/api/webview/checkDetail`, {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify(this.form),
            },
          )
            .then(res => {
              return res.json()
            })
            .then(res => {
              if (res.err) {
                // const h = this.$createElement
                this.$notify({
                  title: res.err,
                })
                this.loading = false
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