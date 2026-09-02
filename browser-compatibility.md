# Browser Compatibility & Fallback Rendering Strategies

This document details the cross-browser compatibility resolutions (specifically Safari/WebKit and Chrome) and fallback rendering techniques implemented in the **Indido Apparel** project.

---

## 1. iOS / Safari WebKit Rendering Fix

* **The Issue:** 
  On iOS/Safari, the website failed to render elements below the hero section. This was caused by a WebKit rendering bug where text nodes inside elements undergoing 3D rotation (`rotateX(-95deg)`) with container perspectives and `will-change` hardware acceleration were marked invisible (`opacity: 0`) and failed to draw.
* **The Resolution / Fallback Rendering:**
  We simplified the text reveal animations in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L2211) (specifically the [revealWord](file:///home/billa/proj/indido-apparel/src/styles/global.css#L2212) keyframe and the [.word-wrapper](file:///home/billa/proj/indido-apparel/src/styles/global.css#L2238) animation). Instead of using 3D perspective rotations, we implemented a highly compatible **2D vertical translation fallback** (`translateY(20px)` to `0`) and a soft blur clearing transition (`filter: blur(4px)` to `0`). All headers and contents now load instantly and render reliably on iPhones, iPads, and desktops.

---

## 2. Layout Sizing & WebKit Prefix Fixes (Safari & Chrome)

* **Safari Flex Item Expansion Bug:** 
  In [HomeProducts.astro](file:///home/billa/proj/indido-apparel/src/components/HomeProducts.astro#L258), we resolved a bug where Safari would expand flex items unexpectedly by defining an explicit width constraint on the image wrapper:
  ```css
  width: calc(100% - 2.5rem); /* Explicit width constraint to prevent Safari flex item expansion */
  ```
* **WebKit Flexbox Aspect-Ratio Sizing Bug:** 
  In [HomeProducts.astro](file:///home/billa/proj/indido-apparel/src/components/HomeProducts.astro#L264), we set the [.card-image-wrapper](file:///home/billa/proj/indido-apparel/src/components/HomeProducts.astro#L255) to `display: block;` to prevent layout sizing errors in WebKit-based engines.
* **Glassmorphism Backdrop-Filter Prefixes:** 
  To ensure the glassmorphism backdrop-blur effect renders properly on iOS/Safari (where standard `backdrop-filter` is not fully supported without a prefix), we added `-webkit-backdrop-filter` alongside standard declarations across [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L148) and [SourcingMap.astro](file:///home/billa/proj/indido-apparel/src/components/SourcingMap.astro#L214).
* **Text Gradient Clipping:** 
  For the Terracotta text-shimmer gradient, we prefixed the styling in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L2269) using `-webkit-background-clip: text;` and `-webkit-text-fill-color: transparent;` for consistent WebKit/Blink compatibility.
* **Font Smoothing:** 
  Used `-webkit-font-smoothing: antialiased;` in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L85) to ensure typography renders smoothly and cleanly on macOS/iOS browsers.

---

## 3. Fallback Layout & Mobile Rendering Techniques

* **Process Slider Mobile Layout Fallback:** 
  Under [index.astro](file:///home/billa/proj/indido-apparel/src/pages/index.astro#L328), the process slider uses absolute positioning for desktop layouts. To prevent overlaps and text clipping on smaller screens, we configured a responsive fallback that automatically resets the absolute slides into normal relative flow blocks on screen widths below `768px`.
* **Physics Scroll Fallback on iOS Touch Devices:** 
  Added `-webkit-overflow-scrolling: touch;` to horizontal category scroll containers in [child.astro](file:///home/billa/proj/indido-apparel/src/pages/collections/child.astro#L240), [men.astro](file:///home/billa/proj/indido-apparel/src/pages/collections/men.astro#L242), and [women.astro](file:///home/billa/proj/indido-apparel/src/pages/collections/women.astro#L261) to force native inertial scrolling.
* **Linen-Cream Background Fallback:** 
  Declared a robust background color fallback variable [--paper](file:///home/billa/proj/indido-apparel/src/styles/global.css#L109) (`#fcfaf6` linen-cream) in [global.css](file:///home/billa/proj/indido-apparel/src/styles/global.css#L114) so that if complex CSS background grid gradients fail to draw, the core brand container retains its high-end aesthetics.
* **Touch Hover Fallbacks:** 
  Shifted collection lookbook size selection options to render natively on screens under `768px` instead of relying on desktop hover behaviors.
