/**
 * Floating Side Section Navigator Component (Scrollspy)
 * Supports bilingual labels (Arabic & French)
 */
module.exports = function renderSideNav(lang = 'ar') {
  const isFrench = lang === 'fr';

  const labels = isFrench ? {
    hero: '01 • Accueil',
    about: '02 • À Propos',
    services: '03 • Nos Services',
    achievements: '04 • Chiffres Clés',
    cta: '05 • Démarrer'
  } : {
    hero: '01 • الواجهة الرئيسية',
    about: '02 • من نحن ومسارنا',
    services: '03 • خدماتنا',
    achievements: '04 • إنجازاتنا بالأرقام',
    cta: '05 • ابدأ الآن'
  };

  const sidePos = isFrench ? 'left-5' : 'right-5';
  const tooltipPos = isFrench ? 'left-11' : 'right-11';
  const tooltipTranslate = isFrench ? '-translate-x-2' : 'translate-x-2';

  return `
  <!-- Floating Side Section Navigator (Scrollspy) -->
  <aside id="sideNav" aria-label="${isFrench ? 'Navigation rapide' : 'التنقل بين أقسام الصفحة'}" class="hidden lg:flex fixed ${sidePos} top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 p-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-lg transition-all">
    <a href="#hero" data-section="hero" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="${labels.hero}" title="${labels.hero}">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute ${tooltipPos} px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 ${tooltipTranslate} group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        ${labels.hero}
      </span>
    </a>
    <a href="#about" data-section="about" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="${labels.about}" title="${labels.about}">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute ${tooltipPos} px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 ${tooltipTranslate} group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        ${labels.about}
      </span>
    </a>
    <a href="#services" data-section="services" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="${labels.services}" title="${labels.services}">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute ${tooltipPos} px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 ${tooltipTranslate} group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        ${labels.services}
      </span>
    </a>
    <a href="#achievements" data-section="achievements" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="${labels.achievements}" title="${labels.achievements}">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute ${tooltipPos} px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 ${tooltipTranslate} group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        ${labels.achievements}
      </span>
    </a>
    <a href="#cta" data-section="cta" class="side-nav-item group relative flex items-center justify-center w-8 h-8 rounded-xl transition-all" aria-label="${labels.cta}" title="${labels.cta}">
      <span class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300 indicator-dot"></span>
      <span class="pointer-events-none absolute ${tooltipPos} px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-headline font-semibold shadow-md whitespace-nowrap opacity-0 ${tooltipTranslate} group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        ${labels.cta}
      </span>
    </a>
  </aside>
  `;
};
