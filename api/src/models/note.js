const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  name: { type: String, default: 'New note' },
  value: { type: String, default: '' },
  updated: { type: Date, default: Date.now },
  tags: { type: Array },
  owner: { type: String, default: 'Anonymous' },
  private: { type: Boolean, default: false }
});

NoteSchema.pre('save', (next) => {
  this.updated = new Date();
  next();
});

module.exports = mongoose.model('Note', NoteSchema);
