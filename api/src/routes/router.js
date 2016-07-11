const Router = require('koa-router');
const notesController = require('../controllers/notes');

module.exports = function(app) {
  var router = new Router();

  // Notes
  router.get('/api/notes/:id', notesController.getNote);
  router.get('/api/notes', notesController.getAllNotes);
  router.put('/api/notes/:id', notesController.updateNote);
  router.del('/api/notes/:id', notesController.deleteNote);
  router.post('/api/notes', notesController.postNote);

  app.use(router.routes());
};