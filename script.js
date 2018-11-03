$(document).ready(function(){

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





