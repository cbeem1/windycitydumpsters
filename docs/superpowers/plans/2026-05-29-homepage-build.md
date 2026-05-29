# Windy City Dumpsters — Homepage Build Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the production homepage (`index.html`) and shared CSS stylesheet for windycitydumpsters.com — a premium lead-gen dumpster rental site targeting Chicago.

**Architecture:** Plain HTML/CSS/JS — no framework, no build step. All styles live in `css/styles.css`. Each page is a self-contained HTML file with the nav and footer inlined (no server-side includes needed for a static Netlify deploy). JSON-LD schema blocks go in `<head>`. The homepage is the design reference for all other pages.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, CSS animations), vanilla JS (minimal — FAQ accordion only), Google Fonts (Inter), Netlify (static hosting).

**Spec:** `docs/superpowers/specs/2026-05-29-windycitydumpsters-homepage-design.md`

**Design reference mockup:** `.superpowers/brainstorm/90564-1780072201/content/full-page-v2.html`

---

## File Map

| File | Responsibility |
|---|---|
| `css/styles.css` | All shared styles — CSS variables, reset, nav, hero, marquee, stats, sizes, steps, reviews, areas, FAQ, CTA band, footer, media queries |
| `index.html` | Homepage — all 12 sections + SEO `<head>` + JSON-LD schemas |
| `js/main.js` | FAQ accordion toggle (progressive enhancement only) |
| `robots.txt` | Allow all crawlers |
| `sitemap.xml` | All 23 pages listed |

---

## Task 1: Project scaffold and CSS variables

**Files:**
- Create: `css/styles.css`
- Create: `js/main.js`

- [ ] **Step 1: Create the CSS file with variables, reset, and base typography**

Create `css/styles.css` with this exact content:

