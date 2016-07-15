const koa = require('koa');
const app = module.exports = koa();

// logger for dev
const logger = require('koa-logger');
app.use(logger());

// CORS for dev
const cors = require('koa-cors');
app.use(cors());


/*
const send = require('koa-send');
const serve = require('koa-static');
*/

// db connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notebook_online');

// hot-reload webpack
/*
const webpack = require('webpack');
const webpackConfig = require('./../../webpack.config');
const compiler = webpack(webpackConfig);
const hotMiddleware = require("webpack-hot-middleware")(compiler);
app.use(function*(next) {
  yield hotMiddleware.bind(null, this.request, this.response);
  yield next;
});
*/

// routes
require('./routes/router')(app);

/*
app.use(function* index() {
  console.log('Responded with html');
  yield send(this, __dirname + './../../index.html');
})
*/

app.listen(3001);
console.log('The app is listening on port 3001 (API)');


