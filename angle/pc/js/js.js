/**
 * Created by cathrine on 2016/8/22.
 */
//判断当前浏览类型 

function BrowserType()
{
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

    if (isIE)
    {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7 || fIEVersion == 8 || fIEVersion == 9)
        {
            var header=document.getElementById("header");
            header.style.background="url('images/bj.png') no-repeat";
            var htmleaf=document.getElementById("htmleaf-container");
            var app_lun=document.getElementById("app_lun");
            htmleaf.style.display="none";
            app_lun.style.display="block";
            var oUl=document.getElementById('ul1');
            oUl.innerHTML+=oUl.innerHTML;
            var ali=oUl.children;
            oUl.style.width=oUl.children[0].offsetWidth*oUl.children.length+'px';
            var oPrev=document.getElementById('prev');
            var oNext=document.getElementById('next');
            var left=0;
            var w=oUl.offsetWidth/2;
            var timer=null;
            oPrev.onmouseenter=function(){
                timer=setInterval(function(){
                    left-=4;
                    if(left<0){
                        oUl.style.left=left%w+'px';
                    }
                    else{
                        oUl.style.left=left%w-w+'px';
                    }
                },30);
            };

            toRight();
            function toRight(){
                timer=setInterval(function(){
                    left+=2;
                    if(left<0){
                        oUl.style.left=left%w+'px';
                    }
                    else{
                        oUl.style.left=left%w-w+'px';
                    }
                },30);
            }
            oPrev.onmouseenter=oNext.onmouseenter=function(){
                clearInterval(timer);
            };
            oPrev.onmouseleave=oNext.onmouseleave=function(){
                toRight();
            };
        }
        else if(fIEVersion == 10)
        { return "IE10";}
        else if(fIEVersion == 11)
        { return "IE11";}
        else
        { return "0"}//IE版本过低
    }//isIE end

    if (isFF) {  console.log(1);}
    if (isOpera) {  return "Opera";}
    if (isSafari) {  return "Safari";}
    if (isChrome) { console.log(1123123);}
    if (isEdge) { return "Edge";}
}//myBrowser() end

//判断是否是IE浏览器
function isIE()
{
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    if(isIE)
    {
        return "1";
    }
    else
    {
        return "-1";
    }
}
BrowserType();
