
// Simple interactive behavior for the portfolio
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // simple theme toggle (light/dark)
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light');
    if(document.documentElement.classList.contains('light')){
      document.documentElement.style.setProperty('--bg','#f7f9fc');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--muted','#556075');
      document.documentElement.style.setProperty('--accent','#7c3aed');
      document.documentElement.style.setProperty('color-scheme','light');
    } else {
      document.documentElement.style.removeProperty('--bg');
      document.documentElement.style.removeProperty('--card');
      document.documentElement.style.removeProperty('--muted');
      document.documentElement.style.removeProperty('--accent');
      document.documentElement.style.removeProperty('color-scheme');
    }
  });

  // simple smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // contact form simple success feedback
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      // allow default to send to formspree (or replace action)
      setTimeout(()=>alert('Thanks! If action is placeholder, replace form action with your endpoint.'), 300);
    });
  }
});
