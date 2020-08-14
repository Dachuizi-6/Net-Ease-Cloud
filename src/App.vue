<template>
  <div>
    <!-- 使用组件 -->
    <Mymusic />
  </div>
</template>

<script>
// 引入组件
import Mymusic from './components/Mymusic/index'

export default {
  name: 'App',

  // 注册组件
  components: {
    Mymusic
  }
}
</script>

<style land="less" rel="stylesheet/less" scoped>
</style>
