/**
 * Contact Form & URL Parameter Handler
 * Handles form validation, FormSubmit AJAX real email dispatch, and instant WhatsApp submission
 */
document.addEventListener('DOMContentLoaded', function() {
  // Detect current language from <html lang="...">
  var isFrench = document.documentElement.lang === 'fr';

  // 1. Auto-fill service from URL parameter (e.g. ?service=service-2)
  var urlParams = new URLSearchParams(window.location.search);
  var serviceParam = urlParams.get('service');
  if (serviceParam) {
    var select = document.getElementById('serviceSelect');
    if (select) {
      select.value = serviceParam;
    }
  }

  // 2. Interactive Contact Form Submission Handler (FormSubmit AJAX API)
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');
  var formError = document.getElementById('formError');
  var formErrorMessage = document.getElementById('formErrorMessage');
  var submitBtn = document.getElementById('submitBtn');
  var submitBtnText = document.getElementById('submitBtnText');
  var whatsappSubmitBtn = document.getElementById('whatsappSubmitBtn');

  // Helper to show/hide alert banners
  function showAlert(element, show) {
    if (element) {
      if (show) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous alerts
      showAlert(formSuccess, false);
      showAlert(formError, false);

      var recipientInput = document.getElementById('recipientEmail');
      var recipientEmail = (recipientInput && recipientInput.value.trim()) ? recipientInput.value.trim() : 'filalisara29@gmail.com';

      // Collect form field values
      var name = (document.getElementById('fullName') ? document.getElementById('fullName').value.trim() : '');
      var entity = (document.getElementById('entityRole') ? document.getElementById('entityRole').value.trim() : '');
      var phone = (document.getElementById('phone') ? document.getElementById('phone').value.trim() : '');
      var email = (document.getElementById('email') ? document.getElementById('email').value.trim() : '');
      var serviceSelect = document.getElementById('serviceSelect');
      var serviceText = (serviceSelect && serviceSelect.selectedIndex > 0) ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
      var typeSelect = document.getElementById('accompanimentType');
      var typeText = (typeSelect && typeSelect.selectedIndex >= 0) ? typeSelect.options[typeSelect.selectedIndex].text : '';
      var message = (document.getElementById('message') ? document.getElementById('message').value.trim() : '');

      // Set Loading State
      if (submitBtn) submitBtn.disabled = true;
      var originalBtnText = submitBtnText ? submitBtnText.textContent : '';
      if (submitBtnText) {
        submitBtnText.textContent = isFrench ? 'Envoi en cours...' : 'جاري إرسال الطلب...';
      }

      // Prepare FormSubmit JSON Payload
      var payload = {
        _subject: isFrench 
          ? 'Nouveau message reçu depuis YOUR SPACE MAX : ' + (name || 'Client')
          : 'طلب خدمة جديد من موقع YOUR SPACE MAX : ' + (name || 'عميل'),
        _captcha: 'false',
        _template: 'table',
        'Nom / الاسم': name,
        'Projet ou Statut / الصفة والمشروع': entity || (isFrench ? 'Non spécifié' : 'غير محدد'),
        'Téléphone / الهاتف': phone,
        'Email / البريد الإلكتروني': email,
        'Service / الخدمة المطلوبة': serviceText || (isFrench ? 'Général' : 'عام'),
        'Mode / صيغة المرافقة': typeText || (isFrench ? 'Non spécifié' : 'غير محدد'),
        'Message / تفاصيل الطلب': message
      };

      fetch('https://formsubmit.co/ajax/' + encodeURIComponent(recipientEmail), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(function(res) {
        return res.json().then(function(data) {
          return { ok: res.ok, data: data };
        }).catch(function() {
          return { ok: res.ok, data: {} };
        });
      })
      .then(function(result) {
        if (result.ok || result.data.success === 'true' || result.data.success === true) {
          showAlert(formSuccess, true);
          showAlert(formError, false);
          contactForm.reset();
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function() {
            showAlert(formSuccess, false);
          }, 12000);
        } else {
          var serverMsg = (result.data && result.data.message) ? result.data.message : '';
          var errMsg = '';

          if (serverMsg.toLowerCase().indexOf('activation') !== -1) {
            errMsg = isFrench
              ? 'Formulaire en attente d’activation ! Un email contenant le lien "Activate Form" vient d’être envoyé à votre adresse (' + recipientEmail + '). Veuillez cliquer dessus (vérifiez aussi vos spams) pour activer la réception.'
              : 'النموذج بانتظار التفعيل لمرة واحدة! تم إرسال رسالة تحتوي على زر "Activate Form" إلى بريدك (' + recipientEmail + '). يرجى فتح البريد (وتفقّد مجلد Spam) والضغط عليه لتفعيل الاستلام فورياً.';
          } else if (serverMsg.toLowerCase().indexOf('web server') !== -1) {
            errMsg = isFrench
              ? 'Attention : FormSubmit nécessite un serveur web (comme votre site déployé sur Vercel) et ne fonctionne pas en ouvrant le fichier directement en local (file:///).'
              : 'تنبيه: خدمة FormSubmit تتطلب العمل عبر خادم ويب (مثل موقعكم المنشور على Vercel) ولا تعمل عند فتح ملف HTML محلياً عبر file:///.';
          } else if (serverMsg) {
            errMsg = serverMsg;
          } else {
            errMsg = isFrench 
              ? 'Une erreur est survenue lors de l’envoi. Veuillez réessayer ou utiliser WhatsApp.' 
              : 'حدث خطأ أثناء الإرسال. يرجى إعادة المحاولة أو إرسال الطلب عبر واتساب.';
          }

          if (formErrorMessage) formErrorMessage.textContent = errMsg;
          showAlert(formError, true);
          formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })
      .catch(function(err) {
        var netErrMsg = isFrench
          ? 'Erreur de connexion. Vous pouvez transmettre votre demande directement via WhatsApp ci-dessous.'
          : 'تعذر الاتصال بالخادم. يمكنك إرسال بيانات طلبك مباشرة عبر واتساب بالزر الأخضر أدناه.';
        if (formErrorMessage) formErrorMessage.textContent = netErrMsg;
        showAlert(formError, true);
        formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .finally(function() {
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = originalBtnText;
      });
    });
  }

  // 3. Instant WhatsApp Forwarding with Form Content
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener('click', function() {
      var name = (document.getElementById('fullName') ? document.getElementById('fullName').value.trim() : '');
      var entity = (document.getElementById('entityRole') ? document.getElementById('entityRole').value.trim() : '');
      var phone = (document.getElementById('phone') ? document.getElementById('phone').value.trim() : '');
      var email = (document.getElementById('email') ? document.getElementById('email').value.trim() : '');
      var serviceSelect = document.getElementById('serviceSelect');
      var serviceText = (serviceSelect && serviceSelect.selectedIndex > 0) ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
      var typeSelect = document.getElementById('accompanimentType');
      var typeText = (typeSelect && typeSelect.selectedIndex >= 0) ? typeSelect.options[typeSelect.selectedIndex].text : '';
      var message = (document.getElementById('message') ? document.getElementById('message').value.trim() : '');

      var text = '';
      if (isFrench) {
        text = '👋 Bonjour YOUR SPACE MAX,\n'
             + 'Je souhaite soumettre une demande de service via le site web :\n\n'
             + '👤 *Nom* : ' + (name || 'Non spécifié') + '\n'
             + '🏢 *Statut / Projet* : ' + (entity || 'Non spécifié') + '\n'
             + '📱 *Téléphone* : ' + (phone || 'Non spécifié') + '\n'
             + '✉️ *Email* : ' + (email || 'Non spécifié') + '\n'
             + '🎯 *Service demandé* : ' + (serviceText || 'Non spécifié') + '\n'
             + '💼 *Mode d\'accompagnement* : ' + (typeText || 'Non spécifié') + '\n'
             + '📝 *Détails / Message* :\n' + (message || 'Je souhaite être recontacté.');
      } else {
        text = '👋 مرحباً YOUR SPACE MAX،\n'
             + 'أود تقديم طلب خدمة عبر الموقع الإلكتروني:\n\n'
             + '👤 *الاسم*: ' + (name || 'غير محدد') + '\n'
             + '🏢 *الصفة / المشروع*: ' + (entity || 'غير محدد') + '\n'
             + '📱 *الهاتف*: ' + (phone || 'غير محدد') + '\n'
             + '✉️ *البريد*: ' + (email || 'غير محدد') + '\n'
             + '🎯 *الخدمة المطلوبة*: ' + (serviceText || 'غير محددة') + '\n'
             + '💼 *صيغة المرافقة*: ' + (typeText || 'غير محددة') + '\n'
             + '📝 *تفاصيل الطلب / الرسالة*:\n' + (message || 'أرغب في التواصل للحصول على استشارة.');
      }

      var whatsappUrl = 'https://wa.me/213553182881?text=' + encodeURIComponent(text);
      window.open(whatsappUrl, '_blank');
    });
  }
});
