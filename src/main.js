import Vue from "vue";
import App from "./App.vue";
// 引入store对象
// import store from "./store";
// 引入了element ui 组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
import request from "../src/api/ajax";

Vue.prototype.request = request;
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
  // store,
}).$mount("#app");