```css
/* ==============================================
   WINDY CITY DUMPSTERS — Shared Stylesheet
   Chicago flag palette: Blue #00AEEF + Red #CC0000
   ============================================== */

/* === GOOGLE FONTS === */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* === CSS VARIABLES === */
:root {
  --blue:       #00AEEF;
  --blue-dark:  #0090C7;
  --blue-light: #E8F7FD;
  --red:        #CC0000;
  --red-shadow: rgba(204, 0, 0, 0.25);
  --black:      #0A0A0B;
  --gray-800:   #1F2937;
  --gray-500:   #6B7280;
  --gray-300:   #D1D5DB;
  --gray-100:   #F3F4F6;
  --white:      #FFFFFF;
  --max-width:  1100px;
  --section-pad: 64px 48px;
}

/* === RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--black);
  background: var(--white);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* === UTILITIES === */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 48px;
}
.section-tag {
  display: inline-block;
  color: var(--blue);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.section-title {
  font-size: 30px;
  font-weight: 800;
  color: var(--black);
  letter-spacing: -0.8px;
  line-height: 1.15;
  margin-bottom: 10px;
}
.section-sub {
  font-size: 15px;
  color: var(--gray-500);
  max-width: 520px;
  line-height: 1.65;
  margin-bottom: 36px;
}

/* ==============================================
   NAVIGATION
   ============================================== */
.nav {
  background: var(--blue);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;
}
.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.nav__logo-icon {
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  flex-shrink: 0;
}
.nav__logo-text {
  font-size: 15px;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.3px;
}
.nav__logo-text span { color: rgba(255, 255, 255, 0.75); }
.nav__right {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav__links a {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.15s;
}
.nav__links a:hover { color: var(--white); }
.nav__phone {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--red);
  color: var(--white);
  font-size: 14px;
  font-weight: 800;
  padding: 9px 18px;
  border-radius: 8px;
  white-space: nowrap;
  transition: background 0.15s;
}
.nav__phone:hover { background: #aa0000; }
/* Mobile hamburger — hidden on desktop */
.nav__hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--white);
  margin: 5px 0;
  border-radius: 2px;
  transition: all 0.25s;
}

/* ==============================================
   HERO
   ============================================== */
.hero {
  background: var(--white);
  padding: 72px 48px 60px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(0, 174, 239, 0.07) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}
.hero__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
}
.hero__tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--blue-light);
  border: 1px solid rgba(0, 174, 239, 0.25);
  color: var(--blue-dark);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 24px;
}
.hero__tag-dot {
  width: 6px;
  height: 6px;
  background: var(--blue);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.75); }
}
.hero__h1 {
  font-size: 52px;
  font-weight: 900;
  color: var(--black);
  line-height: 1.06;
  letter-spacing: -2px;
  margin-bottom: 14px;
  max-width: 640px;
}
.hero__h1 .blue { color: var(--blue); }
.hero__tagline {
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-500);
  margin-bottom: 18px;
  letter-spacing: -0.2px;
  max-width: 520px;
}
.hero__tagline strong { color: var(--black); font-weight: 700; }
.hero__sub {
  font-size: 15px;
  color: var(--gray-500);
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 36px;
}
.hero__ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;
}
.btn--red {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--red);
  color: var(--white);
  font-size: 15px;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 16px var(--red-shadow);
  transition: background 0.15s, transform 0.1s;
  white-space: nowrap;
}
.btn--red:hover { background: #aa0000; transform: translateY(-1px); }
.btn--outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--white);
  color: var(--black);
  font-size: 15px;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 10px;
  border: 1.5px solid var(--gray-300);
  transition: border-color 0.15s, transform 0.1s;
  white-space: nowrap;
}
.btn--outline:hover { border-color: var(--gray-500); transform: translateY(-1px); }
.hero__trust {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.hero__avatars {
  display: flex;
}
.hero__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--white);
  margin-left: -10px;
  font-size: 11px;
  font-weight: 800;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__avatar:first-child { margin-left: 0; }
.hero__trust-text {
  font-size: 12px;
  color: var(--gray-500);
  line-height: 1.5;
}
.hero__trust-text strong { color: var(--black); }
.hero__trust-divider {
  width: 1px;
  height: 28px;
  background: var(--gray-300);
  flex-shrink: 0;
}
.hero__rating {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--gray-500);
}
.hero__stars { color: #F59E0B; letter-spacing: 1px; }

/* ==============================================
   MARQUEE TICKER
   ============================================== */
.marquee {
  background: var(--black);
  padding: 12px 0;
  overflow: hidden;
  white-space: nowrap;
}
.marquee__inner {
  display: inline-flex;
  animation: marquee-scroll 24s linear infinite;
}
.marquee__inner:hover { animation-play-state: paused; }
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee__item {
  display: inline-flex;
  align-items: center;
  padding: 0 28px;
  font-size: 11px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  gap: 8px;
}
.marquee__item .accent { color: var(--blue); }
.marquee__sep {
  color: rgba(255, 255, 255, 0.2);
  font-size: 16px;
  line-height: 1;
}

/* ==============================================
   STATS BAR
   ============================================== */
.stats {
  border-bottom: 1px solid var(--gray-100);
}
.stats__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 32px 48px;
  display: flex;
  justify-content: space-around;
}
.stats__item {
  text-align: center;
  flex: 1;
  position: relative;
}
.stats__item + .stats__item::before {
  content: '';
  position: absolute;
  left: 0; top: 10%;
  height: 80%; width: 1px;
  background: var(--gray-100);
}
.stats__num {
  font-size: 30px;
  font-weight: 900;
  color: var(--black);
  letter-spacing: -1px;
  margin-bottom: 4px;
  line-height: 1;
}
.stats__num .accent { color: var(--blue); }
.stats__num--blue {
  font-size: 21px;
  color: var(--blue);
  letter-spacing: -0.5px;
}
.stats__label {
  font-size: 11px;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 500;
}

/* ==============================================
   DUMPSTER SIZES
   ============================================== */
.sizes {
  padding: var(--section-pad);
}
.sizes__inner { max-width: var(--max-width); margin: 0 auto; }
.sizes__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.size-card {
  background: var(--white);
  border: 1.5px solid var(--gray-300);
  border-radius: 14px;
  padding: 28px 22px;
  position: relative;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.size-card:hover {
  border-color: var(--blue);
  box-shadow: 0 4px 20px rgba(0, 174, 239, 0.1);
}
.size-card--popular { border-color: var(--blue); }
.size-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--blue);
  color: var(--white);
  font-size: 10px;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
  letter-spacing: 0.3px;
}
.size-card__icon { font-size: 28px; margin-bottom: 14px; }
.size-card__name {
  font-size: 20px;
  font-weight: 800;
  color: var(--black);
  letter-spacing: -0.5px;
  margin-bottom: 6px;
}
.size-card__capacity {
  display: inline-block;
  background: var(--blue-light);
  color: var(--blue-dark);
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 10px;
  margin-bottom: 14px;
  letter-spacing: 0.2px;
}
.size-card__uses {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}
.size-card__use {
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-800);
  display: flex;
  align-items: center;
  gap: 7px;
}
.size-card__use::before {
  content: '✓';
  color: var(--blue);
  font-weight: 800;
  font-size: 11px;
  flex-shrink: 0;
}
.size-card__cta {
  display: block;
  background: var(--blue-light);
  color: var(--blue-dark);
  font-size: 13px;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 8px;
  text-align: center;
  transition: background 0.15s;
}
.size-card__cta:hover { background: #d0eefb; }
.size-card--popular .size-card__cta {
  background: var(--blue);
  color: var(--white);
}
.size-card--popular .size-card__cta:hover { background: var(--blue-dark); }

/* ==============================================
   HOW IT WORKS
   ============================================== */
.steps {
  background: var(--gray-100);
  padding: var(--section-pad);
}
.steps__inner { max-width: var(--max-width); margin: 0 auto; }
.steps__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.step { text-align: center; }
.step__num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--blue);
  color: var(--white);
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
}
.step__title {
  font-size: 14px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 8px;
  line-height: 1.3;
}
.step__desc {
  font-size: 13px;
  color: var(--gray-500);
  line-height: 1.6;
}

/* ==============================================
   TESTIMONIALS
   ============================================== */
.reviews {
  padding: var(--section-pad);
}
.reviews__inner { max-width: var(--max-width); margin: 0 auto; }
.reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.review-card {
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
}
.review-card__stars {
  color: #F59E0B;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.review-card__text {
  font-size: 13px;
  color: var(--gray-800);
  line-height: 1.65;
  font-style: italic;
  margin-bottom: 16px;
}
.review-card__author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.review-card__avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 800;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.review-card__name {
  font-size: 12px;
  font-weight: 700;
  color: var(--black);
}
.review-card__location {
  font-size: 11px;
  color: var(--gray-500);
}

/* ==============================================
   SERVICE AREAS
   ============================================== */
.areas {
  background: var(--gray-100);
  padding: var(--section-pad);
}
.areas__inner { max-width: var(--max-width); margin: 0 auto; }
.areas__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.area-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--white);
  border: 1.5px solid var(--gray-300);
  color: var(--gray-800);
  font-size: 12px;
  font-weight: 600;
  padding: 7px 15px;
  border-radius: 20px;
  transition: border-color 0.15s;
  text-decoration: none;
}
.area-chip:hover { border-color: var(--blue); }
.area-chip::before {
  content: '';
  width: 5px;
  height: 5px;
  background: var(--blue);
  border-radius: 50%;
  flex-shrink: 0;
}
.areas__more {
  font-size: 13px;
  font-weight: 600;
  color: var(--blue-dark);
  text-decoration: underline;
  text-decoration-color: rgba(0, 144, 199, 0.4);
}

/* ==============================================
   FAQ
   ============================================== */
.faq {
  padding: var(--section-pad);
}
.faq__inner { max-width: var(--max-width); margin: 0 auto; }
.faq__list { display: flex; flex-direction: column; }
.faq__item {
  border-bottom: 1px solid var(--gray-100);
  padding: 20px 0;
}
.faq__item:first-child { border-top: 1px solid var(--gray-100); }
.faq__question {
  font-size: 16px;
  font-weight: 700;
  color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
  user-select: none;
  line-height: 1.4;
}
.faq__icon {
  color: var(--blue);
  font-size: 22px;
  font-weight: 300;
  line-height: 1;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.faq__item.open .faq__icon { transform: rotate(45deg); }
.faq__answer {
  font-size: 14px;
  color: var(--gray-500);
  line-height: 1.75;
  margin-top: 12px;
  max-width: 640px;
}
/* All answers visible by default for SEO — JS hides them progressively */
.faq--js-ready .faq__answer { display: none; }
.faq--js-ready .faq__item.open .faq__answer { display: block; }

/* ==============================================
   CTA BAND
   ============================================== */
.cta-band {
  background: var(--blue);
  padding: var(--section-pad);
}
.cta-band__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}
.cta-band__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
}
.cta-band__title {
  font-size: 30px;
  font-weight: 900;
  color: var(--white);
  letter-spacing: -0.8px;
  line-height: 1.15;
  margin-bottom: 8px;
}
.cta-band__sub {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.cta-band__buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
}
.btn--white {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--white);
  color: var(--black);
  font-size: 15px;
  font-weight: 800;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: transform 0.1s;
  white-space: nowrap;
}
.btn--white:hover { transform: translateY(-1px); }
.btn--outline-white {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  padding: 13px 30px;
  border-radius: 10px;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  transition: border-color 0.15s;
  white-space: nowrap;
}
.btn--outline-white:hover { border-color: rgba(255, 255, 255, 0.7); }

/* ==============================================
   QUOTE FORM
   ============================================== */
.quote-form-section {
  padding: var(--section-pad);
  background: var(--white);
}
.quote-form-section__inner {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}
#quote-form {
  margin-top: 24px;
  min-height: 100px;
  border: 2px dashed var(--gray-300);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
  font-size: 14px;
}

/* ==============================================
   FOOTER
   ============================================== */
.footer {
  background: var(--black);
  padding: 36px 48px;
}
.footer__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.footer__logo {
  font-size: 15px;
  font-weight: 800;
  color: var(--white);
}
.footer__logo span { color: var(--blue); }
.footer__links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.footer__links a {
  font-size: 12px;
  color: #6B7280;
  transition: color 0.15s;
}
.footer__links a:hover { color: var(--white); }
.footer__phone {
  font-size: 14px;
  font-weight: 700;
  color: var(--blue);
}
.footer__copy {
  width: 100%;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 11px;
  color: #4B5563;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

/* ==============================================
   RESPONSIVE — TABLET (max 900px)
   ============================================== */
@media (max-width: 900px) {
  :root { --section-pad: 52px 32px; }

  .nav__inner { padding: 0 24px; }
  .nav__links { display: none; }
  .nav__hamburger { display: block; }
  .nav__phone { font-size: 13px; padding: 7px 14px; }

  .hero { padding: 52px 32px 48px; }
  .hero__h1 { font-size: 38px; }
  .hero__tagline { font-size: 16px; }

  .stats__inner { padding: 24px 32px; gap: 8px; }

  .sizes__grid { grid-template-columns: 1fr; gap: 24px; }

  .steps__grid { grid-template-columns: repeat(2, 1fr); }

  .reviews__grid { grid-template-columns: 1fr; }

  .cta-band__inner { flex-direction: column; text-align: center; }
  .cta-band__buttons { flex-direction: row; flex-wrap: wrap; justify-content: center; }

  .footer { padding: 32px 24px; }
  .footer__inner { justify-content: center; text-align: center; }
  .footer__links { justify-content: center; }

  .container { padding: 0 24px; }
}

/* ==============================================
   RESPONSIVE — MOBILE (max 600px)
   ============================================== */
@media (max-width: 600px) {
  :root { --section-pad: 44px 20px; }

  .nav__inner { padding: 0 20px; height: 58px; }
  .nav__logo-text { font-size: 13px; }

  .hero { padding: 44px 20px 40px; }
  .hero__h1 { font-size: 30px; letter-spacing: -1px; }
  .hero__tagline { font-size: 15px; }
  .hero__sub { font-size: 14px; }
  .hero__ctas { flex-direction: column; }
  .btn--red, .btn--outline { width: 100%; justify-content: center; }
  .hero__trust-divider { display: none; }

  .stats__inner { flex-wrap: wrap; padding: 20px; }
  .stats__item { flex: 1 1 45%; margin-bottom: 16px; }
  .stats__item + .stats__item::before { display: none; }

  .steps__grid { grid-template-columns: 1fr; }

  .cta-band__title { font-size: 24px; }
  .cta-band__buttons { width: 100%; }
  .btn--white, .btn--outline-white { width: 100%; }

  .footer__inner { flex-direction: column; gap: 16px; }
  .footer__copy { flex-direction: column; text-align: center; }
}
```

