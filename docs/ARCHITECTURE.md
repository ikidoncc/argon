# Project: Argon

## Objective

Create a personal technical blog focused on software engineering, system architecture, infrastructure, databases, and computing.

The project will be fully static, hosted for free through GitHub Pages, and generated using Astro.

No backend services, databases, or self-hosted servers will be required.

All content will be versioned in Git.

---

# Requirements

## Functional

* Publishing articles in Markdown
* Homepage listing articles
* Individual page for each article
* Tag system
* Basic SEO
* RSS Feed
* Sitemap
* Dark theme
* Local search
* About page

## Non-Functional

* Free hosting
* No dedicated server
* No database
* Automated deployment
* Open source
* Easy maintenance
* High performance

---

# Architecture

```text
Markdown
    ↓
Astro Build
    ↓
HTML/CSS/JS
    ↓
GitHub Pages
```

All content will be converted to static HTML during the build process.

No processing will occur at runtime on the server.

---

# Technologies

## Astro

Responsible for website generation.

Reasons:

* Excellent SEO
* Excellent performance
* Low JavaScript usage
* Native Markdown support
* Easy integration with GitHub Pages

---

## Markdown

All articles will be written in Markdown.

Example:

```md
---
title: How PostgreSQL Works
date: 2026-06-13
tags:
  - postgres
  - database
---

# Introduction

Article content.
```

---

## Git

Responsible for:

* Version control
* Article history
* Content review
* Distributed backup

---

## GitHub

Responsible for:

* Code storage
* Article storage
* Publishing pipeline

---

## GitHub Pages

Responsible for hosting.

Characteristics:

* Free
* Automatic HTTPS
* Global CDN

---

## GitHub Actions

Responsible for automated deployment.

Flow:

```text
git push
    ↓
GitHub Action
    ↓
Build Astro
    ↓
Deploy to GitHub Pages
```

---

# Project Structure

```text
argon/

├── .github/
│   └── workflows/
│
├── public/
│
├── src/
│   ├── content/
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │
│   └── components/
│
├── astro.config.mjs
├── package.json
└── README.md
```

---

# Article Structure

Each article will be stored in an independent folder using the `<id>-<slug>` convention.

Example:

```text
src/content/

├── 0001-linux-kernel/
│   ├── index.md
│   ├── cover.webp
│   ├── architecture.png
│   ├── benchmark.webp
│   └── assets/
│       ├── video.mp4
│       └── example.pdf
│
├── 0002-postgres-internals/
│   ├── index.md
│   ├── cover.webp
│   └── assets/
│
└── 0003-redis-architecture/
    ├── index.md
    └── assets/
```

---

# Article Frontmatter

Example:

```md
---
title: How PostgreSQL Works
slug: postgres-internals
date: 2026-06-13
tags:
  - postgres
  - database
cover: ./cover.webp
---

# Introduction

Article text.

![Architecture](./architecture.png)
```

---

# Benefits of the Structure

Each article becomes an independent unit.

Advantages:

* Easy to move articles
* Easy to export articles
* Easy to version assets
* No global images folder
* Organization similar to that used by modern documentation projects

---

# Publishing Process

## Create folder

```text
src/content/0005-my-article/
```

## Add content

```text
src/content/0005-my-article/

├── index.md
├── cover.webp
├── image-01.webp
└── assets/
```

## Commit

```bash
git add .
git commit -m "new article"
git push
```

## Deployment to GitHub Pages

GitHub Actions will execute:

1. Dependency installation
2. Astro build
3. Static HTML generation
4. Deployment to GitHub Pages

---

# SEO

The project must automatically generate:

* sitemap.xml
* robots.txt
* Open Graph
* Twitter Cards
* RSS Feed

Objective:

Better indexing by search engines.

---

# Performance

Goals:

* Lighthouse score above 95
* Static HTML
* Minimal JavaScript
* Load time under 1 second

---

# Costs

Infrastructure:

```text
GitHub Pages: $0
GitHub Actions: $0
Astro: $0
Markdown: $0
```

Expected operational cost:

```text
$0/month
```

---

# Expected Outcome

Argon will be a static, fast, easy-to-maintain technical blog fully hosted on GitHub Pages.

All content will be stored in Markdown within the repository itself, along with its associated assets (images, videos, PDFs, and auxiliary files) stored directly inside each article's folder, allowing full versioning and automatic deployment to GitHub Pages without the need for servers or databases.
