/**
 * 
 * @authors Bruce Li(you@example.org)
 * @date    2016-01-30 09:21:58
 * @version $Id$
 */
//进度条
window.onload=function(){
	var oDiv=document.getElementById('line');	
	var oSpan=document.getElementById('loginnum');
	var oFirst=document.getElementById('loadDiv');
	var oSecond=document.getElementById('second');
	var total=77;
	var n=0;
	for(var i=0;i<total;i++){
		var oImg=new Image();
		oImg.src='http://www.zhinengshe.com/works/3525/img/'+i+'.jpg';
		oImg.onload=function(){
			n++;
			var scale=Math.floor(n/total*100);
			oDiv.style.width=scale+'%';
			oSpan.innerHTML=scale+'%';	
			if(scale==100){
				scale='加载完毕';
				oSpan.innerHTML=scale;
				setTimeout(function(){
					oFirst.style.display='none';
					
				},300);
				oSecond.style.display='block';

			}
		};
	}
	//简历下载
	var oResume=document.getElementById('resume');
	var oRi=oResume.children[0];
	oResume.onmouseover=function(){
		oRi.style.display="block";
	};
	oResume.onmouseout=function(){
		oRi.style.display="none";
	};
	//nav
	var oMain=document.getElementById('main');
	var aBox=oMain.children;

	var oNav=document.getElementById('nav_main');
	var aA=oNav.getElementsByTagName('a');
	var oBox=document.getElementById('last');
	
	for(var i=0;i<aA.length;i++){
		(function(index){
			aA[i].onmouseover=function(){
				for(var i=0;i<aA.length;i++){
					aA[i].className='';
				}
					var oI=this.children[0];
					this.className='active';
					move(oI,{height:30},100);
					oBox.style.display='block';
					eMove(oBox,this.offsetLeft);
					
					
			};
			aA[i].onmouseout=function(){

				var oI=this.children[0];
				this.className='';
				move(oI,{height:0},100);
				eMove(oBox,0);	
				oBox.style.display='none';
			};
			aA[i].onclick=function(){

				for(var i=0;i<aA.length;i++){
					aA[i].className='';
				}

				this.className='active';
				move(oMain,{top:-(index*600-76)});
				index ==2 ? setTimeout(about,100) : about_no();
				index== 3 ? setTimeout(conFn,100) : conFn_no();
			};
		})(i);
	}
	//banner
	var oCon=document.getElementById('ban_content');
	var aDiv=oCon.children;
	var sW=aDiv[0].offsetWidth;
	var n=0;
	var oDiv1=document.getElementById('ban_btn');
	var aBtn=oDiv1.getElementsByTagName('a');
	var oNext=document.getElementById('next');
	var oPrev=document.getElementById('prev');
	var timer=null;
	
	for(var i=0;i<aBtn.length;i++){
		(function(index){
			aBtn[i].onmouseover=function(){
				n=index;
				tab();
			};
		})(i);
	}	
	oPrev.onmouseover=function(){
		n--;
		if(n==-1){
			n=aBtn.length-1;
		}
		this.className='active';
		tab();
	};	
	
	oNext.onmouseover=next;
	timer=setInterval(next,6000);
	oPrev.onmouseout=function(){
		oPrev.className='';
	};
	oCon.onmouseover=function(){
		clearInterval(timer);
	};
	oCon.onmouseout=function(){
		timer=setInterval(next,3000);
	};
	oNext.onmouseout=function(){
		this.className='';
	};
	function next(){
		n++;
		if(n==aBtn.length){
			n=0;
		}
		this.className='active';
		tab();
	}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
		}
			aBtn[n].className='active';
			move(oCon,{left:-n*sW});
	}
	//works
	var woBtn=document.getElementById('btn1');
	var woDiv=document.getElementById('works');
	var waDiv=woDiv.getElementsByTagName('ul');
	var waBtn=woBtn.children;
	for(var i=0;i<waBtn.length;i++){
		(function(index){
			waBtn[i].onmouseover=function(){
				for(var i=0;i<waBtn.length;i++){
					waBtn[i].className='';
					move(waDiv[i],{opacity:0});
				}
					waBtn[index].className='active';
					move(waDiv[index],{opacity:1});
			};
		})(i);
	}
	var aImg=woDiv.getElementsByTagName('img');
	var aSpan=woDiv.getElementsByTagName('span');
	
	for(var i=0;i<aImg.length;i++){
		(function(index){
			aImg[i].onmouseover=function(){
				for(var i=0;i<aImg.length;i++){
					move(aImg[i],{opacity:1});
					move(aSpan[i],{opacity:0});
				}
					move(aImg[index],{opacity:0});
					move(aSpan[index],{opacity:0.8});
			};
			aImg[i].onmouseout=function(){
				move(aImg[index],{opacity:1});
				move(aSpan[index],{opacity:0});
			};
		})(i);
	}
	//滚轮事件
	var iNow=0;
	for(var i=0;i<aBox.length;i++){
		addWheel(aBox[i], function (down){
			if (down)
			{
				iNow++;
				if(iNow==4){
					iNow=3;
				}
				//下
				for(var i=0;i<aBox.length;i++){
					aA[i].className='';
				}
					aA[iNow].className='active';
					move(oMain,{top:-(iNow*600-76)});
				iNow == 2 ? setTimeout(about,100) : about_no();
				iNow == 3 ? setTimeout(conFn,100) : conFn_no(); 
			}
			else
			{
				iNow--;
				if(iNow==-1){
					iNow=0;
				}
				//上
				for(var i=0;i<aBox.length;i++){
					aA[i].className='';
				}
					aA[iNow].className='active';
					move(oMain,{top:-(iNow*600-76)});
				iNow == 2 ? setTimeout(about,100) : about_no();
				iNow == 3 ? setTimeout(conFn,100) : conFn_no(); 
			}
		});
	}
	
	//about
	var about_map = document.getElementById("about_map");
	var css  = document.getElementById("css");
	var aboutArr = [

	{ data:80, left:51, c1:"#fffd38",c2:"#cbc800",c3:"#ffff00"},
	{ data:120, left:110,c1:"#31c1f5",c2:"#0091cd",c3:"#01b0f1"},
	{ data:75, left:165, c1:"#8a5cb6",c2:"#612b81",c3:"#7131a1"},
	{ data:130, left:225, c1:"#fa302c",c2:"#ca0300",c3:"#fe0000"},
	{ data:110, left:280, c1:"#719ad0",c2:"#416b9d",c3:"#4f81bc"}

	];
	var aDiv_about = about_map.getElementsByTagName("div");

	var shtml2 = '';
	var oStyle = document.createElement('style');

	for(var i=0; i<aboutArr.length; i++){

	    shtml2 += ".about"+(i+1)+"{ width: 30px; height: 200px; -webkit-perspective: 500px; -webkit-perspective-origin:100px -100px; -moz-perspective: 500px; -moz-perspective-origin:100px -100px; -ms-perspective: 500px; -ms-perspective-origin:100px -100px; position: absolute; left: "+aboutArr[i].left+"px"+"; bottom: 40px;}.about"+(i+1)+" p{ width: 30px; height: 0; position: absolute; font-size: 30px; text-align: center;}.about"+(i+1)+" p:nth-of-type(1){ height: 30px; background: "+aboutArr[i].c1+"; bottom: 0; -webkit-transform-origin:bottom; -webkit-transform: rotateX(90deg); -moz-transform-origin:bottom; -moz-transform: rotateX(90deg); -ms-transform-origin:bottom; -ms-transform: rotateX(90deg); }.about"+(i+1)+" p:nth-of-type(2){ background: "+aboutArr[i].c2+"; left: 30px; bottom: 0; -webkit-transform-origin:left; -webkit-transform: rotateY(90deg); -moz-transform-origin:left; -moz-transform: rotateY(90deg); -ms-transform-origin:left; -ms-transform: rotateY(90deg) }.about"+(i+1)+" p:nth-of-type(3){ background: "+aboutArr[i].c3+"; bottom: 0; left: 0; z-index: 10}.about"+(i+1)+" span{ width: 30px; font-size: 14px; display: block; text-align: center; position: absolute; bottom: 0;}";

	}
	oStyle.innerHTML = shtml2;
	document.getElementsByTagName('head')[0].appendChild( oStyle );

	for(var i=0; i<aboutArr.length; i++){
	        var aboutDiv = document.createElement("div");
	    aboutDiv.className  = "about" + (i+1) ;
	    aboutDiv.innerHTML = "<span></span><p></p><p></p><p></p>";
	    about_map.appendChild(aboutDiv);
	}


	function about(){

	    for(var i=0; i<aDiv_about.length; i++){
	        upFn(aDiv_about[i],aboutArr[i].data,150);
	    }

	}

	function about_no(){

	    for(var i=0; i<aDiv_about.length; i++){
	        upFn(aDiv_about[i],0,500);
	    }
	    
	}


	//contact
	var contact = document.getElementById("contact");
	var conDiv = contact.getElementsByTagName("div")[0];
	var conImg = contact.getElementsByTagName("img")[0];

	function conFn(){

	    conDiv.style.display = "block";
	    conDiv.className = "c_main";

	    setTimeout(function(){
	        conImg.style.display = "block";
	        conImg.className = "formRight";
	    },1300)
	}

	function conFn_no(){
	    conDiv.style.display = "none";
	    conImg.style.display = "none";
	    conImg.className = "";
	    conDiv.className = "";
	}

};	
				
							
	
			
			
			
