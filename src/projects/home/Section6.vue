<template>
  <div class="section6 bg-cover relative">
    <div class="container pt-40 pb-30">
      <img
        src="./s6_fb_ms.png"
        alt=""
        class="fs"
        v-if="!isMobile"
        @click="addChunkIndex"
      >
      <div class="prev flex-c" v-if="isMobile" @click="decChunkIndex"><img src="./arrow-left.png" alt=""></div>
      <div class="next flex-c" v-if="isMobile" @click="addChunkIndex"><img src="./arrow-right.png" alt=""></div>
      <p
        class="title flex-c"
        :data-aos="isMobile ? '' : 'fade-up'"
        data-aos-delay="0"
        data-aos-duration="800"
      >上百組真實使用者回饋</p>
      <p
        class="desc flex-c"
        :data-aos="isMobile ? '' : 'fade-up'"
        data-aos-delay="0"
        data-aos-duration="800"
      >(大頭貼為示意圖)</p>
      <transition-group
        name="slide-fade"
        mode="out-in"
        class="ms-wall relative"
      >
        <div
          class="ms-dialog"
          v-for="(ms, index) in isMobile ? mobileFeedBack[chunkIndex] : pcFeedBack[chunkIndex]"
          :key="ms.boy"
        >
          <div class="ms-head flex-ac">
            <img
              src="./bot-logo.png"
              alt=""
              class="bot-logo"
            >
            Let's Movie 電影約會 bot
          </div>
          <div class="ms-content-t">
            <img
              :src="girl_avatars[index]"
              alt=""
              class="ms-avatar"
            >
            <div class="ms-box-w">
              {{ms.girl}}
            </div>
          </div>
          <div class="ms-content-b">
            <div class="ms-box-b">
              {{ms.boy}}
            </div>
            <img
              :src="boy_avatars[index]"
              alt=""
              class="ms-avatar"
            >
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section6 {
  background: #fff;
  background-image: url(./fanspage.png);
  background-size: cover;
  border-top: 40px solid #4267b2;
}

.linear-g-mask {
  width: 100vw;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));
}

.container {
  width: 100vw;
  margin: 0 auto;
  text-align: left;

  .title {
    width: 440px;
    height: 101px;
    color: #eee;
    font-size: 34px;
    font-weight: 500 !important;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    letter-spacing: 2px !important;
    margin: 0 auto;
    margin-bottom: 25px;
    top: 20%;
    left: 0;
    right: 0;
    position: absolute;
  }

  .desc {
    top: 30%;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: #ccc;
    font-weight: 500 !important;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    position: absolute;
    text-align: left;
  }

  .ms-wall {
    color: #fff;
    font-weight: normal !important;
    display: block;
    height: 700px;
  }
}

.fs {
  width: 200px;
  position: absolute;
  z-index: 3;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  animation: jump 1s ease-in-out 0s infinite;
}

.bot-logo {
  width: 24px;
  border-radius: 30px;
  margin-right: 5px;
}

@keyframes jump {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(-55%);
  }
  100% {
    transform: translateY(-50%);
  }
}

