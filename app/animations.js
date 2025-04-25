/* Scroll observer JavaScript */
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit to ensure DOM is fully loaded
  setTimeout(() => {
    console.log("Setting up IntersectionObserver");
    
    // First, immediately add "in-view" class to elements above the fold
    document.querySelectorAll('.animate-fade-up-on-scroll').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        console.log("Adding in-view to element initially visible");
        element.classList.add('in-view');
      }
    });
    
    // Then set up observer for scrolling
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Element came into view:", entry.target);
          entry.target.classList.add('in-view');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    document.querySelectorAll('.animate-fade-up-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }, 500);
}); 