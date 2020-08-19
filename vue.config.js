module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", // 重置为空
        },
      },
    },
  },
}
