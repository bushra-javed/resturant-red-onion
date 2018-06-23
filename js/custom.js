function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    //"250px";
    document.getElementById("banner1").style.width = "80%";
    document.getElementById("bg-color").style.width = "80%";
    //"750px";
    bg-color
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("banner1").style.width = "100%";
    document.getElementById("bg-color").style.width = "100%";
}

(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp();

    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
        var hash = this.hash;
        if( hash ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
    
})(jQuery);