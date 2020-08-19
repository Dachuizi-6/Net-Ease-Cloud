import Vue from "vue"

import VueRouter from "vue-router"
import Container from "@/views/Container"

import routes from "./routes"
console.log(routes)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    ...routes,
    {
      path: "/",
      component: Container,
      // props(route) {
      //   console.log(route)
      //   return {
      //     ...route.params,
      //     nav: true,
      //   }
      // },
    },
    {
      path: "/dismusic",
      component: Container,
    },
  ],
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})
export default router
