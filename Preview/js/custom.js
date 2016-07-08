/* FlexSlider */

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: true,
    pauseOnHover: true,
    slideshowSpeed: 3000,
    prevText: "", 
    nextText: ""
  });
});


/* Scroll to Top */

  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>300)
      {
        $('.totop').slideDown();
      } 
      else
      {
        $('.totop').slideUp();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 500);
    });
	$('.anchorLink').click(function (e) {
		if(!$("#idBtnNavBarExpndClps").hasClass("collapsed"))
		{
			$("#idBtnNavBarExpndClps").addClass("collapsed");
			if($("#idNavMenu").hasClass("in"))
			{
				$("#idNavMenu").removeClass("in").addClass("collapse").css({"height":"1px"});
			}
			
			//alert($("#idBtnNavBarExpndClps").hasClass("collapsed"));
		}
	});
  });
  
 //Ilaiya
 
$(function () {
	$('#cubevisva').imagecube();
	$('#cubehema').imagecube();
});