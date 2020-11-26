<template>
  <div class="dating">
    <div class="title">使用指南</div>
    <div class="subtitle">選單功能說明</div>
    <div class="message-btns">
      <div class="btn-row" @click="setTab(0)">選單在哪?</div>
      <div v-if="fb_id">
        <div class="btn-row" @click="setTab(1)">想約會</div>
        <div class="btn-row" @click="setTab(4)">敲定約會細節(別忘記了，超重要!!)</div>
        <div class="btn-row" @click="setTab(2)">查看個人資訊</div>
        <div class="btn-row" @click="setTab(3)">L幣會員商城</div>
      </div>
    </div>
    <div v-if="tabIndex === 0">
      <div class="subtitle">選單在哪？</div>
      <img src="./guide/1.png" alt="">
      <div class="img-desc">輸入框右側有一個按鈕(上圖紅框處)</div>
    </div>
    <div v-if="tabIndex === 1">
      <div class="subtitle">想約會功能說明</div>
      <div v-if="gender === 1">
        <p>選擇電影和時段，等待電影邀約<br />
          男生的電影邀約來時，可選擇同意或拒絕<br />
          同意會增加20點，拒絕會扣5點<br />
          （成功去一次可拒絕四次^^）</p>
        <img src="./guide/2.png" alt="">
        <div class="img-desc">1)如到前一天晚上沒有配對成功，會自動取消<br />
          2)在配對到前隨時可以按選單中取消約會，來取消登記</div>
      </div>
      <div v-if="gender === 0">
        <p>即時出現你所在的地區有發起的電影約會<br />
          發出邀約前請確定自己的時間是可行的</p>
        <img src="./guide/3.png" alt="">
        <div class="img-desc">
          1)這邊的約會是女生即時發起的電影約會（她們想看的時間和地點）<br />
          可等到自己有想約的再約，會即時變動<br /><br />
          2)如在你的地區有八場以上等待的電影約會<br />
          會即時推播～所以不一定需要一直按想約會喔！
        </div>
      </div>
    </div>
    <div v-if="tabIndex === 2">
      <div class="subtitle">查看個人資訊功能說明</div>
      <div v-if="gender === 1">
        <img src="./guide/4.png" alt="">
        <p>主要有四個功能：<br />
           1)可修改個人資料或約會地區：<br />
          修改約會地區後按想約會就會跑出不同地區的電影約會<br />
          （但請別按之前地區跑出的電影約會，不然會去到原先地區的電影約會）<br /><br />
        </p>
        <img src="./guide/5.png" alt="">
        <p>
          2)可查看評價<br />
          在約會過後，可從個人資訊中看到自己過去約會，對方給自己的總評價平均<br />
          （也是發起約會時對方男生選擇的標準喔）<br /><br />

          3)可查看自己有多少L幣或身份<br /><br />

          4)可更改照片<br />
          但需要重新審核，請上傳清楚並迷人的照片<br />
          如正在審核中，無法發出約會
        </p>
      </div>
      <div v-if="gender === 0">
        <img src="./guide/4.png" alt="">
        <p>主要有四個功能：<br />
           1)可修改個人資料或約會地區：<br />
          修改約會地區後按想約會就會跑出不同地區的電影約會<br />
          （但請別按之前地區跑出的電影約會，不然會去到原先地區的電影約會）<br /><br />
        </p>
        <img src="./guide/5.png" alt="">
        <p>
          2)可查看評價<br />
          在約會過後，可從個人資訊中看到自己過去約會，對方給自己的總評價平均<br />
          （也是發起約會時對方女生選擇的標準喔）<br /><br />

          3)可查看自己有多少L幣或身份<br /><br />

          4)可更改照片<br />
          但需要重新審核，請上傳清楚並帥氣的照片<br />
          如正在審核中，無法發出約會
        </p>
      </div>
    </div>
    <div v-if="tabIndex === 3">
      <div class="subtitle">L幣會員商城功能說明</div>
      <div v-if="gender === 1">
        <p>
          每日輪盤抽獎，根據輪盤抽獎獎勵一定數量的點數<br />
          沒有點數無法發起約會～可來這邊抽獎喔！
        </p>
      </div>
      <div v-if="gender === 0">
        <p>我們目前第一次參加體驗價120元（很快會調漲喔）<br />
          之後再次參加約會是採月費VIP會員制喔！<br />
          如果是月費會員的話一個月不限約會次數，可以點擊選單中的L幣會員商城參考喔😀</p>
      </div>
    </div>
    <div v-if="tabIndex === 4">
      <div class="subtitle">敲定約會細節功能說明</div>
      <p>配對成功會開通男女雙方的對話！這個時候就可以傳訊息對話了</p>
      <img src="./guide/hello.gif" alt="">
      <div class="img-desc red">請在24小時內確定碰面時間地點</div>
      <img src="./guide/6.png" alt="" class="">
      <p>敲定約會細節，是<span class="red">告訴系統你們已經討論完畢</span>了</p>
      <img src="./guide/7.png" alt="" class="">
      <p>
        <span class="red">如果24小時內沒有敲定</span><br />
        將會以最後一句話是誰回的，另外一方判定為未回應而被扣點
        因此請盡快討論～這步完成後就可以等約會時間來囉，(約會前一天晚上就會[ 簡訊通知]開對話喔！)（恭喜！）
      </p>
    </div>
    <!-- <div class="end">Let’s Movie 電影約會團隊 祝你約會順利</div> -->
  </div>
