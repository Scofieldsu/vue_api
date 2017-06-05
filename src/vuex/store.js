import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)
const state = {
  response: '',
  methods: {
    login: {
      name: '',
      description: '',
      params: {}
    },
    allKey: ['']
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
    setallKey (state, msg) {
      state.methods.allKey = msg
    }
  }
})

export default store
