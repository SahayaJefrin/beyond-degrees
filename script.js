// ─── NAV ───
function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('sec-'+id).classList.add('active');
  const btns=document.querySelectorAll('.nav-btn');
  btns.forEach(b=>{if(b.getAttribute('onclick').includes("'"+id+"'"))b.classList.add('active')});
  window.scrollTo({top:0,behavior:'smooth'});
}

// ─── AGENDA ───
function markAgenda(el){
  document.querySelectorAll('.agenda-item').forEach(i=>i.classList.remove('current-item'));
  el.classList.add('current-item');
}

// ─── INIT ───
// Optional init scripts can go here
