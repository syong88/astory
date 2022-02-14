$(function(){
	
	var boxW = boxRateH= 0;
	var m3S2winW = $(window).innerWidth();
	var m3S2fontRate = 18/700;
		boxRateH = 84/1500;
	
	m3S2TabResizeFn();
	setTimeout(m3S2TabResizeFn,100);
	$(window).resize(function(){
		m3S2TabResizeFn();
	});
	
	//main3 섹션2 tab 반응형
	function m3S2TabResizeFn(){
		m3S2winW = $(window).innerWidth();
		
		if(m3S2winW<700){
			$('.sec2TabBt').css({fontSize:m3S2winW*m3S2fontRate});
		}
		
		
	}
	
});

//m3_sec2Font.js