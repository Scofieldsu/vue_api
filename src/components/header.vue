<template>
  <div style="margin-top: 15px;">
    <span>
      <el-input placeholder="API-url" v-model="input"  size="small">
      <el-select v-model="select" slot="prepend" placeholder="请求方法" >
        <el-option label="GET" value="1"></el-option>
        <el-option label="POST" value="2"></el-option>
        <el-option label="PUT" value="3"></el-option>
        <el-option label="DELETE" value="4"></el-option>
        <el-option label="PATCH" value="5"></el-option>
      </el-select>
        <el-button slot="append" type="success" style="background-color: #1D8CE0;color: whitesmoke;font-weight: bold">发送</el-button>
    </el-input>
    </span>

  </div>
</template>

<style>
  .el-select .el-input {
    width: 110px;
  }
</style>
<script>
  import ElOption from '../../node_modules/element-ui/packages/select/src/option'
  export default {
    components: {ElOption},
    data () {
      return {
        input: '',
        select: 'GET'
      }
    }
  }
</script>

