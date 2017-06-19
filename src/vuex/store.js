import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)
const state = {
  bodycontent: '',
  commonUrl: 'http://localhost:5000',
  response: '',
  methods: {
    login: {
      name: '',
      description: '',
      param_explain: {},
      params: {}
    }
  },
  contentType: 'json',
  requestBody: 0,
  // requestBody为0显示文本框  为1 显示键值输入框
  requestWay: 'POST'
}
const store = new Vuex.Store({
  state,
  getters,
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
    },
    setRequestWay (state, msg) {
      state.requestWay = msg
    },
    setCommonUrl (state, msg) {
      console.log(msg)
      if (!msg) {
        msg = 'http://localhost:5000'
      }
      if (!msg.startsWith('http://')) {
        state.commonUrl = 'http://'.concat(msg)
      } else {
        state.commonUrl = msg
      }
    },
    setBody (state, msg) {
      state.bodycontent = msg
    }
  }
})

export default store
