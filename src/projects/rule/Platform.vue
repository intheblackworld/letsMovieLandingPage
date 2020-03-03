<template>
  <div class="dating">
    <div class="title">平台守則</div>
    <p>
      1.本次約會為<span class="boy">男生</span>請<span class="girl">女生</span>看電影🌹<br />
      可以附加約其他行程(吃飯，喝飲料聊天等)，但行程當中一定要有看電影，否則查核屬實後一律黑名單處理
    </p>

    <p>
      2.請在<span class="red">見面後</span>再給予或詢問對方<br />
      其他聯絡方式(Line, IG帳號...等)<br />
      若違反經小編發現<br />
      我們將<span class="red">終止您本次約會並停權帳號</span>
    </p>
    <p>
      3.為了維護對方的權益，除非緊急狀況，否則<span class="red">約會當天取消約會或缺席者</span><br />
      <span class="red">我們會採取黑名單的處置</span>
    </p>
    <h3>如上述狀況發生，採取黑名單者，一率不退還L幣</h3>
    <!-- <div class="end">Let’s Movie 電影約會團隊 祝你約會順利</div> -->
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
      width: 100vw;
      margin-left: -5vw;
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
