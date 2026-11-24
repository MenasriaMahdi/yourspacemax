/**
 * Contact Form & URL Parameter Handler
 * Handles form validation, feedback alerts, and service pre-selection via URL
 */
document.addEventListener('DOMContentLoaded', function() {
  // 1. Auto-fill service from URL parameter (e.g. ?service=service-2)
  var urlParams = new URLSearchParams(window.location.search);
  var serviceParam = urlParams.get('service');
  if (serviceParam) {
    var select = document.getElementById('serviceSelect');
    if (select) {
      select.value = serviceParam;
    }
  }

  // 2. Interactive Contact Form Submission Handler
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Submit simulation and confirmation
      formSuccess.classList.remove('hidden');
      contactForm.reset();

      // Scroll smoothly to success banner
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Auto-hide success message after 10 seconds
      setTimeout(function() {
        formSuccess.classList.add('hidden');
      }, 10000);
    });
  }
});

