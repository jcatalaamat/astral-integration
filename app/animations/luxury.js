/* Luxury Animation Handlers */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all animation observers
  initLuxuryScrollAnimations();
  initParallaxEffects();
  initSmoothScrolling();
  initDivineGlowEffects();
});

/**
 * Luxury Scroll Animations
 * Handles elegant fade-in effects with timing based on scroll position
 */
function initLuxuryScrollAnimations() {
  console.log("Initializing luxury scroll animations");
  
  // Create an intersection observer for fade-up animations
  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Optional: unobserve after animation is triggered
        // fadeUpObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px into viewport
    threshold: 0.1
  });
  
  // Observe all elements with luxury animation classes
  document.querySelectorAll('.animate-luxury-fade-up, .sacred-reveal, .divine-text-fade').forEach(element => {
    fadeUpObserver.observe(element);
  });
  
  // Add a small delay to ensure correct observation
  setTimeout(() => {
    document.querySelectorAll('.animate-luxury-fade-up, .sacred-reveal, .divine-text-fade').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.classList.add('in-view');
      }
    });
  }, 300);
}

/**
 * Parallax Effects
 * Creates depth and dimension with subtle movement based on scroll and mouse position
 */
function initParallaxEffects() {
  const parallaxContainers = document.querySelectorAll('.parallax-container');
  
  if (parallaxContainers.length === 0) return;
  
  // Handle mouse movement for parallax
  parallaxContainers.forEach(container => {
    container.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      const layers = container.querySelectorAll('.parallax-layer');
      
      layers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth') || 1);
        const moveX = mouseX * depth * 30; // Adjust sensitivity
        const moveY = mouseY * depth * 30; // Adjust sensitivity
        
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });
  });
  
  // Handle scroll-based parallax
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('.parallax-scroll').forEach(element => {
      const speed = parseFloat(element.getAttribute('data-scroll-speed') || 0.2);
      const offset = scrollPosition * speed;
      
      element.style.transform = `translateY(${offset}px)`;
    });
  });
}

/**
 * Smooth Scrolling
 * Adds elegant scrolling between sections
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Calculate position with offset
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // Smooth scroll to element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active states
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

/**
 * Divine Glow Effects
 * Adds subtle glow and highlight effects for interactive elements
 */
function initDivineGlowEffects() {
  // Add hover glow effects to buttons
  document.querySelectorAll('.btn-sacred').forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.classList.add('divine-glow');
    });
    
    button.addEventListener('mouseleave', function() {
      setTimeout(() => {
        this.classList.remove('divine-glow');
      }, 300);
    });
  });
  
  // Handle scroll-based symbol movements
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    document.querySelectorAll('.sacred-symbol').forEach(symbol => {
      const speed = parseFloat(symbol.getAttribute('data-float-speed') || 0.05);
      const direction = symbol.getAttribute('data-float-direction') || 1;
      const maxOffset = parseFloat(symbol.getAttribute('data-max-offset') || 30);
      
      // Calculate movement based on scroll position
      let offset = (scrollY * speed * direction) % maxOffset;
      
      // Apply transform
      symbol.style.transform = `translateY(${offset}px)`;
    });
  });
}

/**
 * Add smooth section transitions
 */
function initSectionTransitions() {
  const sections = document.querySelectorAll('section');
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      } else {
        // Optionally remove the class when section is out of view
        // entry.target.classList.remove('section-visible');
      }
    });
  }, {
    root: null,
    rootMargin: '-100px 0px',
    threshold: 0.1
  });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
} 