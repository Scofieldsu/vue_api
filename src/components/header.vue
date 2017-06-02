<template>
  <div style="margin-top: 15px;">
    <span>
      <el-input placeholder="API-url" v-model="inputUrl"  size="small">
      <el-select v-model="select" slot="prepend" placeholder="请求方法" v-on:change="changeWay">
        <el-option label="GET" value="GET"></el-option>
        <el-option label="POST" value="POST"></el-option>
        <el-option label="PUT" value="PUT"></el-option>
        <el-option label="DELETE" value="DELETE"></el-option>
        <el-option label="PATCH" value="PATCH"></el-option>
        <el-option label="HEAD" value="HEAD"></el-option>
        <el-option label="OPTIONS" value="OPTIONS"></el-option>
      </el-select>
        <el-button @click="sendMessage" slot="append" type="success" style="background-color: #1D8CE0;color: whitesmoke;font-weight: bold">发送</el-button>
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
        inputUrl: '',
        select: 'POST'
      }
    },
    methods: {
      sendMessage () {
        let that = this
        let way = that.select
        console.log('submit')
        this.$store.commit('newResponse', '')
        if (way === 'POST') {
          that.axios.post(that.inputUrl)
            .then((res) => {
              this.$store.commit('newResponse', res.data)
            })
        } else if (way === 'GET') {
          that.axios.get(that.inputUrl)
            .then((res) => {
              this.$store.commit('newResponse', res.data)
            })
        } else if (way === 'PUT') {
          that.axios.put(that.inputUrl)
            .then((res) => {
              this.$store.commit('newResponse', res.data)
            })
        } else if (way === 'DELETE') {
          that.axios.delete(that.inputUrl)
            .then((res) => {
              this.$store.commit('newResponse', res.data)
            })
        }
      },
      changeWay (value) {
        if (value === 'GET') {
          this.$store.commit('setRequestWay', 'GET')
        } else if (value === 'POST') {
          this.$store.commit('setRequestWay', 'POST')
        } else if (value === 'PUT') {
          this.$store.commit('setRequestWay', 'PUT')
        } else if (value === 'DELETE') {
          this.$store.commit('setRequestWay', 'DELETE')
        }
      }
    }
  }
</script>

