<template>
  <div>
    <!-- 整体结构 -->
    <div class="singerContainer">
      <!-- 左侧区域 -->
      <div class="singerLeft">
        <div class="singerLeftList">
          <div class="singerLeftItem-top">
            <h2>推荐</h2>
            <ul>
              <a href="###" class="active">
                <li>推荐歌手</li>
              </a>
              <a href="###">
                <li>入驻歌手</li>
              </a>
            </ul>
          </div>
          <div class="singerLeftItem-nav">
            <h2>华语</h2>
            <ul>
              <a href="###">
                <li>华语男歌手</li>
              </a>
              <a href="###">
                <li>华语女歌手</li>
              </a>
              <a href="###">
                <li>华语组合/乐队</li>
              </a>
            </ul>
          </div>
          <div class="singerLeftItem-nav">
            <h2>欧美</h2>
            <ul>
              <a href="###">
                <li>欧美男歌手</li>
              </a>
              <a href="###">
                <li>欧美女歌手</li>
              </a>
              <a href="###">
                <li>欧美组合/乐队</li>
              </a>
            </ul>
          </div>
          <div class="singerLeftItem-nav">
            <h2>日本</h2>
            <ul>
              <a href="###">
                <li>日本男歌手</li>
              </a>
              <a href="###">
                <li>日本女歌手</li>
              </a>
              <a href="###">
                <li>日本组合/乐队</li>
              </a>
            </ul>
          </div>
          <div class="singerLeftItem-nav">
            <h2>韩语</h2>
            <ul>
              <a href="###">
                <li>韩语男歌手</li>
              </a>
              <a href="###">
                <li>韩语女歌手</li>
              </a>
              <a href="###">
                <li>韩语组合/乐队</li>
              </a>
            </ul>
          </div>
          <div class="singerLeftItem-nav">
            <h2>其他</h2>
            <ul>
              <a href="###">
                <li>其他男歌手</li>
              </a>
              <a href="###">
                <li>其他女歌手</li>
              </a>
              <a href="###">
                <li>其他组合/乐队</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="singerRight">
        <div class="singerRightCon">
          <div class="singerRight-title">推荐歌手</div>
          <div class="singerLists">
            <ul>
              <li v-for="(item,index) in singerList" :key="index">
                <img :src="item.picUrl" alt />

                <p>
                  <a href="###">{{item.name}}</a>
                  <a href="###">
                    <i class="iconfont icon-gerentouxiang"></i>
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqSingerList } from "../../api/index";
export default {

  name: "Singer",
  // 状态数据
  data () {
    return {
      singerList: []
    };
  },
  // 注册组件
  components: {

  },
  // 
  async mounted (area) {
    const result = await reqSingerList(area)
    // console.log(result.artists)
    this.singerList = result.artists
    // this.$store.dispatch('getSingerList') vuex没有组件化获取
    console.log(this.$store.state.singer.singerLists)
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.singerContainer {
  width: 980px;
  height: 1500px;
  margin: 0 auto;
  margin-top: 35px;
  display: flex;
  // background-color: red;
  /***********左侧样式*****************/
  .singerLeft {
    width: 180px;
    height: 1500px;
    border-left: 1px solid #c1c1c1;
    border-right: 1px solid #c1c1c1;
    .singerLeftList {
      width: 178px;
      height: 1000px;
      margin-top: 50px;
      background-color: #f9f9f9;
      color: #333;
      .singerLeftItem-top {
        padding: 5px 27px;
        border-bottom: 1px solid #eaeaea;
        ul {
          list-style: square;
          a {
            &.active {
              color: #c20c0c;
            }
            li {
              font-size: 12px;
              margin: 5px 0px;
            }
          }
        }
      }
      .singerLeftItem-nav {
        width: 160px;
        height: 135px;
        padding: 10px 27px;
        border-bottom: 1px solid #eaeaea;
        // background-color: skyblue;
        ul {
          list-style: square;
          a {
            &.active {
              color: #c20c0c;
            }
            li {
              font-size: 12px;
              margin: 8px 0px;
            }
          }
        }
      }
    }
  }

  /***********右侧样式*****************/
  .singerRight {
    width: 799px;
    height: 1500px;
    border-right: 1px solid #c1c1c1;
    .singerRightCon {
      width: 799px;
      height: 100%;
      padding: 40px;
      // background-color: skyblue;
      .singerRight-title {
        width: 719px;
        height: 42px;
        font-size: 24px;
        line-height: 42px;
        border-bottom: 2px solid #c20c0c;
        // background-color: #999;
      }
      .singerLists {
        width: 719px;
        height: 100%;
        margin-top: 15px;
        // background-color: pink;
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 130px;
            height: 184px;
            // background: pink;

            img {
              top: 0px;
              right: 0px;
              width: 130px;
              height: 130px;
            }
            p {
              font-size: 12px;
              .icon-gerentouxiang {
                float: right;
                color: #d91921;
                font-size: 20px;
                margin-right: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>