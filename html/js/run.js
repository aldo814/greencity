/* 비쥬얼 슬라이드 */
$('.visual_banner').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots : true, 
});
$('.slick-dots').wrap('<div class="controler"></div>');

$('.controler').prepend('<li class="stop ctr_btn"><button>정지</button></li><li class="play ctr_btn"><button>재생</button></li>');

$('.stop button').click(function(){
	$('.visual_banner').slick('slickPause');
	$('.play button').show();
	$('.stop button').hide();
});

 $('.play button').click(function(){
	$('.visual_banner').slick('slickPlay');
	$('.play button').hide();
	$('.stop button').show();
});


var $frame  = $('.frame');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});