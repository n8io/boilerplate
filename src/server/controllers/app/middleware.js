module.exports = function middleware(app){
  // gzip everything
  app.use(require('compression')());

  // uncomment after placing your favicon in /public
  //app.use(require('serve-favicon')(__dirname + '/public/favicon.ico'));
  app.use(require('morgan')('dev'));
  app.use(require('body-parser').json());
  app.use(require('body-parser').urlencoded({ extended: false }));
  app.use(require('cookie-parser')());
  app.use(require('serve-static')(path.join(__dirname, '../../../../dist'), {maxAge:0}));

  // Uncomment if you want to protect your form submissions
  // app.use(require('csurf')()); // Must be set after cookie and session middleware

  // view engine setup
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, '../../views'));
};