<template>
  <div>
    <el-col>
      <el-form :model="formServer">
        <el-form-item label="Add params:" prop="header" >
          <i class="el-icon-plus" @click="onAddHeader('addheader')" style="cursor: pointer"></i>
          <br/>
          <div v-for="(item, key) in formServer.header" v-bind:key="key" style="margin-bottom:10px;">
            <el-input v-model.trim="item.key" style="width: 200px; margin-right: 20px;" placeholder="key"></el-input>
            <el-input v-model.trim="item.value" style="width: 200px;" placeholder="value"></el-input>
            <i class="el-icon-delete" @click="onRemoveHeader('delheader',key)"></i>
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
          header: ['']
        }
      }
    },
    methods: {
      onAddHeader (type) {
        if (type === 'addheader') {
          this.formServer.header.push({key: null, value: null})
        }
      },
      onRemoveHeader (type, key) {
        if (type === 'delheader') {
          this.formServer.header.splice(key, 1)
        }
      }
    }
  }
</script>

