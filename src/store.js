import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeString: '',
    source: '',
    name: ''
  },
  mutations: {
    setCTA(state, data) {
      if (data.source && data.name) {
        state.source = data.source
        state.name = data.name
      }
    },
  },
  actions: {

  }
})
