$(document).ready(function(){
			
			/*
			 二级导航菜单
			  */
			
			 $('#navigation li').mouseenter(function(){
				$(this).children('ul').show();
			});
			   $("#navigation li").mouseleave(function(){
			     $(this).children('ul').hide();
			});

			});
			/* 
			设定打开窗口属性，位置与大小
			 */	
			function openScript(url, width, height) {
				var iTop = (window.screen.height-30-height)/2;       //获得窗口的垂直位置;
				var iLeft = (window.screen.width-10-width)/2;        //获得窗口的水平位置;
			    var Win = window.open(url,"openScript",'width=' + width + ',height=' + 
			 
			height + ',resizable=no,toolbar=no,menubar=no,status=no,top='+iTop+',left='+iLeft+'px' );
			}