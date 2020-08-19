<template>
  <div>
    <Home />
    <!-- <div class="main-cointer version-heart">
      <router-view></router-view>
    </div> -->
  </div>
</template>
<script>
import Home from "./compoments/Home"
export default {
  name: "App",
  components: {
    Home,
  },
}
</script>
<style lang="less" scoped>
@import "./assets/css/home.css";
</style>
