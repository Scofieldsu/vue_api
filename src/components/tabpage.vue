<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="Authorization"  name="first">
      <div>
        <span >
            <el-tag type="primary"  style="text-align: center;margin: 20px;font-size: medium">Type</el-tag>
          <auth-page style="width: 40% "></auth-page>
        </span>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Headers" name="second">
      <div style="overflow: scroll;height: 600px">
        <header-page></header-page>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Body" name="third">
      <div style="height: 100%">
        <div style="margin: 5px">
          <body-page></body-page>
        </div>
        <div style="width: 100%;height: 100%">
          <resquest-area></resquest-area>
          <!--<header-page></header-page>>-->
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Get API" name="fouth">
      <div style="height: 700px;overflow: scroll">
        <el-button @click="getAllApi" type="info" size="small" style="margin: 5px">Get All Api</el-button>
        <get-api></get-api>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import { mapGetters } from 'vuex'
  import authPage from './Authpage.vue'
  import headerPage from './Headerpage.vue'
  import bodyPage from './Bodypage.vue'
  import resquestArea from './requestbody.vue'
  import getApi from './getapi.vue'
  export default {
    data () {
      return {
        activeName: 'third'
      }
    },
    components: {authPage, headerPage, bodyPage, resquestArea, getApi},
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      getAllApi () {
        let that = this
        console.log('get all api')
        console.log(JSON.stringify({
          'jsonrpc': '2.0',
          'id': '111111',
          'method': 'get_all_api',
          'params': {}
        }))
        this.$store.commit('newResponse', '')
        this.$store.commit('getallMethods', {
          login: {
            name: '',
            description: '',
            param_explain: {},
            params: {}
          }
        })
        that.axios.post(this.getCommonUrl, JSON.stringify({
          'jsonrpc': '2.0',
          'id': '111111',
          'method': 'get_all_api'
        }))
          .then((res) => {
            console.log(res)
            if ('result' in res.data) {
              this.$store.commit('getallMethods', res.data.result)
            } else {
              this.$store.commit('newResponse', JSON.stringify(res.data, null, 2))
            }
          })
      }
    },
    computed: {
      ...mapGetters([
        'getCommonUrl'
      ])}
  }
</script>
