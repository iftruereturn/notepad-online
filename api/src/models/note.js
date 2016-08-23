const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  _id: { type: String, required: true, index: true, unique: true, 
    default() { 
      const b64 = new Buffer(new mongoose.mongo.ObjectID().toString(), 'hex')
        .toString('base64')
        .replace('+', '-')
        .replace('/', '*'); 
      return b64; 
    } 
  },

  name: { type: String, default: 'New note' },
  value: { type: String, default: '' },
  saved: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() },
  tags: { type: Array },
  owner: { type: String, default: 'Anonymous' },
  isSecret: { type: Boolean, default: false }
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
