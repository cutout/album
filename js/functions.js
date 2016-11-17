$(function(){

// Loading State
setTimeout(function(){$("body").addClass("loading")},200);
setTimeout(function(){$("body").addClass("loaded")},3000);
transformicons.add('.tcon');


// Smooth Scroll to top
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Fade on scroll
$(window).on('scroll',function(){
  $(".page-banner .img-blog").css("opacity", .4 - $(window).scrollTop() / 1300);
});


//Responsive trigger transform
$('.menu .tcon').on('click',function(){
  if($(this).hasClass('tcon-transform')){
    $('.menu ul').slideUp();
  } else {
    $('.menu ul').slideDown();
  }
});


// Check for responsive
mediaCheck({
  media: '(max-width: 768px)',
  exit: function(){
    $('.menu .tcon').removeClass('tcon-transform');
    $('.menu ul').removeAttr('style');
  }
});


// Change class on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 150) {
      $(".navbar").addClass("nav-smaller");
  } else {
      $(".navbar").removeClass("nav-smaller");
  }
});
