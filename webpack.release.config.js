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
        drop_console: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }, {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }, {
        test: /\.(jpg)|(gif)|(png)$/,
        loader: 'file'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  postcss: () =>
    [autoprefixer({ browsers: ['last 2 versions'] })]
}

