// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Reveal sections on scroll + animate skill bars
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    entry.target.querySelectorAll('.bar i').forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form validation (front-end only demo)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const text = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || text.length < 5) {
    msg.className = 'form-msg err';
    msg.textContent = 'Please enter your name, a valid email and a short message.';
    return;
  }
  msg.className = 'form-msg ok';
  msg.textContent = `Thanks ${name}! Your message is ready to send (connect a backend to deliver it).`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
