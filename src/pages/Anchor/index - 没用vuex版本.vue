<template>
  <div class="wrap">
    <div class="anchorContainer">
      <div class="anchorNav">
        <!-- 电台列表信息 -->
        <div class="anchorNav-top">
          <el-carousel height="200px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="item in 3" :key="item">
              <ul>
                <a href="###" v-for="(item,index) in djList.categories" :key="index">
                  <li class="navList">
                    <div>
                      <img :src="item.pic56x56Url" alt />
                    </div>
                    <span>{{item.name}}</span>
                  </li>
                </a>
              </ul>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 推荐节目 节目排行榜 -->
        <div class="anchorNav-content">
          <!-- 左侧区域 -->
          <div class="content-left">
            <div class="content-left-title">
              <h3>推荐节目</h3>
              <a href>更多 ></a>
            </div>
            <div class="content-left-list">
              <ul>
                <a href="###">
                  <li v-for="(item,index) in programList" :key="index">
                    <img :src="item.coverUrl" alt />
                    <div class="details">
                      <p>{{item.name}}</p>
                      <p>{{item.radio.name}}</p>
                    </div>
                    <div class="star">
                      <span>{{item.radio.category}}</span>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <!-- 右侧区域 -->
          <div class="content-right">
            <div class="content-left-title">
              <h3>节目排行榜</h3>
              <a href>更多 ></a>
            </div>
            <div class="content-left-list">
              <ul>
                <a href="###">
                  <li v-for="(item,index) in programTopList" :key="index">
                    <img :src="item.program.radio.picUrl" alt />
                    <div class="details">
                      <p>{{item.program.mainSong.name}}</p>
                      <p>{{item.program.radio.name}}</p>
                    </div>
                    <div
                      class="star"
                      v-for="(item,index) in item.program.mainSong.artists"
                      :key="index"
                    >
                      <span>{{item.name}}</span>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <!-- 音乐故事-电台 -->
        <div class="musicStory">
          <div class="musicStoryTop">
            <h1>音乐故事-电台</h1>
          </div>
          <div class="musicStoryCon">
            <ul>
              <li v-for="item in djMusicList" :key="item.id">
                <a href="###">
                  <img :src="item.picUrl" alt="图片" />
                </a>
                <a href>
                  <p>{{item.name}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqDj, reqProgram, reqProgramTopList, reqDjMusic } from '../../api'
export default {
  name: "Anchor",
  data () {
    return {
      djList: [],
      programList: [],
      programTopList: [],
      djMusicList: []
    }
  },
  async mounted () {
    // 获取电台列表数据
    const result = await reqDj()
    // console.log(result)
    this.djList = result

    // 获取推荐节目数据
    const { programs } = await reqProgram()
    // console.log(programs)
    this.programList = programs

    // 获取节目排行榜
    const { toplist } = await reqProgramTopList()
    // console.log(toplist)
    this.programTopList = toplist.slice(0, 10)

    // 获取音乐电台
    const { djRadios } = await reqDjMusic()
    console.log(djRadios)
    this.djMusicList = djRadios.slice(0, 4)
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .anchorContainer {
    width: 980px;
    height: 1350px;
    margin: 0 auto;
    margin-top: 35px;
    display: flex;
    background-color: #fff;
    .anchorNav {
      width: 900px;
      height: 1420px;
      margin: 0 auto;
      margin-top: 40px;

      /*************电台列表***************/
      .anchorNav-top {
        height: 194px;
        // background: pink;

        .el-carousel__item {
          ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .navList {
              width: 70px;
              height: 70px;
              margin: 10px;
              font-size: 12px;

              margin-bottom: 30px;
              // background-color: skyblue;
              div {
                width: 48px;
                height: 48px;
                margin-bottom: 4px;
                img {
                  width: 48px;
                  height: 48px;
                }
              }
            }
          }
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #fff;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #fff;
        }
      }

      /****************推荐区域************/
      .anchorNav-content {
        width: 900px;
        height: 643px;
        margin-top: 16px;
        // background-color: pink;
        display: flex;
        justify-content: space-between;
        .content-left {
          width: 426px;
          height: 643px;
          // background-color: skyblue;
          .content-left-title {
            display: flex;
            justify-content: space-between;
            height: 42px;
            line-height: 42px;
            h3 {
              font-size: 24px;
            }
          }
          .content-left-list {
            width: 426px;
            height: 601px;
            // background: #666;
            border-left: 1px solid #eaeaea;
            border-right: 1px solid #eaeaea;
            border-bottom: 1px solid #eaeaea;
            border-top: 2px solid #c20c0c;
            ul {
              a {
                width: 424px;
                height: 59px;
                display: block;
                &:hover {
                  background-color: #f7f7f7;
                }
                li {
                  display: flex;
                  width: 424px;
                  height: 59px;
                  padding: 8px;
                  // background-color: pink;
                  img {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                  }
                  .details {
                    p {
                      width: 180px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      font-size: 12px;
                      padding: 2px 0px;
                    }
                  }
                  .star {
                    margin-left: 80px;
                    margin-top: 10px;
                    font-size: 14px;
                    height: 24px;
                    border: 1px solid #eee;
                    span {
                      padding: 5px;
                    }
                  }
                }
              }
            }
          }
        }
        .content-right {
          width: 426px;
          height: 643px;
          // background-color: skyblue;
          .content-left-title {
            display: flex;
            justify-content: space-between;
            height: 42px;
            line-height: 42px;
            h3 {
              font-size: 24px;
            }
          }
          .content-left-list {
            width: 426px;
            height: 601px;
            // background: #666;
            border-left: 1px solid #eaeaea;
            border-right: 1px solid #eaeaea;
            border-bottom: 1px solid #eaeaea;
            border-top: 2px solid #c20c0c;
            ul {
              a {
                width: 424px;
                height: 59px;
                display: block;
                &:hover {
                  background-color: #f7f7f7;
                }
                li {
                  display: flex;
                  width: 424px;
                  height: 59px;
                  padding: 8px;
                  // background-color: pink;
                  img {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                  }
                  .details {
                    p {
                      width: 180px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      font-size: 12px;
                      padding: 2px 0px;
                    }
                  }
                  .star {
                    margin-left: 80px;
                    margin-top: 10px;
                    font-size: 14px;
                    height: 24px;
                    border: 1px solid #eee;
                    span {
                      padding: 5px;
                    }
                  }
                }
              }
            }
          }
        }
      }

      /**************音乐故事-电台*********/
      .musicStory {
        width: 900px;
        height: 364px;
        margin-top: 35px;
        // background-color: pink;
        .musicStoryTop {
          width: 900px;
          height: 42px;
          border-bottom: 2px solid #c20c0c;
          h1 {
            width: 900px;
            height: 42px;
            font-size: 24px;
            line-height: 42px;
          }
        }
        .musicStoryCon {
          width: 900px;
          height: 322px;
          // background-color: pink;
          ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            border-bottom: 1px dashed #eaeaea;
            li {
              display: flex;
              width: 420px;
              height: 161px;
              padding: 20px;
              // background-color: pink;
              &:nth-child(1),
              &:nth-child(2) {
                border-bottom: 1px solid #eaeaea;
              }

              a {
                img {
                  width: 120px;
                  height: 120px;
                }
              }
              p {
                margin: 20px 0px 0px 20px;
                font-size: 18px;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
}
</style>