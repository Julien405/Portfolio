/* ══════════════════════════════════════════
   PORTFOLIO BTS SIO SISR — script.js
   ══════════════════════════════════════════ */

/* ─── Année footer ──────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ─── Hamburger Menu ─────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* Fermer le menu au clic sur un lien */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ─── Active Nav Link au scroll ──────────── */
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerNav.observe(s));

/* ─── Scroll Reveal ──────────────────────── */
const reveals = document.querySelectorAll('.reveal');

const observerReveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

reveals.forEach(el => observerReveal.observe(el));

/* ─── Stage Accordion ────────────────────── */
function toggleStage(header) {
  const card = header.closest('.stage-card');
  const isOpen = card.classList.contains('open');

  /* Fermer tous */
  document.querySelectorAll('.stage-card.open').forEach(c => {
    if (c !== card) c.classList.remove('open');
  });

  card.classList.toggle('open', !isOpen);
}

/* ─── Veille Tabs ────────────────────────── */
function switchVeille(btn, id) {
  document.querySelectorAll('.veille-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.veille-panel').forEach(p => p.classList.add('hidden'));

  btn.classList.add('active');
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.remove('hidden');
}

/* ─── Navbar scroll shadow ───────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 32px rgba(0,0,0,0.6)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });
