<template>
  <el-collapse  accordion>
      <el-collapse-item v-for="item in methods" :key="false">
        <template slot="title">
          {{item.name}}
        </template>
        <api-page></api-page>
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
        let allMethods = this.$store.state.methods
        delete allMethods.allKey
        return allMethods
      }
    }
  }
</script>
