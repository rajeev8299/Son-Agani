# SON AGNI SECURITIES PRIVATE LIMITED

[![Build & Verification](https://github.com/rajeev8299/Son-Agani/actions/workflows/ci.yml/badge.svg)](https://github.com/rajeev8299/Son-Agani/actions)

Official production website repository for **SON AGNI SECURITIES PRIVATE LIMITED** — a premier security, guarding, and manpower solutions provider based in Varanasi, Uttar Pradesh.

---

## 🛡️ Project Overview

This repository contains the complete frontend web application, design system, interactive components, customer review sliders, service showcases, quote requisition flows, and administrative management interfaces for SON AGNI SECURITIES.

- **Brand Primary Palette**: Red (`#C8102E`), Deep Black (`#171717`), Dark Off-White Canvas (`#EAE7DC`), Golden Rating Stars (`#D6A64B`).
- **Key Features**:
  - Full-width cinematic video hero banner with high-contrast typography.
  - Seamless continuous infinite customer reviews marquee slider (right-to-left) with hover & keyboard focus pause controls.
  - Interactive multi-category security services directory with dynamic quotation forms.
  - Verified Google Business Profile review sync integration with demo fallback.
  - Fully responsive layout adapted for desktop, tablet, and mobile browsers.

---

## 🧰 Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Client Routing**: [React Router DOM v7](https://reactrouter.com/)
- **UI Icons**: [Lucide React](https://lucide.dev/)
- **Linter & Code Quality**: [Oxlint](https://oxc.rs/)
- **Deployment**: [GitHub Actions / GitHub Pages](https://pages.github.com/)

---

## 📁 Project Structure

```text
son-agni-securities-website/
├── .github/
│   └── workflows/
│       └── ci.yml              # Automated build verification CI workflow
├── public/
│   ├── images/                 # Optimized guard, bouncer, and industry photos
│   ├── logo.png                # Primary brand logo
│   └── son-agni-logo-transparent.png
├── src/
│   ├── assets/                 # Component-bundled asset files
│   ├── components/             # Reusable UI components
│   │   ├── CustomerReviewsSlider.jsx   # Continuous infinite review marquee
│   │   ├── HomeGoogleReviews.jsx       # Google Business review integration
│   │   ├── Header.jsx & Footer.jsx     # Navigation and footer components
│   │   ├── QuoteForm.jsx & ContactForm.jsx
│   │   └── EditorialFAQ.jsx            # Interactive FAQ accordion
│   ├── data/                   # Site data, demo reviews, and company config
│   │   ├── companyInfo.js
│   │   ├── demoReviews.js
│   │   └── siteData.js
│   ├── pages/                  # Page route views
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── OurGuards.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   └── GetQuote.jsx
│   ├── services/               # API service layers
│   │   ├── googleReviewsService.js
│   │   ├── reviewService.js
│   │   └── testimonialService.js
│   ├── styles/                 # Centralized CSS design system & variables
│   │   ├── variables.css       # Brand design tokens & colors (#EAE7DC, #C8102E)
│   │   ├── global.css
│   │   ├── components.css
│   │   └── customerReviewsSlider.css
│   ├── App.jsx                 # Route declarations and root layout
│   └── main.jsx                # Application DOM entry point
├── supabase/                   # Database schemas for reviews and testimonials
│   ├── schema_reviews.sql
│   └── schema_testimonials.sql
├── .env.example                # Safe environment variable configuration template
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### 1. Clone the Repository

```bash
git clone https://github.com/rajeev8299/son-agni-securities-website.git
cd son-agni-securities-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to create your local `.env`:

```bash
cp .env.example .env
```

Open `.env` and fill in any required service credentials (all values in `.env.example` are placeholders).

### 4. Run Development Server

```bash
npm run dev
```

The application will be live at `http://localhost:5173/`.

---

## 🔨 Production Build

To build the static production distribution:

```bash
npm run build
```

The compiled assets will be output in the `dist/` directory ready for deployment on any static hosting platform (GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.).

To preview the production build locally:

```bash
npm run preview
```

---

## 🔒 Security & Data Integrity

- No production credentials, tokens, secret keys, or private customer data are stored in this repository.
- Sensitive files (`.env`, `.env.*`, `dist/`, `node_modules/`) are strictly excluded by `.gitignore`.

---

## 📄 License & Rights

Copyright © 2026 SON AGNI SECURITIES PRIVATE LIMITED. All rights reserved.
