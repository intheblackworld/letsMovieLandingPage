<template>
  <div class="section7 fullscreen bg-cover" v-lazy:background-image="require('./s7_bg.jpg')">
    <div class="fullscreen flex-c">
      <div class="desc">
        <!-- <span>電影院</span>，是兩個人靜靜地沈浸在劇中的場景與故事，實現自己腦中幻想的地方。 -->
        <!-- 成為想成為的人，去到想去的地方。
          兩張座椅，托住兩個不同生活經歷，背景的人。
          在這個時刻有了交集，有了共同的話題。
          甚至，也有了一起會心一笑的可能性。
          一個人去電影院有多孤獨，
          那兩個人去看電影就有多幸福。
          共享一桶爆米花，或者剛剛才買的珍奶跟雞排。
          給你自己一個吃點垃圾食物，放縱的理由。
          因為有了個人陪你一起承受這奢侈的罪惡感。
          從電影開場前的初次見面，寒暄問好，
          到電影散場之後，一起聊著剛剛的故事情節。
          一切其實可以很自然，就像認識了很久的老朋友。
          最後有禮貌的互道聲晚安，在心底給自己一聲歡呼。
        慶幸緣分，其實沒那麼難。-->
        <div
          v-if="!isMobile"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="500"
        >
          <span class="blue">一個人</span>去電影院有多孤獨，
          那兩個人去看電影就有
          <span class="pink">多幸福</span>。
          <br />
          <br />
        </div>
        <div
          v-else
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="500"
        >
          <span class="blue">一個人</span>去電影院有多孤獨<br />
          那兩個人去看電影就有<span class="pink">多幸福</span>
          <br />
          <br />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <span class="big">來 Lets Movie，遇見你的新緣分</span>
        </div>
        <a
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="500"
          target="_blank"
          :href="`https://m.me/108301937223847?ref=${$store.state.source},${$store.state.name},cta3`"
          @click="logCTA3"
        >
          <div
            class="btn flex-c m-auto"
            id="cta-3"
          >找人看電影</div>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section7 {
  // background-image: url();
}

a {
  text-decoration: none;
}

.linear-g-mask {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9));
}

.desc {
  font-size: 23px;
  text-align: center;
  letter-spacing: 2px !important;
  line-height: 1.7;
  margin-bottom: 40px;
  width: 800px;
  color: #ccc;

  .big {
    font-weight: normal !important;
    font-size: 25px;
    color: #fff;
  }

  .blue {
    color: #bbc8e4;
  }

  .pink {
    color: #db7093;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .desc {
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px !important;
    line-height: 1.7;
    margin-bottom: 40px;
    width: 100vw;
    padding: 0 20px;
    color: #ccc;

    .big {
      font-weight: normal !important;
      font-size: 20px;
      color: #fff;
    }

    .blue {
      color: #bbc8e4;
    }

    .pink {
      color: #db7093;
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
import { isMobile } from '@/utils'
export default {
  name: 'section7',

  data() {
    return {
      isMobile,
      loading: true,
    }
  },

  methods: {
    logCTA3() {
      let req = {
        name: this.$store.state.name,
        source: this.$store.state.source,
        click: 'cta3',
        stage: 1,
      }
      fetch(
        'https://bot-production.letsmovienow.com/api/webview/logUserClickCTA',
        {
          // fetch(`https://0a46f965.ngrok.io/api/webview/checkDetail`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(req),
        },
      )
    },
    //  測試id 103972354293750
    //  正式id 108301937223847
  },

  created() {
    window.setTimeout(() => {
      // this.loading = false
    }, 1500)
  },
}
</script>
