const User = require('../models/user.js');

module.exports = function(passport) {

  const signup = function*() {
    const { username, password } = this.request.body;

    console.log(this.request.body);

    try {
      let user = new User({ username, password });
      user = yield user.save();
      this.status = 201;
    } catch (err) {
      console.log(err);
      this.status = 404;
    }
  };


  const login = function*() {
    var _this = this;
    yield* passport.authenticate('local', function*(err, user, info) {
      if (err) {
        return this.status = 404; 
      }

      if (user === false) {
        return _this.status = 401;
      }

      console.log('inside passport');

      yield _this.login(user);
      _this.body = { user: user };
    }).call(this);
  };


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