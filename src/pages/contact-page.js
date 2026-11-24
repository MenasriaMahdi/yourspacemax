/**
 * Contact Page Template (contact.html)
 * Professional request form, direct contact coordinates, and location map
 */
const renderHead = require('../components/head');
const renderHeader = require('../components/header');
const renderFooter = require('../components/footer');
const data = require('../data/site-data');

module.exports = function renderContactPage() {
  const head = renderHead({
    title: `تواصل معنا واطلب خدمة | ${data.brand.name}`,
    description: `تواصل مع فريق ${data.brand.name} لحجز استشارتك أو طلب إحدى خدماتنا المتكاملة في المرافقة والتكوين والحلول الرقمية.`,
    activePage: 'contact'
  });

  const header = renderHeader('contact');
  const footer = renderFooter();

  return `${head}
  ${header}

  <!-- Contact Page Header -->
  <section class="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold">ابدأ التواصل</span>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-slate-900 dark:text-white">
        تواصل معنا واطلب خدمتك
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body max-w-2xl mx-auto leading-relaxed">
        يسعد فريق <span class="font-latin font-bold text-slate-900 dark:text-white">${data.brand.name}</span> باستقبال طلباتكم واستفساراتكم وتقديم المرافقة المناسبة لمشاريعكم.
      </p>
    </div>
  </section>

  <!-- Main Contact Section (Form + Information) -->
  <section class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Interactive Request Form (7 cols) -->
        <div class="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl font-headline font-bold text-slate-900 dark:text-white">نموذج طلب خدمة</h2>
            <p class="text-sm text-slate-600 dark:text-slate-400 font-body">يرجى ملء البيانات التالية بدقة وسيتواصل معك مستشارنا خلال 24 ساعة.</p>
          </div>

          <!-- Success Alert Message (Shown via contact.js) -->
          <div id="formSuccess" class="hidden p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-headline">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>تم استلام طلبكم بنجاح! سيتواصل معكم فريق YOUR SPACE MAX في أقرب وقت.</span>
            </div>
          </div>

          <form id="contactForm" class="space-y-5 font-body">
            
            <!-- Full Name -->
            <div class="space-y-1.5">
              <label for="fullName" class="block text-sm font-headline font-semibold text-slate-800 dark:text-slate-200">الاسم واللقب *</label>
              <input type="text" id="fullName" required class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-brand dark:focus:border-brand-dark focus:ring-1 focus:ring-brand outline-none transition-all" placeholder="مثال: محمد بن علي">
            </div>

            <!-- Entity / Project Name -->
            <div class="space-y-1.5">
              <label for="entityRole" class="block text-sm font-headline font-semibold text-slate-800 dark:text-slate-200">الصفة / اسم المشروع أو المؤسسة</label>
              <input type="text" id="entityRole" class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-brand dark:focus:border-brand-dark focus:ring-1 focus:ring-brand outline-none transition-all" placeholder="مثال: صاحب فكرة مبتكرة / شركة ناشئة">
            </div>

            <!-- Phone & Email Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label for="phone" class="block text-sm font-headline font-semibold text-slate-800 dark:text-slate-200">رقم الهاتف *</label>
                <input type="tel" id="phone" required dir="ltr" class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-brand dark:focus:border-brand-dark focus:ring-1 focus:ring-brand outline-none transition-all text-right" placeholder="0550 00 00 00">
              </div>
              <div class="space-y-1.5">
                <label for="email" class="block text-sm font-headline font-semibold text-slate-800 dark:text-slate-200">البريد الإلكتروني *</label>
                <input type="email" id="email" required dir="ltr" class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-brand dark:focus:border-brand-dark focus:ring-1 focus:ring-brand outline-none transition-all text-right" placeholder="name@domain.com">
              </div>
            </div>

            <!-- Service Selection -->
            <div class="space-y-1.5">
              <label for="serviceSelect" class="block text-sm font-headline font-semibold text-slate-800 dark:text-slate-200">الخدمة المطلوبة *</label>
              <select id="serviceSelect" required class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-brand dark:focus:border-brand-dark focus:ring-1 focus:ring-brand outline-none transition-all">
                <option value="">اختر الخدمة من القائمة...</option>
                ${data.services.map(s => `
                <option value="${s.id}">${s.num}. ${s.title}</option>
                `).join('')}
                <option value="other">استشارة عامة / خدمة أخرى</option>
              </select>
            </div>

            <!-- Message / Notes -->
            <div class="space-y-1.5">
              <label for="message" class="block text-sm font-headline font-semibold text-slate-800 dark:text-slate-200">تفاصيل الطلب أو الفكرة *</label>
              <textarea id="message" rows="4" required class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:border-brand dark:focus:border-brand-dark focus:ring-1 focus:ring-brand outline-none transition-all resize-y" placeholder="اكتب نبذة مختصرة عن مشروعك أو استفسارك..."></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full py-4 rounded-lg font-headline font-bold text-base bg-brand text-white hover:bg-brand-hover dark:bg-brand-dark dark:hover:bg-blue-600 transition-colors shadow-sm">
              إرسال الطلب
            </button>
          </form>
        </div>

        <!-- Right Column: Coordinates & Information (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <div class="space-y-4">
            <h3 class="text-2xl font-headline font-bold text-slate-900 dark:text-white">معلومات الاتصال المباشر</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
              يمكنكم التواصل المباشر مع إدارة الشركة أو زيارة مقرنا الرسمي بحاضنة أعمال جامعة قسنطينة 1.
            </p>
          </div>

          <!-- Cards -->
          <div class="space-y-4 font-body">
            
            <!-- Headquarters -->
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div class="space-y-1">
                <h4 class="font-headline font-bold text-sm text-slate-900 dark:text-white">المقر الرسمي:</h4>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${data.brand.headquarters}</p>
              </div>
            </div>

            <!-- Phone / WhatsApp (24/24) -->
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div class="space-y-1">
                <h4 class="font-headline font-bold text-sm text-slate-900 dark:text-white">الهاتف و WhatsApp:</h4>
                <a href="tel:${data.brand.phoneTel}" class="text-base font-accent font-bold text-slate-900 dark:text-white hover:text-brand dark:hover:text-brand-dark transition-colors block" dir="ltr">
                  ${data.brand.phoneDisplay}
                </a>
                <span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium block">متاح على مدار الساعة (${data.brand.phoneAvailability})</span>
              </div>
            </div>

            <!-- Instant WhatsApp Button -->
            <a href="${data.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-headline font-bold text-sm flex items-center justify-center gap-2.5 transition-colors shadow-sm">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>تواصل معنا عبر WhatsApp</span>
            </a>

          </div>

          <!-- Social Channels -->
          <div class="pt-2 space-y-3">
            <h4 class="font-headline font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">شبكات التواصل الاجتماعي:</h4>
            <div class="flex items-center gap-3">
              <a href="#" class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-brand hover:text-white dark:hover:bg-brand-dark transition-colors font-headline text-xs font-bold" aria-label="LinkedIn">
                in
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-brand hover:text-white dark:hover:bg-brand-dark transition-colors font-headline text-xs font-bold" aria-label="Facebook">
                fb
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-brand hover:text-white dark:hover:bg-brand-dark transition-colors font-headline text-xs font-bold" aria-label="Instagram">
                ig
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- Interactive Map Section -->
  <section class="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <h3 class="text-xl font-headline font-bold text-slate-900 dark:text-white">موقعنا الجغرافي</h3>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body">${data.brand.headquarters}</p>
      </div>

      <div class="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-200 dark:bg-slate-800">
        <iframe 
          title="مقر حاضنة جامعة قسنطينة 1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.4323759904285!2d6.621251376377777!3d36.3262699723847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1712a14e6fa79%3A0x6334fb469a8b6e70!2sUniversit%C3%A9%20Constantine%201%20Fr%C3%A8res%20Mentouri!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>

  ${footer}

  <!-- Client-side Modular Scripts -->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/contact.js"></script>
</body>
</html>`;
};

