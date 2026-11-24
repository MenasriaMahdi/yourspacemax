# YOUR SPACE MAX — Official Corporate Portal

> **YOUR JOURNEY. OUR SPACE.**  
> من الفكرة إلى المشروع، ومن التخطيط إلى التنفيذ والتطوير.

---

## 🏛️ Project Architecture

A clean, modern, and production-ready static architecture with modular components, separation of concerns, and zero runtime dependencies:

```text
youspace/
├── assets/
│   ├── css/
│   │   └── style.css            # Typography, smooth scroll, custom scrollbar
│   ├── js/
│   │   ├── tailwind.config.js   # Tailored theme colors & fonts configuration
│   │   ├── theme.js             # Instant Dark/Light mode toggle & persistence
│   │   ├── main.js              # Mobile navigation drawer & interaction
│   │   ├── scrollspy.js         # Right-side floating section navigator
│   │   └── contact.js           # Form validation & service URL preselection
│   └── images/
│       ├── logo.png             # Official circular brand logo
│       ├── logo-original.png    # High-resolution original master logo
│       ├── hero-corporate.jpg   # Hero visual anchor
│       └── service-*.jpg        # Dedicated photography for the 6 services
├── src/
│   ├── data/
│   │   └── site-data.js         # Single source of truth (services, stats, milestones)
│   ├── components/
│   │   ├── head.js              # Document head & meta tags
│   │   ├── header.js            # Sticky corporate navigation
│   │   ├── footer.js            # Corporate footer with phone, map & legal copy
│   │   └── side-nav.js          # Section indicator dock
│   ├── pages/
│   │   ├── index-page.js        # Homepage template
│   │   ├── services-page.js     # Services page template
│   │   └── contact-page.js      # Contact page template
│   └── build.js                 # Lightweight template compiler
├── scripts/
│   └── validate.js              # Automated link, syntax & image validator
├── index.html                   # Compiled production homepage
├── services.html                # Compiled production services page
├── contact.html                 # Compiled production contact page
├── package.json                 # Project configuration & npm scripts
└── README.md                    # Documentation
```

---

## 🚀 Commands

### Build Production Pages
Compiles all templates from `src/` to root HTML:
```bash
npm run build
# or: node src/build.js
```

### Validate Integrity
Validates all links, anchor hashes, JS syntax, and image paths:
```bash
npm run validate
# or: node scripts/validate.js
```

---

## 🎨 Brand Identity & Guidelines

- **Typography:**
  - Arabic: `IBM Plex Sans Arabic` (weights 300 to 700)
  - Latin Brand Headers: `Plus Jakarta Sans`
- **Colors:**
  - Primary Corporate Blue: `#003779`
  - Dark Mode Accent Blue: `#3b82f6`
  - Surface Backgrounds: Light `#ffffff` / Dark `#020617`
- **Default Theme:** Dark Mode (with instant 1-click toggle to Light Mode)
- **Headquarters:** Constantine 1 University Business Incubator (حاضنة أعمال جامعة قسنطينة 1)
- **Contact:** `0553 18 28 81` (24/7 Service)

