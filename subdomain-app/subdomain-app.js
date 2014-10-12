// subdomain handler server app
var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('Hello from ' + req.headers.host.split(':')[0]);
});
module.exports = app;