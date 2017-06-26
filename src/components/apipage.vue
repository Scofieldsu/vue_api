<template>
  <div>
    <el-col>
      <el-form :model="allApi">
        <template>
          <i style="font-weight: 600;color: #20a0ff">params:</i>{{message.params}}
          <br/>
          <i style="font-weight: 600;color: #13ce66">return:</i>{{message.return}}
          <el-form-item label="Add params:">
            <div>
              <i class="el-icon-plus" @click="onAddHeader('addHeader')" style="cursor: pointer" ></i>
              <el-button  @click="sendRequest" type="success" size="small" style="float: right; margin-right: 17%">Send</el-button>
              <br/>
            </div>
            <el-tag type="" style="width: 12%;text-align: center">类型</el-tag>
            <el-tag type="gray" style="width: 20%;text-align: center">参数</el-tag>
            <el-tag type="success" style="width: 25%;text-align: center">说明</el-tag>
            <el-tag type="primary" style="width: 25%;text-align: center">值</el-tag>
            <div>
            </div>
            <div v-for="(item, key) in methodParams" v-bind:key="key" style="margin-bottom:10px;">
              <el-select v-model="item.select" placeholder="type"style="width: 12%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model.trim="item.key" style="width: 20%;" placeholder="key"></el-input>
              <el-input v-model.trim="item.explain" style="width: 25%;" placeholder="--" autosize type="textarea"></el-input>
              <el-input v-model.trim="item.value"  v-if="item.select !== 'datetime'" style="width: 25%;" placeholder="value" autosize type="textarea"></el-input>
              <el-date-picker
                style="width: 25%"
                v-if="item.select === 'datetime'"
                v-model.trim="item.value"
                type="datetime"
                placeholder="选择日期时间"
                :picker-options="pickerOptions">
              </el-date-picker>
              <i class="el-icon-delete" @click="onRemoveHeader('delHeader',key)"></i>
            </div>
          </el-form-item>
        </template>
      </el-form>
    </el-col>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import commonJs from '../utils/common'
  import moment from 'moment'

  export default {
    components: {ElInput},
    data () {
      let that = this
      let methodParams = [{select: 'str', key: 'method', explain: '方法名', value: that.message.name}]
      let rawparams = that.message.params
      let rawExplain = that.message.param_explain
      for (let i in rawparams) {
        let tempdata = {key: '', select: '', explain: '', value: ''}
        tempdata.key = i
        if (rawExplain) {
          tempdata.explain = rawExplain[i]
        } else {
          tempdata.explain = ''
        }
        tempdata.select = rawparams[i]
        methodParams.push(tempdata)
      }
      return {
        allApi: {},
        methodParams,
        options: [
          {
            value: 'str',
            label: 'str'
          },
          {
            value: 'int',
            label: 'int'
          },
          {
            value: 'float',
            label: 'float'
          },
          {
            value: 'dict',
            label: 'dict'
          },
          {
            value: 'list',
            label: 'list'
          },
          {
            value: 'datetime',
            label: 'datetime'
          }
        ],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value: 'int'
      }
    },
    props: ['message'],
    watch: {
    },
    methods: {
      onAddHeader (type) {
        if (type === 'addHeader') {
          this.methodParams.push({key: null, value: null, select: 'str', explain: ''})
        }
      },
      onRemoveHeader (type, key) {
        if (type === 'delHeader') {
          this.methodParams.splice(key, 1)
        }
      },
      sendRequest () {
        let that = this
        let rawdata = that.methodParams
        let tempStr = ''
        let tranStr = commonJs.transStr
        let now = new Date()
        console.log(rawdata)
        let data = {'jsonrpc': '2.0', 'id': moment(now, 'YYYY-MM-DD HH:MM:SS').format(), 'params': {}}
        for (let n in rawdata) {
          if (!rawdata[n].value) {
            tempStr += '参数 ' + rawdata[n].key + '缺少值;\n'
          }
        }
        this.$store.commit('newResponse', tempStr)
        for (let n in rawdata) {
          let newkey = rawdata[n].key
          let newvalue = rawdata[n].value
          // 类型为int或者float 转换
          if (rawdata[n].select === 'int' || rawdata[n].select === 'float') {
            if (Number(newvalue)) {
              newvalue = Number(newvalue)
            } else {
              newvalue = undefined
            }
          } else if (rawdata[n].select === 'list') {
            if (newvalue === '[]') {
              newvalue = []
            } else if (!newvalue) {
              newvalue = undefined
            } else {
              newvalue = tranStr.toList(newvalue)
            }
          } else if (rawdata[n].select === 'str') {
            if (!newvalue) {
              newvalue = undefined
            }
          } else if (rawdata[n].select === 'datetime') {
            if (!newvalue) {
              newvalue = undefined
            } else {
              newvalue = moment(newvalue, 'YYYY-MM-DD HH:MM:SS').format().split('+')[0].replace('T', ' ')
            }
          } else if (rawdata[n].select === 'dict') {
            if (!newvalue) {
              newvalue = undefined
            }
          }
          if (newkey === 'method') {
            data[newkey] = newvalue
          } else {
            data.params[newkey] = newvalue
          }
        }
        console.log(data)
        console.log(JSON.stringify(data))
        let getrequestway = that.getrequestway
        console.log('send')
//        this.$store.commit('newResponse', '')
        if (getrequestway === 'POST') {
          that.axios.post(this.getCommonUrl, JSON.stringify(data))
            .then((res) => {
              console.log(res.data)
              if ('error' in res.data && !tempStr) {
                this.$store.commit('newResponse', JSON.stringify(res.data.error, null, 2))
              } else if ('result' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
              } else if (!('error' in res.data) && !('result' in res.data)) {
                this.$store.commit('newResponse', '该请求响应中无result或者error信息')
              }
            })
        } else if (getrequestway === 'GET') {
          that.axios.get(this.getCommonUrl)
            .then((res) => {
              if ('error' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.error, null, 2))
              } else if ('result' in res.data) {
                this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
              } else if (!('error' in res.data) && !('result' in res.data)) {
                this.$store.commit('newResponse', '该请求响应中无result或者error信息')
              }
            })
        }
      }
    },
    computed: {
      methods () {
        return this.$store.state.methods
      },
      ...mapGetters([
        'getrequestway',
        'getCommonUrl'
      ])}
  }
</script>

