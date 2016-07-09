const Router = require('koa-router');
const notesController = require('../controllers/notes')

module.exports = function(app) {
  var router = new Router();

  router.get('/', notesController.showAllNotes)
  router.post('/', notesController.postNote)

  app.use(router.routes());
};