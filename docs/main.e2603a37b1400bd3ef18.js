(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/K0H":function(e,t){e.exports="images/8c68494554b441d71d7d9624104c9e59.jpg"},"1kRf":function(e,t){e.exports="images/3407378a2ec677602ead4a7ff11a2643.jpg"},"5+t+":function(e,t,o){},"5Xvu":function(e,t){e.exports="images/557861bd84a93629f8138f7dcd592b41.pdf"},"8Bqi":function(e,t){e.exports="images/7277c657aca55f84b180d8d99c8735bd.jpg"},"9Z1M":function(e,t){e.exports="images/723bf8772d7d5e0347f2933f5e6cf597.jpg"},CDjA:function(e,t){e.exports="images/e4916d7af9358a9b693a67f9d10034aa.png"},GQEG:function(e,t){e.exports="images/438c17272c5f0e9f4a6da34d3e4bc5bd.png"},L9Tn:function(e,t){e.exports="images/f50561f0701ba64315826deee4556c17.jpg"},MJYz:function(e,t){e.exports="images/3068096255d05dd193b4f5cf7fcb3e28.jpg"},QnIB:function(e,t){e.exports="images/8664b3ae3ddedd4b722689a82089a1dc.jpg"},"V/Gw":function(e,t){e.exports="images/32de76b37536cb67a21876b64d3ec4cb.jpg"},W2si:function(e,t){e.exports="images/0a8f23baf951cd26e080d41c534c6b83.png"},WyTj:function(e,t){e.exports="images/38128e3e605efa9c9dc9aecec6ffe3f7.jpg"},Ys7E:function(e,t){e.exports="images/13d57f7a705905a5e0a70025ae5e9e22.png"},bIuB:function(e,t){e.exports="images/0d460c6cd15e9ed3f683a05d1a282fbb.jpg"},e6Wu:function(e,t,o){"use strict";o.r(t);o("pNMO"),o("4Brf"),o("0oug"),o("ma9I"),o("TeQF"),o("pjDv"),o("yq1k"),o("4mDm"),o("07d7"),o("4l63"),o("5s+n"),o("JfAA"),o("JTJg"),o("PKPk"),o("FZtP"),o("3bBZ"),o("5+t+"),o("ls82");var r,n=o("cCwH");function a(e,t,o,r,n,a,c){try{var i=e[a](c),s=i.value}catch(e){return void o(e)}i.done?t(s):Promise.resolve(s).then(r,n)}var c=document.querySelector("main"),i=document.createElement("div"),s=document.createElement("button"),l=document.createElement("div"),d=document.createElement("button");function u(e){e.preventDefault(),r=e,s.style.display="block",i.style.display="block",s.addEventListener("click",p)}function p(){return f.apply(this,arguments)}function f(){var e;return e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.style.display="none",i.style.display="none",e.prev=2,e.next=5,r.prompt();case 5:return e.next=7,r.userChoice;case 7:"accepted"!==e.sent.outcome&&window.removeEventListener("beforeinstallprompt",u),r=null,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0),window.removeEventListener("beforeinstallprompt",u);case 16:case"end":return e.stop()}},e,null,[[2,12]])}),(f=function(){var t=this,o=arguments;return new Promise(function(r,n){var c=e.apply(t,o);function i(e){a(c,r,n,i,s,"next",e)}function s(e){a(c,r,n,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}if(s.textContent="install me!",s.className="installbtn",i.className="installdiv",d.textContent="new content: reload!",d.className="reloadbtn",l.className="reloaddiv","serviceWorker"in navigator){var m=new n.a("./service-worker.js");document.body.insertBefore(s,c),document.body.insertBefore(i,c),d.addEventListener("click",function(){m.addEventListener("controlling",function(){window.location.reload()}),m.messageSW({type:"SKIP_WAITING"})}),m.addEventListener("waiting",function(){document.body.insertBefore(d,c),document.body.insertBefore(l,c),d.style.display="block",l.style.display="block"}),window.addEventListener("beforeinstallprompt",u),window.addEventListener("appinstalled",function(){var e=document.querySelector("h1");e.textContent="Thank you!",setTimeout(function(){e.textContent="James South"},6500)}),m.register()}var h=o("5Xvu"),b=o.n(h);var v=o("V/Gw"),g=o.n(v),y=o("tXfi"),j=o.n(y),w=o("lqt+"),x=o.n(w),k=o("/K0H"),A=o.n(k),E=o("MJYz"),q=o.n(E),S=o("1kRf"),B=o.n(S),z=o("bIuB"),C=o.n(z),I=o("9Z1M"),L=o.n(I),W=o("QnIB"),T=o.n(W),P=o("WyTj"),D=o.n(P),M=o("L9Tn"),G=o.n(M),J=o("8Bqi"),F=o.n(J),N=o("txBW"),Y=o.n(N),O=[{title:"random quotes",live:"https://jamessouth.github.io/random-quotes/",code:"https://github.com/jamessouth/random-quotes",alt:"part of a famous quote",tech1:"javascript",src:g.a,liveAria:"live site for random quotes project",codeAria:"code for random quotes project"},{title:"directory",tech1:"pwa react a11y",tech2:"tdd ajax fp",live:"https://jamessouth.github.io/directory/",code:"https://github.com/jamessouth/directory",alt:"employee info cards laid out in a grid",src:D.a,liveAria:"live site for employee directory project",codeAria:"code for employee directory project"},{title:"dashboard",tech1:"pwa vue vuex",tech2:"ajax chart.js fp",live:"https://jamessouth.github.io/dashboard/",code:"https://github.com/jamessouth/dashboard",alt:"a doughnut chart",src:T.a,liveAria:"live site for web app dashboard project",codeAria:"code for web app dashboard project"},{title:"vue-style-lint",tech1:"node es6 fp ci tdd",tech2:"npm|v1.0.3",live:"https://www.npmjs.com/package/vue-style-lint",code:"https://github.com/jamessouth/vue-style-lint",alt:"output of a computer terminal",src:L.a,liveAria:"live site for vue-style-lint project",codeAria:"code for vue-style-lint project"},{title:"web dev kit",live:"https://chrome.google.com/webstore/detail/web-dev-kit/geedfiohcopjhgancckdfanhobhfbgmm",code:"https://github.com/jamessouth/webdevkit",alt:"a laptop on a desk",tech1:"javascript",tech2:"chrome extension",src:Y.a,liveAria:"live site for web dev kit project",codeAria:"code for web dev kit project"},{title:"puzzle generator",tech1:"angular",tech2:"typescript",live:"https://jamessouth.github.io/fifteen-puzzle-generator/home",code:"https://github.com/jamessouth/fifteen-puzzle-generator",alt:"an unsolved sliding block puzzle",src:A.a,liveAria:"live site for 15 puzzle generator project",codeAria:"code for 15 puzzle generator project"},{title:"tic tac toe",live:"https://jamessouth.github.io/tic-tac-toe/",code:"https://github.com/jamessouth/tic-tac-toe",alt:"a tic tac toe game",tech1:"javascript",src:x.a,liveAria:"live site for tic tac toe project",codeAria:"code for tic tac toe project"},{title:"timezones",tech1:"node mongodb",tech2:"react graphql",code:"https://github.com/jamessouth/timezones",alt:"a graphql query string and response",src:j.a,codeAria:"code for timezones project"},{title:"portfolio",tech1:"pwa webpack a11y paint",tech2:"components workers sass",code:"https://github.com/jamessouth/portfolio",alt:"hovering cubes with images of my websites on each side",src:F.a,codeAria:"code for portfolio project"},{title:"face scramble!",tech1:"angular typescript",tech2:"nativescript",code:"https://github.com/jamessouth/face-scramble",alt:"a 15 puzzle being solved along with moves and elapsed time",src:C.a,codeAria:"code for face scramble project"},{title:"twitter interface",tech1:"node express",tech2:"pug es6 ajax",code:"https://github.com/jamessouth/twitter-interface",alt:"twitter sign up and login buttons",src:B.a,codeAria:"code for twitter interface project"},{title:"web scraper",code:"https://github.com/jamessouth/web-scraper",alt:"a stuffed frog",tech1:"node",tech2:"javascript",src:q.a,codeAria:"code for node.js web scraper project"},{title:"flickr gallery",tech1:"react",tech2:"ajax",code:"https://github.com/jamessouth/react-flickr-gallery",alt:"a gallery of pictures",src:G.a,codeAria:"code for flickr gallery project"}],R=o("W2si"),Q=o.n(R),Z=o("GQEG"),H=o.n(Z),K=o("Ys7E"),X=o.n(K),V=o("CDjA"),U=o.n(V),_=o("qEpC"),$=o.n(_),ee=[{link:"mailto:jamesdanielsouth@outlook.com",alt:"open your email client to email me",src:Q.a},{link:"https://github.com/jamessouth?tab=repositories",alt:"go to my github repos",src:H.a},{link:"https://twitter.com/dsouthbot",alt:"go to my twitter",src:X.a},{link:"https://stackoverflow.com/users/9996080/james-south?tab=profile",alt:"go to my stack overflow profile",src:U.a},{link:"https://dev.to/jamessouth",alt:"go to my dev community profile",src:$.a}];function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=[],r=!0,n=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(o.push(c.value),!t||o.length!==t);r=!0);}catch(e){n=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function oe(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var re=document.querySelector("li button"),ne=document.querySelector("aside button"),ae=document.querySelector("aside"),ce=document.querySelectorAll("li a"),ie=document.querySelectorAll(".projects div"),se=document.querySelectorAll(".contact div"),le=document.querySelector("#map"),de=!0;if(re.addEventListener("click",function(){if(de){var e=function(e){var t=document.createDocumentFragment(),o=document.createElement("object");o.setAttribute("type","application/pdf"),o.setAttribute("data",e);var r=document.createElement("iframe");r.setAttribute("title","pdf of my résumé"),r.setAttribute("src",e);var n=document.createElement("p");n.textContent="Your browser does not support PDFs. ";var a=document.createElement("a");return a.setAttribute("href",e),a.setAttribute("download","james south resume"),a.textContent="Download PDF",n.appendChild(a),r.appendChild(n),o.appendChild(r),t.appendChild(o),t}(b.a);ae.insertBefore(e,ne),de=!1}ae.style.display="block",re.blur(),[re].concat(oe(ce)).forEach(function(e){return e.setAttribute("tabindex","-1")})}),ne.addEventListener("click",function(){ae.style.display="none",re.focus(),[re].concat(oe(ce)).forEach(function(e){return e.removeAttribute("tabindex")})}),CSS.paintWorklet&&(CSS.paintWorklet.addModule("./BorderPaint.min.js"),CSS.paintWorklet.addModule("./ButtonBG.min.js")),window.IntersectionObserver&&window.customElements&&HTMLElement.prototype.attachShadow){var ue={root:null,rootMargin:"0px 0px 0px 0px",threshold:.1};Promise.all([o.e(5).then(o.bind(null,"N1YY")),o.e(2).then(o.bind(null,"vSFj"))]).then(function(e){var t=te(e,2),r=t[0],n=t[1],a=new IntersectionObserver(function(e,t){return function(r,n){r.filter(function(e){return e.isIntersecting}).forEach(function(r){var a=r.target,c=r.target.id;c.includes("x")?(t(a,ee[parseInt(c,10)]),a.removeAttribute("tabindex")):"map"==c?o.e(0).then(o.t.bind(null,"t9Rv",7)).then(function(e){return a.children[2].src=e.default}):e(a,O[c]),n.unobserve(a)})}}(r.default,n.default),ue);[].concat(oe(ie),oe(se),[le]).forEach(function(e){return a.observe(e)})}).catch(function(e){return console.log(e)})}else Promise.all([o.e(6).then(o.bind(null,"pBOZ")),o.e(3).then(o.bind(null,"LBw0")),o.e(0).then(o.t.bind(null,"t9Rv",7)),o.e(1).then(o.t.bind(null,"cU2F",7))]).then(function(e){var t=te(e,3),o=t[0],r=t[1],n=t[2];o.default(ie,O),se.forEach(function(e){return e.removeAttribute("tabindex")}),r.default(se,ee),le.children[2].src=n.default}).catch(function(e){return console.log(e)})},"lqt+":function(e,t){e.exports="images/318060a20bda21e9ef96349c2d40ca96.jpg"},qEpC:function(e,t){e.exports="images/fbcf932850b6b4285f648abd162b824e.png"},tXfi:function(e,t){e.exports="images/215fae4446e393d5708cd5cdd52ced8d.jpg"},txBW:function(e,t){e.exports="images/b97c47e19bede7f984fe365d64bfc848.jpg"}},[["e6Wu",7,8]]]);
//# sourceMappingURL=main.e2603a37b1400bd3ef18.js.map