/* eslint-disable indent */
<template>
  <div class="check-detail">
    <!-- <input type="submit" value="Submit" id="submitButton" @click="closeWebView" /> -->
    <el-form
      class="form"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <div class="form-title">修改個人資訊</div>
      <el-form-item
        label="暱稱"
        class="form-item"
        prop="nickname"
      >
        <el-input
          v-model="form.nickname"
          placeholder="請輸入暱稱"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="主要活動地區"
        class="form-item"
        prop="address"
      >
        <el-select
          v-model="form.address"
          placeholder="你的地區"
        >
          <el-option
            v-for="item in ['台北', '桃園', '新竹', '台中', '台南', '高雄']"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="個人特質"
        class="form-item"
        prop="personality"
      >
        <el-select
          v-model="form.personality"
          placeholder="你的個人特質"
        >
          <el-option
            v-for="item in personalityList"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="興趣 - 限十個字"
        class="form-item"
        prop="habbit"
      >
        <el-input
          v-model="form.habbit"
          placeholder="你的興趣 - 限十個字"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="職業 - 限十個字"
        class="form-item"
        prop="job"
      >
        <el-input
          v-model="form.job"
          placeholder="你的職業 - 限十個字"
        ></el-input>
      </el-form-item>
      <div v-if="form.gender == 0">
        <div class="flex-ac flex-jb mt-40 mb-20">
          <div class="intro-title">
            關於你
          </div>

          <div
            class="intro-link"
            @click="isIntroDialog = true"
          >
            編輯自介
          </div>
        </div>
        <div
          class="intro-content mb-20"
          v-if="!form.intro"
        >
          <span class="label">預設自介</span><br />
          <div v-html="defaultIntro"></div>
        </div>
        <div
          class="intro-content mb-20"
          v-else
        >
          <div v-html="form.intro"></div>
        </div>
      </div>
      <strong class="hint">如果沒有舊資料請重開網頁</strong>
      <div
        class="dialog"
        v-if="isIntroDialog"
      >
        <div class="form">
          <div class="dialog-title">想問幾個關於你的問題</div>
          <div class="dialog-subtitle">你的自介會在作答完之後自動產生</div>
          <div class="intro-q">
            你喜歡與人交談或者樂於傾聽？
          </div>
          <!-- 1 -->
          <div class="intro-s">
            <div class="intro-select-btns">
              <div
                :class="`intro-btn flex-c ${introForm.q1 === 0 ? 'active' : ''}`"
                @click="introForm.q1 = 0"
              >與人交談</div>
              <div
                :class="`intro-btn flex-c ${introForm.q1 === 1 ? 'active' : ''}`"
                @click="introForm.q1 = 1"
              >樂於傾聽</div>
              <div
                :class="`intro-btn flex-c ${introForm.q1 === 2 ? 'active' : ''}`"
                @click="introForm.q1 = 2"
              >兩者皆是</div>
            </div>
          </div>
          <!-- 2 -->
          <div class="intro-q">
            從下面兩類描述的類別中選擇比較符合你的
          </div>
          <div class="intro-s">
            <div class="intro-select-btns">
              <div
                :class="`intro-btn flex-c ${introForm.q2 === 0 ? 'active' : ''}`"
                @click="introForm.q2 = 0"
              >熱情、堅強、外向</div>
              <div
                :class="`intro-btn flex-c ${introForm.q2 === 1 ? 'active' : ''}`"
                @click="introForm.q2 = 1"
              >沈穩、細心、內向</div>
            </div>
          </div>
          <!-- 3 -->
          <div class="intro-q">
            從下列項目中選擇一項你最想實現的事
          </div>
          <div class="intro-s">
            <el-radio
              v-model="introForm.q3"
              :label="0"
            >和你的伴侶在冰天雪地中看著極光</el-radio>
            <el-radio
              v-model="introForm.q3"
              :label="1"
            >說走就走，背一個背包，環遊世界</el-radio>
            <el-radio
              v-model="introForm.q3"
              :label="2"
            >擁有一棟房子，房子裡住著我愛的人跟愛我的人</el-radio>
            <el-radio
              v-model="introForm.q3"
              :label="3"
            >成為某個領域中的專家，受人尊重，很多人都知道你，喜歡你，需要你的意見</el-radio>
          </div>
          <!-- 4 -->
          <div class="intro-q">
            下面五句話，你對哪一句最有感？
          </div>
          <div class="intro-s">
            <el-radio
              v-model="introForm.q4"
              :label="0"
            >關心自己的靈魂，從來不早，也不會晚</el-radio>
            <el-radio
              v-model="introForm.q4"
              :label="1"
            >再煩，也別忘微笑；再急，也要注意語氣；再苦，也別忘堅持；再累，也要愛自己</el-radio>
            <el-radio
              v-model="introForm.q4"
              :label="2"
            >每一天都沒把握，所以我只能把握好每一天</el-radio>
            <el-radio
              v-model="introForm.q4"
              :label="3"
            >生活不一定是一直美好的，但是那些掙扎可以讓你變得更堅強</el-radio>
            <el-radio
              v-model="introForm.q4"
              :label="4"
            >凡是挫折都是禮物，唯有正確價值觀才能打開</el-radio>
          </div>

          <!-- 5 -->
          <div class="intro-q">
            選擇一個最能代表你的動物
          </div>
          <div class="intro-s">
            <el-radio-group
              v-model="introForm.q5"
              size="mini"
            >
              <el-radio-button :label="0">狗</el-radio-button>
              <el-radio-button :label="1">貓</el-radio-button>
              <el-radio-button :label="2">老鷹</el-radio-button>
              <el-radio-button :label="3">馬</el-radio-button>
              <el-radio-button :label="4">無尾熊</el-radio-button>
              <el-radio-button :label="5">狐狸</el-radio-button>
            </el-radio-group>
          </div>

          <el-button
            type="primary"
            round
            @click="generateIntro"
            class="submit"
          >產生自介</el-button>
        </div>
      </div>
      <div class="form-item">
        <el-button
          type="primary"
          round
          @click="submitForm('form')"
          :loading="loading"
          class="submit"
        >確認</el-button>
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
</style>
<style lang="scss" scoped>
.check-detail {
  background: linear-gradient(to bottom, #000, #222, #252525);
  color: #fff;
  min-height: 100vh;

  &::v-deep {
    .el-date-table td.current:not(.disabled) span {
      color: #fff !important;
    }
    .el-radio__input.is-checked + .el-radio__label {
      font-weight: bold !important;
    }

    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      color: #fff !important;
    }
  }
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

.submit {
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
    // border-top: 1px solid #999;
    // border-bottom: 1px solid #999;
    // border-right: 1px solid #999;
    &:nth-child(1) {
      // border-left: 1px solid #999;
    }

    &.active {
      background-color: #ce0f3d;
      color: #fff;
      border-color: #ce0f3d;
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
import _ from 'lodash'

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
      isIntroDialog: false,
      fb_id: '',
      form: {
        fb_id: '',
        gender: '',
        nickname: '',
        address: '',
        personality: '',
        habbit: '',
        job: '',
        intro: '',
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
      defaultIntro: `
        我喜歡交朋友，與人相處和樂；但有時也希望有自己獨處的空間<br />
        有點隨和，善解人意。喜歡觀察和了解人<br />
        不過平常沒什麼機會認識不同環境的人<br />
        所以想要在這個平台上找一個一起看電影的夥伴<br />
      `,
      introForm: {
        q1: 0, // 你喜歡與人交談或者善於傾聽？
        q2: 0, // 從下面兩類描述的關鍵字類別中選擇最符合你的一類
        q3: 0, // 從下列項目中選擇一項你最想實現的事
        q4: 0, // 下面五句話，你對哪一句最有感？
        q5: 0, // 選擇一個最能代表你的動物
      },

      interval: '',
    }
  },

  computed: {
    personalityList() {
      return this.form.gender === '0'
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
  },
  destroyed() {
    clearInterval(this.interval)
  },

  mounted() {
    // window.extAsyncInit = () => {
    this.interval = setInterval(() => {
      if (!this.fb_id) {
        // the Messenger Extensions JS SDK is done loading
        this.me = MessengerExtensions
        MessengerExtensions.getContext(
          // '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
          '1405269929631051', // Let's Movie 電影約會 BOT ID
          thread_context => {
            // success
            this.fb_id = thread_context.psid
            // More code to follow
            fetch(
              'https://bot-production.letsmovienow.com/api/webview/getUserData',
              {
                // fetch(`https://009e367078af.ngrok.io/api/webview/getUserData`, {
                headers: {
                  'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ fb_id: this.fb_id }),
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
                  // console.log(res.data)
                  this.form = res.data
                }
              })
          },
          err => {
            console.log(err)
            this.fb_id = ''
          },
        )
      }
    }, 2000)

    setTimeout(() => {
      clearInterval(this.interval)
    }, 1000 * 30)
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // 如果選擇的日期是當天
        if (valid) {
          this.loading = true
          fetch(
            'https://bot-production.letsmovienow.com/api/webview/editUserData',
            {
              // fetch(`https://009e367078af.ngrok.io/api/webview/editUserData`, {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify({
                fb_id: this.fb_id,
                nickname: this.form.nickname,
                address: this.form.address,
                personality: this.form.personality,
                habbit: this.form.habbit,
                job: this.form.job,
                intro: this.form.intro,
              }),
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

    generateIntro() {
      this.isIntroDialog = false
      // introForm = {
      //   q1: 0, // 你喜歡與人交談或者善於傾聽？
      //   q2: 0, // 從下面兩類描述的關鍵字類別中選擇最符合你的一類
      //   q3: 0, // 從下列項目中選擇一項你最想實現的事
      //   q4: 0, // 下面五句話，你對哪一句最有感？
      //   q5: 0, // 選擇一個最能代表你的動物
      // }
      let intro = {
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
      }
      // 你喜歡與人交談或者善於傾聽？
      switch (this.introForm.q1) {
        case 0:
          // 與人交談
          if (Math.random() >= 0.49) {
            intro.a1 = '喜歡跟人聊天，如果對方需要，我會分享我所知道的一切'
          } else {
            intro.a1 = '喜歡交朋友，喜歡新的交流帶來的有趣火花'
          }
          break
        case 1:
          // 樂於傾聽
          if (Math.random() >= 0.49) {
            intro.a1 = '樂於傾聽，喜歡陪著對方一起體會他的經歷跟感觸'
          } else {
            intro.a1 = '喜歡聽人說話，那些對我來說都是不可取代的禮物'
          }
          break
        case 2:
          // 兩者皆是
          if (Math.random() >= 0.49) {
            intro.a1 = '喜歡交流，觀察對方的反應也喜歡分享我所知道的一切'
          } else {
            intro.a1 = '我通常會真誠直接地表現自己，喜歡跟人聊天交流的感覺'
          }
          break

        default:
          break
      }

      // 從下面兩類描述的關鍵字類別中選擇最符合你的一類
      switch (this.introForm.q2) {
        case 0:
          const hotList = [
            '外向',
            '活潑',
            '開朗',
            '坦率',
            '率直',
            '爽快',
            '豁達',
            '天真',
            '豪邁',
            '不拘小節',
            '樂觀',
            '健談',
            '熱情',
          ]
          // 熱情、堅強、外向
          let hotKeys = _.sampleSize(hotList, 3)
          console.log(hotKeys)
          intro.a2 = `別人曾說過我${hotKeys[0]},${hotKeys[1]},帶點${hotKeys[2]}，但更多特質還是要交流才知道`
          break
        case 1:
          // 沈穩、細心、內向
          const coldList = [
            '有條理',
            '心思縝密',
            '成熟穩重',
            '平易近人',
            '溫柔',
            '體貼',
            '親切',
            '細心',
            '談吐得體',
          ]
          // 熱情、堅強、外向
          let coldkeys = _.sampleSize(coldList, 3)
          intro.a2 = `別人曾說過我${coldkeys[0]},${coldkeys[1]},帶點${coldkeys[2]}，但更多特質還是要交流才知道`
          break

        default:
          break
      }
      // 從下列項目中選擇一項你最想實現的事
      switch (this.introForm.q3) {
        case 0:
          // 和你的伴侶在冰天雪地中看著極光
          intro.a3 = `重視未來的伴侶，也喜歡一起去累積回憶的畫面，如果可以。我想跟那個她，常常出遊，甚至來個不可思議的旅行，像是極光或火山，如果她敢去的話😂`
          break
        case 1:
          // 說走就走，背一個背包，環遊世界
          intro.a3 = `喜歡冒險，甚至想要踏上未知的旅程，看這世界難得一見，罕有人跡的風景，就背著一個背包，一台手機，環遊這個世界與它對話`
          break
        case 2:
          // 擁有一棟房子，房子裡住著我愛的人跟愛我的人
          intro.a3 = `重視身邊的人，想要他們獲得最好的東西。把錢花在重要的人身上，守護看似平凡實則寶貴的日常，是我最大的幸福`
          break
        case 3:
          // 成為某個領域中的專家，受人尊重，很多人都知道你，喜歡你，需要你的意見
          intro.a3 = `對自己的專業充滿熱情，想要把自己變得更好，也想這個世界有我而變得有一點點不一樣`
          break
        default:
          break
      }

      // 下面五句話，你對哪一句最有感？
      switch (this.introForm.q4) {
        // 每一天都沒把握，所以我只能把握好每一天
        // 生活不一定是一直美好的，但是那些掙扎可以讓你變得更堅強
        // 凡是挫折都是禮物，唯有正確價值觀才能打開
        case 0:
          // 關心自己的靈魂，從來不早，也不會晚
          intro.a4 = `而我常常跟自己對話，也喜歡跟人討論關於心理層面方面的話題，畢竟很多人都在無意識中對自己苛刻，忘了鼓勵`
          break
        case 1:
          // 再煩，也別忘微笑；再急，也要注意語氣；再苦，也別忘堅持；再累，也要愛自己
          intro.a4 = `而我常常反省自己，怎麼樣把自己的待人處事梳理得更好，畢竟人生只有一次，活得精彩，活得有意義就是我的目標`
          break
        case 2:
          // 每一天都沒把握，所以我只能把握好每一天
          intro.a4 = `而我常常覺得雖然未來很重要，但當下才是最重要，所以把握好眼前的事情，做到最好，那就是對人生最好的交代`
          break
        case 3:
          // 生活不一定是一直美好的，但是那些掙扎可以讓你變得更堅強
          intro.a4 = `而我常常感謝周遭的所有人事物，不論好的壞的，都讓我變得更好更堅強`
          break
        case 4:
          // 凡是挫折都是禮物，唯有正確價值觀才能打開
          intro.a4 = `而我常常用不同觀點看這個世界，把人事物放到對的位置，就會變得對的，周遭不變，但心態卻變了，這對我來說蠻有趣的`
          break

        default:
          break
      }

      // 選擇一個最能代表你的動物
      switch (this.introForm.q5) {
        case 0:
          // 狗
          intro.a5 = `如果要用動物來比喻的話，我就像是一隻狗，對這個世界充滿好奇心，對周遭的人充滿熱情以及關懷`
          break
        case 1:
          // 貓
          intro.a5 = `對新奇的事物沒有什麼抵抗力，我應該像是一隻貓，有點神秘，有點悶騷`
          break
        case 2:
          // 老鷹
          intro.a5 = `用動物來比喻，我就像是一隻老鷹，渴望自由翱翔的那種感覺，也渴望用更高的視線看這個世界`
          break
        case 3:
          // 馬
          intro.a5 = `如果用動物來比喻，我就像是一匹馬，很常成為被朋友視作可靠的人，想像有一片草原，在那裏我是自由的舒服的`
          break
        case 4:
          // 無尾熊
          intro.a5 = `喜歡讓人感覺到舒服，自在，沒有壓力，就像是無尾熊一般的存在`
          break
        case 5:
          // 狐狸
          intro.a5 = `你知道，我就像一隻狐狸，反應很快，常常蹦出一些有趣的點子，讓這個世界有趣一點對吧`
          break

        default:
          break
      }
      this.form.intro = `${intro.a1}<br />${intro.a2}<br /><br />${intro.a3}<br /><br />${intro.a4}<br /><br />${intro.a5}`
    },
  },

  created() {},
}
</script>
