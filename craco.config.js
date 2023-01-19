const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      // ant 主题定制
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: {'@primary-color': '#1DA57A'},
      //       javascriptEnabled: true,
      //     }
      //   }
      // }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
    }
  }
}
