// 引入接口函数
import { reqSingerList } from '../../api/index'

// 包含了多个状态数据的对象
const state = {
  // 歌手列表
  singerLists: []
}

// 直接修改状态数据的方法的对象
const mutations = {
  RECEIVE_CATEGORY_LIST (state, singerLists) {
    state.singerLists = singerLists
  }
}


// 包含多个间接修改状态数据的方法的对象
const actions = {
  // 获取歌手数据
  async getSingerList ({ commit }, area) {
    // 发送异步请求获取数据
    const result = await reqSingerList(area)
    // console.log(result)
    // 判断
    if (result.code === 200) {
      const singerLists = result
      // console.log(singerLists)
      // 提交mutation
      commit('RECEIVE_CATEGORY_LIST', singerLists)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}