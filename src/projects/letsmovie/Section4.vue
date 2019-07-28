<template>
  <div class="section4 pt-40 pb-30">
    <div class="container">
      <p
        class="title flex-c m-auto"
        v-scroll-reveal.reset="!isMobile ? $fadeInUp(0) : $fadeInUp()"
      >安心的理由</p>
      <div class="graph flex-ac flex-jb">
        <div class="flex-c" v-scroll-reveal.reset="$fadeInRight()">
          <span class="radar male"></span>
          <font-awesome-icon icon="male" class="male" />
        </div>
        <div class="flex-c" v-scroll-reveal.reset="$fadeInUp(400)">
          <span class="radar robot"></span>
          <font-awesome-icon icon="robot" class="robot" />
        </div>
        <div class="flex-c" v-scroll-reveal.reset="$fadeInLeft()">
          <span class="radar female"></span>
          <font-awesome-icon icon="female" class="female" />
        </div>
      </div>

      <div class="desc" v-scroll-reveal.reset="$fadeInUp(600)">
        為了讓你們能
        <span class="pink">更放心地</span>使用我們的服務，我們的配對機制
        <br />能讓你們傳送的訊息都藉由
        <span class="green">機器人</span>轉送
        <br />所以絕對不會透露個人資料給對方
        <br />如 Line/臉書帳號/真實姓名/其它隱密個資
        <br />
      </div>

      <div class="card" v-scroll-reveal.reset="$fadeInUp(800)">
        <font-awesome-icon icon="id-card" class="card" />
        <p>
          註冊時採取實名認證以及年齡驗證
          <br />避免詐騙等狀況發生
        </p>
      </div>
      <div class="warning" v-scroll-reveal.reset="$fadeInUp(1000)">
        <font-awesome-icon icon="exclamation-triangle" />
        <p v-if="!isMobile">
          請在配對成功後出去看電影的時候
          <span>嚴格遵守</span>
          <br />我們的
          <span class="big">安全守則</span>
          我們很認真的看待關於安全的議題
          <br />所以對於沒有遵守的人，我們採取
          <span>零容忍</span>的態度
          <br />一律黑名單，未來不得參與 Let’s Movie 的任何活動
        </p>
        <p v-else>
          請在配對成功後出去看電影的時候嚴格遵守我們的
          <span class="big">安全守則</span>
          <br />我們很認真的看待關於安全的議題
          <br />所以對於沒有遵守的人
          <br />我們採取
          <span>零容忍</span>的態度
          <br />一律黑名單
          <br />未來不得參與 Let’s Movie 的任何活動
        </p>
        <div>
          <div class="btn border flex-c danger m-auto" @click="visible = true">點擊查看守則</div>
        </div>
      </div>
    </div>
    <el-dialog title="安全守則" :visible.sync="visible" width="600px" fullscreen>
      <div class="policy-dialog-content">
        <p>1. 男生在整個約會過程當中，除非取得女生同意，否則不能以任何形式，要求女生的聯絡方式</p>

        <p>2. 整個約會過程當中，請雙方務必抱持互相尊重的態度，不可出現攻擊性，性別騷擾性的行為跟言詞</p>

        <p>3. 遵守時間觀念是對彼此的尊重，所以除非有緊急事故，請雙方都要在約定的時間於約定地點碰面，切勿遲到</p>

        <p>4. 我們沒有限制看電影之後的續攤行程，但是任何續攤行程請在雙方都合意的情況下進行</p>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
@keyframes pulse {
  from {
    transform: scale(1, 1);
    opacity: 0.5;
  }
  to {
    transform: scale(4, 4);
    opacity: 0;
  }
}

