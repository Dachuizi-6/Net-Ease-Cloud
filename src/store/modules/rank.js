// import { reqAllRankList } from "@/api";

// const state = {
//   // 所有榜单数据
//   allRankList: [],
// };

// const mutations = {
//   RECEIVE_RANK_LIST(state, allRankList) {
//     state.allRankList = allRankList;
//   },
// };

// const actions = {
//   // 获取所有榜单信息数据数组
//   async getAllRankList({ commit }) {
//     // 发送异步请求获取所有榜单信息数据数组
//     const result = await reqAllRankList();
//     if (result.code === 200) {
//       const allRankList = result.data;
//       commit("RECEIVE_RANK_LIST", allRankList);
//     }
//   },
// };

// const getters = {};

// export default {
//   state,
//   mutations,
//   actions,
//   getters,
// };
