<template>
  <div >
    <el-input
      class="response"
      type="textarea"
      :autosize="{ minRows: 29, maxRows: 100}"
      placeholder=""
      v-model="response">
    </el-input>
  </div>
</template>


<script>
  export default {
    data () {
      return {}
    },
    computed: {
      response () {
        return this.$store.state.response
      }
    }
  }
</script>

<style>
  .response {
    width: 100%;
    height:100%
  }
</style>
