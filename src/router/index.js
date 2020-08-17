import Vue from 'vue'
import VueRouter from 'vue-router'
import Friend from '../pages/Friend'
import Liong from '../pages/liong'
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  router:[
    {
      path:'/src/pages/Friend',
      component:Friend
    },
    {
      path:'/src/pages/liong',
      component:Liong
    }
  ]
})