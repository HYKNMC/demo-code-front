<template>
  <div>
    <el-upload :action="url" :headers="header">
      <el-button>点击上传</el-button>
    </el-upload>
    {{ message }}
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  created() {
    this.method()
  },
  data() {
    return {
      message: '',
      header: {
        Authorization: window.sessionStorage.getItem('token'),
      },
    }
  },
  methods: {
    method() {
      variable = _.cloneDeep('123')
    },
  },
}
</script>

<style scoped>
</style>
