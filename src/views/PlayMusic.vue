<template>
  <div class="songs-container">
    <div class="song-left">
      <!-- 左边 -->
      <div class="disk-singer-img">
        <img src="@/assets/img/cover.jpg" alt="" />
        <div class="outer-play">
          <a href="javascript:;"
            ><i class="iconfont icon-yinle"></i>生成外链播放器</a
          >
        </div>
      </div>
      <!-- 右边 -->
      <div class="song-detail-wrap">
        <div class="song-detail">
          <i class="iconfont icon-yinle special"></i>
          <span class="song-title">喜欢你</span>
        </div>
        <div class="song-maker">
          <p class="maker">
            <span class="maker">歌手:</span>
            <span class="belong-to">大锤子</span>
          </p>
          <p class="maker">
            <span class="maker">所属专辑:</span>
            <span class="belong-to">天外来物</span>
          </p>
        </div>
        <div class="play-controll">
          <a href="javascript:;" title="播放" @click="handlePlay">
            <i class="iconfont icon-bofang"></i><span>播放</span>
          </a>
          <a href="javascript:;"><i class="iconfont icon-jia"></i></a>
          <a href="javascript:;">
            <i class="iconfont icon-shoucang1"></i><span>收藏</span></a
          >
          <a href="javascript:;">
            <i class="iconfont icon-fenxiang"></i><span>分享</span></a
          >
          <a href="javascript:;">
            <i class="iconfont icon-xiazai"></i><span>下载</span></a
          >
          <a href="javascript:;">
            <i class="iconfont icon-pinglun"></i><span>(79795899)</span></a
          >
        </div>
        <div class="song-words">
          <ul>
            <li v-for="(item, index) in words" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="song-right"></div>
  </div>
</template>
<script>
import { reqMusicWords } from "@/api"
import { mapState } from "vuex"
export default {
  name: "PlayMusic",
  data() {
    return {
      play: true,
      words: "",
    }
  },
  async mounted() {
    // console.log(this)
    let id = this.$route.query.id
    this.playMusic(id)
    const { lrc } = await reqMusicWords(id)
    console.log(lrc)

    const res = this.lyrics(lrc.lyric)
    this.words = res
  },
  methods: {
    // 控制播放
    handlePlay() {
      this.play = !this.play
      if (this.play) {
        this.$audioElement.play()
      } else {
        this.$audioElement.pause()
      }
    },
    // 页面加载播放
    async playMusic(id) {
      // console.log(id)
      let res = await this.$API.reqMusicUrl(id)
      // console.log(res)
      if (res.code === 200) {
        let url = res.data[0].url

        this.$audioElement.src = url

        this.$audioElement.controls = true

        document.body.appendChild(this.$audioElement)
        // console.log(audioElement)

        this.$audioElement.addEventListener("canplaythrough", (event) => {
          /* 音频可以播放；如果权限允许则播放 */
          this.$audioElement.play()
        })
      }
    },

    // 设置play歌词
    createLrc(medis) {
      const medisArray = []
      var medises = medis.split("\n")
      medises.forEach(function(item) {
        // 遍历medises，并且将时间和文字拆分开，并push进自己定义的数组，形成一个对象数组
        var t = item.substring(item.indexOf("[") + 1, item.indexOf("]"))
        medisArray.push({
          t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
          c: item.substring(item.indexOf("]") + 1, item.length),
        })
      })
      return medisArray.filter((v) => v.c && v.c != " ")
    }, // 设置show歌词
    lyrics(lrc) {
      // var lrc = String();
      if (lrc.length == 0) return
      var lyricstxt = [] //存放歌词
      var lrcs = lrc.split("\n") //用回车拆分成数组
      for (var i in lrcs) {
        //遍历歌词数组
        lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, "") //去除前后空格
        var t = lrcs[i].substring(
          lrcs[i].indexOf("[") + 1,
          lrcs[i].indexOf("]")
        ) //取[]间的内容
        var s = t.split(":") //分离:前后文字
        if (!isNaN(parseInt(s[0]))) {
          //是数值
          var arr = lrcs[i].match(/\[(\d+:.+?)\]/g) //提取时间字段，可能有多个
          var start = 0
          for (var k in arr) {
            start += arr[k].length //计算歌词位置
          }
          var content = lrcs[i].substring(start) //获取歌词内容
          lyricstxt.push(content)
        }
      }
      return lyricstxt.filter((v) => v)
    },
  },
  computed: {
    ...mapState({ topList: (state) => state.home.topList }),
  },
}
</script>
<style lang="less" scoped>
.songs-container {
  border: 1px solid black;
  border-top: none;
  overflow: hidden;
  .song-left {
    float: left;
    width: 707px;
    padding: 20px 20px;
    overflow: hidden;
    border-right: 1px solid black;
    .disk-singer-img {
      float: left;
      width: 206px;
      img {
        width: 206px;
        height: 205px;
        border-radius: 50%;
      }
      .outer-play {
        text-align: center;
        margin-top: 20px;
        a {
          color: #0c7372;
          font-size: 12px;
          text-decoration: none;
        }
      }
    }
    .song-detail-wrap {
      float: left;
      width: 440px;
      margin-left: 20px;
      // background-color: pink;
      .song-detail {
        line-height: 35px;
        font-size: 24px;
        .special {
          font-size: 24px;
          color: red;
        }
        .song-title {
          color: #333;
          margin-left: 8px;
        }
      }
      .song-maker {
        .maker {
          padding: 10px 0;
          font-size: 12px;
          .maker {
            color: #999;
          }
          .belong-to {
            color: #0c73c2;
          }
        }
      }
      .play-controll {
        a {
          height: 31px;
          font-size: 12px;
          color: #333;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          border-radius: 8px;
          padding: 10px 10px;
          margin-right: 5px;
          i {
            margin-right: 3px;
          }
          cursor: pointer;
          &:nth-child(1) {
            color: #fff;
            // width: 61px;
            background-color: rgb(42, 123, 200);
          }
          &:nth-child(2) {
            // width: 31px;
            background-color: rgb(42, 123, 200);
            color: #fff;
          }
          &:nth-child(3) {
            // width: 54px;
            border: 1px solid #eee;
          }
          &:nth-child(4) {
            // width: 54px;
            border: 1px solid #eee;
          }
          &:nth-child(5) {
            // width: 54px;
            border: 1px solid #eee;
          }
          &:nth-child(6) {
            // width: 78px;
            border: 1px solid #eee;
          }
        }
      }
      .song-words {
        padding: 20px;
        padding-left: 0;
      }
    }
  }
  .song-right {
    float: right;
    width: 270px;
    height: 100px;
    background-color: aqua;
  }
}
</style>
