/**
 * Footer Component (Corporate Specification Compliance)
 */
const data = require('../data/site-data');

module.exports = function renderFooter() {
  return `
  <!-- Footer -->
  <footer class="bg-slate-950 text-slate-300 font-body border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <!-- Brand Info -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-brand dark:bg-slate-800 border border-brand/40 dark:border-slate-700 p-0 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
              <img src="assets/images/logo.png" alt="${data.brand.name} Logo" class="w-full h-full object-cover">
            </div>
            <div>
              <span class="text-xl font-bold font-latin text-white block tracking-tight">${data.brand.name}</span>
              <span class="text-xs font-latin text-brand-dark tracking-wider uppercase font-semibold">${data.brand.slogan}</span>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed font-body">
            ${data.brand.footerBio}
          </p>
        </div>

        <!-- Headquarters & Phone (Spec Requirements) -->
        <div class="space-y-4">
          <h4 class="text-white font-headline font-bold text-base">المقر والتواصل</h4>
          <ul class="space-y-3 text-xs text-slate-400">
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-brand-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span><strong>المقر:</strong> ${data.brand.headquarters}</span>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-brand-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>
                <strong>الهاتف / WhatsApp:</strong><br>
                <a href="tel:${data.brand.phoneTel}" class="text-white hover:text-brand-dark transition-colors font-accent" dir="ltr">${data.brand.phoneDisplay}</a>
                <span class="text-[11px] text-slate-500 block">(${data.brand.phoneAvailability})</span>
              </span>
            </li>
          </ul>
        </div>

        <!-- Quick Links (Spec Requirements) -->
        <div class="space-y-4">
          <h4 class="text-white font-headline font-bold text-base">روابط سريعة</h4>
          <ul class="space-y-2 text-xs font-headline">
            <li><a href="index.html" class="hover:text-brand-dark transition-colors">الرئيسية</a></li>
            <li><a href="index.html#about" class="hover:text-brand-dark transition-colors">من نحن</a></li>
            <li><a href="services.html" class="hover:text-brand-dark transition-colors">خدماتنا</a></li>
            <li><a href="index.html#achievements" class="hover:text-brand-dark transition-colors">إنجازاتنا</a></li>
            <li><a href="contact.html" class="hover:text-brand-dark transition-colors">تواصل معنا</a></li>
          </ul>
        </div>

        <!-- Direct WhatsApp Action -->
        <div class="space-y-4">
          <h4 class="text-white font-headline font-bold text-base">محادثة فورية</h4>
          <p class="text-xs text-slate-400 leading-relaxed font-body">
            فريق YOUR SPACE MAX مستعد للرد على استفساراتكم ومرافقتكم فورياً.
          </p>
          <a href="${data.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-headline text-sm font-semibold transition-colors shadow-sm">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>تواصل عبر WhatsApp</span>
          </a>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>${data.brand.copyright}</p>
        <p class="font-latin">Designed according to official brand guidelines.</p>
      </div>
    </div>
  </footer>
  `;
};

