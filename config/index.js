'use strict'

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsPublicPath: '/',
    // Template for index.html
    index: 'index.html',
    devtool: 'cheap-module-eval-source-map'
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/'),
    assetsPublicPath: './dist/',
    productionSourceMap: true,
    devtool: '#source-map',
    bundleAnalyzerReport: false
  }
}
