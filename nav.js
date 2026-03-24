// ── SLIDE NAVIGATION ──
const slides=document.querySelectorAll('.slide'),T=slides.length,tabs=document.querySelectorAll('.top-tab');
let cur=0;
function go(i){if(i<0||i>=T||i===cur)return;slides[cur].classList.remove('on');cur=i;slides[cur].classList.add('on');upd()}
function next(){go(cur+1)}function prev(){go(cur-1)}
function upd(){tabs.forEach((t,i)=>t.classList.toggle('active',i===cur));document.getElementById('ctr').textContent=`${cur+1} / ${T}`;document.getElementById('pBtn').disabled=cur===0;document.getElementById('nBtn').disabled=cur===T-1}
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next()}if(e.key==='ArrowLeft'){e.preventDefault();prev()}});