.ms-dialog {
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  border-radius: 8px;
  width: 400px;
  margin-bottom: 20px;
  overflow: hidden;
  position: absolute;
  &:hover {
    z-index: 1;
  }
  .ms-head {
    padding: 5px 10px;
    background-color: #4284fb;
    color: #fff;
    width: 100%;
    font-weight: 500 !important;
    letter-spacing: 0px !important;
  }

  .ms-avatar {
    width: 30px;
    border-radius: 30px;
    background-color: rosybrown;
    margin: 5px;
  }

  .ms-content-t {
    position: relative;
    background-color: #fff;
    width: 100%;
    padding: 30px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .ms-content-b {
    position: relative;
    background-color: #fff;
    width: 100%;
    padding: 10px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .ms-box-w {
    background-color: #ececec;
    border-radius: 8px;
    width: 250px;
    padding: 5px 10px;
    color: #333;
    font-weight: 400 !important;
    letter-spacing: -0.5px !important;
  }

  .ms-box-b {
    background-color: #4284fb;
    border-radius: 8px;
    width: 250px;
    padding: 5px 10px;
    color: #fff;
    font-weight: 400 !important;
    letter-spacing: -0.5px !important;
  }

  &:nth-child(1) {
    top: -10%;
    left: 12%;
    transition-delay: 0 !important;
  }

  &:nth-child(2) {
    top: 27%;
    left: 5%;
    transition-delay: 0.2s !important;
  }

  &:nth-child(3) {
    top: 62%;
    left: 25%;
    transition-delay: 0.4s !important;
  }

  &:nth-child(4) {
    top: -7%;
    right: 11%;
    transition-delay: 0.6s !important;
  }

  &:nth-child(5) {
    top: 35%;
    right: 2%;
    transition-delay: 0.8s !important;
  }

  &:nth-child(6) {
    top: 62%;
    right: 22%;
    transition-delay: 1s !important;
  }
}

.slide-fade-enter-active {
  transition: transform 0.4s cubic-bezier(1, 0.5, 0.8, 1), opacity 0.2s;
}
.slide-fade-leave-active {
  transition: transform 0s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .ms-wall {
      color: #fff;
      font-weight: normal !important;

      .bullet {
        font-size: 18px;
        white-space: nowrap;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
    background: #e9ebee;
  }
  .container {
    .title {
      font-size: 24px;
      height: auto;
      margin-bottom: 15px;
      position: relative;
      top: 0;
      width: 100vw;
      text-align: center;
      text-shadow: none;
      color: #333;
      margin-bottom: 0px;
    }

    .desc {
      position: relative;
      width: 100vw;
      text-align: center;
      text-shadow: none;
      color: #666;
    }
    .ms-wall {
      color: #fff;
      font-weight: normal !important;
      padding: 15px 10px 0;
      height: 550px;
      overflow: hidden;
    }
  }

  .ms-dialog {
    box-shadow: none;
    background-color: #fff;
    border-radius: 0;
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    // border-bottom: 1px solid #666;
    top: 0 !important;
    left: auto !important;
    right: auto !important;
    &:hover {
      z-index: 1;
    }
    .ms-head {
      padding: 5px 10px;
      background-color: #4284fb;
      color: #fff;
      width: 100%;
      font-size: 14px;
      font-weight: 500 !important;
      letter-spacing: 0px !important;
    }

    .ms-avatar {
      width: 24px;
      border-radius: 30px;
      background-color: rosybrown;
      margin: 5px;
    }

    .ms-content-t {
      position: relative;
      background-color: #fff;
      width: 100%;
      padding: 20px 10px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .ms-content-b {
      position: relative;
      background-color: #fff;
      width: 100%;
      padding: 10px 10px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .ms-box-w {
      font-size: 14px;
      background-color: #ececec;
      border-radius: 8px;
      width: 250px;
      padding: 5px 10px;
      color: #333;
      font-weight: 400 !important;
      letter-spacing: -0.5px !important;
    }

    .ms-box-b {
      font-size: 14px;
      background-color: #4284fb;
      border-radius: 8px;
      width: 250px;
      padding: 5px 10px;
      color: #fff;
      font-weight: 400 !important;
      letter-spacing: -0.5px !important;
    }
  }
  .next, .prev {
    position: absolute;
    z-index: 5;
    height: 100vh;
  }
  .next img, .prev img {
    width: 20px;
  }

  .prev {
    left: 0;
    padding-left: 5px;
    padding-right: 15px;
  }

  .next {
    right: 0;
    padding-left: 15px;
    padding-right: 5px;
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
import _ from 'lodash'
export default {
  name: 'section6',

  props: ['feedback'],
  data() {
    return {
      isMobile,
      chunkIndex: 0,
      girl_avatars: [
        require('./girl_avatar/1.png'),
        require('./girl_avatar/2.png'),
        require('./girl_avatar/3.png'),
        require('./girl_avatar/4.png'),
        require('./girl_avatar/5.png'),
        require('./girl_avatar/6.png'),
        require('./girl_avatar/7.png'),
        require('./girl_avatar/8.png'),
        require('./girl_avatar/9.png'),
        require('./girl_avatar/10.png'),
      ],
      boy_avatars: [
        require('./boy_avatar/1.png'),
        require('./boy_avatar/2.png'),
        require('./boy_avatar/3.png'),
        require('./boy_avatar/4.png'),
        require('./boy_avatar/5.png'),
        require('./boy_avatar/6.png'),
        require('./boy_avatar/7.png'),
        require('./boy_avatar/8.png'),
        require('./boy_avatar/9.png'),
        require('./boy_avatar/10.png'),
      ],
    }
  },

  computed: {
    pcFeedBack() {
      return _.chunk(this.feedback, 6)
    },
    mobileFeedBack() {
      return _.chunk(this.feedback, 3)
    },
  },

  methods: {
    addChunkIndex() {
      if (!this.isMobile) {
        if (this.chunkIndex === this.pcFeedBack.length - 1) {
          this.chunkIndex = 0
        } else {
          this.chunkIndex++
        }
      } else {
        if (this.chunkIndex === this.mobileFeedBack.length - 1) {
          this.chunkIndex = 0
        } else {
          this.chunkIndex++
        }
      }
    },

    decChunkIndex() {
      if (!this.isMobile) {
        if (this.chunkIndex === 0) {
          this.chunkIndex = this.pcFeedBack.length - 1
        } else {
          this.chunkIndex--
        }
      } else {
        if (this.chunkIndex === 0) {
          this.chunkIndex = this.mobileFeedBack.length - 1
        } else {
          this.chunkIndex--
        }
      }
    },
  },

  created() {
    if (!this.isMobile) {
      setInterval(() => {
        if (this.chunkIndex === this.pcFeedBack.length - 1) {
          this.chunkIndex = 0
        } else {
          this.chunkIndex++
        }
      }, 15000)
    } else {
      setInterval(() => {
        if (this.chunkIndex === this.mobileFeedBack.length - 1) {
          this.chunkIndex = 0
        } else {
          this.chunkIndex++
        }
      }, 10000)
    }
  },
}
</script>
