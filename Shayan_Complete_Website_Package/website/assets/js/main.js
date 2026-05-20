
(function(){
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===current){a.classList.add('active')}
  });
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){toggle.addEventListener('click',()=>links.classList.toggle('open'))}
  document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter=btn.dataset.filter;
      document.querySelectorAll('[data-project-category]').forEach(card=>{
        const show = filter==='All' || card.dataset.projectCategory===filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();
