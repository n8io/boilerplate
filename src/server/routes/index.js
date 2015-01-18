module.exports = function(app, options) {
  require('./all')(app, options);
  require('./home')(app, options);
};