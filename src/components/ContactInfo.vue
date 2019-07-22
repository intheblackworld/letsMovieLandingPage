<template>
  <div class="contact-info">
    <img class="logo" src="@/assets/img/contact-logo.png" alt="心天畝的圖片" />
    <div class="info">
      <div class="btn flex-c" @click="showCallDialog">
        <span class="flex-c">
          <font-awesome-icon icon="phone" />
          {{info.phone}}
        </span>
      </div>
      <div class="btn flex-c" v-if="isMobile">
        <span class="flex-c" @click="showMessengerDialog">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" />FB Messenger 諮詢
        </span>
      </div>
      <a class="btn flex-c" :href="info.fbMessage" target="_blank" v-else>
        <span class="flex-c">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" />FB Messenger 諮詢
        </span>
      </a>
      <a class="btn flex-c" :href="info.fbLink" target="_blank">
        <span class="flex-c">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />前往粉絲專頁
        </span>
      </a>
      <div class="address flex-c">{{info.address}}</div>
      <div class="btn flex-c" v-if="isMobile">
        <span class="flex-c" @click="showMapDialog">
          <font-awesome-icon icon="map-marker-alt" />導航 Google 地圖
        </span>
      </div>
      <a class="google-btn flex-c" :href="info.googleLink" target="_blank" v-else>
        <span class="flex-c">
          <font-awesome-icon icon="map-marker-alt" />導航 Google 地圖
        </span>
      </a>
      <el-dialog title :visible.sync="isShowCallDialog" width="90%" :modal-append-to-body="false">
        <CallDialog :phone="info.phone" />
      </el-dialog>
      <el-dialog
        title
        :visible.sync="isShowMessengerDialog"
        width="90%"
        :modal-append-to-body="false"
      >
        <MessengerDialog :messenger="info.fbMessage" />
      </el-dialog>
      <el-dialog title :visible.sync="isShowMapDialog" width="90%" :modal-append-to-body="false">
        <MapDialog :link="info.googleLink" :address="info.address" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import info from '@/info'
import { isMobile, isTablet } from '@/utils'
import CallDialog from '@/components/Dialog/Call'
import MessengerDialog from '@/components/Dialog/Messenger'
import MapDialog from '@/components/Dialog/Map'
export default {
  name: 'contactInfo',
  components: {
    CallDialog,
    MessengerDialog,
    MapDialog,
  },
  data() {
    return {
      info,

      isMobile,
      isTablet,
      isShowCallDialog: false,
      isShowMessengerDialog: false,
      isShowMapDialog: false,
    }
  },
  methods: {
    showCallDialog() {
      if (!this.isMobile) return
      this.isShowCallDialog = true
    },
    showMessengerDialog() {
      if (!this.isMobile) return
      this.isShowMessengerDialog = true
    },

    showMapDialog() {
      if (!this.isMobile) return
      this.isShowMapDialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
@import '@/assets/style/variableDefault.scss';

.contact-info {
  background: $contact_bg;
  box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  transform: translateY(14%);
  position: relative;
  z-index: 3;
  width: 1200px;
  height: 460px;

  margin: 0 auto;
  padding: 60px 0 80px;
}

.logo {
  width: $contact_logo_pc_width;
  height: auto;
  margin: 0 auto;
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_btn_color;
  background: $contact_btn_bg;
  box-shadow: $contact_btn_border;
  transition: all 0.5s;

  svg {
    color: $contact_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    background: $contact_btn_hover_bg;
    color: $contact_btn_hover_color;

    svg {
      color: $contact_btn_hover_icon;
    }
  }
}
.address {
  width: 600px;
  height: 60px;
  box-shadow: $contact_btn_border;
}
.google-btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_google_btn_color;
  background: $contact_google_btn_bg;
  box-shadow: $contact_btn_border;
  transition: all 0.5s;

  svg {
    color: $contact_google_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    background: $contact_google_hover_btn_bg;
    color: $contact_google_hover_btn_color;

    svg {
      color: $contact_google_hover_btn_icon;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .contact-info {
    display: flex;
    width: 90% !important;
    height: 460px;
    padding: 60px 0 80px;

    .logo {
      width: $contact_logo_tablet_width;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .contact-info {
    display: flex;
    width: 100%;
    height: auto;
    padding: 40px;
    transform: none;
    position: static;
    margin-top: 60px;

    .logo {
      width: $contact_logo_mobile_width;
    }
  }

  .info {
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;

    > * {
      margin-bottom: 12px;
    }
  }

  .logo {
    margin-bottom: 20px;
  }

  .address {
    width: 280px;
  }
}
</style>
