// 封装请求拦截器和响应拦截器
// 引入
import axios from 'axios'
// 进度条和样式
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import { config } from 'vue/types/umd'
// 设置通用的基础路径和请求时间
const ajax = axios.create({
  baseURL: '/api',
  timeout: 20000
})

// 请求拦截器
ajax.interceptors.request.use(config => {
  // 请求显示进度条
  Nprogress.start()
  // 完了隐藏进度条
  return config
})

// 响应拦截器
ajax.interceptors.response.use(response => {
  // 隐藏进度条
  Nprogress.done()
  // 把数据返回
  return response.data
}, error => {
  // 隐藏进度条
  Nprogress.done()
  alert("请求出错" + error.message || '未知错误')
  // 中断promise
  return Promise.reject(error)
})

// 暴露axios对象
export default ajax
