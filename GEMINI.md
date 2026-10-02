# Project Rules & Overview

## Project Summary
Personal portfolio website for **Kawya Bogoda**, a fourth-year BSc (Hons) IT undergraduate at Horizon Campus, Sri Lanka, applying for software development, AI/ML, and QA internships.

## Tech Stack
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Core Rules

1. **Content Architecture**:
   - All site content lives in `/src/data/*.ts` (e.g., `profile`, `projects`, `skills`, `experience`).
   - Components must **never** hardcode copy or text directly.

2. **Source Material**:
   - Source material is located in the `/_content` folder (`cv.txt`, `links.txt`, `bio.txt`, screenshots, and the CV PDF).
   - Read these files when requested.
   - **Never edit** files in `/_content`.

3. **Accessibility & UI**:
   - Use semantic HTML elements.
   - Ensure keyboard-accessible controls and visible focus states.
   - Respect user preferences for `prefers-reduced-motion`.

4. **Theming**:
   - Support both light and dark themes using CSS variables.

5. **Mobile-First & Performance**:
   - Follow a mobile-first design approach.
   - Target Lighthouse 95+ across all four categories (Performance, Accessibility, Best Practices, SEO).

6. **Accuracy & Integrity**:
   - Never invent facts, links, or metrics.
   - If something is missing or unspecified, leave a clearly marked `TODO`.

7. **Version Control**:
   - Commit after each completed step with a clear and concise commit message.
