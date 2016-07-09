const parse = require('co-body');
const Note = require('../models/note.js');

exports.showAllNotes = function*() {
  const allNotes = yield Note.find({}).exec();

  this.set({ 'Content-Type': 'application/json' });
  this.body = JSON.stringify(allNotes);
};

exports.postNote = function*() {
  const note = yield parse(this);

  const newNote = new Note(note);
  yield newNote.save();

  this.redirect('/');
};