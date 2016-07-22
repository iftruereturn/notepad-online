const Router = require('koa-router');
const notesControllerInit = require('../controllers/notes');
const usersControllerInit = require('../controllers/users');

module.exports = function(app, passport) {
  const router = new Router();

  const notesController = notesControllerInit(passport);
  const usersController = usersControllerInit(passport);

  // Notes
  router.get('/api/notes/:id', notesController.getNote);
  router.get('/api/notes', notesController.getAllNotes);
  router.put('/api/notes/:id', notesController.updateNote);
  router.del('/api/notes/:id', notesController.deleteNote);
  router.post('/api/notes', notesController.postNote);

  // User
  router.post('/api/signup', usersController.signup);
  router.post('/api/login', usersController.login);
  router.get('/api/logout',  usersController.logout);

  app.use(router.routes());
};