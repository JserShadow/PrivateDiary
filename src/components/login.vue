<template>
  <div class="container">
    <div class="login-container">
      <el-form ref="form" :model="form" label-width="0px" class="login-form">
        <el-form-item>
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" id="login-button">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="other-options">
        <el-button type="text">忘了密码</el-button>
        <span>|</span>
        <el-button type="text" @click="signup">注册新账号</el-button>
      </div>
    </div>
  </div>
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
  },
  methods: {
    login() {

    },
    signup() {
      this.$router.push('/signup');
    }
  }
}
</script>
<style>
.login-container {
  width: 300px;
  height: 300px;
  border: 1px solid #3d9dfd;
  border-radius: 8px;
  position: absolute;
  right: 15%;
  top: 20%;
}
.login-form {
  margin: 30px;
}
.login-button {
  padding: 12px 105px;
}
.other-options {
  margin-top: 10px;
}
</style>
