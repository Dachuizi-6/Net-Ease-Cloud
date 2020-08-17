import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from '../src/router'
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
	render: (h) => h(App),
	router
}).$mount('#app');
