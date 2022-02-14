$(function(){
	
	var winW = $(window).innerWidth();
	var t = false;
	
	//mainBt 마우스오버시 
	//sub박스 슬라이드 다운
	//마우스리브시 
	//슬라이드 업 
	$('.mainBt').on({
		mouseenter:	function(){
			$('.sub').stop().slideUp(300);
			$(this).next().stop().slideDown(300);
		}
	});
	
	$('.nav').on({
		mouseenter:	function(){
			
			$('.gnb').addClass('addScroll');
		},
		
		mouseleave: function(){
			
			$('.sub').stop().slideUp(300);
			$('.gnb').removeClass('addScroll');
		}
	});
	
	$(window).scroll(function(){
		
		if( $(window).scrollTop()>=30 ){
			
			$('.gnb').addClass('addScroll');
			
		}
		else{
			
				$('.gnb').removeClass('addScroll');	
				$('.mapSub').stop().slideUp(0);
			
			
		}
		
	});
	
	//모달 메뉴버튼 클릭시 header-modal 오른쪽에서 왼쪽으로 나타나나는 애니메이션
	$('.modalmenuBt').on({
		click:	function(){
			
			$('.header-modal').addClass('addMobileMenu');
		}
	});
	//모달 닫기버튼 클릭시 header-modal 왼쪽에서 오른쪽으로 사라지는 애니메이션
	$('.modalCloseBt').on({
		click:	function(){
			$('.header-modal').removeClass('addMobileMenu');
		}
	});
	
	
	ModalResizeFn();
	setTimeout(ModalResizeFn,100);
	
	$(window).resize(function(){
		ModalResizeFn();
	});
	function ModalResizeFn(){
		winW = $(window).innerWidth();
		
		if( winW > 1100 ){
			
			$('.header-modal').removeClass('addMobileMenu');
			t = false;
		}
		else{
			
			if( t === false ){
				t=true;
				
				$('.header-modal').removeClass('addMobileMenu');
				$('.modalArrowBt>i').removeClass('addFoot');
				$('.header-modal-sub').stop().slideUp(0);
	
			}
		}
	}
	
	
	
	
	//modalArrowBt 버튼 클릭시 서브메뉴 아래로 slideDown
	$('.modalArrowBt').each(function(index){
		$(this).on({
			click:	function(){
				
					$('.header-modal-sub').stop().slideUp(500,'easeOutExpo');
					$('.header-modal-sub').eq(index).stop().slideToggle(500,'easeOutExpo');			
					
					$(this).find('i').toggleClass('addFoot');  
					
					for(i=0; i<$('.modalArrowBt>i').length; i++){
						if( i != index ){  //현재 클릭된 자신은 제외하고 삭제 알고리즘
							if( $('.modalArrowBt>i').eq(i).hasClass('addFoot')){  //true
								$('.modalArrowBt>i').eq(i).removeClass('addFoot');
							}
						}
					}
			}
		});
	});
	
});

//header.js













