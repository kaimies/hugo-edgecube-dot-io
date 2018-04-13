document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {

    // Add a click event on each of them
    navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetElement = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');

      });
    });
  }

  document.addEventListener('scroll', function (e) {
    animateNavbar();
  });

  function animateNavbar() {
    const position = scrollTop();

    if (position > 100) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }

  function scrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  const navbar = document.querySelector('.navbar');
  let navbarHeight = navbar.offsetHeight;

  const scroll = SmoothScroll('a[href*="#"]', {
    offset: 50
  });

  gumshoe.init({
    offset: 50
  });
});