(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const d=[{name:"Dragon",picture:"../assets/dragon-6c75975b.png",hp:"16",gold:[1,2,3]},{name:"Oiseau",picture:"../assets/oiseau-856371c6.png",hp:"10",gold:[1,2,3]},{name:"Pingouin",picture:"../assets/pingouin-204a4d1e.png",hp:"13",gold:[1,2,3]}];async function f(){let i=1,r=0;document.querySelector(".argent").innerText=r;const e=d[Math.floor(Math.random()*3)];let u=e.hp;document.querySelector(".name").innerText=e.name,document.querySelector(".img").src=e.picture,document.querySelector(".hp").innerText=e.hp;const t=document.querySelector(".body_section_monstre"),o=document.querySelector(".color");let n=Math.ceil(e.hp*.6),s=Math.ceil(e.hp*.3);function p(){if(console.log(s),console.log(n),n>=e.hp&&(o.setAttribute("style","background-color:orange;"),s>=e.hp&&o.setAttribute("style","background-color:red;")),e.hp=e.hp-i,console.log(e.hp),document.querySelector(".hp").innerText=e.hp,e.hp<=0){const c=d[Math.floor(Math.random()*3)];document.querySelector(".name").innerText=c.name,document.querySelector(".img").src=c.picture,document.querySelector(".hp").innerText=c.hp,o.setAttribute("style","background-color:rgb(0, 211, 0);"),e.hp=c.hp,n=Math.ceil(c.hp*.6),s=Math.ceil(c.hp*.3),h(),console.log("Monstre mort"),c.hp<=0&&(e.hp=u,n=Math.ceil(e.hp*.6),s=Math.ceil(e.hp*.3),document.querySelector(".hp").innerText=e.hp)}}t.addEventListener("click",p);function h(){r=r+e.gold[Math.floor(Math.random()*3)],document.querySelector(".argent").innerText=r}let a=1,l=10;const m=document.querySelector(".atq_de_base");document.querySelector(".lvlATQ").innerText=a,document.querySelector(".priceATQ").innerText=l;function g(){r>=l?(r=r-l,document.querySelector(".argent").innerText=Math.trunc(r),a=a+1,document.querySelector(".lvlATQ").innerText=a,i=i+1,l=l*1.8,document.querySelector(".priceATQ").innerText=Math.trunc(l)):console.log("il me manque de l'argent")}m.addEventListener("click",g)}f();