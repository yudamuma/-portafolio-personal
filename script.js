(function(){
  document.documentElement.classList.add('js');
  var g=document.querySelector('a.tile[data-web]');
  if(g){ var mob=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    g.setAttribute('href', mob? g.getAttribute('data-mail') : g.getAttribute('data-web'));
    if(mob){ g.removeAttribute('target'); } else { g.setAttribute('target','_blank'); } }
  var secs=[].slice.call(document.querySelectorAll('.reveal'));
  var links=[].slice.call(document.querySelectorAll('nav.sidenav a'));
  if(!('IntersectionObserver' in window)){ secs.forEach(function(e){e.classList.add('in');}); return; }
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); } }); },{threshold:0.12});
  secs.forEach(function(e){ io.observe(e); });
  var ao=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){
    links.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id); }); } }); },{rootMargin:'-35% 0px -55% 0px'});
  secs.forEach(function(e){ ao.observe(e); });
})();