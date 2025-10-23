// Small interactive helpers: reveal on scroll, nav toggle, resume download wiring
document.addEventListener('DOMContentLoaded', ()=>{
  // set year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // IntersectionObserver for reveal animations with stagger classes
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        // add stagger classes based on position in DOM
        const children = Array.from(document.querySelectorAll('.animate'));
        const idx = children.indexOf(e.target) % 6;
        e.target.classList.add('in-view', `stagger-${(idx%4)+1}`);
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.animate').forEach(el=>obs.observe(el));

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', ()=>{
    const shown = navLinks.style.display === 'flex';
    navLinks.style.display = shown ? '' : 'flex';
  });

  // Wire resume download buttons to the included PDF (if present)
  const resumePath = '../My_CV.pdf'; // default relative path from portfolio-site folder
  const resumeButtons = [document.getElementById('downloadResume'), document.getElementById('heroResume'), document.getElementById('formResume')];
  resumeButtons.forEach(btn=>{
    if(!btn) return;
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      // attempt to open the PDF in a new tab
      const url = resumePath;
      window.open(url, '_blank');
    });
  });

  // Simple client-side contact form handler (no-backend)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    status.textContent = 'Thanks — this is a demo form that doesn\'t send messages.';
  });

  // Typing animation for hero roles
  const roles = ['Data Analyst','Machine Learning Engineer','Front-End & Mobile App Developer'];
  const typedEl = document.getElementById('typed');
  let rIdx=0, cIdx=0, deleting=false;
  function tick(){
    const current = roles[rIdx];
    if(!deleting){
      typedEl.textContent = current.slice(0, cIdx+1);
      cIdx++;
      if(cIdx === current.length){
        deleting = true;
        setTimeout(tick, 900);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, cIdx-1);
      cIdx--;
      if(cIdx === 0){
        deleting = false;
        rIdx = (rIdx+1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 60 : 90);
  }
  if(typedEl) tick();

  // Mouse parallax for hero blob and image
  const blob = document.querySelector('.hero-blob');
  const heroImage = document.querySelector('.hero-image');
  if(blob || heroImage){
    document.addEventListener('mousemove', (ev)=>{
      const x = (ev.clientX / window.innerWidth - 0.5) * 30;
      const y = (ev.clientY / window.innerHeight - 0.5) * 20;
      if(blob) blob.style.transform = `translate(${x}px, ${y}px) rotate(8deg)`;
      if(heroImage) heroImage.style.transform = `translate(${x/6}px, ${y/6}px)`;
    });
  }
});
