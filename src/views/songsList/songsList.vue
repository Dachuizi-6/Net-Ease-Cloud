<template>
  <!-- 主容器 -->
  <div class="songsListContainer">
    <!-- 头部选择 -->
    <div class="songsList-header">
      <h3 class="songsList-headerItem">
        全部
        <el-dropdown class="elDown" trigger="click" placement="bottom-start">
          <el-button size="mini" @click="handleSongList">
            选择分类
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu class="cateBanner" slot="dropdown">
            <div
              id="cateListBox"
              class="n-sltlyr d-flag n-sltlyr-show"
              style="left:0;"
            >
              <div class="hd">
                <i class="icn"></i>
              </div>
              <div class="bd">
                <h3 class="h3-banner">
                  <a
                    href="/playlist/catlist/"
                    class="j-flag u-btn u-btn-g s-fc1"
                    data-cat="全部"
                  >
                    <em>全部风格</em>
                  </a>
                </h3>
                <dl class="f-cb">
                  <dt>
                    <i class="el-icon-aim"></i>
                    {{ item }}
                  </dt>
                  <dd>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD"
                      data-cat="华语"
                      >语种</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E"
                      data-cat="欧美"
                      >欧美</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD"
                      data-cat="日语"
                      >日语</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD"
                      data-cat="韩语"
                      >韩语</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD"
                      data-cat="粤语"
                      >粤语</a
                    >
                    <span class="line">|</span>
                  </dd>
                </dl>
                <dl class="f-cb">
                  <dt><i class="u-icn el-icon-s-fold"></i>风格</dt>
                  <dd>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C"
                      data-cat="流行"
                      >流行</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A"
                      data-cat="摇滚"
                      >摇滚</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3"
                      data-cat="民谣"
                      >民谣</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90"
                      data-cat="电子"
                      >电子</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2"
                      data-cat="舞曲"
                      >舞曲</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1"
                      data-cat="说唱"
                      >说唱</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90"
                      data-cat="轻音乐"
                      >轻音乐</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB"
                      data-cat="爵士"
                      >爵士</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91"
                      data-cat="乡村"
                      >乡村</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=R%26B%2FSoul"
                      data-cat="R&amp;B/Soul"
                      >R&amp;B/Soul</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8"
                      data-cat="古典"
                      >古典</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F"
                      data-cat="民族"
                      >民族</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6"
                      data-cat="英伦"
                      >英伦</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E"
                      data-cat="金属"
                      >金属</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%9C%8B%E5%85%8B"
                      data-cat="朋克"
                      >朋克</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83"
                      data-cat="蓝调"
                      >蓝调</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC"
                      data-cat="雷鬼"
                      >雷鬼</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
                      data-cat="世界音乐"
                      >世界音乐</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81"
                      data-cat="拉丁"
                      >拉丁</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=New%20Age"
                      data-cat="New Age"
                      >New Age</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E"
                      data-cat="古风"
                      >古风</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%90%8E%E6%91%87"
                      data-cat="后摇"
                      >后摇</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=Bossa%20Nova"
                      data-cat="Bossa Nova"
                      >Bossa Nova</a
                    >
                    <span class="line">|</span>
                  </dd>
                </dl>
                <dl class="f-cb">
                  <dt><i class="u-icn el-icon-coffee-cup"></i>场景</dt>
                  <dd>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8"
                      data-cat="清晨"
                      >清晨</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A"
                      data-cat="夜晚"
                      >夜晚</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0"
                      data-cat="学习"
                      >学习</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C"
                      data-cat="工作"
                      >工作</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91"
                      data-cat="午休"
                      >午休</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6"
                      data-cat="下午茶"
                      >下午茶</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81"
                      data-cat="地铁"
                      >地铁</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6"
                      data-cat="驾车"
                      >驾车</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8"
                      data-cat="运动"
                      >运动</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C"
                      data-cat="旅行"
                      >旅行</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5"
                      data-cat="散步"
                      >散步</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E9%85%92%E5%90%A7"
                      data-cat="酒吧"
                      >酒吧</a
                    >
                    <span class="line">|</span>
                  </dd>
                </dl>
                <dl class="f-cb">
                  <dt><i class="u-icn el-icon-s-custom"></i>情感</dt>
                  <dd>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%80%80%E6%97%A7"
                      data-cat="怀旧"
                      >怀旧</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0"
                      data-cat="清新"
                      >清新</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB"
                      data-cat="浪漫"
                      >浪漫</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F"
                      data-cat="伤感"
                      >伤感</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88"
                      data-cat="治愈"
                      >治愈</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE"
                      data-cat="放松"
                      >放松</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC"
                      data-cat="孤独"
                      >孤独</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8"
                      data-cat="感动"
                      >感动</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B"
                      data-cat="兴奋"
                      >兴奋</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90"
                      data-cat="快乐"
                      >快乐</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99"
                      data-cat="安静"
                      >安静</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5"
                      data-cat="思念"
                      >思念</a
                    >
                    <span class="line">|</span>
                  </dd>
                </dl>
                <dl class="f-cb">
                  <dt><i class="u-icn el-icon-chat-dot-round"></i>主题</dt>
                  <dd class="last">
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%BB%BC%E8%89%BA"
                      data-cat="综艺"
                      >综艺</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0"
                      data-cat="影视原声"
                      >影视原声</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=ACG"
                      data-cat="ACG"
                      >ACG</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5"
                      data-cat="儿童"
                      >儿童</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD"
                      data-cat="校园"
                      >校园</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F"
                      data-cat="游戏"
                      >游戏</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=70%E5%90%8E"
                      data-cat="70后"
                      >70后</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=80%E5%90%8E"
                      data-cat="80后"
                      >80后</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=90%E5%90%8E"
                      data-cat="90后"
                      >90后</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2"
                      data-cat="网络歌曲"
                      >网络歌曲</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=KTV"
                      data-cat="KTV"
                      >KTV</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8"
                      data-cat="经典"
                      >经典</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1"
                      data-cat="翻唱"
                      >翻唱</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%90%89%E4%BB%96"
                      data-cat="吉他"
                      >吉他</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4"
                      data-cat="钢琴"
                      >钢琴</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90"
                      data-cat="器乐"
                      >器乐</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95"
                      data-cat="榜单"
                      >榜单</a
                    >
                    <span class="line">|</span>
                    <a
                      class="s-fc1"
                      href="/discover/playlist/?cat=00%E5%90%8E"
                      data-cat="00后"
                      >00后</a
                    >
                    <span class="line">|</span>
                  </dd>
                </dl>
              </div>
              <div class="ft"></div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="hotDj" @click="addHot">
          <a class="a1" href="javascript:;" data-order="hot">热门</a>
        </div>
      </h3>
    </div>
    <!-- 内容区 -->
    <div class="mainContainer">
      <div class="mp-container" v-for="(item, index) in playLists" :key="index">
        <div class="u-cover">
          <img v-bind:src="item.coverImgUrl" alt />
          <div class="bottom">
            <a
              class="el-icon-video-play"
              title="播放"
              href="javascript:;"
              data-res-type="13"
              data-res-id="5047833873"
              data-res-action="play"
            ></a>
            <span class="el-icon-headset"></span>
            <span class="nb">{{ item.playCount | playCount }}</span>
          </div>
        </div>
        <p class="dec-song">
          <a href="###" title="item.name" class="dec-title">{{ item.name }}</a>
        </p>
        <p class="dec-icon">
          <span class="s-fc4">by</span>
          <a
            :title="item.creator.nickname"
            href="/user/home?id=1650191296"
            class="nm nm-icn f-thide s-fc3"
            >{{ item.creator.nickname }}</a
          >
          <sup class="el-icon-star-on"></sup>
        </p>
      </div>
    </div>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="1000"
    ></el-pagination>
  </div>
