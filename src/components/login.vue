<template>
  <el-form ref="form" :model="form" label-width="100px">
    <el-form-item label="用户名">
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登陆</el-button>
      <el-button type="danger">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      form: {}
    }
  }
}
</script>
<style>

</style>
