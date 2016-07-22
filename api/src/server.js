const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

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

// logger for dev
const logger = require('koa-logger');
app.use(logger());

// db connect
const mongoose = require('mongoose');
mongoose.connect(config.mongo.url);

// auth
const passport = require('koa-passport');
require('./config/passport')(passport, config);



app.use(passport.initialize());
app.use(passport.session());


// routes
require('./routes/router')(app, passport);

app.listen(config.app.port);
console.log('The app is listening on port 3001 (API)');