</template>
<script>
import { reqGetPlayList, reqGetSongList, reqHotPlayList } from "@/api/index"

export default {
  name: "SongsList",
  components: {},
  filters: {
    playCount(value) {
      console.log(value)
      if (value > 100000) {
        const res = Math.ceil(value / 10000)
        return res + "万"
      } else {
        return value
      }
    },
  },
  data() {
    return {
      //播放列表
      playLists: {},
      //播放次数
      playCount: {},
      //大分类
      categoriesList: {},
      //所有分类
      allPlayList: {},
    }
  },
  async mounted() {
    const res = await reqGetPlayList()
    this.playLists = res.playlists
    console.log(this.playLists)
    const result = res.playlists
    const arr = result.map(function(result) {
      return result.playCount
    })
    this.playCount = arr
  },
  methods: {
    async handleSongList() {
      const result = await reqGetSongList()
      this.categoriesList = result.categories
      this.allPlayList = result.sub

      console.log("11", this.allPlayList)
      console.log(result.sub[23].category)
    },

    async addHot() {
      this.playLists = null
      const res = await reqHotPlayList()
      this.playLists = res.playlists
    },

    computed: {
      all() {
        arr = {
          0: [],
          1: [],
          2: [],
          3: [],
          4: [],
        }
        const op = this.allPlayList

        const res = op.category / 1 === arr[index] ? arr.push() : null

        console.log("333", res)
      },
    },
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
/deep/ element.style {
  transform-origin: center top;
  z-index: 2009;
  position: fixed;
  top: 170px;
  left: 1px;
}
.cateBanner /deep/ #cateListBox {
  width: 700px;
  height: 480px;
  color: #333;
  font-size: 12px;
  dl {
    &:nth-child(1) {
      align-items: center;
    }
    width: 700px;
    display: flex;
    .f-cb {
      display: flex;
    }
    dt {
      width: 71px;
      margin: 30px;
      display: block;
    }
    dt i {
      font-size: 28px;
      vertical-align: middle;
    }
    dd {
      width: 604px;
      // margin-left: 96px;
      padding: 16px 15px 0 15px;
      border-left: 1px solid #e6e6e6;
      margin-inline-start: 10px;
    }
  }
  a {
    color: #333;
    margin: 0 10px;
    display: inline-block;
  }
  .bd {
    display: block;
    width: 700px;
    height: 100%;
    // margin: 10px auto;
    .h3-banner {
      width: 100%;
      height: 50px;
      border-bottom: solid 1px #e6e6e6;
      color: #000;
      vertical-align: middle;
    }
    .j-flag {
      display: block;
      width: 76px;
      height: 26px;
      border: 1px #333 solid;
      border-radius: 4px;
      line-height: 26px;
      text-align: center;
      margin: 20px;
    }
  }
}
.songsListContainer {
  .pagination {
    float: right;
    margin: 40px 50%;
    transform: translateX(50%);
  }
  .songsList-header {
    border-bottom: 2px #a40011 solid;
    margin-bottom: 30px;
    .songsList-headerItem {
      padding: 10px;
      align-items: center;
      .elDown {
        vertical-align: middle;
        width: 60px;
        height: 30px;
      }

      .hotDj {
        float: right;
        bottom: 0;
        width: 46px;
        height: 29px;
        font-size: 12px;
        line-height: 29px;
        text-align: center;
        background-color: #a40011;
        border-radius: 2px;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    h3 {
      font-size: 24px;
      color: #333333;
    }
  }
  margin: 0 auto;
  width: 980px;
  height: 100%;
  margin-top: 35px;
  padding: 30px;
  background-color: white;
  .mainContainer {
    display: flex;
    width: 950px;
    white-space: wrap;
    flex-wrap: wrap;
    .mp-container {
      width: 20%;
      position: relative;
      .dec-icon {
        align-items: center;
        // margin-top: 0px !important;
        position: absolute;
        bottom: 36px;
        a {
          display: inline-block;
          vertical-align: bottom;
          max-width: 106px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .el-icon-star-on {
          color: #f80;
          font-size: 18px;
          vertical-align: bottom;
        }
      }
      .u-cover {
        position: relative;
        width: 140px;
        height: 140px;
        display: block;
        .bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 27px;
          background-position: 0 -537px;
          color: #ccc;
          line-height: 27px;
          background: rgba(55, 55, 71, 0.6);
          .el-icon-video-play {
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            background-position: 0 0;
            font-size: 18px;
            color: #ccc;
          }
          .el-icon-headset {
            float: left;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            margin: 9px 5px 9px 10px;
          }
        }
      }
      width: 190px;
      height: 218px;
      font-size: 12px;
      a {
        color: #000;
      }
      img {
        width: 140px;
        height: 140px;
      }
      .dec-song {
        width: 140px;
        height: 19px;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        .s-fc4 {
          color: #999;
          margin-right: 4px;
          a {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
