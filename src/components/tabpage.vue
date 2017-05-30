<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="Authorization" name="first">
      <div>
        <span >
          <span style="margin:50px">Type</span>
          <auth-page style="width: 40% "></auth-page>
        </span>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Headers" name="second">
      <header-page></header-page>
    </el-tab-pane>
    <el-tab-pane label="Body" name="third">
      <div style="height: 100%">
        <div style="margin: 2px">
          <body-page></body-page>
        </div>
        <div style="width: 100%;height: 100%">
          <resquest-area></resquest-area>
          <header-page></header-page>>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Get API" name="fouth">
      <get-api></get-api>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import authPage from './Authpage.vue'
  import headerPage from './Headerpage.vue'
  import bodyPage from './Bodypage.vue'
  import resquestArea from './requestbody.vue'
  import getApi from './getapi.vue'
  export default {
    data () {
      return {
        activeName: 'third'
      }
    },
    components: {authPage, headerPage, bodyPage, resquestArea, getApi},
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
