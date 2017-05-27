<template>
  <div >
    <el-input
      style="width: 100%;height:100%"
      type="textarea"
      :autosize="{ minRows: 29, maxRows: 100}"
      placeholder=""
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
    }
  }
</script>

