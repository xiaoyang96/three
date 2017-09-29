$(document).ready(function () {
   var innerbox = document.getElementById('box')
   var contain = document.getElementById('container');
   var boxX = 0;
   var boxY = 0;
   innerbox.onmousedown = function (ev){
       /*兼容浏览器*/
       var ev = ev||event;

       var adsorb = 15;

       boxX = ev.clientX - innerbox.offsetLeft;
       boxY = ev.clientY - innerbox.offsetTop;
       console.log(ev.offsetX);
            
       document.onmousemove = mousemove;
       document.onmouseup = mouseup;
       function mousemove(ev) {
           var ev = ev||event;
           var boxleft = ev.clientX - boxX;
           var boxtop = ev.clientY - boxY;
           // innerbox.style.transition = " all .5s";
           /*边缘吸附处理*/
           /*左右边缘吸附*/

          /*innerbox.style.transition为吸附行为添加过渡动
          画，非吸附行为没有过渡效果*/

           if (boxleft<adsorb) {
              boxleft = 0;                   
           }else if (boxleft>contain.offsetWidth - innerbox.offsetWidth - adsorb){
              boxleft = contain.offsetWidth - innerbox.offsetWidth;
       
           }

           /*上下边缘吸附*/
           if(boxtop < adsorb){
              boxtop = 0;
           }else if ( boxtop > contain.offsetHeight - box.offsetHeight - adsorb){
              boxtop = contain.offsetHeight -box.offsetHeight;
           }

           innerbox.style.left = boxleft+'px';
           innerbox.style.top = boxtop+'px';
           return false;
       }
       function mouseup(ev){
           document.onmousemove = null;
           document.onmouseup = null;

       }
       return false;
   };
   
});