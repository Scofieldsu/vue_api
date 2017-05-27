<template>
  <div>
    <el-col>
      <el-form :model="formServer">
        <el-form-item label="Header params" prop="header" >
          <i class="fa fa-plus-circle fa-lg" @click="onAddHeader" style="cursor: pointer"></i>
          <div v-for="(item, key) in formServer.header" v-bind:key="key" style="margin-bottom:10px;">
            <el-input v-model.trim="item.key" style="width: 50px; margin-right: 20px;" placeholder="key"></el-input>
            <el-input v-model.trim="item.value" style="width: 50px;" placeholder="value"></el-input>
            <i class="fa fa-minus-circle fa-lg" @click="onRemoveHeader(key)"></i>
          </div>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formServer: {
          header: ''
        },
        ietm: {
          key: '',
          value: ''
        }
      }
    },
    methods: {
      onAddHeader () {
        this.formServer.header.push({key: null, value: null})
      },
      onRemoveHeader (key) {
        this.formServer.header.splice(key, 1)
      }
    }
  }
</script>
<style scoped>
  .port-mapping .el-input{
    width: 200px;
  }
  .port-mapping th {
    text-align: left;
  }
  .port-mapping span {
    margin: 0 20px;
  }
  .port-mapping i {
    cursor: pointer;
  }
  .fa-minus-circle{
    margin-left: 20px;
    color: #FF4949;
  }
  .fa-plus-circle {
    color: #13CE66;
  }
</style>
