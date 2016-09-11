var meituan={
	
	public:{
		head:{
			
			jsShow:function(){
				
				//header 
				var aBtn=document.getElementsByClassName('j-tab');
				var aBox=document.getElementsByClassName('j-btn');
				var aCont=document.getElementsByClassName('j-count');
				for(var i=0;i<aBtn.length;i++){
					(function(index){
						aBtn[i].onmouseover=function(){
							for(var i=0;i<aBtn.length;i++){
								aBox[i].className='j-btn';
								aCont[i].className='j-count';
							}
								aBox[index].className='j-btn active';
								aCont[index].className='j-count active';
						};
						aBtn[i].onmouseout=function(){
							
								aBox[index].className='j-btn';
								aCont[index].className='j-count';
							
						};
					})(i);
				}
				
				
				
			},
			jsClose:function(){
				var oClose=document.getElementById('h-close');
				var oImg=document.getElementById('h-pic');
				oClose.onclick=function(){
					oImg.style.display='none';
				};
			},
			jsSearch:function(){
				var oT=document.getElementById('txt');
				var oSpan=document.getElementById('holder');
				oSpan.onclick=function(){
					oSpan.style.display='none';
					oT.focus();
				};
				oT.onfocus=function(){
					oSpan.style.display='none';
					
				};
				oT.onblur=function(){
					if(oT.value.length==0){
						oSpan.style.display='block';
					}
					
				};
			},
			jsSelect:function(){
				var oContent=document.getElementById('content');	
				var oSel=document.getElementById('oSel'); 
				oSel.onchange=function(){
					var str=oSel.options[oSel.selectedIndex].value;
					oContent.innerHTML=str;
				};
			}
			
		},
		back:{
			jsBack:function(){
				var oRturn=document.getElementById('return');
				var timer=null;
				
				var bFlag=false;
				window.onscroll=function(){
					if(bFlag){
						clearInterval(timer);
					}
					bFlag=true;
				};
				oRturn.onclick=function(){
					var n=0;
					var start=document.body.scrollTop || 
					document.documentElement.scrollTop;

					var dis=0-start;
					var count=Math.floor(1000/30);
					
					clearInterval(timer);
					timer=setInterval(function(){
						n++;	
						bFlag=false;
						var cur=start+dis*n/count;
						document.body.scrollTop=cur;
						document.documentElement.scrollTop=cur;
						if(n==count){
							clearInterval(timer);
						}
					},30);
				};
			}
		}	
	},		
		
	
	index:{
		jsSeaScroll:function(){
			//无缝滚动
			var oPurchase=document.getElementById('purchase');
			var aRoll=oPurchase.children;
			oPurchase.innerHTML+=oPurchase.innerHTML;
			oPurchase.style.width=aRoll[0].offsetWidth*aRoll.length+'px';
			//alert(oPurchase.style.width);
			var w=oPurchase.offsetWidth/2;
			var left=0;
			var timer=null;
			Interval();
			oPurchase.onmouseout=function(){
				Interval();
			}
			function Interval(){
				timer=setInterval(function(){
					left-=4;
					if(left<-w){
						left=0;
					}
					oPurchase.style.left=left+'px';
				},30);
			}
			oPurchase.onmouseover=function(){
				clearInterval(timer);
			}
		},
		jsYear:function(){
			var Ndiv=document.getElementById('n-div');
			var Ndiv1=document.getElementById('n-div1');
			var Na1=document.getElementById('a1');
			var Na2=document.getElementById('a2');
			Na1.onclick=function(){
				move(Ndiv,{left:-115},{
					complete:function(){
						move(Ndiv1,{left:115});
					}
				});
			};
			Na2.onclick=function(){
				move(Ndiv1,{left:-1366},{
					complete:function(){
						move(Ndiv,{left:0});
					}
				});
			};
		},
		jsClock:function(){
			tick();
			setInterval(tick,1000);
			function tick(){
				var oTick=document.getElementById('countdown');
				var aImg=oTick.getElementsByTagName('img');
				
				var oNow=new Date();
				var oTarget=new Date();

				oTarget.setDate(29);
				oTarget.setHours(0,0,0);
				var total=oTarget.getTime()-oNow.getTime();
				var total=parseInt(total/1000);
				var d=toDub(parseInt(total/86400));
				total%=86400;
				var h=toDub(parseInt(total/3600));
				total%=3600;
				var m=toDub(parseInt(total/60));
				total%=60;
				var s=toDub(total);
				
				var str=d+h+m+s;
				for(var i=0;i<aImg.length;i++){
					aImg[i].src='images/image/'+str.charAt(i)+'.png';
				}
			}
			function toDub(n){
				return n<10? '0'+n:n+'';
			}
		},
		jsNav:function(){
			var oUl=document.getElementById('nav');
			var ali=oUl.children;
			for(var i=0;i<ali.length;i++){
				ali[i].onmouseover=function(){
					for(var i=0;i<ali.length;i++){
						ali[i].className='';
					}
						this.className='active';
				};
				ali[i].onmouseout=function(){
					for(var i=0;i<ali.length;i++){
						this.className='';
					}
				};		
			}
			//left nav
			var Ali=document.getElementsByClassName('list');
			var aBox=document.getElementsByClassName('j-box');
			for(var i=0;i<Ali.length;i++){
				(function(index){
					Ali[i].onmouseover=function(){
						this.className='list clearfix active';
						this.style.borderRight="none";
						aBox[index].className='hotel-box j-box clearfix active';
					};
					Ali[i].onmouseout=function(){
						this.className='list clearfix ';
						this.style.borderRight="1px solid #eee";
						aBox[index].className='hotel-box j-box clearfix ';
					};
				})(i);
			}
		}
	},
	/*list:{

	},	*/	
		
		
	
	
	detail:{
		//加减
		jsJiajian:function(){
			var oPrev=document.getElementById('prev');
			var oNext=document.getElementById('next');
			var oTxt=document.getElementById('txt1');
			var oSpan=document.getElementById('span1');
			var n=1;
			oTxt.innerHTML=1;
			oNext.onclick=function(){

				n++;
				oTxt.value=n;
				
				oSpan.style.display='none';
			};
			oPrev.onclick=function(){
				if(n<=1){
					oSpan.style.display='block';
					n=1;
				}
				oTxt.value=n;
				n--;
			};
		},
		//选项卡
		jsTab:function(){
			var oDbox=document.getElementById('de-box');
			var aImg=oDbox.getElementsByTagName('img');
			var oPrev1=document.getElementById('prev1');
			var oNext1=document.getElementById('next1');
			var iNow=0;
			oPrev1.onclick=function(){
				
				if(iNow==0){
					iNow=aImg.length-1;
				}
				iNow--;
				for(var i=0;i<aImg.length;i++){
					
					aImg[i].className='';
				}
					aImg[iNow].className='active';
			};
			oNext1.onclick=function(){
				iNow++;
				if(iNow==aImg.length-1){
					iNow=0;
				}
				for(var i=0;i<aImg.length;i++){
					
					aImg[i].className='';
				}
					aImg[iNow].className='active';
			};
		},
		//吸顶条
		jsXiding:function(){
			var oPos=document.getElementById('pos_tit');
			var pli=oPos.children;
			for(var i=0;i<pli.length;i++){
				pli[i].onmouseover=function(){
					for(var i=0;i<pli.length;i++){
						pli[i].className='';
					}
						this.className=' active';
				};
			}
			var opDiv=document.getElementById('pdiv1');
			var opImg=document.getElementById('pimg1');
			var top=oPos.offsetTop;
			window.onscroll=function(){
				var scrollTop=document.body.scrollTop || 
			document.documentElement.scrollTop;
				if(top<scrollTop){
					oPos.style.position='fixed';
					opDiv.style.display='block';
				}
				else{
					oPos.style.position='';
					opDiv.style.display='none';
				}
			};
		}

	}



};	
