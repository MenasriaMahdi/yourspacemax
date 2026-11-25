/**
 * About Us Page Template (about.html)
 * Comprehensive company profile, evolutionary timeline, executive management,
 * expert team network, and core values.
 * Supports bilingual content (Arabic & French)
 */
const renderHead = require('../components/head');
const renderHeader = require('../components/header');
const renderFooter = require('../components/footer');
const renderSocialBubble = require('../components/social-bubble');
const renderExecutiveTeam = require('../components/executive-team');
const { getSiteData } = require('../data/site-data');

module.exports = function renderAboutPage(lang = 'ar') {
  const data = getSiteData(lang);
  const isFrench = lang === 'fr';
  const basePath = isFrench ? '../' : '';

  const head = renderHead({
    title: isFrench 
      ? `À Propos | Direction Générale & Équipe | ${data.brand.name}`
      : `من نحن؟ الإدارة التنفيذية وفريق العمل | ${data.brand.name}`,
    description: isFrench
      ? `Découvrez ${data.brand.name}, notre trajectoire entrepreneuriale, la Direction Générale menée par Sara Filali, notre réseau d'experts et nos valeurs.`
      : `تعرف على ${data.brand.name}، مسار تطورنا الريادي، الإدارة التنفيذية بقيادة فيلالي سارة، شبكة خبرائنا، ورؤيتنا ومنهجية عملنا.`,
    activePage: 'about',
    lang
  });

  const header = renderHeader('about', lang);
  const footer = renderFooter(lang);
  const socialBubble = renderSocialBubble(lang);
  const executiveTeam = renderExecutiveTeam(lang);

  return `${head}
  ${header}

  <!-- Page Header Hero Section -->
  <section class="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-8 space-y-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark font-accent text-xs font-bold">
            <span>${isFrench ? 'À Propos • About Us' : 'من نحن؟ • About Us'}</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-slate-900 dark:text-white leading-tight">
            ${data.ui.aboutSectionTitle}
          </h1>
          <p class="font-headline text-xl sm:text-2xl text-brand dark:text-brand-dark italic font-latin">
            «${data.brand.slogan}»
          </p>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body leading-relaxed max-w-3xl">
            <strong class="font-latin text-slate-900 dark:text-white font-bold">${data.brand.name}</strong> ${data.ui.aboutStoryP1}
          </p>
        </div>

        <div class="lg:col-span-4">
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-headline">${data.ui.headquartersLabel}</span>
                <p class="text-sm font-headline font-bold text-slate-900 dark:text-white">${data.brand.headquarters}</p>
              </div>
            </div>
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              </div>
              <div>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-headline">${data.ui.scopeLabel}</span>
                <p class="text-sm font-headline font-bold text-slate-900 dark:text-white">${data.brand.scope}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Narrative & Evolutionary Timeline Section -->
  <section class="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold block">${data.ui.aboutSectionBadge}</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-slate-900 dark:text-white">
          ${data.ui.timelineSubtitle}
        </h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body leading-relaxed">
          ${data.ui.aboutStoryP2}
        </p>
      </div>

      <!-- Timeline Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${data.timeline.map((station, idx) => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border ${idx === 3 ? 'border-brand/40 dark:border-brand-dark/40 bg-brand/5 dark:bg-brand-dark/5 ring-1 ring-brand/20' : 'border-slate-200 dark:border-slate-800'} shadow-sm space-y-3 relative group hover:border-brand dark:hover:border-brand-dark transition-all duration-200">
          <div class="w-12 h-12 rounded-xl ${idx === 3 ? 'bg-brand text-white dark:bg-brand-dark' : 'bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark'} flex items-center justify-center font-latin font-bold text-xl">
            ${station.year}
          </div>
          <h3 class="font-headline font-bold text-lg text-slate-900 dark:text-white">${station.title}</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
            ${station.desc}
          </p>
        </div>
        `).join('')}
      </div>

      <!-- Mission Banner Quote -->
      <div class="p-8 rounded-2xl bg-gradient-to-r from-brand/5 via-transparent to-brand/5 dark:from-brand-dark/10 dark:via-transparent dark:to-brand-dark/10 border border-brand/20 dark:border-brand-dark/30 text-center max-w-4xl mx-auto shadow-sm">
        <p class="text-lg sm:text-xl text-slate-800 dark:text-slate-200 font-body leading-relaxed font-medium">
          ${data.ui.aboutMissionBanner}
        </p>
      </div>

    </div>
  </section>

  <!-- Executive Management, Team & Core Values Section -->
  <section class="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      ${executiveTeam}
    </div>
  </section>

  <!-- Proven Metrics Section -->
  <section class="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold">${data.ui.achievementsBadge}</span>
        <h2 class="text-2xl sm:text-3xl font-headline font-extrabold text-slate-900 dark:text-white">
          ${data.ui.achievementsTitle}
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        ${data.metrics.map(metric => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:border-brand dark:hover:border-brand-dark transition-colors">
          <span class="text-3xl sm:text-4xl font-extrabold font-latin text-brand dark:text-brand-dark block tracking-tight" dir="ltr">
            ${metric.value}
          </span>
          <span class="text-xs sm:text-sm font-headline font-semibold text-slate-700 dark:text-slate-300 block mt-2">
            ${metric.label}
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 block mt-1 font-body">
            ${metric.sub}
          </span>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-white">
        ${data.ui.ctaSectionTitle}
      </h2>
      <p class="text-base sm:text-lg text-slate-300 font-body max-w-2xl mx-auto leading-relaxed">
        ${data.ui.ctaSectionDesc}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="contact.html" class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-headline font-bold text-base bg-brand-dark hover:bg-blue-600 text-white transition-all shadow-lg hover:shadow-brand-dark/25">
          ${data.ui.ctaSectionBtnStart}
        </a>
        <a href="services.html" class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-headline font-semibold text-base border border-slate-700 hover:bg-slate-800 text-white transition-all">
          ${data.ui.ctaSectionBtnServices}
        </a>
      </div>
    </div>
  </section>

  ${socialBubble}
  ${footer}

  <!-- Client-side Modular Scripts -->
  <script src="${basePath}assets/js/main.js"></script>
</body>
</html>`;
};
