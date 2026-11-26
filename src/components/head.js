/**
 * Head Component for HTML documents
 * Handles viewport, title, SEO description, stylesheets, and critical theme script
 * Supports bilingual (Arabic & French) with proper lang, dir, and asset paths
 */
module.exports = function renderHead({ title, description, activePage = '', lang = 'ar' }) {
  const isFrench = lang === 'fr';
  const dir = isFrench ? 'ltr' : 'rtl';
  const basePath = isFrench ? '../' : '';

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="icon" type="image/png" href="${basePath}assets/images/brand-logo.png?v=2">

  <!-- Main Design System CSS (Fonts & Custom Styles) -->
  <link rel="stylesheet" href="${basePath}assets/css/style.css">

  <!-- Tailwind CSS Engine & External Configuration -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="${basePath}assets/js/tailwind.config.js"></script>

  <!-- Immediate Theme Initializer (prevents theme flickering) -->
  <script src="${basePath}assets/js/theme.js"></script>

  <!-- Immediate Language Preference Resolver (prevents language flashing) -->
  <script>
    (function() {
      try {
        var savedLang = localStorage.getItem('youspace_lang');
        var path = window.location.pathname;
        var isFr = path.indexOf('/fr/') !== -1;
        
        // If user explicitly chose French and lands on root (Arabic) page
        if (savedLang === 'fr' && !isFr) {
          var base = path.endsWith('/') ? path : path.substring(0, path.lastIndexOf('/') + 1);
          var file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
          if (!file.endsWith('.html')) file = 'index.html';
          window.location.replace(base + 'fr/' + file);
        }
        // If user explicitly chose Arabic and lands on /fr/ page
        else if (savedLang === 'ar' && isFr) {
          var file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
          if (!file.endsWith('.html')) file = 'index.html';
          window.location.replace('../' + file);
        }
      } catch (e) {}
    })();
  </script>
</head>
<body class="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body antialiased transition-colors selection:bg-brand selection:text-white">
`;
};

