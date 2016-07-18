const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // TODO: Add some security
  // email: { type: String } // Maybe later
  signupDate: { type: Date, default: Date.now() },
  lastLoginDate: { type: Date },
  ownedNotes: { type: Array }
});

UserSchema.pre('save', (next) => {
  this.signupDate = Date.now();
  next();
});

module.exports = mongoose.model('User', UserSchema);
