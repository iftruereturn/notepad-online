const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');

const config = require('./config/config');

// sessions
const convert = require('koa-convert');
const session = require('koa-generic-session');
// keys need to be placed in config file
app.keys = config.app.keys;
app.use(convert(session({
  key: 'notepadonline.sid',
})));

app.use(bodyParser());

// logger for dev
const logger = require('koa-logger');
app.use(logger());

// CORS for dev
const cors = require('koa-cors');
app.use(cors());

// db connect
const mongoose = require('mongoose');
mongoose.connect(config.mongo.url);

// auth
const passport = require('koa-passport')
app.use(passport.initialize())
app.use(passport.session())

// routes
require('./routes/router')(app, passport);

app.listen(config.app.port);
console.log('The app is listening on port 3001 (API)');


