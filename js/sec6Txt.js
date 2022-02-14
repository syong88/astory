$(function(){
	
	var t = 0; 
	var winW = $(window).innerWidth();
	var fontRateH3 = 100/1903;
	var fontRateSpan = 80/1903;
	var fontRateH4 = 22/1100;
	
	sec6ResizeFn();
	se6BoxFn();
	setTimeout(sec6ResizeFn,100);
	setTimeout(se6BoxFn,100);

	$(window).scroll(function(){
			
		//섹션6 메인타이틀 텍스트 왼쪽에서 오른쪽으로 애니메이션
		se6BoxFn();
	});	
	
	function se6BoxFn(){

		if( $(window).scrollTop() >= $('#section6').offset().top-200 ){
			$('.sec6-title').addClass('addS6Title');
			$('.sec6-txtBx').addClass('addS6Txt');
			
		}
		else{
			$('.sec6-title').removeClass('addS6Title');
			$('.sec6-txtBx').removeClass('addS6Txt');
		}		
	
	}
	
	$(window).resize(function(){
		sec6ResizeFn();
	});


		//섹션6 반응형 함수
		function sec6ResizeFn(){
			winW = $(window).innerWidth();

		
			if( winW > 1903 ){ //1903 ~ 
				$('.sec6-title>h3').css({fontSize: fontRateH3*winW*1.1 });
			}
			else if( winW > 1100 ){ //1101~1903
				$('.sec6-title>h3').css({fontSize: fontRateH3*winW });
				$('.sec6-txtBx>div>a>span').css({fontSize: (fontRateSpan*winW) }); //날짜 fontSize
			}
			else if( winW > 600 ){ //601~1100
				$('.sec6-title>h3').css({fontSize: (fontRateH3*winW)*1.3 });
				$('.sec6-txtBx>div>a>h4').css({fontSize: (fontRateH4*winW) });
				$('.sec6-txtBx>div>a>span').css({fontSize: (fontRateSpan*winW)*1.5});
			}
			else if( winW > 460 ){  //461~600
				$('.sec6-title>h3 ').css({fontSize: (fontRateH3*winW)*2 });
				$('.sec6-txtBx>div>a>h4').css({fontSize: (fontRateH4*winW)*1.5 });
				$('.sec6-txtBx>div>a>span').css({fontSize: (fontRateSpan*winW)*2 });
			}
			else{  //0~460
				$('.sec6-txtBx>div>a>h4').css({fontSize: (fontRateH4*winW)*2 });
				$('.sec6-txtBx>div>a>span').css({fontSize: (fontRateSpan*winW)*2.5 });
				$('.sec6-title>h3 ').css({fontSize: (fontRateH3*winW)*2 });
			}
		}
	
});
//sec6Txt.js