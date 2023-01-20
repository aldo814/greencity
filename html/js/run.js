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
	 
	 // 직업선호도 검사
	$('.job_selct a').click(function () {
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	});
	
	//직업선호도 진단 서비스 팝업
	$('.job_type_area .exp .btn_wrap a').click(function () {
		$(this).toggleClass('active');
		$(this).text($(this).text() == '간단히 보기' ? "자세히 보기 + " : "간단히 보기");
		$(this).parent().parent().next().slideToggle(300);
	});
	 
	 // 탭메뉴
	// 탭 컨텐츠 숨기기
	$(".tab_content").hide();

	// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {
		$(this).children().children().children("li:first").addClass("active"); //Activate first tab
		$(this).children(".tab_content").first().show();
	});

	//탭메뉴 클릭 이벤트
	$(".tabs li a").click(function () {
		var tab_id = $(this).attr('data-tab');
		$(this).parent().siblings().removeClass("active");
		$(this).parent().addClass("active");
		$(this).parent().parent().parent().parent().find(".tab_content").hide();
		//        var activeTab = $(this).attr("rel");
		//        $("#" + activeTab).fadeIn();
		$("#" + tab_id).fadeIn();
	});
	 
	 //직업역량진단 더보기
	$('.jc_list .more_btn').click(function () {
		$(this).parent().toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var moveinnerr = $(".jt_inner .more");
		if (moveinnerr.has(e.target).length === 0) {
			moveinnerr.removeClass("active");
		}
	});
	 //진단 결과 더보기
	$('.bar_area .txt a').click(function () {
		$(this).parent().parent().toggleClass('active');
		$(this).parent().parent().siblings('.bar_area').removeClass('active')
	});
	 
	 $(document).mouseup(function (e) {
		var moveinnerr = $(".bar_area");
		if (moveinnerr.has(e.target).length === 0) {
			moveinnerr.removeClass("active");
		}
	});
	//직업역량진단 진단결과 차트 
	$('.ja_chart  .lg_blue').click(function () {
		$('.bar-gray').removeClass('off')
		$('.bar-blue').addClass('off');
	});

	$('.ja_chart  .lg_gray').click(function () {
		$('.bar-gray').addClass('off');
		$('.bar-blue').removeClass('off');
	});

	$(document).mouseup(function (e) {
		var movewrap04 = $(".ja_chart");
		var moveinner04 = $(".ja_chart .bars .bar > div");
		if (movewrap04.has(e.target).length === 0) {
			moveinner04.removeClass("off");
		}
	});

	$(document).mouseup(function (e) {
		var movewrap04 = $(".ja_chart");
		var moveinner04 = $(".ja_chart .bars .bar > div");
		if (movewrap04.has(e.target).length === 0) {
			moveinner04.removeClass("off");
		}
	});
	 
	 /*자소서 컨설팅*/
	 $('.review').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplaySpeed:5000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	 
	 $('.scrollbar').mCustomScrollbar({ 
        theme:"dark-3"});
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

function openModal(modalname) {
	document.get
	$("." + modalname).show();
	$('body').addClass('not_scroll');
	$('.shadow').show();
}

function close_pop(flag) {
	$('.diag_pop').hide();
	$('body').removeClass('not_scroll');
	$('.shadow').hide();
};


