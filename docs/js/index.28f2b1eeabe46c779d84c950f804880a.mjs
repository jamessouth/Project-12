import"./loadSW.dd8a4acf9e6cc36cc987fd7de727e7b2.mjs";const e=[...document.querySelectorAll(".projects div")],t=document.querySelectorAll(".contact div"),c=[...t].slice(0,t.length-2),o=document.querySelectorAll("section:not(#about)"),r=document.querySelector("span + button"),s=document.querySelector("#harp button"),l=document.querySelector("#harp img"),a=document.querySelector("#harp");function n({url:e}){const t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)}window.onload=()=>{Promise.all([fetch("./css/about.43c4ee6d58aceec030be22727cffd57f.css"),fetch("./images/resume.4a716cc436b3ec96245ed08d30033013.pdf"),fetch("./images/harpers.464c3ff4dbd4a4b3b120a760d58a20ba.jpg")]).then(([e,t,c])=>{document.querySelector("li:last-of-type a").href=t.url,n(e),l.src=c.url}).catch(e=>console.log("failed to fetch: ",e)),r.addEventListener("click",()=>{a.classList.add("show"),s.focus()}),s.addEventListener("click",()=>{a.classList.remove("show"),r.focus()}),CSS.paintWorklet&&CSS.paintWorklet.addModule("./js/ButtonPaint.ba004a0309ad1802a12e3dbed1017341.js")};const i=new IntersectionObserver((t,o)=>{t.filter(e=>e.isIntersecting).forEach(({target:t,target:{id:r}})=>{if("port"==r)Promise.all([fetch("./images/portsprite.07e30cce028fa46d5a97cf6ee0764ad3.jpg"),import("./portFactory.6d1d3cf87a9957c055c8bae770c898a5.mjs"),fetch("./css/port.ec98d0681eb9fa23ab664c609dc2b5a8.css")]).then(([t,c,o])=>{e.forEach((e,o)=>c.default(e,o,t.url)),n(o)}).catch(e=>console.log("failed to fetch: ",e)),CSS.paintWorklet&&CSS.paintWorklet.addModule("./js/BorderPaint.06b12bfdc1372af8ad70019faa1a4d3d.js");else if("articles"==r){const e=document.querySelectorAll(".arts img");Promise.all([fetch("./images/articlessprite.569e1732c2a1b6026e4b1ae75f48d43b.jpg"),fetch("./css/articles.cbc73aca88992c37a2277376a33a510b.css")]).then(([t,c])=>{[...e].forEach(e=>e.src=t.url),n(c)}).catch(e=>console.log("failed to fetch: ",e))}else Promise.all([fetch("./images/contsprite.a050a91d18db81e2a11c38fd2ea62c14.png"),import("./contFactory.49e807da8093866c8a10138f9dd516b8.mjs"),fetch("./css/cont.9195c05c3faeb56c2006c3d862b488d8.css")]).then(([e,t,o])=>{c.forEach((c,o)=>t.default(c,o,e.url)),n(o)}).catch(e=>console.log("failed to fetch: ",e));o.unobserve(t)})},{root:null,rootMargin:"0px 0px 240px 0px",threshold:.1});o.forEach(e=>i.observe(e));