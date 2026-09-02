# Indido Apparel — Session Context & Handover Summary

This file summarizes the complete context, design adjustments, optimizations, and technical updates made during our pair programming session.

---

## 1. Project Specifications
* **Brand Name**: Indido Apparel
* **Tech Stack**: Astro (Static site generation), Vanilla CSS, Client-side ES6 JavaScript
* **Workspace Path**: `file:///home/billa/proj/indido-apparel`
* **Netlify Deploy Target**: `/dist`

---

## 2. Completed Milestones & Accomplishments

### A. Branding & Visual Alignments
* **Logo Transparency & Sizing**: Stripped the white background of the original brand mark to generate [LOGO.png](file:///home/billa/proj/indido-apparel/src/assets/logo/LOGO.png). Constrained heights natively in the header and footer (`height: 40px; width: auto; object-fit: contain;`) so the logo displays clearly. Removed redundant text labels.
* **Centered CTA Layouts**: Centered the "Email Our Sourcing Team" contact button symmetrically underneath its header in [index.astro](file:///home/billa/proj/indido-apparel/src/pages/index.astro#L529). Centered brand details and links symmetrically in the site footer in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css).

### B. Interactive Process Slider ("How We Work")
* **Tabbed Number Controls**: Refactored the side-by-side slideshow list in [index.astro](file:///home/billa/proj/indido-apparel/src/pages/index.astro#L328) into an interactive horizontal number controller (01 to 05).
* **Smooth Text Transitions**: Added active, exit, and entrance sliding classes in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L910). When a stage transitions, previous text slides out to the left (`translateX(-35px)` & `opacity: 0`) and new text slides in from the right (`translateX(35px)` & `opacity: 1`).
* **Continuous 2-Second Autoplay Loop**: Set up a continuous auto-rotation that advances stages every 2 seconds (`2000ms`) and rolls back to Stage 01 when Stage 05 is reached. Clicking any stage control shifts the view instantly and resets the 2-second timer.
* **Mobile Safety Layout**: Automatically resets absolute slides to relative flow blocks on screen sizes below `768px` to prevent layout overlaps and height clipping.

### C. iOS / Safari WebKit Compatibility Fix
* **The Issue**: On iOS/Safari, the website failed to render elements below the hero section. This was caused by a WebKit rendering bug where text nodes inside elements undergoing 3D rotation (`rotateX(-95deg)`) with container perspectives and `will-change` hardware acceleration were marked invisible (`opacity: 0`) and failed to draw.
* **The Fix**: Simplified the text reveal animations in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L1718) to use a highly compatible 2D vertical translate (`translateY(20px)` to `0`) and a soft blur clearing transition (`filter: blur(4px)` to `0`). All headers and content now load instantly on iPhones, iPads, and desktops.

### D. Repository Cleanup & Documented Code
* **Unused File Purge**: Deleted 850+ MB of temporary backups and zip files (`_backup/`, `_temp_astro/`, `agreeable-aperture/`, and zip files) to keep git operations lightweight.
* **Code Documentation**: Commented all key scripts (IntersectionObserver, text-splitting parsers, theme states, slide controllers) in [Layout.astro](file:///home/billa/proj/indido-apparel/src/layouts/Layout.astro) and [index.astro](file:///home/billa/proj/indido-apparel/src/pages/index.astro) to make the code easily understandable.
* **Renamed Project**: Renamed the Astro project name in [package.json](file:///home/billa/proj/indido-apparel/package.json#L2) to `"indido-apparel"` and renamed the workspace system directory to match.

### E. Mobile & Dark Mode Layout Optimizations
* **Body Scroll Locking**: Enhanced the mobile navigation drawer script in [Layout.astro](file:///home/billa/proj/indido-apparel/src/layouts/Layout.astro) to prevent page background scrolling (`overflow: hidden` on `body`) while the hamburger menu is open.
* **Touch-Friendly Size Viewers**: Updated lookbook collections ([collections.astro](file:///home/billa/proj/indido-apparel/src/pages/collections.astro), [men.astro](file:///home/billa/proj/indido-apparel/src/pages/collections/men.astro), etc.) to display garment size options natively on devices under `768px` instead of relying on desktop hover behaviors.
* **Responsive Background Colors**: Replaced hardcoded white background tags (`#ffffff`) in collection grid layout stylesheets with responsive CSS variables (`var(--paper)` and `var(--cotton)`) to support Dark Theme seamlessly.
* **Mobile Swiping Gestures**: Equipped the specialized services slider on [what-we-do.astro](file:///home/billa/proj/indido-apparel/src/pages/what-we-do.astro) and logo slider on [sustainability.astro](file:///home/billa/proj/indido-apparel/src/pages/sustainability.astro) with touch swipe capabilities (`touchstart` & `touchend` event handlers).
* **Stacked Mobile Card Layouts**: Added a `max-width: 560px` query in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css) that stacks overlapping image cards vertically below the banner on small viewport screens to eliminate clipping and horizontal scrolling.
* **Centered Mobile Text Alignments**: Enforced horizontal text-centering across all narrative modules, subtitles, quote boxes, checklists, and dividers inside the "About Us" and "What We Do" pages on small screen viewports.
* **Full Image Fitting (No Cropping)**: Configured all main product, catalog, about, and narrative showcase images (`.product-image`, `.overlap-img`, `.about-main-img`, etc.) to use `object-fit: contain` on mobile viewports so they render in full without being cropped or enlarged.
* **Dynamic About-Us Image Placement**: Implemented a dynamic DOM repositioning script in [index.astro](file:///home/billa/proj/indido-apparel/src/pages/index.astro) that relocates the main showcase image pane on mobile viewports directly between the highlight quote box ("Your premier partner...") and the detailed description paragraph, resetting CSS flex `order: 0 !important`, maintaining the full width of the image (`max-width: 100%`), and aligning the two stat cards side-by-side parallely with a minimal `0.75rem` vertical gap.
* **Center-Aligned Smooth Scrolling**: Integrated a scroll alignment handler in [Layout.astro](file:///home/billa/proj/indido-apparel/src/layouts/Layout.astro) that intercepts navigation clicks on hash/anchor links, scrolling target sections smoothly to the vertical center of the viewport (`block: 'center'`) to prevent the fixed header navbar from overlaying titles.

### F. Global Sourcing Asia Map Section
* **Generated Visual Vector Map**: Designed a minimalist warm-beige continent outline map of Asia utilizing the `generate_image` visual model and integrated it into [customers.astro](file:///home/billa/proj/indido-apparel/src/pages/customers.astro#L106-L215).
* **Interactive Tooltip Pins**: Embedded pulsing CSS hotspots representing the 7 Asian sourcing base countries (India, Bangladesh, Vietnam, Indonesia, Cambodia, Myanmar, China) complete with responsive glassmorphism hover details mapped to regional coordinates.
* **Single Dynamic Showcase Card**: Integrated a single interactive info card (`.country-info-showcase`) accompanied by a horizontal text tab selector (`.reach-tabs`). Clicking any map pin or tab dynamically updates the showcase card details with a smooth fade animation. India is selected by default.
* **Auto-Inverted Dark Mode Filter**: Configured an automatic dark theme filter (`invert(90%) hue-rotate(180deg) brightness(85%)`) to seamlessly adjust the light beige Asia map illustration into a sleek dark-green and gold visual.

---

## 3. Directory Layout Reference

* `src/layouts/Layout.astro` &rarr; Central navbar header, transparent logo, theme toggles, and scroll animators.
* `src/styles/global.css` &rarr; Global theme variables (light/dark schemes), responsive classes, and transitions.
* `src/pages/index.astro` &rarr; Landing page with hero parallax and process workflow slider.
* `src/pages/about-us.astro` &rarr; About page showcasing brand narrative and showcase image (`about_us1.png`).
* `src/pages/collections/` &rarr; Subdirectories containing specific product catalog pages.
* `src/assets/` &rarr; Hand-optimized WebP asset files, logos, and factory videos.
* `dist/` &rarr; Compiled production bundle folder (rebuilt via `npx astro build`).
