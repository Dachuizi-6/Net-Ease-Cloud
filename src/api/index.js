import ajax from "./ajax"
// import axios from "axios"
// export const reqBanners = () => axios.get(`/banner`)
// 获取轮播图数据
export const reqBanners = () => ajax.get(`/banner`)

// 获取热门音乐标签列表 ---热门推荐标签
export const reqHotMusic = () => ajax.get(`/playlist/hot`)

// 获取热门推荐歌单---推荐歌单
export const reqRecommentMusic = () => ajax.get(`/personalized`)

// 调用此接口 ，获取云音乐首页新碟上架数据
export const reqDiskNewest = () => ajax.get(`/album/newest`)

// 获取榜单数据
export const reqToplist = () => ajax.get(`/toplist`)

// /top/list?id=19723756
// 获取榜单详情数据
export const reqTopListDetail = (id) => ajax.get(`/top/list?id=${id}`)

//获取歌手数据
export const reqTopArtist = () => ajax.get(`/toplist/artist`)

// 获取音乐url
export const reqMusicUrl = (id) => ajax.get(`/song/url?id=${id}`)

// 获取歌词
export const reqMusicWords = (id) => ajax.get(`/lyric?id=${id}`)
