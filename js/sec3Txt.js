$(function(){
	
	var t = 0;
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	
	var fontRateH3 = 100/1903; //0.0734375 폰트비율.. 
	var fontRateA = 14/1903; //0.0734375 폰트비율.. 
	var fontAW= $('.sec3-title>a').innerWidth();
    var fontAH= $('.sec3-title>a').innerHeight();
	
	var fontH3W = $('.sec3-title>h3').innerWidth();
	var fontH3H = $('.sec3-title>h3').innerHeight();
	var fontH3MarginLeft = -fontH3W/2;
	var fontH3MarginTop = -fontH3H/2;


	sec3ResizeFn();
	setTimeout(sec3ResizeFn,100);
	$(window).resize(function(){
		sec3ResizeFn();
	});
	
	function sec3ResizeFn(){
		
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		fontH3W = $('.ssec3-title>h3').innerWidth();
		fontH3H = $('.ssec3-title>h3').innerHeight();
		
		fontH3MarginLeft = -fontH3W/2;
		fontH3MarginTop = -fontH3H/2;
		
		fontAW= $('.sec3-title>a').innerWidth();
		fontAH= $('.sec3-title>a').innerHeight();
		
		fontAmTop = -(fontAH/2)
		
		
		if( winW <= 400 ){ //400보다 작으면
			$('.sec3-title>h3').css({fontSize:(fontRateH3*winW)*2, left:50+'%', marginLeft:fontH3MarginLeft, marginTop:30  });
			$('.sec3-more>a ').css({top:50+'%', marginTop:-70 });
	
		}
		else if( winW > 400 && winW <= 640  ){ //640~400까지 화면
			$('.sec3-title>h3').css({fontSize:(fontRateH3*winW)*2, left:50+'%', marginLeft:fontH3MarginLeft, top:35+'%' });
			$('.sec3-more>a ').css({top:50+'%', marginTop:-50 });
		}
		else if ( winW > 640 && winW <= 830 ){ //830~640까지 화면
			$('.sec3-title>h3').css({fontSize:(fontRateH3 *winW)*1.5, left:50+'%', marginLeft:fontH3MarginLeft });
			$('.sec3-more>a ').css({top:60+'%', marginTop:fontAmTop});
		}
		else{
			$('.sec3-title>h3').css({fontSize:100, left:50+'%', marginLeft:fontH3MarginLeft, top:35+'%' });
			$('.sec3-more>a ').css({top:60+'%', marginTop:fontAmTop });
		}
	}
	
	
	
	$(window).scroll(function(){
		
		if( $(window).scrollTop() >= $('#section3').offset().top-300 ){
			if( t==0 ){
				t=1;
				$('.sec3-title').stop().animate({left:100, opacity:0},0).animate({left:0, opacity:1},500, function(){
					$('.sec3-more').stop().animate({left:100, opacity:0},0).animate({left:0, opacity:1},500, function(){
						$('#section4>div').stop().animate({opacity:0},0).animate({opacity:1},1000);
					});
				});
			}
		}
		else{
			t=0;
			$('.sec3-title').stop().animate({opacity:0},0);
			$('.sec3-more').stop().animate({opacity:0},0);
			$('#section4>div').stop().animate({opacity:0},0);
		}
	});
	
	//모어뷰버튼 마우스오버시 라인 줄어들었다가 나타나는 이벤트
	$('.sec3-more>a').on({
		mouseenter:	function(){
			lineAnimationFn();
		}
	});
	
	function lineAnimationFn(){
		$('.sec3-line').stop().animate({width:0},0).animate({width:110+'%'},500);
	}
	

	
});

//sec3Txt.js









