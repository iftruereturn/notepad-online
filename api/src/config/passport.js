const LocalStrategy = require('passport-local').Strategy;  
const User = require('../models/user.js');  
const co = require('co');

// Basic function that calls our model static function to
// check if the password we got matches the existing one
const AuthLocalUser = (username, password, done) => {  
  co(function*() {
    // try {
    //   return yield User.matchUser(username, password);
    // } catch (e) {
    //   return null;
    // }
    

    // need done?
    try {
      const user = yield User.findOne({ 'username': username.toLowerCase() }).exec();
      if (!user) throw new Error('User not found');

      if (user.password === password)
        return user;

      throw new Error('Password does not match');

    } catch (e) {
      return null;
    }
  });
};

const serialize = (user, done) => {  
  done(null, user._id);
};

const deserialize = (id, done) => {  
  User.findById(id, done);
};

// Config of passport
module.exports = (passport, config) => {  
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  passport.use('local', new LocalStrategy(AuthLocalUser));
};