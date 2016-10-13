//nav
window.onload=function(){
    //动态创建页面高度
    var oMain = document.getElementById('main');
    var oHeadMain=document.getElementById('header_main');
    var aModule = oMain.children;
    var iNow=0;
    var bFlag = true;
    
    function getSize(){
        for(var i=0;i<aModule.length;i++){
            aModule[i].style.height=document.documentElement.clientHeight+'px';
            oMain.style.height=aModule[0].offsetHeight*3+'px';
           

        }
         
        oMain.style.top=-document.documentElement.clinetHeight*iNow+'px';
    }
    getSize();
    window.onresize=function(){
        getSize();
    }


    function wheel(bDown){
        if(bDown){
            if(bFlag){
                bFlag = false;
                iNow++;
                if(iNow==4){
                    iNow = 3;
                }
                for(var i=0;i<aA.length;i++){
                    aA[i].className='';
                }
                aA[iNow].className='active';
                move(oMain, {top: -iNow*aModule[0].offsetHeight}, {complete: function(){
                    bFlag = true;
                }});
                iNow == 2 ? setTimeout(about,100) : about_no();
                iNow == 3 ? setTimeout(conFn,100) : conFn_no();
            }
        }else{
            if(bFlag){
                bFlag = false;
                iNow--;
                if(iNow < 0){
                    iNow = 0;
                }
                for(var i=0;i<aA.length;i++){
                    aA[i].className='';
                }
                aA[iNow].className='active';
                move(oMain, {top: -iNow*aModule[0].offsetHeight}, {complete: function(){
                    bFlag = true;
                }});
                iNow == 2 ? setTimeout(about,100) : about_no();
                iNow == 3 ? setTimeout(conFn,100) : conFn_no();
            }
        }
    }

    // 滚轮切屏
    addWheel(oMain, wheel);

    

    //nav效果
    var oNav=document.getElementById('nav_main');
    var aA=oNav.getElementsByTagName('a');
    var oP=document.getElementById('last');

    for(var i=0;i<aA.length;i++){
        ;(function(index){
            aA[i].onmouseenter=function(){
                for(var i=0;i<aA.length;i++){
                    aA[i].className='';
                }
                var oI=this.children[0];
                this.className='active';
                move(oI,{height:30},100);
                oP.style.display='block';
                eMove(oP,this.offsetLeft);
            };
            aA[i].onmouseleave=function(){
                var oI=this.children[0];
                this.className='';
                move(oI,{height:0},100);
                eMove(oP,0);
                oP.style.display='none';
            };
            aA[i].onclick=function(){

                for(var i=0;i<aA.length;i++){
                    aA[i].className='';

                }
                this.className='active';
                move(oMain,{top:-(index*document.documentElement.clientHeight-86)});
                index==2 ? setTimeout(about,100):abput_no();
                index==3 ? setTimeout(conFn,100):conFn_no();

            };
        })(i);
    } 


     //banner
    var oCon=document.getElementById('ban_content');
    var aDiv=oCon.children;
    var sW=aDiv[0].offsetWidth;
    var Now=0;
    var oDiv1=document.getElementById('ban_btn');
    var aBtn=oDiv1.getElementsByTagName('a');
    var oNext=document.getElementById('next');
    var oPrev=document.getElementById('prev');
    var timer=null;
    
    for(var i=0;i<aBtn.length;i++){
        (function(index){
            aBtn[i].onmouseover=function(){
                 Now=index;
                console.log(1);
                tab();
            };
        })(i);
    }    
    function tab(){
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].className='';
        }
            //alert(1);
            aBtn[Now].className='active';
            move(oCon,{left:-Now*sW});
    }
    oPrev.onmouseover=function(){
         Now--;
        if( Now==-1){
            Now=aBtn.length-1;
        }
        this.className='active';
        tab();
    };  
    oNext.onmouseover=next;
    timer=setInterval(next,6000);
    oPrev.onmouseout=function(){
        this.className='';
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
        Now++;
        if(Now==aBtn.length){
            Now=0;
        }
        this.className='active';
        tab();
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

}
