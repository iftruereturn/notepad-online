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
      console.log('inside auth function');
      console.log(username);
      console.log(password);

      const user = yield User.findOne({ 'username': username.toLowerCase() }).exec();
      if (!user) return done(null, false);

      if (user.password === password)
        return done(null, user);

      throw new Error('Password does not match');

    } catch (e) {
      return done(e);
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
  passport.use(new LocalStrategy(AuthLocalUser));
};