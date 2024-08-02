const path = require('path')
const postcssPx2Rem = require('postcss-pxtorem')
 
module.exports = {
  // 配置@符号的
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  style: {
    // 配置postcss-pxtorem
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            postcssPx2Rem({
              rootValue: 75, // 设计稿尺寸/10
              propList: ['*'], // 需要转换的样式属性，默认为 ['*']，即匹配所有属性
              exclude: /node_modules/i // 排除掉node_modules中转换
            })
          ],
        },
      },
    },
  },
}