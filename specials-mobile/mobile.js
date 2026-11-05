(function(){
 var $=function(s){return document.querySelector(s)};
 var rail=$('#rail'),dp=$('#dp'),dpb=$('#dpb'),gp=$('#gp');
 try{var n=new Date(),td=n.getFullYear()+'-'+('0'+(n.getMonth()+1)).slice(-2)+'-'+('0'+n.getDate()).slice(-2);
  [].forEach.call(document.querySelectorAll('.day'),function(c){var d=c.getAttribute('data-date');if(d<td)c.classList.add('past');else if(d===td)c.classList.add('is-today');});}catch(e){}
 function show(el){}
 rail.addEventListener('click',function(e){var c=e.target.closest('.day');if(!c)return;
  [].forEach.call(document.querySelectorAll('.day.sel'),function(x){x.classList.remove('sel')});c.classList.add('sel');
  var t=c.querySelector('.tpl');dpb.innerHTML=t?t.innerHTML:'';dp.classList.add('on');setTimeout(function(){show(dp)},50)});
 $('#open').addEventListener('click',function(){gp.classList.toggle('on');if(gp.classList.contains('on'))setTimeout(function(){show(gp)},50)});
 [].forEach.call(document.querySelectorAll('.panel .x'),function(b){b.addEventListener('click',function(){b.parentNode.classList.remove('on');[].forEach.call(document.querySelectorAll('.day.sel'),function(x){x.classList.remove('sel')})})});
 var pg=$('#pg');function prog(){var vis=[].filter.call(rail.children,function(c){return c.offsetParent}).length,w=rail.scrollWidth-rail.clientWidth,p=w>0?rail.scrollLeft/w:0,f=Math.min(1,rail.clientWidth/rail.scrollWidth);pg.style.width=(f*100)+'%';pg.style.marginLeft=(p*(1-f)*100)+'%'}
 rail.addEventListener('scroll',prog,{passive:true});prog();window.addEventListener('load',prog);
})();
