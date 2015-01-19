(function(){
  var deps = [ 'app', 'malarkey' ];
  require(deps, onAppInit);

  function onAppInit(app, malarkey){
    $('body').removeAttr('unresolved');

    var elem = document.querySelectorAll('#typist')[0];
    var opts = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2000,
      loop: true,
      postfix: ''
    };
    malarkey(elem, opts)
      .type('Bootstrap').pause().delete().call(moveOn)
      .type('Angular').pause().delete().call(moveOn)
      .type('RequireJs').pause().delete().call(moveOn)
      .type('Stylus').pause().delete().call(moveOn)
      .type('Jade').pause().delete().call(moveOn)
      .type('Grunt').pause().delete().call(moveOn)
      .type('Express').pause().delete().call(moveOn)
      .type('NodeJs').pause().delete().call(moveOn);

    var imgs = $('img:not(:nth-child(2))');
    var highlightedIndex = 0;

    function moveOn(){
      $(imgs).removeClass('highlighted');
      highlightedIndex = (highlightedIndex + 1) % imgs.length;
      $(imgs).eq(highlightedIndex).addClass('highlighted');
      this();
    }
  }
})();
