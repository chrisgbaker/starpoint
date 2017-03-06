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
      './src/index.tsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, `dist/starpoint-${version}`)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: path.resolve('./src'),
    alias: {
      'app.js': 'app.debug.js', // Includes devtools
      'theme.scss': 'styles/theme.scss'
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    modulesDirectories: ['node_modules']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        },
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
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  postcss: () =>
    [autoprefixer({ browsers: ['last 2 versions'] })]
}
