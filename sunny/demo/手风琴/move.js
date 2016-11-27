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
			'duration':��ʱ��
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
			start[name]=parseFloat(getStyle(obj,name))//��ʼ��
			dis[name]=json[name]-start[name];//�ܾ���
		}
		//start {width: 100, height: 100}
		//dis {width: 200, height: 200}	
		
			
		var count=Math.floor(options.duration/30);//�ܴ���
			
		//var step=dis/count;//һ�����˶���
		
		var n=0;//Ĭ�ϴ���0
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
				//������[]�ӣ��м�
					obj.style[name]=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';//����IE
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
	