// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', () => mainNav.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Lead form handling
const leadForm = document.getElementById('lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formEl = document.querySelector('.form-fields');
    const successEl = document.querySelector('.form-success');
    if (formEl) formEl.style.display = 'none';
    if (successEl) successEl.style.display = 'block';
    // In production, wire this up to your CRM / email service / webhook.
    console.log('Lead submitted:', Object.fromEntries(new FormData(leadForm)));
  });
}

// Sticky header shrink
const header = document.querySelector('header.main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 22px rgba(0,0,0,0.35)';
  } else {
    header.style.boxShadow = '0 2px 18px rgba(0,0,0,0.25)';
  }
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
