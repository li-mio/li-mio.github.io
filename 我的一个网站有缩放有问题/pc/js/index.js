/**
 * Created by lizhaoyang on 2016/8/9.
 */
/*
图片轮播的代码*/
function getID(id){
    return typeof id==="string"?document.getElementById(id):id;
}
    //定时器
    getID("ban_box").timer= setInterval(auto,2000);
    var oLi=getID("ban_box").getElementsByTagName("ul")[0].getElementsByTagName("li");
    var ooLi=getID("ban_box").getElementsByTagName("ol")[0].getElementsByTagName("li");
    var count=0;
    function auto(){
        for(var i=0;i<oLi.length;i++){
            oLi[i].className="";
            ooLi[i].className="";
        }
        count++;
        if(count>=oLi.length){count=0};
        oLi[count].className="on";
        ooLi[count].className="tt";
    }
    getID("ban_box").onmouseover=function(){
        clearInterval( getID("ban_box").timer);
    }
    getID("ban_box").onmouseout=function(){
        getID("ban_box").timer= setInterval(auto,2000);
    }
    for(var i=0;i<ooLi.length;i++){
        ooLi[i].index=i;
        ooLi[i].onclick=function(){
            for(var i=0;i<oLi.length;i++){
                oLi[i].className="";
                ooLi[i].className="";
            }
            oLi[this.index].className="on";
            ooLi[this.index].className="tt";
            count=this.index;
        }
    }