/**
 * Main Interaction Script for YOUR SPACE MAX
 * - Mobile drawer menu navigation
 * - Floating Social Media Bubble (Speed Dial with smooth spring animations)
 * - Persistent Language Preference Tracking (Arabic & French)
 */
document.addEventListener('DOMContentLoaded', function() {

  // =========================================================================
  // 1. Language Preference Persistence System
  // =========================================================================
  try {
    // Sync current page language to localStorage
    var currentDocLang = document.documentElement.lang || 'ar';
    localStorage.setItem('youspace_lang', currentDocLang);
  } catch (e) {}

  // Global listener: capture clicks on any language switcher link
  document.addEventListener('click', function(e) {
    var langLink = e.target.closest('[data-switch-lang]');
    if (langLink) {
      var targetLang = langLink.getAttribute('data-switch-lang');
      if (targetLang) {
        try {
          localStorage.setItem('youspace_lang', targetLang);
        } catch (err) {}
      }
    }
  });


  // =========================================================================
  // 2. Mobile Drawer Navigation Menu
  // =========================================================================
  var mobileBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });

    // Close mobile menu on resize to desktop viewport
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
      }
    });
  }


  // =========================================================================
  // 3. Floating Social Media Bubble (Smooth Speed Dial)
  // =========================================================================
  var bubbleToggle = document.getElementById('socialBubbleToggle');
  var bubbleMenu = document.getElementById('socialBubbleMenu');
  var iconChat = document.getElementById('bubbleIconChat');
  var iconClose = document.getElementById('bubbleIconClose');
  var pulseDot = document.getElementById('bubblePulseDot');

  if (bubbleToggle && bubbleMenu) {
    function setBubbleOpen(open) {
      if (open) {
        bubbleMenu.classList.add('bubble-open');
        if (iconChat) iconChat.classList.add('hidden');
        if (iconClose) iconClose.classList.remove('hidden');
        if (pulseDot) pulseDot.classList.add('opacity-0');
        bubbleToggle.setAttribute('aria-expanded', 'true');
      } else {
        bubbleMenu.classList.remove('bubble-open');
        if (iconChat) iconChat.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
        if (pulseDot) pulseDot.classList.remove('opacity-0');
        bubbleToggle.setAttribute('aria-expanded', 'false');
      }
    }

    // Toggle on trigger button click / touch
    bubbleToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = bubbleMenu.classList.contains('bubble-open');
      setBubbleOpen(!isOpen);
    });

    // Close when clicking outside of the bubble container
    document.addEventListener('click', function(e) {
      if (bubbleMenu.classList.contains('bubble-open')) {
        if (!bubbleMenu.contains(e.target) && !bubbleToggle.contains(e.target)) {
          setBubbleOpen(false);
        }
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && bubbleMenu.classList.contains('bubble-open')) {
        setBubbleOpen(false);
      }
    });
  }

});
