module.exports = {
  lintOnSave: false, // 关闭eslint语法检查
  // lintOnSave:'warning', // 只是输出提示的警告信息
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/", // 目标位置
        changeOrigin: true, // 是否跨域
        // 把/api开头的字符串路径重新的干掉
        pathRewrite: {
          "^/api": "", // 重置为空
        },
      },
    },
  },
};
