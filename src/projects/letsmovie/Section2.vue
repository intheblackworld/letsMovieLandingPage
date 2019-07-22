<template>
  <div class="section2">
    <!-- 背景圖覽家仔 -->
    <div class="container flex-c">
      <!-- <img
        v-scroll-reveal.reset="$fadeInLeft(700, 2500)"
        src="./s2_tree_left.png"
        alt
        class="absolute tree-left"
      />
      <img
        v-scroll-reveal.reset="$fadeInRight(700, 2500)"
        src="./s2_tree_right.png"
        alt
        class="absolute tree-right"
      />-->
      <div class="content">
        <p class="title flex-c" v-scroll-reveal.reset="$fadeInUp(0)">擺脫你的無效社交</p>
        <div>
          <p v-scroll-reveal.reset="$fadeInUp(300)" class="sub-title">交朋友不是靠滑的</p>
          <p v-scroll-reveal.reset="$fadeInUp(300)">
            交朋友不是靠滑的
            說真的，我們不想讓你掛在線上
            往左滑，往右滑，往右滑，往左滑…
            好不容易配對成功之後
            才發現
            那個人已讀不回
            這個人不太會回
            這個人是尬聊魔人
            那個人聊天總不正經
            我們不願意你把時間浪費在這
          </p>
        </div>
        <div class="second">
          <p v-scroll-reveal.reset="$fadeInUp(500)" class="sub-title">時間，請蹉跎在美好的事物上</p>
          <p v-scroll-reveal.reset="$fadeInUp(500)">
            認識不同領域的人
            拓展交友的圈子
            為你的生活注入點刺激
            直接碰面看場電影
            有了共同話題
            讓你們之間再也不尬聊
          </p>
        </div>
        <img
          v-scroll-reveal.reset="$fadeInRight(700, 2500)"
          src="./s2_clock.png"
          alt
          class="absolute clock"
        />
      </div>
      <!-- <div class="video-container relative" v-scroll-reveal.reset="$fadeInUp(1000, 2500)">
        <div :class="`mask absolute flex-c ${isPlay ? 'hide' : ''}`">
          <img src="./s2_play_btn.png" @click="handlePlay" alt="心天畝的圖片" />
        </div>
        <video ref="video">
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div>-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 1050px;
  position: relative;

  .tree-left {
    width: 33%;
    max-width: 472px;
    left: 0;
    top: 100px;
  }

  .tree-right {
    width: 28%;
    max-width: 410px;
    right: 0;
    top: 250px;
  }

  .content {
    width: 572px;
    margin: 0 auto;
    text-align: left;
    position: relative;

    .clock {
      bottom: 50px;
    }

    .second {
      margin-left: 160px;
    }

    .title {
      width: 339px;
      height: 100px;
      background-image: url('./s2_title_bg.png');
      background-size: cover;
      margin-bottom: 50px;
      color: #fff;
      font-size: 28px;
    }

    .sub-title {
      display: block;
      padding-left: 10px;
      border-left: 7px solid rgba(77, 77, 77, 0.3);
      color: #4d4d4d;
      font-size: 24px;
      margin-bottom: 15px;
    }

    p {
      line-height: 1.5;
      margin-bottom: 50px;
    }
  }

  .video-container {
    width: 950px;
    margin: 0 auto;
    .mask {
      z-index: 1;
      left: 0;
      width: 720px;
      height: 405px;
      background: rgba(0, 0, 0, 0.4);
      transition: all 0.5s;

      &.hide {
        opacity: 0;
      }

      img {
        width: 70px;
        cursor: pointer;
        position: relative;
        z-index: 2;
      }
    }
    video {
      position: absolute;
      left: 0;
      width: 720px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    height: 778px;
    padding-top: 75px;

    .tree-left {
      width: 30%;
      max-width: 323px;
      top: 75px;
    }

    .tree-right {
      width: 27%;
      max-width: 286px;
      top: 225px;
    }

    .content {
      width: 430px;

      .second {
        margin-left: 120px;
      }

      .title {
        width: 251px;
        height: 71px;
        font-size: 20px;
      }

      .sub-title {
        display: block;
        padding-left: 10px;
        font-size: 18px;
        margin-bottom: 15px;
      }

      p {
        line-height: 1.5;
        font-size: 12px;
        margin-bottom: 50px;
      }
    }

    .video-container {
      width: 750px;
      margin: 0 auto;
      .mask {
        width: 532px;
        height: 300px;

        img {
          width: 60px;
        }
      }
      video {
        width: 532px;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .container {
    width: 100vw;
    height: auto;
    padding-top: 25px;

    .tree-left,
    .tree-right {
      display: none;
    }

    .content {
      width: 280px;

      .second {
        margin-left: 0px;
      }

      .title {
        width: 275px;
        height: 80px;
        font-size: 32px;
        margin-bottom: 20px;
      }

      .sub-title {
        display: block;
        padding-left: 10px;
        font-size: 15px;
        margin-bottom: 15px;
      }

      p {
        line-height: 1.5;
        font-size: 12px;
        margin-bottom: 25px;
      }
    }

    .video-container {
      width: 100%;
      margin: 0 auto;
      .mask {
        width: 100vw;
        height: calc((100vw * 9) / 16);

        img {
          width: 60px;
        }
      }
      video {
        position: relative;
        width: 100vw;
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
export default {
  name: 'section2',

  data() {
    return {
      loading: false,
      isPlay: false,
    }
  },

  methods: {
    handlePlay() {
      if (this.isPlay) {
        this.isPlay = false
        this.$refs.video.pause()
      } else {
        this.isPlay = true
        this.$refs.video.play()
      }
    },
  },

  created() {},
}
</script>
