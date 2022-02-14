$(function(){
	//graph 마우스오버시 
	//graph-view-wrap 각각 나타난다. show
	//아니면 사라진다. hide
	$('.graph').each(function(index){
		$(this).on({
			mouseenter:	function(){
				$('.graph-view').removeClass('addView');
				$('.graph-view').eq(index).addClass('addView');
			},
			mouseleave:	function(){
				$('.graph-view').removeClass('addView');
			}
		});
	});
	

	
	
});

//m3_graph_view.js









