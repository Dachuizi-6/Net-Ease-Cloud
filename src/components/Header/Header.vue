<template>
  <div>
    <div class="header-container">
      <div class="header-version-heart">
        <h1 class="logo">
          <a href="javascript:;">网易云音乐</a>
        </h1>
        <ul class="nav-list">
          <li
            class="nav-item"
            :class="navId === item.id ? 'active' : ''"
            @click="handleGo(item.id)"
            v-for="item in navList"
            :key="item.id"
          >
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
        <div class="search">
          <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
          <input type="text" placeholder="音乐/视频/电台/用户" />
          <div class="create-center">创作者中心</div>
          <span class="login">登录</span>
        </div>
      </div>
    </div>
    <div class="nav-container">
      <div class="nav header-version-heart">
        <ul class="nav-list-wrap">
          <li class="nav-item">
            <a href="javascript:;">
              <em>推荐</em>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">
              <em>推荐</em>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">
              <em>推荐</em>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">
              <em>推荐</em>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">
              <em>推荐</em>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">
              <em>推荐</em>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navId: 1,
      navList: [
        { id: 1, name: "发现音乐" },
        { id: 2, name: "我的音乐" },
        { id: 3, name: "朋友" },
        { id: 4, name: "商城" },
        { id: 5, name: "音乐人" },
        { id: 6, name: "下载客户端" },
      ],
    };
  },
  methods: {
    handleGo(id) {
      this.navId = id;
    },
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
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
    background: url("../../assets/imgs/topbar.png");
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
        width: 84px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        &:nth-child(1) a em {
          background: #9b0909;
        }
        a {
          display: inline-block;
          width: 84px;
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
