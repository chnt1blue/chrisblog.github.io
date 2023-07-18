// webpack.config.js
const path = require("path"); // 导入path模块
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 导入html-webpack-plugin模块

module.exports = {
  // 入口文件
  entry: "./index.tsx",
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/, // 排除 node_modules 目录
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              // Pass options to marked
              // See https://marked.js.org/using_advanced#options
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".md"], // 自动解析确定的扩展
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"), // 模板位置
      filename: "index.html", // 输出后的文件名，路径是 output.path
      title: "Chris.Chen's Blog", // 传给模板的变量
    }),
  ],
  // 出口文件
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"), // 告诉服务器从指定目录中提供静态文件，也即打包后的文件
    },
    port: 8080, // 设置端口
    open: true, // 自动打开浏览器
    hot: true, // 开启热更新
  },
};
