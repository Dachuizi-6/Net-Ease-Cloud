<template>
  <div class="all-wrap">
    <Header />

    <div class="main-cointer version-heart">
      <router-view></router-view>
      <!-- <Container /> -->
    </div>
  </div>
</template>
<script>
// import Container from "../views/Container"
import Header from "./Header"
export default {
  name: "Home",
  data () {
    return {
      navId: 1,
      navList: [
        { id: 1, name: "发现音乐", togo: "/dismusic" },
        { id: 2, name: "我的音乐", togo: "/mymusic" },
        { id: 3, name: "朋友", togo: "/friend" },
        { id: 4, name: "商城", togo: "/shop" },
        { id: 5, name: "音乐人", togo: "/musicartist" },
        { id: 6, name: "下载客户端", togo: "download" },
      ],
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    handleGo (id) {
      this.navId = id
    },
  },
  components: {
    Header,
    // Container,
  },
}
</script>
<style lang="less" scoped>
// .main-cointer {
// height: 1000px;
// }
.header-container {
  background-color: #242424;
  height: 70px;
  border-bottom: 1px solid #000;
  .header-version-heart {
    height: 70px;
    width: 1100px;
    margin: 0 auto;
  }
  .logo {
    float: left;
    width: 176px;
    height: 69px;
    background: url(../assets/img/topbar.png);
    a {
      float: left;
      width: 157px;
      height: 100%;
      padding-right: 20px;
      text-indent: -9999px;
    }
  }
  .nav-list {
    float: left;
    .nav-item {
      position: relative;
      float: left;
      height: 70px;
      font-size: 14px;
      &.active::after {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translate(-50%);
        content: "";
        display: block;
        border-bottom: 10px solid #c20c0c;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
      }
      a {
        float: left;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 14px;
        padding: 0 19px;
        text-decoration: none;
        color: #fff;
        &:hover {
          background-color: #000;
        }
      }
    }
  }
  .search {
    float: right;
    position: relative;
    .icon-xingtaiduICON_sousuo-- {
      position: absolute;
      top: 26px;
      left: 6px;
    }
    input {
      float: left;
      width: 158px;
      height: 32px;
      margin-top: 19px;
      background-color: #fff;
      border-radius: 32px;
      color: #9b9b9b;
      padding-left: 26px;
      border: 0;
      outline: 0;
      box-sizing: border-box;
    }
    .create-center {
      float: left;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      padding-left: 16px;
      border: 1px solid #4f4f4f;
      background-position: 0 -140px;
      line-height: 33px;
      color: #ccc;
      border-radius: 20px;
      font-size: 12px;
    }
    .login {
      float: right;
      height: 45px;
      margin: 26px 0 0 20px;
      padding: 0 22px 0 0;
      box-sizing: border-box;
      font-size: 12px;
      color: #787878;
    }
  }
}
.nav-container {
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .nav {
    height: 34px;
    .nav-list-wrap {
      height: 34px;
      padding-left: 180px;
      .nav-item {
        float: left;
        // width: 84px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        &:nth-child(1) a em {
          background: #9b0909;
        }
        a {
          display: inline-block;
          // width: 84px;
          height: 34px;
          color: #fff;
          font-size: 12px;
          text-decoration: none;
          em {
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            border-radius: 20px;
            line-height: 21px;
            font-style: normal;
            &:hover {
              background: #9b0909;
            }
          }
        }
      }
    }
  }
}
</style>
