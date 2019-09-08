// Top primary navigation 
// navigation menu
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('.bg-transparent').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.bg-transparent').removeClass('scrolled-nav');
    }

  });

});
// autohide on click
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

// contact form actions (require jQuery validator)
$("#contactform").validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    }
  },
  submitHandler: function(form) {
    var form = $("#contactform");
    var submitButton = $("#submit");
    var response = $('#response');
    $.ajax({
      method: "POST",
      url: "https://www.briskforms.com/go/fa4967ea2843a2282b39c728ef4a1a10",
      data: $("#contactform").serialize(),
      dataType: "json",

      beforeSend: function() {
        response.text('Sending....');
      },
      success: function(data) {
        response.html('<i class="fas fa-check"></i> Message sent').fadeIn();
        form.trigger('reset');
      },
      error: function(e) {
        console.log(e);
        response.html('<i class="fas fa-check"></i> Message sent');
      }
    });
  }
});
// get the year
document.getElementById("year").innerHTML = new Date().getFullYear();

