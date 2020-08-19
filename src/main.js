import Vue from "vue"
import App from "./App.vue"

// 引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper"
// import "swiper/css/swiper.css"
import "@/assets/css/swiper.css"

// 引入所有的api接口
import * as API from "./api"

// 引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import router from "./router"
import store from "./store"

// console.log(router)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$API = API

Vue.config.productionTip = false
Vue.prototype.$audioElement = new Audio()

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app")
