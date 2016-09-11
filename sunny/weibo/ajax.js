//版权 北京智能社©, 保留所有权利
function ajax(options)
{
	options=options || {};
	if ( ! options.url) return;
	var url=options.url;
	var data=options.data || {};
	var type=options.type || 'get';
	var timer=null;
	
	if (window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	switch (type.toLowerCase())
	{
		case 'get':
			oAjax.open('GET', url+'?'+json2url(data), true);
			oAjax.send();
			break;
		
		case 'post':
			oAjax.open('POST', url, true);
			oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			oAjax.send(json2url(data));
			break;
	}
	
	oAjax.onreadystatechange=function (){
		if (oAjax.readyState == 4)
		{
			// 送到了
			clearTimeout(timer);
			if (oAjax.status>=200 && oAjax.status<300 || oAjax.status==304)
			{
				options.success && options.success(oAjax.responseText);
			}
			else
			{
				options.error && options.error(oAjax.status);
			}
		}
	};
	
	timer=setTimeout(function (){
		// 超时...
		options.error &&　options.error('网络请求超时');
		oAjax.onreadystatechange=null;
	}, 3000);
}

function json2url(json)
{
	var arr=[];
	json.t=Math.random();
	
	for (var name in json)
	{
		arr.push(name+'='+json[name]);
	}
	
	return arr.join('&');
}






















