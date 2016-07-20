// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var main = function() {

 $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  /*gallery-2*/

  $('.arrow-next-2').click(function() {
    var currentSlide = $('.active-slide-2');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot-2');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide-2').first();
      nextDot = $('.dot-2').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide-2');
    nextSlide.fadeIn(600).addClass('active-slide-2');

    currentDot.removeClass('active-dot-2');
    nextDot.addClass('active-dot-2');
  });


  $('.arrow-prev-2').click(function() {
    var currentSlide = $('.active-slide-2');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot-2');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide-2').last();
      prevDot = $('.dot-2').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide-2');
    prevSlide.fadeIn(600).addClass('active-slide-2');

    currentDot.removeClass('active-dot-2');
    prevDot.addClass('active-dot-2');
  });


 /* Push the body and the nav over by 480px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "280px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-280px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

});

    $('.mobile-menu').click(function() {
    	$('.menu').animate({
    		left:"-280px"
    	},200);

      $('body').animate({
      left: "0px"
    }, 200);
});
};

$(document).ready(main);