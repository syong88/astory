$(function(){
	
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var sec4W = $('#section4').innerWidth();
	var m = 5;
	var cnt=setId=barW=wrpW=boxW=n=oneW=timer=bar=0;
	var barRat = 80/winW;
	var timer = 4; //4초단위
	var z = 0; 
		n = $('.slideA').length-2; 
	
	
	
	sec4ResizeFn();
	setTimeout(sec4ResizeFn,100);
	
	$(window).resize(function(){
		sec4ResizeFn();
	});
	
	
	function sec4ResizeFn(){
		
		winH = $(window).innerHeight();
		winW = $(window).innerWidth();
		wrpW = $('#wrap').innerWidth();
		
		//타임바 비율계산 및 타이머 콘트롤
		barW = winW * barRat; 	//타임바 높이 = 창높이 * 타임바비율 
		boxW = (barW*n)+(10*n); //페이지버튼 타임바3개 박스 전체 높이 = (높이*3) + (마진*3)
		oneW = barW/(100*timer);   // 100분의 1초에 한번 증가 할 너비값 0.5 = 200/(100*4)    
		
		if( winW >1200 ){
			m=5;
			
		}
		else{
			m=1;
		}
		
		$('#sec4-view').css({width:winW, marginLeft:(winW-sec4W)/2});
		
		///// 반응형 적용 ////////////////////////////////////////////////
		//슬라이드
		$('.slideA').css({ maxWidth: wrpW, height: winH });
		
		if( winW<1903 ){
			$('.sec4-container').css({width:winW*0.788229112, marginLeft:-(winW*0.788229112)/2});
		}
		
		if( winW<1200 ){
			clearInterval(setId,100);
		}
		mainSlideFn();
	}
	
	
	
	autoPlayFn();
	
	function autoPlayFn(){
		
		setId = setInterval(function(){		
			
			bar += 0.2;  //80/4000 = 0.2 px
			if( bar > 80 ){  //하나의 슬라이드 길이를 초과하면
				bar = 0.2; 	  //하나의 슬라이드 종료
				nextCountFn(); //다음 슬라이드 호츌
			}
			//console.log(bar);
			$('.pageBar').css({width: 0 });
			$('.pageBar').eq(cnt>7?0:cnt).css({ width: bar });
			pageBtFn();
		}, 10); // 4 = 1000  40 = 100  400 = 10  4000 = 1
		
	}
	
	
	//페이지버튼 함수 : 자동실행 호출, 페이지버튼 클릭시 메이슬라이드 실행시 호출
	function pageBtFn(){
		$('.pageBt').find('i').css({ width:0 });
		$('.pageBt').eq(cnt>7?0:z).find('i').css({ width: bar });			
	}	
	
	
	//다음, 이전, 페이지버튼 위에 마우오버시 타이머 중지 아니면 재실행
	$('.slideBt').on({
		mouseenter:	function(){
			clearInterval( setId );
		},
		mouseleave:	function(){
			autoPlayFn();
		}
	});
	

	//터치이벤트
	$('#section4').swipe({
		swipeLeft:	function(){
			
			bar=0;
			nextCountFn();
		},
		swipeRight:	function(){
			
			bar=0;
			prevCountFn();
		}
	});

	
	//다음버튼 클릭 이벤트
	$('.sec4NextBt').on({
		click:	function(){
			//애니메이션 실행중에는 클릭 안되게 한다.
			if( !$('.sec4-wrap').is(':animated') ){
				bar = 0;
				nextCountFn();	
			}
		}
	});
	
	//이전버튼 클릭 이벤트
	$('.sec4PrevBt').on({
		click:	function(){ 
			//애니메이션 실행중에는 클릭 안되게 한다.
			if( !$('.sec4-wrap').is(':animated') ){
				bar = 0;
				prevCountFn();
			}	
		}
	});
	
	//다음카운트 함수
	function nextCountFn(){
		
		z++;
		mainSlideFn(cnt);
	}
	
	//이전카운트 함수
	function prevCountFn(){
		
		z--;
		mainSlideFn(cnt);
	}
	
	//페이지버튼함수
	$('.pageBt').each(function(index){
		$(this).on({
			click:	function(){	
				bar = 0;
				z = index;
				mainSlideFn(index);
			}
		});				
	});


	
	//메인 슬라이드 함수
	function mainSlideFn(){
	  
		$('.sec4-wrap').filter(':not(:animated)').stop().animate({left:-((304*m)*z)},400, function(){
			
			if(z>=7){  //실제는 3개지만 마지막에 첫슬라이드가 노출되어야 하기에 3이상으로 설정 
				z=0; //처음 슬라이드로 설정
				$('.sec4-wrap').stop().animate({left:-((304*m)*cnt)},0);	
			}
			if(z<0){  
				z=6;  //실제 슬라이드 3개이기에 0 ~ 2 마지막 슬라이드로 설정
				$('.sec4-wrap').stop().animate({left:-((304*m)*cnt)},0);	
			}
			
		});
		pageBtFn();
	}
	
});

//sec4Slide.js