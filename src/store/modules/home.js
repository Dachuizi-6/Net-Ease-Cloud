import {
  reqHotMusic,
  reqRecommentMusic,
  reqDiskNewest,
  reqToplist,
  reqTopListDetail,
  reqTopArtist,
} from "@/api"
const state = {
  hotMusicList: [],
  recommentMusicList: [],
  newestList: [],
  topList: [],
  topListDetail: [],
  topArtistsList: [],
}
const mutations = {
  // 获取标签列表
  CHANGE_HOT_MUSIC_LIST(state, data) {
    state.hotMusicList = data
  },

  // 获取推荐歌曲
  CHANGE_RECOMMENT_LIST(state, data) {
    state.recommentMusicList = data
  },

  // 获取新碟上架数据
  CHANGE_NEWEST_LIST(state, data) {
    state.newestList = data
  },

  // 获取榜单数据
  CHANGE_TOP_LIST(state, data) {
    state.topList = data
  },

  // 获取榜单详情数据
  CHANGR_TOP_LIST_DETAIL(state, data) {
    state.topListDetail = data
  },

  // 获取歌手数据
  CHANGE_TOP_ARTISTS_LIST(state, data) {
    state.topArtistsList = data
  },
}
const actions = {
  // 获取歌曲推荐标签列表
  async getMusicList({ commit }) {
    const res = await reqHotMusic()
    // console.log(res)
    if (res.code === 200) {
      commit("CHANGE_HOT_MUSIC_LIST", res.tags)
    }
  },

  // 获取歌曲推荐列表
  async getRecommentMusicList({ commit }) {
    const res = await reqRecommentMusic()
    // console.log(res)
    commit("CHANGE_RECOMMENT_LIST", res.result)
  },

  // 获取新碟上架数据
  async getNewestDisk({ commit }) {
    const res = await reqDiskNewest()
    // console.log(res)

    let arr = []
    let smallArr1 = []
    let smallArr2 = []
    let smallArr3 = []
    let obj1 = { id: "213212" }
    let obj2 = { id: "456456" }
    let obj3 = { id: "789798" }
    smallArr1.push(res.albums.slice(0, 4))
    smallArr2.push(res.albums.slice(4, 8))
    smallArr3.push(res.albums.slice(8, 12))

    obj1["item"] = smallArr1
    obj2["item"] = smallArr2
    obj3["item"] = smallArr3

    arr.push(obj1, obj2, obj3)

    console.log(arr)

    commit("CHANGE_NEWEST_LIST", arr)
  },

  // 获取所有榜单数据
  async getTopList({ commit }) {
    const res = await reqToplist()
    // console.log(res)
    let topList = res.list.slice(0, 3)

    topList.forEach(async (item) => {
      const { playlist } = await reqTopListDetail(item.id)
      item["tracks"] = playlist.tracks
    })

    commit("CHANGE_TOP_LIST", topList)
  },

  // 获取榜单详情数据
  async getTopListDetail({ commit }, id) {
    const res = await reqTopListDetail(id)
    console.log(res)
    commit("CHANGR_TOP_LIST_DETAIL", res)
  },

  // 获取热门歌手数据
  async getTopArtists({ commit }) {
    const res = await reqTopArtist()
    console.log(res)
    commit("CHANGE_TOP_ARTISTS_LIST", res.list.artists)
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
