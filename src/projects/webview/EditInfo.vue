<template>
  <div class="check-detail">
    <!-- <input type="submit" value="Submit" id="submitButton" @click="closeWebView" /> -->
    <el-form class="form" :model="form" :rules="rules" ref="form">
      <div class="form-title">您的個人資訊</div>
      <!-- 暱稱 -->
      <!-- 主要活動地區(根據地區配對約會) -->
      <!-- 特質 -->
      <!-- 興趣(限十個字) -->
      <!-- 職業 -->
      <el-form-item label="暱稱" class="form-item" prop="nickname">
        <el-input v-model="form.nickname" placeholder="请输入暱稱"></el-input>
      </el-form-item>

      <el-form-item label="主要活動地區" class="form-item" prop="address">
        <el-select v-model="form.address" placeholder="你的地區">
          <el-option
            v-for="item in ['台北', '桃園', '新竹', '台中', '台南', '高雄']"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="個人特質" class="form-item" prop="address">
        <el-select v-model="form.personality" placeholder="你的個人特質">
          <el-option v-for="item in personalityList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="興趣" class="form-item" prop="habbit">
        <el-input v-model="form.habbit" placeholder="你的興趣 - 限十個字"></el-input>
      </el-form-item>
      <el-form-item label="職業" class="form-item" prop="job">
        <el-input v-model="form.job" placeholder="你的職業 - 限十個字"></el-input>
      </el-form-item>
      <div class="form-item">
        <el-button type="primary" round @click="submitForm('form')" :loading="loading">確定</el-button>
      </div>
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
  name: 'editInfo',
  components: {
    // Loading,
  },

  data() {
    return {
      me: '',
      loading: false,
      city: '台北',
      moment: moment,
      theaters,
      meet_time: '',
      form: {
        gender: '0',
        nickname: '',
        address: '',
        personality: '',
        habbit: '',
        job: '',
      },

      rules: {
        nickname: [
          { required: true, message: '請輸入暱稱', trigger: 'blur' },
          { max: 10, message: '最多十個字', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '請選擇主要活動地區', trigger: 'change' },
        ],
        personality: [
          { required: true, message: '請選擇個人特質', trigger: 'change' },
        ],
        habbit: [
          { required: true, message: '請輸入興趣', trigger: 'blur' },
          { max: 10, message: '最多十個字', trigger: 'blur' },
        ],
        job: [
          { required: true, message: '請輸入職業', trigger: 'blur' },
          { max: 10, message: '最多十個字', trigger: 'blur' },
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
    personalityList() {
      return this.form.gender == '0'
        ? [
            '斯文清秀',
            '帥氣穿搭',
            '幽默風趣',
            '才華洋溢',
            '認真上進',
            '善良正直',
          ]
        : [
            '活潑可愛',
            '氣質有禮',
            '聰明動人',
            '善解人意',
            '多才多藝',
            '溫柔善良',
          ]
    },
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
    window.extAsyncInit = () => {
      // the Messenger Extensions JS SDK is done loading
      setTimeout(() => {
        this.me = MessengerExtensions
        MessengerExtensions.getContext(
          // '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
          '1405269929631051', // Let's Movie 電影約會 BOT ID
          thread_context => {
            // success
            this.form.fb_id = thread_context.psid
            // More code to follow

            fetch(
              'https://bot-production.letsmovienow.com/api/webview/getUserData',
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
                } else {
                  this.meet_time = res.data.meet_time
                }
              })
          },
          err => {
            this.fb_id = err
          },
        )
      }, 800)
    }
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