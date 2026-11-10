(function(){
  var toggle=document.getElementById('nav-toggle'), header=document.getElementById('site-header');
  if(toggle){ toggle.addEventListener('click',function(){ var o=header.classList.toggle('open'); toggle.setAttribute('aria-expanded',o?'true':'false'); }); }
  window.addEventListener('message',function(e){
    if(e.origin!=='https://www.revivedhq.app'||!e.data) return;
    var f=document.getElementById('revived-lead-form');
    if(e.data.revivedLeadHeight&&f) f.style.height=e.data.revivedLeadHeight+'px';
    if(e.data.revivedLeadRedirect&&f){ f.parentNode.hidden=true; var d=document.getElementById('quote-done'); if(d){ d.hidden=false; d.scrollIntoView({behavior:'smooth',block:'center'}); } }
  });
})();