
window.onload = function(){
    // 动态创建页面高度
    var oBg = document.getElementById('bg');
    var aModule = oBg.children;
    var iNow = 0;
    var bFlag = true;
    
    function getSize(){
        for(var i = 0; i < aModule.length; i++){
            aModule[i].style.height = document.documentElement.clientHeight + 'px';
            oBg.style.height = aModule[0].offsetHeight*4 + 'px';
        }
        oBg.style.top = -document.documentElement.clientHeight*iNow + 'px';
    }
    getSize();
    window.onresize = function(){
        getSize();
    };

    function wheel(bDown){
        if(bDown){
            if(bFlag){
                bFlag = false;
                iNow++;
                if(iNow > 3){
                    iNow = 3;
                }
                 for(var i=1;i<aLi.length;i++){
                    aLi[i].className='';
                }
                aLi[iNow+1].className='active';
                move(oBg, {top: -iNow*aModule[0].offsetHeight}, {complete: function(){
                    bFlag = true;
                }});
            }
        }else{
            if(bFlag){
                bFlag = false;
                iNow--;
                if(iNow < 0){
                    iNow = 0;
                }

                for(var i=1;i<aLi.length;i++){
                    aLi[i].className='';
                }
                aLi[iNow+1].className='active';
                move(oBg, {top: -iNow*aModule[0].offsetHeight}, {complete: function(){
                    bFlag = true;
                }});
            }
        }
    }

    // 滚轮切屏
    addWheel(oBg, wheel);


    // 导航
    var oNav = document.getElementById('nav');
    var aLi = oNav.getElementsByTagName('li');
    // 导航栏鼠标移入动态效果
    aLi[0].onclick = function(){    //按钮
        if(parseFloat(oNav.style.height) < 110){
            move(oNav,{height:366},{duration:200,easing:'linear'});
        }else{
            move(oNav,{height:100},{duration:200,easing:'linear'});
        }
    };
    // 导航下面横线运动效果
    var nav_arr = [50, 56, 60, 78];
    for(var i = 1; i < aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onmouseenter = function(){
            for(var i=1;i<aLi.length;i++){
                aLi[i].className='';
            }
            var oB = this.children[0];
            this.className='active';
            move(oB,{width:nav_arr[this.index-1]},{duration:200,easing:'linear'});
        };
        aLi[i].onmouseleave = function(){
            var oB = this.children[0];
            this.className='';
            move(oB,{width:0},{duration:600,easing:'linear'});
        };
        aLi[i].onclick = function(){
            for(var i=1;i<aLi.length;i++){
                aLi[i].className='';
            }
            this.className='active';
            var k = this.index;
            move(oBg, {top: -(this.index-1)*aModule[0].offsetHeight}, {complete: function(){
                iNow = k-1;
            }});
        };
    }
    




  // ABOUT
    var oAbout = document.getElementById('about');
    var aBlock = oAbout.children;
    for(var i = 3; i < aBlock.length; i++){
        ball(aBlock[i]);
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


};














