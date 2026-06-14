# Al Nakhba Real Estate Design System

## Stitch Source

Project ID:

`5865304416264015253`

Source design:

Stone, Light & Glass

This document is based on the approved Stitch design for **النخبة للعقارات**.

The Stitch project is the visual source of truth. Do not redesign the website from scratch. Preserve the existing premium dark glass, stone, light, Mashrabiya frame, rounded hero frame, bento sections, gold glass borders, and cinematic real estate imagery.

## Core Requirement

Use **Thmanyah Arabic font** as the main website font across the design.

The final UI must be:

- Fully Arabic.
- Fully RTL.
- Mobile-first responsive.
- Premium and faithful to the selected Stitch design.
- Clear and readable on small screens.
- Built around the exact page structure below.

## Required Page Structure

| Page | Sections |
|---|---|
| Homepage | Hero + ServicesOverview + FeaturedProjects + Stats + CTA |
| Selling | ServiceHero + ServiceDetails + ProjectsGrid + ContactForm |
| Investment | ServiceHero + ServiceDetails + ProjectsGrid + ContactForm |
| Property Management | ServiceHero + ServiceDetails + PreviousProjects + ContactForm |
| About | CompanyStory + Achievements + TeamGrid + Testimonials |
| Contact & Branches | ContactForm + BranchesMap |

## Brand Direction

The brand direction is:

Stone, Light & Glass

The visual language combines:

- Deep obsidian stone.
- Warm travertine.
- Brushed gold light.
- Translucent glass panels.
- Mashrabiya-inspired eight-point star patterns.
- Premium Saudi architecture.
- High-trust advisory copy.

The result should feel like a luxury real estate brand in Saudi Arabia, not a generic property portal.

## Visual Principles

### Stone

Stone represents permanence, trust, ownership, and long-term value.

Use deep obsidian and travertine surfaces as the foundation.

### Light

Light represents clarity, premium atmosphere, and architectural drama.

Use gold glow carefully around glass panels, hero highlights, borders, and CTAs.

### Glass

Glass represents transparency, modernity, and advisory confidence.

Use blurred translucent cards for hero panels, service cards, stats, project overlays, and forms.

### Mashrabiya

Use an eight-point star lattice pattern as a subtle cultural detail.

It should be low-opacity and elegant.

Do not overuse it.

## Color Tokens

```text
#0F0D0B
#F5F1E8
#D4AF6A
#1E1A16
#8A8174
```

Token usage:

- `#0F0D0B` — Obsidian foundation.
- `#F5F1E8` — Travertine text and warm light surfaces.
- `#D4AF6A` — Brushed gold accent.
- `#1E1A16` — Deep bronze panels.
- `#8A8174` — Stone secondary text.

Glass tokens:

```css
--glass-on-dark-bg: rgba(245, 241, 232, 0.07);
--glass-on-dark-border: rgba(212, 175, 106, 0.22);
--glass-on-light-bg: rgba(255, 255, 255, 0.45);
--glass-on-light-border: rgba(30, 26, 22, 0.08);
--glow-gold: rgba(212, 175, 106, 0.25);
```

## Typography

### Primary Font

Use **Thmanyah** as the main Arabic font for the whole website.

Use it for:

- Navigation.
- Body copy.
- Buttons.
- Forms.
- Service cards.
- Project cards.
- Footer.
- Mobile UI.

### Display Usage

Use Thmanyah in heavier weights for large headlines.

Headlines must feel architectural and premium without becoming too dense.

### Numerals

Use Eastern Arabic-Indic numerals for:

- Statistics.
- Prices.
- Investment return rates.
- Years.
- Phone-like display text when appropriate.

### Fallback Stack

Use this order:

```css
font-family: "Thmanyah", "Noto Kufi Arabic", "Cairo", "IBM Plex Sans Arabic", "Tajawal", sans-serif;
```

### Implementation Note

If Thmanyah is not available from a remote provider, use `next/font/local` and place the font files in:

```text
public/fonts/thmanyah/
```

Expose it as:

```css
--font-thmanyah
```

Then map all main typography tokens to Thmanyah.

## Layout System

Use the Stitch layout as the source:

- Inset hero frame.
- Large rounded architectural container.
- Floating glass navbar.
- Bento-like service and stats sections.
- Full-bleed photography inside rounded frames.
- Glass strips over project images.
- Generous spacing on desktop.
- Compact but breathable stacking on mobile.

Desktop max width:

```text
1440px
```

Grid:

```text
12 columns
24px gutters
```

Mobile:

```text
390px baseline
16px side padding
single-column flow
large tap targets
```

## Mobile Responsiveness Rules

Mobile is not an afterthought.

Every page must be designed and checked for mobile.

Rules:

