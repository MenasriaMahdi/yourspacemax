/**
 * Homepage Template (index.html)
 * High-fidelity editorial layout complying 100% with YOUR SPACE MAX specifications
 */
const renderHead = require('../components/head');
const renderHeader = require('../components/header');
const renderFooter = require('../components/footer');
const renderSideNav = require('../components/side-nav');
const renderSocialBubble = require('../components/social-bubble');
const renderExecutiveTeam = require('../components/executive-team');
const data = require('../data/site-data');

module.exports = function renderIndexPage() {
  const head = renderHead({
    title: `${data.brand.name} | ${data.brand.slogan}`,
    description: `${data.brand.name} — ${data.brand.tagline} ${data.brand.shortBio}`,
    activePage: 'home'
  });

  const header = renderHeader('home');
  const footer = renderFooter();
  const sideNav = renderSideNav();
  const socialBubble = renderSocialBubble();
  const executiveTeam = renderExecutiveTeam();

  return `${head}
  ${header}
  ${sideNav}

  <!-- 1. الواجهة الرئيسية (Hero Section) -->
  <section id="hero" class="relative pt-12 pb-20 md:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Editorial Text (lg:col-span-7) -->
        <div class="lg:col-span-7 space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-latin font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            ${data.brand.name}
            <span class="font-headline text-brand dark:text-brand-dark text-2xl sm:text-3xl lg:text-4xl font-normal block mt-3 italic leading-relaxed">
              «${data.brand.tagline}»
            </span>
          </h1>

          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-body leading-relaxed max-w-2xl">
            ${data.brand.shortBio}
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a href="services.html" class="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-headline font-bold text-base bg-brand text-white hover:bg-brand-hover dark:bg-brand-dark dark:hover:bg-blue-600 transition-colors shadow-sm">
              اكتشف خدماتنا
            </a>
            <a href="contact.html" class="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-headline font-semibold text-base border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors">
              اطلب خدمة
            </a>
          </div>

          <!-- Quick Proof Points (Spec Aligned) -->
          <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-6 text-xs font-accent text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>مرافقة حضورياً وعن بُعد</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>${data.brand.headquarters}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>حلول ريادية متكاملة</span>
            </div>
          </div>
        </div>

        <!-- Right Visual Anchor (lg:col-span-5) -->
        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative">
              <img src="assets/images/hero-corporate.jpg" alt="فضاء ريادة الأعمال YOUR SPACE MAX" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <!-- Subtle Badge -->
              <div class="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-white">
                <span class="text-xs font-latin uppercase tracking-widest text-brand-dark font-bold block">${data.brand.slogan}</span>
                <p class="text-sm font-headline mt-1 text-slate-200">البيئة المتكاملة لتحويل رؤيتك إلى واقع اقتصادي ملموس.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 2. من نحن؟ (About Us & Structured Timeline) -->
  <section id="about" class="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Title & Slogan -->
        <div class="lg:col-span-5 space-y-4">
          <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold block">من نحن؟</span>
          <h2 class="text-3xl sm:text-4xl font-headline font-extrabold text-slate-900 dark:text-white leading-tight">
            مساحتك للنمو والتطوير.
          </h2>
          <div class="w-16 h-1 bg-brand dark:bg-brand-dark rounded"></div>
          <p class="font-headline text-2xl text-slate-700 dark:text-slate-300 italic pt-2 font-latin">
            «${data.brand.slogan}»
          </p>
        </div>

        <!-- Narrative Essay from Spec -->
        <div class="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 font-body text-base sm:text-lg leading-relaxed">
          <p>
            <strong class="font-latin text-slate-900 dark:text-white font-bold">${data.brand.name}</strong> شركة متعددة الخدمات، تقدم حلولاً متكاملة في مجالات مرافقة المشاريع والمؤسسات، الاستشارات ودراسات الاستثمار، التكوين، تنظيم التظاهرات الاقتصادية والعلمية، التصميم والخدمات الإبداعية، والبرمجة والحلول الرقمية.
          </p>
          <p>
            انطلقت الشركة من مشروع ابتكاري في الوسط الجامعي، وتطورت عبر محطات ريادية متميزة، وصولاً إلى تجسيد المشروع في شكل مؤسسة اقتصادية.
          </p>
        </div>
      </div>

      <!-- الخط الزمني (Timeline) لمحطات التطور (Exact Spec) -->
      <div class="space-y-8 pt-4">
        <h3 class="text-xl font-headline font-bold text-slate-900 dark:text-white text-center">
          محطات التطور الريادي
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${data.timeline.map((station, idx) => `
          <!-- Station: ${station.year} -->
          <div class="p-6 rounded-xl bg-white dark:bg-slate-900 border ${idx === 3 ? 'border-brand/40 dark:border-brand-dark/40 bg-brand/5 dark:bg-brand-dark/5' : 'border-slate-200 dark:border-slate-800'} shadow-sm space-y-3 relative overflow-hidden group hover:border-brand dark:hover:border-brand-dark transition-colors">
            <div class="w-12 h-12 rounded-lg ${idx === 3 ? 'bg-brand text-white dark:bg-brand-dark' : 'bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark'} flex items-center justify-center font-latin font-bold text-xl">
              ${station.year}
            </div>
            <h4 class="font-headline font-bold text-lg text-slate-900 dark:text-white">${station.title}</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
              ${station.desc}
            </p>
          </div>
          `).join('')}
        </div>

        <!-- Concluding Paragraph from Spec -->
        <div class="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center max-w-4xl mx-auto shadow-sm">
          <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-body leading-relaxed">
            «نعمل على تحويل الأفكار إلى مشاريع قابلة للتنفيذ والنمو، من خلال توفير الخبرة والمرافقة والحلول المناسبة لمختلف الاحتياجات، <strong class="text-brand dark:text-brand-dark">حضورياً وعن بُعد</strong>.»
          </p>
        </div>
      </div>

      <!-- الإدارة التنفيذية والفريق ورؤيتنا -->
      ${executiveTeam}

    </div>
  </section>

  <!-- 3. خدماتنا (بطاقات مختصرة - 6 Services from Spec) -->
  <section id="services" class="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold">باقة الحلول المتكاملة</span>
        <h2 class="text-3xl sm:text-4xl font-headline font-extrabold text-slate-900 dark:text-white">
          خدمات متكاملة.. وحلول تناسب احتياجاتك
        </h2>
        <p class="text-slate-600 dark:text-slate-400 font-body text-base">
          نقدم حلولاً مدروسة تجمع بين الخبرة الميدانية والمواكبة التقنية المتطورة.
        </p>
      </div>

      <!-- 3 Columns x 2 Rows Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${data.services.map((s, idx) => `
        <!-- Service Card: ${s.num} -->
        <div class="p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand dark:hover:border-brand-dark hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-lg bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark flex items-center justify-center font-bold font-latin">
              0${s.num}
            </div>
            <h3 class="font-headline font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-dark transition-colors">
              ${s.num}. ${s.title}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
              ${s.shortDesc}
            </p>
          </div>
          <div class="pt-2">
            <a href="services.html#${s.id}" class="text-sm font-headline font-bold text-brand dark:text-brand-dark inline-flex items-center gap-1 hover:underline">
              <span>اكتشف الخدمة</span>
              <span class="font-latin">&larr;</span>
            </a>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 4. إنجازاتنا بالأرقام (Strictly The 5 Authorized Metrics from Spec) -->
  <section id="achievements" class="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold">أثرنا الميداني</span>
        <h2 class="text-3xl sm:text-4xl font-headline font-extrabold text-slate-900 dark:text-white">
          خطواتنا وإنجازاتنا تعكس أثرنا
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        ${data.metrics.map((m, idx) => `
        <div class="${idx === 4 ? 'col-span-2 md:col-span-1' : ''} p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div class="text-4xl sm:text-5xl font-extrabold font-accent text-brand dark:text-brand-dark" dir="ltr">${m.value}</div>
          <p class="text-sm font-headline text-slate-700 dark:text-slate-300 font-medium">${m.label}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 5. دعوة لاتخاذ إجراء (CTA from Spec) -->
  <section id="cta" class="py-20 bg-slate-900 text-white relative scroll-mt-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <span class="text-xs font-accent uppercase tracking-widest text-brand-dark font-bold">ابدأ مسارك الآن</span>
      <h2 class="text-3xl sm:text-4xl font-headline font-extrabold tracking-tight">
        لديك فكرة أو مشروع؟ نحن هنا لمرافقتك.
      </h2>
      <p class="text-base sm:text-lg text-slate-300 font-body max-w-2xl mx-auto leading-relaxed">
        سواء كنت صاحب فكرة أو مؤسسة تبحث عن حلول متخصصة، فإن فريق <span class="font-latin font-bold text-white">${data.brand.name}</span> مستعد للتواصل معك وتقديم الخدمات المناسبة لاحتياجاتك.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <a href="contact.html" class="px-8 py-3.5 rounded-lg font-headline font-bold text-base bg-brand-dark text-white hover:bg-blue-600 transition-colors shadow-md">
          اطلب خدمة
        </a>
        <a href="${data.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 rounded-lg font-headline font-semibold text-base bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-2">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>تواصل معنا عبر WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  ${socialBubble}
  ${footer}

  <!-- Client-side Modular Scripts -->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/scrollspy.js"></script>
</body>
</html>`;
};

