<template>
  <div class="help">
    <img src="./help1.jpg" alt="">
    <div class="title">我們的24小時關閉對話機制如何幫助到你？</div>
    <div class="pre">
      嗨，你好我們是 Let’s Movie 的創辦團隊
      <br />又見面了
    </div>
    <p>
      在談機制之前，我想先跟你聊聊
      <br />什麼是無效社交？
    </p>

    <p>
      在一場聚會中打過招呼，自我介紹
      <br />回到家之後連對方的興趣是什麼都不知道
      <br />因為看到對方的IG照片覺得他很懂生活
      <br />追蹤之後的互動卻只剩按下like
      <br />在交友軟體上，密了100個人
      <br />有那麼幾個人回覆你
      <br />聊一聊人卻又不見了
    </p>

    <p>
      有多久，沒有遇過一段有溫度的關係了？
      <br />如果有，那麼恭喜你，你有點幸運
      <br />如果沒有，那麼讓我跟你介紹一個人
      <br />他叫小白，一個在我眼中看來
      <br />很有溫度，很熱情的人
      <br />他有一個交往多年的女友
      <br />還有一群從大學的時候就認識
      <br />胡里胡鬧的社團朋友
      <br />週末找大家一起出門感受大自然
      <br />常常都是他開著車，副駕坐他女友
      <br />社團朋友坐在後座，聽著音樂跟屁話連發
      <br />這樣的生活很平凡
      <br />但也很快樂
    </p>

    <p>
      一直到那天他撥了通電話給我吧
      <br />我才知道
      <br />有些東西不會是永遠
    </p>
    <p class="talk">“我分手啦”</p>
    <p>他用著一貫輕鬆的語氣</p>

    <p class="talk">
      “真的假的”
      <br />“為什麼？那你還好嗎？“
      <br />“沒事，死不了吧，嗎？”
      <br />“都這個時候，還有心情搞笑! ”
      <br />“你等我，我去找你”
      <br />“嗯…”
    </p>

    <p>
      在孤島中的困獸
      <br />用這一段話來形容那時的他一點都不為過
      <br />當然，他也曾試過用交友軟體來認識人
    </p>

    <p class="talk">
      “交友軟體好難用喔”
      <br />“我又只認識你們這群臭男生”
      <br />“早知道當初我就參加一個女生多的社團了”
      <br />“哪裡難用？小張以前也用的很開心啊”
      <br />“他是異類，不一樣！”
      <br />“跟上面的人聊，只能透過文字，感覺冷冰冰的”
      <br />“我就是要靠見面取勝的啊”
      <br />“原來如此”
      <br />“而且交友軟體上面男生那麼多，女生根本不缺對象，反正可以慢慢選，以後也不一定會成為朋友，這樣對方根本不會珍惜啊，那我們互相like是賴心酸的喔！”
    </p>

    <p>
      原來這個時代，選擇多了也是種障礙
      <br />讓我們忘了珍惜，隔絕了溫度的那種障礙
      <br />而之所以我們常常進行著無效社交
      <br />除了花了時間在不容易有結果的情況之外
      <br />隔著手機去認識人
      <br />又能傳遞多少你自己給對方呢？
    </p>

    <p>
      所以這也是為什麼我們在配對成功
      <br />開啟對話之後
      <br />只留給雙方24小時去敲定約會細節
      <br />因為見面，才是最有效率最直接的認識方式
      <br />我們希望交朋友，是一個有溫度，直接的過程
      <br />如果你習慣了在交友軟體上面聊天聊很久
      <br />終於約出來的過程
      <br />你其實可以給自己一個機會
      <br />嘗試一下
      <br />簡單的問候，自我介紹
      <br />然後約好碰面地點跟時間
      <br />直接見面約會的方式
      <br />說不定，也挺適合你的
    </p>

    <div class="end">Let’s Movie 電影約會團隊 祝你約會順利</div>
  </div>
</template>
<style lang="scss" scoped>
.help {
  width: 1280px;
  margin: 0px auto;
  text-align: justify;

  img  {
    width: 100%;
  }
  
  .title {
    font-size: 36px;
    color: #333;
    margin-bottom: 30px;
  }

  .pre {
    margin-bottom: 30px;
  }


  p {
    line-height: 2.5;
    margin-bottom: 15px;
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

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .help {
    width: 100vw;
    padding: 0 5vw;
    margin-top: 0px;

    img {
      width: 100vw;
      margin-left: -5vw;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
    }

    .pre {

    }

    p {
      font-size: 14px;
      line-height: 30px;
    }

    .talk {
      font-size: 15px;
    }

    .end {
      font-size: 16px;
      margin-bottom: 30px;
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
  name: 'help',
  components: {
    // Loading,
  },

  data() {
    return {
    }
  },

  methods: {},

  created() {
  },
}
</script>
