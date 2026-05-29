# Windy City Dumpsters — Homepage Design Spec
_Date: 2026-05-29_

---

## Overview

Lead generation website for dumpster rental in Chicago. The site looks and operates as a legitimate local dumpster rental company. Visitors call or fill out a quote form; those leads are forwarded to a partner dumpster company who pays $40–70 per booked job.

**Primary conversion goal:** Get visitors to call the phone number.
**Secondary conversion goal:** Get visitors to fill out the quote form.
**Tech stack:** Plain HTML, CSS, JavaScript. No framework. Hosted on Netlify.

---

## Design Direction

**Aesthetic:** Premium, clean, high-trust. "The Apple of dumpsters." Inspired by Carvana-style service sites — white backgrounds, generous spacing, confident typography, minimal decoration.

**Color palette (Chicago flag-themed):**
- Chicago Blue: `#00AEEF` — primary brand color (nav, marquee accents, step numbers, section tags, chip dots)
- Chicago Red: `#CC0000` — CTA color (phone button, hero accent word)
- White: `#FFFFFF` — dominant background
- Near-black: `#0A0A0B` — text, marquee background, footer
- Gray-100: `#F3F4F6` — alternating section backgrounds
- Gray-300: `#D1D5DB` — borders
- Gray-500: `#6B7280` — body text, subtitles

**Typography:** Inter (Google Fonts), weights 400/500/600/700/800/900. Letter-spacing tightened on headings (`-1.5px` to `-1.8px`).

**No em dashes anywhere in copy.** Use periods to break sentences instead.

---

## Page Structure (Homepage)

### 1. Navigation Bar
- Background: Chicago Blue (`#00AEEF`)
- Left: Logo — dumpster emoji icon in a rounded square (rgba white bg) + "Windy City Dumpsters" wordmark (white, bold)
- Center: Nav links — Sizes, Same-Day Delivery, Service Areas (white, 500 weight)
- Right: Phone number in a Red (`#CC0000`) pill button — "📞 (312) 555-0100"
- Height: 66px

### 2. Hero Section
- Background: White
- Subtle radial blue glow in top-right corner (decorative, low opacity)
- **Eyebrow tag:** Chicago Blue pill — pulsing dot + "Same-Day Delivery Available · Chicago & Suburbs"
- **H1 (SEO keyword-rich):** "Dumpster Rental in Chicago" — dark text, 44px, weight 900, letter-spacing -1.5px. "Chicago" rendered in Chicago Blue.
- **Tagline (brand personality lives here):** "Same-Day Delivery Across Chicagoland. No hidden fees. No BS." — gray-500, 17px, weight 600
- **Body copy:** Mentions homeowners, contractors, property managers, Chicago, 40+ suburbs, 10/20/30 yard sizes, free quote
- **CTAs:** Red "📞 Call (312) 555-0100" button (primary) + white outlined "Get a Free Quote →" button (secondary)
- **Social proof row:** 4 overlapping colored avatar circles + "500+ Chicago homeowners & contractors trust Windy City Dumpsters" + divider + "★★★★★ 5.0 on Google"

### 3. Marquee Ticker
- Background: Near-black (`#0A0A0B`)
- Continuously scrolling (22s loop), white text, uppercase, 12px, weight 700
- Items: "✦ Same-Day Delivery Available", "Free Quotes in Minutes" (blue accent), "No Hidden Fees", "Licensed & Insured", "7 Days a Week", "Chicago & 40+ Suburbs" (blue accent), "10 · 20 · 30 Yard Dumpsters", "500+ Jobs Completed"

### 4. Stats Bar
- White background, border-bottom, 4 columns separated by thin lines
- Stats: "500+" jobs completed | "Free Quotes" (blue) / fast & no obligation | "Same Day" (blue) / delivery available | "40+" suburbs served

### 5. Dumpster Sizes Section
- White background
- Section tag: "Dumpster Sizes" (blue, uppercase)
- Title: "Find the Right Size for Your Project"
- Subtitle: "Not sure what you need? Call us and we'll help you pick the right size in 60 seconds. No pressure, no commitment."
- **3 cards** (10/20/30 yard), equal-width grid:
  - Each: emoji icon, size name, capacity chip (e.g., "~3 Pickup Truck Loads"), 3 use-case checkmarks, "Get a Quote →" CTA
  - 20 yard card has "⭐ Most Popular" badge and Chicago Blue border/CTA
- **No prices displayed.** Visitors must call or fill out form to get pricing.

### 6. How It Works Section
- Light gray background (`#F3F4F6`)
- 4 steps in a grid: numbered blue circles
  1. Call or Request a Quote
  2. We Arrange Delivery ("Same-day delivery is often available. We connect you with a local provider who delivers to your address.")
  3. Fill It Up
  4. We Pick It Up

### 7. Testimonials Section
- White background
- 3 review cards: star rating, italic quote text, avatar + name + Chicago-area location
- Reviews reference specific Chicago suburbs (Lincoln Park, Naperville, Evanston) for local SEO

