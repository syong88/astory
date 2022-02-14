$(function(){
	
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var vidW = $('#mainVideo').innerWidth();
	var vidH = $('#mainVideo').innerHeight();
	var fontRateH3 = 60/1903;
	
	videoResizeFn();
	setInterval(videoResizeFn,100);
	
	$(window).resize(function(){
		videoResizeFn();
	});
	
	
	function videoResizeFn(){
		
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		vidW = $('#mainVideo').innerWidth();
		vidH = $('#mainVideo').innerHeight();
		
		$('.sec1-video').css({ width:100+'%', height:winH });
		
		if( winH > vidH ){
			$('#mainVideo').css({ width:'auto', height: winH });
		}
		if( winW > vidW ){
			$('#mainVideo').css({ width:winW, height:'auto' });
		}
		
		$('#mainVideo').css({marginTop:(winH-vidH)/2, marginLeft:(winW-vidW)/2 }); //비디오가운데정렬
		if( winW <= 500 ){
			$('.txt>h3').css({fontSize:(fontRateH3*winW)*2.8, left:3+'%'});
			
		}
		else if( winW > 500 && winW <=1400 ){
			$('.txt>h3').css({fontSize:(fontRateH3*winW)*2, left:3+'%'});
			
		}
		else {
			$('.txt>h3').css({fontSize:(fontRateH3*winW)*1.1});
			
		}
	}
	
	$('.txt>h3').animate({left:0,opacity:0},1000).animate({left:10+'%',opacity:1},900);
	
	//.sec1-next 박스 마우스 클릭시 섹션1로 이동
	$('.sec1-next').on({
		click:	function(){
			$('html,body').stop().animate({ scrollTop: $( '#section2' ).offset().top-120 },600,'swing');
		}
	});
	
	//.sec1-next 박스 마우스 오버시 세로라인 짧아졌다 길어지는 이벤트
	
	
});

//video.js
