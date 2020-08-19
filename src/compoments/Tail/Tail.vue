<template>
  <div class="tail-wap">
    <div class="tail">
      <div class="tail-left">
        <p>
          <a href="//st.music.163.com/official-terms/service" target="_blank">服务条款</a>
          <span class="line">|</span>
          <a
            href="//st.music.163.com/official-terms/privacy"
            target="_blank"
            class="item s-fc4"
          >隐私政策</a>
          <span class="line">|</span>
          <a href="//st.music.163.com/official-terms/children" target="_blank">儿童隐私政策</a>
          <span class="line">|</span>
          <a href="//music.163.com/st/staticdeal/complaints.html" target="_blank">版权投诉指引</a>
          <span class="line">|</span>
          <a
            id="g_feedback"
            href="#"
            class="item s-fc4"
            onclick="nm.x.feedback();return false;"
            hidefocus="true"
          >意见反馈</a>
          <span class="line">|</span>
        </p>
        <p>
          <span class="sep span">网易公司版权所有©1997-2020</span>
          <span class="span">杭州乐读科技有限公司运营：</span>
          <a
            href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
            target="_blank"
            class="alink s-fc3"
          >浙网文[2018]3506-263号</a>
        </p>
        <p>
          <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
          <span class="span">举报邮箱：</span>
          <a class="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
        </p>
        <p>
          <span class="sep span">粤B2-20090191-18</span>
          <a
            href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
            rel="noopener noreferrer"
            target="_blank"
            class="alink s-fc3"
          >工业和信息化部备案管理系统网站</a>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
            rel="noopener noreferrer"
            target="_blank"
            class="alink s-fc3 police-link"
          >
            <span class="police-logo"></span>
            <span class="police-text">浙公网安备 33010902002564号</span>
          </a>
        </p>
      </div>
      <ul class="tail-right">
        <li class="unit">
          <p></p>
          <span>Amped</span>
        </li>
        <li class="unit">
          <p></p>
          <span>用户认证</span>
        </li>
        <li class="unit">
          <p></p>
          <span>独立音乐人</span>
        </li>
        <li class="unit">
          <p></p>
          <span>赞赏</span>
        </li>
        <li class="unit">
          <p></p>
          <span>视频</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tail",
};
</script>
<style lang="less" rel="stylesheet/less">
*{
  margin: 0;
  padding: 0;
}
.tail-wap {
  width: 100%;
  border-top: 1px solid #dadada;
  background-color: #f7f7f7;
  .tail {
    width: 980px;
    margin: 0 auto;
    margin-top: 20px;
    // position: relative;
    overflow: hidden;
    .tail-left {
      float: left;
      width: 500px;
      height: 180px;
      p {
        font-size: 12px;
        a,
        span {
          color: #c2c2c2;
          margin: 0 3px 0 4px;
        }
      }
    }
    .tail-right {
      float: right;
      width: 480px;
      margin-top: 33px;
      .unit {
        float: left;
        width: 60px;
        height: 60px;
        height: 70px;
        margin-left: 24px;
        text-align: center;
        color: #666;
        // background-color: black;
        p {
          width: 50px;
          height: 50px;
          margin: 5px;
        }

        span {
          font-size: 4px;
          color: #c2c2c2;
        }
      }
      .unit:nth-child(1) p {
        background: url("./imgs/foot_enter_new.png") no-repeat;
        background-position: -63px -454.5px;
        background-size: 110px 552px;
      }
      .unit:nth-child(2) p {
        background: url("./imgs/foot_enter_new.png") no-repeat;
        background-position: -63px -99px;
        background-size: 110px 552px;
      }
      .unit:nth-child(3) p {
        background: url("./imgs/foot_enter_new.png") no-repeat;
        background-position: 3px 2px;
        background-size: 110px 552px;
      }
      .unit:nth-child(4) p {
        background: url("./imgs/foot_enter_new.png") no-repeat;
        background-position: -60px -48px;
        background-size: 110px 552px;
      }
      .unit:nth-child(5) p {
        background: url("./imgs/foot_enter_new.png") no-repeat;
        background-position: 0 -99px;
        background-size: 110px 552px;
      }
    }
  }
}
</style>