window.onload=function(){
    var oDiv=document.getElementById('line');   
    var oSpan1=document.getElementById('loginnum');
    var oFirst=document.getElementById('loadDiv');
    var oBg=document.getElementById('bg');
    var total=10;
    var n = 1;
    for(var i=0;i<total;i++){
        var oImg=new Image();
        oImg.src='http://www.zhinengshe.com/works/3525/img/'+i+'.jpg';
        oImg.onload=function(){
            n++;
            var scale=Math.floor(n/total*100);
            oDiv.style.width=scale+'%';
            oSpan1.innerHTML=scale+'%'; 
            if(scale==100){
                scale='加载完毕';
                oSpan1.innerHTML=scale;
                setTimeout(function(){
                    move(oFirst,{opacity:0});
                    
                },300);
                move(oBg,{opacity:1});
            }
        };
    }

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
     // 导航
    var oNav = document.getElementById('nav');
    var aLi = oNav.getElementsByTagName('li');
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


   
    // 导航栏鼠标移入动态效果
    aLi[0].onclick = function(){    //按钮
        if(parseFloat(oNav.style.height) < 110){
            move(oNav,{height:400},{duration:200,easing:'linear'});
        }else{
            move(oNav,{height:100},{duration:200,easing:'linear'});
        }
    };
    // 导航下面横线运动效果
    var nav_arr = [70, 80, 90, 110];
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
    //两道线运动
    var oTxt= document.getElementById('txtCon');
    var oL1 = oTxt.children[0];
    var oL2 = oTxt.children[1];
   
    move(oL1, {top: 40});
    move(oL2,{left: -50});
  //文字闪烁
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

     //3D盒子，首页
    var oBox = document.querySelector('.home .inside .box');
    var x = 0;
    var y = 0;
    var iSpeedX = 0;
    var iSpeedY = 0;
    var lastX = 0;
    var lastY = 0;
    var timer1=null;
    function cube(){
        clearInterval(timer1);
        timer1=setInterval(function(){
            x+=1;
            y+=1;
            oBox.style.msTransform = 'perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
            oBox.style.WebkitTransform = 'perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
            oBox.style.OTransform = 'perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
            oBox.style.MozTransform = 'perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
        },16);
    }
    cube();
    oBox.onmouseover=function(){
        clearInterval(timer1);
    };
    oBox.onmouseout=function(){
        cube();
    };
    oBox.onmousedown = function(ev){
        return;
        clearInterval(timer1);
        clearInterval(oBox.timer);
        var disX = ev.pageX - y;
        var disY = ev.pageY - x;
        document.onmousemove = function(ev){
            x = ev.pageY-disY;
            y = ev.pageX-disX;
            oBox.style.msTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
            oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
            oBox.style.OTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
            oBox.style.MozTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
            iSpeedX = ev.pageX-lastX;
            iSpeedY = ev.pageY-lastY;
            lastX = ev.pageX;
            lastY = ev.pageY;
        };
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
            oBox.timer = setInterval(function(){
                iSpeedX*=0.95;
                iSpeedY*=0.95;
                x+=iSpeedY;
                y+=iSpeedX;
                oBox.style.msTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
                oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
                oBox.style.OTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
                oBox.style.MozTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
                if(Math.abs(iSpeedX)<1)iSpeedX=0;
                if(Math.abs(iSpeedY)<1)iSpeedY=0;
                if(iSpeedX==0&&iSpeedY==0){
                    clearInterval(oBox.timer);
                    clearInterval(timer1);
                }

            },30);
            cube();
        };
        return false;
    };
