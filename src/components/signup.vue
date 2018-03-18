<template>
  <div class="signup-container">
    <el-form class="signup-form-container" label-position="left">
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="4-16个字符，包括中文、英文及数字"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" placeholder="6-16个字符，包括中文、英文及数字"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="tel" placeholder="请填写常用手机号"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="email" placeholder="请填写常用电子邮箱"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      tel: '',
      email: ''
    }
  }
}
</script>
<style>

</style>
