// app server app
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello from main app!');
});

module.exports = app;