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
    
    console.log('inside passport 1');

    yield* passport.authenticate('local', function*(err, user, info) {
      if (err) {
        // _this.body = JSON.stringify(err);
        return _this.status = 404; 
      }

      console.log('inside passport 2');
      console.log(user);

      if (user === false) {
        return _this.status = 401;
      }

      console.log('inside passport 3');

      yield _this.login(user);
      _this.body = { user: user };
    }).call(this);
  };

  /*const login = passport.authenticate('local', function*(err, user, info) {
    if (err) {
      // _this.body = JSON.stringify(err);
      return this.status = 404; 
    }

    console.log('inside passport 2');
    console.log(user);

    if (user === false) {
      return this.status = 401;
    }

    console.log('inside passport 3');

    yield this.login(user);
    this.body = { user: user };
  });*/


  const logout = function*() {
    console.log(this);

    this.logOut();
    // this.clearCookie('notepadonline.sid', {path: '/'});
    // this.session.destroy();
    this.redirect('/');
  };

  const account = function*() {
    let userId;
    let user;

    if (this.isAuthenticated()) {
      userId = this.session.passport.user;
      user = yield User.findById(userId).exec();
      console.log(user.username);
    }

    if (user) {
      this.body = { username: user.username };
      this.status = 201;
    } else {
      this.status = 404;
    }
  };

  return {
    signup,
    login,
    logout,
    account
  };
};