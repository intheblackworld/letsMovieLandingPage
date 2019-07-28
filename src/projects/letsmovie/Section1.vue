<template>
  <div class="section1">
    <Loading :loading="loading" />
    <!-- 背景圖覽家仔 -->
    <section
      class="fullscreen bg-cover no-nav flex-c bg"
      v-scroll-reveal.reset="$fadeInUp()"
    >
      <!-- div.mask.fullscr -->
      <div class="container flex-c">
        <!-- <img class="slogan" v-scroll-reveal.reset="$fadeInUp()" src="./title.png" /> -->
        <div class="content">
          <p v-scroll-reveal.reset="$fadeInUp(0)" class="title">女生免費看電影</p>
          <p v-scroll-reveal.reset="$fadeInUp(300)" class="sub-title">找一個跟你在電影院裡會心一笑的人</p>
          <a class="flex-c" v-scroll-reveal.reset="$fadeInUp(500)">開始配對</a>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1_bg.png');
  background-attachment: fixed;
  background-position: center center; /* 圖像置中 */
  background-size: cover;
}
.container {
  width: 920px;
  height: 494px;
  position: relative;

  .slogan {
    position: absolute;
    left: 0;
    top: 0;
  }

  .content {
    margin-top: -10%;
    text-align: left;
    color: #fff;

    .title {
      font-size: 42px;
      margin-bottom: 20px;
    }

    .sub-title {
      font-size: 28px;
      margin-bottom: 10px;
    }

    p {
      font-size: 24px;
    }

    a {
      font-size: 20px;
      color: #444;
      background-color: #fff;
      font-weight: normal;
      width: 170px;
      height: 55px;
      float: right;
      margin-top: 25px;
      border-radius: 30px / 30px;
      cursor: pointer;
      transition: all .5s;

      &:hover {
        background-color: #bb926d;
        color: #fff;
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .content {
      .title {
        font-size: 31px;
        margin-bottom: 20px;
      }

      .sub-title {
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
  width: 100%;
  height: auto;

  .content {
    position: relative;
    bottom: auto;
    right: auto;
    margin: 0 auto;
    text-align: center;

    .title {
      color: #fff;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
      font-size: 28px;
      margin-bottom: 20px;
    }

    .sub-title {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }

    a {
      float: none;
      margin: 0 auto;
      margin-top: 20px;
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
import Loading from '@/components/Loading.vue'
import { setTimeout } from 'timers'

export default {
  name: 'section1',
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {},

  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 2500)
    })
  },
}
</script>
