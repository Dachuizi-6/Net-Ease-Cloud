<template>
  <!-- 排行榜的大容器 -->
  <div class="rankWrapper">
    <!-- 左侧榜单的小容器 -->
    <div class="rankList">
      <!-- 云特色榜单 -->
      <h2>云特色榜单</h2>
      <!-- 榜单分类小容器 -->

      <!-- 小容器里面的内容 -->

      <div class="ts" @mouseleave="rankistId=0">
        <a
          class="ts1"
          v-for="item in rankist"
          @click="toRank(item.id,item)"
          :key="item.id"
          :class="{tss:rankistId===item.id}"
          @mouseenter="rankistId=item.id"
        >
          <!-- <img src="./imgs/1.png" alt /> -->
          <img class="ts2" :src="item.coverImgUrl" alt />
          <p class="s1">{{item.name}}</p>
          <p class="s2">{{item.updateFrequency}}</p>
        </a>
      </div>
    </div>
    <div>
      <!-- 中间上面的容器 -->
      <div class="rankTop">
        <!-- 中上信息 -->
        <div class="msg">
          <!-- <img src="./imgs/3.png" alt /> -->
          <!-- <img :src="singerRank.coverImgUrl" alt /> -->
          <img :src="topImg" alt />
        </div>
        <div class="msg2">
          <h2>云音乐飙升榜</h2>
          <!-- <h2>{{singerRank.name}}</h2> -->
          <div class="time">
            <i class="el-icon-time"></i>
            <span class="time2">最近更新: 08月19日</span>
            <span class="time3">(每天更新)</span>
          </div>
          <!-- 雪碧图的播放收藏 -->
          <div class="msg3">
            <a href="javascript;:" class="bf">
              <span>播放</span>
            </a>
            <a href="javascript;:" class="tj"></a>
          </div>
          <!-- 后面几个图标 -->
          <a href="javascript;:" class="sc">
            <span>收藏</span>
          </a>
          <a href="javascript;:" class="zf">
            <span>转发</span>
          </a>
          <a href="javascript;:" class="xz">
            <span>下载</span>
          </a>
          <a href="javascript;:" class="pl">
            <span>评论</span>
          </a>
        </div>
      </div>
      <!-- 歌曲列表小框 -->
      <div class="song">
        <span class="s3">歌曲列表</span>
        <span class="s4">100首歌曲</span>
        <div class="s5">
          播放:
          <span class="s6" style="color: #c20c0c; font-weight: bold;">1891338368</span>
          次
        </div>
      </div>
      <!-- 歌曲列表的大容器 -->
      <div class="songList">
        <div class="t1"></div>
        <div class="t2">标题</div>
        <div class="t3">时长</div>
        <div class="t4">歌手</div>
        <table v-for="play in playLists" :key="play.id">
          <!-- <table v-for="item in playList" :key="item.id"> -->
          <tr>
            <td class="song1">
              <div class="ss">
                <span>{{play.no}}</span>
                <i class="el-icon-top">0</i>
              </div>
            </td>
            <td class="song2">
              <a href class="a1">
                <!-- <img class src="./imgs/5.png" alt /> -->
                <img class :src="play.al.picUrl" alt />
              </a>
              <div class="t5">
                <a class="a2" href>
                  <i class="el-icon-video-play"></i>
                </a>
                <span class="a3">{{play.al.name}}</span>
              </div>
            </td>
            <td>
              <div class="t6">3.14</div>
            </td>
            <td>
              <div class="t7">{{play.ar[0].name}}</div>
            </td>
          </tr>
        </table>
      </div>
      <!-- 评论区小框 -->
      <div class="comment">
        <span class="c1">评论</span>
        <span class="c2">共142461条评论</span>
      </div>
      <!-- 客户评论框 -->
      <div class="comment2">
        <div class="arrows"></div>
        <div class="arrows1"></div>
        <img src="./imgs/1.png" class="c3" alt="用户头像" />
        <form action="save.php" method="post">
          <textarea class="c4" cols="80" rows="5"></textarea>
          <br />
          <input class="c5" type="submit" value="评论" name="submit" />
        </form>
      </div>
      <!-- 精彩评论 -->
      <h3 class="c6">精彩评论</h3>
      <!-- 精彩评论区 -->
      <div class="comment3">
        <el-pagination background layout="prev, pager, next" :total="1000" class="c7"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>

