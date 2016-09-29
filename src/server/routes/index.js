const koaRouter = require('koa-router')
const views = require('co-views')
const path = require('path')

let router = koaRouter()
let render = views(path.join(__dirname, '../views'))
let isDev = process.env.NODE_ENV === 'development'

router.get('/', function * (next) {
  this.body = yield render('layout.jade', {
    dev: isDev,
    mainJs: isDev ? 'main.js' : 'main.min.js'
  })
})

router.get('/api/v1/users', function * (next) {
  this.body = [{
    id: '1',
    username: 'user 1'
  }, {
    id: '2',
    username: 'user 2'
  }, {
    id: '3',
    username: 'user 3'
  }, {
    id: '4',
    username: 'user 4'
  }, {
    id: '5',
    username: 'user 5'
  }]
})

module.exports = router
