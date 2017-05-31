<template>
  <div id="app">
    <div style="width: 50%;float: left">
      <h2 v-text="title" class="tittle"></h2>
      <header-a></header-a>
      <br/>
      <tab-page></tab-page>
    </div>
    <div style="float: left;margin: 5% 5% 1% 5%;width: 40%;height: 100%">
      <i style="font-size: large">Response</i>
      <respon-area></respon-area>
    </div>
  </div>
</template>

<script>
import headerA from './components/header.vue'
import tabPage from './components/tabpage.vue'
import responArea from './components/respons.vue'

export default {
  data: function () {
    return {
      title: 'API-test'
    }
  },
  components: {headerA, tabPage, responArea}
}
</script>

<style>
  .tittle{
    text-align: center;
    color: #20a0ff;
  }
  .finished{
    text-decoration: underline;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
