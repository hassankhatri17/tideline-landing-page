# Tideline — Marketing Landing Page

Built for Task 2 of my Frontend Development internship at Progree — a
single-page, semantic, mobile-responsive marketing landing page for a
live tide/swell tracker for surfers.

**Live:** https://tideline-landing-page.netlify.app/

## Tech stack
Plain HTML5, CSS (Flexbox + Grid), vanilla JavaScript. No frameworks,
no build tools, no dependencies.

## Task requirements
- [x] Single-page product marketing interface
- [x] Semantic HTML5 structure
- [x] Custom CSS layout (Flexbox + Grid, no framework)
- [x] Responsive across mobile and tablet breakpoints via media queries
- [x] No horizontal-scroll layout bugs

## Preview locally
Open `index.html` directly in a browser. No build step, no dependencies.

## What's in this file
- Semantic HTML5 — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- CSS Grid for the hero split and the break/feature grids
- Flexbox for the nav, proof strip, and footer row
- Two breakpoints — `900px` (tablet) and `640px` (mobile, nav collapses
  into a hamburger menu)
- A working mobile menu: opens/closes on tap, closes automatically if the
  window is resized past 640px
- An animated SVG tide curve as the hero's centerpiece, with a live
  "you are here" marker and a countdown to the next high tide
- `prefers-reduced-motion` disables the tide-curve animation for users
  who've asked for reduced motion

## File map
```
tideline-landing-page/
├── index.html    → structure and content
├── README.md     → this file
├── css/
│   └── styles.css   → all styling and layout
└── js/
    └── script.js     → mobile menu behavior
```
