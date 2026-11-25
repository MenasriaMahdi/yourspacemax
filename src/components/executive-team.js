/**
 * Executive Management & Team Component
 * Highlights Founder & CEO (FILALI SARA), the Expert Network, and Core Methodology Values
 */
const data = require('../data/site-data');

module.exports = function renderExecutiveTeam() {
  const { executive, team, values } = data;

  return `
  <!-- ========================================================================= -->
  <!-- الإدارة التنفيذية والفريق (Executive Management, Team & Core Values) -->
  <!-- ========================================================================= -->
  <div class="space-y-16 pt-16 border-t border-slate-200 dark:border-slate-800">
    
    <!-- Section Sub-Header -->
    <div class="text-center max-w-3xl mx-auto space-y-3">
      <span class="text-xs font-accent uppercase tracking-widest text-brand dark:text-brand-dark font-bold block">
        القيادة والكفاءات
      </span>
      <h3 class="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-slate-900 dark:text-white">
        الإدارة التنفيذية والفريق
      </h3>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-body leading-relaxed">
        رؤية استراتيجية طموحة تجمع بين الخبرة القانونية والإدارية والتكنولوجية، مدعومة بنخبة من الخبراء والمتخصصين.
      </p>
    </div>

    <!-- 1. بطاقة الإدارة التنفيذية: FILALI SARA | فيلالي سارة -->
    <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 space-y-10 relative">
      
      <!-- Ambient Background Glow -->
      <div class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand/5 dark:bg-brand-dark/10 blur-3xl pointer-events-none"></div>

      <!-- Header: Identity, Title, and Direct Social Profiles -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
        
        <div class="flex items-center gap-5">
          <!-- Monogram / Leadership Avatar Badge -->
          <div class="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-brand to-blue-600 dark:from-brand-dark dark:to-blue-500 text-white flex items-center justify-center font-latin font-extrabold text-2xl sm:text-3xl shadow-lg shrink-0">
            SF
          </div>
          <div class="space-y-1.5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark font-headline text-xs font-bold">
                الإدارة التنفيذية
              </span>
            </div>
            <h4 class="text-2xl sm:text-3xl font-headline font-extrabold text-slate-900 dark:text-white leading-tight">
              ${executive.nameEn} <span class="text-slate-400 dark:text-slate-500 font-normal">|</span> ${executive.nameAr}
            </h4>
            <p class="font-latin text-sm sm:text-base font-semibold text-brand dark:text-brand-dark tracking-wide">
              ${executive.role}
            </p>
          </div>
        </div>

        <!-- Social Media Profiles for FILALI SARA (Exact Links) -->
        <div class="flex items-center gap-2.5 sm:self-center">
          <!-- LinkedIn -->
          <a href="${executive.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="group relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0A66C2] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs" aria-label="LinkedIn - FILALI SARA">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span class="pointer-events-none absolute -bottom-8 px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-headline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
          </a>
          <!-- Facebook -->
          <a href="${executive.socials.facebook}" target="_blank" rel="noopener noreferrer" class="group relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#1877F2] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs" aria-label="Facebook - FILALI SARA">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span class="pointer-events-none absolute -bottom-8 px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-headline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Facebook</span>
          </a>
          <!-- Instagram -->
          <a href="${executive.socials.instagram}" target="_blank" rel="noopener noreferrer" class="group relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs" aria-label="Instagram - FILALI SARA">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span class="pointer-events-none absolute -bottom-8 px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-headline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Instagram</span>
          </a>
          <!-- TikTok -->
          <a href="${executive.socials.tiktok}" target="_blank" rel="noopener noreferrer" class="group relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-950 hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs border border-transparent" aria-label="TikTok - FILALI SARA">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            <span class="pointer-events-none absolute -bottom-8 px-2 py-0.5 rounded bg-slate-900 text-white text-[11px] font-headline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">TikTok</span>
          </a>
        </div>

      </div>

      <!-- Professional Bio Grid (6 Competency Cards) -->
      <div class="space-y-4">
        <h5 class="font-headline font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <span>النبذة المهنية</span>
          <span class="w-8 h-0.5 bg-brand dark:bg-brand-dark rounded"></span>
        </h5>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          ${executive.bio.map(item => `
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2.5 transition-all hover:border-brand/40 dark:hover:border-brand-dark/40">
            <h6 class="font-headline font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand dark:bg-brand-dark"></span>
              <span>${item.title}</span>
            </h6>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-body leading-relaxed">
              ${item.desc}
            </p>
          </div>
          `).join('')}
        </div>
      </div>

      <!-- Professional Vision Quote Box -->
      <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-brand/5 via-blue-50/50 to-transparent dark:from-brand-dark/10 dark:via-slate-800/60 dark:to-transparent border-r-4 border-brand dark:border-brand-dark border border-slate-200 dark:border-slate-800 space-y-2">
        <span class="font-headline font-bold text-xs uppercase tracking-wider text-brand dark:text-brand-dark block">
          الرؤية المهنية:
        </span>
        <blockquote class="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-body leading-relaxed italic">
          «${executive.vision}»
        </blockquote>
      </div>

    </div>

    <!-- 2. فريق العمل وشبكة الخبراء (The Team & Specializations) -->
    <div class="space-y-8">
      
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h4 class="text-xl sm:text-2xl font-headline font-bold text-slate-900 dark:text-white">
          فريق العمل وشبكة الكفاءات
        </h4>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-body leading-relaxed">
          ${team.intro}
        </p>
      </div>

      <!-- 6 Specialization Domains Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${team.specializations.map(spec => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand dark:hover:border-brand-dark hover:shadow-md transition-all space-y-3 group">
          <div class="flex items-center justify-between">
            <span class="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand-dark/20 text-brand dark:text-brand-dark flex items-center justify-center font-latin font-bold text-sm">
              ${spec.num}
            </span>
          </div>
          <h5 class="font-headline font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-dark transition-colors">
            ${spec.title}
          </h5>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">
            ${spec.desc}
          </p>
        </div>
        `).join('')}
      </div>

    </div>

    <!-- 3. رؤيتنا ومنهجية عملنا (Our Vision & Core Methodology Values) -->
    <div class="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6">
      
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <span class="text-xs font-accent uppercase tracking-widest text-brand-dark font-bold block">
          ركائز التميز
        </span>
        <h4 class="text-xl sm:text-2xl font-headline font-extrabold text-white">
          رؤيتنا ومنهجية عملنا
        </h4>
        <p class="text-xs sm:text-sm text-slate-300 font-body">
          قيم حاكمة ترشد مسارنا وتضمن تحقيق أفضل أثر مستدام لمشاريع شركائنا.
        </p>
      </div>

      <!-- Values Cards Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
        ${values.map(val => `
        <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 text-center space-y-1.5 hover:border-brand-dark transition-all duration-200 group">
          <span class="font-latin text-xs font-extrabold text-brand-dark tracking-wider block uppercase group-hover:text-white transition-colors">
            ${val.en}
          </span>
          <span class="font-headline font-bold text-sm text-white block">
            ${val.ar}
          </span>
        </div>
        `).join('')}
      </div>

    </div>

  </div>
  `;
};
