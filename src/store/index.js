// 引入vue vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 引入modules
import modules from './modules/index'
// 声明使用vuex
Vue.use(Vuex)

// 实例化vuex产生的store对象 并暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

