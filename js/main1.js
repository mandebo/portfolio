

$(window).on('load',function() {
	
	/*--- Preloader---*/
	$("loader").delay(400).fadeOut("slow");
	$("#preloader").delay(400).fadeOut("slow");
	
	
});



(function ($) 
{
	
/*set background image hero section*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url('+ bg + ')' );
		
		
	});
	
	
	$(".carousel").owlCarousel({
		margin:10,
		loop:true,
		autoplay:true,
		autoplayTimeout:3000, //2000 ms = 2 second
		autoplayHoverPause:true,
		
		responsive:{
			
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:false
			}
			
		}
		
	});

/*--------slick slider------
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoPlay:true,
  autoPlaySpeed:2000,
  arrows: true,
 
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
-------*/
	
/* toggle nav-switch  header section*/

$('.nav-switch').on('click',function(event) 
{	$(this).toggleClass('active');
	$('.nav-wrap').slideToggle(400);
	event.preventDefault();
	
	
});
	
	/*set background image hero section*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url('+ bg + ')' );
		
	});
	
	/* Progress bar */
	
	$('.progress-bar-style').each (function(){
		var progress = $(this).data("progress");
		var bgcolor =$(this).data("bgcolor");
		var prog_width = progress + '%';
		
		if(progress <=100){
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '; background:' + bgcolor +';"><span>'+ prog_width +
			'</span></div>');
			
			
		}else{
			$(this).append('<div class="bar-inner" style="width:100%' +  bgcolor +';"><span>100%</span></div>');
				
		}
		
	});
	
	
	/* Slider*/
	
	$('.testimonial-slider').owlCarousel({
			loop:true,
			nav:false,
			dots:true,
			margin:128,
			center:true,
			items:1,
			mouseDrag: false,
			animateOut:'fadeOutLeft',
			animateIn:'fadeInRight',
			autoplay:true
			
		
	}); 
	
	
	
}) (jQuery);
