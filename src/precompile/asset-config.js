/*
  This file defines (for Grunt) where asset sources and destinations relative to  the project root
*/

var path = require('path');
var outputDir = 'dist';
var prebuildDir = './src/precompile';
var bowerDir = 'bower_components';

var assets = {
  outputDir: outputDir,
  jshint: {
    client: {
      options: {
        browser: true,  // true: Act as if running in browser (window, self, etc are valid)
        curly: true,    // true: Require {} for every new block or scope
        eqeqeq: true,   // true: Require triple equals (===) for comparison
        immed: true,    // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
        latedef: false,  // true: Require variables/functions to be defined before being used
        newcap: true,   // true: Require capitalization of all constructor functions e.g. `new F()`
        noarg: true,    // true: Prohibit use of `arguments.caller` and `arguments.callee`
        sub: true,      // true: Tolerate using `[]` notation when it can still be expressed in dot notation
        undef: true,    // true: Require all non-global variables to be declared (prevents global leaks)
        boss: false,     // true: Tolerate assignments where comparisons would be expected
        eqnull: false,   // true: Tolerate use of `== null`
        node: false,     // Node.js
        globals: {
          require: true,
          define: true,
          $: true
        }
      },
      src: [ path.join(prebuildDir, './js/**/*.js') ]
    },
    server: {
      options: {
        browser: false,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: false,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: false,
        eqnull: false,
        node: true,
        globals: {
          config: true,
          logger: true,
          fs: true,
          path: true,
          express: true,
          _: true,
          moment: true,
          async: true,
          request: true,
          ms: true,
          pkgjson: true,
          bwrjson: true,
          isProduction: true,
          isDevelopment: true
        }
      },
      src: [ './src/server/**/*.js' ]
    }
  },
  angular: {
    cleanup: [
      path.join(outputDir, './html/ng-templates')
    ]
  },
  stylus: {
    src: [ path.join(prebuildDir, './css/style.styl') ],
    dest: path.join(outputDir, './css/style.min.css')
  },
  jade: {
    cwd: path.join(prebuildDir, './html') ,
    src: [
      '**/*.jade',
      '!_layouts/**'
    ],
    dest: path.join(outputDir, './html')
  },
  htmlmin: {
    cwd: path.join(outputDir, './html'),
    src: '**/*.html',
    dest: path.join(outputDir, './html')
  },
  copy: {
    statics: {
      cwd: path.join(prebuildDir, './statics'),
      src: [
        './img/**/*',
        './fonts/**/*',
        './js/**/*',
        './css/**/*'
      ],
      dest: path.join(outputDir, './statics')
    },
    bower: {
      cwd: path.join(prebuildDir, './statics'),
      src: [
        path.join(bowerDir, 'requirejs/require.js'),
        path.join(bowerDir, 'angular/angular.min.js'),
        path.join(bowerDir, 'angular-animate/angular-animate.min.js'),
        path.join(bowerDir, 'angular-aria/angular-aria.min.js'),
        path.join(bowerDir, 'angular-cookies/angular-cookies.min.js'),
        path.join(bowerDir, 'angular-material/angular-material.min.css'),
        path.join(bowerDir, 'angular-material/angular-material.min.js'),
        path.join(bowerDir, 'angular-resource/angular-resource.min.js'),
        path.join(bowerDir, 'angular-route/angular-route.min.js'),
        path.join(bowerDir, 'angular-ui-router/release/angular-ui-router.min.js'),
        path.join(bowerDir, 'jquery/dist/jquery.min.js'),
        path.join(bowerDir, 'lodash/dist/lodash.min.js'),
        path.join(bowerDir, 'hammer/hammerjs/hammer.min.js'),
        path.join(bowerDir, 'async/lib/async.js'),
        path.join(bowerDir, 'modernizr/modernizr/modernizr.js'),
        path.join(bowerDir, 'moment/min/moment.min.js'),
        path.join(bowerDir, 'js-md5/js/js-md5.min.js'),
        path.join(bowerDir, 'underscore.string/dist/underscore.string.min.js'),
        path.join(bowerDir, 'bootstrap/dist/js/bootstrap.min.js'),
        path.join(bowerDir, 'bootstrap/dist/css/bootstrap.min.css'),
        path.join(bowerDir, 'malarkey/dist/malarkey.min.js')
      ],
      dest: path.join(outputDir, './statics')
    },
    js: {
      cwd: path.join(prebuildDir, './js'),
      src: [ '**/*.js' ],
      dest: path.join(outputDir, './js')
    }
  },
  ngAnnotate: {
    cwd: path.join(outputDir, './js/angular'),
    src: [ '**/*.js' ],
    dest: path.join(outputDir, './js/angular')
  },
  ngtemplates: {
    cwd: path.join(outputDir, './html/ng-templates'),
    src: '**/*.html',
    dest: path.join(outputDir, './js/angular/templates.min.js')
  },
  uglify: {
    cwd: path.join(outputDir, './js'),
    src: '**/*.js',
    dest: path.join(outputDir, './js'),
    ext: '.min.js'
  },
  watch: {
    css: {
      files: path.join(prebuildDir, './css/**/*.styl')
    },
    statics: {
      files: path.join(prebuildDir, './statics/**/*')
    },
    js: {
      files: [
        path.join(prebuildDir, './js/**/*.js'),
        path.join(prebuildDir, './html/**/*.jade')
      ]
    }
  },
  nodemon: {
    cwd: './src/server',
    debugPort: 5860,
    watch: ['**/*.js', '**/*.json']
  }
};

module.exports = assets;