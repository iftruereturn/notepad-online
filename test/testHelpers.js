const Note = require('../api/src/models/note.js');
var co = require('co');

module.exports.removeAllNotes = function() {
  co(function*() {
    yield Note.remove({}).exec();
  });
};