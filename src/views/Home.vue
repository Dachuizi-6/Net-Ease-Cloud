<template>
  <div class="all-wrap">
    <Header />
    <div class="banner-container">
      <div class="main-banner header-version-heart">
        <div class="version-heart">
          <div class="banner-img">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide
                ><img src="../assets/img/1.jpg" alt=""
              /></swiper-slide>
              <swiper-slide
                ><img src="../assets/img/1.jpg" alt=""
              /></swiper-slide>
              <swiper-slide
                ><img src="../assets/img/1.jpg" alt=""
              /></swiper-slide>
              <swiper-slide
                ><img src="../assets/img/1.jpg" alt=""
              /></swiper-slide>
              <swiper-slide
                ><img src="../assets/img/1.jpg" alt=""
              /></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="client-download"></div>
      </div>
    </div>
    <div class="main-cointer version-heart">
      <Container />
    </div>
  </div>
</template>
<script>
import Container from "../components/Container"
import Header from "../components/Header"
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  components: {
    Container,
    Header,
  },
}
</script>
<style lang="less" scoped>
.all-wrap {
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
      }
    }
  }
}
</style>
