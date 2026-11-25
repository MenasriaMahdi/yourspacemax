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

  // Floating Social Media Bubble (Speed Dial Toggle)
  var bubbleToggle = document.getElementById('socialBubbleToggle');
  var bubbleMenu = document.getElementById('socialBubbleMenu');
  var iconChat = document.getElementById('bubbleIconChat');
  var iconClose = document.getElementById('bubbleIconClose');

  if (bubbleToggle && bubbleMenu) {
    bubbleToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      var isHidden = bubbleMenu.classList.contains('hidden');
      if (isHidden) {
        bubbleMenu.classList.remove('hidden');
        if (iconChat) iconChat.classList.add('hidden');
        if (iconClose) iconClose.classList.remove('hidden');
      } else {
        bubbleMenu.classList.add('hidden');
        if (iconChat) iconChat.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!bubbleMenu.contains(e.target) && !bubbleToggle.contains(e.target)) {
        bubbleMenu.classList.add('hidden');
        if (iconChat) iconChat.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });
  }
});

