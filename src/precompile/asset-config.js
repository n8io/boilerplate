var assets = {
  outputDir: './src/dist',
  angular: {
    cleanup: [
      'dist/js/app/**/*.js',
      '!dist/js/app/**/*.min.js'
    ]
  },
  jadeSrcFileArr: [
    'index.jade'
  ],
  jadeWatchFileArr: [
    './src/server/views/**/*.jade'
  ],
  stylusWatchFileArr: [
    './src/server/css/**/*.styl'
  ],
  stylusSrcFileArr: [
    './src/server/css/style.styl'
  ],
  cssSrcFileArr: [
    './src/client/css/style.min.css'
  ],
  jsWatchFileArr: [
    './src/server/js/**/*.js'
  ],
  jsNgSrcFileArr: [
    './src/server/js/ng/app.js',
    './src/server/js/ng/constants.js',
    './src/server/js/ng/values.js',
    './src/server/js/ng/config.js',
    './src/server/js/ng/filters.js',
    './src/server/js/ng/services.js',
    './src/server/js/ng/factories.js',
    './src/server/js/ng/controllers.js',
    './src/server/js/ng/directives.js'
  ],
  staticsWatchFileArr: [
    './src/server/statics/**/*'
  ]
};

module.exports = assets;