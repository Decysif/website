document.getElementById('menu-button').addEventListener('onclick', function () {
  var menu = document.getElementById('main-navigation');
  var expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('db');
});
