const koa = require('koa');
const app = module.exports = koa();

// db connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notebook_online');

// routes
require('./routes/router')(app);

app.listen(3000);
console.log('The app is listening on port 3000');