const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');

// sessions
const convert = require('koa-convert');
const session = require('koa-generic-session');
// keys needs to be in config file
app.keys = ['your-session-secret'];
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
mongoose.connect('mongodb://localhost/notebook_online');

// auth
const passport = require('koa-passport')
app.use(passport.initialize())
app.use(passport.session())

// routes
require('./routes/router')(app);

app.listen(3001);
console.log('The app is listening on port 3001 (API)');


