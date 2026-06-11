
const text='Happy Birthday Radha! 🎂✨ Today is a celebration of the wonderful person you are.';
let i=0;
function type(){if(i<text.length){typewriter.innerHTML+=text.charAt(i++);setTimeout(type,40);}}
function scrollToContent(){content.scrollIntoView({behavior:'smooth'});}
const wishes=['🌟 May every day bring you a reason to smile.','💖 May happiness follow you wherever you go.','✨ May your dreams become reality.'];
function newWish(){wish.innerText=wishes[Math.floor(Math.random()*wishes.length)];}
function toggleTheme(){document.body.classList.toggle('dark-mode');}
function toggleMusic(){const m=document.getElementById('bgMusic');m.paused?m.play():m.pause();}
function blowCandle(el){el.innerHTML='💨';confetti({particleCount:40,spread:70});}
function openGift(){
giftText.innerText='💝 Radha, thank you for being an incredible friend. Happy Birthday!';
const end=Date.now()+4000;
const t=setInterval(()=>{
confetti({particleCount:80,spread:180,origin:{x:Math.random(),y:Math.random()*0.6}});
if(Date.now()>end)clearInterval(t);
},250);
}
function floatEmoji(icon,cls){
const d=document.createElement('div');
d.className=cls;d.innerHTML=icon;
d.style.left=Math.random()*100+'vw';
d.style.animation='floatUp 10s linear forwards';
document.body.appendChild(d);
setTimeout(()=>d.remove(),10000);
}
setInterval(()=>floatEmoji('🎈','balloon'),1500);
setInterval(()=>floatEmoji('💖','heart'),2200);
window.onload=()=>{type();confetti({particleCount:200,spread:100});};
