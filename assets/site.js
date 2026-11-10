(function(){
  var toggle=document.getElementById('nav-toggle'), header=document.getElementById('site-header');
  function setOpen(o){ header.classList.toggle('open',o); toggle.setAttribute('aria-expanded',o?'true':'false'); toggle.setAttribute('aria-label',o?'Close menu':'Open menu'); document.body.classList.toggle('menu-open',o); }
  if(toggle){ toggle.addEventListener('click',function(){ setOpen(!header.classList.contains('open')); }); }
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') setOpen(false); });
  Array.prototype.forEach.call(document.querySelectorAll('.dd-toggle'),function(b){ b.addEventListener('click',function(){ var p=b.parentNode, o=p.classList.toggle('open'); b.setAttribute('aria-expanded',o?'true':'false'); }); });
  window.addEventListener('resize',function(){ if(window.innerWidth>1100) setOpen(false); });
  var cc=document.getElementById('clean-carousel');
  if(cc){ var sl=cc.querySelectorAll('.clean-slide'), dots=document.querySelectorAll('.clean-dots i'), cur=0;
    function show(n){ cur=(n+sl.length)%sl.length; Array.prototype.forEach.call(sl,function(x,i){ x.hidden=(i!==cur); }); var sh=cc.closest('section').querySelector('.section-head'), c=sl[cur]; if(sh&&c){ var e=sh.querySelector('.eyebrow'),h=sh.querySelector('h2'),p=sh.querySelector('p'); if(e)e.innerHTML=c.getAttribute('data-eyebrow'); if(h)h.innerHTML=c.getAttribute('data-h2'); if(p)p.innerHTML=c.getAttribute('data-p'); } Array.prototype.forEach.call(dots,function(d,i){ d.classList.toggle('on',i===cur); }); }
    Array.prototype.forEach.call(document.querySelectorAll('.clean-arrow'),function(b){ b.addEventListener('click',function(){ show(cur+parseInt(b.getAttribute('data-dir'),10)); }); });
    Array.prototype.forEach.call(dots,function(d,i){ d.addEventListener('click',function(){ show(i); }); d.style.cursor='pointer'; }); }
  window.addEventListener('message',function(e){
    if(e.origin!=='https://www.revivedhq.app'||!e.data) return;
    var f=document.getElementById('revived-lead-form');
    if(e.data.revivedLeadHeight&&f) f.style.height=e.data.revivedLeadHeight+'px';
    if(e.data.revivedLeadRedirect&&f){ f.parentNode.hidden=true; var d=document.getElementById('quote-done'); if(d){ d.hidden=false; d.scrollIntoView({behavior:'smooth',block:'center'}); } }
  });
})();