- [ ] **Step 2: Create the JS file**

Create `js/main.js`:

```javascript
// Windy City Dumpsters — main.js
// Progressive enhancement only. Page works fully without JS.

document.addEventListener('DOMContentLoaded', function () {

  // ── FAQ ACCORDION ──────────────────────────────────────
  // Mark FAQ as JS-ready so CSS can hide answers
  const faqList = document.querySelector('.faq__list');
  if (faqList) {
    faqList.closest('.faq').classList.add('faq--js-ready');

    // Open the first item by default
    const firstItem = faqList.querySelector('.faq__item');
    if (firstItem) firstItem.classList.add('open');

    faqList.addEventListener('click', function (e) {
      const question = e.target.closest('.faq__question');
      if (!question) return;
      const item = question.closest('.faq__item');
      const isOpen = item.classList.contains('open');
      // Close all
      faqList.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  }

  // ── MOBILE NAV ────────────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? '' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '66px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--blue)';
      navLinks.style.padding = '16px 24px 20px';
      navLinks.style.gap = '14px';
      navLinks.style.zIndex = '99';
      if (isOpen) {
        navLinks.removeAttribute('style');
      }
    });
  }

});
```

- [ ] **Step 3: Verify files exist**

```bash
ls /Users/connorwork/Desktop/windycitydumpsters/css/styles.css
ls /Users/connorwork/Desktop/windycitydumpsters/js/main.js
```

