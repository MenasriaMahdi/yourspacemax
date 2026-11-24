/**
 * Floating Side Section Navigator (Scrollspy)
 * Tracks section scroll positions and animates active pill dots
 */
document.addEventListener('DOMContentLoaded', function() {
  var sideNavItems = document.querySelectorAll('.side-nav-item');
  if (!sideNavItems.length) return;

  var sectionIds = ['hero', 'about', 'services', 'achievements', 'cta'];
  var sections = sectionIds.map(function(id) {
    return document.getElementById(id);
  }).filter(Boolean);

  function updateSideNavActive(activeId) {
    sideNavItems.forEach(function(item) {
      var isMatch = item.getAttribute('data-section') === activeId;
      var dot = item.querySelector('.indicator-dot');
      if (dot) {
        if (isMatch) {
          dot.className = "w-5 h-2.5 rounded-full bg-brand dark:bg-brand-dark transition-all duration-300 shadow-sm indicator-dot";
          item.classList.add('bg-brand/10', 'dark:bg-brand-dark/20');
        } else {
          dot.className = "w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 group-hover:scale-125 indicator-dot";
          item.classList.remove('bg-brand/10', 'dark:bg-brand-dark/20');
        }
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          updateSideNavActive(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(function(sec) {
      observer.observe(sec);
    });
  }
});

