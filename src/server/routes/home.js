module.exports = function home(app, options){
  var router = express.Router();

  router.get('/', function(req, res, next){
    var options = options || {};
    return res.render('index', {});
  });

  app.use('/', router);
};