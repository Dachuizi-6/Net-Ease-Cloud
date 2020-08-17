<template>
  <div>
    <Rank />
  </div>
</template>

<script>
// 引入Rank组件
import Rank from "./pages/Rank/index";
export default {
  name: "App",
  components: {
    Rank,
  },
  //  mounted() {
  //   this.$store.dispatch('reqAllRankList')
  //  }
};
</script>

<style>
@import './assets/home.css';
</style>
