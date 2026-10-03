# Arkevo - Marketplace Growth & Efficiency
### Modular Website & Client Analytics Dashboard

This repository contains the official high-converting website and live analytics dashboard for **Arkevo**, an e-commerce growth agency specializing in Amazon & Walmart PPC, ACoS reduction, and catalog optimization.

Official web assets, frontend codebase, and deployment configurations for Arkevo — an Amazon advertising and e-commerce growth agency.

---

## 📁 Fully Sub-Distributed Modular Architecture

All code—HTML sections, CSS styles, and JavaScript controllers—has been broken down into dedicated modular sub-files and connected through `index.html`:

```
arkevo-website/
├── index.html                   # Master entry point (links all modular sub-files)
├── dashboard.html               # High-tech interactive client analytics dashboard
├── build.js                     # Concatenation script to rebuild index.html
├── README.md                    # Documentation & usage guide
│
├── sections/                    # 12 Modular HTML Section partials
│   ├── navbar.html              # Sticky navigation with blur, logo & links
│   ├── hero.html                # Hero section with canvas & floating metrics
│   ├── marquee.html             # Trust ticker (Amazon Ads, Walmart, DSP)
│   ├── capabilities.html        # Core services (Media Buying, ACoS, Catalog SEO)
│   ├── tiers.html               # 3 Growth Stages (Launch, Scaling, Enterprise)
│   ├── comparison.html          # Comparison Matrix (Arkevo vs In-House vs Agencies)
│   ├── founders.html            # Co-Founders & Leadership team profiles
│   ├── case-studies.html        # Client results with before/after ACoS and ROAS
│   ├── audit.html               # 30-Minute Marketplace Diagnostic form
│   ├── faq.html                 # Interactive FAQ accordion
│   ├── cta.html                 # Pre-footer call-to-action banner
│   └── footer.html              # Multi-column footer with legal and sitemap
│
├── css/                         # 14 Sub-Distributed Modular Stylesheets
│   ├── base.css                 # Design tokens, reset, typography & buttons
│   ├── navbar.css               # Navigation bar styles & mobile menu
│   ├── hero.css                 # Hero section layout, typography & stats cards
│   ├── marquee.css              # Platform logo ticker styling
│   ├── capabilities.css         # Service cards, hover effects & badges
│   ├── tiers.css                # Growth stage cards & deliverables lists
│   ├── comparison.css           # Comparison matrix table & highlight column
│   ├── founders.css             # Co-founder cards, photo containers & bios
│   ├── case-studies.css         # Case study metrics & before/after styling
│   ├── audit.css                # Diagnostic checklist & form controls
│   ├── faq.css                  # FAQ accordion items, arrows & answers
│   ├── cta.css                  # CTA conversion card
│   ├── footer.css               # Footer columns & copyright bar
│   ├── responsive.css           # Mobile & tablet media queries
│   ├── style.css                # Master stylesheet (@import for all modules)
│   └── dashboard.css            # Dark glassmorphism client dashboard styles
│
├── js/                          # 5 Sub-Distributed Modular JavaScript Files
│   ├── animations.js            # IntersectionObserver for fade-in animations
│   ├── navbar.js                # Navbar blur on scroll & mobile hamburger toggle
│   ├── particles.js             # Hero particle mesh interactive canvas
│   ├── faq.js                   # FAQ accordion toggle handler
│   ├── audit.js                 # Diagnostic checklist & audit form submission
│   └── dashboard.js             # Chart.js graphs, sparklines & live counters
│
└── assets/                      # Static Brand Assets
    ├── logo-ecom.jpg            # Primary Arkevo brand logo
    ├── logo.jpg                 # Brand logo fallback
    ├── co-founder-1.jpg         # Co-Founder 1 (PPC & Media Director)
    └── co-founder-2.jpg         # Co-Founder 2 (Catalog & Operations Director)
```

---

## 🔗 How `index.html` Connects Everything

1. **CSS Files** in `<head>`:
   ```html
   <!-- Base Foundation -->
   <link rel="stylesheet" href="css/base.css">

   <!-- Sub-Distributed Section Styles -->
   <link rel="stylesheet" href="css/navbar.css">
   <link rel="stylesheet" href="css/hero.css">
   <link rel="stylesheet" href="css/marquee.css">
   <link rel="stylesheet" href="css/capabilities.css">
   <link rel="stylesheet" href="css/tiers.css">
   <link rel="stylesheet" href="css/comparison.css">
   <link rel="stylesheet" href="css/founders.css">
   <link rel="stylesheet" href="css/case-studies.css">
   <link rel="stylesheet" href="css/audit.css">
   <link rel="stylesheet" href="css/faq.css">
   <link rel="stylesheet" href="css/cta.css">
   <link rel="stylesheet" href="css/footer.css">
   <link rel="stylesheet" href="css/responsive.css">
   ```

2. **HTML Sections** in `<body>`:
   Included with explicit section markers corresponding to `sections/*.html`.

3. **JS Scripts** at the bottom of `<body>`:
   ```html
   <script src="js/animations.js"></script>
   <script src="js/navbar.js"></script>
   <script src="js/particles.js"></script>
   <script src="js/faq.js"></script>
   <script src="js/audit.js"></script>
   ```

---

## 🛠 How to Modify and Recompile

- Edit any HTML section in `sections/`.
- Edit any section style in `css/` (e.g. `css/founders.css`, `css/hero.css`).
- Edit any script in `js/` (e.g. `js/faq.js`, `js/audit.js`).
- Run `node build.js` to rebuild `index.html` with updated sections.
