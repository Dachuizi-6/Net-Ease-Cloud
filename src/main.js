import Vue from "vue"
import App from "./App.vue"

// 引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper"

// If you use Swiper 6.0.0 or higher
import "swiper/swiper-bundle.css"
Vue.use(VueAwesomeSwiper)

// 引入所有的api接口
import * as API from "./api"

// 引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

// 引入懒加载
import VueLazyload from "vue-lazyload"
import loading from "@/assets/img/timg.gif"
Vue.use(VueLazyload, {
  loading,
})

import router from "./router"
import store from "./store"

// console.log(router)
Vue.use(ElementUI)

Vue.prototype.$API = API

Vue.config.productionTip = false
Vue.prototype.$audioElement = new Audio()

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app")
