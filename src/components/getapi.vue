<template>
  <el-collapse  accordion >
      <el-collapse-item v-for="itemapi in methods" :key="itemapi.name" >
        <template slot="title">
          <el-tag type="danger">{{itemapi.name}}</el-tag>
          <i style="color: #1d90e6">{{itemapi.description}}</i>
        </template>
        <api-page :message="itemapi"></api-page>
      </el-collapse-item>
  </el-collapse>
</template>

<script>
  import apiPage from './apipage.vue'
  export default {
    data () {
      return {
        allApi: {}
      }
    },
    components: {apiPage},
    computed: {
      methods () {
        let allmethods = this.$store.state.methods
        return allmethods
      }
    }
  }
</script>
