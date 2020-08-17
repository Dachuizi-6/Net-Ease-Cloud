<template>
  <div class="wap">
    <div class="wap-content">
      <div class="left">
        <a-button class="lsat" type="primary" shape="circle" icon="left-circle"></a-button>
        <a-button class="paly" type="primary" size="large" shape="circle" icon="play-circle"></a-button>
        <a-button class="next" type="primary" shape="circle" icon="right-circle"></a-button>
      </div>
      <div class="right">
        <p class="right-img"></p>
        <div class="right-content">
          <div class="content-name">好运来</div>
          <div class="schedule">
            <div class="wire">
              <p class="circle"></p>
            </div>
            <div class="time">
              <span class="past-time">00:00</span>
              <span>|</span>
              <span class="sum-time">00:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Musicplayer",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.wap {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: rgba(46,46,46,.7);
  .wap-content {
    position: relative;
    width: 980px;
    height: 100%;
    margin: 0 auto;
    .left {
      width: 150px;
      height: 60px;
      left: 0px;
      vertical-align: middle;
      position: absolute;
      display: inline-block;
      .paly {
        margin: 10px 14px;
      }
    }
    .right {
      width: 830px;
      height: 60px;
      right: -150px;
      vertical-align: middle;
      // background-color: yellow;
      position: relative;
      display: inline-block;
      .right-img {
        width: 40px;
        height: 40px;
        left: 15px;
        top: 12px;
        position: absolute;
        display: inline-block;
        border: 1px solid black;
        border-radius: 5px;
        background: url(http://p1.music.126.net/I-FI4v2tkN_q1enl-BVE0w==/109951165143176397.jpg?param=140y140);
        background-size: 34px;
      }
      .right-content {
        left: 60px;
        // display: inline-block;
        .content-name {
          position: absolute;
          top: 0;
          left: 80px;
          font-size: 14px;
          margin-top: 10px;
          float: left;
        }
        .schedule {
          position: absolute;
          display: flex;
          top: 40px;
          left: 80px;
          .wire {
            width: 600px;
            height: 10px;
            border-radius: 5px;
            background-color: black;
            text-align: left;
            line-height: 10px;
            .circle {
              width: 15px;
              height: 15px;
              background-color: blanchedalmond;
            }
          }
          .time {
            text-align: right;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>