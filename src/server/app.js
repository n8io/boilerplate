'use strict';
var path = require('path');
var express = require('express');

var isProduction = !((process.env.NODE_ENV||'dev').toLowerCase().indexOf('prod'));

var app = express();

// Load up common utilities
require('./controllers/app/utilities');

// Establish global variables
require('./controllers/app/globals');

// Load up config
require('./controllers/helpers/configuration')();

// Initialize logging
global.logger = require('./controllers/app/logging').getLogger();

// Set high level middleware
require('./controllers/app/middleware')(app);

// CDN helper
app.locals.CDN = require('./controllers/helpers/cdn');

// Define custom routes
require('./routes')(app);

// Xatch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development 500 error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production 500 error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';

var server = app.listen(port, ip, function (){
  var host = server.address().address;
  var port = server.address().port;

  logger.info(pkgjson.name + ' running at http://%s:%s', host, port);
});