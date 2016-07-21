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


  const login = function*() {

  };


  const logout = function*() {

  };

  return {
    signup,
    login,
    logout
  };
};