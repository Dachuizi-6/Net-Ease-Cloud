import Vue from "vue"
import App from "./App.vue"

import VueAwesomeSwiper from "vue-awesome-swiper"
// import "swiper/css/swiper.css"
import "swiper/swiper-bundle.css"

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
