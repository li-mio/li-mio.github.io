
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
  //文字闪烁
  var oTxt=document.getElementById('txtCon');
  var oP1=oTxt.children[2];
  function flash(){
    setTimeout(function(){
        move(oP1,{opacity:0},{duration:1000,complete:function(){
            move(oP1,{opacity:1},{duration:1000,complete:function(){
                flash();
            }})

        }})
    },1000);
  }
  flash();
  // ABOUT
    var oAbout = document.getElementById('about');
    var aBlock = oAbout.children;
    for(var i = 3; i < aBlock.length; i++){
        ball(aBlock[i]);
    }

 //works
  
 //第三页列表穿墙效果
    var aLi=document.querySelectorAll('.subjects ul li');
    for(var i=0;i<aLi.length;i++){
        through(aLi[i]);
    }
     //链接跳转
    aLi[0].onclick=function(){
        window.open('href/html/index.html','_blank');
    };
    aLi[1].onclick=function(){
        window.open('href/js/index.html','_blank');
    };
    aLi[2].onclick=function(){
        window.open('href/h5/index.html','_blank');
    };
    aLi[3].onclick=function(){
        window.open('href/mobile/index.html','_blank');
    };
    aLi[4].onclick=function(){
        window.open('href/ajax/webQQ/login.html','_blank');
    };
    aLi[5].onclick=function(){
        window.open('href/more/fishgame/index.html','_blank');
    };
};














