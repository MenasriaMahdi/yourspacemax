/**
 * Head Component for HTML documents
 * Handles viewport, title, SEO description, stylesheets, and critical theme script
 */
module.exports = function renderHead({ title, description, activePage = '' }) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="icon" type="image/png" href="assets/images/logo.png">

  <!-- Main Design System CSS (Fonts & Custom Styles) -->
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- Tailwind CSS Engine & External Configuration -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="assets/js/tailwind.config.js"></script>

  <!-- Immediate Theme Initializer (prevents theme flickering) -->
  <script src="assets/js/theme.js"></script>
</head>
<body class="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body antialiased transition-colors selection:bg-brand selection:text-white">
`;
};