- Hero frame margin becomes small on mobile.
- Hero radius is reduced.
- Navbar becomes a full-screen RTL overlay.
- Glass cards stack vertically.
- Bento grids become single-column.
- Project cards use full-width images.
- Forms use one column.
- CTAs are thumb-friendly.
- Text must never overlap images.
- Long Arabic words must wrap safely.
- Buttons must not clip text.
- Floating desktop cards become normal stacked cards.
- Metaball hero card becomes a simple rounded glass card on mobile.
- Decorative lattice overlays must not reduce readability.
- Project card glass strips must remain readable over images.
- Minimum tap target height is 44px.
- Avoid horizontal scrolling.

## Motion

Motion should feel premium and slow, not playful.

Rules:

- Hero background uses a slow Ken Burns zoom.
- Disable Ken Burns under `prefers-reduced-motion`.
- Section reveal: fade-up.
- Duration: 400ms.
- Stagger: 80ms.
- Cards scale to 1.02 on hover.
- Project images zoom slowly on hover.
- Glass borders brighten subtly on hover.
- Navbar transitions from hero glass pill to sticky glass bar.
- No bounce.
- No spin.
- No aggressive motion.

## Homepage

Required sections:

Hero + ServicesOverview + FeaturedProjects + Stats + CTA

### Hero

Use the Mashrabiya Frame hero from the Stitch design.

Requirements:

- Large rounded hero frame.
- Cinematic architectural background image.
- Floating glass navbar inside the frame.
- Low-opacity Mashrabiya lattice overlay.
- Centered badge.
- Large Arabic headline.
- Short Arabic supporting line.
- Primary gold CTA.
- Secondary glass CTA.
- Bottom-end glass stat card.
- Bottom-start signature corner card with metaball behavior on desktop.
- Simplified stacked card on mobile.

Suggested copy:

- Headline: عقارك يبدأ من النخبة
- Supporting line: فرص عقارية مختارة في الرياض وجدة، بخبرة تحفظ القرار والقيمة.
- Primary CTA: تحدث مع مستشار
- Secondary CTA: استعرض المشاريع

### ServicesOverview

Three glass service cards:

- البيع
- الاستثمار
- إدارة العقارات

Each card includes:

- Image or architectural detail.
- Short title.
- One-line description.
- CTA arrow.

### FeaturedProjects

Use a premium project grid.

No desktop carousel.

Project cards include:

- Full-bleed image.
- Bottom glass strip.
- Project name.
- Location.
- Status chip.
- Price or starting range when relevant.

### Stats

Use bento-style glass tiles.

Stats:

- سنوات الخبرة
- مشاريع مختارة
- عملاء نخبة
- مدن رئيسية

### CTA

Use a dark obsidian full-width section with a gold CTA.

Suggested copy:

- Headline: قرار عقاري أوضح
- Button: تحدث مع مستشار

## Selling Page

Required sections:

ServiceHero + ServiceDetails + ProjectsGrid + ContactForm

### ServiceHero

Use a smaller framed hero variant.

Suggested copy:

- Headline: بيع يليق بعقارك
- CTA: اطلب تقييم العقار

### ServiceDetails

Use glass or stone feature rows:

- تقييم أولي مدروس.
- تصوير وتسويق احترافي.
- ترشيح المشترين الجادين.
- تفاوض وإغلاق منظم.

### ProjectsGrid

Use selling project cards with:

- Image.
- Title.
- Location.
- Price range.
- Status badge.
- Contact CTA.

### ContactForm

Fields:

- الاسم
- رقم الجوال
- نوع العقار
- المدينة
- الرسالة

Submit:

إرسال الطلب

## Investment Page

Required sections:

ServiceHero + ServiceDetails + ProjectsGrid + ContactForm

### ServiceHero

Suggested copy:

- Headline: استثمار برؤية واضحة
- CTA: احجز استشارة

### ServiceDetails

Features:

- فرص منتقاة في مواقع نشطة.
- قراءة مبسطة للعائد.
- مقارنة بين الرياض وجدة.
- متابعة بعد الشراء.

### ProjectsGrid

Investment project cards include:

- Image.
- Project name.
- Location.
- Starting price.
- Expected return badge.
- Risk note.
- Contact CTA.

Example badge:

```text
عائد ٨٪ سنوياً
```

### ContactForm

Fields:

- الاسم
- رقم الجوال
- ميزانية الاستثمار
- المدينة المفضلة
- الرسالة

Submit:

طلب استشارة

## Property Management Page

Required sections:

ServiceHero + ServiceDetails + PreviousProjects + ContactForm

### ServiceHero

Suggested copy:

- Headline: إدارة تحفظ القيمة
- CTA: ناقش محفظتك

### ServiceDetails

Features:

- متابعة التأجير والتحصيل.
- تقارير دورية واضحة.
- صيانة وتشغيل منظم.
- تحسين الإشغال والعائد.

