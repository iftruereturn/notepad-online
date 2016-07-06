const koa = require('koa');
const route = require('koa-route');
const app = module.exports = koa();

const parse = require('co-body');

// db connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notebook_online');

const Note = require('./models/note.js');

app.use(route.get('/', function*() {
  const allNotes = yield Note.find({}).exec();

  this.set({ 'Content-Type': 'application/json' });
  this.body = JSON.stringify(allNotes);
}));

app.use(route.post('/', function*() {
  const note = yield parse(this);
  const newNote = new Note(note);

  yield newNote.save();

  this.redirect('/');
}));


app.listen(3000);
console.log('The app is listening on port 3000');