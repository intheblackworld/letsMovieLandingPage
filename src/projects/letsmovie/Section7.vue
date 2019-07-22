<template>
  <div class="section7">
    <div class="section">
      <div>
        電影院，是兩個人靜靜地沈浸在劇中的場景與故事
        實現自己腦中幻想的地方
        成為想成為的人，去到想去的地方
        兩張座椅，托住兩個不同生活經歷，背景的人
        在這個時刻有了交集，有了共同的話題
        甚至，也有了一起會心一笑的可能性
        一個人去電影院有多孤獨
        那兩個人去看電影就有多幸福
        共享一桶爆米花，或者剛剛才買的珍奶跟雞排
        給你自己一個吃點垃圾食物，放縱的理由
        因為有了個人陪你一起承受這奢侈的罪惡感
        從電影開場前的初次見面，寒暄問好
        到電影散場之後，一起聊著剛剛的故事情節
        一切其實可以很自然，就像認識了很久的老朋友
        最後有禮貌的互道聲晚安，在心底給自己一聲歡呼
        慶幸緣分
        其實沒那麼難
      </div>
      <div class="btn flex-c">開始配對</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  width: 340px;
  height: 101px;
  background-image: url('./s6_title_bg.png');
  background-size: cover;
  color: #fff;
  font-size: 28px;
  margin: 0 auto;
  margin-bottom: 25px;
}

.sub-title {
  font-size: 28px;
  color: #2b466f;
  margin-bottom: 20px;
}

.small-title {
  font-size: 24px;
  color: #2b466f;
  margin-bottom: 40px;
}

.section {
  width: 100vw;
  height: 430px;
  background-size: cover;
  background-image: url('./s7_section_bg.png');
  color: #fff;
  padding-top: 50px;
  margin-bottom: 50px;
  > div {
    width: 400px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .section-sub-title {
    font-size: 24px;
    margin-bottom: 50px;
  }

  .list-container {
    width: 610px;
    margin: 0 auto;
    .list-item {
      width: 50%;
      text-align: left;
      margin-bottom: 25px;

      &:nth-child(3) {
        transform: translateX(55px);
      }

      &:nth-child(4) {
        transform: translateX(55px);
      }

      &:nth-child(5) {
        transform: translateX(110px);
      }

      .list-label {
        height: 23px;
        border-left: 7px solid rgba(255, 255, 255, 0.3);
        font-size: 24px;
        padding-left: 15px;
      }

      .list-desc {
        padding-left: 20px;
        padding-top: 10px;
        font-size: 16px;
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .title {
    width: 300px;
    height: 90px;
    background-image: url('./s6_title_bg.png');
    background-size: cover;
    margin-bottom: 15px;
    color: #fff;
    font-size: 32px;
  }

  .sub-title {
    font-size: 18px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 15px;
    color: #2b466f;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .title {
    width: 300px;
    height: 90px;
    background-image: url('./s6_title_bg.png');
    background-size: cover;
    margin-bottom: 15px;
    color: #fff;
    font-size: 32px;
  }

  .sub-title {
    font-size: 18px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 15px;
    color: #2b466f;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .section {
    width: 100vw;
    height: calc(100vw * (476 / 320));
    background-size: cover;
    background-image: url('./s7_section_bg_m.png');
    color: #fff;
    padding-top: 60px;
    margin-bottom: 50px;

    .section-title {
      font-size: 20px;
      margin-bottom: 12px;
    }

    .section-sub-title {
      font-size: 17px;
      margin-bottom: 15px;
    }

    .list-container {
      width: 100vw;
      margin: 0 auto;
      .list-item {
        width: 230px;
        text-align: left;
        margin: 0 auto;
        margin-bottom: 15px;

        &:nth-child(3) {
          transform: translateX(0px);
        }

        &:nth-child(4) {
          transform: translateX(0px);
        }

        &:nth-child(5) {
          transform: translateX(0px);
        }

        .list-label {
          height: 23px;
          border-left: 7px solid rgba(255, 255, 255, 0.3);
          font-size: 16px;
          padding-left: 15px;
          padding-top: 3px;
        }

        .list-desc {
          padding-left: 15px;
          padding-top: 5px;
          font-size: 16px;
        }
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
import { isMobile } from '@/utils'
export default {
  name: 'section7',

  data() {
    return {
      isMobile,
      loading: true,
    }
  },

  methods: {},

  created() {
    window.setTimeout(() => {
      // this.loading = false
    }, 1500)
  },
}
</script>
