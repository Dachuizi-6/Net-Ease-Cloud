<template>
  <div id="app">
    <Header />
    <Friend />
    <Tail />
    <Musicplayer />
  </div>
</template>

<script>
import "../src/css/home.css";
import Friend from "./components/Friend/";
import Header from "./components/Header/Header";
import Musicplayer from "./components/Musicplayer/Musicplayer";
import Tail from "./components/Tail/Tail";
export default {
  name: "App",
  components: {
    Friend,
    Musicplayer,
    Header,
    Tail
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
.header-version-heart {
  width: 100%;
  margin: 0 auto;
}
</style>
