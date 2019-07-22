<template>
  <div class="order-bg">
    <h3 class="order-title">{{order.title}}</h3>
    <h3 class="order-subtitle">{{order.subTitle}}</h3>
    <div class="order">
      <div class="form">
        <div class="group">
          <div class="row">
            <label>姓名</label>
            <el-input v-model="form.name" placeholder></el-input>
          </div>
          <div class="row">
            <label>手機</label>
            <el-input v-model="form.phone" placeholder></el-input>
          </div>
          <div class="row">
            <label>E-mail</label>
            <el-input v-model="form.email" placeholder></el-input>
          </div>
          <div class="row">
            <label>居住城市</label>
            <el-select v-model="form.city" placeholder>
              <el-option
                v-for="city in cityList"
                :key="city.value"
                :label="city.label"
                :value="city.value"
              ></el-option>
            </el-select>
          </div>
          <div class="row">
            <label>居住地區</label>
            <el-select v-model="form.area" placeholder>
              <el-option
                v-for="area in areaList"
                :key="area.value"
                :label="area.label"
                :value="area.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="group">
          <div class="row">
            <el-input type="textarea" :rows="2" placeholder="請輸入您的留言 (選填)" v-model="form.msg"></el-input>
          </div>
        </div>
      </div>
      <div class="control">
        <el-checkbox v-model="checked">
          <p>
            本人知悉並同意
            <span @click="showPolicyDialog">「個資告知事項聲明」</span>
            內容
          </p>
        </el-checkbox>
      </div>
      <el-button class="form-submit" type="primary" :disabled="!checked" @click="submit" :loading="isSubmit">立即預約</el-button>
    </div>
    <ContactInfo />
    <GoogleMap />
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'

export default {
  name: 'order',
  components: {
    ContactInfo,
    GoogleMap,
    PolicyDialog,
  },

  data() {
    return {
      cityList,
      order: info.order,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
      },
      checked: false,
      isSubmit: false,
      policyVisible: false,
      showValidateDialog: false,
    }
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city)
    },
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true
    },

    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「姓名、手機、 E-mail、居住城市、居住地區」是必填欄位',
        ),
      })
    },

    submit() {
      if (this.isSubmit) return
      if (!this.checked) return
      this.isSubmit = true
      if (
        !this.form.name ||
        !this.form.phone ||
        !this.form.email ||
        !this.form.city ||
        !this.form.area
      ) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('msg', this.form.msg)
      formData.append('city', this.form.city)
      formData.append('area', this.form.area)
      formData.append('utm_source', utmSource)
      formData.append('utm_medium', utmMedium)
      formData.append('utm_content', utmContent)
      formData.append('utm_campaign', utmCampaign)
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: 'GET',
        },
      ).then(() => {
        fetch('contact-form.php', {
          method: 'POST',
          body: formData,
        }).then(response => {
          this.isSubmit = false
          if (response.status === 200) {
            window.location.href = 'formThanks'
          }
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
.order-bg {
  background-color: $order_bg_color;
  // background-image: $order_bg_image;
  position: relative;
  padding-top: 80px;

  .order-title {
    margin-top: 40px;
    margin-bottom: 8px;
    font-size: 36px;
    text-align: center;
    color: $order_title_color;
  }

  .order-subtitle {
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
  }

  .order {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .form {
    display: flex;
    align-items: center;
    > .group {
      flex: 1;
    }
  }

  .group {
    height: 300px;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      .row {
        justify-content: flex-start;
      }
    }

    &:nth-child(2) {
      .row {
        justify-content: flex-end;
        height: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 92px;
      font-size: 16px;
      opacity: 0.8;
      color: #fff;
    }
  }

  .control {
    margin-top: 60px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
    width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .order-bg {
    padding-top: 40px;
    .order-title {
      margin-top: 10px;
      margin-bottom: 20px;
    }

    .order-subtitle {
      display: none;
    }
    .order {
      width: 95% !important;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }

    .group {
      width: 100%;
      height: auto !important;
      margin-bottom: 0px !important;
      border: none !important;
    }

    .row {
      margin-bottom: 12px !important;
      label {
        width: 30% !important;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
