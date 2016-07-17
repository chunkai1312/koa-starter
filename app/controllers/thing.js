'use strict';

const Thing = require('../models/thing');

module.exports = {

  /**
   * Responds to requests to GET /api/things
   */
  * index() {
    const things = yield Thing.find();
    this.status = 200;
    this.body = things;
  },

  /**
   * Responds to requests to POST /api/things
   */
  * create() {
    const thing = yield Thing.create(this.request.body);
    this.status = 201;
    this.body = thing;
  },

  /**
   * Responds to requests to GET /api/things/:id
   */
  * show() {
    const thing = yield Thing.findById(this.params.id);
    if (!thing) throw this.throw(404);
    this.status = 200;
    this.body = thing;
  },

  /**
   * Responds to requests to PUT /api/things/:id
   */
  * update() {
    const thing = yield Thing.findByIdAndUpdate(this.params.id, this.request.body, { new: true });
    if (!thing) throw this.throw(404);
    this.status = 200;
    this.body = thing;
  },

  /**
   * Responds to requests to DELETE /api/things/:id
   */
  * destroy() {
    const thing = yield Thing.findByIdAndRemove(this.params.id);
    if (!thing) throw this.throw(404);
    this.status = 204;
  },

};
