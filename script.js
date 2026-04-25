  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  // Portfolio filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const gridItems  = document.querySelectorAll('.grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      gridItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;

        item.style.opacity = match ? '1' : '0';
        item.style.transform = match ? 'scale(1)' : 'scale(0.95)';
        item.style.pointerEvents = match ? 'auto' : 'none';
      });
    });
  });

  // Scroll reveal animation
  const revealEls = document.querySelectorAll('.grid-item, .service-card, .section-header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  // Reveal About section + traits on scroll
const aboutElements = document.querySelectorAll(
  '.about-image-wrap, .about-content, .trait'
);

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

aboutElements.forEach(el => aboutObserver.observe(el));