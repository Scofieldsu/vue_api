<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="Authorization" name="first">
     <span >
       <span style="margin:50px">Type</span><auth-page ></auth-page>
     </span>
    </el-tab-pane>
    <el-tab-pane label="Headers" name="second">
      <header-page></header-page>
    </el-tab-pane>
    <el-tab-pane label="Body" name="third">Body</el-tab-pane>
  </el-tabs>
</template>
<script>
  import authPage from './Authpage.vue'
  import headerPage from './Headerpage.vue'
  export default {
    data () {
      return {
        activeName2: 'first'
      }
    },
    components: {authPage, headerPage},
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
