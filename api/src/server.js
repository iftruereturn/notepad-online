const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const config = require('./config/config');

// sessions
const session = require('koa-generic-session');

// CORS for dev
const cors = require('koa-cors');
app.use(cors());

app.keys = config.app.keys;
app.use(session({
  key: 'notepadonline.sid'
}));


app.use(bodyParser());


// logger for dev
const logger = require('koa-logger');
app.use(logger());

// db connect
const mongoose = require('mongoose');
mongoose.connect(config.mongo.url);

// auth
const passport = require('koa-passport');
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport, config);

/*app.use(function*(next) {
  if (this.isAuthenticated()) {
    this.session.cookie.maxAge = 60 * 60 * 1000;
    console.log(this.session.passport);
    console.log(this.session);
  }

  yield next;
});*/

app.use(serve(path.resolve('public')));

// routes
require('./routes/router')(app, passport);

app.listen(config.app.port);
console.log('The app is listening on port 3001 (API)');
