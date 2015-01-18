require.config({
  baseUrl: '/js/angular',
  // waitSeconds: 2,
  paths: {
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
      '/statics/bower_components/jquery/dist/jquery.min'
    ],
    'malarkey': '/statics/bower_components/malarkey/dist/malarkey.min',
    'lodash': '/statics/bower_components/lodash/dist/lodash.min',
    'hammer': '/statics/bower_components/hammerjs/hammer.min',
    'async': '/statics/bower_components/async/lib/async',
    'modernizr': '/statics/bower_components/modernizr/modernizr',
    'moment': '/statics/bower_components/moment/min/moment.min',
    'md5': '/statics/bower_components/js-md5/js/md5.min',
    'underscore.string': '/statics/bower_components/underscore.string/dist/underscore.string.min',
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min',
      '/statics/bower_components/angular/angular.min'
    ],
    'angular-route': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular-route.min',
      '/statics/bower_components/angular-route/angular-route.min'
    ],
    'angular-resource': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular-resource.min',
      '/statics/bower_components/angular-resource/angular-resource.min'
    ],
    'angular-animate': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular-animate.min',
      '/statics/bower_components/angular-animate/angular-animate.min'
    ],
    'angular-aria': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular-aria.min',
      '/statics/bower_components/angular-aria/angular-aria.min'
    ],
    'angular-cookies': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular-cookies.min',
      '/statics/bower_components/angular-cookies/angular-cookies.min'
    ],
    'bootstrap': [
      '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min',
      '/statics/bower_components/bootstrap/bootstrap.min'
    ],
    'app': 'app.min'
  },
  shim: {
    'modernizr': {
      'exports': 'Modernizr'
    },
    'moment': {
      'exports': 'moment'
    },
    'lodash': {
      'exports': '_'
    },
    'underscore.string': {
      'deps': ['lodash']
    },
    'angular': {
      'exports': 'angular'
    },
    'angular-route': {
      'deps': ['angular']
    },
    'angular-resource': {
      'deps': ['angular']
    },
    'angular-animate': {
      'deps': ['angular']
    },
    'angular-aria': {
      'deps': ['angular']
    },
    'angular-cookies': {
      'deps': ['angular']
    },
    'bootstrap': {
      'deps': ['jquery']
    },
    'app': {
      'deps': [ 'bootstrap' ]
    }
  },
  priority: [
    'angular'
  ]
});

(function(){
  var deps = [ 'app', 'malarkey' ];
  require(deps, onAppInit);

  function onAppInit(app, malarkey){
    $('body').removeAttr('unresolved');

    var elem = document.querySelectorAll('#typist')[0];
    var opts = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2500,
      loop: true,
      postfix: ''
    };
    malarkey(elem, opts)
      .type('Bootstrap').pause().delete()
      .type('Angular').pause().delete()
      .type('RequireJs').pause().delete()
      .type('Stylus').pause().delete()
      .type('Jade').pause().delete()
      .type('Grunt').pause().delete()
      .type('Express').pause().delete()
      .type('NodeJs').pause().delete();
  }
})();
