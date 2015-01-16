(function() {
  'use strict';

  var boostrapAngular = function boostrapAngular() {
    angular.bootstrap(document, [ 'app' ]);
  };

  var deps = [
    'angular',
    'app.min'
  ];

  require(deps, boostrapAngular);
})();