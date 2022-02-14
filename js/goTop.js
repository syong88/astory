$(function(){
	
	
	
	
	$(window).scroll(function(){
		
		if( $(window).scrollTop()<=$('#section1').offset().top+300 ){
			$('.goTop-wrap').stop().fadeOut(300);
			
		}
		else{
			$('.goTop-wrap').stop().fadeIn(300);
			
		}
	});
	
	
	
	
	//gotop버튼 클릭시 섹션1로 이동하는 이벤트
	$('.gotopBt').on({
		click:	function(e){
			e.preventDefault();
			$('html,body').stop().animate({scrollTop:$('#wrap').offset().top},600, 'swing');		
		}
	});
	
	
	
});

//goTop.js