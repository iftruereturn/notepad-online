const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const config = require('./config/config');

// sessions
const session = require('koa-generic-session');

if (process.env.NODE_ENV !== 'production') {
  // CORS for dev
  const cors = require('koa-cors');
  app.use(cors());

  // logger for dev
  const logger = require('koa-logger');
  app.use(logger());
}


app.keys = config.app.keys;
app.use(session({
  key: 'notepadonline.sid'
}));

app.use(bodyParser());

// db connect
const mongoose = require('mongoose');
const dburl = process.env.PROD_MONGODB || config.mongo.url;
mongoose.connect(dburl);

// auth
const passport = require('koa-passport');
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport, config);

app.use(serve(path.resolve('public')));

// routes
require('./routes/router')(app, passport);

const port = process.env.PORT || config.app.port;
app.listen(port);
console.log('The app is listening on port ' + port + ' (API)');