### 8. Service Areas Section
- Light gray background
- Subtitle: "We connect you with local dumpster providers across Chicago and 40+ surrounding communities. Same-day delivery available in most areas."
- Grid of suburb chips (white cards with blue dot): Chicago, Naperville, Evanston, Oak Park, Schaumburg, Arlington Heights, Skokie, Cicero, Aurora, Joliet, Elgin, Waukegan, Berwyn, Des Plaines, Orland Park, Bolingbrook
- "View all service areas →" link below

### 9. FAQ Section
- White background
- 7 questions, all fully expanded and visible by default — Google must be able to crawl the answer text for FAQ rich snippets. A JS accordion can be added as a visual enhancement later, but answers must never be hidden from the DOM on load.
- Questions target real search queries:
  1. How much does dumpster rental cost in Chicago?
  2. Do you offer same-day dumpster delivery in Chicago?
  3. Do I need a permit for a dumpster in Chicago?
  4. What size dumpster do I need?
  5. How long can I keep the dumpster?
  6. What can I throw in the dumpster?
  7. Do you serve suburbs outside Chicago?
- **Answers are honest about the lead-gen model:** no price commitments, same-day "subject to availability," "we connect you with a local provider"
- Structured for `FAQPage` JSON-LD schema markup (implemented in `<head>`)

### 10. CTA Band
- Chicago Blue background
- Left: "Ready to Book?" tag + "Get Your Free Quote in Minutes" headline + "Call now or fill out the form. We'll match you with a local provider fast."
- Right: White "📞 Call (312) 555-0100" button + outline "Get a Free Quote Online →" button

### 11. Quote Form Placeholder
- `<div id="quote-form">` placeholder for Tally.so embed
- Owner sets up Tally form separately and pastes embed code into this div
- Fields (for reference): First name, phone, email, ZIP, dumpster size (dropdown), project type (dropdown), when needed (dropdown), submit button "Get My Free Quote →"

### 12. Footer
- Near-black background
- Left: "Windy City Dumpsters" wordmark (blue accent on "Dumpsters")
- Center: Nav links (Sizes, Same-Day, Service Areas, Contact)
- Right: Phone number in blue

---

## SEO Requirements (every page)

- Unique `<title>` tag — Homepage: `Dumpster Rental Chicago | Same-Day Delivery | Windy City Dumpsters`
- Meta description (150–160 chars) mentioning location and CTA
- H1 on every page containing target keyword
- Canonical tag (`<link rel="canonical">`)
- `LocalBusiness` JSON-LD schema in `<head>` (name, phone, address, url, areaServed)
- `FAQPage` JSON-LD schema on homepage
- `AggregateRating` JSON-LD schema (once real reviews exist — placeholder in v1)
- Alt text on all images/icons
- No render-blocking scripts
- Google Analytics 4 `<script>` placeholder in `<head>` (owner pastes GA4 tag)

---

## Placeholder Values (owner to replace before launch)

- Phone: `(312) 555-0100` → real Google Voice number
- Address: `123 N Michigan Ave, Ste 100, Chicago IL 60601` → real virtual mailbox address
- ZIP: `60601` → real ZIP
- GA4 tag: `<!-- GA4 TAG HERE -->` comment in `<head>`
- Tally.so form: `<div id="quote-form"><!-- TALLY EMBED HERE --></div>`

---

## Copy Decisions

- **No prices anywhere on the site.** Prices are set by the partner company and may change. Removing prices forces visitors to call or fill out the form (a lead). Showing prices allows silent self-qualification and bounce.
- **Same-day delivery:** Language uses "available" framing, never a hard promise. "Subject to provider availability." Reflects reality of the lead-gen model.
- **No em dashes in copy.** Use periods to break sentences for a cleaner, more confident tone.
- **Lead-gen model not disclosed on site.** Site presents as a legitimate local dumpster rental company.

---

## File Structure

```
windycitydumpsters/
├── index.html
├── dumpster-sizes.html
├── pricing.html
├── same-day-dumpster-rental-chicago.html
├── affordable-dumpster-rental-chicago.html
├── how-it-works.html
├── service-areas.html
├── contact.html
├── dumpster-rental-naperville.html
├── dumpster-rental-evanston.html
├── dumpster-rental-oak-park.html
├── dumpster-rental-schaumburg.html
├── dumpster-rental-arlington-heights.html
├── dumpster-rental-skokie.html
├── dumpster-rental-cicero.html
├── dumpster-rental-aurora.html
├── dumpster-rental-joliet.html
├── dumpster-rental-elgin.html
├── dumpster-rental-waukegan.html
├── dumpster-rental-berwyn.html
├── dumpster-rental-des-plaines.html
├── dumpster-rental-orland-park.html
├── dumpster-rental-bolingbrook.html
├── sitemap.xml
├── robots.txt
├── css/
│   └── styles.css
└── js/
    └── main.js
```

---

## Build Order

1. `css/styles.css` + shared header/footer partials (inline in each HTML file for simplicity)
2. `index.html` (homepage) — this spec
3. `pricing.html` (highest conversion value)
4. `same-day-dumpster-rental-chicago.html` (first-mover keyword)
5. `affordable-dumpster-rental-chicago.html`
6. `dumpster-sizes.html`
7. `how-it-works.html` + `contact.html`
8. All 15 suburb pages (batch)
9. `service-areas.html`
10. `sitemap.xml` + `robots.txt`
11. Schema markup audit across all pages
12. Mobile and speed review
