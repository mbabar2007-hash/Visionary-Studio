// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


// ================= HAMBURGER MENU =================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// close mobile menu when clicking links
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}


// ================= PORTFOLIO FILTER =================
const filterBtns = document.querySelectorAll('.filter-btn');
const gridItems = document.querySelectorAll('.grid-item');

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


// ================= SCROLL REVEAL (FIXED + COMPLETE) =================
const revealEls = document.querySelectorAll(`
  .grid-item,
  .service-card,
  .package-card,
  .section-header,
  .packages-note,
  .about-image-wrap,
  .about-content,
  .trait,
  .contact-left,
  .contact-right
`);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealEls.forEach(el => observer.observe(el));


// ================= ABOUT TRAITS STAGGER =================
const aboutTraits = document.querySelectorAll('.trait');

const traitObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 120);

    }
  });
}, {
  threshold: 0.2
});

aboutTraits.forEach(el => traitObserver.observe(el));

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = new FormData(contactForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString()
  })
  .then(() => {
    contactForm.querySelectorAll('.form-row, .form-group, .form-submit').forEach(el => {
      el.style.display = 'none';
    });
    document.getElementById('formSuccess').classList.add('show');
  })
  .catch(() => {
    alert('Something went wrong. Please try again.');
  });
});
