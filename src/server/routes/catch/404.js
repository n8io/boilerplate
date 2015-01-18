module.exports = function(app, options){
  app.use(function(req, res, next){
    var err = new Error('Resource Not Found');
    err.status = 404;
    err.details = req.originalUrl;
    next(err);
  });
};