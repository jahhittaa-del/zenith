const gate=document.getElementById('gate'),enter=document.getElementById('enter'),audio=document.getElementById('audio'),musicBtn=document.getElementById('musicBtn');
enter.onclick=async()=>{gate.classList.add('hide');try{await audio.play();musicBtn.textContent='Ⅱ'}catch(e){}};
musicBtn.onclick=async()=>{if(audio.paused){await audio.play();musicBtn.textContent='Ⅱ'}else{audio.pause();musicBtn.textContent='▶'}};

const text='zenith',typing=document.getElementById('typing');let i=0;function type(){if(i<=text.length){typing.textContent=text.slice(0,i++);setTimeout(type,120)}}type();

function clock(){document.getElementById('clock').textContent=new Date().toLocaleTimeString([], {hour12:false})}clock();setInterval(clock,1000);

const dot=document.getElementById('cursorDot');addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'});

const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let ps=[];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight}
function init(){ps=Array.from({length:85},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:.3+Math.random()*1.4,v:.05+Math.random()*.22,a:.08+Math.random()*.4}))}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);for(const p of ps){p.y-=p.v;if(p.y<0)p.y=canvas.height;ctx.globalAlpha=p.a;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
addEventListener('resize',()=>{resize();init()});resize();init();draw();
