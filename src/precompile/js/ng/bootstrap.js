(function(){
  var deps = [ 'app.min' ];
  require(deps, initializeApp)

  function initializeApp(app){
    app.initialize();
  }
})();