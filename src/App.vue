<template>
  <div id="app">
    <Header />
    <!-- <Friend /> -->
    <div>
      <router-view></router-view>
    </div>
    <Tail />
    <Musicplayer />
  </div>
</template>

<script>
import "./assets/css/home.css";
// import Friend from "./components/Friend/";
import Header from "./components/Header";
import Musicplayer from "./components/Musicplayer";
import Tail from "./components/Tail/Tail";
// import liong from "./components/liong";
export default {
  name: "App",
  components: {
    // Friend,
    Musicplayer,
    Header,
    Tail,
    // liong
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
