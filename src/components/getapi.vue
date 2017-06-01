<template>
  <el-collapse  accordion>
      <el-collapse-item v-for="item in allKey" :key="false">
        <template slot="title">
          {{item}}
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
        return this.$store.state.methods
      },
      allKey () {
        return this.$store.state.methods.allKey
      }
    }
  }
</script>
