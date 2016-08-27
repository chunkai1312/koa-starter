'use strict'

const koa = require('koa')
const onerror = require('koa-onerror')
const config = require('./config')
const logger = require('./config/logger')

const app = koa()
onerror(app)

require('./config/mongoose')()
require('./config/koa')(app)
require('./config/routes')(app)

app.listen(config.port, () => {
  console.log('Koa server listening on %d, in %s mode', config.port, app.env)
})

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
  if (app.env === 'production') logger.error(err, ctx)
})

module.exports = app
