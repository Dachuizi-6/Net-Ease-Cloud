// 引入api接口发送请求获取数据
import { reqDj, reqProgram } from "@/api/index"
// 定义状态数据
const state = {
  djList: [],
  programList: [],
  // programTopList: [],
  // djMusicList: []
}

// 定义直接修改状态数据的方法的对象
const mutations = {
  // 电台列表
  RECEIVE_DJ_LIST(state, djList) {
    state.djList = djList
  },
  // 推荐节目
  RECEIVE_PROGRAM_LIST(state, programList) {
    state.programList = programList
  },
  // 节目排行榜
  // RECEIVE_PROGRAMTOP_LIST(state,programTopList){
  //   state.programTopList=programTopList
  // },
  // 音乐电台
  // RECEIVE_DJMUSIC_LIST(state,djMusicList){
  //   state.djMusicList=djMusicList
  // }
}

// 定义间接修改状态数据的方法的对象
const actions = {
  // 获取电台列表数据
  async getDjList({ commit }) {
    // 发送api请求
    const result = await reqDj()
    if (result.code === 200) {
      // 赋值到状态数据
      const djList = result
      // 提交mutations
      commit("RECEIVE_DJ_LIST", djList)
    }
  },

  // 推荐节目
  async getProgramList({ commit }) {
    // 发送api请求
    const result = await reqProgram()
    if (result.code === 200) {
      // 赋值到状态数据
      const programList = result
      // 提交mutations
      commit("RECEIVE_PROGRAM_LIST", programList)
    }
  },

  // 节目排行榜
  // async getProgramTopList ({ commit }) {
  //   // 发送api请求
  //   const result = await reqProgramTopList()
  //   if (result.code === 200) {
  //     // 赋值到状态数据
  //     const programTopList = result
  //     // 提交mutations
  //     commit('RECEIVE_PROGRAMTOP_LIST', programTopList)
  //   }
  // },

  // 音乐电台
  // async getDjMusicList ({ commit }) {
  //   // 发送api请求
  //   const result = await reqDjMusic()
  //   if (result.code === 200) {
  //     // 赋值到状态数据
  //     const djMusicList = result
  //     // 提交mutations
  //     commit('RECEIVE_DJMUSIC_LIST', djMusicList)
  //   }
  // },
}

// getters
const getters = {}

// 暴露
export default {
  state,
  mutations,
  actions,
  getters,
}
