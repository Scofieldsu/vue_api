<template>
  <div style="margin-top: 15px;">
    <span>
      <el-input placeholder="API-url" v-model="inputUrl"  size="small" v-on:blur="setBaseUrl">
      <el-select v-model="select" slot="prepend" placeholder="请求方法" v-on:change="changeWay">
        <el-option label="GET" value="GET"></el-option>
        <el-option label="POST" value="POST"></el-option>
        <el-option label="PUT" value="PUT"></el-option>
        <el-option label="DELETE" value="DELETE"></el-option>
        <el-option label="PATCH" value="PATCH"></el-option>
        <el-option label="HEAD" value="HEAD"></el-option>
        <el-option label="OPTIONS" value="OPTIONS"></el-option>
      </el-select>
        <el-button @click="sendMessage" slot="append" type="success" style="background-color: #1D8CE0;color: whitesmoke;font-weight: bold">Send</el-button>
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
  import { mapGetters } from 'vuex'
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
          that.axios.post(this.getCommonUrl, this.getBodyContent)
            .then((res) => {
              if ('error' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.error, null, 2))
              } else {
                this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
              }
            })
        } else if (way === 'GET') {
          that.axios.get(this.getCommonUrl, this.getBodyContent)
            .then((res) => {
              if ('error' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.error, null, 2))
              } else {
                this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
              }
            })
        } else if (way === 'PUT') {
          that.axios.put(this.getCommonUrl, this.getBodyContent)
            .then((res) => {
              if ('error' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.error, null, 2))
              } else {
                this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
              }
            })
        } else if (way === 'DELETE') {
          that.axios.delete(this.getCommonUrl, this.getBodyContent)
            .then((res) => {
              if ('error' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.error, null, 2))
              } else {
                this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
              }
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
      },
      setBaseUrl () {
        this.$store.commit('setCommonUrl', this.inputUrl)
      }
    },
    computed: {
      ...mapGetters([
        'getBodyContent',
        'getCommonUrl'
      ])}
  }
</script>

