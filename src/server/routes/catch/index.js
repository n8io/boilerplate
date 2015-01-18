module.exports = function(app, options) {
  // Uncomment if you are authorizing resources
  // require('./403')(app, options); // perform auth checks
  require('./404')(app, options);
  require('./500')(app, options);
};