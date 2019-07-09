const merge = require('webpack-merge')
const baseWebapckConfig = require('./webpack.base')
const config = require('../config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(baseWebapckConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: config.build.assetsPublicPath,
    filename: '[name].[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    }
  },
  devtool: config.dev.devtool
})
