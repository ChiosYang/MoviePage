
			
				$(document).ready(function(){
					/* 
					图片无缝循环滚动
					 */
					function scrollImg(){
						 $("#movie_up_right ul").animate({marginLeft:"-243px"},1000,"linear",function(){
						        $("#movie_up_right li:first").remove().clone(true).appendTo("#movie_up_right ul");
								$("#movie_up_right ul").css({marginLeft:"0px"});
						    })

					}
					var startRoll = setInterval(scrollImg,1000);
					$("#movie_up_right").hover(function(){
					        clearInterval(startRoll);
					    },function(){
					       startRoll = setInterval(scrollImg,1000);
					    
					});
					
					
					/* 
					图片滚动切换 
					*/
					 var Top=-400;
					 var Time=1000;
					 var Top2=0;
					 var flag=false;
					 //定义一个速度
					 function move(){
						 if(!flag){
							  $("#movie_middle .downImg").animate({"margin-top":Top},Time);
							  flag = true;
						 }else if(flag){
							 $("#movie_middle .downImg").animate({"margin-top":"0px"},Time);
							 flag = false;
						 }
					    }
					setInterval(move,3000);//3秒执行一次move()
					
					/*
					 二级导航菜单
					  */
					
					 $('#navigation li').mouseenter(function(){
						$(this).children('ul').show();
					});
					   $("#navigation li").mouseleave(function(){
					     $(this).children('ul').hide();
					});
					/* 
					排行榜切换,滑动门效果
					 */
					$("#movie_down2").hide();
					$("#bn1").css("background-color","#2e3087");
					$("#bn1").mouseenter(function(){
						$("#bn1").css("background-color","#2e3087");
						$("#bn2").css("background-color","#27212b");
						$("#movie_down2").fadeOut(200).hide();
						$("#movie_down").fadeIn(200).show();
					});
					$("#bn2").mouseenter(function(){
						$("#bn2").css("background-color","#2e3087");
						$("#bn1").css("background-color","#27212b");
						$("#movie_down").fadeOut(200).hide();
						$("#movie_down2").fadeIn(200).show();
					});
					/* 
					图片轮播效果
					 */
					 var index = 0;
					 var timer = null;
					    // 定时器自动播放
					 function sliderTimer() {
					    timer = setInterval(function() {
							index++;
					        if (index == $('#showPic .im').length) {
					            index = 0;
					        }
					        sliderIndex(index)
					    }, 3000)
					}
					sliderTimer();
					// 根据索引值点亮小圆点并显示对应图片
					function sliderIndex(index) {
					    // 对应图片显示
					    $('#showPic .im').eq(index).fadeIn(150).siblings().fadeOut(150);
					    // 小圆点点亮
					    $('#showPic #label li').eq(index).addClass('show').siblings().removeClass('show')
					    }
				   // 点击事件
				      $('#showPic #label li').mouseenter(function() {
				          clearInterval(timer)
				          index = $(this).index()
				          sliderIndex(index)
				      })
				      
				      // 鼠标移入轮播区域关闭定时器
				      $('#showPic').mouseenter(function() {
				          clearInterval(timer);
				      })
				      // 鼠标移出轮播区域开启定时器
				      $('#showPic').mouseleave(function() {
				          sliderTimer();
				      })
				  
				  
				  });
