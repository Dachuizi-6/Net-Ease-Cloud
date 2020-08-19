<template>
  <div class="content-container version-heart">
    <div class="banner-container">
      <div class="main-banner version-heart">
        <div class="version-heart">
          <div class="banner-img">
            <swiper :options="swiperOptions">
              <swiper-slide v-for="item in bannerList" :key="item.encodeId">
                <img :src="item.imageUrl" alt />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="client-download">
          <img src="../assets/img/dawoload.png" alt />
        </div>
      </div>
    </div>
    <div class="content-container-left">
      <!-- 热门推荐 -->
      <div class="top-container">
        <div class="hot-recomment">
          <span class="iconfont icon-yuandian special"></span>
          <span class="title">热门推荐</span>
        </div>
        <ul class="hot-list">
          <li class="hot-item" v-for="item in hotMusicList" :key="item.id">
            <a href="javascript:;">{{ item.name }}</a>
          </li>
        </ul>
        <div class="hot-more">
          <span class="hot-more-title">更多</span>
          <span class="iconfont icon-iconfontjiantou right-arr"></span>
        </div>
      </div>

      <!-- 热门推荐 -->
      <div class="bottom-container">
        <ul class="video-container">
          <li class="video-item" v-for="item in recommentMusicList" :key="item.id">
            <a href="javascript:;">
              <img class="video-img" v-lazy="item.picUrl" alt />
              <p class="video-title">{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- 新碟上架 -->
      <div class="top-container">
        <div class="hot-recomment">
          <span class="iconfont icon-yuandian special"></span>
          <span class="title">新碟上架</span>
        </div>

        <div class="hot-more">
          <span class="hot-more-title">更多</span>
          <span class="iconfont icon-iconfontjiantou right-arr"></span>
        </div>
      </div>
      <!-- 新碟容器 -->
      <div class="new-song-container">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="newest in newestList" :key="newest.id">
            <ul class="new-disk-container">
              <li class="new-list-item" v-for="item in newest.item[0]" :key="item.id">
                <a class="disk-img" href="javascript:;">
                  <img v-lazy="item.picUrl" alt />
                </a>
                <a class="disk-title-singer" href="javascript:;">
                  <p class="title">{{ item.name }}</p>
                </a>
                <a class="disk-title-singer" href="javascript:;">
                  <p class="singer">{{ item.artist.name }}</p>
                </a>
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 榜单 -->
      <div class="top-container">
        <div class="hot-recomment">
          <span class="iconfont icon-yuandian special"></span>
          <span class="title">榜单</span>
        </div>

        <div class="hot-more">
          <span class="hot-more-title">更多</span>
          <span class="iconfont icon-iconfontjiantou right-arr"></span>
        </div>
      </div>

      <!-- 榜单容器 -->
      <div class="top-list-container">
        <dl class="top-list" v-for="item in topList" :key="item.id">
          <dt class="top-title-wrap">
            <div class="top-img">
              <img v-lazy="item.coverImgUrl" alt />
            </div>
            <div class="top-title">
              <a href="javascript:;">{{ item.name }}</a>
              <div class="icon">
                <i class="iconfont icon-bofang"></i>
                <i class="iconfont icon-jiatianjiawenjian-"></i>
              </div>
            </div>
          </dt>
          <dd class="top-item-wrap" v-for="(songs, index) in item.tracks" :key="songs.al.id">
            <div class="top-item-left">
              <span class="sort">{{ index + 1 }}</span>
              <router-link
                :to="{ path: '/playmusic', query: { id: songs.id } }"
                class="top-item-title"
              >{{ songs.al.name }}</router-link>
            </div>
            <div class="top-item-right">
              <i class="iconfont icon-bofang"></i>
              <i class="iconfont icon-jia"></i>
              <i class="iconfont icon-jiatianjiawenjian-"></i>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 右侧主内容区 -->
    <div class="content-container-right">
      <div class="login">
        <p class="login-title">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <router-link to="/login" class="click-login">用户登录</router-link>
      </div>
      <div class="singer-container">
        <div class="singer-top">
          <span class="singer-in">入驻歌手</span>
          <span class="singer-more">查看全部></span>
        </div>
        <ul class="singer-list">
          <li class="singer-item" v-for="item in topArtistsList" :key="item.id">
            <a class="singer-to" href="javascript:;">
              <img class="singer-img" v-lazy="item.picUrl" alt />
              <div class="singer-detail">
                <h5 class="singer-name">{{ item.name }}</h5>
                <!-- <p class="singer-pos">台湾歌手张惠妹</p> -->
              </div>
            </a>
          </li>
        </ul>

        <div class="tobecome-singer">
          <a class="apply-tobecome" href="jsvsscript:;">申请成为网易音乐人</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
export default {
  name: "Container",
  components: {},
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: "bullets",
        },
        autoplay: true,
        loop: true,
      },
      bannerList: [],
    }
  },
  async mounted () {
    // console.log("Current Swiper instance object", this.swiper)
    // this.swiper.slideTo(3, 1000, false)

    console.log(typeof this.$API.reqBanners)

    const res = await this.$API.reqBanners()
    this.bannerList = res.banners
    // console.log(res)

    // 获取热门推荐歌曲
    this.$store.dispatch("getMusicList")
    this.$store.dispatch("getRecommentMusicList")
    this.$store.dispatch("getNewestDisk")
    this.$store.dispatch("getTopList")
    this.$store.dispatch("getTopArtists")
  },
  computed: {
    ...mapState({
      hotMusicList: (state) => state.home.hotMusicList,
      recommentMusicList: (state) => state.home.recommentMusicList,
      newestList: (state) => state.home.newestList,
      topList: (state) => state.home.topList,
      topArtistsList: (state) => state.home.topArtistsList,
    }),
  },
}
</script>
<style lang="less" scoped>
.banner-img /deep/ .swiper-container,
.swiper-wrapper,
.swiper-slide {
  width: 726px;
  height: 285px;
}
.content-container {
  overflow: hidden;
  border: 1px solid #eee;
  border-top: none;
  box-sizing: border-box;
  .banner-container {
    height: 285px;
    .main-banner {
      height: 285px;
      .banner-img {
        float: left;
        width: 726px;
        height: 285px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .client-download {
        float: left;
        width: 254px;
        height: 285px;
        background-color: tomato;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .content-container-left {
    float: left;
    width: 726px;
    padding: 20px 20px 40px;
    box-sizing: border-box;
    // border-left: 1px solid #eee;
    // border-right: 1px solid #eee;
    .top-container {
      height: 33px;
      padding: 0 10px 0 34px;
      border-bottom: 2px solid #c10d0c;
      box-sizing: border-box;
      .hot-recomment {
        position: relative;
        float: left;
        .special {
          position: absolute;
          top: 3px;
          left: -27px;
          color: #c10d0c;
          font-size: 20px;
        }
        .title {
          font-size: 20px;
          color: #333;
        }
      }
      .hot-list {
        float: left;
        margin: 1px 0 0 20px;
        box-sizing: border-box;
        .hot-item {
          float: left;
          margin-right: 16px;
          a {
            // position: relative;
            color: #666;
            font-size: 12px;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
            // &::after {
            //   content: "";
            //   width: 1px;
            //   height: 10px;
            //   background-color: #666;
            //   position: absolute;
            //   top: 8px;
            //   left: 25px;
            // }
          }
          &.line {
            width: 2px;
            height: 10px;
            margin: 8px 10px 0;
            background-color: #ccc;
            box-sizing: border-box;
          }
        }
      }
      .hot-more {
        float: right;
        .hot-more-title {
          color: #666;
          font-size: 12px;
        }
        .right-arr {
          color: #c10d0c;
          font-size: 14px;
        }
      }
    }
    .bottom-container {
      .video-container {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .video-item {
          width: 140px;
          height: 204px;
          margin: 0 0 30px 0;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            .video-img {
              width: 140;
              height: 140;
            }
            .video-title {
              position: relative;
              color: #000;
              font-size: 14px;
              padding: 8px 0 3px 0;
              &::before {
                position: absolute;
                top: -31px;
                left: 0;
                content: "";
                width: 100%;
                height: 27px;
                background-color: rgba(0, 0, 0, 0.5);
              }
            }
          }
        }
      }
    }
    .new-song-container {
      width: 689px;
      height: 186px;
      margin: 20px 0 37px 0;
      background-color: #f5f5f5;
      border: 1px solid #eee;
      & /deep/ .el-carousel__container,
      .el-carousel__container,
      .el-carousel__item {
        width: 100%;
        height: 184px;
      }
      .new-disk-container {
        width: 649px;
        height: 186px;
        padding: 20px 30px;
        margin: 0 auto;
        .new-list-item {
          float: left;
          width: 118px;
          height: 146px;
          // background-color: red;
          &:not(:last-child) {
            margin-right: 36px;
          }
          &:first-child {
            margin-left: 9px;
          }
          .disk-img {
            cursor: pointer;
            width: 100px;
            height: 100px;
            display: block;
            img {
              width: 100px;
              height: 100px;
            }
          }
          .disk-title-singer {
            font-size: 12px;
            text-decoration: none;
          }
          .disk-title-singer:nth-child(2) {
            .title {
              color: #000;
              margin: 8px 0 5px 0;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .disk-title-singer:nth-child(3) {
            .singer {
              color: #666;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
    .top-list-container {
      width: 690px;
      height: 472px;
      border: 1px solid #eee;
      background-color: #f4f4f4;
      padding-bottom: 20px;
      margin-top: 20px;
      .top-list {
        float: left;
        width: 229px;
        height: 100%;
        &:nth-child(2) {
          border-left: 1px solid #eee;
          border-right: 1px solid #eee;
        }
        .top-title-wrap {
          overflow: hidden;
          padding: 10px 0 20px 20px;
          .top-img {
            width: 80px;
            height: 80px;
            float: left;
            img {
              width: 80px;
              height: 80px;
            }
          }
          .top-title {
            float: left;
            margin-top: 6px;
            margin-left: 10px;
            a {
              color: #333;
              font-size: 14px;
              text-decoration: none;
              font-weight: bold;
            }
            .icon {
              color: #333;
              margin-top: 5px;
              i {
                font-size: 25px;
                &:nth-child(1) {
                  margin-right: 10px;
                }
              }
            }
          }
        }
        .top-item-wrap {
          // display: flex;
          // justify-content: space-between;
          width: 100%;
          height: 32px;
          line-height: 32px;
          padding-left: 10px;
          padding-right: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:nth-child(even) {
            background-color: rgb(232, 232, 232);
          }
          &:hover .top-item-right {
            display: block;
          }
          .top-item-left {
            float: left;
            overflow: hidden;
            .sort {
              float: left;
              display: block;
              width: 35px;
              height: 32px;
              font-size: 16px;
              text-align: center;
            }
            .top-item-title {
              float: right;
              font-size: 12px;
              color: #000;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .top-item-right {
            display: none;
            float: right;
            i {
              color: rgb(101, 101, 101);
              &:nth-child(2) {
                margin: 0 10px;
              }
            }
          }
        }
      }
    }
  }
  .content-container-right {
    float: right;
    width: 252px;
    border-left: 1px solid #eee;
    .login {
      width: 100%;
      height: 126px;
      border: 1px solid #eee;
      border-left: none;
      border-right: none;
      .login-title {
        width: 205px;
        color: #666;
        font-size: 12px;
        padding: 16px 0;
        margin: 0 auto;
      }
      .click-login {
        display: block;
        width: 100px;
        height: 31px;
        text-align: center;
        line-height: 31px;
        color: #fff;
        font-size: 12px;
        margin: 0 auto;
        background-color: #8a060b;
        border: 0;
        outline: 0;
      }
    }
    .singer-container {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .singer-top {
        width: 210;
        height: 46px;
        padding: 15px 0 0 0;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        span {
          font-size: 12px;
          color: #333;
          &:nth-child(1) {
            float: left;
          }
          &:nth-child(2) {
            float: right;
          }
        }
      }
      .singer-list {
        margin-top: 20px;
        .singer-item {
          width: 210px;
          height: 62px;
          border: 1px solid #eee;
          margin-bottom: 20px;
          .singer-to {
            display: block;
            width: 210px;
            height: 62px;
            .singer-img {
              float: left;
              width: 62px;
              height: 62px;
            }
            .singer-detail {
              float: right;
              box-sizing: border-box;
              width: 148px;
              height: 62px;
              padding-left: 9px;
              .singer-name {
                color: #333;
                font-size: 14px;
                font-weight: 700;
                margin-top: 8px;
              }
              .singer-pos {
                color: #666;
                font-size: 12px;
                margin-top: 6px;
              }
            }
          }
        }
      }
      .tobecome-singer {
        width: 205px;
        height: 31px;
        margin-bottom: 20px;
        .apply-tobecome {
          display: block;
          width: 205px;
          height: 31px;
          border: 1px solid #eee;
          box-sizing: border-box;
          color: #333;
          font-weight: bold;
          text-decoration: none;
          font-size: 14px;
          text-align: center;
          line-height: 31px;
        }
      }
    }
  }
}
</style>