Expected: both files present, no error.

- [ ] **Step 4: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add css/styles.css js/main.js
git commit -m "feat: add shared CSS stylesheet and JS foundation"
```

---

## Task 2: Homepage HTML shell + SEO head

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html with complete `<head>`**

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO: Title -->
  <title>Dumpster Rental Chicago | Same-Day Delivery | Windy City Dumpsters</title>

  <!-- SEO: Meta description (156 chars) -->
  <meta name="description" content="Dumpster rental in Chicago and all suburbs. Same-day delivery available. 10, 20 &amp; 30 yard roll-offs. Call for a free quote — (312) 555-0100.">

  <!-- SEO: Canonical -->
  <link rel="canonical" href="https://windycitydumpsters.com/">

  <!-- SEO: Open Graph -->
  <meta property="og:title" content="Dumpster Rental Chicago | Same-Day Delivery | Windy City Dumpsters">
  <meta property="og:description" content="Same-day dumpster rental in Chicago and 40+ suburbs. 10, 20 &amp; 30 yard roll-offs. Free quotes. Call (312) 555-0100.">
  <meta property="og:url" content="https://windycitydumpsters.com/">
  <meta property="og:type" content="website">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/styles.css">

  <!-- GA4 placeholder — paste your GA4 script tag here -->
  <!-- GA4 TAG HERE -->

  <!-- LocalBusiness Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Windy City Dumpsters",
    "telephone": "(312) 555-0100",
    "url": "https://windycitydumpsters.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 N Michigan Ave, Ste 100",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60601",
      "addressCountry": "US"
    },
    "areaServed": "Chicago Metropolitan Area",
    "description": "Roll-off dumpster rental serving Chicago and 40+ suburbs. Same-day delivery available. 10, 20, and 30 yard sizes.",
    "openingHours": "Mo-Su 07:00-19:00",
    "priceRange": "$$"
  }
  </script>

  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does dumpster rental cost in Chicago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing varies depending on the dumpster size, rental duration, and your location. The best way to get an accurate quote is to call us or fill out the form. We'll get you a fast, no-obligation price from a local provider, typically within minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day dumpster delivery in Chicago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Same-day delivery is available in most Chicago and suburban areas, subject to provider availability. Call us as early as possible to maximize same-day chances. We'll let you know immediately whether it's possible for your location and date."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for a dumpster in Chicago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the dumpster sits on your private driveway or property, no permit is required. If you need it placed on a public street or alley in Chicago, a city permit is required. We can help you understand the process when you call."
        }
      },
      {
        "@type": "Question",
        "name": "What size dumpster do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For small cleanouts or single-room projects, a 10 yard is usually sufficient. The 20 yard handles most home remodels and medium cleanouts. The 30 yard is best for large renovations, roofing, or whole-home cleanouts. Call us and we'll help you choose in 60 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I keep the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard rentals typically include a 7-day rental period. Extended rentals are available. Just ask when you request your quote and we'll make sure you're set up with the right timeline for your project."
        }
      },
      {
        "@type": "Question",
        "name": "What can I throw in the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most household and construction debris is accepted: furniture, appliances, drywall, wood, roofing materials, yard waste, and general junk. Prohibited items typically include hazardous materials, tires, batteries, paint, and electronics."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve suburbs outside Chicago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve 40+ communities across Chicagoland including Naperville, Evanston, Schaumburg, Aurora, Joliet, Oak Park, and many more. Same-day delivery is available in most areas."
        }
      }
    ]
  }
  </script>

</head>
<body>

  <!-- CONTENT GOES HERE (Tasks 3–9) -->

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify no console errors**

Open `index.html` directly in Chrome (File > Open or drag-and-drop). Expected: blank white page, no console errors, Inter font loaded.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add homepage HTML shell with SEO head and JSON-LD schemas"
```

---

## Task 3: Navigation

**Files:**
- Modify: `index.html` — add nav inside `<body>` before the content placeholder comment

- [ ] **Step 1: Add the nav HTML**

Replace `<!-- CONTENT GOES HERE (Tasks 3–9) -->` in `index.html` with:

```html
  <!-- NAV -->
  <header>
    <nav class="nav" aria-label="Main navigation">
      <div class="nav__inner">
        <a href="/" class="nav__logo" aria-label="Windy City Dumpsters home">
          <div class="nav__logo-icon" aria-hidden="true">🗑</div>
          <span class="nav__logo-text">Windy City <span>Dumpsters</span></span>
        </a>
        <div class="nav__right">
          <ul class="nav__links">
            <li><a href="dumpster-sizes.html">Sizes</a></li>
            <li><a href="same-day-dumpster-rental-chicago.html">Same-Day Delivery</a></li>
            <li><a href="service-areas.html">Service Areas</a></li>
          </ul>
          <a href="tel:+13125550100" class="nav__phone">📞 (312) 555-0100</a>
          <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  </header>

  <main>
  <!-- CONTENT GOES HERE (Tasks 4–9) -->
  </main>
```

