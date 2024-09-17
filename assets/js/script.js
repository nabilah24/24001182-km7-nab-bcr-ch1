// <!-- navbar transparent to solid -->
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-solid');
      navbar.classList.remove('navbar-transparent');
      console.log('Navbar solid');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('navbar-solid');
      console.log('Navbar transparent');
    }
  });
});

// section active
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50; // Penyesuaian offset jika navbar fixed
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});


(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });


})(jQuery);

