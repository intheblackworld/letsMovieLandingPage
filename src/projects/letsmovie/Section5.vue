<template>
  <div class="section5 pt-40 pb-30">
    <div class="container">
      <p
        class="title flex-c"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      >你可能想問</p>
      <div class="flex-jb wrap">
        <div
          class="desc mb-30"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <p class="question flex-ac">
            <span class="flex-c">1</span>
            我使用這個服務真的可以跟異性出去約會嗎？
          </p>
          <p>A:我們經過多次的流程的優化，基本上只要你經過審核。跟異性成功約出去的機率超過9成</p>
        </div>
        <div
          class="desc mb-30"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="400"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <p class="question flex-ac">
            <span class="flex-c">2</span>
            這個服務安全嗎？行程安全嗎？
          </p>
          <p>Ａ:我們設計了完整隱密的機制。在正式出去之前，對方不會得知你的任何資料。約會的地點也會在公共場所，另外我們也會紀錄你們的對話紀錄，如有任何冒犯性的對話，檢舉經查證後。會做出相應的懲罰措施</p>
        </div>
        <div
          class="desc mb-30"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <p class="question flex-ac">
            <span class="flex-c">3</span>
            我不想要配對了不好聊還要硬聊，平常很忙，沒時間跟對方聊天。
          </p>
          <p>A:我們主張不尬聊，配對成功之後，對話的目的只是為了討論電影院跟確切的碰面時間。敲定之後系統就會主動關閉對話。約會當天才會再度開啟對話，方便你們碰面。專為社交疲勞的你量身打造，根據統計，每個禮拜使用我們服務的時間不用四小時，就能跟一個人出去看電影</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section5 {
  background-color: #fff;
  background-image: linear-gradient(315deg, #fff 0%, #f6f2f2 74%);
}
.container {
  width: 980px;
  margin: 0 auto;
  text-align: center;

  .title {
    width: 340px;
    height: 101px;
    margin-bottom: 25px;
    color: #333;
    font-size: 36px;
    margin: 0 auto;
  }

  .desc {
    color: #2c3e50;
    text-align: left;
    width: 48%;
    p {
      margin-bottom: 10px;
    }

    .question {
      font-size: 20px;
    }
    span {
      font-size: 20px;
      color: #fff;
      background: #d1a044;
      width: 25px;
      height: auto;
      margin-right: 10px;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 810px;
    margin: 0 auto;
    text-align: center;

    .title {
      width: 251px;
      height: 75px;
      margin-bottom: 25px;
      font-size: 30px;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    margin: 0 auto;
    text-align: center;

    .title {
      width: 250px;
      height: 101px;
      margin-bottom: 25px;
      color: #333;
      font-size: 30px;
      margin: 0 auto;
    }

    .desc {
      text-align: left;
      width: 100%;
      padding: 0 20px;
      p {
        margin-bottom: 10px;
      }

      .question {
        font-size: 20px;
      }
      span {
        font-size: 20px;
        color: #fff;
        background: #d1a044;
        width: 25px;
        height: auto;
        margin-right: 10px;
      }
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
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'

export default {
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      loading: true,
    }
  },

  methods: {},

  created() {},
  mounted() {
    window.setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>
