jQuery(function(){
	//날짜 객체 선언(시스템 날짜와 시간을 불러온다.)
	var newDate  	= new Date(); //년월일시분초1/100초
	var nowYear  	= newDate.getFullYear(); 	//년
	var nowMonth 	= newDate.getMonth()+1;  	//월 0~11까지이기때문에
	var nowDate	 	= newDate.getDate(); 	  	//일
	var nowDay	 	= newDate.getDay(); 	  	//요일 일(0)~토(6) 일(0)월(1)화(2)수(3)목(4)금(5)토(6)
	var nowHours  	= newDate.getHours();   	//시 0~23
	var nowMinutes  = newDate.getMinutes(); 	//분 0~59
	var nowSeconds  = newDate.getSeconds(); 	//초 0~59
	var cnt			=-1; 						//1/100초 0~99까지 쓰기위해서 -1로출발
	var nowYoil 	= '';
	
	
	
		timerFn();
		
		 
		setInterval(timerFn, 10); //1초당 100번 반복 실행
		
		//시 분 초 아날로그 각도를 계산 js로 표현
		function timerFn(){
			//1.100분의 1초단위를 증가시켜서 0~99까지 초과하면(100이면) 1초증가
			cnt++;
			if( cnt > 99 ){ //0~99 (1초단위로)
				cnt = 0;	
				
				nowSeconds++;
				
				if( nowSeconds > 59 ){//0~59
				
					nowSeconds=0;
					nowMinutes++;
					
					if( nowMinutes > 59 ){
						
						nowMinutes=0;
						nowHours++;
						if( nowHours > 23 ){
							nowHours=0;
						}
						
					}
				}
			}
			
			
			$('.digital>li').eq(0).text( nowYear );
			$('.digital>li').eq(1).text( nowMonth<10?'0'+nowMonth:nowMonth );
			$('.digital>li').eq(2).text( nowDate<10?'0'+nowDate:nowDate );
			$('.digital>li').eq(3).text( nowYoil );
			$('.digital>li').eq(4).text( nowHours<10?'0'+nowHours:nowHours );
			$('.digital>li').eq(5).text( nowMinutes<10?'0'+nowMinutes:nowMinutes );
			$('.digital>li').eq(6).text( nowSeconds<10?'0'+nowSeconds:nowSeconds );
			$('.digital>li').eq(7).text( cnt<10?'0'+cnt:cnt );
			
		}
	
	
	
});
//analogtimer.js



























