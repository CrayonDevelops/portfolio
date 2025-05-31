// Dynamic greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
let timeGreeting = "Hi";
if (hour < 12) timeGreeting = "Good morning";
else if (hour < 18) timeGreeting = "Good afternoon";
else timeGreeting = "Good evening";
greeting.textContent = `${timeGreeting}, I'm Abdul Rahman Mohammed`;

// Generic scroll + highlight function
function scrollAndHighlight(targetId, element, time = 2000) {
  document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  element.classList.add('highlight');
  setTimeout(() => {
    element.classList.remove('highlight');
  }, time);
}

// CONTACT
document.getElementById('contact-link').addEventListener('click', (e) => {
  e.preventDefault();
  const heading = document.getElementById('contact-heading');
  scrollAndHighlight('contact', heading);
});

// SKILLS
document.querySelector('a[href="#skills"]').addEventListener('click', (e) => {
  e.preventDefault();
  const skillButtons = document.querySelectorAll('.skill-btn');
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  skillButtons.forEach(btn => btn.classList.add('highlight'));
  setTimeout(() => {
    skillButtons.forEach(btn => btn.classList.remove('highlight'));
  }, 2000);
});

// ABOUT
document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
  e.preventDefault();
  const aboutText = document.getElementById('about-text');
  scrollAndHighlight('about', aboutText);
});
