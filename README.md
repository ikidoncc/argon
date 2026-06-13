# Argon

A technical blog focused on software engineering, distributed systems, databases, operating systems, infrastructure, networking and computer science.

Argon is a fully static website built with Astro and hosted on GitHub Pages.

The project prioritizes:

- Simplicity
- Performance
- Long-term maintainability
- Content ownership
- Versioned publishing workflow

---

## Philosophy

Content should outlive tools.

Every article is stored directly in the repository using Markdown and versioned through Git.

There is no CMS, database or backend service.

The repository itself is the source of truth.

---

## Features

- Static site generation
- Markdown-based content
- Article-scoped assets
- RSS feed
- Sitemap
- SEO metadata
- Dark mode
- Git-based publishing workflow
- GitHub Pages deployment

---

## Technology Stack

- Astro
- Markdown
- Git
- GitHub Actions
- GitHub Pages

---

## Project Structure

```text
argon/

├── src/
│   ├── content/
│   ├── pages/
│   ├── layouts/
│   └── components/
│
├── public/
│
├── .github/
│   └── workflows/
│
├── README.md
├── ARCHITECTURE.md
├── CONTENT_GUIDE.md
└── COMMIT_CONVENTION.md
```

---

## Article Structure

Each article is self-contained.

```text
0001-linux-kernel/

├── index.md
├── cover.webp
├── scheduler-diagram.webp
│
└── assets/
    ├── benchmark.csv
    └── architecture.pdf
```

This ensures portability, versioning and long-term organization.

---

## Documentation

### Architecture

Project architecture, goals and technical decisions.

```text
ARCHITECTURE.md
```

### Content Guide

Editorial workflow and content organization rules.

```text
CONTENT_GUIDE.md
```

### Commit Convention

Git workflow and commit message conventions.

```text
COMMIT_CONVENTION.md
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

## Publishing Workflow

Create a new article:

```text
src/content/0001-linux-kernel/
```

Add content:

```text
index.md
cover.webp
assets/
```

Commit changes:

```bash
git add .
git commit -m "content(0001): publish linux kernel article"
git push
```

GitHub Actions will automatically:

1. Build the site
2. Generate static assets
3. Deploy to GitHub Pages

---

## Principles

- Content first
- Static by default
- No unnecessary complexity
- Git as source of truth
- Long-term maintainability
- Full ownership of content

---

## License

To be defined.
