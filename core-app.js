var vhost = require('vhost');

var topDomainApp = require('./topdomain-app/topdomain-app.js');
var subDomainApp = require('./subdomain-app/subdomain-app.js');

// Vhost app
var express = require('express');
var app = express();
app.use(vhost('*.localhost', subDomainApp)); // Serves all subdomains
app.use(vhost('localhost', topDomainApp)); // Serves top level domain
app.listen(3000);
console.log('Express app started on port 3000');