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

UserSchema.methods.comparePassword = function*(candidatePassword) {  
  return candidatePassword === this.password;
};

UserSchema.statics.matchUser = function*(username, password) {  
  const user = yield this.findOne({ 'username': username.toLowerCase() }).exec();
  if (!user) throw new Error('User not found');

  if (yield user.comparePassword(password))
    return user;

  throw new Error('Password does not match');
};

module.exports = mongoose.model('User', UserSchema);
