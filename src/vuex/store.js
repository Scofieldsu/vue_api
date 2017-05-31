import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    response: '',
    methods: ''
  },
  mutations: {
    newResponse (state, msg) {
      state.response = msg
    },
    getallMethods (state, msg) {
      state.methods = msg
    }
  }
})

export default store
