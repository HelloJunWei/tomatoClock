// const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebapckConfig = require('./webpack.base')
const config = require('../config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebapckConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: true
    })
  ],
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    publicPath: config.dev.assetsPublicPath
  },
  devtool: config.dev.devtool
})
