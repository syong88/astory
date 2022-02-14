$(function(){
	
	//각각 탭메뉴 클릭시 sec3-board 보이기. 
	$('.tabMenuBt').each(function(index){
		$(this).on({
			click:	function(){
				
				$('.sec3-board').hide();
				$('.sec3-board').eq(index).fadeIn(300);
				$('.sec3-tabMenu>div>span>a').removeClass('addBg');
				$('.sec3-tabMenu>div>span>a').eq(index).addClass('addBg');
			}
		});
	});
	
});

//m3_tab.js