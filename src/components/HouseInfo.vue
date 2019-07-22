<template>
  <div class="house-info">
    <div class="content">
      <div class="title">建案資訊</div>
      <div class="info">
        <div class="item" :key="infos[0]" v-for="infos in houseInfos">
          <h3 class="label">{{infos[0]}}</h3>
          <p class="desc">{{infos[1]}}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import info from '@/info'
import Footer from '@/layouts/Footer.vue'
export default {
  name: 'houseInfo',
  components: {
    Footer,
  },
  data() {
    return {
      houseInfos: info.houseInfos,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.house-info {
  width: 100vw;
  background: $house_bg;
}
.content {
  width: 686px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 36px;
  line-height: 36px;
  margin: 60px 0;
  font-family: 'Noto Serif TC', serif;
  font-weight: bold;
  color: $house_title_color;
}

.info {
  display: flex;
  flex-wrap: wrap;
}

.item {
  font-size: 16px;
  margin-bottom: 40px;
  margin-right: 160px;
  width: 260px;
  border-left: 4px solid $house_label_color;
  padding-left: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  &:nth-of-type(even) {
    margin-right: 0;
  }

  .label {
    font-size: 16px;
    color: $house_label_color;
    margin-bottom: 0;
    margin-right: 20px;
    white-space: nowrap;
  }

  .desc {
    font-size: 16px;
    color: $house_desc_color;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .content {
    width: 100%;
    margin-bottom: 20px;
  }

  .title {
    font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    margin-bottom: 20px;
    margin-right: 0;
    width: 100%;
    margin-left: 20px;
    white-space: normal;
  }

  .info {
    width: 100%;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 686px;
  }

  .title {
    font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    margin-bottom: 20px;
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
</style>
