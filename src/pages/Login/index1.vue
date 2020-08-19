<template>
  <div class="container">
    <div class="login-form">
      <div class="text">登录</div>
      <div class="form-item">
        <input type="text" v-model.trim="phone" value placeholder="用户名" />
        <input type="password" v-model.trim="password" value placeholder="密码" />
      </div>
      <div class="btn" @click="login">登录</div>
      <div class="btn-back"></div>
      <div class="other">
        没有账号？
        <a href="#">去注册</a>
      </div>
    </div>
  </div>
</template>
<script>
// 引入ajax
// import { reqLogin } from '../../api/index'
export default {
  name: "Login",
  data () {
    return {
      phone: "13666666666",
      password: "666666",
    };
  },
  methods: {
    login () {
      // 获取手机号码和密码
      const { phone, password } = this
      // 判断
      if (phone !== "" && password !== "") {
        // 提交异步action
        this.$store.dispatch('login', { phone, password })
          .then(() => {
            // 跳转到首页
            this.$router.replace('/mymusic')
          })
          .catch((error) => {
            alert(error)
          })
      } else {
        alert("手机号或者密码不能为空")
      }
    }

  },
  watch: {
    phone (e) {
      console.log(e);
    },
    password (e) {
      console.log(e);
    },
  },
  menubar () { },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.container {
  position: relative;
  height: 800px;
  background: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-form {
  background-color: #fff;
  width: 350px;
  height: 400px;
  border-radius: 15px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -150px;
}
.text {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  margin-top: 20px;
}
.form-item {
  margin-bottom: 20px;
}
.btn {
  margin: 0px auto;
  width: 90%;
}
.other {
  margin-top: 20px;
}
input {
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  text-transform: uppercase;
  border: 0;
  outline: none;
  border-bottom: 1px solid #fbc2eb;
}
input::placeholder {
  font-weight: bold;
  color: #acb7c9;
}
input:focus {
  animation: bBottom 2s infinite;
}
@keyframes bBottom {
  50% {
    border-bottom: 1px solid #a6c1ee;
  }
}
.btn {
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(to right, #fbc2eb, #a6c1ee, #fbc2eb);
  background-size: 200%;
}
.btn:hover {
  animation: btnAnimate 1s infinite;
}
@keyframes btnAnimate {
  50% {
    background-position: 200%;
  }
}

a {
  text-decoration: none;
  color: #fbc2eb;
}
</style>