// ABOUT
    var oAbout = document.getElementById('about');
    var aB1 = document.getElementById('block-1');
    var aB2 = document.getElementById('block-2');
    var aB3 = document.getElementById('block-3');
    var aB4 = document.getElementById('block-4');
    var aBox2 = document.getElementById('box2');
    ball(aB1);
    ball(aB2);
    ball(aB4);
    ball(aBox2);

    //for(var i = 2; i < aBlock.length; i++){
     //   ball(aBlock[i]);
    //}
    setInterval(function(){
        //oShine.style.color='rgb(255,0,0)';
        aB1.style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
        //console.log(rnd(0,256));
    },1000);
    //无限运动效果
    var aPos=[
        {left:300, top:100},
        {left:300, top:400},
        {left:100, top:400},
        {left:100, top:100}
    ];
    var n=0;
    next();
    function next(){
        move(aB3, aPos[n%aPos.length], {duration:1000,
            complete:function (){
                n++;
                next();
            }   
        });
    }
    //随机切换效果
    var oUl=document.getElementById('list');
    var aLi1=oUl.children;
    var timer=null;
    // 创建span 与效果无关
    for (var i=0; i<aLi1.length; i++)
    {
        var oSpan=document.createElement('span');
        //oSpan.innerHTML=i;
        aLi1[i].appendChild(oSpan);
    }
    // 布局转换
    var aPos=[];
    for (var i=0; i<aLi1.length; i++)
    {
        aPos.push({
            left:aLi1[i].offsetLeft,
            top:aLi1[i].offsetTop
        });
    }
    for (var i=0; i<aLi1.length; i++)
    {
        aLi1[i].style.position='absolute';
        aLi1[i].style.left=aPos[i].left+'px';
        aLi1[i].style.top=aPos[i].top+'px';
        aLi1[i].style.margin=0;
        aLi1[i].index=i;
    }
    // 随机换
    function change(){
        aPos.sort(function (){
            return Math.random()-0.5;
        });
        for (var i=0; i<aLi1.length; i++){
            move(aLi1[i], aPos[i]);
        }
    }
    timer=setInterval(change,2000);
    oUl.onmouseover=function(){
        clearInterval(timer);
    };
    oUl.onmouseout=function(){
        timer=setInterval(change,2000);
    };
     //登录页面，放大消失，缩小出现
    var oLogin=document.getElementById('login');
    var oLogin_box=document.getElementById('login-page');
   
    var oLogin_btn=document.querySelector('.login-page .login-btn');
    var oLogin_a=document.querySelector('.login-page a');
    
    oLogin_btn.onclick=oLogin_a.onclick=function(){
        oLogin_box.style.WebkitTransform='scale(10,10)';
        oLogin_box.style.opacity='0';
        setTimeout(function(){
            oLogin_box.style.display='none';
        },300);
    };
    oLogin.onclick=function(){
        oLogin_box.style.display='block';

        setTimeout(function(){
            oLogin_box.style.WebkitTransform='scale(1,1)';
            oLogin_box.style.opacity='1';
        },300);

    };
 //works穿墙效果
    var aLin=document.querySelectorAll('.subjects ul li');
    for(var i=0;i<aLin.length;i++){
        through(aLin[i]);
    }
     //链接跳转
    aLin[0].onclick=function(){
        window.open('href/html/index.html','_blank');
    };
    aLin[1].onclick=function(){
        window.open('href/js/index.html','_blank');
    };
    aLin[2].onclick=function(){
        window.open('href/h5/index.html','_blank');
    };
    aLin[3].onclick=function(){
        window.open('href/mobile/index.html','_blank');
    };
    aLin[4].onclick=function(){
        window.open('href/ajax/webQQ/login.html','_blank');
    };
    aLin[5].onclick=function(){
        window.open('href/project/index.html','_blank');
    };
     //透明层
    var Ndiv=document.getElementById('n-div');
    var Show=document.getElementById('show');
    var Ndiv1=document.getElementById('n-div1');
    var Na2=document.getElementById('a2');
    Show.onclick=function(){
        move(Ndiv,{right:-115},{
            complete:function(){
                move(Ndiv1,{right:115});
            }
        });
    };
    Na2.onclick=function(){
        move(Ndiv1,{right:-1500},{
            complete:function(){
                move(Ndiv,{right:0});
            }
        });
    };
};














