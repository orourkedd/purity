const koaRouter = require('koa-router')
const views = require('co-views')
const path = require('path')

let router = koaRouter()
let render = views(path.join(__dirname, '../views'))
let isDev = process.env.NODE_ENV === 'development'

router.get('/', function *(next) {
  this.body = yield render('layout.jade', {
    dev: isDev,
    mainJs: isDev ? 'main.js' : 'main.min.js'
  })
})

module.exports = router
