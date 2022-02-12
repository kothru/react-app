'use strict'
const { resolve } = require('path')
/** @type import('webpack').Configuration */
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|jsx)$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}