// 二次封装api接口函数
import ajax from './ajax'
// 获取歌手列表
export const reqSingerList = (area) => ajax.get('/artist/list', { area })

// 登陆请求
export const reqLogin = (phone, password) => ajax.post('/login/cellphone', { phone, password })