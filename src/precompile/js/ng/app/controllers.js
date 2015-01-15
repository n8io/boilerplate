(function(){
  'use strict';

  angular
    .module('app')
    .controller('Body_Controller', bodyController)
    ;

  /* @ngInject */
  function bodyController(){
    var vm = this; // jshint ignore:line

    vm.init = function init(){

    };

    vm.init();
  }
})();