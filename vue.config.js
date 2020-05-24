const meta = require('./src/info/meta')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src')
          }
        },
        plugins: [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
            minRatio: 0.8 // 压缩比
          })
        ]
      }
    } else {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src')
          }
        },
      }
    }
  },

  devServer: {
    port: 3000, // CHANGE YOUR PORT HERE!
    https: false,
    disableHostCheck: true,
  },

  chainWebpack: config => {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    config.module
      .rule('@yzfe/vue-svgicon-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg')) // 处理svg目录
      .end()
      .use('@yzfe/vue-svgicon-loader')
      .loader('@yzfe/vue-svgicon-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.plugin('html').tap(args => {
      args[0].title = meta.info.title
      args[0].metaTitle = meta.info.title
      args[0].ogMetaTitle = meta.info.title
      args[0].metaDescription = meta.info.description
      args[0].ogMetaDescription = meta.info.description
      args[0].metaKeywords = meta.info.keywords
      args[0].ogMetaType = 'website'

      return args
    })
  }
}
