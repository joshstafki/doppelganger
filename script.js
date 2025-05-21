// Basic Portfolio Filtering (Example)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
 button.addEventListener('click', function() {
  const filter = this.dataset.filter;

  // Update active button state
  filterButtons.forEach(btn => btn.classList.remove('active'));
  this.classList.add('active');

  // Filter project cards
  projectCards.forEach(card => {
   if (filter === 'all' || card.dataset.category === filter) {
    card.style.display = 'block';
   } else {
    card.style.display = 'none';
   }
  });
 });
});

// --- JavaScript for more advanced animations, interactive elements (like particle effects),
// --- smooth scrolling, and other dynamic behaviors would be added here.
// --- For example, to initialize Particle.js (if included):
// --- particlesJS('particles-js', { /* Particle.js configuration */ });

// --- Example of Smooth Scrolling to Sections ---
document.querySelectorAll('a').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
   window.scrollTo({
    top: targetElement.offsetTop - 50, // Adjust for header height if needed
    behavior: 'smooth'
   });
  }
 });
});
