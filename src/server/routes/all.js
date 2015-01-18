module.exports = function(app, options){
  var router = express.Router();

  router.all('*', function(req, res, next){
    next();
  });

  app.use('/', router);
};