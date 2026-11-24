/**
 * Theme Manager for YOUR SPACE MAX
 * Default: Dark Mode
 * Single-click switch between dark and light with localStorage persistence
 */
(function() {
  // Apply theme immediately in head to avoid flash of light mode
  try {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  function toggleTheme() {
    var isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  var themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  var mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
  }
});

