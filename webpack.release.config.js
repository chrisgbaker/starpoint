'use strict'

const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')
const version = packageJson.version
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    starpoint: [
      'babel-polyfill',
      './src/index.tsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, `dist/starpoint-${version}`)
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_debugger: true,
        drop_console: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
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
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: false,
  module: {
    rules: [
      {
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }, {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }, {
            loader: 'ts-loader'
          }
        ]
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
