<template>
  <div class="dating">
    <div class="title">常見問題</div>
    <div class="message-btns">
      <div
        class="btn-row"
        @click="setTab(0)"
      >平台功能問題</div>
      <div
        class="btn-row"
        @click="setTab(1)"
      >關於配對問題</div>
      <div
        class="btn-row"
        @click="setTab(2)"
      >關於敲定約會問題</div>
      <div
        class="btn-row"
        @click="setTab(3)"
      >關於當天約會問題</div>
    </div>
    <div v-if="tabIndex === 0">
      <div class="subtitle">平台功能問題</div>
      <div
        v-for="(qa, index) in qaList1"
        v-show="!qa.gender || (ga.gender && qa.gender === gender)"
        :key="qa.q + qa.a + index"
      >
        <p
          class="q"
          v-html="qa.q"
        >
        </p>
        <p
          class="a"
          v-if="typeof qa.a === 'object'"
          v-html="qa.a[gender]"
        ></p>
        <p
          class="a"
          v-else
          v-html="qa.a"
        >
        </p>
      </div>
    </div>

    <div v-if="tabIndex === 1">
      <div class="subtitle">關於配對問題</div>
      <div
        v-for="(qa, index) in qaList2"
        :key="qa.q + qa.a + index"
      >
        <p
          class="q"
          v-html="qa.q"
        >
        </p>
        <p
          class="a"
          v-if="typeof qa.a === 'object'"
          v-html="qa.a[gender]"
        ></p>
        <p
          class="a"
          v-else
          v-html="qa.a"
        >
        </p>
      </div>
    </div>
    <div v-if="tabIndex === 2">
      <div class="subtitle">關於敲定約會問題</div>
      <div
        v-for="(qa, index) in qaList3"
        :key="qa.q + qa.a + index"
      >
        <p
          class="q"
          v-html="qa.q"
        >
        </p>
        <p
          class="a"
          v-if="typeof qa.a === 'object'"
          v-html="qa.a[gender]"
        ></p>
        <p
          class="a"
          v-else
          v-html="qa.a"
        >
        </p>
      </div>
    </div>
    <div v-if="tabIndex === 3">
      <div class="subtitle">關於當天約會問題</div>
      <div
        v-for="(qa, index) in qaList4"
        :key="qa.q + qa.a + index"
      >
        <p
          class="q"
          v-html="qa.q"
        >
        </p>
        <p
          class="a"
          v-if="typeof qa.a === 'object'"
          v-html="qa.a[gender]"
        ></p>
        <p
          class="a"
          v-else
          v-html="qa.a"
        >
        </p>
      </div>
    </div>
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

  .q {
    color: #000;
    margin-bottom: 7px;
    font-weight: bold !important;
  }

  .a {
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
  name: 'question',
  components: {
    // Loading,
  },

  data() {
    return {
      fb_id: '',
      gender: 0,
      tabIndex: 0,
      // 平台功能問題
      qaList1: [
        {
          q: '真的有人出去約會過嗎？',
          a: '有的喔！我們目前平均一天有兩場約會並且慢慢成長當中～',
        },
        {
          gender: 0,
          q: '若我成為月費會員，但那個月的約會選擇很少，這樣會不會很吃虧？',
          a:
            '平台這邊有提出一些獎勵措施，但如果您覺得目前約會太少的話，可以先不發出約會沒關係，我們也希望大家在使用的過程上是流暢的，甚至是物超所值的，畢竟出門約會也是需要成本',
        },
        {
          q: 'L幣是什麼?',
          a: [
            'L幣是我們平台用的點數，男生除了月費以外，單次約會的儲值點數都會放到這裡，做發起約會時使用！',
            'L幣是我們平台用的點數喔！女生可以用來發起約會和拒絕約會。',
          ],
        },
        {
          q: '儲值的L幣如果沒有約人是不是都還會在呢?',
          a:
            '對喔！如果約會沒有成功，只要你這邊沒有違規，平台都會自動幫你回補點數喔！ 成功代表的是你們真的約出去看了電影～',
        },
        {
          q: '男生女生會員人數為比例大約多少呢',
          a: '目前大概一比一',
        },
      ],
      qaList2: [
        {
          q: '你們這個配對是怎麼樣的方式進行？',
          a:
            '女生可以選擇想看的電影與時間發起約會<br /><br />男生可以對女生發起約會邀請，之後會有系統一步一步提醒你們如何碰面約會',
        },
        {
          q: '配對後對方都沒回應，可以取消約會嗎？',
          a:
            '系統會做溝通提醒通知喔！<br /><br />因為每次約會，會給予彼此24小時內的回應時間，若過了24小時後，對方沒回應，系統將自動為您回補點數，也會為對方扣除點數，不用提前取消約會。',
        },
        {
          q: '選擇對方以後可以取消邀約嗎？',
          a: [
            '若不小按到「選擇對方」以後，可以取消邀約喔！由於我們會二度向您確認是否赴約，若您也確認過後，就無法取消邀約囉！向您二次確認赴約以後，24小時內女生就會回應答應或拒絕。',
            '可以喔！但會扣除5點L幣，L幣小於零則無法發起約會',
          ],
        },
        {
          q: '永遠都是那幾個人耶/沒有女生/沒有男生選擇我',
          a: [
            '我們的約會是從女生發起的，通常假日也會比較多～所以目前會看到的，就是目前使用者的所在地區，還有女生所選擇的年齡範圍等條件下所看到的發起約會對象！可以晚點再來按選單中的「想約會」查看<br /><br />小編也希望大家都能愉快的出去約會😄我們有一個貼心的功能，當約會數量多到一定程度，會在晚上推播訊息給您喔！所以如果覺得按想約會有點累的話，可以等我們通知😂',
            '由於目前主要使用者都在台北～預計下半年才會進到其他地區～您可以從個人資料那裡更改主要活動地區到「台北」會看到較多場約會喔！😊',
          ],
        },
      ],
      qaList3: [
        {
          q:
            '若討論時發現彼此距離太遠怎麼辦？/想要看的電影沒在那時間上應怎麼辦？',
          a:
            '地點部分您們可以溝通討論喔！建議可以討論一個中間點，彼此都會比較方便！:)<br /><br />電影部分，您們也可以討論一下是否改看其他部電影喔！',
        },
        {
          q: '約好了可是想改約時間怎麼辦？',
          a:
            '我們約會守則上有說明「當天無法更改日期」喔！<br /><br />但是在約會當天「以前」都可以幫您們重新開啟對話，你們可以重新討論時間地點，討論好以後請記得到選單內按「敲定約會細節」喔！<br /><br />請記得注意一下時間，這樣比較尊重彼此事先空出來的時間與準備😂<br /><br />我們也會有取消按鈕讓您取消約會喔！但為了維護對方的權益，除非緊急狀況不然盡量不要使用<br /><br />請參考我們的平台守則：<a href="https://letsmovienow.com/rule/platform">平台守則</a><br /><br />取消約會就會扣50點～小於0點就無法送出邀約了喔！<br />所以當天若真的非常非常萬一有臨時狀況，建議和對方先一起討論看可不可以改時間喔～ 🙂',
        },
        {
          q:
            '開啟雙方對話之後因為我不小心按到系統的對話選項（想約會）並發送了對方會收到這則訊息嗎？',
          a: '不會喔～系統通知只有您會看到喔！不用擔心 🙂',
        },
      ],
      qaList4: [
        {
          q: '當天約會系統開啟雙方對話，對方都還沒回應，怎麼辦？',
          a:
            '有可能對方還在上班時間喔！在約會前一小時後，若對方還未回應，小編這裡會幫您電話聯繫通知 🙂',
        },
        {
          q: '當天要怎麼和對方聯絡呢？',
          a:
            '系統在當天會為您們開啟對話，您們在約好時間地點後，看要認服裝顏色等等，都還是可以來相認做聯繫喔！',
        },
      ],
    }
  },

  methods: {
    setTab(index) {
      this.tabIndex = index
    },
  },

  mounted() {
    alert('mounted!')
    window.extAsyncInit = () => {
      // the Messenger Extensions JS SDK is done loading
      setTimeout(() => {
        alert('Getting PSID')
        MessengerExtensions.getContext(
          '902252186774664', // Let's Movie 電影約會內部測試 BOT ID
          // '1405269929631051', // Let's Movie 電影約會 BOT ID
          thread_context => {
            // success
            this.fb_id = thread_context.psid
            // More code to follow

            fetch(
              'https://bot-production.letsmovienow.com/api/webview/getUserData',
              {
                // fetch(`https://0a46f965.ngrok.io/api/webview/checkDetail`, {
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
                  this.gender = res.data.gender
                }
              })
          },
          err => {
            // console.log(err)
            this.fb_id = ''
          },
        )
      }, 2500)
    }
  },
}
</script>
