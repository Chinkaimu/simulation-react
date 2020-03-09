const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  // loaders: allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to dependency graph.
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  // plugin:
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: '管理输出',
    //   filename: './index.html'
    // }),
    // new ManifestPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],
  // webpack 可以监听文件变化，当它们修改后会重新编译。
  watch: true,
  devServer: {
    compress: true,
    port: 9000
  },
  devtool: 'cheap-module-eval-source-map'
}
