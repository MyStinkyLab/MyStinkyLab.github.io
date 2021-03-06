(function () {
	// Funcionalidad para cargar la imagen del header.
  var loadBanner = function () {
    var bannerSmall = document.querySelector('.banner-small');
    
    var img = new Image();
    img.src = bannerSmall.src;
    img.addEventListener('load', function (e) {
      bannerSmall.classList.add('loaded');
    }, false);

    var bannerLarge = new Image();
    bannerLarge.src = bannerSmall.dataset.src;
    bannerLarge.addEventListener('load', function (e) {
      e.target.classList.add('loaded');
    }, false);

    bannerSmall.parentNode.appendChild(bannerLarge);
  };

  loadBanner();
})();