'use strict';
var path = require('path');
var express = require('express');
var statics = require('serve-static');
var compression = require('compression');
var app = express();
var pkg = require('../../package.json');

app.use(compression());
app.use(statics(path.join(__dirname, '../../dist'), {maxAge:0}));

app.get('*', function(req, res, next){
  if(!req.accepts('html')) {
    return next();
  }
  return res.sendFile(path.join(__dirname, '../../dist/html/index.html'));
});

app.get('*', function(req, res) {
  res.status(404);

  if(req.accepts('json')){
    return res.json({message:'Resource not found'});
  }

  return res.send('404 Resource not found.');
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';

var server = app.listen(port, ip, function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log(pkg.name + ' running at http://%s:%s', host, port);
});