// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  // Force CSS reload to prevent caching issues
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('v', Date.now());
    link.href = url.toString();
  });

  // Mobile menu functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });
  }

  // Update copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
