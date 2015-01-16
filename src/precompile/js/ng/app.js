(function(){
  'use strict';

  var defineAppModule = function defineAppModule(){
    angular
      .module('app', [
        'ngResource'
      ]);
  };

  var deps = [
    'angular',
    'ngRoute'
  ];
  require(deps, defineAppModule);
})();