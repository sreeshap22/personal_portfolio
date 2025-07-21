// Preloader fade out
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  pre.style.opacity = '0';
  setTimeout(() => pre.style.display = 'none', 600);

  // Animate fade-up elements
  document.querySelectorAll('.fade-up').forEach(el => {
    el.classList.add('in-view');
  });
});

// Scroll-triggered reveal for sections, timeline, work, etc.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target); // Only animate once
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  'header, section, .timeline-item, .work-card, .chat, .site-footer'
).forEach(el => {
  revealObserver.observe(el);
});
// Dot navigation: update active dot based on scroll
const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.dot');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href') === `#${id}`) {
          dot.classList.add('active');
        }
      });
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  sectionObserver.observe(section);
});
//Header scroll change
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


