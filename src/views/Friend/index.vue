<template>
  <div>
    <footer>
      <div class="left">
        <div class="content">
          <div class="content-header">
            <h3>动态</h3>
            <p class="el-icon-video-camera">&nbsp;&nbsp;发布视频</p>
            <p class="el-icon-edit">&nbsp;&nbsp;发布动态</p>
          </div>
          <div class="contend-bont">
            <ul class="content-items">
              <li
                class="content-content"
                v-for="(item, index) in friendLisit"
                :key="index"
              >
                <div class="content-items-left">
                  <a href="javascript:;">
                    <img :src="item.user.avatarUrl" />
                  </a>
                </div>
                <div class="content-items-react">
                  <div class="items-a">
                    <a href="javascript:;">{{ item.user.nickname }}</a>
                    <span class="el-icon-star-on"></span>
                    <span>{{ item.user.description }}</span>
                  </div>
                  <div class="items-tem">08：03</div>
                  <div class="items-text-top">
                    <a href="javascript:;">{{ item.actName }}</a>

                    <img
                      src="http://s1.music.126.net/style/web2/emt/emoji_33.png"
                      alt
                    />
                    {{ contentLisit[index].msg }}
                    <img
                      src="http://s1.music.126.net/style/web2/emt/emoji_52.png"
                      alt
                    />
                  </div>

                  <div class="items-text-bot">
                    <!-- <div class="items-paly">
                      <span>
                        <img
                          :src="item.user.backgroundUrl"
                          alt
                          style="width: 40px;height: 40px;"
                        />
                      </span>
                      <div class="muisc-paly">
                        <h3>Runway 2.0</h3>
                        <h4>{{item.actName}}</h4>
                      </div>
                    </div>-->
                    <div class="text-end">
                      <img :src="item.user.backgroundUrl" alt />
                    </div>
                    <div class="text-bot">
                      <span>点赞{{ item.info.likedCount }}</span>
                      <span>|</span>
                      <span>转发{{ item.info.shareCount }}</span>
                      <span>|</span>
                      <span>评论{{ item.info.commentCount }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-content-top">
          <div class="right-top">
            <a class="picture" href="javascript:;">
              <img :src="userInfo.avatarUrl" alt />
            </a>
            <h5 class="name">
              <a href="javuscript:;">{{ userInfo.nickname }}</a>
            </h5>
          </div>
          <ul class="right-bot">
            <li>
              <a href="javascript:;">
                <em>{{ userInfo.vipType }}</em>
                <i>会员等级</i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <em>{{ userInfo.follows }}</em>
                <i>关注</i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <em>{{ userInfo.followeds }}</em>
                <i>粉丝</i>
              </a>
            </li>
          </ul>
        </div>
        <div class="right-content-but">
          <div class="content-item">
            <div class="items-top">
              <h3>明星用户</h3>
              <a href="javascript:;">换一批</a>
            </div>
            <ul class="items-bot">
              <li class="items-content">
                <a class="content-a" href="javascript:;">
                  <img
                    src="http://p1.music.126.net/C5-3sSuNKMh_Exf8QitqPg==/2035196023030378.jpg?param=45y45"
                    alt
                  />
                </a>
                <div class="content-b">
                  <div class="names">胡海泉</div>
                  <div class="jianjie">
                    <a href="javascript:;">知名音乐人 羽泉组合成员</a>
                  </div>
                </div>
                <div class="content-btn">
                  <button class="guanzhu">+关注</button>
                </div>
              </li>
              <li class="items-content">
                <a class="content-a" href="javascript:;">
                  <img
                    src="http://p1.music.126.net/d_fIMlR6odZht4kWa9oG5w==/109951163123596131.jpg?param=45y45"
                    alt
                  />
                </a>
                <div class="content-b">
                  <div class="names">王东</div>
                  <div class="jianjie">
                    <a href="javascript:;">著名主持人，电台DJ，选秀评委</a>
                  </div>
                </div>
                <div class="content-btn">
                  <button class="guanzhu">+关注</button>
                </div>
              </li>
              <li class="items-content">
                <a class="content-a" href="javascript:;">
                  <img
                    src="http://p1.music.126.net/DI_I6gevLugjW3-j_k7Q1g==/2897213141751479.jpg?param=45y45"
                    alt
                  />
                </a>
                <div class="content-b">
                  <div class="names">朱云</div>
                  <div class="jianjie">
                    <a href="javascript:;">潮流音乐自身DJ</a>
                  </div>
                </div>
                <div class="content-btn">
                  <button class="guanzhu">+关注</button>
                </div>
              </li>
            </ul>
          </div>
          <div class="content-item">
            <div class="items-top">
              <h3>感兴趣的人</h3>
              <a href="javascript:;">换一批</a>
            </div>
            <ul class="items-bot">
              <li class="items-content">
                <a class="content-a" href="javascript:;">
                  <img
                    src="http://p1.music.126.net/DI_I6gevLugjW3-j_k7Q1g==/2897213141751479.jpg?param=45y45"
                    alt
                  />
                </a>
                <div class="content-b">
                  <div class="names">张三</div>
                  <div class="jianjie">
                    <a href="javascript:;">手机联系人：张三</a>
                  </div>
                </div>
                <div class="content-btn">
                  <button class="guanzhu">+关注</button>
                </div>
              </li>
              <li class="items-content">
                <a class="content-a" href="javascript:;">
                  <img
                    src="http://p1.music.126.net/DI_I6gevLugjW3-j_k7Q1g==/2897213141751479.jpg?param=45y45"
                    alt
                  />
                </a>
                <div class="content-b">
                  <div class="names">李四</div>
                  <div class="jianjie">
                    <a href="javascript:;">附近推荐</a>
                  </div>
                </div>
                <div class="content-btn">
                  <button class="guanzhu">+关注</button>
                </div>
              </li>
              <li class="items-content">
                <a class="content-a" href="javascript:;">
                  <img
                    src="http://p1.music.126.net/DI_I6gevLugjW3-j_k7Q1g==/2897213141751479.jpg?param=45y45"
                    alt
                  />
                </a>
                <div class="content-b">
                  <div class="names">老王</div>
                  <div class="jianjie">
                    <a href="javascript:;">媳妇推荐</a>
                  </div>
                </div>
                <div class="content-btn">
                  <button class="guanzhu">+关注</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import request from "@/api/ajax"
// import { extend } from 'vue/types/umd';
export default {
  name: "Firend",
  data() {
    return {
      friendLisit: {},
      contentLisit: [],
      userInfo: {},
      userId: "",
    }
  },
  async mounted() {
    this.userId = this.$route.query.id
    const { event } = await request.get("/event?pagesize")
    const { profile } = await request.get("/user/detail?uid=" + this.userId)
    this.userInfo = profile
    console.log(this.userInfo)
    event.forEach((item) => {
      this.contentLisit.push(JSON.parse(item.json))
    })
    this.friendLisit = event

    // const map1 = event.map(function (item) {
    //   return item;
    // });
    // console.log(map1);
    // var arrvalue; //用于存放取出bai的数组的du值
    // for (var i = 0; i < event.length; i++) {
    //   let arrvalue = JSON.parse(event[i].json); //数组的索引是从0开始的
    //   // console.log(arrvalue);
    //   // this.contentLisit = arrvalue;
    //   let obj1={}
    //   // console.log(this.contentLisit);
    //   // let obj2=extend(arrvalue)
    //    let obj2= Object.assign(obj1, arrvalue)
    //   console.log(obj2)
    // }
    // const result = event.json;
    // console.log(result)
    // const arr = result.map(function (result) {
    //   return result.json;
    // });
    // this.contentLisit = arr;
    // console.log(this.contentLisit);
    // const srr = event.map()
    // console.log(srr)
    // const { json } = await request.get("/event?pagesize=20");
    // let res = toString(event);
    // console.log(res);
    // console.log(event);
    // console.log(event[0].json)

    // console.log(this.contentLisit);
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
a {
  text-decoration: none;
  // color: #333;
  color: deepskyblue;
}
footer {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border-width: 0 1px;
  display: flex;
  .left {
    width: 680px;
    min-height: 700px;
    _height: 700px;
    padding: 20px 30px;
    border-right: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    float: left;
    .content .content-header {
      height: 40px;
      border-bottom: 2px solid #c20c0c;
      h3 {
        float: left;
        font-size: 24px;
        font-weight: normal;
      }
      p {
        width: 70px;
        height: 24px;
        line-height: 24px;
        float: right;
        margin: 6px 0 0 10px;
        border: 1px solid #d3d3d3;
        border-radius: 15px;
        font-size: 12px;
        color: #333;
      }
    }
    .content .contend-bont {
      position: relative;
      .content-items {
        position: relative;
        .content-content {
          width: 620px;
          margin-top: 15px;
          padding: 20px 0;
          border-bottom: 1px solid #cacdd3;
          .content-items-left {
            position: absolute;
            left: 0;
            width: 54px;
          }
          .content-items-react {
            padding-left: 10px;
            position: relative;
            zoom: 1;
            margin-left: 55px;
            padding-top: 4px;
            text-align: left;
            font-size: 14px;
            .items-tem {
              text-align: left;
              margin-top: 8px;
            }
            .items-text-top {
              margin-top: 10px;
              line-height: 24px;
              word-break: break-word;
              img {
                vertical-align: middle;
                margin: -2px 1px 0 1px;
              }
            }
            .items-text-bot {
              overflow: hidden;
              .items-paly {
                position: relative;
                padding: 10px;
                margin: 4px 0 5px;
                background-color: #f4f4f4;
                .muisc-paly {
                  position: absolute;
                  top: 10px;
                  left: 60px;
                  right: 30px;
                  height: 40px;
                  line-height: 22px;
                  h4 {
                    font-size: 12px;
                    color: #666;
                  }
                }
              }
              .text-end {
                width: 565px;
                height: 300px;
                img {
                  width: 300px;
                  height: 300px;
                  float: left;
                  border: 1px solid #cacdd3;
                }
              }
              .text-bot {
                margin: 18px 0 -2px;
                text-align: right;
                line-height: normal;
                span {
                  margin-left: 10px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .right {
    width: 300px;
    height: 100%;
    float: right;
    position: relative;
    border-right: 1px solid #d3d3d3;
    .right-content-top {
      .right-top {
        position: relative;
        height: 200px;
        background-color: #f7f7f7;
        border-bottom: 1px solid #dadada;

        .picture {
          position: absolute;
          top: 38px;
          left: 30px;
          width: 70px;
          height: 70px;
          img {
            display: block;
            width: 62px;
            height: 62px;
            padding: 2px;
            background: #fff;
            border: 1px solid #dadada;
          }
        }
        .name {
          position: absolute;
          top: 40px;
          right: 10px;
          font-size: 14px;
          width: 180px;
          a {
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(75, 71, 71);
          }
        }
      }
      .right-bot {
        position: absolute;
        top: 134px;
        left: 13px;
        overflow: hidden;
        li {
          // display: inline;
          margin: 0 2px 0 -2px;
          border-left: 1px solid #c2c2c2;
          float: left;
          a {
            display: block;
            padding: 0 20px;
            color: #666;
            em {
              display: block;
              padding: 0 0 9px;
              font-size: 20px;
              line-height: 20px;
              font-family: Arial;
            }
            i {
              display: block;
              padding: 0 0 0 2px;
            }
          }
        }
      }
    }
    .right-content-but {
      padding: 20px 30px;
      .content-item {
        margin: 0 0 20px;
        .items-top {
          margin: 5px 0;
          padding: 0 0 5px;
          border-bottom: 1px solid #dcdcdc;
          overflow: hidden;
          h3 {
            font-size: 14px;
            font-weight: 800;
            float: left;
          }
          a {
            font-size: 12px;
            float: right;
            color: #666;
          }
        }
        .items-bot {
          margin-bottom: 20px;
          .items-content {
            height: 45px;
            position: relative;
            padding: 10px 0;
            margin-bottom: 20px;
            .content-a {
              img {
                width: 45px;
                height: 45px;
                position: absolute;
                top: 10px;
                left: 0;
              }
            }
            .content-b {
              text-align: left;
              margin: 0 65px 0 40px;
              padding: 3px 0 7px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .names {
                margin-left: 20px;
                text-align: left;
              }
              .jianjie {
                margin-left: 20px;
                margin-top: 8px;
                a {
                  color: #9b9b9b;
                }
              }
            }
            .content-btn {
              position: absolute;
              top: 20px;
              // height: 100%;
              left: 75%;
              .dianji {
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -7px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
