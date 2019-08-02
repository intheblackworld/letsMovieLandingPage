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
            <span class="flex-c">1</span> 這個服務要付費嗎？會很貴嗎？
          </p>
          <p>A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。</p>
        </div>
        <div
          class="desc mb-30"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <p class="question flex-ac">
            <span class="flex-c">1</span> 這個服務要付費嗎？會很貴嗎？
          </p>
          <p>A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。</p>
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
            <span class="flex-c">1</span> 這個服務要付費嗎？會很貴嗎？
          </p>
          <p>A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。</p>
        </div>
        <div
          class="desc mb-30"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <p class="question flex-ac">
            <span class="flex-c">1</span> 這個服務要付費嗎？會很貴嗎？
          </p>
          <p>A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。</p>
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
            <span class="flex-c">1</span> 這個服務要付費嗎？會很貴嗎？
          </p>
          <p>A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。</p>
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
