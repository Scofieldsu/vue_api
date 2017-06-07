// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)
Vue.use(ElementUI)
let vjax = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000
  // headers: {'post': {'Content-Type': 'application/x-www-form-urlencoded'}}
  // headers: {
  //   'post': {'Content-Type': 'application/json'}
  // }
})
Vue.use(VueAxios, vjax)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
