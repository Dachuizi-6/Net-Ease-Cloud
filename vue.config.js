module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
}