- [ ] **Step 2: Open in browser and verify nav renders**

Expected: Chicago Blue nav bar, logo left, links center, red phone pill right. On mobile (DevTools responsive, 375px), links should collapse and hamburger should appear.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add navigation bar"
```

---

## Task 4: Hero section

**Files:**
- Modify: `index.html` — add hero inside `<main>`, replacing the content placeholder comment

- [ ] **Step 1: Add hero HTML**

Replace `<!-- CONTENT GOES HERE (Tasks 4–9) -->` with:

```html
    <!-- HERO -->
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero__inner">
        <div class="hero__tag">
          <span class="hero__tag-dot" aria-hidden="true"></span>
          Same-Day Delivery Available &middot; Chicago &amp; Suburbs
        </div>
        <h1 class="hero__h1" id="hero-heading">
          Dumpster Rental in <span class="blue">Chicago</span>
        </h1>
        <p class="hero__tagline">
          <strong>Same-Day Delivery Across Chicagoland.</strong> No hidden fees. No BS.
        </p>
        <p class="hero__sub">
          Roll-off dumpster rental for homeowners, contractors, and property managers
          across Chicago and 40+ suburbs. 10, 20, and 30 yard sizes available.
          Call now for a fast, free quote.
        </p>
        <div class="hero__ctas">
          <a href="tel:+13125550100" class="btn--red">📞 Call (312) 555-0100</a>
          <a href="contact.html" class="btn--outline">Get a Free Quote &rarr;</a>
        </div>
        <div class="hero__trust">
          <div class="hero__avatars" aria-hidden="true">
            <div class="hero__avatar" style="background:#0f766e;">JK</div>
            <div class="hero__avatar" style="background:#1d4ed8;">MP</div>
            <div class="hero__avatar" style="background:#7c3aed;">SR</div>
            <div class="hero__avatar" style="background:#b45309;">DL</div>
          </div>
          <div class="hero__trust-text">
            <strong>500+ Chicago homeowners</strong> &amp; contractors<br>
            trust Windy City Dumpsters
          </div>
          <div class="hero__trust-divider" aria-hidden="true"></div>
          <div class="hero__rating">
            <span class="hero__stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span>5.0 on Google</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT CONTINUES (Tasks 5–9) -->
```

- [ ] **Step 2: Open in browser and verify hero renders**

Expected: Large H1 "Dumpster Rental in Chicago" with blue "Chicago", tagline below, two CTA buttons, avatar row with trust text and stars.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add hero section"
```

---

## Task 5: Marquee ticker and stats bar

**Files:**
- Modify: `index.html` — add marquee and stats after hero, replacing the continue comment

- [ ] **Step 1: Add marquee and stats HTML**

Replace `<!-- CONTENT CONTINUES (Tasks 5–9) -->` with:

```html
    <!-- MARQUEE TICKER -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee__inner">
        <span class="marquee__item">&#10022; Same-Day Delivery Available</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item"><span class="accent">Free</span> Quotes in Minutes</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">No Hidden Fees</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">Licensed &amp; Insured</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">7 Days a Week</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">Chicago &amp; <span class="accent">40+ Suburbs</span></span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">10 &middot; 20 &middot; 30 Yard Dumpsters</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">500+ Jobs Completed</span>
        <span class="marquee__sep">&middot;</span>
        <!-- Duplicate for seamless loop -->
        <span class="marquee__item">&#10022; Same-Day Delivery Available</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item"><span class="accent">Free</span> Quotes in Minutes</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">No Hidden Fees</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">Licensed &amp; Insured</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">7 Days a Week</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">Chicago &amp; <span class="accent">40+ Suburbs</span></span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">10 &middot; 20 &middot; 30 Yard Dumpsters</span>
        <span class="marquee__sep">&middot;</span>
        <span class="marquee__item">500+ Jobs Completed</span>
        <span class="marquee__sep">&middot;</span>
      </div>
    </div>

    <!-- STATS BAR -->
    <div class="stats">
      <div class="stats__inner">
        <div class="stats__item">
          <div class="stats__num">500<span class="accent">+</span></div>
          <div class="stats__label">Jobs Completed</div>
        </div>
        <div class="stats__item">
          <div class="stats__num stats__num--blue">Free Quotes</div>
          <div class="stats__label">Fast &amp; No Obligation</div>
        </div>
        <div class="stats__item">
          <div class="stats__num stats__num--blue">Same Day</div>
          <div class="stats__label">Delivery Available</div>
        </div>
        <div class="stats__item">
          <div class="stats__num">40<span class="accent">+</span></div>
          <div class="stats__label">Suburbs Served</div>
        </div>
      </div>
    </div>

    <!-- CONTENT CONTINUES (Tasks 6–9) -->
```

- [ ] **Step 2: Verify in browser**

