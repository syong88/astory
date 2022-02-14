$(function(){
	
	
	
	//노티스 텍스트 박스 왼쪽에서 오른쪽으로 나타나는 애니메이션
	noticeBgFn();
	function noticeBgFn(){
		
		$('#section1>div>div').css({transform:'scale(1)', transition:'all 1s'},300);
		
	}
	
	noticeTxtFn();
	function noticeTxtFn(){
		
		$('.m2-sec1-txtBx').stop().animate({opacity:0, marginLeft:-500}).animate({opacity:1, marginLeft:-100},600);
	}
	
	
})

//noticeTxt.js