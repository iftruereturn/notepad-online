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
  const query = this.request.query;
  console.log(query);
  const tagsQuery = query.tags;

  let allNotes;

  if (typeof tagsQuery === 'string') {
    allNotes = yield Note.find({ tags: tagsQuery }).exec();
  } else if (tagsQuery && tagsQuery.length > 2) {
    allNotes = yield Note.find({ tags: { "$in" : tagsQuery} }).exec();
  } else {
    allNotes = yield Note.find({}).exec();
  }

  this.set({ 'Content-Type': 'application/json' });
  this.body = JSON.stringify(allNotes);
  this.status = 200;
};


exports.postNote = function*() {
  const note = yield parse(this);

  // parsing tags (if needed)
  if (typeof note.tags === 'string') {
    let cleanTagsArray = parseTags(note.tags);
    console.log(cleanTagsArray);
    note.tags = cleanTagsArray;
  }

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
  update.updated = Date.now();

  // parsing tags (if needed)
  if (typeof update.tags === 'string') {
    let cleanTagsArray = parseTags(update.tags);
    console.log(cleanTagsArray);
    update.tags = cleanTagsArray;
  }


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

const parseTags = (tagsArray) => {
  return tagsArray.split(',')
           .map( el => el.trim() )
           .filter( el => el );
};
