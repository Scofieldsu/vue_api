<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
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
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import authPage from './Authpage.vue'
  import headerPage from './Headerpage.vue'
  import bodyPage from './Bodypage.vue'
  import resquestArea from './requestbody.vue'
  export default {
    data () {
      return {
        activeName2: 'first'
      }
    },
    components: {authPage, headerPage, bodyPage, resquestArea},
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
