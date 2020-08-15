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
              <span class="circle"></span>
            </div>
            <div class="time">
              <p class="past-time"></p>
              <p>|</p>
              <p class="sum-time"></p>
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
<style lang="less" rel="stylesheet/less">
.wap {
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: dimgrey;
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
      right: -75px;
      vertical-align: middle;
      background-color: yellow;
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
        display: inline-block;
        // position: absolute;
        .content-name {
          font-size: 14px;
          margin-top: 10px;
          // position: relative;
          float: left;
        }
      }
    }
  }
}
</style>