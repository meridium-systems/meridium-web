# Home Page UI Analysis

**File:** `src/app/page.js`  
**Framework:** Next.js  
**Type:** Business consulting landing page composed of 14 section components

---

## Section Breakdown

| # | Section | Component | File Path |
|---|---------|-----------|-----------|
| 1 | Header | `Header` (type 10) | `src/components/layout/header/Header.js` |
| 2 | Hero | `Hero10` | `src/components/sections/heros/Hero10.js` |
| 3 | Features | `Features7` | `src/components/sections/features/Features7.js` |
| 4 | About | `About10` | `src/components/sections/About/About10.js` |
| 5 | Funfacts | `Funfact2` | `src/components/sections/funfacts/Funfact2.js` |
| 6 | Services | `Services10` | `src/components/sections/services/Services10.js` |
| 7 | Video | `Video` | `src/components/sections/videos/Video.js` |
| 8 | Marquee | `FeatureMarquee` | `src/components/shared/marquee/FeatureMarquee.js` |
| 9 | Team | `Team7` | `src/components/sections/teams/Team7.js` |
| 10 | Portfolio | `Portfolios10` | `src/components/sections/portfolios/Portfolios10.js` |
| 11 | Testimonials | `Testimonials9` | `src/components/sections/testimonials/Testimonials9.js` |
| 12 | Blogs | `Blogs10` | `src/components/sections/blogs/Blogs10.js` |
| 13 | Brands | `Brands5` | `src/components/sections/brands/Brands5.js` |
| 14 | Footer | `Footer10` | `src/components/layout/footer/Footer10.js` |

---

## Section Details

### 1. Header
- **Props:** `headerType={10}`, `topbarType={3}`, `isHeaderTop={true}`, `isStickyHeader={true}`
- Two instances rendered — one fixed at top, one sticky on scroll
- Includes: logo, navbar, search form overlay, mobile menu, action buttons

### 2. Hero — `Hero10`
- Full-width background image (`h10-hero-bg.webp`)
- Animated headline about "Expert business consulting"
- `DoughnutChart` statistics visualization
- `FunfactSingle` counter showing "810+"
- CTA button: **"Get free consultation"** → `/about`
- Scroll-down indicator arrow

### 3. Features — `Features7`
- 4 feature cards with mixed layouts (icons, images, chart image)
  1. Quick Solutions — SVG icon + description
  2. Expert Business Advices — image showcase
  3. Strategic Planning — text + chart image
  4. Efficient Operations — image showcase
- GSAP animations with SVG animation effects

### 4. About — `About10`
- Two-column layout: featured image (left) + company narrative (right)
- Accordion with 3 expandable items:
  1. Strategic Planning & Execution
  2. Leadership Executive Coaching
  3. Business Process Optimization
- CTA button: **"Know more us"** → `/about`
- WOW.js entrance animations

### 5. Funfacts — `Funfact2`
- Horizontal counter layout with animated number counters
- Key statistics:
  - **96%** — Complete projects
  - **20M** — Reach worldwide
  - **8.5x** — Faster growth
  - **100+** — Awards archived

### 6. Services — `Services10`
- Pulls first 4 items from `getALlServices()`
- Maps to `ServiceCard10` components
- Stack scroll animation via GSAP
- CTA button: **"More services"** → `/services`

### 7. Video — `Video`
- Full-width parallax background image (`h10-video-bg.webp`)
- `PopupVideo` lightbox wrapper
- Embedded YouTube video (ID: `MLpWrANjFbI`)

### 8. Feature Marquee — `FeatureMarquee`
- Swiper slider in free-mode with autoplay (4000ms, continuous loop)
- Repeating phrases: "Passion and progress", "Founders and vision", "Growth and impact", "Team and values", "Innovation and future", "Success and impact"
- Marquee icon separators between items

### 9. Team — `Team7`
- Pulls first 4 members from `getTeamMembers()`
- Maps to `TeamCard7` with interactive selection state (`currentIndex`)
- CTA button: **"More teams"** → `/team`
- Responsive: different button placement on desktop vs mobile

### 10. Portfolio — `Portfolios10`
- Pulls first 3 items from `getPortfolio()`
- Maps to `PortfolioCard10` components
- Stack scroll animation (same pattern as Services)
- GSAP animation scope handling

### 11. Testimonials — `Testimonials9`
- Pulls first 4 testimonials from `getTestimonials()`
- Swiper carousel configuration:
  - Autoplay: 5000ms interval
  - Clickable pagination dots
  - Prev/next navigation arrows
  - Responsive breakpoints: 1 slide (mobile) → 2 slides (tablet) → 3 slides (desktop)
- Maps to `TestimonialsCard8` components

### 12. Blogs — `Blogs10`
- Pulls first 5 posts from `getBlogs()`
- Maps to `BlogCard10` components
- Section heading: "Tip and tricks for success"
- WOW.js entrance animations

### 13. Brands — `Brands5`
- Pulls first 7 brands from `getBrands()`
- Displays brand logos via `img2` property
- Each brand links to `/contact`
- Background image styling per brand item

### 14. Footer — `Footer10`
- Newsletter signup form with email input
- Company branding: **MERIDEUM**
- Three footer columns:
  - Newsletter subscription
  - CTA: "Let's talk business?" → `/contact`
  - Contact info: Headquarters (USA) + Operations (Canada)
- Social media links: Facebook, Instagram, Twitter, LinkedIn
- Copyright section with policy/privacy links
- Back to top button

---

## Global Client-Side Components

### ClientWrapper
**File:** `src/components/shared/wrappers/ClientWrapper.js`
- Initializes WOW.js for scroll-triggered entrance animations
- Sets up GSAP animations: title reveals, text reveals, left/right swipes, image parallax
- Smooth scroll-to-top functionality
- Manages magic cursor lifecycle (mounts/unmounts)

### TjMagicCursor
**File:** `src/components/shared/others/TjMagicCursor.js`
- Replaces default browser cursor
- Outer circle + inner element with contextual text ("Drag", "View Project", etc.)
- Type-based variations for different interaction contexts

---

## Data Sources

All dynamic content is populated from local data functions:

| Function | Used In | Content |
|----------|---------|---------|
| `getALlServices()` | Services10 | Service cards (first 4) |
| `getTeamMembers()` | Team7 | Team member cards (first 4) |
| `getPortfolio()` | Portfolios10 | Portfolio items (first 3) |
| `getTestimonials()` | Testimonials9 | Testimonial cards (first 4) |
| `getBlogs()` | Blogs10 | Blog post cards (first 5) |
| `getBrands()` | Brands5 | Brand/partner logos (first 7) |

---

## Tech Stack

| Category | Library / Tool |
|----------|---------------|
| Framework | Next.js (App Router) |
| Animations | GSAP, WOW.js |
| Carousel | Swiper.js |
| Images | Next.js `Image` (WebP) |
| Icons | Font Awesome, custom inline SVGs |
| Styling | SCSS with BEM-style class naming (`h10-*` variant) |
| Layout | Bootstrap grid system |

---

## Design Patterns

- **Stack scroll animation** — reused in both Services and Portfolio sections via GSAP
- **Dual header instances** — static on top load, sticky version activates on scroll
- **Responsive carousel** — Testimonials breakpoints: 1 → 2 → 3 slides
- **CTAs distributed throughout** — hero, about, services, team sections each have a dedicated action button
- **Consistent data slicing** — each section takes only the first N items from its data source to keep the page focused
