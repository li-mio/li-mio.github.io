//版权 北京智能社©, 保留所有权利

(function (){
	var added=false;
	
	window.calendar=function (obj){
		// 引入CSS
		if ( ! added)
		{
			var oLink=document.createElement('link');
			oLink.href='calendar.css';
			oLink.rel='stylesheet';
			var oHead=document.getElementsByTagName('head')[0];
			oHead.appendChild(oLink);
			
			added=true;
		}
		
		
		// 文本框加事件
		obj.onfocus=function (){
			oDiv.style.display='block';
		};
		
		// 日历
		var oDiv=document.createElement('div');
		oDiv.className='calendar';
		oDiv.style.left=obj.offsetLeft+'px';
		oDiv.style.top=obj.offsetTop+obj.offsetHeight+5+'px';
		obj.parentNode.insertBefore(oDiv, obj);
		
		oDiv.innerHTML='<a href="javascript:;" class="prev">←</a> \
		<a href="javascript:;" class="next">→</a> \
		<span>xxxx年xx月</span> \
		<ol> \
			<li>一</li> \
			<li>二</li> \
			<li>三</li> \
			<li>四</li> \
			<li>五</li> \
			<li class="week">六</li> \
			<li class="week">日</li> \
		</ol> \
		<ul></ul>';
		
		/**/
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var now=0;
		create();
		
		// 下个月
		var oNext=oDiv.getElementsByClassName('next')[0];
		oNext.onclick=function (){
			now++;
			create();
		};
		
		// 上个月
		var oPrev=oDiv.getElementsByClassName('prev')[0];
		oPrev.onclick=function (){
			now--;
			create();
		};
		
		function create()
		{
			// 改变span日期
			var oSpan=oDiv.getElementsByTagName('span')[0];
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+now);
			var year=oDate.getFullYear();
			var month=oDate.getMonth(); // 0 - 11
			oSpan.innerHTML=year+'年'+toDub(month+1)+'月';
			
			oUl.innerHTML='';
			// 创建空格
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+now);
			oDate.setDate(1);
			var week=oDate.getDay(); // 0-6
			(week==0) && (week=7);
			for (var i=0; i<week-1; i++)
			{
				var oLi=document.createElement('li');
				oUl.appendChild(oLi);
			}
			
			// 创建真正的日期
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+now);
			oDate.setMonth(oDate.getMonth()+1, 1);
			oDate.setDate(0);
			var total=oDate.getDate();
			for (var i=1; i<=total; i++)
			{
				var oLi=document.createElement('li');
				oLi.innerHTML=i;
				oUl.appendChild(oLi);
			}
			
			// 周末
			var aLi=oUl.children;
			for (var i=0; i<aLi.length; i++)
			{
				if (i%7==5 || i%7==6)
				{
					aLi[i].className='week';
				}
			}
			
			if (now == 0)
			{
				// 今天 以前
				var oDate=new Date();
				var today=oDate.getDate();
				
				for (var i=0; i<aLi.length; i++)
				{
					if (aLi[i].innerHTML < today)
					{
						aLi[i].className='past';
					}
					else if (aLi[i].innerHTML == today)
					{
						aLi[i].innerHTML='今天';
						aLi[i].className='today';
					}
				}
			}
			else if (now < 0)
			{
				for (var i=0; i<aLi.length; i++)
				{
					aLi[i].className='past';
				}
			}
			
			// 点击
			if (now == 0)
			{
				// 本月
				var oDate=new Date();
				var today=oDate.getDate();
				
				for (var i=0; i<aLi.length; i++)
				{
					if (aLi[i].innerHTML > today)
					{
						aLi[i].onclick=function (){
							obj.value=oSpan.innerHTML+toDub(this.innerHTML)+'日';
							oDiv.style.display='none';
						};
					}
					else if (aLi[i].innerHTML == '今天')
					{
						aLi[i].onclick=function (){
							obj.value=oSpan.innerHTML+toDub(today)+'日';
							oDiv.style.display='none';
						};
					}
				}
			}
			else if (now > 0)
			{
				// 下个月
				for (var i=0; i<aLi.length; i++)
				{
					aLi[i].onclick=function (){
						obj.value=oSpan.innerHTML+toDub(this.innerHTML)+'日';
						oDiv.style.display='none';
					};
				}
			}
		}
		/**/
	};

})();








