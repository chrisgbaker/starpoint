const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const buildType = process.env.NODE_ENV === 'production' ? 'release' : 'debug'
const config = require(`../webpack.${buildType}.config.js`)
const compiler = webpack(config)
const app = express()
const isDev = buildType === 'debug'
const port = isDev ? 3000 : process.env.PORT

if (isDev) {
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })
  app.use(middleware)
  app.use(webpackHotMiddleware(compiler, { log: console.log }))
  app.get('*', function response (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
}
else {
  // don't know if i'll ever get here...
  // app.use(express.static(path.join(__dirname, '/dist')))
  // app.get('*', function response (req, res) {
  //  res.sendFile(path.join(__dirname, '../dist/index.html'))
  // })
}

app.listen(port, 'localhost', function onStart (err) {
  if (err) {
    console.log(err)
  }
  console.info(`==> Starpoint listening on port ${port}s. Open up http://0.0.0.0:${port}/ in your browser.`)
})
