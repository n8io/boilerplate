require.config({
  baseUrl: '/js/ng',
  // waitSeconds: 2,
  paths: {
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
      '/statics/bower_components/jquery/dist/jquery.min'
    ],
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
    }
  },
  priority: [
    'angular'
  ]
});

(function(){
  var deps = [ 'app' ];
  require(deps, onAppInit);

  function onAppInit(app){

  }
})();
