# Argon MVP Roadmap

## Objective

This roadmap defines all features, configurations, and milestones required to deliver the first production-ready version of Argon.

The MVP should provide a complete publishing experience while remaining simple, maintainable, and fully static.

---

# Milestone 1 — Repository Foundation

## Goal

Prepare the repository structure and project governance.

### Tasks

- [ ] Create Git repository
- [ ] Add LICENSE
- [ ] Add README.md
- [ ] Add GEMINI.md
- [ ] Add ARCHITECTURE.md
- [ ] Add CONTENT_GUIDE.md
- [ ] Add COMMIT_CONVENTION.md
- [ ] Create docs directory structure
- [ ] Configure .gitignore

### Deliverable

A fully documented repository ready for implementation.

---

# Milestone 2 — Astro Project Initialization

## Goal

Create the base Astro application.

### Tasks

- [ ] Initialize Astro project
- [ ] Enable TypeScript strict mode
- [ ] Configure project aliases
- [ ] Configure formatting rules
- [ ] Configure linting
- [ ] Configure build scripts

### Deliverable

A working Astro project capable of local development and production builds.

---

# Milestone 3 — GitHub Pages Deployment

## Goal

Enable automatic deployment.

### Tasks

- [ ] Configure GitHub Pages
- [ ] Create deployment workflow
- [ ] Configure Astro output
- [ ] Configure base URL
- [ ] Test production deployment

### Deliverable

Automatic deployment after every push to the main branch.

---

# Milestone 4 — Content System

## Goal

Create the article management system.

### Tasks

- [ ] Configure Astro Content Collections
- [ ] Create article schema
- [ ] Validate frontmatter
- [ ] Configure article loading
- [ ] Configure article sorting by date
- [ ] Configure draft support

### Deliverable

Markdown articles become valid site content.

---

# Milestone 5 — Layout System

## Goal

Create the visual foundation of the site.

### Tasks

- [ ] Create global layout
- [ ] Create article layout
- [ ] Create page layout
- [ ] Configure typography
- [ ] Configure responsive design

### Deliverable

Consistent visual structure across all pages.

---

# Milestone 6 — Homepage

## Goal

Provide the main content entry point.

### Tasks

- [ ] List latest articles
- [ ] Display article metadata
- [ ] Display article tags
- [ ] Display publication date
- [ ] Display article cover image

### Deliverable

Homepage capable of browsing all published content.

---

# Milestone 7 — Article Pages

## Goal

Render article content.

### Tasks

- [ ] Render Markdown
- [ ] Render images
- [ ] Render code blocks
- [ ] Render tables
- [ ] Render videos
- [ ] Render internal links

### Deliverable

Fully functional article pages.

---

# Milestone 8 — Tag System

## Goal

Organize content by topic.

### Tasks

- [ ] Generate tag pages
- [ ] Create tag listing page
- [ ] Display article counts per tag
- [ ] Link articles to tags

### Deliverable

Content discoverability through tags.

---

# Milestone 9 — About Page

## Goal

Provide author and project information.

### Tasks

- [ ] Create About page
- [ ] Add project description
- [ ] Add author information
- [ ] Add social links

### Deliverable

Complete About page.

---

# Milestone 10 — Navigation

## Goal

Improve site usability.

### Tasks

- [ ] Header navigation
- [ ] Footer navigation
- [ ] Home link
- [ ] About link
- [ ] Tags link

### Deliverable

Basic site navigation.

---

# Milestone 11 — Search

## Goal

Enable local content search.

### Tasks

- [ ] Integrate Pagefind
- [ ] Index articles
- [ ] Create search UI
- [ ] Test search functionality

### Deliverable

Fully static local search.

---

# Milestone 12 — Dark Mode

## Goal

Provide theme support.

### Tasks

- [ ] Create dark theme
- [ ] Create light theme
- [ ] Theme switcher
- [ ] Persist theme preference

### Deliverable

User-selectable theme.

---

# Milestone 13 — SEO

## Goal

Improve search engine visibility.

### Tasks

- [ ] Meta title generation
- [ ] Meta description generation
- [ ] Canonical URLs
- [ ] Open Graph metadata
- [ ] Twitter Card metadata

### Deliverable

SEO-ready pages.

---

# Milestone 14 — Sitemap

## Goal

Support search engine indexing.

### Tasks

- [ ] Generate sitemap.xml
- [ ] Validate sitemap

### Deliverable

Automatic sitemap generation.

---

# Milestone 15 — RSS Feed

## Goal

Support content syndication.

### Tasks

- [ ] Generate RSS feed
- [ ] Validate feed structure
- [ ] Expose feed URL

### Deliverable

Functional RSS feed.

---

# Milestone 16 — robots.txt

## Goal

Provide crawler instructions.

### Tasks

- [ ] Generate robots.txt
- [ ] Reference sitemap

### Deliverable

Crawler-ready site.

---

# Milestone 17 — Error Pages

## Goal

Improve user experience.

### Tasks

- [ ] Create 404 page
- [ ] Configure fallback behavior

### Deliverable

Custom error handling.

---

# Milestone 18 — Content Assets

## Goal

Support article resources.

### Tasks

- [ ] Image support
- [ ] PDF support
- [ ] Video support
- [ ] Downloadable assets

### Deliverable

Complete asset support.

---

# Milestone 19 — Performance Optimization

## Goal

Meet performance targets.

### Tasks

- [ ] Optimize images
- [ ] Reduce JavaScript
- [ ] Validate bundle size
- [ ] Test page speed

### Deliverable

Fast-loading static pages.

---

# Milestone 20 — MVP Validation

## Goal

Prepare for public release.

### Tasks

- [ ] Publish welcome article
- [ ] Validate all links
- [ ] Validate SEO
- [ ] Validate RSS
- [ ] Validate sitemap
- [ ] Validate search
- [ ] Validate GitHub Pages deployment
- [ ] Run Lighthouse audit

### Success Criteria

- [ ] Lighthouse score ≥ 95
- [ ] Build succeeds
- [ ] Deployment succeeds
- [ ] Search works
- [ ] RSS works
- [ ] Sitemap works
- [ ] Dark mode works
- [ ] Tags work
- [ ] Articles render correctly

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
