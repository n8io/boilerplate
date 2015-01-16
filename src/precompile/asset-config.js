var path = require('path');

var outputDir = './src/dist';
var bowerDir = './bower_components';
var assets = {
  outputDir: outputDir,
  jshint: {
    src: [
      './src/precompile/js/**/*.js',
      './src/server/**/*.js'
    ]
  },
  angular: {
    cleanup: [
      path.join(outputDir, './html/ng-templates')
    ]
  },
  stylus: {
    watch: [ './src/precompile/css/**/*.styl' ],
    src: [ './src/precompile/css/style.styl' ],
    dest: path.join(outputDir, './css/style.min.css')
  },
  jade: {
    cwd: './src/precompile/html' ,
    src: [
      '**/*.jade',
      '!_layouts/**'
    ],
    dest: path.join(outputDir, './html/')
  },
  htmlmin: {
    cwd: path.join(outputDir, './html'),
    src: '**/*.html',
    dest: path.join(outputDir, './html')
  },
  copy: {
    statics: {
      cwd: 'src/precompile/statics',
      src: [
        './img/**/*',
        './fonts/**/*',
        './js/**/*',
        './css/**/*'
      ],
      dest: path.join(outputDir, './statics')
    },
    bower: {
      cwd: 'src/precompile/statics',
      src: [
        path.join(bowerDir, './requirejs/require.js'),
        path.join(bowerDir, './angular/angular.min.js'),
        path.join(bowerDir, './angular-animate/angular-animate.min.js'),
        path.join(bowerDir, './angular-aria/angular-aria.min.js'),
        path.join(bowerDir, './angular-cookies/angular-cookies.min.js'),
        path.join(bowerDir, './angular-material/angular-material.min.css'),
        path.join(bowerDir, './angular-material/angular-material.min.js'),
        path.join(bowerDir, './angular-resource/angular-resource.min.js'),
        path.join(bowerDir, './angular-route/angular-route.min.js'),
        path.join(bowerDir, './angularAMD/angularAMD.min.js'),
        path.join(bowerDir, './jquery/dist/jquery.min.js'),
        path.join(bowerDir, './lodash/dist/lodash.min.js'),
        path.join(bowerDir, './hammer/hammerjs/hammer.min.js'),
        path.join(bowerDir, './async/lib/async.js'),
        path.join(bowerDir, './modernizr/modernizr/modernizr.js'),
        path.join(bowerDir, './moment/min/moment.min.js'),
        path.join(bowerDir, './js-md5/js/js-md5.min.js'),
        path.join(bowerDir, './underscore.string/dist/underscore.string.min.js')
      ],
      dest: path.join(outputDir, './statics')
    },
    requirejs: {
      cwd: 'src/precompile/js/r',
      src: [ '**/*.js' ],
      dest: path.join(outputDir, './js/r')
    }
  },
  ngAnnotate: {
    cwd: path.join(outputDir, './js/ng'),
    src: [ '**/*.min.js' ],
    dest: path.join(outputDir, './js/ng')
  },
  ngtemplates: {
    cwd: path.join(outputDir, './html/ng-templates'),
    src: '**/*.html',
    dest: path.join(outputDir, './js/ng/templates.js')
  },
  uglify: {
    cwd: './src/precompile/js/ng',
    src: '**/*.js',
    dest: path.join(outputDir, './js/ng')
  }
};

module.exports = assets;