.section4 {
  background: #141e30;
  background: -webkit-linear-gradient(to top, #141e30, #1b2c3f);
  background: linear-gradient(to top, #141e30, #1b2c3f);
}

.container {
  width: 1090px;
  margin: 0 auto;

  .title {
    width: 340px;
    height: 101px;
    margin-bottom: 25px;
    font-weight: normal !important;
    color: #fff;
    font-size: 36px;
  }

  .graph {
    width: 500px;
    height: 100px;
    margin: 150px auto 50px;
    position: relative;

    .radar {
      border: 50px solid;
      animation: pulse infinite 3s linear;
      transform: scale(0, 0);
      opacity: 0;
      position: absolute;
      border-radius: 100%;
      height: 100px;
      width: 100px;

      &.male {
        border-color: #bbc8e4;
        animation-delay: 0s;
      }
      &.robot {
        border-color: #a3daa1;
        animation-delay: 1s;
      }
      &.female {
        border-color: #db7093;
        animation-delay: 2s;
      }
    }

    .robot {
      color: #666;
      width: 100px;
      height: auto;
      position: absolute;
      margin-top: -30px;
      z-index: 2;
    }

    .male {
      width: auto;
      height: 100px;
      color: #87cefa;
      position: absolute;
      z-index: 2;
    }

    .female {
      width: auto;
      height: 100px;
      color: #ffc0cb;
      position: absolute;
      z-index: 2;
    }
  }

  .desc {
    width: 500px;
    color: #fff;
    font-size: 18px;
    margin: 0 auto;
    text-align: left;

    .pink {
      color: #db7093;
    }

    .green {
      color: #a3daa1;
    }
  }

  .card {
    width: 500px;
    margin: 50px auto 30px;

    color: #fff;
    svg {
      width: 80px;
      height: auto;
    }
  }

  .warning {
    width: 500px;
    margin: 50px auto 30px;

    color: #fff;
    svg {
      width: 80px;
      height: auto;
      margin-bottom: 30px;
    }

    span {
      color: #db7093;
    }

    .big {
      font-size: 26px;
      font-weight: normal !important;
      margin: 10px auto;
    }
  }

  .danger {
    color: #fff;
    border: 1px solid #ff4500;
    &:hover {
      color: #fff;
      background: #ff4500;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 810px;
    margin: 0 auto;

    .title {
      width: 251px;
      height: 75px;
      margin-bottom: 25px;
      color: #fff;
      font-size: 30px;
      margin-top: 30px;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  @keyframes pulse {
    from {
      transform: scale(1, 1);
      opacity: 0.5;
    }
    to {
      transform: scale(2, 2);
      opacity: 0;
    }
  }
  .container {
    width: 100vw;
    margin: 0 auto;

    .title {
      width: 300px;
      height: 90px;
      margin-bottom: 15px;
      color: #fff;
      font-size: 30px;
    }

    .graph {
      width: 200px;
      height: 100px;
      margin: 40px auto 50px;
      position: relative;

      .radar {
        border: 30px solid;
        animation: pulse infinite 3s linear;
        transform: scale(0, 0);
        opacity: 0;
        position: absolute;
        border-radius: 100%;
        height: 50px;
        width: 50px;

        &.male {
          border-color: #bbc8e4;
          animation-delay: 0s;
        }
        &.robot {
          border-color: #a3daa1;
          animation-delay: 1s;
        }
        &.female {
          border-color: #db7093;
          animation-delay: 2s;
        }
      }

      .robot {
        color: #666;
        width: 50px;
        height: auto;
        position: absolute;
        margin-top: -30px;
        z-index: 2;
      }

      .male {
        width: auto;
        height: 50px;
        color: #87cefa;
        position: absolute;
        z-index: 2;
      }

      .female {
        width: auto;
        height: 50px;
        color: #ffc0cb;
        position: absolute;
        z-index: 2;
      }
    }

    .desc {
      width: 100vw;
      padding: 0 20px;
      font-size: 14px;
    }

    .card {
      width: 300px;
      margin: 30px auto 40px;
      font-size: 14px;
      color: #fff;
      svg {
        width: 80px;
        height: auto;
      }
    }

    .warning {
      width: 300px;
      margin: 30px auto 0px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      svg {
        width: 80px;
        height: auto;
        margin: 0 auto;
        margin-bottom: 30px;
      }

      span {
        color: #db7093;
      }

      .big {
        font-size: 20px;
        font-weight: normal !important;
        margin: 10px auto;
      }
    }

    .btn {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 16px;
      height: 45px;
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
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isMobile,
      loading: true,
      visible: false,
    }
  },

  created() {},

  mounted() {
    window.setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>
