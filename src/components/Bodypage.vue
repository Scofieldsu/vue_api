<template>
  <div style="margin: 5px 5px">
    <el-radio-group v-model="radio" v-on:change="setArea">
      <el-radio :label="1">Text</el-radio>
      <el-radio :label="2">Json</el-radio>
      <el-radio :label="3">Form Url-encoded</el-radio>
      <el-radio :label="4">Multipart</el-radio>
      <el-radio :label="5">File</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: 2
      }
    },
    methods: {
      setArea (value) {
        if (value === 1) {
          this.$store.commit('setContentType', 'text')
        } else if (value === 2) {
          this.$store.commit('setContentType', 'json')
        } else if (value === 3) {
          this.$store.commit('setContentType', 'form url-encode')
          this.$store.commit('newRequestBody', 1)
        } else if (value === 4) {
          this.$store.commit('setContentType', 'multipart')
          this.$store.commit('newRequestBody', 1)
        } else {
          this.$store.commit('setContentType', 'file')
        }
      }
    }
  }
</script>

