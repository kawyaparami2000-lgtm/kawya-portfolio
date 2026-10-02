# Kawya Bogoda — Personal Portfolio & Case Studies

[![CI](https://github.com/kawyaparami2000-lgtm/kawya-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kawyaparami2000-lgtm/kawya-portfolio/actions/workflows/ci.yml)

Personal portfolio website for **Kawya Bogoda**, a fourth-year BSc (Hons) IT undergraduate at Horizon Campus, Sri Lanka, applying for software development, AI/ML, and QA internships. Features interactive case studies, dynamic project listings, dark mode, accessibility compliance, and contact form integration.

<!-- TODO: Add portfolio screenshot preview here -->
> **Preview**: *TODO: Add high-resolution screenshot of the home page hero and projects section.*

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Delivery**: Resend
- **Testing**: Playwright & `@axe-core/playwright`
- **Deployment**: Vercel

---

## Getting Started Locally

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kawyaparami2000-lgtm/kawya-portfolio.git
   cd kawya-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *Fill in your Resend API key and target email address in `.env.local`.*

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## Environment Variables

The application relies on the following environment variables:

| Variable | Description | Required in Production |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) for sending contact form emails | Yes |
| `CONTACT_TO_EMAIL` | Recipient email address where contact messages will be delivered | Yes |
| `NEXT_PUBLIC_SITE_URL` | Canonical website base URL (e.g. `http://localhost:3000` or custom domain) | Yes |

---

## Testing Strategy & End-to-End Suite

End-to-end testing is implemented with [Playwright](https://playwright.dev/) and [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright). All test expectations dynamically load expected text from `/src/data` to ensure long-term test resilience when portfolio copy changes.

### Test Commands

```bash
# Run ESLint check
npm run lint

# Run TypeScript type check
npm run type-check

# Run all Playwright end-to-end tests headlessly
npm run test

# Run tests in Playwright Interactive UI Mode
npm run test:ui

# Run tests in headed browser mode
npm run test:headed

# Open the HTML test report
npx playwright show-report
```

### Coverage Overview

1. **Navigation & Header (`tests/navigation.spec.ts`)**: Section scrolling (`#projects`, `#skills`, `#experience`, `#contact`), accessibility skip link, active link state (`aria-current`), and logo top scroll.
2. **Mobile Menu (`tests/mobile-menu.spec.ts`)**: Phone-size viewport (375x667), drawer opening/closing, Escape key handling, and focus trap return.
3. **Theme Toggle (`tests/theme-toggle.spec.ts`)**: Light/Dark/System theme switching and `localStorage` persistence across page reloads.
4. **Projects & Case Studies (`tests/projects.spec.ts`)**: Featured project cards display and dynamic iteration over all `/projects/[slug]` pages ensuring clean rendering and zero console errors.
5. **Contact Form (`tests/contact.spec.ts`)**: Client/server validation, input preservation on error, and mocked `/api/contact` requests via `page.route()` (no real emails sent during testing).
6. **Links, SEO & Infra Routes (`tests/links-seo.spec.ts`)**: CV PDF link HTTP 200 check, `rel="noopener noreferrer"` external links audit, single `<h1>` tag validation, `/sitemap.xml`, and `/robots.txt` response checks.
7. **Automated Accessibility (`tests/accessibility.spec.ts`)**: WCAG 2.1 AA scans using `@axe-core/playwright` in both light and dark themes.
8. **Custom 404 (`tests/not-found.spec.ts`)**: Unmapped route rendering and home navigation link.

---

## Deployment

This portfolio is configured for deployment on [Vercel](https://vercel.com). See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions on importing the repository, setting environment variables, setting up custom domains, and verifying production deployments.