Expected: Black ticker scrolling smoothly, 4 stats below with dividing lines.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add marquee ticker and stats bar"
```

---

## Task 6: Dumpster sizes section

**Files:**
- Modify: `index.html` — add sizes section

- [ ] **Step 1: Add sizes HTML**

Replace `<!-- CONTENT CONTINUES (Tasks 6–9) -->` with:

```html
    <!-- DUMPSTER SIZES -->
    <section class="sizes" aria-labelledby="sizes-heading">
      <div class="sizes__inner">
        <span class="section-tag">Dumpster Sizes</span>
        <h2 class="section-title" id="sizes-heading">Find the Right Size for Your Project</h2>
        <p class="section-sub">
          Not sure what you need? Call us and we'll help you pick the right size in
          60 seconds. No pressure, no commitment.
        </p>
        <div class="sizes__grid">

          <!-- 10 Yard -->
          <article class="size-card">
            <div class="size-card__icon" aria-hidden="true">🗑️</div>
            <h3 class="size-card__name">10 Yard</h3>
            <span class="size-card__capacity">~3 Pickup Truck Loads</span>
            <ul class="size-card__uses">
              <li class="size-card__use">Garage cleanouts</li>
              <li class="size-card__use">Small renovations</li>
              <li class="size-card__use">Single-room demos</li>
            </ul>
            <a href="contact.html" class="size-card__cta">Get a Quote &rarr;</a>
          </article>

          <!-- 20 Yard -->
          <article class="size-card size-card--popular">
            <div class="size-card__badge">&#11088; Most Popular</div>
            <div class="size-card__icon" aria-hidden="true">🗑️</div>
            <h3 class="size-card__name">20 Yard</h3>
            <span class="size-card__capacity">~6 Pickup Truck Loads</span>
            <ul class="size-card__uses">
              <li class="size-card__use">Kitchen &amp; bath remodels</li>
              <li class="size-card__use">Deck removal</li>
              <li class="size-card__use">Medium cleanouts</li>
            </ul>
            <a href="contact.html" class="size-card__cta">Get a Quote &rarr;</a>
          </article>

          <!-- 30 Yard -->
          <article class="size-card">
            <div class="size-card__icon" aria-hidden="true">🗑️</div>
            <h3 class="size-card__name">30 Yard</h3>
            <span class="size-card__capacity">~9 Pickup Truck Loads</span>
            <ul class="size-card__uses">
              <li class="size-card__use">Large renovations</li>
              <li class="size-card__use">Roofing projects</li>
              <li class="size-card__use">Whole-home cleanouts</li>
            </ul>
            <a href="contact.html" class="size-card__cta">Get a Quote &rarr;</a>
          </article>

        </div>
      </div>
    </section>

    <!-- CONTENT CONTINUES (Tasks 7–9) -->
```

- [ ] **Step 2: Verify in browser**

Expected: 3 equal cards in a row. 20 Yard card has blue border and blue "Most Popular" badge. All "Get a Quote" CTAs present. On mobile (375px), cards stack vertically.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add dumpster sizes section"
```

---

## Task 7: How It Works and Testimonials

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add How It Works HTML**

Replace `<!-- CONTENT CONTINUES (Tasks 7–9) -->` with:

```html
    <!-- HOW IT WORKS -->
    <section class="steps" aria-labelledby="steps-heading">
      <div class="steps__inner">
        <span class="section-tag">Process</span>
        <h2 class="section-title" id="steps-heading">How It Works</h2>
        <p class="section-sub">From call to delivery in as little as a few hours.</p>
        <div class="steps__grid">
          <div class="step">
            <div class="step__num" aria-hidden="true">1</div>
            <h3 class="step__title">Call or Request a Quote</h3>
            <p class="step__desc">
              Reach us by phone or fill out the form. We'll confirm your size
              and give you a quote in minutes.
            </p>
          </div>
          <div class="step">
            <div class="step__num" aria-hidden="true">2</div>
            <h3 class="step__title">We Arrange Delivery</h3>
            <p class="step__desc">
              Same-day delivery is often available. We connect you with a local
              provider who delivers to your address.
            </p>
          </div>
          <div class="step">
            <div class="step__num" aria-hidden="true">3</div>
            <h3 class="step__title">Fill It Up</h3>
            <p class="step__desc">
              Take your time. Keep the dumpster as long as your project needs.
            </p>
          </div>
          <div class="step">
            <div class="step__num" aria-hidden="true">4</div>
            <h3 class="step__title">We Pick It Up</h3>
            <p class="step__desc">
              Call or text when you're done. The dumpster gets hauled away.
              No hassle, no mess left behind.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="reviews" aria-labelledby="reviews-heading">
      <div class="reviews__inner">
        <span class="section-tag">Reviews</span>
        <h2 class="section-title" id="reviews-heading">What Chicago Customers Say</h2>
        <p class="section-sub">
          Real reviews from homeowners and contractors across Chicagoland.
        </p>
        <div class="reviews__grid">

          <article class="review-card">
            <div class="review-card__stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote class="review-card__text">
              "Called in the morning and had a dumpster in my driveway by noon.
              Super easy, fair price, no surprises on the invoice."
            </blockquote>
            <div class="review-card__author">
              <div class="review-card__avatar" style="background:#1d4ed8;" aria-hidden="true">JK</div>
              <div>
                <div class="review-card__name">James K.</div>
                <div class="review-card__location">Lincoln Park, Chicago</div>
              </div>
            </div>
          </article>

          <article class="review-card">
            <div class="review-card__stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote class="review-card__text">
              "Used them for a full kitchen gut job in Naperville. The 20 yard
              was perfect. Filled it up completely. Will book again."
            </blockquote>
            <div class="review-card__author">
              <div class="review-card__avatar" style="background:#0f766e;" aria-hidden="true">SR</div>
              <div>
                <div class="review-card__name">Sarah R.</div>
                <div class="review-card__location">Naperville, IL</div>
              </div>
            </div>
          </article>

          <article class="review-card">
            <div class="review-card__stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote class="review-card__text">
              "Third time using Windy City. Best pricing I've found in Chicago
              and the driver always places it exactly where I need it."
            </blockquote>
            <div class="review-card__author">
              <div class="review-card__avatar" style="background:#7c3aed;" aria-hidden="true">DM</div>
              <div>
                <div class="review-card__name">Dave M.</div>
                <div class="review-card__location">Contractor, Evanston</div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- CONTENT CONTINUES (Tasks 8–9) -->
```

- [ ] **Step 2: Verify in browser**

