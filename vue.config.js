// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // 选项
//   //  基本路径
//   publicPath: "./",
//   //  构建时的输出目录
//   outputDir: "dist",
//   //  放置静态资源的目录
//   assetsDir: "static",
//   //  html 的输出路径
//   indexPath: "index.html",
//   //文件名哈希
//   filenameHashing: true,
//   lintOnSave: false,
//   //  是否使用带有浏览器内编译器的完整构建版本
//   runtimeCompiler: false,
//   //  babel-loader 默认会跳过 node_modules 依赖。

//   module: {
//     rules: [
//       // ... 其他规则
//       {
//         test: /\.scss$/,
//         use: [
//           // 将 JS 字符串生成为 style 节点
//           'style-loader',
//           // 将 CSS 转化成 CommonJS 模块
//           'css-loader',
//           // 将 Sass 编译成 CSS
//           'sass-loader',
//         ],
//       },
//     ],
//   },
// })


const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // 选项
  //  基本路径
  publicPath: "./",
  //  构建时的输出目录
  outputDir: "dist",
  //  放置静态资源的目录
  assetsDir: "static",
  //  html 的输出路径
  indexPath: "index.html",
  //文件名哈希
  filenameHashing: true,
  lintOnSave: false,
  //  是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  //  自定义webpack配置
  configureWebpack: {
    module: {
      rules: [
        // ... 其他规则
        {
          test: /\.scss$/,
          use: [
            // 将 JS 字符串生成为 style 节点
            'style-loader',
            // 将 CSS 转化成 CommonJS 模块
            'css-loader',
            // 将 Sass 编译成 CSS
            'sass-loader',
          ],
        },
      ],
    },
  },
})