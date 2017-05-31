import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    response: ''
  },
  mutations: {
    newResponse (state, msg) {
      state.response = msg
    }
  }
})

export default store
