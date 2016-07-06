var koa = require('koa');
var route = require('koa-route');
var app = module.exports = koa();

app.use(route.get('/', function*() {
  this.body = 'Hello World!';
}));

app.listen(3000);
console.log('The app is listening on port 3000');