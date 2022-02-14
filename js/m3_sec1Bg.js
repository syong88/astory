$(function(){
	
	//섹션1 배경이미지 
	//2초동안 scale 줄어드는 애니메이션
	
	sec1BgFn();
	function sec1BgFn(){
		
		$('.sec1-BgImg').css({transform:'scale(1)', transition:'all 1s'},300);
		
	}
	
	sec1TxtFn();
	function sec1TxtFn(){
		
		$('.sec1-BgImg>div').stop().animate({opacity:0, left:45+'%', marginLeft:0}).animate({opacity:1, left:50+'%', marginLeft:-43.325},600);
	}
	
	
});

//m3_sec1Bg.js