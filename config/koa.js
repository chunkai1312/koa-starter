'use strict';

const path = require('path');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const json = require('koa-json');
const serve = require('koa-static');
const render = require('koa-ejs');
const config = require('../config');

module.exports = function (app) {
  render(app, {
    root: path.join(config.root, 'app', 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true,
  });

  app.use(bodyparser());
  app.use(json());
  app.use(logger());

  app.use(serve(path.join(config.root, 'public')));
};
