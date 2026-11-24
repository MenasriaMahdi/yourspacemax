/**
 * Services Page Template (services.html)
 * Comprehensive breakdown of all 6 corporate services with target audiences and deliverables
 */
const renderHead = require('../components/head');
const renderHeader = require('../components/header');
const renderFooter = require('../components/footer');
const data = require('../data/site-data');

module.exports = function renderServicesPage() {
  const head = renderHead({
    title: `خدماتنا المتكاملة | ${data.brand.name}`,
    description: `استكشف خدمات ${data.brand.name} الست: المرافقة والحاضنة، دراسات الاستثمار، التكوين، تنظيم الفعاليات، التصميم الإبداعي، والبرمجة والحلول الرقمية.`,
    activePage: 'services'
  });

  const header = renderHeader('services');
  const footer = renderFooter();

  return `${head}
  ${header}

  <!-- Services Header Section -->
  <section class="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold">باقة الحلول المتكاملة</span>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-slate-900 dark:text-white">
        خدمات متكاملة.. وحلول تناسب احتياجاتك
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body max-w-3xl mx-auto leading-relaxed">
        في <span class="font-latin font-bold text-slate-900 dark:text-white">${data.brand.name}</span>، نجمع بين الخبرة الميدانية، المنهجية الريادية، والحلول العملية لنرافق الأفراد وحاملي المشاريع والمؤسسات في مختلف مراحل النمو — حضورياً وعن بُعد.
      </p>
    </div>
  </section>

  <!-- Detailed 6 Services Section -->
  <section class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      ${data.services.map((service, idx) => `
      <!-- Service ${service.num}: ${service.title} -->
      <article id="${service.id}" class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-28 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}">
        
        <!-- Content Column (7 cols) -->
        <div class="lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:col-start-6' : ''}">
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark font-headline font-bold text-xs">
            <span>الخدمة 0${service.num}</span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-headline font-extrabold text-slate-900 dark:text-white leading-tight">
            ${service.title}
          </h2>

          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body leading-relaxed">
            ${service.fullDesc}
          </p>

          <!-- Target Audience Box -->
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <h4 class="font-headline font-bold text-xs uppercase tracking-wider text-brand dark:text-brand-dark">الفئات المستهدفة:</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 font-body font-medium">
              ${service.target}
            </p>
          </div>

          <!-- Deliverables List -->
          <div class="space-y-3">
            <h4 class="font-headline font-bold text-sm text-slate-900 dark:text-white">المخرجات والنتائج العملية:</h4>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-body">
              ${service.deliverables.map(d => `
              <li class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${d}</span>
              </li>
              `).join('')}
            </ul>
          </div>

          <!-- Direct Request Button with URL parameter auto-fill -->
          <div class="pt-2">
            <a href="contact.html?service=${service.id}" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-headline font-bold text-sm bg-brand text-white hover:bg-brand-hover dark:bg-brand-dark dark:hover:bg-blue-600 transition-colors shadow-sm">
              اطلب هذه الخدمة
            </a>
          </div>
        </div>

        <!-- Visual Media Anchor (5 cols) -->
        <div class="lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative">
            <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
          </div>
        </div>

      </article>
      `).join('')}

    </div>
  </section>

  <!-- Summary Table Section -->
  <section class="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h3 class="text-2xl font-headline font-bold text-slate-900 dark:text-white">جدول ملخص الخدمات</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 font-body">نظرة شاملة وسريعة على باقة الخدمات ومخرجاتها</p>
      </div>

      <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table class="w-full text-right text-sm">
          <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-headline text-xs">
            <tr>
              <th class="py-3.5 px-4">#</th>
              <th class="py-3.5 px-4">الخدمة</th>
              <th class="py-3.5 px-4">الفئة المستهدفة</th>
              <th class="py-3.5 px-4 text-center">الإجراء</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-body text-xs sm:text-sm">
            ${data.services.map(s => `
            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td class="py-3.5 px-4 font-latin font-bold text-brand dark:text-brand-dark">0${s.num}</td>
              <td class="py-3.5 px-4 font-headline font-bold text-slate-900 dark:text-white">${s.title}</td>
              <td class="py-3.5 px-4">${s.target}</td>
              <td class="py-3.5 px-4 text-center">
                <a href="contact.html?service=${s.id}" class="text-brand dark:text-brand-dark font-headline font-bold hover:underline">
                  طلب
                </a>
              </td>
            </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="py-16 bg-slate-900 text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
      <h3 class="text-2xl sm:text-3xl font-headline font-bold">جاهز للانطلاق بمشروعك؟</h3>
      <p class="text-sm sm:text-base text-slate-300 font-body">فريق خبرائنا جاهز لمرافقتك وتخصيص الباقة الأنسب لأهدافك.</p>
      <div class="flex flex-wrap justify-center gap-4 pt-2">
        <a href="contact.html" class="px-7 py-3 rounded-lg font-headline font-bold text-sm bg-brand-dark text-white hover:bg-blue-600 transition-colors">
          اطلب خدمة الآن
        </a>
        <a href="${data.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-7 py-3 rounded-lg font-headline font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
          تواصل عبر WhatsApp
        </a>
      </div>
    </div>
  </section>

  ${footer}

  <!-- Client-side Modular Scripts -->
  <script src="assets/js/main.js"></script>
</body>
</html>`;
};

