// 引入vue组件
import Vue from 'vue'

// 引入vue-router路由组件
import VueRouter from 'vue-router'

// 引入singer组件
import Mymusic from '../pages/Mymusic/index.vue'
import Singer from '../pages/Singer/index.vue'
import Login from '../pages/Login/index.vue'
import Anchor from '../pages/Anchor/index.vue'

// 声明使用路由
Vue.use(VueRouter)

// 实例化路由并向外暴露
const router = new VueRouter({
  // l路由地址是否带#
  mode: 'history',  // 不带#
  // 注册路由
  routes: [
    {
      path: '/mymusic',
      name: Mymusic,
      component: Mymusic
    },

    {
      path: '/singer',
      name: Singer,
      component: Singer
    },

    {
      path: '/login',
      name: Login,
      component: Login
    },

    {
      path: '/anchor',
      name: Anchor,
      component: Anchor
    }
    // {
    //   path: '/',
    //   component: Mymusic,
    //   children: [
    //     {
    //       path: '/singer',
    //       component: Singer
    //     }
    //   ]
    // }
  ]
})

// 暴露路由器对象
export default router