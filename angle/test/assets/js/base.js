 (function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                console.log(clientWidth);
                if (!clientWidth)
                    return;
                if(clientWidth>=1024){
                    docEl.style.fontSize = 20+'px';
                }else if(clientWidth>=768){
                    docEl.style.fontSize = 20  + 'px';
                }else{
                    docEl.style.fontSize = 40 * (clientWidth / 750) + 'px';
                }
            };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);