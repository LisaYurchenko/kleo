'use strict';

var content = require('../controllers/content.server.controller');

module.exports = function (app) {

  app.route('/api/files')
    .get(content.list)
    .delete(content.delete)
    .post(content.write);

  app.route('/api/files/:id')
    .get(content.get);

  app.route('/api/content/:id')
    .get(content.read);

  app.route('/api/users/:id/files')
    .get(content.getFilesForUser);
};
