(function(){
  'use strict';

  var toc = document.getElementById('article-toc');
  var tocTop = document.getElementById('article-toc-top');
  var $html = $("html,body");
  if (!toc) return;

  tocTop.addEventListener('click', function(e){
    e.preventDefault();
    $html.animate({
      scrollTop: 0
    },300);
  });

	$(function(){

		// Scrollspy
        var $window = $(window);
        var $body   = $(document.body);

        $window.scrollspy({
          offset: 20,
          target: '#article-toc-inner'
        });
        $window.on('load', function () {
          $body.scrollspy('refresh');
        });

        // Sidenav affixing
        setTimeout(function () {

          var $sidebar = $('#article-toc-inner'),
              sideBarOffsetTop = $sidebar.offset().top;

          $sidebar.affix({
            offset: {
              top:sideBarOffsetTop, 
              bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true));
              }
            }
          })
          $sidebar.on('click','a.nav-link',function(){
            $html.animate({
              scrollTop:$($(this).attr('href')).offset().top - 7
            },150);
            return false;
          });
        }, 100);

	});

})();
