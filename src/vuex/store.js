import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    response: '',
    methods: '',
    contentType: 'json',
    requestBody: 0
    // requestBody为0显示文本框  为1 显示键值输入框
  },
  mutations: {
    newResponse (state, msg) {
      state.response = msg
    },
    getallMethods (state, msg) {
      state.methods = msg
    },
    newRequestBody (state, msg) {
      state.requestBody = msg
    },
    setContentType (state, msg) {
      state.contentType = msg
    }
  }
})

export default store
