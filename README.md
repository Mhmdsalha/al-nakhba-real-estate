# Al Nakhba Real Estate

Premium Arabic-first real estate website for a Saudi luxury property brand serving Riyadh and Jeddah.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-1d4ed8?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RTL](https://img.shields.io/badge/Language-RTL%20Arabic-b48a3c?style=for-the-badge)](#experience-overview)
[![Responsive](https://img.shields.io/badge/UX-Mobile%20Optimized-0f172a?style=for-the-badge)](#experience-highlights)

## Overview

This project is a high-end presentation website for **Al Nakhba Real Estate**, a Saudi real estate company focused on private selling, investment opportunities, and property management.

The experience is designed as a fully Arabic, right-to-left interface with a refined visual system built around dark bronze surfaces, warm stone highlights, restrained gold accents, editorial typography, and glassmorphism overlays.

Rather than behaving like a generic listing portal, the site is structured as a curated brand experience: a home page that establishes tone and trust, dedicated service journeys for each business line, an about page that communicates maturity and market understanding, and a contact page anchored by Riyadh and Jeddah branch presence.

## Experience Highlights

- **Arabic-first RTL experience** across all routes and content layouts
- **Responsive UI** refined for both desktop and mobile browsing
- **Luxury visual language** using custom color tokens, glass layers, rounded architectural framing, and cinematic property imagery
- **Dedicated service pages** for selling, investment, and property management
- **Animated project carousels** with grouped navigation, autoplay, and reduced-motion support
- **Reusable component system** for hero blocks, section headers, glass cards, calls to action, and structured grids
- **Brand-aware presentation** using custom Al Nakhba logo assets and Thmanyah display typography
- **Branch discovery experience** with a map-based Riyadh and Jeddah contact section
- **Data-driven content model** powered by local TypeScript data objects for services, projects, team members, testimonials, stats, and branches

## Pages and User Flows

### Home

- Brand-led hero experience
- Services overview
- Featured projects
- Stats section
- Success partners marquee
- Conversion CTA

### Selling

- Custom service hero
- Featured sales highlights
- Service process section
- Grouped project carousel
- Contact form

### Investment

- Dedicated investment positioning
- Curated opportunities
- Return-focused project presentation
- Contact path for investors

### Property Management

- Operations-focused hero and messaging
- Managed portfolio highlights
- Service detail modules
- Owner contact flow

### About

- Distinct brand story hero
- Achievements and stats
- Journey timeline
- Saudi team presentation
- Testimonials layout

### Contact & Branches

- Riyadh and Jeddah branch cards
- Static map composition with branch markers
- Full inquiry form

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI Runtime | React 19 |
| Language | TypeScript |
| Styling Pipeline | Tailwind CSS v4 + PostCSS |
| Visual Styling | Custom global CSS tokens and handcrafted component styling |
| Motion | Framer Motion |
| Icons | Lucide React |
| Typography | Custom Thmanyah font family loaded from local `.woff2` assets |
| Media | `next/image` with approved external sources and local brand assets |
| Content Modeling | Local TypeScript data modules |

## Design System Notes

The interface is built around a restrained, premium aesthetic rather than marketplace density. Core design decisions include:

- **Dark architectural surfaces** for depth and contrast
- **Travertine and gold accents** to preserve warmth without becoming ornamental
- **Glass overlays** for featured property cards, service metrics, and layered hero compositions
- **Large Arabic display typography** balanced with tighter supporting copy
- **Rounded structural framing** inspired by luxury interior and facade detailing
- **Motion used sparingly** for reveal transitions, carousel movement, and hero atmosphere

The project also respects accessibility-oriented motion behavior through `prefers-reduced-motion` support in animated sections.

## Project Architecture

```text
app/
  about/
  contact/
  services/
    investment/
    management/
    selling/
  globals.css
  layout.tsx
  page.tsx

components/
  about/
  contact/
  home/
  layout/
  services/
  shared/
  ui/

data/
  site.ts

lib/
  arabicNumerals.ts
  images.ts

public/
  brand/
  fonts/
  images/
```

## Key Implementation Details

### Content Model

Most of the editable site content currently lives in [`data/site.ts`](./data/site.ts), including:

- navigation links
- service summaries
- featured projects
- selling, investment, and management project datasets
- stats
- partners
- team members
- testimonials
- branch data

This keeps the current implementation lightweight and easy to update without introducing a CMS dependency.

### Media Strategy

Visual content is split between:

- **local brand assets** in [`public/brand`](./public/brand)
- **local team imagery** in [`public/images/team`](./public/images/team)
- **remote property photography** referenced from [`lib/images.ts`](./lib/images.ts)

Remote image sources are explicitly whitelisted in [`next.config.ts`](./next.config.ts).

### Styling Approach

The repository includes a Tailwind CSS v4 build pipeline, while the interface styling itself is primarily authored through a bespoke global CSS system in [`app/globals.css`](./app/globals.css). That file defines:

- color tokens
- glass surface tokens
- font registration
- layout containers
- section rhythm
- hero framing
- responsive typography rules

### Forms and Backend Scope

The current contact forms are **frontend-ready UI components** and are not yet connected to a live CRM, email service, or API endpoint. The project is therefore best described as a polished production-grade frontend that is ready for lead-capture integration.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run the production server

```bash
npm run start
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server |
| `npm run build` | Creates a production build |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs the configured Next.js lint command |

## Deployment Notes

This codebase is ready to deploy on any platform that supports modern Next.js applications, including Vercel and standard Node.js hosting environments.

Before connecting the project to production lead workflows, recommended next steps are:

1. Wire inquiry forms to a real backend or CRM
2. Add analytics and event tracking
3. Introduce environment-based contact and branch configuration if needed
4. Add CMS or dashboard integration if editorial control is required by non-developers

## Why This Project Stands Out

This repository is not a template-level real estate landing page. Its value comes from the combination of:

- a strong Saudi luxury brand expression
- Arabic-first UX decisions
- careful mobile adaptation
- modular service-page storytelling
- reusable animated content patterns
- a structure that can grow into a full commercial lead-generation platform

## Repository Status

The current version represents a **high-fidelity branded frontend experience** with production-quality structure, component reuse, and responsive behavior.

It is an excellent foundation for:

- a live brand website
- a sales presentation site
- an investor-facing microsite
- a future CMS-backed real estate platform

## License

This repository currently does not declare an open-source license.
