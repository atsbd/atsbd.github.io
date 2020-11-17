// navigation after scroll on desktop
$(document).ready(function () {
    let scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);
        if (scrollTop >= 100) {
            $('.bgTransparent').addClass('bgBlue');
        } else if (scrollTop < 100) {
            $('.bgTransparent').removeClass('bgBlue');
        }
    });
});
// navigation on mobile 
const navSlide = () => {
	let navToggler = document.querySelector('.navToggler');
	let nav = document.querySelector('.navPrimaryLinks');

	navToggler.addEventListener('click',()=>{
		nav.classList.toggle('navActive');
	
		// burrger animation
		navToggler.classList.toggle('toggleAnimate');
	});
}

navSlide();

// Gallery click 
$(document).ready(function() {
	$(".galleryIamgesWrap").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
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