Expected: Gray steps section with 4 numbered blue circles. White reviews section with 3 cards, italic quotes, colored avatars.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add How It Works and testimonials sections"
```

---

## Task 8: Service areas and FAQ

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add service areas and FAQ HTML**

Replace `<!-- CONTENT CONTINUES (Tasks 8–9) -->` with:

```html
    <!-- SERVICE AREAS -->
    <section class="areas" aria-labelledby="areas-heading">
      <div class="areas__inner">
        <span class="section-tag">Service Areas</span>
        <h2 class="section-title" id="areas-heading">Serving Chicago &amp; All Suburbs</h2>
        <p class="section-sub">
          We connect you with local dumpster providers across Chicago and 40+
          surrounding communities. Same-day delivery available in most areas.
        </p>
        <div class="areas__grid">
          <a href="/" class="area-chip">Chicago</a>
          <a href="dumpster-rental-naperville.html" class="area-chip">Naperville</a>
          <a href="dumpster-rental-evanston.html" class="area-chip">Evanston</a>
          <a href="dumpster-rental-oak-park.html" class="area-chip">Oak Park</a>
          <a href="dumpster-rental-schaumburg.html" class="area-chip">Schaumburg</a>
          <a href="dumpster-rental-arlington-heights.html" class="area-chip">Arlington Heights</a>
          <a href="dumpster-rental-skokie.html" class="area-chip">Skokie</a>
          <a href="dumpster-rental-cicero.html" class="area-chip">Cicero</a>
          <a href="dumpster-rental-aurora.html" class="area-chip">Aurora</a>
          <a href="dumpster-rental-joliet.html" class="area-chip">Joliet</a>
          <a href="dumpster-rental-elgin.html" class="area-chip">Elgin</a>
          <a href="dumpster-rental-waukegan.html" class="area-chip">Waukegan</a>
          <a href="dumpster-rental-berwyn.html" class="area-chip">Berwyn</a>
          <a href="dumpster-rental-des-plaines.html" class="area-chip">Des Plaines</a>
          <a href="dumpster-rental-orland-park.html" class="area-chip">Orland Park</a>
          <a href="dumpster-rental-bolingbrook.html" class="area-chip">Bolingbrook</a>
        </div>
        <a href="service-areas.html" class="areas__more">View all service areas &rarr;</a>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq" aria-labelledby="faq-heading">
      <div class="faq__inner">
        <span class="section-tag">FAQ</span>
        <h2 class="section-title" id="faq-heading">Frequently Asked Questions</h2>
        <p class="section-sub">
          Everything you need to know about renting a dumpster in Chicago.
        </p>
        <div class="faq__list">

          <div class="faq__item open">
            <button class="faq__question" aria-expanded="true">
              How much does dumpster rental cost in Chicago?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              Pricing varies depending on the dumpster size, rental duration, and your location.
              The best way to get an accurate quote is to call us or fill out the form.
              We'll get you a fast, no-obligation price from a local provider, typically within minutes.
            </div>
          </div>

          <div class="faq__item">
            <button class="faq__question" aria-expanded="false">
              Do you offer same-day dumpster delivery in Chicago?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              Same-day delivery is available in most Chicago and suburban areas, subject to
              provider availability. Call us as early as possible to maximize same-day chances.
              We'll let you know immediately whether it's possible for your location and date.
            </div>
          </div>

          <div class="faq__item">
            <button class="faq__question" aria-expanded="false">
              Do I need a permit for a dumpster in Chicago?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              If the dumpster sits on your private driveway or property, no permit is required.
              If you need it placed on a public street or alley in Chicago, a city permit is
              required. We can help you understand the process when you call.
            </div>
          </div>

          <div class="faq__item">
            <button class="faq__question" aria-expanded="false">
              What size dumpster do I need?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              For small cleanouts or single-room projects, a 10 yard is usually sufficient.
              The 20 yard handles most home remodels and medium cleanouts. The 30 yard is
              best for large renovations, roofing, or whole-home cleanouts. Call us and
              we'll help you choose in 60 seconds.
            </div>
          </div>

          <div class="faq__item">
            <button class="faq__question" aria-expanded="false">
              How long can I keep the dumpster?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              Standard rentals typically include a 7-day rental period. Extended rentals are
              available. Just ask when you request your quote and we'll make sure you're set
              up with the right timeline for your project.
            </div>
          </div>

          <div class="faq__item">
            <button class="faq__question" aria-expanded="false">
              What can I throw in the dumpster?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              Most household and construction debris is accepted: furniture, appliances,
              drywall, wood, roofing materials, yard waste, and general junk. Prohibited
              items typically include hazardous materials, tires, batteries, paint, and
              electronics. If you're unsure about a specific item, give us a call.
            </div>
          </div>

          <div class="faq__item">
            <button class="faq__question" aria-expanded="false">
              Do you serve suburbs outside Chicago?
              <span class="faq__icon" aria-hidden="true">+</span>
            </button>
            <div class="faq__answer">
              Yes, we serve 40+ communities across Chicagoland including Naperville, Evanston,
              Schaumburg, Aurora, Joliet, Oak Park, and many more. Same-day delivery is
              available in most areas. See our full service area page for the complete list.
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CONTENT CONTINUES (Task 9) -->
```

- [ ] **Step 2: Verify in browser**

Expected: Gray service areas section with suburb chips linking to suburb pages. White FAQ section with 7 questions all visible. Clicking a question should toggle it open/closed (JS accordion). All answer text is readable in the DOM even before JS runs.

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add service areas and FAQ sections"
```

---

## Task 9: CTA band, quote form placeholder, and footer

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add CTA band, quote form, footer HTML**

Replace `<!-- CONTENT CONTINUES (Task 9) -->` and close `</main>`:

