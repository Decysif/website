document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector('.hamburger-button');
  const mainNav = document.querySelector('#main-navigation');

  toggleButton.addEventListener('click', function() {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('open');
  });
});
