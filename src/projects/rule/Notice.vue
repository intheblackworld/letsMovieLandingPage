<template>
  <div class="dating">
    <div class="title">注意事項</div>
    <p>
      1.討論好
      <span class="red">碰面時間及電影院</span>後請點選單
      <br />
      <span class="strong">約會快捷功能>敲定約會細節</span>
      <br />你們有
      <span class="red">24小時</span>的時間可以討論與交談
      <br />
      <span class="red">
        超過24小時而未敲定約會細節
        <br />視同取消
      </span>
    </p>
    <img src="./checkdetail.gif" alt />
    <br />
    <br />
    <p>
      2.敲定約會後會關閉對話
      <br />系統會根據<span class="red">敲定約會細節時輸入的日期</span><br />
      在<span class="red">約會當天</span>為你們
      <span class="red">開啟對話</span>，方便碰面
    </p>
    <p>3.聊天都有做備份紀錄，請用一顆禮貌的心跟對方交談</p>
    <p>
      4.約會過程請保持友善態度
      <br />
      <span class="red">
        約會結束時會收到通知
        <br />此時可以互評對方表現
      </span>
      <br />您的態度決定您的分數喔！
    </p>
    <br />
    <h3>備註一</h3>
    <p>
      如果電影場次的時間還沒出來，可以先討論
      <span class="red">碰面時間</span>
    </p>
    <h3>備註二</h3>
    <p>
      如果原定日期喬不攏
      <br />可以跟對方討論彈性修改
      <br />敲定約會細節時，可以輸入不同日期
    </p>
    <div class="end">現在就跟對方打聲招呼吧😄</div>
  </div>
</template>
<style lang="scss" scoped>
.dating {
  width: 1280px;
  margin: 0px auto;
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
    font-weight: 700 !important;
  }

  .red {
    color: rgb(131, 29, 29);
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
      width: 90vw;
      margin: 0 auto;
    }

    .title {
      font-size: 30px;
      font-weight: bold;
    }

    .pre {
    }

    p {
      font-size: 18px;
      letter-spacing: 1.5px !important;
      line-height: 35px !important;
    }

    .talk {
      font-size: 15px;
    }

    .end {
      font-size: 24px;
      margin-bottom: 30px;
      color: #333;
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
  name: 'dating',
  components: {
    // Loading,
  },

  data() {
    return {}
  },

  methods: {},

  created() {},
}
</script>
