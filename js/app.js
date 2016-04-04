var app = (function () {
	// Funcionalidad para cargar la imagen del header.
  var loadBanner = function () {
    var bannerSmall = document.querySelector('.banner-small')

    // can't just listen the bannerSmall's load event
    // but why ?
    var img = new Image()
    img.src = bannerSmall.src
    img.addEventListener('load', function (e) {
      bannerSmall.classList.add('loaded')
    }, false)

    var bannerLarge = new Image()
    bannerLarge.src = bannerSmall.dataset.src
    bannerLarge.addEventListener('load', function (e) {
      e.target.classList.add('loaded')
    }, false)

    bannerSmall.parentNode.appendChild(bannerLarge)
  };

	// Funcionalidad para el navbar.
  var navbarFixer = function(){
      
    var navbar = document.getElementById('app-nav');
      
    var toggleFix = function(navbar){
        if(window.pageYOffset > 0){
          navbar.classList.add('fixed');
        }else{
          navbar.classList.remove('fixed');
        };
    };
      
    if(window.pageYOffset > 0)
      navbar.classList.toggle('fixed');

    window.onscroll = function(){
      toggleFix(navbar);
    };
  };
		
	// Funcionalidad para plugin sharrre...
	

  return {
    loadBanner: loadBanner,
    navbarFixer: navbarFixer
  }
})();

window.addEventListener('load', function (e) {
  app.loadBanner();
  app.navbarFixer();
}, false)
