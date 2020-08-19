<template>
  <div class="MymusicContainer">
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
            <a href="###">
              <div class="sheetList active">
                <img src="./images/main01.jpg" alt="图片" />
                <div class="sheetList-text">
                  <p class="sheetList-p1">我喜欢的音乐</p>
                  <p class="sheetList-p2">59首</p>
                </div>
              </div>
            </a>

            <a href="###">
              <div class="sheetList">
                <img src="./images/main01.jpg" alt="图片" />
                <div class="sheetList-text">
                  <p class="sheetList-p1">我喜欢的音乐</p>
                  <p class="sheetList-p2">59首</p>
                </div>
              </div>
            </a>

            <a href="###">
              <div class="sheetList">
                <img src="./images/main01.jpg" alt="图片" />
                <div class="sheetList-text">
                  <p class="sheetList-p1">我喜欢的音乐</p>
                  <p class="sheetList-p2">59首</p>
                </div>
              </div>
            </a>

            <a href="###">
              <div class="sheetList">
                <img src="./images/main01.jpg" alt="图片" />
                <div class="sheetList-text">
                  <p class="sheetList-p1">我喜欢的音乐</p>
                  <p class="sheetList-p2">59首</p>
                </div>
              </div>
            </a>

            <a href="###">
              <div class="sheetList">
                <img src="./images/main01.jpg" alt="图片" />
                <div class="sheetList-text">
                  <p class="sheetList-p1">我喜欢的音乐</p>
                  <p class="sheetList-p2">59首</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="mainRight">
        <div class="topInfo">
          <div class="topInfoList">
            <div class="musicImg">
              <img src="./images/userImg03.jpg" alt />
            </div>
            <div class="userList">
              <div class="musicItem">
                <p>歌单</p>
                <span>我喜欢的音乐</span>
              </div>
              <div class="userInfo">
                <div class="userImg">
                  <a href="###">
                    <img src="./images/userImg02.jpg" alt />
                  </a>
                </div>

                <a href="###">
                  <span>江小白~~</span>
                </a>
                <div class="addTime">
                  <span>2020-03-02 创建</span>
                </div>
              </div>

              <div class="btnList">
                <el-button
                  class="btnitem-play"
                  type="primary"
                  icon="el-icon-video-play"
                  >播放</el-button
                >
                <a href="###">
                  <div class="addPlay">+</div>
                </a>

                <el-button
                  class="btnitem-l"
                  type="info"
                  icon="el-icon-folder-add"
                  plain
                  >收藏</el-button
                >
                <el-button type="info" icon="el-icon-share" plain
                  >分享</el-button
                >
                <el-button type="info" icon="el-icon-download" plain
                  >下载</el-button
                >
                <el-button type="info" plain>
                  评论
                  <i class="el-icon-chat-line-square el-icon--right"></i>
                </el-button>
              </div>
            </div>
          </div>
          <div class="musicList">
            <h3>歌曲列表</h3>
            <span>4 首歌</span>
            <div class="playCount">播放: 6次</div>
          </div>
        </div>

        <div class="playRecord">
          <table class="playTab">
            <thead>
              <tr>
                <th>SUN</th>
                <th>歌曲标题</th>
                <th>时长</th>
                <th>歌手</th>
                <th>专辑</th>
              </tr>

              <tr class="play-tr">
                <td>1</td>
                <td>大田后生仔</td>
                <td>03:00</td>
                <td>韩41/大石桥</td>
                <td>大田后生仔</td>
              </tr>
              <tr class="play-tr">
                <td>1</td>
                <td>大田后生仔</td>
                <td>03:00</td>
                <td>韩41/大石桥</td>
                <td>大田后生仔</td>
              </tr>
              <tr class="play-tr">
                <td>1</td>
                <td>大田后生仔</td>
                <td>03:00</td>
                <td>韩41/大石桥</td>
                <td>大田后生仔</td>
              </tr>
              <tr class="play-tr">
                <td>1</td>
                <td>大田后生仔</td>
                <td>03:00</td>
                <td>韩41/大石桥</td>
                <td>大田后生仔</td>
              </tr>
              <tr class="play-tr">
                <td>1</td>
                <td>大田后生仔</td>
                <td>03:00</td>
                <td>韩41/大石桥</td>
                <td>大田后生仔</td>
              </tr>
            </thead>
          </table>
        </div>

        <div class="comment">
          <div class="commentList">
            <h3>评论</h3>
            <span>共 0 条评论</span>
          </div>
          <div class="commentBlock">
            <img src="./images/userMin.jpg" alt />
            <div class="commentRight">
              <textarea class="commentText"></textarea>
              <div class="commentExpression">
                <i class="iconfont icon-at"></i>
                <i class="iconfont icon-xiaolian"></i>
                <div class="commentCount">
                  140
                  <span>评论</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入ajax
import { reqUserInfo } from "@/api"
export default {
  name: "Mymusic",

  data() {
    return {
      userId: "",
    }
  },

  async mounted() {
    // 登陆时存储的用户id
    this.userId = this.$route.query.id
    // 根据用户id获取用户信息
    const result = await reqUserInfo({
      uid: this.userId,
    })
    console.log(result)
  },
  // 注册组件
  components: {},
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
    margin-top: 2px;
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
    margin-top: 2px;
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
            position: relative;
            width: 450px;
            height: 31px;
            .el-button {
              width: 70px;
              height: 31px;
              border-radius: 5px;
              text-indent: -6px;
              padding-top: 7px;
            }
            .btnitem-play {
              border-radius: 5px 0px 0px 5px;
            }
            .btnitem-l {
              margin-left: 35px;
            }
            .addPlay {
              position: absolute;
              top: 0px;
              left: 70px;
              width: 25px;
              height: 31px;
              font-size: 22px;
              color: white;
              text-align: center;
              border-left: 2px solid #2c669f;
              border-radius: 0px 5px 5px 0px;
              background-color: #409eff;
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
      // background-color: skyblue;
      .el-table .warning-row {
        background: oldlace;
      }

      .el-table .success-row {
        background: #f0f9eb;
      }
      .playTab {
        width: 740px;
        height: 280px;
        border: 1px solid #eaeaea;
        tr {
          width: 739px;
          height: 39px;
          th {
            padding-left: 10px;
            border-right: 1px solid #eaeaea;
            border-bottom: 1px solid #eaeaea;
          }
        }
        .play-tr {
          td {
            padding-left: 10px;
          }
        }
        tr:nth-child(even) {
          background-color: #f7f7f7;
        }
      }
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
      .commentBlock {
        width: 676px;
        height: 98px;
        // background-color: #eee;
        margin: 30px auto;
        img {
          width: 50px;
          height: 50px;
        }
        .commentRight {
          float: right;
          .commentText {
            width: 614px;
            height: 63px;
            border: 1px solid #eaeaea;
            overflow: auto;
            resize: none;
            // background-color: pink;
          }
          .commentExpression {
            width: 614px;
            height: 35px;
            line-height: 35px;
            // background-color: tomato;
            .icon-at,
            .icon-xiaolian {
              font-size: 20px;
              padding-right: 8px;
            }
            .commentCount {
              float: right;
              span {
                display: inline-block;
                width: 50px;
                height: 35px;
                text-align: center;
                border-radius: 4px;
                background-color: #3b8ad4;
              }
            }
          }
        }
      }
    }
  }
}
</style>
