'use strict'

const router = require('koa-router')()
const thing = require('../app/controllers/thing')

module.exports = function (app) {
  router.get('/', function * () { yield this.render('index', { title: 'Koa' }); })
  router.get('/api/things', thing.index)
  router.post('/api/things', thing.create)
  router.get('/api/things/:id', thing.show)
  router.put('/api/things/:id', thing.update)
  router.delete('/api/things/:id', thing.destroy)

  app.use(router.routes())
  app.use(router.allowedMethods())
}
