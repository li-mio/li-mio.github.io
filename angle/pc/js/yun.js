/**
 * Created by cathrine on 2016/8/22.
 */
var oDiv1=document.getElementById('server');
large();
function large(){
    move(oDiv1, {right:210}, 1000, function (){

        move(oDiv1, {right:228}, 1000,function(){
            large();

        });

    });
};

function move(obj, json, time, fn)
{
    var count=Math.floor(time/30);
    var n=0;
    // start+dis*n/count
    var start={};
    var dis={};

    for (var name in json)
    {
        start[name]=parseFloat(getStyle(obj, name));
        dis[name]=json[name]-start[name];
    }

    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        n++;

        // 改变样式
        for (var name in json)
        {
            if (name == 'opacity')
            {
                obj.style[name]=start[name]+dis[name]*n/count;
            }
            else
            {
                obj.style[name]=start[name]+dis[name]*n/count+'px';
            }

        }

        if (n == count)
        {
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 30);

}

function getStyle(obj, sName)
{
    return (obj.currentStyle || getComputedStyle(obj, false))[sName];
}