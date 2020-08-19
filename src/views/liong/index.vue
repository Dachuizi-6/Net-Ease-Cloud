<template>
  <div class="container">
    <div class="login-form">
      <div class="text">登录</div>
      <div class="form-item">
        <input type="text" v-model.trim="phone" value placeholder="用户名" />
        <input
          type="password"
          v-model.trim="password"
          value
          placeholder="密码"
        />
      </div>
      <div class="btn" @click="loging">登录</div>
      <div class="btn-back"></div>
      <div class="other">
        没有账号？
        <a href="#">去注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/api/ajax"

export default {
  name: "liong",
  data() {
    return {
      phone: "",
      password: "",
      a: {},
      b: {},
    }
  },
  methods: {
    async loging() {
      const { code, profile } = await request.post("/login/cellphone?", {
        phone: this.phone,
        password: this.password,
        // isLogin: false,
      })
      // console.log(code, msg, profile);
      console.log(this.phone + "&" + this.password)
      if (code === 502) {
        alert("密码错误")
      } else {
        this.$router.push({ name: "Friend", query: { id: profile.userId } })
      }
    },
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.container {
  position: relative;
  height: 550px;
  background: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-form {
  background-color: #fff;
  width: 350px;
  height: 500px;
  border-radius: 15px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  margin-top: 40px;
}
.form-item,
.btn,
.other {
  margin: 40px auto;
  width: 90%;
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