// import { mapstate } from "vuex";

import request from '../../api/ajax'
export default {
  name: "Rank",
  data () {
    return {
      rankist: {}, // 存储所有榜单数据  
      rankistId: 0, // 鼠标移入事件
      playId: {},   // 获取歌曲的id
      playLists: {}, //   通过请求获得播放列表的数据  
      singerRank: [], // 中间上部分的歌曲榜
      topImg: "",
      // sing:{}
    }
  },
  methods: {
    // 注册点击事件
    // 获取歌曲榜数据
    async toRank (e, a) {
      console.log(a);
      this.playId = e
      this.topImg = a.coverImgUrl
      console.log('object', e)
      // const { playlist } = await request.get("/top/list?id=" + this.playId)
      const { playlist } = await request.get(`/top/list?id=${this.playId}`)
      console.log(playlist.tracks[0]);
      this.playLists = playlist.tracks.splice(0, 6)

      //  const playlist = await request.post("/top/list", {
      //   id: this.playId
      // })
      this.singerRank = playlist
      // this.sing = playlist.ar
      // console.log('sing', this.sing)
      // console.log('singer', this.singerRank)
      // console.log('play', this.playLists)
    }
  },
  async mounted () {
    // 请求所有榜单
    const reqAllRankList = await request.get("/toplist")
    this.rankist = reqAllRankList.list.splice(0, 50)
    // console.log('reqAllRankList', this.rankist)


  },

};
</script>
<style lang="less" rel="stylesheet/less" scoped>
// 排行榜的大容器样式
.rankWrapper {
  width: 980px;
  height: 100%;
  border: 1px solid #d3d3d3;
  border-top: 1px solid #f1f0f0;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  // overflow: hidden;
  // 左侧榜单的小容器样式
  .rankList {
    width: 240px;
    height: 100%;
    border-right: 1px solid #d3d3d3;
    box-sizing: border-box;
    background: rgb(249, 249, 249);
    padding: 30px 20px;

    // float: left;
    h2 {
      padding: 10px 10px 12px 0px;
    }
    // 榜单分类小容器样式
    .ts {
      width: 200px;
      height: 62px;
      padding: 10px 0 10px 10px;
      display: inline-block;
      // position: relative;

      background: #e6e6e6;

      .ts1 {
        position: relative;
        display: inline-block;
        width: 200px;
        height: 40px;
        font-size: 12px;
        margin: 8px;
        // &.ts1:hover {
        //   background: #f4f2f2;
        // }
        // 图片样式
        .ts2 {
          height: 40px;
          width: 40px;
          display: inline-block;
          position: absolute;
        }
        // 图片旁边文字样式
        .s1 {
          display: block;
          color: rgb(0, 0, 0);
          font-size: 12px;
          position: absolute;
          left: 50px;
        }
        // 图片旁边文字样式
        .s2 {
          display: block;
          position: absolute;
          font-size: 12px;
          width: 100px;
          color: rgb(153, 153, 153);
          left: 50px;
          top: 24px;
        }
        &.tss {
          background: #f4f2f2;
        }
      }
    }
    // 全球媒体榜
    // .mediaH {
    //   display: inline-block;
    //   margin-top: 250px;
    // }
    // .media {
    //   width: 220px;
    //   height: 62px;
    //   padding: 10px 0 10px 19px;
    //   position: relative;
    //   .s3 {
    //     display: block;
    //     color: rgb(0, 0, 0);
    //     font-size: 12px;
    //     position: absolute;
    //     left: 68px;
    //     top: 8px;
    //   }
    //   .s4 {
    //     display: block;
    //     position: absolute;
    //     font-size: 12px;
    //     width: 100px;
    //     color: rgb(153, 153, 153);
    //     left: 68px;
    //     top: 36px;
    //   }
    // }
  }
  // 中间上面的容器
  .rankTop {
    width: 740px;
    height: 238px;
    position: absolute;
    float: right;
    top: 0;
    left: 240px;
    padding: 40px;
    .msg {
      height: 158px;
      width: 158px;
      border: 1px solid rgb(197, 191, 191);
      padding: 3px;
    }
    .msg2 {
      position: absolute;
      top: 50px;
      left: 220px;
      h2 {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
        display: block;
        margin-bottom: 15px;
      }
      .el-icon-time {
        display: inline-block;
        font-size: 13px;
        margin: 4px;
      }
      .time2 {
        font-size: 12px;
        color: #333;
      }
      .time3 {
        color: #999;
        font-size: 12px;
      }
      // 雪碧图的播放+收藏样式
      .msg3 {
        width: 100px;
        height: 31px;
        margin-top: 20px;
        border-radius: 5%;
        position: relative;
        overflow: hidden;
        display: inline-block;
        .bf {
          width: 70px;
          height: 31px;
          display: inline-block;
          background-image: url(./imgs/button.png);
          background-position: 0 -255px;
          background-size: 195px;
          margin-top: -15px;
          span {
            display: block;
            line-height: 28px;
            margin-left: 38px;
            font-size: 12px;
            color: white;
          }
        }
        .bf:hover {
          background-position: -1846px -255px;
        }
        .bf:active {
          background-position: 0 -255px;
        }
        .tj {
          width: 33px;
          height: 34px;
          background-position: 0px -721px;
          display: inline-block;
          background-image: url(./imgs/button.png);
          position: absolute;
          top: -1px;
        }
        .tj:hover {
          background-position: -80px -721px;
        }
        .tj:active {
          background-position: 0px -721px;
        }
      }
      .sc {
        background-image: url(./imgs/button.png);
        display: inline-block;
        width: 100px;
        height: 30px;
        background-position: 0 -225px;
        position: absolute;
        top: 83px;
        left: 105px;
        span {
          font-size: 12px;
          color: rgb(190, 190, 190);
          padding-right: 2px;
          padding-left: 35px;
        }
      }
      .zf {
        background-image: url(./imgs/button.png);
        display: inline-block;
        width: 100px;
        height: 30px;
        background-position: 0 -225px;
        position: absolute;
        top: 83px;
        left: 210px;
        // border-right: 1px solid #0c0c0c;
        span {
          font-size: 12px;
          color: rgb(190, 190, 190);
          padding-right: 2px;
          padding-left: 35px;
        }
      }
      .xz {
        background-image: url(./imgs/button.png);
        display: inline-block;
        width: 100px;
        height: 30px;
        background-position: 0 -225px;
        position: absolute;
        top: 83px;
        left: 300px;
        span {
          font-size: 12px;
          color: rgb(190, 190, 190);
          padding-right: 2px;
          padding-left: 35px;
        }
      }
      .pl {
        background-image: url(./imgs/button.png);
        display: inline-block;
        width: 100px;
        height: 30px;
        background-position: 0 -225px;
        position: absolute;
        top: 83px;
        left: 380px;
        span {
          font-size: 12px;
          color: rgb(190, 190, 190);
          padding-right: 2px;
          padding-left: 35px;
        }
      }
    }
  }
  // 歌曲列表小框
  .song {
    width: 670px;
    height: 35px;
    position: absolute;
    left: 280px;
    top: 238px;
    border-bottom: 2px solid #c20c0c;
    .s3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
      color: #333;
    }
    .s4 {
      margin: 9px 0 0 20px;
      //  float: left;
      color: #666;
      font-size: 12px;
    }
    .s5 {
      float: right;
      color: #666;
      font-size: 12px;
    }
  }
  // 歌曲列表的大容器样式
  .songList {
    width: 670px;
    border: 1px solid rgb(197, 191, 191);
    position: absolute;
    left: 280px;
    top: 273px;
    font-size: 12px;
    color: rgb(138, 134, 134);
    .a1 {
      width: 50px;
      height: 50px;
    }
    // padding: 0;
    .t1 {
      width: 77.2px;
      height: 38.4px;
      line-height: 38.4px;
      // display: inline-block;
      float: left;
      border: 1.5px solid rgb(218, 217, 217);
      text-align: center;
      vertical-align: middle;
      background-color: #f2f2f2;
      border-left: none;
    }
    .t2 {
      width: 327px;
      height: 38.4px;
      line-height: 38.4px;
      display: inline-block;
      border: 1.5px solid rgb(218, 217, 217);
      text-align: center;
      vertical-align: middle;
      background-color: #f2f2f2;
    }
    .t3 {
      width: 110px;
      height: 38.4px;
      line-height: 38.4px;
      display: inline-block;
      border: 1.5px solid rgb(218, 217, 217);
      text-align: center;
      vertical-align: middle;
      background-color: #f2f2f2;
    }
    .t4 {
      width: 153.6px;
      height: 38.4px;
      line-height: 38.4px;
      display: inline-block;
      border: 1.5px solid rgb(218, 217, 217);
      text-align: center;
      vertical-align: middle;
      background-color: #f2f2f2;
      border-right: none;
    }
    table {
      width: 667px;
      // margin: 50px auto;
      border-collapse: collapse;
      color: rgb(138, 134, 134);
      font-size: 12px;

      .song1 {
        float: left;
        margin-left: 30px;
        line-height: 300%;
        .ss {
          transform: translate(-20px, 10px);
        }
      }

      td {
        // border: 1px solid black;
        text-align: center;
        height: 50px;
        vertical-align: middle;
        //  vertical-align:text-top;
        // vertical-align: bottom;
        padding: 6px 10px;
        line-height: 18px;
        text-align: left;
        .a1 {
          display: inline-block;
          margin-top: 5px;
        }
        .t5 {
          // float: left;
          // margin-left: -60px;
          display: inline-block;
          // line-height: 18px;
          // text-align: left;
          width: 200px;

          transform: translate(20px, -20px);
        }

        .t6 {
          margin-left: 0px;
        }
        .t7 {
          margin-left: 80px;
        }

        .el-icon-top {
          font-size: 10px;
          font-weight: 800;
          color: tomato;
        }
      }
      tr:nth-child(odd) {
        color: rgb(138, 134, 134);
        background-color: #f7f7f7;

        font-family: Arial, Helvetica, sans-serif;
      }
      tr:nth-child(even) {
        font-size: 12px;
        color: rgb(138, 134, 134);
        font-family: Arial, Helvetica, sans-serif;
      }
      .el-icon-video-play {
        font-size: 17px;
        font-weight: 800;
        color: #aaaaaa;
        margin-right: 5px;
      }
    }
  }
  // 评论区小框样式
  .comment {
    width: 670px;
    height: 35px;
    position: absolute;
    left: 280px;
    top: 770px;
    border-bottom: 2px solid #c20c0c;
    .c1 {
      font-size: 20px;
      line-height: 28px;
      display: inline-block;
      margin-right: 15px;
    }
    .c2 {
      color: #666;
      font-size: 12px;
    }
  }
  // 客户评论框
  .comment2 {
    width: 670px;
    height: 200px;
    position: absolute;
    left: 280px;
    top: 820px;
    display: flex;
    textarea {
      resize: none;
    }
    .arrows {
      position: absolute;
      width: 0;
      height: 0;
      border: 8px solid rgb(202, 201, 201);
      border-color: transparent #cac9c9 transparent transparent;
      border-right: left;
      top: -160px;
      bottom: 0;
      margin: auto 0;
      left: 50px;
      z-index: 9999;
    }
    .arrows1 {
      position: absolute;
      width: 0;
      height: 0;
      border: 7px solid rgb(202, 201, 201);
      border-color: transparent #fff transparent transparent;
      border-right: left;
      top: -160px;
      bottom: 0;
      margin: auto 0;
      left: 52px;
      z-index: 9999;
    }
    .c3 {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
    .c4 {
      outline: none;
      border: none;
      border: 1px solid rgb(202, 201, 201);
    }
    .c5 {
      margin-left: 550px;
      background-color: #4391da;
      color: white;
      border-radius: 5%;
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
      outline: none;
      border: none;
    }
  }
  // 精彩评论
  .c6 {
    position: absolute;
    left: 280px;
    top: 950px;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  // 精彩评论区
  .comment3 {
    border-top: 1px solid #cfcfcf;
    position: absolute;
    left: 280px;
    top: 1000px;
    width: 670px;
    .c7 {
      margin-top: 40px;
    }
  }
}
</style>
