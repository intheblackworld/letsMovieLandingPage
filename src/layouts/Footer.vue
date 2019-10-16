<template>
  <div>
    <div class="footer">
      <p @click="showPolicyDialog">隱私權條款</p>
    </div>
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  background: #302626;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    margin-right: 20px;
  }

  p {
    font-size: 14px;
    color: #fff;
    margin-right: 15px;
    margin-bottom: 0;
    cursor: pointer;
    text-decoration: underline;
  }

  a {
    font-size: 12px;
    color: #fff;
    text-decoration: none;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    margin-bottom: 0px;
  }
}

@media only screen and (max-width: 767px) {
}
</style>

<script>
import PolicyDialog from '@/components/PolicyDialog.vue'
export default {
  name: 'adminFooter',
  components: {
    PolicyDialog,
  },

  data() {
    return {
      policyVisible: false,
    }
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true
    },
  },
}
</script>
