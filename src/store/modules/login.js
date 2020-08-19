// 引入缓存中的临时凭证
import { getUUID } from '../../utils/storageUtils'
// 引入ajax
import { reqLogin } from '../../api/index'

// 定义状态数据
const state = {
  // 用户信息对象
  userInfo: JSON.parse(localStorage.getItem(user_info_key)) || {},
  // 用户临时凭证id
  userTempId: getUUID()
}

// 直接修改状态数据
const mutations = {
  RECEIVE_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  },
  // 清空用户信息
  RECEIVE_USER_INFO (state) {
    state.userInfo = {}
  }
}

// 间接修改
const actions = {
  // 登录
  async login ({ commit }, { phone, password }) {
    const result = await reqLogin(phone, password)
    if (result.code === 200) {
      const userInfo = result.data
      // 缓存用户的信息--并没有缓存token
      localStorage.setItem('user_info_key', JSON.stringify(userInfo))
      // 提交mutation
      commit('RECEIVE_USER_INFO', userInfo)
    } else {
      throw new Error(result.message || '登录失败')
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