```html
    <!-- CTA BAND -->
    <section class="cta-band" aria-labelledby="cta-heading">
      <div class="cta-band__inner">
        <div class="cta-band__left">
          <div class="cta-band__tag">Ready to Book?</div>
          <h2 class="cta-band__title" id="cta-heading">
            Get Your Free Quote<br>in Minutes
          </h2>
          <p class="cta-band__sub">
            Call now or fill out the form. We'll match you with a local provider fast.
          </p>
        </div>
        <div class="cta-band__buttons">
          <a href="tel:+13125550100" class="btn--white">📞 Call (312) 555-0100</a>
          <a href="contact.html" class="btn--outline-white">Get a Free Quote Online &rarr;</a>
        </div>
      </div>
    </section>

    <!-- QUOTE FORM (Tally.so embed — owner pastes embed code here) -->
    <section class="quote-form-section" aria-labelledby="form-heading">
      <div class="quote-form-section__inner">
        <span class="section-tag">Get a Quote</span>
        <h2 class="section-title" id="form-heading">Request Your Free Quote</h2>
        <p class="section-sub" style="margin:0 auto 0;">
          Fill out the form and we'll get back to you within minutes with pricing
          and availability for your area.
        </p>
        <div id="quote-form">
          <!-- TALLY EMBED HERE -->
          Quote form coming soon — call us at (312) 555-0100 for immediate assistance.
        </div>
      </div>
    </section>

  </main><!-- /main -->

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__inner">
      <a href="/" class="footer__logo" aria-label="Windy City Dumpsters home">
        Windy City <span>Dumpsters</span>
      </a>
      <nav class="footer__links" aria-label="Footer navigation">
        <a href="dumpster-sizes.html">Sizes</a>
        <a href="same-day-dumpster-rental-chicago.html">Same-Day Delivery</a>
        <a href="service-areas.html">Service Areas</a>
        <a href="contact.html">Contact</a>
      </nav>
      <a href="tel:+13125550100" class="footer__phone">📞 (312) 555-0100</a>
      <div class="footer__copy">
        <span>&copy; 2026 Windy City Dumpsters. All rights reserved.</span>
        <span>Chicago, IL &middot; Serving Chicagoland and surrounding suburbs</span>
      </div>
    </div>
  </footer>
```

- [ ] **Step 2: Verify full page in browser**

Scroll through the complete page. Expected:
- Blue CTA band with two buttons
- Quote form placeholder section (dashed border box with placeholder text)
- Dark footer with logo, links, phone, copyright

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add index.html
git commit -m "feat: add CTA band, quote form placeholder, and footer"
```

---

## Task 10: robots.txt and sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create robots.txt**

Create `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://windycitydumpsters.com/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://windycitydumpsters.com/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-sizes.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/pricing.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/same-day-dumpster-rental-chicago.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/affordable-dumpster-rental-chicago.html</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/how-it-works.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/service-areas.html</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/contact.html</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-naperville.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-evanston.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-oak-park.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-schaumburg.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-arlington-heights.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-skokie.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-cicero.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-aurora.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-joliet.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-elgin.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-waukegan.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-berwyn.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-des-plaines.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-orland-park.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://windycitydumpsters.com/dumpster-rental-bolingbrook.html</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
</urlset>
```

- [ ] **Step 3: Commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add robots.txt sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml"
```

---

## Task 11: Final verification

**Files:** No changes — read-only verification pass.

- [ ] **Step 1: Visual check on desktop (1280px)**

Open `index.html` in Chrome at 1280px width. Scroll through every section. Verify:
- Nav is Chicago Blue, phone in red pill
- Hero H1 says "Dumpster Rental in Chicago" with blue "Chicago"
- Marquee scrolls continuously
- Stats bar has 4 columns with dividers
- 3 size cards, middle one has blue border and badge
- 4 How It Works steps in a row
- 3 testimonial cards
- 16 suburb chips in the areas grid
- 7 FAQ items, first one open, clicking others toggles them
- Blue CTA band
- Quote form placeholder section
- Dark footer

- [ ] **Step 2: Visual check on mobile (375px)**

Open Chrome DevTools, set to 375px. Verify:
- Nav collapses to logo + phone + hamburger
- Hamburger opens nav links as a dropdown
- Hero CTAs stack vertically
- Size cards stack to single column
- Steps wrap to 2 columns
- Review cards stack vertically
- CTA band stacks vertically

- [ ] **Step 3: Validate HTML**

Copy the content of `index.html` and paste into https://validator.w3.org/#validate_by_input. Expected: 0 errors (warnings about emoji in attributes are acceptable).

- [ ] **Step 4: Test schema markup**

Open https://search.google.com/test/rich-results and paste the full URL (or use the code snippet option with the JSON-LD from `index.html`). Expected: FAQPage and LocalBusiness schemas detected with no errors.

- [ ] **Step 5: Final commit**

```bash
cd /Users/connorwork/Desktop/windycitydumpsters
git add -A
git status
# Confirm nothing unexpected is staged
git commit -m "feat: complete homepage build — ready for Netlify deploy"
```

---

## Summary

| Task | Deliverable |
|---|---|
| 1 | `css/styles.css` + `js/main.js` |
| 2 | `index.html` shell with full SEO `<head>` + JSON-LD |
| 3 | Navigation bar |
| 4 | Hero section |
| 5 | Marquee ticker + stats bar |
| 6 | Dumpster sizes section |
| 7 | How It Works + testimonials |
| 8 | Service areas + FAQ |
| 9 | CTA band + quote form + footer |
| 10 | `robots.txt` + `sitemap.xml` |
| 11 | Full visual + mobile + schema verification |

**After this plan:** The homepage is complete and deployable to Netlify. The next plan covers the remaining pages (pricing, same-day, affordable, sizes, how-it-works, contact, 15 suburb pages, service-areas) using the shared CSS and header/footer already built here.
