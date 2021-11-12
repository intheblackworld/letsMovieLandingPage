<template>
  <div class="datings">
    <div class="title">個人約會資訊</div>
    <div class="item-title">
      目前等級: <span class="level">Lv.{{level}}</span>
    </div>
    <div class="level-desc">
      累積星等: <span>{{stars}}🌟</span> <br />距離下一個等級還差 <span>{{restStars}}🌟</span>顆星：
    </div>
    <div class="item-title">
      過去約會記錄
    </div>

    <div class="dating-list" v-if="datings.length> 0">
      <div class="dating-item" v-for="date in datings">
        <div class="dating-inner">
          <img :src="date.img_url" alt="">
          <div class="dating-content">
            你在 <b>{{date.meet_time}}</b> 的時候跟 <b>{{date.mate_name}}</b> 一起看了 <b>{{date.movie_name}}</b><br />
            <div v-if="date.content && date.content !== '無'">你跟對方說：<b>{{date.content}}</b></div>
            <div v-if="date.mate_content && date.mate_content !== '無'">對方跟你說：<b>{{date.mate_content}}</b></div>
            你給了對方<span>{{date.scores}}</span>顆星🌟<br />
            對方給了你<span>{{date.mate_scores}}</span>顆星🌟
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.el-date-table td.current:not(.disabled) span {
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
.datings {
  background: linear-gradient(to bottom, #000, #222, #252525);
  color: #fff;
  min-height: 100vh;
  padding: 40px 20px 40px 20px;
}

.title {
  text-align: left;
  color: #fff;
  border-left: 3px solid #af0404;
  padding-left: 15px;
  font-size: 30px;
  margin-bottom: 25px;
}

.item-title {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.level {
  background: orange;
  border-radius: 8px;
  padding: 0 10px;
  font-weight: bold !important;
  font-size: 1.2rem;
  margin-left: 0.3rem;
}

.level-desc {
  text-align: left;
}

.dating-item {
  width: 25vw;
  padding: 25px;
  position: relative;
  z-index: 10;
  .dating-inner {
    border-radius: 10px;
    overflow: hidden;
    background-color: #1d1c26;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.8);
  }
  .dating-content {
    padding: 20px 15px 15px 20px;

    b, span {
      font-weight: bold !important;
    }
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
    background-color: #1d1c26;
  }

  p {
    line-height: 1.8 !important;
    text-align: left;
  }

  .red {
    color: #db7093;
  }

  .blue {
    color: #87cefa;
  }

  .hot {
    font-weight: bold !important;
    color: rgb(240, 198, 119);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .dating-item {
    width: 100%;
    padding: 0;
    margin-bottom: 25px;
  }

  .dating-item .dating-content {
    text-align: left;
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
import moment from 'moment'

export default {
  name: 'userinfo',
  components: {
    // Loading,
  },

  data() {
    return {
      me: '',
      loading: false,
      moment: moment,
      fb_id: '',
      datings: [],
      interval: '',
      stars: 0,
      needStars: [5, 10, 20, 30, 50, 70, 100, 150, 200],
    }
  },

  computed: {
    level() {
      if (this.stars <= 5) {
        return 1
      } else if (this.stars <= 10) {
        return 2
      } else if (this.stars <= 20) {
        return 3
      } else if (this.stars <= 30) {
        return 4
      } else if (this.stars <= 50) {
        return 5
      } else if (this.stars <= 70) {
        return 6
      } else if (this.stars <= 100) {
        return 7
      } else if (this.stars <= 150) {
        return 8
      } else if (this.stars <= 200) {
        return 9
      } else if (this.stars > 200) {
        return 10
      }
    },
    // 1-5 LV1
    // 5-10 LV2
    // 10-20 LV3
    // 20-30 LV4
    // 30-50 LV5
    // 50-70 LV6
    // 70-100 LV7
    // 100-150 LV8
    // 150-200 LV9
    // 200以上 LV10
    restStars() {
      return this.needStars[this.level - 1] - this.stars
    },
  },
  destroyed() {
    clearInterval(this.interval)
  },

  mounted() {
    this.fb_id = this.$route.query.id
    fetch(
      'https://bot-production.letsmovienow.com/api/webview/getUserDatingData',
      {
        // fetch('https://165d54a196b7.ngrok.io/api/webview/getUserData', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ fb_id: this.fb_id }),
      },
    )
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res.err) {
          // const h = this.$createElement
          this.$notify({
            title: res.err,
          })
        } else {
          this.stars = res.data.stars
          this.datings = res.data.dating_list.filter((date) => !!date)
        }
      })
  },

  methods: {
    // closeWebView() {
    //   this.me.requestCloseBrowser(
    //     function success() {},
    //     function error(err) {
    //       console.log(err)
    //     },
    //   )
    // },
  },

  created() {},
}
</script>