<template>
  <div id="app">
    <Friend />
  </div>
</template>

<script>
import "../src/css/home.css";
import Friend from "./components/Friend/Friend";
export default {
  name: "App",
  components: {
    Friend,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
