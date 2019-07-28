<template>
  <el-dialog title="安全守則" :visible.sync="visible" width="600px" fullscreen>
    <div class="policy-dialog-content">
      <p>1. 男生在整個約會過程當中，除非取得女生同意，否則不能以任何形式，要求女生的聯絡方式</p>

      <p>2. 整個約會過程當中，請雙方務必抱持互相尊重的態度，不可出現攻擊性，性別騷擾性的行為跟言詞</p>

      <p>3. 遵守時間觀念是對彼此的尊重，所以除非有緊急事故，請雙方都要在約定的時間於約定地點碰面，切勿遲到</p>

      <p>4. 我們沒有限制看電影之後的續攤行程，但是任何續攤行程請在雙方都合意的情況下進行</p>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'safeDialog',
  components: {},

  props: ['visible'],
}
</script>
