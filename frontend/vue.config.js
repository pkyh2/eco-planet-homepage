const { defineConfig } = require('@vue/cli-service')
const target = 'http://175.45.194.222:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true
      }
    }
  }
})
