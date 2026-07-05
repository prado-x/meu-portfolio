---
name: front-react-portfolio
description: "A master skill combining the best practices of React performance, US Market Elite UI/UX, and Vercel's Web Design Guidelines. Use this whenever building, refactoring, or reviewing components for this specific portfolio."
---

# Front React Portfolio - Master Guidelines

This skill synthesizes the absolute best practices from Vercel's engineering team, elite Silicon Valley UI/UX design patterns, and strict accessibility standards. You MUST follow these rules when writing or refactoring any code in this repository.

## 1. Aesthetic & Design System (US Market Elite)
- **Theme (Blueprint):** Use the established Navy/Cyan color palette (`bg-navy-950`, text `navy-400` to `navy-100`, accents `cyan-400`).
- **Layouts (Bento Grid):** Prefer asymmetrical "Bento Box" grids for displaying cards, projects, or features (e.g., using `grid` and `col-span` dynamically).
- **Developer Cues:** Insert subtle nods to engineering culture. Examples: `⌘K` for search/command palettes, Git-commit style timelines (`border-dashed`, hollow dots), and monospace fonts for technical data.
- **Skeuomorphic Touches:** Use very subtle texture overlays (like Noise) or deep shadow elevations only when it adds a premium feel, but keep the overall UI functionally minimal.

## 2. Micro-interactions & Motion
- **Spring Physics:** Do not use linear or simple ease animations for hover states on important cards. ALWAYS use `framer-motion` with spring physics to mimic native apps.
  - *Standard config:* `transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}`
  - *Standard hover:* `whileHover={{ scale: 1.02, y: -4 }}`
- **Subtlety:** Micro-interactions should be fast and heavy, avoiding slow transitions that make the app feel sluggish.

## 3. React & Next.js Performance (Vercel Standards)
- **Dynamic Imports:** Heavy components (like Mermaid diagrams, Charts, or complex interactive widgets) MUST be dynamically imported using `next/dynamic` with `ssr: false` to avoid hydration errors and reduce bundle size.
- **Safe Conditional Rendering:** NEVER use `&&` for conditional rendering in React, as it can leak `0` or `NaN` into the DOM and cause hydration mismatches. Always use ternaries: `condition ? <Component /> : null`.
- **Core Web Vitals:** Always use `next/image` with proper width/height (or `fill` with `sizes`) and `next/font` for optimized loading.

## 4. Accessibility & Web Design Guidelines
- **Typographic Widows:** Always apply `text-balance` or `text-pretty` to headers (`h1`, `h2`, `h3`) to ensure harmonious line breaks on mobile.
- **Decorative SVGs:** Any icon or SVG that is purely decorative MUST have `aria-hidden="true"`.
- **Keyboard Navigation:** Every interactive element (`<button>`, `<a>`, `<Link>`) MUST include focus states for keyboard navigation without breaking mouse clicks. 
  - *Standard classes:* `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950`

## When to Use
Invoke this skill mentally or explicitly whenever you are:
- Creating a new page or component.
- Refactoring an existing UI element.
- Auditing the application for UX or Performance bottlenecks.
