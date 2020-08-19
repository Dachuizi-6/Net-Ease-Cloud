// 二次封装api接口函数
import ajax from './ajax'
// 获取歌手列表
export const reqSingerList = (area) => ajax.get('/artist/list', { area })

// 登陆请求
export const reqLogin = (phone, password) => ajax.post('/login/cellphone', { phone, password })

// 电台列表
export const reqDj = () => ajax.get('/dj/catelist')

// 音乐电台
export const reqDjMusic = () => ajax.get('/dj/recommend')

// 获取推荐节目信息
export const reqProgram = () => ajax.get('/program/recommend')

// 获取推荐节目信息
export const reqProgramTopList = () => ajax.get('/dj/program/toplist')

// 获取用户信息
export const reqUserInfo = (uid) => ajax.post('/user/detail', { uid })

