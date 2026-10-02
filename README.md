# Kawya Bogoda — Personal Portfolio & Case Studies

Personal portfolio website for **Kawya Bogoda**, a fourth-year BSc (Hons) IT undergraduate at Horizon Campus, Sri Lanka, specializing in Software Engineering, AI/ML applications, and Quality Assurance automation.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Testing**: Playwright & Axe-Core
- **Deployment**: Vercel

---

## Testing Strategy & End-to-End Suite

End-to-end testing is implemented with [Playwright](https://playwright.dev/) and [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright). All test expectations dynamically load expected text from `/src/data` to ensure long-term test resilience.

### Test Coverage

1. **Navigation & Header (`tests/navigation.spec.ts`)**:
   - Verifies smooth section scrolling (`#projects`, `#skills`, `#experience`, `#contact`).
   - Verifies accessibility "Skip to main content" link focus and target jump.
   - Verifies active section highlighting with `aria-current="true"`.
2. **Mobile Menu (`tests/mobile-menu.spec.ts`)**:
   - Tests phone-size viewport interactions (375x667).
   - Verifies opening, link click closing, `Escape` key closing, and focus restoration to the menu button.
3. **Theme Toggle (`tests/theme-toggle.spec.ts`)**:
   - Verifies switching between Light, Dark, and System themes.
   - Asserts persistent theme selection across page reloads via `localStorage`.
4. **Projects & Case Studies (`tests/projects.spec.ts`)**:
   - Verifies featured project cards render on the home page.
   - Dynamically loops through project slugs to verify every `/projects/[slug]` case study page loads with its heading, back link, and zero console errors.
5. **Contact Form (`tests/contact.spec.ts`)**:
   - Tests client-side validation for name, email, and message inputs.
   - **Mocking**: The `/api/contact` endpoint is mocked using Playwright's `page.route()` to prevent sending real emails and remove dependency on `RESEND_API_KEY`.
   - Verifies error retry state preserves user-typed inputs.
6. **Links, SEO & Infra Routes (`tests/links-seo.spec.ts`)**:
   - Asserts CV download link returns HTTP 200 (`/Kawya_Bogoda_CV.pdf`).
   - Verifies external links include `rel="noopener noreferrer"`.
   - Checks that all pages contain a single `<h1>` heading and `<title>`.
   - Confirms `/sitemap.xml` and `/robots.txt` endpoints respond with 200 OK.
7. **Automated Accessibility (`tests/accessibility.spec.ts`)**:
   - Executes `@axe-core/playwright` WCAG 2.1 AA scans on the home page and case study pages in both light and dark themes.
8. **Custom 404 (`tests/not-found.spec.ts`)**:
   - Asserts invalid URLs render the custom 404 page with a working home link.

---

## How to Run Tests

Ensure the project is built or let Playwright launch the local web server:

```bash
# Run all end-to-end tests headlessly
npm run test

# Run tests in Playwright Interactive UI Mode
npm run test:ui

# Run tests in headed browser mode
npm run test:headed

# Open the HTML test report
npx playwright show-report
```
