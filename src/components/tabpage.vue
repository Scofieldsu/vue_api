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
        <span>
          <el-button @click="getAllApi" type="info" size="small" style="margin: 5px">Get All Api</el-button>
          <el-button type="text" @click="dialogVisible = true" style="float: right">Settings</el-button>
          <el-dialog
            title="设置"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <span>
              <el-tag type="primary" style="font-size: medium;margin: 5px">请求数据的接口</el-tag>
              <el-input v-model="data_method" style="width: 50%"></el-input>
            </span>
              <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
          </el-dialog>
        </span>
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
  import moment from 'moment'
  import ElTag from '../../node_modules/element-ui/packages/tag/src/tag'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  export default {
    data () {
      return {
        activeName: 'fouth',
        dialogVisible: false,
        data_method: 'get_all_api'
      }
    },
    components: {
      ElInput, ElTag, authPage, headerPage, bodyPage, resquestArea, getApi},
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
      handleClick (tab, event) {
        console.log(tab, event)
      },
      getAllApi () {
        let that = this
        let now = new Date()
        let RpcMethod = this.data_method
        let Resource = {
          'jsonrpc': '2.0',
          'method': RpcMethod,
          'params': {}
        }
        Resource['id'] = moment(now, 'YYYY-MM-DD HH:MM:SS').format()
        console.log(RpcMethod)
        this.$store.commit('newResponse', '')
        this.$store.commit('getallMethods', {
          hello: {
            name: 'hello',
            description: 'welcome to use Api-Test for hello',
            param_explain: {'name': 'user name'},
            params: {'name': 'str'}
          }
        })
        that.axios.post(this.getCommonUrl, Resource)
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
