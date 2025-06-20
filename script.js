const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navLinkItems = navLinks.querySelectorAll("a");

// mobile menus
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// mobile part for more accessibility ig
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
