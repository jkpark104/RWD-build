const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: './js/index.js',
    helper: './js/helper.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js',
    chunkFilename: "[id].bundle.js"
    // clean: true
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ]
    }]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: 'static'
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}