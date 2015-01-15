var moment = require('moment');
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var timestampMs = (new Date()).getTime();
  var timestamp = moment().format('ddd ll HH:mmZZ') + ' [ ' + timestampMs + ' ]';

  var cfg = require('./src/precompile/asset-config');

  grunt.initConfig({
    clean: {
      dist: {
        src: cfg.outputDir
      },
      angular: {
        src: cfg.angular.cleanup
      }
    }//,
    // copy: {
    //   assets: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: 'src/server/statics',
    //         src: '**',
    //         dest: 'src/client/statics',
    //         flatten: false
    //       }
    //     ]
    //   },
    //   js: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: './src/server/js',
    //         src: '**',
    //         dest: './src/client/js',
    //         ext: '.min.js',
    //         flatten: false,
    //         filter: 'isFile'
    //       }
    //     ]
    //   }
    // },
    // jshint: {
    //   all: {
    //     src: ['./src/server/js/**/*.js'],
    //     options: {
    //       jshintrc: true
    //     }
    //   }
    // },
    // uglify: {
    //   devNg: {
    //     options : {
    //       mangle: false,
    //       compress: false,
    //       preserveComments: 'some',
    //       beautify: {
    //         beautify: true,
    //         indent_level: 2
    //       }
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: './src/client/js/ng',
    //       src: ['**/*.js'],
    //       dest: './src/client/js/ng',
    //       ext: '.min.js'
    //     }]
    //   },
    //   prodNgCommon: {
    //     options : {
    //       mangle: true,
    //       compress: true,
    //       banner : '/* Minified via UglifyJs ' + timestamp + ' */\n'
    //     },
    //     files: {
    //       './src/client/js/ng/ng.min.js': ['./src/client/js/ng/*.min.js']
    //     }
    //   },
    //   prodNg: {
    //     options : {
    //       mangle: true,
    //       compress: true,
    //       banner : '/* Minified via UglifyJs ' + timestamp + ' */\n'
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: './src/client/js/ng',
    //       src: '**/*.js',
    //       dest: './src/client/js/ng',
    //       ext: '.min.js'
    //     }]
    //   }
    // },
    // stylus: {
    //   dev: {
    //     options: {
    //       paths: ['./css'],
    //       import: ['nib'], // use stylus plugin at compile time
    //       linenos: true,
    //       compress: false
    //     },
    //     files: {
    //       './src/client/css/style.min.css': stylusSrcFileArr
    //     }
    //   },
    //   prod: {
    //     options: {
    //       paths: ['./css'],
    //       import: ['nib'], // use stylus plugin at compile time
    //       linenos: false,
    //       compress: true,
    //       banner: '/* Minified via Stylus on ' + timestamp + '*/\n'
    //     },
    //     files: {
    //       './src/client/css/style.min.css': stylusSrcFileArr
    //     }
    //   }
    // },
    // jade: {
    //   dev: {
    //     options: {
    //       pretty: true,
    //       data: {
    //         baseUrl: assets.barequire('./precompile/assets.json')seUrl,
    //         cacheKey: timestampMs,
    //         env: 'dev'
    //       }
    //     },
    //     files: [
    //       {
    //         expand: true,
    //         cwd: './src/server/views',
    //         src: assets.jarequire('./precompile/assets.json')deSrcFileArr,
    //         dest: 'src/client/',
    //         ext: '.html'
    //       }
    //     ]
    //   },
    //   prod: {
    //     options: {
    //       pretty: false,
    //       data: {
    //         baseUrl: assets.barequire('./precompile/assets.json')seUrl,
    //         cacheKey: timestampMs,
    //         env: 'prod'
    //       }
    //     },
    //     files: [
    //       {
    //         expand: true,
    //         cwd: './src/server/views',
    //         src: assets.jarequire('./precompile/assets.json')deSrcFileArr,
    //         dest: 'src/client/',
    //         ext: '.html'
    //       }
    //     ]
    //   }
    // },
    // cssmin: {
    //   prod: {
    //     options:{
    //       keepSpecialComments: 0,
    //       banner : '/* Minified via CssMin ' + timestamp + ' */'
    //     },
    //     files: {
    //       './src/client/css/style.min.css': assets.csrequire('./precompile/assets.json')sSrcFileArr
    //     }
    //   }
    // },
    // concat: {
    //   dev: {
    //     src: assets.jsrequire('./precompile/assets.json')NgSrcFileArr,
    //     dest: './src/client/js/ng/ng.min.js'
    //   }
    // },
    // ngAnnotate: {
    //   dev: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: './src/client/js/ng',
    //         src: '**/*.min.js',
    //         dest: './src/client/js/ng',
    //         ext: '.min.js'
    //       }
    //     ]
    //   }
    // },
    // prettify: {
    //   options: {
    //     indent: 2,
    //     unformatted: []
    //   },
    //   index: {
    //     src: './src/client/index.html',
    //     dest: './src/client/index.html'
    //   }
    // },
    // watch: {
    //   scripts: {
    //     files: assets.jsrequire('./precompile/assets.json')WatchFileArr,
    //     tasks: ['dev'],
    //     options: {
    //       nospawn: false,
    //       interrupt: false
    //     }
    //   },
    //   css: {
    //     files: stylusWatchFileArr,
    //     tasks: ['dev'],
    //     options: {
    //       nospawn: false,
    //       interrupt: false
    //     }
    //   },
    //   jade: {
    //     files: assets.jarequire('./precompile/assets.json')deWatchFileArr,
    //     tasks: ['dev'],
    //     options: {
    //       nospawn: false,
    //       interrupt: false
    //     }
    //   },
    //   statics: {
    //     files: staticsWatchFileArr,
    //     tasks: ['dev'],
    //     options: {
    //       nospawn: false,
    //       interrupt: false
    //     }
    //   },
    //   livereload: {
    //     options: {
    //       livereload: true
    //     },
    //     files: [
    //       'src/client/**/*',
    //       '!src/client/bower_compnents/**/*'
    //     ],
    //   }
    // },
    // 'node-inspector': {
    //   dev: {
    //     options: {
    //       'web-port': 8080,
    //       'web-host': 'localhost',
    //       'debug-port': 5860,
    //       'save-live-edit': true,
    //       hidden: ['node_modules']
    //     }
    //   }
    // },
    // nodemon: {
    //   dev: {
    //     script: 'src/server/app.js',
    //     options: {
    //       nodeArgs: ['--debug=5860'],
    //       watch: ['src/server/*.js'],
    //       ext: 'js,json',
    //       delay: 0
    //     }
    //   }
    // },
    // concurrent: {
    //   tasks: ['nodemon', 'watch', 'node-inspector'],
    //   options: {
    //     logConcurrentOutput: true
    //   }
    // }
  });

  // Environment agnostic
  grunt.registerTask('preprocess', [
    'clean:dist',
  ]);

  grunt.registerTask('postprocess', [
    'clean:angular'
  ]);

  // Dev build
  grunt.registerTask('dev', [
    'preprocess',
    'jade:dev',
    'copy:assets',
    'copy:js',
    'stylus:dev',
    'concat:dev',
    'jshint',
    'ngAnnotate',
    'uglify:devNg',
    'prettify',
    'postprocess'
  ]);

  // Alias for Prod build
  grunt.registerTask('prod', [
    'default'
  ]);

  // Dev watcher
  grunt.registerTask('watcher', 'Fires minify css and js, then watches for changes', [
    'dev',
    'concurrent'
  ]);

  // Prod build (default task)
  grunt.registerTask('default', [
    'preprocess',
    'jade:prod',
    'copy:assets',
    'copy:js',
    'stylus:prod',
    'cssmin:prod',
    'ngAnnotate',
    'uglify:prodNg',
    'uglify:prodNgCommon',
    'postprocess'
  ]);
};