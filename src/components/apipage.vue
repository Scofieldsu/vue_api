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
              <el-button  @click="sendRequest" type="success" size="small" style="margin-left: 40%">Send</el-button>
              <br/>
            </div>
            <div v-for="(item, key) in methodParams" v-bind:key="key" style="margin-bottom:10px;">
              <el-select v-model="item.select" placeholder="type">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model.trim="item.key" style="width: 200px; margin-right: 10px;" placeholder="key"></el-input>
              <el-input v-model.trim="item.value" style="width: 200px;" placeholder="value"></el-input>
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
//  import qs from 'qs'
//  import md5 from 'md5'
  export default {
    data () {
      let that = this
      let methodParams = [{select: 'str', key: 'method', value: that.message.name}]
      let rawparams = that.message.params
      for (let i in rawparams) {
        let tempdata = {key: '', select: ''}
        tempdata.key = i
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
          }
        ],
        value: 'int'
      }
    },
    props: ['message'],
    watch: {
    },
    methods: {
      onAddHeader (type) {
        if (type === 'addHeader') {
          this.methodParams.push({key: null, value: null, select: 'str'})
        }
      },
      onRemoveHeader (type, key) {
        if (type === 'delHeader') {
          this.methodParams.splice(key, 1)
        }
      },
      sendRequest () {
        let that = this
//        let apiurl = that.message.name
        let rawdata = that.methodParams
        let data = {'jsonrpc': '2.0', 'id': 1111, 'params': {}}
        for (let n in rawdata) {
          let newkey = rawdata[n].key
          let newvalue = rawdata[n].value
          if (newkey === 'method') {
            data[newkey] = newvalue
          } else {
            data.params[newkey] = newvalue
          }
        }
        console.log(JSON.stringify(data))
        let getrequestway = that.getrequestway
        console.log('send')
        this.$store.commit('newResponse', '')
        if (getrequestway === 'POST') {
          that.axios.post('/', JSON.stringify(data))
            .then((res) => {
              console.log(res.data)
              this.$store.commit('newResponse', JSON.stringify(res.data.result, null, 2))
            })
        } else if (getrequestway === 'GET') {
          that.axios.get('/')
            .then((res) => {
              this.$store.commit('newResponse', res.data.result)
            })
        }
      }
    },
    computed: {
      methods () {
        return this.$store.state.methods
      },
      ...mapGetters([
        'getrequestway'
      ])}
  }
</script>

