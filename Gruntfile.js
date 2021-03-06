var moment = require('moment');
var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var timestampMs = (new Date()).getTime();
  var timestamp = moment().format('ddd ll HH:mmZZ') + ' [ ' + timestampMs + ' ]';

  var cfg = require('./src/precompile/asset-config');

  // console.log(JSON.stringify(cfg,null,2));

  grunt.initConfig({
    jshint: {
      client: {
        options: cfg.jshint.client.options,
        src: cfg.jshint.client.src
      },
      server: {
        options: cfg.jshint.server.options,
        src: cfg.jshint.server.src
      }
    },
    clean: {
      dist: {
        options: {
          force: true
        },
        src: cfg.outputDir
      },
      angular: {
        options: {
          force: true
        },
        src: cfg.angular.cleanup
      }
    },
    stylus: {
      dist: {
        options: {
          import: ['nib'], // use stylus plugin at compile time
          linenos: true,
          compress: false
        },
        files: [
          {
            src: cfg.stylus.src,
            dest: cfg.stylus.dest
          }
        ]
      }
    },
    cssmin: {
      dist: {
        options:{
          keepSpecialComments: 0,
          banner : '/* Min\'d via CssMin ' + timestamp + ' */'
        },
        files: [
          {
            src: cfg.stylus.dest,
            dest: cfg.stylus.dest
          }
        ]
      }
    },
    jade: {
      dist: {
        options: {
          pretty: true,
          data: {
            cacheKey: timestampMs,
            env: 'dev'
          }
        },
        files: [
          {
            expand: true,
            cwd: cfg.jade.cwd,
            src: cfg.jade.src,
            dest: cfg.jade.dest,
            ext: '.html'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            cwd: cfg.htmlmin.cwd,
            src: cfg.htmlmin.src,
            dest: cfg.htmlmin.dest
          }
        ]
      }
    },
    copy: {
      statics: {
        files: [
          {
            expand: true,
            cwd: cfg.copy.statics.cwd,
            src: cfg.copy.statics.src,
            dest: cfg.copy.statics.dest,
            flatten: false
          }
        ]
      },
      bower: {
        files: [
          {
            expand: true,
            cwd: cfg.copy.bower.cwd,
            src: cfg.copy.bower.src,
            dest: cfg.copy.bower.dest,
            flatten: false
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            cwd: cfg.copy.js.cwd,
            src: cfg.copy.js.src,
            dest: cfg.copy.js.dest,
            ext: '.min.js',
            flatten: false
          }
        ]
      }
    },
    ngAnnotate: {
      dist: {
        options: {
          singleQuotes: true
        },
        files: [
          {
            expand: true,
            cwd: cfg.ngAnnotate.cwd,
            src: cfg.ngAnnotate.src,
            dest: cfg.ngAnnotate.dest
          }
        ]
      }
    },
    ngtemplates: {
      app: {
        cwd: cfg.ngtemplates.cwd,
        src: cfg.ngtemplates.src,
        dest: cfg.ngtemplates.dest,
        options: {
          htmlmin:  {
            collapseWhitespace:             true,
            removeComments:                 true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          },
          url: function(url) { return url.replace('.html', ''); },
          bootstrap:  function(module, script) {
            var jsLines = script.split('\n');
            jsLines.splice(0, 2); //Pop off the extra 'use strict' line and newlines
            jsLines.splice(jsLines.length - 1, 1);
            var lines = [
              '\'use strict\';',
              'var defineTemplateCache = function defineTemplateCache(){',
              '  angular',
              '    .module(\'' + module + '\')',
              '    .run(preloadTemplates)',
              '    ;',
              '',
              '  function preloadTemplates($log, $templateCache){',
              jsLines.join('\n    '),
              '  }',
              '  preloadTemplates.$inject = [\'$log\', \'$templateCache\'];',
              '};',
              '',
              'var deps = [ \'app.min\' ];',
              '',
              'require(deps, defineTemplateCache);'
            ];

            var js = lines.join('\n  ');
            return '(function(){\n  ' + js + '\n})();';
          }
        }
      }
    },
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          preserveComments: 'some',
          beautify: {
            beautify: true,
            indent_level: 2
          }
        },
        files: [
          {
            expand: true,
            cwd: cfg.uglify.cwd,
            src: cfg.uglify.src,
            dest: cfg.uglify.dest,
            ext: cfg.uglify.ext
          }
        ]
      },
      prod: {
        options: {
          mangle: true,
          compress: true,
          banner : '/* Min\'d via UglifyJs ' + timestamp + ' */\n'
        },
        files: [
          {
            expand: true,
            cwd: cfg.uglify.cwd,
            src: cfg.uglify.src,
            dest: cfg.uglify.dest,
            ext: cfg.uglify.ext
          }
        ]
      }
    },
    watch: {
      css: {
        files: cfg.watch.css.files,
        tasks: [ 'stylus' ],
        options: {
          nospawn: false,
          interrupt: false
        }
      },
      js: {
        files: cfg.watch.js.files,
        tasks: [ 'jade', 'ngtemplates', 'jshint', 'copy:js', 'ngAnnotate', 'uglify:dev' ],
        options: {
          nospawn: false,
          interrupt: false
        }
      },
      statics: {
        files: cfg.watch.statics.files,
        tasks: [ 'copy:statics', 'copy:bower' ],
        options: {
          nospawn: false,
          interrupt: false
        }
      }
    },
    concurrent: {
      tasks: ['nodemon', 'watch', 'node-inspector'],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options : {
          cwd: cfg.nodemon.cwd,
          nodeArgs: ['--debug=' + cfg.nodemon.debugPort],
          watch: cfg.nodemon.watch,
          ext: 'js,json'
        }
      },
    },
    'node-inspector': {
      dev: {
        options: {
          'web-port': 8080,
          'web-host': 'localhost',
          'debug-port': cfg.nodemon.debugPort,
          'save-live-edit': true,
          hidden: ['node_modules']
        }
      }
    }
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
    'jade',
    'ngtemplates',
    'jshint',
    'stylus',
    'copy',
    'ngAnnotate',
    'uglify:dev',
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
    'jade',
    'ngtemplates',
    'htmlmin',
    'stylus',
    'cssmin',
    'copy',
    'ngAnnotate',
    'uglify:prod',
    'postprocess'
  ]);
};