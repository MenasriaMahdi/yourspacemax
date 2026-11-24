/**
 * Floating Side Section Navigator Component (Scrollspy)
 * Docked on the right side of the homepage
 */
module.exports = function renderSideNav() {
  return `
  <!-- Floating Side Section Navigator (Scrollspy) -->
  <aside id="sideNav" aria-label="التنقل بين أقسام الصفحة" class="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 p-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-lg transition-all">
    <a href="#hero" data-section="hero" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="الواجهة الرئيسية" title="الواجهة الرئيسية">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute right-11 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        01 • الواجهة الرئيسية
      </span>
    </a>
    <a href="#about" data-section="about" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="من نحن والمحطات" title="من نحن والمحطات">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute right-11 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        02 • من نحن والمحطات
      </span>
    </a>
    <a href="#services" data-section="services" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="خدماتنا" title="خدماتنا">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute right-11 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        03 • خدماتنا
      </span>
    </a>
    <a href="#achievements" data-section="achievements" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="إنجازاتنا بالأرقام" title="إنجازاتنا بالأرقام">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute right-11 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        04 • إنجازاتنا بالأرقام
      </span>
    </a>
    <a href="#cta" data-section="cta" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="انطلق بمشروعك" title="انطلق بمشروعك">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute right-11 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        05 • ابدأ الآن
      </span>
    </a>
  </aside>
  `;
};

