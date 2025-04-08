
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);




  /* hakkımızda butonu*/

  function togglePanel(event) {
    event.stopPropagation(); // Butona tıklanınca kapanmaması için
    var panel = document.getElementById("hakkimizdaPanel");
    panel.classList.toggle("acik");
}

function closePanel(event) {
    var panel = document.getElementById("hakkimizdaPanel");
    if (panel.classList.contains("acik")) {
        panel.classList.remove("acik");
    }
}


