/***** Initiated wow object for animation *****/
new WOW().init();

/***** This JS is for the sticky Navbar *****/
$(function(){ 
      $('.link-dropdown').on('mouseenter', function(){
        $(this).addClass('link-active');
      });
      $('.link-dropdown').on('mouseleave', function(){
        $(this).removeClass('link-active');
      });
       
    function mobileNavbar(windowWidth) {
      if(windowWidth.matches){
        $('.link-dropdown').on('click touch', '.nav-link',  function(){
          $('.link-dropdown').removeClass('link-active');
          $(this).closest('.link-dropdown').toggleClass('link-active');
        });

        $('.close-dropdown-menu').on('click touch', function(){
          let thisParent = $(this).closest('.link-dropdown');
          console.log($(thisParent));
          if($(thisParent).hasClass('link-active')){
            $(thisParent).removeClass('link-active');
          }
        });
       } 
      }
      var windowWidth = window.matchMedia("(max-width: 767px)");
      mobileNavbar(windowWidth);
      windowWidth.addListener(mobileNavbar);
  
 });
 
let siteNav = document.querySelector(".site-nav");
window.addEventListener("scroll", function(){
	if(window.pageYOffset > 60){
		siteNav.classList.add("sticky");
	}else{
		siteNav.classList.remove("sticky");
	}
});

$(function(){

  /***** This is for moving at the top of site through arrow button at the bottom of page *****/
	$("#goUpArrow").on("touch click", function(){
		$("html, body").animate({scrollTop: 0}, 2000);
	});

  /***** This is for the slider of brands on home page *****/
	$('.home-brand-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      dots: false,
      responsive: {
        0: {
          items: 2,
          nav: true,
          margin: 10,
        },
        500: {
          items: 4,
          nav: true,
          dots: false,
          margin: 20
        },
        1366: {
          items: 6,
          nav: true,
          loop: false,
          margin: 25
        }
      }
    });
  
    $( ".owl-prev").html('<i class="fas fa-chevron-circle-left"></i>');
    $( ".owl-next").html('<i class="fas fa-chevron-circle-right"></i>');


    $(".filter-chevron-label").on("touch click", ".fa-chevron-up", function(){
      $(this).parents(".product-detail-heading").removeClass("expand").addClass("shrink");
    });

    $(".filter-chevron-label").on("touch click", ".fa-chevron-down", function(){
      $(this).parents(".product-detail-heading").removeClass("shrink").addClass("expand");
    });

    $(".filter-subheading-box").on("touch click", function(){
      if($(this).hasClass("shrink")){
        $(this).removeClass("shrink").addClass("expand");  
      }else{
        $(this).removeClass("expand").addClass("shrink");  
      }
    });

    // $('.clear-selected').stopPropagation();

    $(".option-checkbox").click(function(){
      if($(this).is(":checked")){
        $(this).parents(".filter-option-div").find(".option-number").addClass("blue-clr");
      }else{
        $(this).parents(".filter-option-div").find(".option-number").removeClass("blue-clr");
      }
    });

    $("#viewAllLabel").click(function(){
      $(".all-brands-div").addClass("visible");
    });

    $("#closePopUp").click(function(){
      $(".all-brands-div").removeClass("visible");
    });
});


// let filterSubheading = $('.filter-subheading-div');
// let count = 0;
// $('.option-checkbox').on('click', function(e){
//   let filterSubheadingBox = $(this).parents('.filter-options-box').siblings('.filter-subheading-box');
//   let filterSubheading = $(this).parents('.filter-options-box').siblings('.filter-subheading-box').find('.filter-subheading');
//   $(filterSubheadingBox).addClass('purple-clr');
//   if($(this).is(':checked')){
//     $(this).parents()
//     count++;
//     console.log(count);
//   }else{
//     count--;
//     console.log(count);
//   }
//   console.log($(filterSubheading));
//   $(filterSubheading).html('<span>'+count+'</span>');
// });

// var subHeading = document.querySelector('.filter-subheading');
// subHeading.innerHTML += '<span>(2)</span>';










