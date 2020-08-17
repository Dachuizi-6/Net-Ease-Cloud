import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from './router'
// 引入store对象
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  // 注册路由器对象
  router: router,
  store: store,
}).$mount('#app')
