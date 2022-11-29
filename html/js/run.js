 $(document).ready(function () {
 	/* 비쥬얼 슬라이드 */
 	$('.visual_banner').slick({
 		slidesToShow: 1,
 		autoplay: true,
 		autoplaySpeed: 5000,
 		dots: true,
 	});
 	$('.slick-dots').wrap('<div class="controler"></div>');

 	$('.controler').prepend('<li class="stop ctr_btn"><button>정지</button></li><li class="play ctr_btn"><button>재생</button></li>');

 	$('.stop button').click(function () {
 		$('.visual_banner').slick('slickPause');
 		$('.play button').show();
 		$('.stop button').hide();
 	});

 	$('.play button').click(function () {
 		$('.visual_banner').slick('slickPlay');
 		$('.play button').hide();
 		$('.stop button').show();
 	});


 	var $frame = $('.frame');
 	var $slidee = $frame.children('ul').eq(0);
 	var $wrap = $frame.parent();

 	// Call Sly on frame
 	$frame.sly({
 		horizontal: 1,
 		itemNav: 'basic',
 		smart: 1,
 		activateOn: 'click',
 		mouseDragging: 1,
 		touchDragging: 1,
 		releaseSwing: 1,
 		startAt: 0,
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

 	/* 학습현황 검색 */
 	$.datepicker.setDefaults($.datepicker.regional['ko']);
 	$("#startDate").datepicker({
 		changeMonth: true,
 		changeYear: true,
 		nextText: '다음 달',
 		prevText: '이전 달',
 		showMonthAfterYear: true,
 		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
 		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
 		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
 		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
 		dateFormat: "yymmdd",

 	});
 	$("#endDate").datepicker({
 		changeMonth: true,
 		changeYear: true,
 		showMonthAfterYear: true,
 		nextText: '다음 달',
 		prevText: '이전 달',
 		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
 		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
 		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
 		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
 		dateFormat: "yymmdd",

 	});
	 
	 
 });

/* 인쇄 */
var initBody;
function beforePrint() {
	initbody = document.body.innerHTML;
	document.body.innerHTML = print_page.innerHTML;
}

function afterPrint() {
	document.body.innerHTML = initBody;
}

function pageprint() {
	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
	window.print();
	location.reload();

}




