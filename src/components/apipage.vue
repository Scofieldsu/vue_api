<template>
  <div>
    <el-col>
      <el-form :model="allApi">
        <template>
          <i style="font-weight: bold;">{{message.name}}</i>
          <br/>
          <i style="font-weight: 600;color: #ff4949;">{{message.params}}</i>
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
      return {
        apiname: '',
        allApi: {},
        methodParams: [{select: 'str', key: 'methods', value: ''}],
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
        console.log(JSON.stringify(that.methodParams))
        let rawdata = JSON.stringify(that.methodParams)
        let getrequestway = that.getrequestway
        console.log('send')
        this.$store.commit('newResponse', '')
        if (getrequestway === 'POST') {
          that.axios.post('/login', rawdata)
            .then((res) => {
              this.$store.commit('newResponse', res.data)
            })
        } else if (getrequestway === 'GET') {
          that.axios.get('/login')
            .then((res) => {
              this.$store.commit('newResponse', res.data)
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

