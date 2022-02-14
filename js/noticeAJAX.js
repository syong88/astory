$(function(){
	var a = []; 	//전체공지 배열선언 2차원 글번호, 구분, 제목, 날짜
	var txt = '';	//출력할 배열 내용(문자) 기억변수
	var cnt=0;		//글번호 기억
	
	var totRecord = 0;	 					//전체 레코드 개수 전체공지=200, 쇼핑공지=150, 브랜드공지=50
	var list = 10;  							//한 화면에 보여질 목록 개수 (묶음=그룹)
	var startRecord = 0;					//레코드 시작 - 1페이지에 시작 번호
	var endRecord = startRecord+list;  		//레코드 끝  - 1페이지에 끝 번호 미만     현재페이지 
		
  	var	totPage   =  0;						//전체페이지 22/10 = 3페이지
	var	group     =  1;						//그룹번호1  1~10:그룹1= /parseInt(1/10+0.9) 그룹 총 3개,, 
	var	groupPage = 10;						//그룹(10개씩 묶음)단위, 한 화면에 표시할 갯수
	var	frontPage =  0;						//그룹범위의  앞페이지0
	var rearPage  = frontPage+groupPage;	//그룹범위의  뒷페이지10
	var currentPage = 0;					//현재페이지  페이지에 표시할 addClass 사용 버튼 현재페이지 변수
	var imgName = 0;
	
	
	$.ajax({
		url:'data/notice.json',
		type:'POST',
		dataType:'JSON',
		success:	function(data){
			// console.log(data);
			
			$.each(data.공지사항, function(idx, obj){
				
				imgName = "<img src='img/icon_arrow.gif' alt=''>";
				
				
				// console.log(idx, obj);
				a[idx] = []; //2차원 배열 선언 idx = 0 ~ 199
				
				//구분
				
				
				a[idx][0] = idx+1;	 	//글번호 추가됨, 시작1
				a[idx][1] = imgName+obj.제목; 	//글번호
				a[idx][2] = obj.날짜; 	//글번호
				
				
			}); //each 끝
			
			
			
			noticeFn();
			//공지사항 메인함수
			function noticeFn(){	
				//글번호 역순 출력 저장
				totRecord=a.length; //전체레코드 갯수는 a배열길이 이다. 
				cnt = a.length;	//전체공지 레코드 갯수 기억
				//console.log( cnt );
				for(i=0; i<a.length; i++){
					a[i][0]=cnt; //22 21 20..1
					cnt--;
				}
	
				
				//전체공지 테이블에 행단위로 출력
				for(i=startRecord; i<endRecord; i++){
					txt += "<tr>"
					for(j=0; j<3; j++){ //4칸: 글번호, 구분, 제목, 날짜
						txt += "<td><span>" +a[i][j]+ "</span></td>";	
					}
					txt += "</tr>"
				}
				console.log(txt);
				$('tbody').html(txt);
				txt='';
				cnt=0;
				
				$('.notice-page-number>span').remove(); 
				for( i=0; i<Math.ceil(totRecord/list); i++ ){
					$('.notice-page-number').append("<span><a href='javascript:' class='pageBt'>" + (i+1) + "</a></span>");
				}
			} //noticeFn 
			
			//3.페이지버튼 클릭 이벤트
			$(document).on('mouseenter','.pageBt', function(){
				
				$('.pageBt').each(function(index){
					$(this).on({
						click:	function(){
							
							startRecord = index*list;  //198
							endRecord   = startRecord+list;
							//마지막 페이지에 묶음이 부족할 때 오류 발생 34번 index=33*6 =198
							if( endRecord > totRecord ){
								//endRecord = startRecord+(totRecord%list);
								endRecord = totRecord;
								
							}
							noticeFn();
						}
					});
				});
			});			
			
			//4.PageNextBt 다음 페이지 이동
			$('.PageNextBt').on({
				click:	function(){
					startRecord += list; //list 만큼 누적 다음으로 이동
					endRecord = startRecord+list;
					if( endRecord>totRecord ){
						//startRecord = 총레코드수-(총레코드수%묶음그룹3);
						startRecord = totRecord-(totRecord%list);  //마지막 시작번호
						endRecord = totRecord;
					}
					noticeFn();
				}
			});			
			
			//5.PagePrevBt 이전 페이지 이동
			$('.PagePrevBt').on({
				click:	function(){
					startRecord -= list; //list 만큼 감소 이전으로 이동
					endRecord = startRecord+list;
					if( startRecord<0 ){
						startRecord = 0;
						endRecord = startRecord+list;
					}
					noticeFn();
				}
			});	
		},
		error:function(){
			console.log('AJAX ERROR MESSAGE!!');
		}
	});
	
	//searchBt 버튼 클릭시 토글슬라이드
	$('.searchBt').on({
		click:	function(){
			$('.notice-search-left>div').stop().slideToggle(300);
		}
	});
});
//noticeAJAX.js















