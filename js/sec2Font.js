$(function(){
	
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var fontRateH3 = 85/1903 //‭0.0446663163426169‬
	
	
	setInterval(fontResizeFn,100);
	
	$(window).resize(function(){
		fontResizeFn();
	});
	
	//폰트반응형 함수
	function fontResizeFn(){
		
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		
		if( winW<=500 ){
			
			$('.onAir>h3 ').css({fontSize:(fontRateH3*winW)*1.9});
			
		}
		else if(  winW > 500 &&  winW <= 1100 ){
			
			$('.onAir>h3 ').css({fontSize:(fontRateH3*winW)*1.3});
			
		}
		else{
			
			$('.onAir>h3 ').css({fontSize:(fontRateH3*winW)*1.1});
			
		}
		
		
	}
})

//sec2Font.js