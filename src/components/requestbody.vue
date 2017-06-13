<template>
  <div >
    <el-input
      style="width: 100%;height: 80%"
      type="textarea"
      :autosize="{ minRows: 25, maxRows: 100}"
      placeholder="Request body"
      v-on:blur="setBody"
      v-model="textarea1">
    </el-input>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        textarea1: ''
      }
    },
    methods: {
      setBody () {
        this.$store.commit('setBody', this.textarea1)
      }
    }
  }
</script>
