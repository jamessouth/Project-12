(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{U6hr:function(e,t){e.exports="images/explosion.84627f9421b5fb5af82d16343678f266.gif"},mRv3:function(e,t,n){"use strict";n.r(t);n("rGqo");var o=n("U6hr"),c=n.n(o),l=document.querySelector(".hold"),r=document.querySelector(".slider input"),s=document.querySelector("#destroy"),d=document.querySelector('label[for="destroy"]'),i=document.querySelector("h1:first-of-type"),a=document.querySelector("select"),u=document.querySelector('label[for="sec"]'),y=document.querySelector("select + div"),p=new Image,f=new Image,m=document.querySelectorAll(".photo-cube"),h=y.querySelector("button"),b=document.querySelectorAll(".subhead:nth-of-type(odd)"),v=document.querySelectorAll(".subhead:nth-of-type(even)");function g(e){e.addEventListener("animationend",function(){p.style.display="block",i.style.marginBottom="0",e.style.display="none",e.parentNode.style.display="none";for(var t=0;t<2;t+=1)b[t].style.display="none",v[t].style.display="none";window.innerWidth<768?(p.style.width="560px",p.style.height="420px",p.style.marginTop="".concat(document.documentElement.clientHeight/2-167-210,"px")):(f.style.display="block",p.style.marginTop="".concat((r.value-220)/3+26,"px"),f.style.marginTop="".concat((r.value-220)/3+0,"px"))}),e.classList.add("blowup"),setTimeout(function(){[p,f].forEach(function(e){return e.style.display="none"})},1e3*a.value+5490)}s.checked=!1,a.value=0,s.addEventListener("change",function(e){e.target.checked?([p,f].forEach(function(e,t){e.setAttribute("alt","explosion"),e.classList.add("explode"),e.onload=function(){l.insertBefore(e,m[t].parentNode),[a,u,y].forEach(function(e){return e.style.display="block"})},e.src=c.a}),d.textContent="DESTROY!",a.removeAttribute("disabled")):(d.textContent="do not destroy",[a,u,y].forEach(function(e){return e.style.display="none"}),a.setAttribute("disabled",""))}),h.addEventListener("click",function(){g(m[0]),g(m[1])}),a.addEventListener("change",function(){var e=this.dataset.sizing;document.documentElement.style.setProperty("--".concat(this.name),this.value+e)})}}]);
//# sourceMappingURL=destroyOpt.ab5271a801fda8674207.js.map