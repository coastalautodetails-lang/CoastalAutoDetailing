
document.querySelector('.nav-toggle')?.addEventListener('click',()=>{
  document.querySelector('.nav-links').classList.toggle('show');
});
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});
function makeSlider(id, interval=4500){
  const root = document.getElementById(id);
  if(!root) return;
  const slides = root.querySelectorAll('.slide');
  let i = 0;
  setInterval(()=>{
    slides[i].classList.remove('active');
    i = (i+1)%slides.length;
    slides[i].classList.add('active');
  }, interval);
}
makeSlider('homeSlider', 4000);
makeSlider('reviewsSlider', 4200);
