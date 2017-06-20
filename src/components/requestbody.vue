<template>
  <div >
    <el-button type="success" size="small" style="margin: 2px" @click="clearbody">clear</el-button>
    <el-input
      style="width: 100%;height: 80%"
      type="textarea"
      :autosize="{ minRows: 25, maxRows: 100}"
      placeholder="Request body"
      v-on:blur="setBody"
      v-model="textarea1">
    </el-input>
  </div>
</template>


<script>
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    data () {
      return {
        textarea1: ''
      }
    },
    methods: {
      setBody () {
        this.$store.commit('setBody', this.textarea1)
      },
      clearbody () {
        this.textarea1 = ''
        this.$store.commit('setBody', this.textarea1)
      }
    }
  }
</script>
