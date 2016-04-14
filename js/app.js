// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

	$("#skills").click(function () {
    return $("html, body").animate({
        scrollTop: $("#skills_div").offset().top
    }, 800);
  });
    
    $("#portfolio").click(function () {
    return $("html, body").animate({
        scrollTop: $("#portfolio_div").offset().top
    }, 900);
  });
      
    $("#contact").click(function () {
    return $("html, body").animate({
        scrollTop: $("#contact_div").offset().top
    }, 900);
  });
  
    $("#up_button").click(function () {
        return $("html, body").animate({
            scrollTop: $("#top").offset().top
        }, 700);
    });

  $( "#click" ).click(function() {
    $( "#hidden" ).slideToggle( "slow", function() {
    });
  });

$('#skills').addClass('animated bounceInRight');
$('#portfolio').addClass('animated rollIn');
$('#contact').addClass('animated bounceInLeft');
$('.tag_line').addClass('animated fadeIn');
