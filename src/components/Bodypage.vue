<template>
  <div>
  <el-radio class="radio" v-model="radio" label="1">Text</el-radio>
  <el-radio class="radio" v-model="radio" label="2">Json</el-radio>
    <el-radio class="radio" v-model="radio" label="3">Form Url-encoded</el-radio>
    <el-radio class="radio" v-model="radio" label="4">Multipart</el-radio>
    <el-radio class="radio" v-model="radio" label="5">File</el-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '2'
      }
    }
  }
</script>

