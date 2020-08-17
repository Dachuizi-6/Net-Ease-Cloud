<template>
  <div>
    <!-- 使用组件 -->
    <Header />
    <div>
      <router-view></router-view>
    </div>
    <Tail />
  </div>
</template>

<script>
// 引入组件
import Header from './components/Header/index'
import Tail from "./components/Tail/Tail";

export default {
  name: 'App',

  // 注册组件
  components: {
    Header,
    Tail
  },
  // 
  // async mounted () {
  //   
  // }
}
</script>

<style land="less" rel="stylesheet/less" scoped>
@import './reset/home.css';
@import './reset/iconfont/iconfont.css';
</style>
