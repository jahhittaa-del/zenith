const enter=document.getElementById('enter');
const enterBtn=document.getElementById('enterBtn');
const audio=document.getElementById('audio');
const play=document.getElementById('play');

enterBtn.addEventListener('click', async ()=>{
  enter.classList.add('hidden');
  try { await audio.play(); play.textContent='Ⅱ'; } catch(e) {}
});
play.addEventListener('click', async ()=>{
  if(audio.paused){await audio.play();play.textContent='Ⅱ'}
  else{audio.pause();play.textContent='▶'}
});
