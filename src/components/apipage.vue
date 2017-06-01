<template>
  <div>
    <el-col>
      <el-form :model="allApi">
        <template>
          <i style="font-size: large">{{methods.login.name}}</i>
          <el-form-item label="Add params:" prop="header" >
            <div>
              <i class="el-icon-plus" @click="onAddHeader('addHeader')" style="cursor: pointer"></i>
              <el-button  @click="sendRequest" type="success" size="small" style="margin-left: 40%">Send</el-button>
              <br/>
            </div>
            <div v-for="(item, key) in allApi.methodParams" v-bind:key="key" style="margin-bottom:10px;">
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
  import qs from 'qs'
  import md5 from 'md5'
  export default {
    data () {
      return {
        allApi: {
          methodParams: [{select: 'str'}]
        },
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
    methods: {
      onAddHeader (type) {
        if (type === 'addHeader') {
          this.allApi.methodParams.push({key: null, value: null, select: 'str'})
        }
      },
      onRemoveHeader (type, key) {
        if (type === 'delHeader') {
          this.allApi.methodParams.splice(key, 1)
        }
      },
      sendRequest () {
        let that = this
        console.log('send')
        that.axios.post('/login', qs.stringify({
          name: 'yuyuan',
          password: md5('yuyuan')
        }))
          .then((res) => {
            this.$store.commit('newResponse', res.data)
          })
      }
    },
    computed: {
      methods () {
        return this.$store.state.methods
      }
    }
  }
</script>

