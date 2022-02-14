$(function(){
	var m3S2winW = $(window).innerWidth();
	
	m3S2ResizeFn();
	setTimeout(m3S2ResizeFn,100);
	$(window).resize(function(){
		m3S2ResizeFn();
	});
	function m3S2ResizeFn(){
		m3S2winW = $(window).innerWidth();
		
		if( $('.graph-container').innerWidth < 400 ){
			
			$('.graph-container').css({winth:m3S2winW });
		}
		
		
	}
	
});

//m3_graph_resize.js