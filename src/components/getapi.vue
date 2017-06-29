<template>
  <el-collapse accordion>
    <el-collapse-item v-for="itemmodules in ApiModules" :key="itemmodules.name">
      <template slot="title">
        <el-tag type="primary">{{itemmodules.name}}</el-tag>
      </template>
      <el-collapse  accordion >
        <el-collapse-item v-for="itemapi in AllMethods" :key="itemapi.name" v-show="itemapi.name === itemmodules.name || itemapi.name.split('.')[0] === itemmodules.name" >
          <template slot="title">
            <el-tag type="danger">{{itemapi.name}}</el-tag>
            <i style="color: #1d90e6">{{itemapi.description}}</i>
          </template>
          <api-page :message="itemapi"></api-page>
        </el-collapse-item>
      </el-collapse>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import apiPage from './apipage.vue'
  import commonJs from '../utils/common'
  import ElCollapse from '../../node_modules/element-ui/packages/collapse/src/collapse'
  export default {
    data () {
      return {
        allApi: {}
      }
    },
    components: {
      ElCollapse,
      apiPage},
    computed: {
      AllMethods () {
        let allmethods = this.$store.state.methods
        return allmethods
      },
      ApiModules () {
        let allmethods = this.$store.state.methods
        let keysdict = {}
        let splitflag = '.'
        let transdict = commonJs.transDict
        for (let key in allmethods) {
          if (key.indexOf(splitflag) !== -1) {
            let skey = key.split('.')[0]
            let keys = transdict.getKeys(keysdict)
            if (keys.indexOf(skey) === -1) {
              let temkey = {}
              temkey['name'] = skey
              keysdict[skey] = temkey
            }
          } else {
            let temkey = {}
            temkey['name'] = key
            keysdict[key] = temkey
          }
        }
        return keysdict
      }
    }
  }
</script>
