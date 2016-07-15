const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  name: { type: String, default: 'New note' },
  value: { type: String, default: '' },
  saved: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() },
  tags: { type: Array },
  owner: { type: String, default: 'Anonymous' },
  private: { type: Boolean, default: false }
});

NoteSchema.pre('save', (next) => {
  this.saved = Date.now();
  next();
});

// NoteSchema.pre('findOneAndUpdate', (next) => {
//   // this.updated = new Date();
//   // this.findOneAndUpdate({}, { $set: { updated: Date.now() } });
//   next();
// });

module.exports = mongoose.model('Note', NoteSchema);
