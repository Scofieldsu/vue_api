<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '1',
          label: 'No Auth'
        }, {
          value: '2',
          label: 'Basic Auth'
        }, {
          value: '3',
          label: 'Digest Auth'
        }, {
          value: '4',
          label: 'OAuth 1.0'
        }, {
          value: '5',
          label: 'OAuth 2.0'
        }, {
          value: '6',
          label: 'Hawk Authentication'
        }, {
          value: '7',
          label: 'AWS Signature'
        }],
        value: ''
      }
    }
  }
</script>

