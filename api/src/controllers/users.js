const User = require('../models/user.js');


module.exports = function(passport) {

  const signup = function*() {
    var User = require('mongoose').model('User');
    try {
      var user = new User({ username: this.params.username, password: this.params.password });
      user = yield user.save();
      this.status = 201;
    } catch (err) {
      this.status = 404;
    }
  };


  const login = passport.authenticate('local', {
    successRedirect: '/profile', // ?
    failureRedirect: '/'
  });


  const logout = function*() {
    this.logout();
    this.redirect('/');
  };

  return {
    signup,
    login,
    logout
  };
};