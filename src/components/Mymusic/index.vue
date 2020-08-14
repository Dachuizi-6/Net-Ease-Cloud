<template>
  <div class="MymusicContainer">
    <!-- 头部区域 使用header组件 -->
    <Header />

    <!-- 主体内容区域 -->
    <div class="main">
      <!-- 左侧区域 -->
      <div class="mainLeft">
        <div class="mainLeftItem">
          <div class="itemSinger">
            <h2>我的歌手</h2>
            <span>(2)</span>
          </div>
          <div class="itemSheet">
            <div class="itemSheet-top">
              <h2>
                <i class="iconfont icon-icon-test4"></i>
                创建歌单
              </h2>
              <span>(2)</span>
            </div>
            <div class="sheetList active">
              <img src="../../../public/images/main01.jpg" alt="图片" />
              <div class="sheetList-text">
                <p class="sheetList-p1">我喜欢的音乐</p>
                <p class="sheetList-p2">59首</p>
              </div>
            </div>
            <div class="sheetList">
              <img src="../../../public/images/main01.jpg" alt="图片" />
              <div class="sheetList-text">
                <p class="sheetList-p1">我喜欢的音乐</p>
                <p class="sheetList-p2">59首</p>
              </div>
            </div>
            <div class="sheetList">
              <img src="../../../public/images/main01.jpg" alt="图片" />
              <div class="sheetList-text">
                <p class="sheetList-p1">我喜欢的音乐</p>
                <p class="sheetList-p2">59首</p>
              </div>
            </div>
            <div class="sheetList">
              <img src="../../../public/images/main01.jpg" alt="图片" />
              <div class="sheetList-text">
                <p class="sheetList-p1">我喜欢的音乐</p>
                <p class="sheetList-p2">59首</p>
              </div>
            </div>
            <div class="sheetList">
              <img src="../../../public/images/main01.jpg" alt="图片" />
              <div class="sheetList-text">
                <p class="sheetList-p1">我喜欢的音乐</p>
                <p class="sheetList-p2">59首</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="mainRight">
        <div class="topInfo">
          <div class="topInfoList">
            <div class="musicImg">
              <img src="../../../public/images/userImg03.jpg" alt />
            </div>
            <div class="userList">
              <div class="musicItem">
                <p>歌单</p>
                <span>我喜欢的音乐</span>
              </div>
              <div class="userInfo">
                <div class="userImg">
                  <a href="###">
                    <img src="../../../public/images/userImg02.jpg" alt />
                  </a>
                </div>

                <a href="###">
                  <span>江小白~~</span>
                </a>
                <div class="addTime">
                  <span>2020-03-02 创建</span>
                </div>
              </div>
              <!-- 按钮 -->
              <div class="btnList">
                <button>播放</button>
                <button>收藏</button>
                <button>分享</button>
                <button>下载</button>
                <button>评论</button>
              </div>
            </div>
          </div>
          <div class="musicList">
            <h3>歌曲列表</h3>
            <span>4 首歌</span>
            <div class="playCount">播放: 6次</div>
          </div>
        </div>

        <!-- 播放记录 -->
        <div class="playRecord">播放记录</div>

        <!-- 评论 -->
        <div class="comment">
          <div class="commentList">
            <h3>评论</h3>
            <span>共 0 条评论</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入Header组件
import Header from '../Header/index'
export default {

  name: "Mymusic",

  // 注册组件
  components: {
    Header
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
// 主体内容
.main {
  width: 980px;
  height: 1200px;
  margin: 0 auto;
  margin-top: 5px;
  display: flex;

  /******************左侧内容******************/
  .mainLeft {
    width: 240px;
    height: 100%;
    border-left: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
    background-color: #f9f9f9;
    .mainLeftItem {
      width: 240px;
      height: 280px;
      margin-top: 50px;
      // background-color: pink;
      .itemSinger {
        display: flex;
        width: 240px;
        height: 38px;
        font-size: 15px;
        padding: 0px 5px 2px 35px;
        // background-color: skyblue;
        line-height: 38px;
        h2 {
          font-weight: bold;
        }
      }
      .itemSheet {
        width: 240px;
        height: 136px;
        .itemSheet-top {
          display: flex;
          width: 240px;
          height: 28px;
          font-size: 15px;
          padding: 0px 5px 2px 15px;
          // background-color: skyblue;
          line-height: 38px;
          h2 {
            font-weight: bold;
          }
        }
        .sheetList {
          display: flex;
          width: 240px;
          height: 54px;
          padding: 6px 0px 6px 20px;
          margin-top: 10px;
          // background-color: tomato;
          image {
            width: 40px;
            height: 40px;
          }
          .sheetList-text {
            margin-left: 8px;
            .sheetList-p1 {
              font-size: 12px;
              margin-bottom: 8px;
            }
            .sheetList-p2 {
              font-size: 12px;
              color: #999;
            }
          }
        }
        .active {
          background-color: #e6e6e6;
        }
      }
    }
  }

  /******************右侧内容******************/
  .mainRight {
    width: 740px;
    height: 100%;
    border-right: 1px solid #eaeaea;
    // background-color: skyblue;
    /******************个人信息******************/
    .topInfo {
      width: 740px;
      height: 315px;
      // background-color: #666;
      .topInfoList {
        width: 740px;
        height: 280px;
        padding: 40px;
        // background-color: red;
        .musicImg {
          float: left;
          width: 208px;
          height: 208px;
          border: 1px solid #eaeaea;
          img {
            width: 200px;
            height: 200px;
            margin: 3px 3px;
          }
        }
        .userList {
          float: right;
          width: 430px;
          height: 122px;
          // background-color: #666;
          .musicItem {
            width: 430px;
            height: 24px;
            margin: 0px 0px 12px;
            p {
              float: left;
              width: 54px;
              height: 24px;
              margin: 0px 6px 0px 0px;
              color: white;
              border-radius: 5px;
              text-align: center;
              line-height: 24px;
              font-size: 14px;
              background-color: #da1e1e;
            }
            span {
              font-size: 18px;
              color: #333;
              text-align: center;
            }
          }
          .userInfo {
            display: flex;
            width: 430px;
            height: 35px;
            margin: 0px 0px 20px;
            .userImg {
              margin-right: 15px;
              img {
                width: 35px;
                height: 35px;
              }
            }
            span {
              display: inline-block;
              margin-top: 8px;
            }
            .addTime {
              margin-left: 18px;
            }
          }
          .btnList {
            width: 430px;
            height: 31px;
            margin: 0px -10px 25px 0px;
            button {
              width: 54px;
              height: 31px;
              border-radius: 8px;
              margin-left: 10px;
            }
          }
        }
      }
      .musicList {
        display: flex;
        widows: 740px;
        height: 35px;
        line-height: 35px;
        padding: 0px 10px 0px 32px;
        // background-color: #333;
        border-bottom: 2px solid #c20c0c;
        border-top: 1px solid #eaeaea;
        h3 {
          margin-right: 30px;
        }
        span {
          font-size: 12px;
        }
        .playCount {
          font-size: 12px;
          margin-left: 510px;
        }
      }
    }

    /******************播放记录******************/
    .playRecord {
      width: 740px;
      height: 280px;
      background-color: skyblue;
    }

    /******************评论区域******************/
    .comment {
      width: 740px;
      height: 153px;
      // background-color: tomato;
      .commentList {
        display: flex;
        widows: 740px;
        height: 35px;
        line-height: 35px;
        padding: 0px 10px 0px 32px;
        // background-color: #333;
        border-bottom: 2px solid #c20c0c;
        border-top: 1px solid #eaeaea;
        h3 {
          margin-right: 30px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>