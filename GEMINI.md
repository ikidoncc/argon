# GEMINI.md

## Purpose

This file provides the primary project context for Gemini.

Before making any modification, Gemini must read and understand the project documentation.

The documentation is the source of truth.

If any conflict exists between this file and other documentation, the documentation files take precedence.

---

# Project Overview

Argon is a personal technical blog focused on:

* Software Engineering
* System Architecture
* Distributed Systems
* Infrastructure
* Databases
* Networking
* Computer Science

The project is:

* Fully static
* Built with Astro
* Hosted on GitHub Pages
* Versioned with Git
* Markdown-based

There is:

* No backend
* No database
* No self-hosted infrastructure

---

# Documentation Hierarchy

Before performing any task, read the following files:

1.

```text
docs/ARCHITECTURE.md
```

Defines:

* Project goals
* Technical architecture
* Technology stack
* Deployment workflow

2.

```text
docs/CONTENT_GUIDE.md
```

Defines:

* Content structure
* Article organization
* Metadata rules
* Asset management

3.

```text
docs/COMMIT_CONVENTION.md
```

Defines:

* Commit rules
* Commit types
* Editorial history conventions
* AI documentation rules

---

# Source of Truth

Gemini must treat the following files as authoritative:

```text
docs/ARCHITECTURE.md
docs/CONTENT_GUIDE.md
docs/COMMIT_CONVENTION.md
```

Never invent conventions that contradict these files.

When uncertain, follow the documented rules.

---

# Development Rules

Before implementing a feature:

1. Read ARCHITECTURE.md
2. Verify if the feature aligns with project goals
3. Keep the solution as simple as possible
4. Avoid unnecessary dependencies
5. Preserve static-site principles

---

# Content Rules

When working with articles:

* Follow CONTENT_GUIDE.md
* Use article IDs
* Use folder format:

```text
<id>-<slug>
```

* Use:

```text
index.md
```

as the article entry point.

* Never reuse article IDs.

---

# Commit Rules

Follow COMMIT_CONVENTION.md exactly.

Examples:

```text
feat: add article search

fix: correct rss generation

content(0001): add scheduler diagram

ai: generate architecture documentation
```

Never create commits such as:

```text
update
fix
misc
wip
temp
```

---

# Documentation Rules

Documentation created entirely by Gemini must use:

```text
ai
```

commit types.

Human-written documentation uses:

```text
docs
```

commit types.

---

# Architecture Principles

Prioritize:

* Simplicity
* Maintainability
* Readability
* Performance
* Low complexity

Avoid:

* Premature optimization
* Overengineering
* Unnecessary abstractions
* Unnecessary dependencies

---

# Astro Guidelines

Prefer:

* Astro components
* Static generation
* Content collections
* Minimal client-side JavaScript

Avoid:

* Unnecessary hydration
* Client-side rendering when static rendering is sufficient

---

# Performance Goals

Target:

* Lighthouse score above 95
* Minimal JavaScript
* Fast static pages
* Small bundle size

---

# Decision-Making Process

When implementing changes:

1. Read project documentation
2. Identify existing conventions
3. Follow established patterns
4. Produce the simplest valid solution
5. Avoid introducing new patterns without justification

---

# Task Execution Workflow

For every task:

1. Read relevant documentation
2. Analyze repository structure
3. Determine required changes
4. Implement changes
5. Verify consistency with documentation
6. Generate commits following COMMIT_CONVENTION.md

---

# Final Rule

The project documentation is the contract.

Gemini must always consult:

* docs/ARCHITECTURE.md
* docs/CONTENT_GUIDE.md
* docs/COMMIT_CONVENTION.md

before making architectural, editorial, or workflow decisions.

When documentation exists, follow it.

When documentation does not exist, choose the simplest solution consistent with the project's philosophy.
