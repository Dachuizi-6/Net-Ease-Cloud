<template>
  <!-- 头部区域 -->
  <div class="header">
    <div class="header-content">
      <a href="javascript:;">
        <h1 class="logo"></h1>
      </a>
      <div class="contentList">
        <ul>
          <li>
            <a href>
              <em>发现音乐</em>
            </a>
          </li>
          <li>
            <a href>
              <em>我的音乐</em>
            </a>
          </li>
          <li>
            <a href>
              <em>朋友</em>
            </a>
          </li>
          <li>
            <a href>
              <em>商城</em>
            </a>
          </li>
          <li>
            <a href>
              <em>音乐人</em>
            </a>
          </li>
          <li>
            <a href>
              <em>下载客服端</em>
            </a>
          </li>
        </ul>
      </div>
      <div class="creator">创作者中心</div>
      <div class="search">
        <div class="parent">
          <div class="iconfont icon-icon-test3"></div>
          <input type="text" placeholder="音乐/视频/电台/用户" placeholder-class="placeholder" />
        </div>
      </div>
    </div>
    <!-- 底部分割线 -->
    <div class="header-bottom">
      <div class="bottomBanner">
        <div>推荐</div>
        <div>排行榜</div>
        <div>歌单</div>
        <div>主播电台</div>
        <div>歌手</div>
        <div>新碟上架</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style lang="less" rel="stylesheet/less" scopde>
// 头部区域
.header {
  width: 100%;
  height: 70px;
  background-color: #242424;
  color: white;
  .header-content {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    .logo {
      float: left;
      width: 176px;
      height: 70px;
      background: url('../../assets/images/2.png');
    }
    .contentList {
      float: left;
      width: 508px;
      height: 70px;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          height: 70px;
          font-size: 14px;
          position: relative;
          background-position: right -300px;

          a {
            padding: 0 19px;
            text-align: center;
            line-height: 70px;
          }
          em {
            color: #ccc;
          }
        }
      }
    }
    .search {
      float: right;
      width: 158px;
      height: 32px;
      border-radius: 32px;
      margin-top: 19px;
      background-color: white;
      .parent {
        display: flex;
        padding: 8px 8px;
        .iconfont {
          color: #3e3e3e;
        }
        input {
          width: 128px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          // outline: none;
          border: 0;
          font-size: 8px;
        }
      }
    }
    .creator {
      float: right;
      width: 90px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      padding-left: 16px;
      border: 1px solid #4f4f4f;
      line-height: 33px;
      color: #ccc;
      font-size: 12px;
      border-radius: 20px;
      margin-left: 10px;
    }
  }
  // 底部分割线
  .header-bottom {
    width: 100%;
    height: 35px;
    background: #c00014;
    float: left;
    padding-left: 180px;
    font-size: 12px;
    line-height: 35px;
    .bottomBanner {
      width: 744px;
      display: flex;
      justify-content: flex-end;
      justify-content: space-around;
      float: left;
      padding-left: 130px;
    }
  }
}
</style>