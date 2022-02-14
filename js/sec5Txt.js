$(function(){
	
	var t=0;
	var winW = $(window).innerWidth();
	var fontRateH3 = 13/1903;
	var fontRateH2 = 100/1903;
	var fontRateP = 17/1903;
	
	sec5ResizeFn();
	setTimeout(sec5ResizeFn,100);
	$(window).resize(function(){
		sec5ResizeFn();
	});
	
	//섹션5 resize함수
	function sec5ResizeFn(){
		
		winW = $(window).innerWidth();
		//타이틀
		if( winW > 1024 ){
			$('.sec5-txt-wrap>div>h3').css({fontSize: fontRateH3*winW*1.1 });
			$('.sec5-txt-wrap>div>h2').css({fontSize: fontRateH2*winW*1.1 });				
			$('.sec5-txt-wrap>div>p').css({fontSize: fontRateP*winW*1.1 });				
		}
		else if( winW >600 ){ 
			$('.sec5-txt-wrap>div>h3').css({fontSize: (fontRateH3*winW)*2 });
			$('.sec5-txt-wrap>div>h2').css({fontSize: (fontRateH2*winW)*1.5 });				
			$('.sec5-txt-wrap>div>p').css({fontSize: (fontRateP*winW)*2 });				
		}
		else{
			$('.sec5-txt-wrap>div>h3').css({fontSize: (fontRateH3*winW)*4 });
			$('.sec5-txt-wrap>div>h2').css({fontSize: (fontRateH2*winW)*2.6 });				
			$('.sec5-txt-wrap>div>p' ).css({fontSize: (fontRateP*winW)*2.5 });				
		}
		
	}
	
	
	//스크롤 탑값이 섹션4+400 도달시 
	//섹션5 텍스트 탑값 이동 애니메이션
	$(window).scroll(function(){
		
		if( $(window).scrollTop()>= $('#section5').offset().top-300 ){
			if(t==0){
				t=1;
				$('.sec5-txt1').stop().animate({top:15+'%', opacity:0},0).animate({top:20+'%', opacity:1},300, function(){
					$('.sec5-txt2').stop().animate({top:25+'%', opacity:0},0).animate({top:30+'%', opacity:1},300, function(){
						$('.sec5-txt3').stop().animate({top:47+'%', opacity:0},0).animate({top:52+'%', opacity:1},300, function(){
							$('.sec5-txt4').stop().animate({top:65+'%', opacity:0},0).animate({top:70+'%', opacity:1},300);
						});
					});
			
				});
			}
		}
		
		else{
			t=0;
			$('.sec5-txt1').stop().animate({top:20+'%', opacity:0},0);
			$('.sec5-txt2').stop().animate({top:30+'%', opacity:0},0);
			$('.sec5-txt3').stop().animate({top:52+'%', opacity:0},0);
			$('.sec5-txt4').stop().animate({top:70+'%', opacity:0},0);
		}
	});
	
	
	$('.icon-wrap').on({
		mouseenter:	function(){
			lineAnimationFn();
		},
		mouseleave:	function(){
			t=1;
		}
	});
	
	function lineAnimationFn(){
		if(t==1){
			t=0;
			$('.sec5-line').stop().animate({width:0},0).animate({width:150},300);
		}
		else{
			t=1;
			$('.sec5-line').stop().animate({width:150});
		}
		
	}
	
});

//sec5Txt.js