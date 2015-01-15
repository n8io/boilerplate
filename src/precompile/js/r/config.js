require.config({
  paths: {
    'jquery': '/statics/bower_components/jquery/dist/jquery.min',
    'lodash': '/statics/bower_components/lodash/dist/lodash.min',
    'hammer': '/statics/bower_components/hammerjs/hammer.min',
    'async': '/statics/bower_components/async/lib/async',
    'modernizr': '/statics/bower_components/modernizr/modernizr',
    'moment': '/statics/bower_components/moment/min/moment.min',
    'underscore.string': '/statics/bower_components/underscore.string/dist/underscore.string.min',
    'angular': '/statics/bower_components/angular/angular.min',
    'ngRoute': '/statics/bower_components/angular-route/angular-route.min',
    'ngResource': '/statics/bower_components/angular-resource/angular-resource.min',
    'ngAnimate': '/statics/bower_components/angular-animate/angular-animate.min',
    'ngAria': '/statics/bower_components/angular-aria/angular-aria.min',
    'ngCookies': '/statics/bower_components/angular-cookies/angular-cookies.min'
  },
  shim: {
    'jquery': {
      'exports': '$'
    },
    'modernizr': {
      'exports': 'modernizr'
    },
    'lodash': {
      'exports': '_'
    },
    'angular': {
      'exports': 'angular'
    },
    'moment': {
      'deps': ['jquery']
    },
    'underscore.string': {
      'deps': ['lodash']
    },
    'ngRoute': {
      'deps': ['angular']
    },
    'ngResource': {
      'deps': ['angular']
    },
    'ngAnimate': {
      'deps': ['angular']
    },
    'ngAria': {
      'deps': ['angular']
    },
    'ngCookies': {
      'deps': ['angular']
    }
  },
  priority: [
    'angular'
  ],
  'deps': [
    '/r/bootstrap'
  ]
});
