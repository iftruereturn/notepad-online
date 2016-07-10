const Router = require('koa-router');
const notesController = require('../controllers/notes');

module.exports = function(app) {
  var router = new Router();

  // Notes
  router.get('/notes/:id', notesController.getNote);
  router.get('/notes', notesController.getAllNotes);
  router.put('/notes/:id', notesController.updateNote);
  router.del('/notes/:id', notesController.deleteNote);
  router.post('/notes', notesController.postNote);

  app.use(router.routes());
};