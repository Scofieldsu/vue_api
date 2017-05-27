<template>
  <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
    <div style="width: 50%">
      <h1 v-text="title" class="tittle"></h1>
      <header-a></header-a>
      <br/>
      <tab-page></tab-page>
    </div>
  </div>
</template>

<script>
import Store from './store'
import headerA from './components/header.vue'
import tabPage from './components/tabpage.vue'

console.log(Store)
export default {
  data: function () {
    return {
      title: 'API-test',
      items: Store.fetch(),
      newItem: '',
      childwords: ''
    }
  },
  components: {headerA, tabPage},
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listentoMyboy: function (msg) {
      this.childwords = msg
    }
  }
}
</script>

<style>
  .tittle{
    text-align: center;
  }
  .finished{
    text-decoration: underline;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
