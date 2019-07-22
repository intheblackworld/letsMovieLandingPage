export default {
  data() {
    return {
      slideIndex: 0,
    }
  },

  methods: {
    addIndex() {
      this.slideIndex =
        this.slideIndex === this.slideList.length - 1 ? 0 : this.slideIndex + 1
    },

    decIndex() {
      this.slideIndex =
        this.slideIndex === 0 ? this.slideList.length - 1 : this.slideIndex - 1
    }
  },

  mounted() {}
}