### PreviousProjects

Use simple managed-property cards without prices.

Each card includes:

- Image.
- Property type.
- City.
- Managed scope.
- Occupancy or performance note.

### ContactForm

Fields:

- الاسم
- رقم الجوال
- عدد العقارات
- المدينة
- الرسالة

Submit:

طلب إدارة

## About Page

Required sections:

CompanyStory + Achievements + TeamGrid + Testimonials

### CompanyStory

Use a premium editorial layout.

Suggested copy:

- Headline: خبرة تعرف السوق
- Pull quote: نختار العقار كما يختار صاحبه قراره؛ بهدوء، ومعرفة، ومسؤولية.

### Achievements

Use bento stat cards.

Examples:

- ١٢ سنة خبرة
- ٤٥ مشروع مختار
- ٣٢٠ عميل
- الرياض وجدة

### TeamGrid

Cards include:

- Portrait.
- Name.
- Title.
- City or specialization.

### Testimonials

Minimal quote cards:

- Quote.
- Client name.
- City.

## Contact & Branches Page

Required sections:

ContactForm + BranchesMap

### ContactForm

Fields:

- الاسم
- رقم الجوال
- البريد الإلكتروني
- المدينة
- نوع الخدمة
- الرسالة

Submit:

إرسال

### BranchesMap

Include:

- Riyadh branch card.
- Jeddah branch card.
- Phone.
- Working hours.
- WhatsApp CTA.
- Refined map placeholder or embedded map.

## Navbar

RTL order:

1. Logo.
2. الرئيسية.
3. خدماتنا.
4. من نحن.
5. التواصل والفروع.
6. تحدث مع مستشار.

Services dropdown:

- البيع.
- الاستثمار.
- إدارة العقارات.

Behavior:

- Floating glass pill over the hero.
- Sticky glass bar after scroll.
- Full-screen RTL mobile overlay.
- Directional arrows must be mirrored for RTL.

## Footer

Use obsidian background.

Columns:

1. Logo and short tagline.
2. Main links.
3. Services.
4. Contact details.

Add a subtle brushed-gold divider at the top.

## Implementation Prompt

### Role

Act as a senior frontend engineer, luxury UX designer, and Arabic RTL implementation specialist.

### Task

Convert the approved Stitch project `5865304416264015253` into a production-ready Arabic RTL website for **النخبة للعقارات**.

Use the existing Stitch design as the visual source of truth.

Do not redesign it.

Update the typography so the entire website uses **Thmanyah Arabic font** as the primary font.

### Context

The approved design direction is **Stone, Light & Glass** with a Mashrabiya Frame hero, obsidian and travertine surfaces, glassmorphism, brushed-gold accents, eight-point star lattice details, bento sections, and premium Saudi real estate photography.

The site targets high-net-worth Saudi clients, investors, property owners, and expats in Riyadh and Jeddah.

The site must be fully Arabic, RTL, premium, responsive, accessible, and optimized for mobile.

### Required Structure

Build exactly these pages and sections:

- Homepage: Hero + ServicesOverview + FeaturedProjects + Stats + CTA.
- Selling: ServiceHero + ServiceDetails + ProjectsGrid + ContactForm.
- Investment: ServiceHero + ServiceDetails + ProjectsGrid + ContactForm.
- Property Management: ServiceHero + ServiceDetails + PreviousProjects + ContactForm.
- About: CompanyStory + Achievements + TeamGrid + Testimonials.
- Contact & Branches: ContactForm + BranchesMap.

### Typography Requirements

Use Thmanyah as the primary font across all components.

If available as local font files, load it with `next/font/local`.

Expose it as:

```css
--font-thmanyah
```

Use this fallback stack:

```css
"Thmanyah", "Noto Kufi Arabic", "Cairo", "IBM Plex Sans Arabic", "Tajawal", sans-serif
```

All Arabic text must use Thmanyah unless a specific logo asset already contains its own lettering.

### Mobile Requirements

Design and verify all pages at mobile width.

Mobile must include:

- Full-screen RTL menu.
- Stacked service cards.
- Single-column project cards.
- One-column forms.
- Simplified hero corner card.
- No horizontal scrolling.
- No clipped Arabic text.
- No overlapping text and images.
- Minimum 44px tap targets.
- Readable glass cards.
- Clear CTA buttons.

### Stop Conditions

Stop only when:

- The Stitch visual style is preserved.
- Thmanyah is the main font.
- All six page structures are included.
- Desktop and mobile layouts are specified.
- RTL behavior is correct.
- `prefers-reduced-motion` is respected.
- Project cards, forms, navbar, footer, and hero behavior are covered.

### Output

Produce a polished implementation-ready website specification and code plan that faithfully follows the selected Stitch design while upgrading typography to Thmanyah and ensuring excellent mobile responsiveness.
