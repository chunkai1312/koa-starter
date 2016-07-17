'use strict';

const path = require('path');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const json = require('koa-json');
const serve = require('koa-static');
const hbs = require('koa-hbs');
const config = require('../config');

module.exports = function (app) {
  app.use(hbs.middleware({
    viewPath: path.join(config.root, 'app', 'views'),
    layoutsPath: path.join(config.root, 'app', 'views', 'layouts'),
    defaultLayout: 'main',
  }));

  app.use(bodyparser());
  app.use(json());
  app.use(logger());

  app.use(serve(path.join(config.root, 'public')));
};
