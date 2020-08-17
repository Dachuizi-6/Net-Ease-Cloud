// 引入request
const express = require('express')

// 生成app对象
const app = express()

// 开启服务
app.listen(80, (err) => {
  if (err) {
    console.log('服务开启失败')
  } else {
    console.log('服务开启成功，80号为你服务')
  }
})