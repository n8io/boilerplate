module.exports = function(app, options){
  app.use(function(req, res, next){
    var err = new Error('Access Denied');
    err.status = 403;
    next(err);
  });
};