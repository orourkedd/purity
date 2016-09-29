const koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const compress = require('koa-compress')
const bodyParser = require('koa-bodyparser')
const favicon = require('koa-favicon')
const cors = require('koa-cors')

function init (port) {
  let app = koa()

  app.use(cors())
  app.use(compress())
  app.use(bodyParser())
  app.use(serve(path.join(__dirname, '../static')))
  app.use(serve(path.join(__dirname, '../../built-assets')))
  app.use(favicon(path.join(__dirname, '../static/images/favicon.ico')))

  let router = require('./routes')

  app
    .use(router.routes())
    .use(router.allowedMethods())

  app.listen(port, function () {
    console.log('Listening on port', port)
  })

  return app
}

module.exports = {
  init
}
