<template>
  <el-collapse  accordion>
      <el-collapse-item v-for="itemapi in methods" :key="itemapi.name">
        <template slot="title">
          {{itemapi.name}}
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
        delete allmethods.allKey
        return allmethods
      },
      allKey () {
        return this.$store.state.methods.allKey
      }
    }
  }
</script>
