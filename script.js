$(document).ready(function(){
  scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });

  var navbar = document.querySelector('.navbar');
  var logo = document.querySelector('.logo');
  // elements appear on scroll
  ScrollReveal().reveal('.headline');
  ScrollReveal().reveal('.tagline', {delay:500});

  
  var scrollLink = $('.scroll');
  // smooth scroll
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $(this.hash).offset().top
      });
  })

  // active link switching
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){

      var sectionOffset = $(this.hash).offset().top - 10;

      if(sectionOffset <= scrollbarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

       window.onscroll = function(){
  scrollFunction();
};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.style.padding = "12px 10px";
      logo.style.fontSize = "25px";
    } else {
      navbar.style.padding = "24px 10px";
      logo.style.fontSize = "30px";
    }
  }

})





// video



  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }
