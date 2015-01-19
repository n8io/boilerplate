module.exports = function home(app, options){
  var router = express.Router();

  router.get('/', function(req, res, next){
    var options = options || {};
    return res.render('index', {pkgjson: pkgjson, bwrjson: bwrjson});
  });

  app.use('/', router);
};