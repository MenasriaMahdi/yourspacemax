/**
 * Header Component (Sticky, Transparent Backdrop, Brand Logo & Navigation)
 */
const data = require('../data/site-data');

module.exports = function renderHeader(activePage = 'home') {
  return `
  <!-- Top Navigation Header -->
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[92px] py-3 flex items-center justify-between">
      
      <!-- Brand Logo & Name: YOUR SPACE MAX -->
      <a href="index.html" class="flex items-center gap-3.5 group">
        <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200 dark:border-slate-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm group-hover:shadow-md">
          <img src="assets/images/logo.png" alt="${data.brand.name} Logo" class="w-full h-full object-contain">
        </div>
        <div class="space-y-0.5">
          <span class="text-xl sm:text-2xl font-bold font-latin tracking-tight text-slate-900 dark:text-white block leading-tight">${data.brand.name}</span>
          <span class="text-xs font-latin text-brand dark:text-brand-dark block tracking-wider uppercase font-semibold">${data.brand.slogan}</span>
        </div>
      </a>

      <!-- Desktop Nav: الرئيسية | خدماتنا | تواصل معنا -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10 font-headline font-medium text-sm lg:text-base">
        <a href="index.html" class="${activePage === 'home' ? 'text-brand dark:text-brand-dark font-bold border-b-2 border-brand dark:border-brand-dark pb-1' : 'text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-dark transition-colors'}">الرئيسية</a>
        <a href="services.html" class="${activePage === 'services' ? 'text-brand dark:text-brand-dark font-bold border-b-2 border-brand dark:border-brand-dark pb-1' : 'text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-dark transition-colors'}">خدماتنا</a>
        <a href="contact.html" class="${activePage === 'contact' ? 'text-brand dark:text-brand-dark font-bold border-b-2 border-brand dark:border-brand-dark pb-1' : 'text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-dark transition-colors'}">تواصل معنا</a>
      </nav>

      <!-- Actions: Single-Click Theme Toggle & CTA -->
      <div class="flex items-center gap-3 sm:gap-4">
        
        <!-- Theme Toggle Button -->
        <button id="themeToggleBtn" type="button" aria-label="تبديل مظهر الموقع" class="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-xs" title="تبديل الوضع الليلي / النهاري">
          <svg class="w-5 h-5 hidden dark:block text-amber-400 transition-transform duration-200 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg class="w-5 h-5 block dark:hidden text-slate-700 transition-transform duration-200 hover:-rotate-12" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        <!-- CTA: اطلب خدمة -->
        <a href="contact.html" class="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl font-headline font-semibold text-xs sm:text-sm bg-brand text-white hover:bg-brand-hover dark:bg-brand-dark dark:hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md">
          اطلب خدمة
        </a>

        <!-- Mobile Menu Hamburger Button -->
        <button id="mobileMenuBtn" type="button" aria-label="فتح القائمة الرئيسية" class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobileMenu" class="hidden md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 font-headline">
      <div class="flex flex-col space-y-2">
        <a href="index.html" class="px-3 py-2 rounded-lg ${activePage === 'home' ? 'bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}">الرئيسية</a>
        <a href="services.html" class="px-3 py-2 rounded-lg ${activePage === 'services' ? 'bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}">خدماتنا</a>
        <a href="contact.html" class="px-3 py-2 rounded-lg ${activePage === 'contact' ? 'bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark font-bold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}">تواصل معنا</a>
      </div>
      <div class="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <a href="contact.html" class="w-full text-center py-2.5 rounded-lg bg-brand text-white dark:bg-brand-dark font-semibold text-sm">
          اطلب خدمة
        </a>
      </div>
    </div>
  </header>
  `;
};

