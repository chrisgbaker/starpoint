'use strict'

const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')
const version = packageJson.version
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    starpoint: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      'babel-polyfill', // Polyfill to create ES6 browser env
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, `dist/starpoint-${version}`)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin(
      {
        options: {
          postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
        }
      })
  ],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    alias: {
      'app.js': 'app.debug.js', // Includes devtools
      'theme.scss': 'styles/theme.scss'
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.jsx', '.js']
  },
  devtool: '#source-maps',
  module: {
    rules: [
      {
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(jpg)|(gif)|(png)$/,
        loader: 'file-loader'
      }
    ]
  }
}
