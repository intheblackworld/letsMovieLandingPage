<template>
  <div class="section6 bg-cover">
    <div class="linear-g-mask">
      <div class="container pt-40 pb-30">
        <p class="title flex-c" v-scroll-reveal.reset="$fadeInUp()">聽聽使用者怎麼說</p>
        <div class="bullet-wall">
          <div
            class="bullet"
            v-for="bullet in bulletList"
            :key="bullet[1]"
          >{{bullet[0]}} : {{bullet[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section6 {
  background-image: url(./s6_bg.jpg);
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
    width: 340px;
    height: 101px;
    color: #fff;
    font-size: 34px;
    letter-spacing: 4px !important;
    margin: 0 auto;
    margin-bottom: 25px;
  }

  .bullet-wall {
    color: #fff;
    font-weight: normal !important;

    .bullet {
      font-size: 22px;
      animation: bullet infinite 30s linear;
      opacity: 0;
      transform: translateX(100vw);

      @for $i from 1 through 20 {
        @if $i % 2 == 0 {
          &:nth-child(#{$i}) {
            animation-delay: #{$i}s;
          }
        }

        @if $i % 2 == 1 {
          &:nth-child(#{$i}) {
            animation-delay: calc(#{$i}s * 2.33);
          }
        }

        @if $i % 3 == 0 {
          &:nth-child(#{$i}) {
            animation-delay: calc(20s - #{$i}s);
          }
        }

        @if $i % 5 == 0 {
          &:nth-child(#{$i}) {
            color: #db7093;
            animation: bullet infinite 25s linear;
            animation-delay: calc(#{$i}s * 1.5);
          }
        }

        @if $i % 7 == 0 {
          &:nth-child(#{$i}) {
            color: #87cefa;
            animation: bullet infinite 34s linear;
            animation-delay: calc(#{$i}s * 0.75);
          }
        }
      }
    }
  }
}

@keyframes bullet {
  0% {
    transform: translateX(100vw);
    opacity: 0.2;
  }

  20% {
    transform: translateX(60vw);
    opacity: 1;
  }

  90% {
    transform: translateX(-80vw);
    opacity: 1;
  }
  100% {
    transform: translateX(-100vw);
    opacity: 0;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    .bullet-wall {
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
  .container {
    .title {
      font-size: 24px;
      margin-bottom: 15px;
    }
    .bullet-wall {
      color: #fff;
      font-weight: normal !important;

      .bullet {
        font-size: 13px;
        white-space: nowrap;
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
      bulletList: [
        ['高雄陳先生', '拓展交友圈，很開心選的電影得了奧斯卡。'],
        ['台北邵先生', '春天似乎提早來了'],
        ['台北丁先生', '很簡單且自然的就可以認識到不同領域的人'],
        ['台北張先生', '非常感謝，可以多認識一個知性的異性'],
        ['台北陳先生', '很特別的體驗，我會想繼續嘗試'],
        [
          '台北劉先生',
          '很自然，對方也是很交朋友的心情，所以聊起來也沒什麼顧忌，反而有點像本來就是朋友的感覺，滿好的。',
        ],
        ['台北施小姐', '棒棒的，認識新朋友很好'],
        ['台北呂小姐', '很棒~聊天很開心電影也很好看！！'],
        ['台北張小姐', '遇到的人很不錯'],
        [
          '台北鄭小姐',
          '很開心認識到不同的人～還一起看了都想看的電影 ,覺得很棒很開心～',
        ],
        ['台北江小姐', '滿有趣的，比起線上交友這個會比較令人安心'],
        ['台北姜小姐', '透過對相同電影的偏好交朋友，真的是個很棒的概念~'],
        ['台北余小姐', '電影好看，對方很有禮貌'],
        ['台北高小姐', '暢談甚歡'],
        [
          '台北林小姐',
          '「覺得ㄧ開始有保護隱私，（不能一開始就加Line)很不錯，讓我很安心地參加活動」',
        ],
        [
          '台北高小姐',
          '「很棒的活動，看了場好電影，一起分享，認識新朋友，聊著彼此對電影的感覺，很有趣！」',
        ],
        [
          '台北呂小姐',
          '第一次參加這種活動，整體很有創意也不會讓人感覺很像相親',
        ],
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
