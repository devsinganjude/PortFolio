// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const saved = localStorage.getItem('theme');

// Set initial theme
if (saved === 'light') {
  html.classList.add('light');
  if (themeToggle) themeToggle.textContent = '🌞';
} else {
  html.classList.remove('light');
  if (themeToggle) themeToggle.textContent = '🌙';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = html.classList.contains('light');

    if (isCurrentlyLight) {
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '🌙';
    } else {
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌞';
    }

    // Add rotation animation
    themeToggle.style.animation = 'none';
    setTimeout(() => {
      themeToggle.style.animation = 'rotate 0.6s ease-out';
    }, 10);
  });
}

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
    // Toggle mobile menu via CSS class
    navLinks.classList.toggle('mobile-menu-open');
  });

  // Close menu when link clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('mobile-menu-open');
    });
  });
}

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar background and auto-hide on scroll
const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Background toggling via class
  if (currentScrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }

  // Hide/Show navbar based on scroll direction
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down -> hide
    nav.classList.add('nav-hidden');
  } else {
    // Scrolling up or at top -> show
    nav.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#home') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// contact form handling (simulated)
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formStatus) {
      formStatus.textContent = 'Sending...';
      formStatus.style.color = 'rgba(255, 255, 255, 0.7)';
    }
    // simulate network request
    setTimeout(() => {
      if (formStatus) {
        formStatus.textContent = '✓ Thanks — I will get back to you soon!';
        formStatus.style.color = 'rgba(11, 197, 234, 0.9)';
        formStatus.style.animation = 'slideInContent 0.5s ease-out';
      }
      form.reset();
    }, 900);
  });
}

// dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Parallax effect on scroll (subtle)
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallaxElements = document.querySelectorAll('.floating');
  parallaxElements.forEach(el => {
    el.style.transform = `translateY(${scrolled * 0.05}px) rotate(${scrolled * 0.02}deg)`;
  });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Interactive 3D Sphere TagCloud
const techTags = [
  '☁️ AWS', '🐳 Docker', '🐧 Linux', '🐍 Python', '☕ Java',
  '⚛️ React', '🟢 Node.js', '🐙 Git', '⚙️ C', '🚢 Kubernetes',
  '🔧 DevOps', '🌐 HTML5', '🎨 CSS3', '🛡️ Security'
];

if (document.querySelector('.sphere-content')) {
  TagCloud('.sphere-content', techTags, {
    radius: window.innerWidth < 700 ? 140 : 200,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  });
}

