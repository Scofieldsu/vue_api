<template>
  <el-collapse v-model="totalMethods" accordion>
      <el-collapse-item>
        <template slot="title">
          {{methods.description}}
        </template>
        <api-page></api-page>
      </el-collapse-item>
    <el-collapse-item title="注册接口 siginup（）">
      <api-page></api-page>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import apiPage from './apipage.vue'
  export default {
    data () {
      return {
        totalMethods: [
          {
            name: 'login()'
          },
          {
            name: 'register()'
          }
        ],
        allApi: {}
      }
    },
    components: {apiPage},
    computed: {
      methods () {
        return this.$store.state.methods
      }
    }
  }
</script>
