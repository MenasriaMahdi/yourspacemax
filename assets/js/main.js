/**
 * Main Interaction Script for YOUR SPACE MAX
 * Controls mobile hamburger menu and general navigation interactions
 */
document.addEventListener('DOMContentLoaded', function() {
  var mobileBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
});

