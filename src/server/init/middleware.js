module.exports = function middleware(app){
  // Set misc app variables
  app.set('name', pkgjson.name);
  app.set('version', pkgjson.version);
  app.set('host', process.env.HOST || config.get('app:host'));
  app.set('port', process.env.PORT || config.get('app:port'));

  // gzip everything
  app.use(require('compression')());

  // Uncomment after placing your favicon in ../../precompile//statics/img
  //app.use(require('serve-favicon')(path.join(__dirname, '../../../dist/statics/img/favicon.ico'));
  app.use(require('serve-static')(path.join(__dirname, '../../../dist'), {
    maxAge: config.get('statics:maxAge') || '0 days'
  }));
  app.use(require('morgan')('dev'));
  app.use(require('body-parser').json());
  app.use(require('body-parser').urlencoded({ extended: false }));
  app.use(require('cookie-parser')());
  app.use(require('cookie-session')({
    key: config.get('app:name') + '.' + config.get('NODE_ENV') + '.session',
    secret: config.get('session:secret'),
    cookie:{
      path:'/',
      httpOnly: true,
      maxAge: ms(config.get('session:maxAge')) || ms('1 days')
    }
  }));

  // Uncomment if you want to protect your form submissions
  // app.use(require('csurf')()); // Must be set after cookie and session middleware

  // view engine setup
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, '../views'));
};