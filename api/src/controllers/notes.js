const parse = require('co-body');
const Note = require('../models/note.js');


exports.getNote = function*() {
  const id = this.params.id;

  let note;
  try {
    note = yield Note.findById(id).exec();
  } catch (e) {
    return this.status = 404;
  }

  if (!note) {
    this.status = 404;
  } else {
    this.set({ 'Content-Type': 'application/json' });
    this.body = JSON.stringify(note);
    this.status = 200;
  }
};


exports.getAllNotes = function*() {
  const allNotes = yield Note.find({}).exec();

  this.set({ 'Content-Type': 'application/json' });
  this.body = JSON.stringify(allNotes);
  this.status = 200;
};


exports.postNote = function*() {
  const note = yield parse(this);
  const newNote = new Note(note);
  let savedNote;
  try {
    savedNote = yield newNote.save();
  } catch (e) {
    return this.status = 404;
  }

  this.set('location', '/api/notes/' + savedNote._id);
  this.status = 201;
};


exports.updateNote = function*() {
  const id = this.params.id;

  const update = yield parse(this);

  try {
    yield Note.findByIdAndUpdate(id, update).exec();
  } catch (e) {
    return this.status = 404;
  }

  this.status = 200;
};


exports.deleteNote = function*() {
  const id = this.params.id;

  try {
    yield Note.findByIdAndRemove(id).exec();
  } catch (e) {
    return this.status = 404;
  }

  this.status = 200;
};
