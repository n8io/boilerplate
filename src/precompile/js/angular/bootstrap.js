(function(){
  var deps = [
      'angular',
      'angular-resource',
      'angular-route'
    ];

  define('app', deps, defineAppModule);

  function defineAppModule(angular){
    var app = angular .module('app', [ 'ngResource', 'ngRoute' ]);
    return angular.bootstrap(app);
  }
})();