</template>
<style lang="scss" scoped>
.dating {
  width: 1280px;
  margin: 0px auto;
  margin-bottom: 60px;
  text-align: justify;
  min-height: calc(100vh - 40px);

  img {
    width: 100%;
  }

  .content {
    width: 52%;
    margin: 0 auto;
    display: block;
  }

  .title {
    font-size: 36px;
    color: #333;
    margin-bottom: 30px;
  }

  .subtitle {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .pre {
    margin-bottom: 30px;
  }

  p {
    line-height: 2.5;
    margin-bottom: 15px;
    color: #444;
  }

  .talk {
    color: #000;
    font-weight: bold;
    font-size: 17px;
    margin-left: -0.5rem;
  }

  .end {
    font-size: 20px;
    color: #990000;
    margin-top: 30px;
  }

  .boy {
    color: rgb(47, 96, 125);
  }

  .girl {
    color: rgb(187, 80, 144);
  }

  .strong {
    color: #000;
  }

  .red {
    color: rgb(131, 29, 29);
  }

  .img-desc {
    color: #666;
    font-size: 13px;
    margin-bottom: 20px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .dating {
    width: 100vw;
    padding: 25px 5vw;
    margin-top: 0px;
    min-height: calc(100vh - 40px);

    img {
      width: 100%;
    }

    .title {
      font-size: 30px;
      font-weight: bold;
    }

    .subtitle {
      font-size: 18px;
      color: #000;
      margin-bottom: 20px;
    }

    .pre {
    }

    p {
      font-size: 14px;
      letter-spacing: 1.5px !important;
      line-height: 22px !important;
    }

    .talk {
      font-size: 15px;
    }

    .end {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }

  .message-btns {
    width: 100vw;
    margin-left: -5vw;
    background-color: #dda337;
    color: #fff;
    padding: 0px 15px 0;
    // border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 100%;
    }
    .btn-row {
      width: 100%;
      color: #000;
      padding: 10px 0;
      font-size: 14px;
      cursor: pointer;
      border-bottom: 1px solid #fac665;
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
// import Loading from '@/components/Loading.vue'
// import { setTimeout } from 'timers'

export default {
  name: 'guide',
  components: {
    // Loading,
  },

  data() {
    return {
      fb_id: '',
      gender: 0,
      tabIndex: 0,
      interval: '',
    }
  },

  methods: {
    setTab(index) {
      this.tabIndex = index
    },
  },

  destroyed() {
    clearInterval(this.interval)
  },

  mounted() {
    this.fb_id = this.$route.query.id
    // More code to follow
    if (!this.fb_id) {
      this.gender = 0
    } else {
      fetch('https://bot-production.letsmovienow.com/api/webview/getUserData', {
        // fetch('https://165d54a196b7.ngrok.io/api/webview/getUserData', {
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
            this.gender = res.data.gender
          }
        })
    }
    // window.extAsyncInit = () => {
    // this.interval = setInterval(() => {
    //   if (!this.fb_id) {
    //     // the Messenger Extensions JS SDK is done loading
    //     MessengerExtensions.getContext(
    //       // '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
    //       '1405269929631051', // Let's Movie 電影約會 BOT ID
    //       thread_context => {
    //         // success
    //         this.fb_id = thread_context.psid
    //         // More code to follow

    //         fetch(
    //           'https://bot-production.letsmovienow.com/api/webview/getUserData',
    //           {
    //             // fetch('https://165d54a196b7.ngrok.io/api/webview/getUserData', {
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
    //               this.gender = res.data.gender
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
}
</script>
