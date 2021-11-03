<template>
  <div class="login-container">
    <el-form :model="user" class="login-form" ref="form" :rules="formRules">
      <el-form-item prop="mobile">
        <el-input
          v-model="user.mobile"
          maxlength="11"
          show-word-limit
          placeholder="请输入您的手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code" type="password" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree"
          >我已阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>
      <!-- :loading="loginLoading" 登录加载样式 -->
      <el-form-item>
        <router-link to="/"
          ><el-button type="primary" class="login-btn" @click="onLogin"
            >登录</el-button
          ></router-link
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//import request from '@/utils/request'
//import { login } from '@/api/user
// import ElMessage from 'element-plus'
export default {
  name: "loginIndex",
  data() {
    return {
      user: {
        mobile: "12345678911",
        code: "123456",
        agree: false,
      },
      loginLoading: false,
      formRules: {
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: "请输入正确的手机格式",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { pattern: /^d{6}/, message: "验证码格式错误", trigger: "bulr" },
        ],
        agree: [
          //自定义校验规则
          {
            validator: (rule, value, callback) => {
              //  console.log(rule)
              //  console.log(value)
              //  console.log(callback)
              if (value) {
                callback();
              } else {
                callback(new Error("请勾选用户协议"));
              }
            },
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onLogin() {
      //获取表单数据
      const user = this.user;
      //表单验证
      //验证通过，提交登录
      //开启登录loading
      this.loginLoading = true;
      //login(this.user).then(res => {
      //   //登录成功
      //   //console.log(res)
      //   ElMessage.success({
      //       message: '恭喜你，登录成功！',
      //       type: 'success',
      //     })
      //     //关闭loading
      //     this.loginLoading = false
      //     //路由跳转
      //     this.$router.push({ name: '/home' })
      //     //将接口返回的用户相关数据放到本地存储
      //     window.localStorage.setItem('user',res.data.data)
      // }).catch(err => {
      //   //登录失败
      //   //console.log('登录失败',err)
      //    ElMessage.error('登录失败！')
      //    //关闭loading
      //    this.loginLoading = false
      // })
    },
  },
};
</script>
<style scoped lang="less">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/login-background.jpg") no-repeat;
  background-size: 100% 100%;
}
.login-form {
  background: white;
  padding: 50px;
}
.login-btn {
  width: 100%;
}
</style>

