<template>
  <div>
    <Home />
    <!-- <div class="main-cointer version-heart">
      <router-view></router-view>
    </div> -->
    <Footer />
  </div>
</template>
<script>
import Home from "./compoments/Home"
import Footer from "@/compoments/Tail/Tail"
export default {
  name: "App",
  components: {
    Home,
    Footer,
  },
}
</script>
<style lang="less" scoped>
@import "./assets/css/home.css";
</style>
