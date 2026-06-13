# Argon MVP Roadmap

## Objective

This roadmap defines all features, configurations, and milestones required to deliver the first production-ready version of Argon.

The MVP should provide a complete publishing experience while remaining simple, maintainable, and fully static.

---

# Milestone 1 — Repository Foundation

## Goal

Prepare the repository structure and project governance.

### Tasks

- [x] Create Git repository
- [x] Add LICENSE
- [x] Add README.md
- [x] Add GEMINI.md
- [x] Add ARCHITECTURE.md
- [x] Add CONTENT_GUIDE.md
- [x] Add COMMIT_CONVENTION.md
- [x] Create docs directory structure
- [x] Configure .gitignore

### Deliverable

A fully documented repository ready for implementation.

---

# Milestone 2 — Astro Project Initialization

## Goal

Create the base Astro application.

### Tasks

- [x] Initialize Astro project
- [x] Enable TypeScript strict mode
- [x] Configure project aliases
- [x] Configure formatting rules
- [x] Configure linting
- [x] Configure build scripts

### Deliverable

A working Astro project capable of local development and production builds.

---

# Milestone 3 — GitHub Pages Deployment

## Goal

Enable automatic deployment.

### Tasks

- [x] Configure GitHub Pages
- [x] Create deployment workflow
- [x] Configure Astro output
- [x] Configure base URL
- [x] Test production deployment

### Deliverable

Automatic deployment after every push to the main branch.

---

# Milestone 4 — Content System

## Goal

Create the article management system.

### Tasks

- [x] Configure Astro Content Collections
- [x] Create article schema
- [x] Validate frontmatter
- [x] Configure article loading
- [x] Configure article sorting by date
- [x] Configure draft support

### Deliverable

Markdown articles become valid site content.

---

# Milestone 5 — Layout System

## Goal

Create the visual foundation of the site.

### Tasks

- [x] Create global layout
- [x] Create article layout
- [x] Create page layout
- [x] Configure typography
- [x] Configure responsive design

### Deliverable

Consistent visual structure across all pages.

---

# Milestone 6 — Homepage

## Goal

Provide the main content entry point.

### Tasks

- [x] List latest articles
- [x] Display article metadata
- [x] Display article tags
- [x] Display publication date
- [x] Display article cover image

### Deliverable

Homepage capable of browsing all published content.

---

# Milestone 7 — Article Pages

## Goal

Render article content.

### Tasks

- [x] Render Markdown
- [x] Render images
- [x] Render code blocks
- [x] Render tables
- [x] Render videos
- [x] Render internal links

### Deliverable

Fully functional article pages.

---

# Milestone 8 — Tag System

## Goal

Organize content by topic.

### Tasks

- [x] Generate tag pages
- [x] Create tag listing page
- [x] Display article counts per tag
- [x] Link articles to tags

### Deliverable

Content discoverability through tags.

---

# Milestone 9 — About Page

## Goal

Provide author and project information.

### Tasks

- [x] Create About page
- [x] Add project description
- [x] Add author information
- [x] Add social links

### Deliverable

Complete About page.

---

# Milestone 10 — Navigation

## Goal

Improve site usability.

### Tasks

- [x] Header navigation
- [x] Footer navigation
- [x] Home link
- [x] About link
- [x] Tags link

### Deliverable

Basic site navigation.

---

# Milestone 11 — Search

## Goal

Enable local content search.

### Tasks

- [x] Integrate Pagefind
- [x] Index articles
- [x] Create search UI
- [x] Test search functionality

### Deliverable

Fully static local search.

---

# Milestone 12 — Dark Mode

## Goal

Provide theme support.

### Tasks

- [x] Create dark theme
- [x] Create light theme
- [x] Theme switcher
- [x] Persist theme preference

### Deliverable

User-selectable theme.

---

# Milestone 13 — SEO

## Goal

Improve search engine visibility.

### Tasks

- [x] Meta title generation
- [x] Meta description generation
- [x] Canonical URLs
- [x] Open Graph metadata
- [x] Twitter Card metadata

### Deliverable

SEO-ready pages.

---

# Milestone 14 — Sitemap

## Goal

Support search engine indexing.

### Tasks

- [x] Generate sitemap.xml
- [x] Validate sitemap

### Deliverable

Automatic sitemap generation.

---

# Milestone 15 — RSS Feed

## Goal

Support content syndication.

### Tasks

- [x] Generate RSS feed
- [x] Validate feed structure
- [x] Expose feed URL

### Deliverable

Functional RSS feed.

---

# Milestone 16 — robots.txt

## Goal

Provide crawler instructions.

### Tasks

- [x] Generate robots.txt
- [x] Reference sitemap

### Deliverable

Crawler-ready site.

---

# Milestone 17 — Error Pages

## Goal

Improve user experience.

### Tasks

- [x] Create 404 page
- [x] Configure fallback behavior

### Deliverable

Custom error handling.

---

# Milestone 18 — Content Assets

## Goal

Support article resources.

### Tasks

- [x] Image support
- [x] PDF support
- [x] Video support
- [x] Downloadable assets

### Deliverable

Complete asset support.

---

# Milestone 19 — Performance Optimization

## Goal

Meet performance targets.

### Tasks

- [x] Optimize images
- [x] Reduce JavaScript
- [x] Validate bundle size
- [x] Test page speed

### Deliverable

Fast-loading static pages.

---

# Milestone 20 — MVP Validation

## Goal

Prepare for public release.

### Tasks

- [x] Publish welcome article
- [x] Validate all links
- [x] Validate SEO
- [x] Validate RSS
- [x] Validate sitemap
- [x] Validate search
- [x] Validate GitHub Pages deployment
- [ ] Run Lighthouse audit

### Success Criteria

- [ ] Lighthouse score &ge; 95
- [x] Build succeeds
- [x] Deployment succeeds
- [x] Search works
- [x] RSS works
- [x] Sitemap works
- [x] Dark mode works
- [x] Tags work
- [x] Articles render correctly

---

# Out of Scope

The following features are not part of the MVP:

- Comments
- User accounts
- Authentication
- CMS
- Analytics dashboards
- Newsletter platform
- Database
- Backend APIs
- Self-hosted services
- Monetization systems

These features may be evaluated after the MVP is completed.

---

# MVP Completion Definition

Argon MVP is complete when:

- Articles can be published through Markdown.
- Content is automatically deployed to GitHub Pages.
- Search works locally.
- SEO assets are generated automatically.
- RSS feed is available.
- Dark mode is available.
- Performance targets are achieved.
- All project documentation is respected.
