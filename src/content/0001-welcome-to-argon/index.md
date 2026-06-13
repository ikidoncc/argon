---
id: '0001'
title: 'Welcome to Argon: Building High-Performance Blogs'
slug: 'welcome-to-argon'
date: 2026-06-13
tags:
  - web-development
  - astro
  - static-site
cover: './cover.png'
description: 'Welcome to Argon, a personal blog and knowledge repository where I share articles, notes, experiments, and insights about software engineering, computer science, and systems design.'
draft: false
---

# Welcome to Argon

Welcome to **Argon**, a personal blog and knowledge repository designed to document explorations, notes, experiments, and insights across software engineering, computer science, mathematics, physics, and beyond.

This article details how the project was built, its current capabilities, and what features are planned for the future.

---

## How Argon Was Built

Argon is engineered from the ground up as a fully static website to ensure high performance, security, and low operational complexity. The core technology stack consists of:

### 1. Astro v6

We selected Astro as our foundational framework. Astro is built for content-focused websites, utilizing an "islands architecture" that renders pages to static HTML during build time, removing unnecessary client-side JavaScript by default. We leverage Astro's new Content Collections engine to validate frontmatter schemas and load Markdown files dynamically.

### 2. Tailwind CSS v4 & Vanilla CSS

Styling is powered by the latest Tailwind CSS v4, which integrates directly into the Vite compiler for faster build speeds. We combined Tailwind's utility classes with a custom Vanilla CSS tokens system in `src/styles/global.css`. This styling setup powers:

- Sleek dark and light mode colors.
- Premium glassmorphic card layouts.
- Adaptive typography for comfortable technical reading.
- Micro-animations for interactive elements.

### 3. Automated Git & GitHub Pages Pipeline

There is no database, CMS, or backend server. The repository is the sole source of truth. Every time we commit and push code or articles to the `main` branch, a GitHub Actions workflow:

1. Checks out the repository.
2. Configures a Node.js and `pnpm` environment.
3. Installs dependencies and runs the build script.
4. Deploys the static HTML payload directly to GitHub Pages.

---

## Current Features

The current implementation provides a solid foundation for writing and reading technical articles:

- **Markdown Engine**: Native rendering of Markdown content, including styled headers, lists, links, inline code, and code blocks.
- **Base Layout & Responsive Header**: Interactive header with responsive navigation links (Home, Tags, About) and an inline theme toggle script that reads user system preferences and prevents "theme flash" during page loads.
- **Dynamic Tag System**: Automatic extraction of unique tags across all posts, displaying a tag directory page with post counts, and generating dynamic topic pages (`/tags/[tag]`).
- **About Page**: A dedicated page presenting author details, social profiles, and project architecture notes.
- **Clean Tooling**: Full configuration of ESLint flat configs and Prettier rules to enforce clean code and content formatting.

---

## Future Roadmap

The MVP Roadmap defines several critical milestones to be completed before the final public release:

### 1. Static Local Search

We will integrate **Pagefind** to index article content during the build phase. This allows users to search the entire blog locally using a fast, static search UI without relying on external APIs.

### 2. SEO Enhancements & Syndication

To improve indexation and readability on social platforms, we will implement:

- Dynamic Open Graph (OG) and Twitter Card metadata.
- Automatic generation of `sitemap.xml` and `robots.txt`.
- An RSS feed to allow syndication via feed readers.

### 3. Validation & Performance Audits

Before finalizing the MVP, we will run comprehensive validations:

- Confirming that our Lighthouse score meets or exceeds a score of **95** across all categories (Performance, Accessibility, Best Practices, SEO).
- Verifying bundle sizes and image optimizations.

---

Thank you for visiting Argon. Stay tuned for upcoming articles and technical notes!
