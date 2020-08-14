<template>
  <div>
    <Home />
  </div>
</template>
<script>
import Home from "./views/Home"
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
