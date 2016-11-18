/**
*	Set Order By strive.
*	copyright by other.
**/
//t  当前时间
//b  初始值
//c  总距离
//d  总时间
//var cur=fx(t,b,c,d)
var Tween={Linear:function(t,b,c,d){return c*t/d+b},Quad:{easeIn:function(t,b,c,d){return c*(t/=d)*t+b},easeOut:function(t,b,c,d){return -c*(t/=d)*(t-2)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return -c/2*((--t)*(t-2)-1)+b}},Cubic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b}},Quart:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return -c/2*((t-=2)*t*t*t-2)+b}},Quint:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b}},Sine:{easeIn:function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b},easeOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOut:function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b}},Expo:{easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOut:function(t,b,c,d){if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b}},Circ:{easeIn:function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b}},Elastic:{easeIn:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},easeInOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(0.3*1.5)}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b}},Back:{easeIn:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b}},Bounce:{easeIn:function(t,b,c,d){return c-Tween.Bounce.easeOut(d-t,0,c,d)+b},easeOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}},easeInOut:function(t,b,c,d){if(t<d/2){return Tween.Bounce.easeIn(t*2,0,c,d)*0.5+b}else{return Tween.Bounce.easeOut(t*2-d,0,c,d)*0.5+c*0.5+b}}}};
//move
function move(obj, json, options)
{
	options=options || {};
	var duration=options.duration || 600;
	var easing=options.easing || Tween.Linear;
	
	var start={};
	var dis={};
	var count=Math.floor(duration/30);
	var n=0;
	
	for (var name in json)
	{
		start[name]=parseFloat(getStyle(obj, name));
		dis[name]=json[name]-start[name];
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		
		for (var name in json)
		{
			var cur=easing(n/count*duration, start[name], dis[name], duration);

			if (name == 'opacity')
			{
				obj.style[name]=cur;
			}
			else
			{
				obj.style[name]=cur+'px';
			}
		}
		
		if (n == count)
		{
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	}, 30);
}

function getStyle(obj, sName)
{
	return (obj.currentStyle || getComputedStyle(obj, false))[sName];
}
//弹性move
;(function(global){
    var left=0;
    var iSpeed=0;
    var timer=null;
    global.eMove=function(obj,iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-left)/5;
            iSpeed*=0.7;


            left+=iSpeed;
            obj.style.left=Math.round(left)+'px';

            if(Math.round(iSpeed)==0 && Math.round(left)==iTarget){
                clearInterval(timer);
            }
        },30);
    }
})(window)
//滚轮事件
function addWheel(obj, fn)
{
	// 加事件
	if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
	{
		// DOMMouseScroll
		obj.addEventListener('DOMMouseScroll', _wheel, false);
	}
	else
	{
		// onmousewheel IE chrome
		obj.onmousewheel=_wheel;
	}
	
	// 统一 down
	function _wheel(ev)
	{
		var oEvent=ev || event;
		
		if (oEvent.wheelDelta)
		{
			var down=oEvent.wheelDelta>0 ? false : true;
		}
		else
		{
			var down=oEvent.detail>0 ? true : false;
		}
		
		// 事件触发调用，down统一了
		fn(down);
	}
}
//柱形图
function upFn(obj,target,sum){

	var aP = obj.getElementsByTagName('p');
	var oSpan = obj.getElementsByTagName('span')[0];
	var timer = null;
	var num = 0;

	clearInterval(timer);
	timer = setInterval(function(){
		num += 2;
		if(num>=target){
			clearInterval(timer);
		}

		oSpan.style.bottom = num + 20 + "px";
		oSpan.innerHTML = parseInt( num*100/sum ) + "%";

		aP[0].style.bottom = num + "px";
		aP[1].style.height = num + "px";
		aP[2].style.height = num + "px";

	},30)
}

















