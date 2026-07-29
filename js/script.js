const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu(){
  mobileMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.textContent = isOpen ? '✕' : '☰';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Force-close the mobile menu if the window is resized past the
// mobile breakpoint while it's open.
window.addEventListener('resize', () => {
  if(window.innerWidth > 640){
    closeMenu();
  }
});
