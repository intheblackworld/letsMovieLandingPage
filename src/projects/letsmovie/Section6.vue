<template>
  <div class="section6">
    <div class="container">
      <p class="title flex-c" v-scroll-reveal.reset="$fadeInUp()">使用者回饋</p>
      <p>
        台北高小姐：「很棒的活動，看了場好電影，一起分享，認識新朋友，聊著彼此對電影的感覺，很有趣！」
        <br />
        台北許先生：「謝謝let’s movie 舉辦這樣清新優質的活動，畢竟平常要認識新朋友的機會不算多，如有下一次也很願意參加，辛苦了！」
        <br />高雄張先生：「願意花心力舉辦活動，促成男生女生，又有適時介入聊天與活動討論！」
        <br />高雄黃小姐：「謝謝小編讓我們渡過美好的一天！」
        <br />台北林小姐：「覺得ㄧ開始有保護隱私，（不能一開始就加Line)很不錯，讓我很安心地參加活動」
        <br />台北鄭小姐：「line一起進來引導,與簡訊通知,還有配對安排.真的很謝謝你們！給我們很棒的機會去認識異性朋友 ：）」
        <br />台北林小姐：「覺得ㄧ開始有保護隱私，（不能一開始就加Line)很不錯，讓我很安心地參加活動」
        <br />台南林小姐：「謝謝你們辦這個活動讓單身男女有機會去認識不同的人」
        <br />「很自然，對方也是很交朋友的心情，所以聊起來也沒什麼顧忌，反而有點像本來就是朋友的感覺，滿好的。」
        <br />「很放心 不像一般網路擔心不安全網友。 」
        <br />「氣氛愉快電影好看。 」
        <br />「萍水相逢卻像是多年不見的好友，感謝Let’s Movie安排這次活動。」
        <br />台北江小姐：滿有趣的，比起線上交友這個會比較令人安心
        台北呂小姐：第一次參加這種活動，整體很有創意也不會讓人感覺很像相親<br />
        台北林小姐：覺得ㄧ開始有保護隱私（不能一開始就加Line)很不錯 讓我很安心地參加活動<br />
        台北蔡先生：在我第一個配對對象無法參與時 ，主辦單位很迅速的找到下一位 ，這樣的處理方式和效率 ，我覺得很滿意<br />
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 980px;
  margin: 0 auto;
  text-align: center;

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

  p {
    text-align: left;
  }

  .sub-title {
    font-size: 28px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 24px;
    color: #2b466f;
    margin-bottom: 20px;
  }

  .item-container {
    > div {
      height: 200px;
      margin-bottom: 60px;

      &:hover {
        img {
          opacity: 0;
        }
        .hover {
          opacity: 1;
        }

        .border {
          box-shadow: inset 0 0 0 3px #638ece;
        }

        .in-border {
          box-shadow: inset 0 0 0 3px #b5ce63;
        }
      }
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 60%;
      transition: all 0.7s;
      opacity: 1;
    }

    .hover {
      opacity: 0;
    }

    .border {
      width: 180px;
      height: 180px;
      padding: 5px;
      position: relative;
      border-radius: 50% 50%;
      box-shadow: inset 0 0 0 0px #638ece;
      transition: all 0.7s;
      margin-bottom: 20px;
    }

    .in-border {
      width: 100%;
      height: 100%;
      border-radius: 50% 50%;
      box-shadow: inset 0 0 0 0px #b5ce63;
      transition: all 0.5s;
    }

    .desc {
      width: 100%;
      line-height: 1.5;
      font-size: 16px;
      color: #4d4d4d;
    }
  }
}

.bg {
  width: 100vw;
  margin-top: 30px;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .bg {
    margin-top: 0;
  }
  .container {
    width: 100vw;
    margin: 0 auto;
    text-align: center;
    padding-top: 25px;

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
      margin-bottom: 40px;
      width: 200px;
      margin: 0 auto;
    }

    .item-container {
      margin-top: 40px;
      > div {
        height: 240px;
        margin-bottom: 30px !important;

        &:nth-last-child(1) {
          margin: 0 auto;
        }

        &:hover {
          img {
            opacity: 0;
          }
          .hover {
            opacity: 1;
          }

          .border {
            box-shadow: inset 0 0 0 3px #638ece;
          }

          .in-border {
            box-shadow: inset 0 0 0 3px #b5ce63;
          }
        }
      }

      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 60%;
        transition: all 0.7s;
        opacity: 1;
      }

      .hover {
        opacity: 0;
      }

      .border {
        width: 100%;
        height: 50vw;
        padding: 5px;
        position: relative;
        border-radius: 50% 50%;
        box-shadow: inset 0 0 0 0px #638ece;
        transition: all 0.7s;
        margin-bottom: 0px;
      }

      .in-border {
        width: 100%;
        height: 100%;
        border-radius: 50% 50%;
        box-shadow: inset 0 0 0 0px #b5ce63;
        transition: all 0.5s;
      }

      .desc {
        width: 100%;
        line-height: 1.5;
        font-size: 16px;
        color: #4d4d4d;
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
  name: 'section6',

  data() {
    return {
      isMobile,
      topList: [
        {
          src: require('./s6_top1.png'),
          colorSrc: require('./s6_top1_color.png'),
          desc: '168米綠園道<br />風光入室光影相伴',
        },
        {
          src: require('./s6_top2.png'),
          colorSrc: require('./s6_top2_color.png'),
          desc: '稀有獨棟雙拼<br />戶戶邊間齊質社區',
        },
        {
          src: require('./s6_top3.png'),
          colorSrc: require('./s6_top3_color.png'),
          desc: '六樓電梯華廈<br />豪宅格局三面採光',
        },
        {
          src: require('./s6_top4.png'),
          colorSrc: require('./s6_top4_color.png'),
          desc: '樑柱外露設計<br />空間方正好擺設',
        },
      ],
      bottomList: [
        {
          src: require('./s6_bottom1.png'),
          colorSrc: require('./s6_bottom1_color.png'),
          desc: '光時空間設計<br />陽光梯廳衛浴開窗',
        },
        {
          src: require('./s6_bottom2.png'),
          colorSrc: require('./s6_bottom2_color.png'),
          desc: '29.5%低公設<br />實用設計坪效更高',
        },
        {
          src: require('./s6_bottom3.png'),
          colorSrc: require('./s6_bottom3_color.png'),
          desc: '少有低密度社區<br />閑靜質樸零店面',
        },
      ],
    }
  },

  methods: {},

  created() {
    window.setTimeout(() => {
      // this.loading = true
    }, 1500)
  },
}
</script>
