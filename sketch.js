$("nav-link").click(function() {
     $('html,body').animate({
          scrollTop: $(".section-cards").offset().top
        },
           'slow');
      });