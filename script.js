$(document).ready(function(){

  var navbar = document.querySelector('.navbar');
  var logo = document.querySelector('.logo');
  // get the form
  var form = $('#ajax-contact');
  // get the messages div
  var formMessages = $('#form-messages');

  $(form).submit(function(e){
    e.preventDefault();
    var formData = $(form).serialize();

    // submit the form using AJAX
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    })
    .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });
  }
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

  

});





// video



