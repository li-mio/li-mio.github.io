
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
            var oB = this.children[0];
            move(oB,{width:nav_arr[this.index-1]},{duration:200,easing:'linear'});
        };
        aLi[i].onmouseleave = function(){
            var oB = this.children[0];
            move(oB,{width:0},{duration:600,easing:'linear'});
        };
        aLi[i].onclick = function(){
            var k = this.index;
            move(oBg, {top: -(this.index-1)*aModule[0].offsetHeight}, {complete: function(){
                iNow = k-1;
            }});
        };
    }
    

};





















