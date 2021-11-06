$("a.navbar-brand").css("color", "white");
$("ul.navbar-nav li.page-scroll a.nav-link").css("color", "white");
$("ul.navbar-nav li.page-scroll.active a.nav-link").css('color', 'white');
$("a.navbar-brand").css("size", "30px");
//$('div.modal-content button.btn.btn-default').click(function(){$('div.modal-backdrop.fade.show').toggle();});
$('div.modal-content button.btn.btn-default').click(function(){
    $('body.modal-open div.modal-backdrop').toggle();
    $('div.modal-body').toggle();
    $('div.#potfolioModal1.portfolio-modal.modal.fade.show').hide();
    $(this).appendTo("body");
});

//$('div.modal-content button.btn.btn-default').click(function(){$('div.portfolio-modal.modal.fade').toggle();});

//Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
        // Around the web

$(.getElementById("linkedin")).onclick = function () {
    $(.href = "linkedin.html");
    };
$(.getElementById("github")).onclick = function () {
    $(.href = "github.html");
    };
 
})(jQuery); // End of use strict
