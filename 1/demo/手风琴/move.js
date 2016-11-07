function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,false)[name];
		}
	}
	/*
		obj-obj
		json-{name:value}
			eg{'width':200}
		options-{
			'duration':总时间
			'type':'linear'/'ease-out'/'ease-in'
			complete:function(){};
			}
	*/	
	function move(obj,json,options){
		/*json{
				'width':300,
				'height':300
			}*/
		options=options||{};
		options.duration=options.duration||1000;
		options.type=options.type||'linear';
		var start={};
		var dis={};
		for(var name in json){
			start[name]=parseFloat(getStyle(obj,name))//起始点
			dis[name]=json[name]-start[name];//总距离
		}
		//start {width: 100, height: 100}
		//dis {width: 200, height: 200}	
		
			
		var count=Math.floor(options.duration/30);//总次数
			
		//var step=dis/count;//一次走了多少
		
		var n=0;//默认次数0
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			for(var name in json){
				
				switch (options.type){
					case 'linear':
						var  a=n/count;
						var cur=start[name]+dis[name]*a;
						break;
					case 'ease-in':
						var  a=n/count;
						var cur=start[name]+dis[name]*(a*a*a);
						break;
					case 'ease-out':
						var a=1-n/count
						var cur=start[name]+dis[name]*(1-a*a);
						break;
				}
				if(name=='opacity'){
				//变量用[]接，切记
					obj.style[name]=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';//兼容IE
				}else{
					obj.style[name]=cur+'px';
				}
			}
			
			
			
			if(n == count){
				clearInterval(obj.timer);
				options.complete&&options.complete();
			}
		},30);
	}
	