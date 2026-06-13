# GEMINI.md

## Purpose

This file provides the primary project context for AI assistants working on the Argon project.

Before performing any task, the assistant must read and understand the project documentation.

Project documentation is the source of truth.

If any conflict exists between this file and the project documentation, the documentation takes precedence.

---

# Project Overview

Argon is a personal blog and knowledge repository focused on documenting learning, ideas, experiments, discoveries, and technical explorations.

Topics may include:

* Software Engineering
* Computer Science
* System Architecture
* Distributed Systems
* Infrastructure
* Databases
* Networking
* Mathematics
* Physics
* Technology
* Science
* Other subjects worth understanding

The project is intended to serve as a long-term personal knowledge base.

---

# Core Principles

Argon prioritizes:

* Simplicity
* Maintainability
* Readability
* Portability
* Performance
* Longevity

Argon avoids:

* Overengineering
* Premature optimization
* Unnecessary abstractions
* Unnecessary dependencies
* Vendor lock-in

---

# Technical Overview

The project is:

* Fully static
* Built with Astro
* Hosted on GitHub Pages
* Versioned with Git
* Markdown-based
* Open source

There is:

* No backend
* No database
* No self-hosted infrastructure
* No server-side processing
* No runtime content generation

All content is generated during the build process.

---

# Hosting Constraints

The project is hosted on GitHub Pages.

Any proposed solution must be compatible with:

* Static hosting
* Build-time generation
* Static asset delivery
* GitHub Actions deployment

Solutions requiring:

* Servers
* Databases
* Background workers
* Long-running processes

should be avoided unless explicitly approved.

---

# Documentation Hierarchy

Before performing any task, read the following files.

## 1. Architecture

```text
docs/ARCHITECTURE.md
```

Defines:

* Project goals
* Architecture
* Technology stack
* Deployment workflow

## 2. Content Guide

```text
docs/CONTENT_GUIDE.md
```

Defines:

* Content structure
* Editorial rules
* Metadata conventions
* Asset organization

## 3. Commit Convention

```text
docs/COMMIT_CONVENTION.md
```

Defines:

* Commit rules
* Commit types
* Editorial history conventions
* AI documentation conventions

## 4. Roadmap

```text
docs/ROADMAP.md
```

Defines:

* MVP scope
* Planned features
* Project milestones
* Priorities

---

# Source of Truth

The following files are authoritative:

```text
docs/ARCHITECTURE.md
docs/CONTENT_GUIDE.md
docs/COMMIT_CONVENTION.md
docs/ROADMAP.md
```

Never invent conventions that contradict documented rules.

When uncertain:

* Follow the documentation.
* Follow existing project patterns.
* Prefer the simplest solution.

---

# Development Rules

Before implementing any feature:

1. Read relevant documentation.
2. Verify alignment with project goals.
3. Analyze existing patterns.
4. Prefer Astro-native solutions.
5. Minimize complexity.
6. Avoid unnecessary dependencies.

Always ask:

* Is this necessary?
* Is there a simpler solution?
* Can Astro already do this?

---

# Astro Guidelines

Prefer:

* Astro components
* Static generation
* Content Collections
* Markdown content
* Build-time processing
* Minimal JavaScript

Avoid:

* Client-side rendering when unnecessary
* Excessive hydration
* SPA-style architectures
* Runtime content generation

---

# Dependency Policy

Before adding a dependency:

1. Verify whether Astro already provides the feature.
2. Verify whether native browser APIs are sufficient.
3. Justify the dependency.
4. Prefer small and actively maintained packages.

Avoid dependencies for trivial functionality.

---

# Content Rules

When working with articles:

* Follow CONTENT_GUIDE.md.
* Use permanent article IDs.
* Never reuse IDs.
* Use article folder format:

```text
<id>-<slug>
```

Example:

```text
0001-linux-kernel
```

Each article must contain:

```text
index.md
```

as its entry point.

All article assets must remain inside the article folder.

---

# Editorial Principles

Every article should be:

* Self-contained
* Versionable
* Portable
* Independent

Articles should not depend on external systems to exist.

The repository itself is the content source.

---

# Internationalization

Argon may support multiple languages in the future.

When implementing multilingual features:

* Prefer Astro native i18n support.
* Prefer manually translated content.
* Avoid runtime translation services.
* Preserve static generation.
* Preserve SEO quality.

---

# Commit Rules

Follow:

```text
docs/COMMIT_CONVENTION.md
```

exactly.

Examples:

```text
feat: add article search

fix: correct rss generation

content(0001): publish linux kernel article

content(0001): add scheduler diagram

ai: generate architecture documentation
```

Never generate commits such as:

```text
update
fixes
misc
temp
wip
changes
```

---

# Documentation Rules

Documentation created entirely by AI must use:

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

# Performance Goals

Target:

* Lighthouse score above 95
* Minimal JavaScript
* Small bundle size
* Fast page loads
* Excellent Core Web Vitals

Performance should remain a first-class concern.

---

# Decision-Making Process

For every change:

1. Read documentation.
2. Analyze the repository.
3. Identify existing conventions.
4. Follow existing patterns.
5. Implement the simplest valid solution.
6. Verify consistency with documentation.

Do not introduce new patterns without justification.

---

# Task Execution Workflow

For every task:

1. Read relevant documentation.
2. Analyze repository structure.
3. Determine required changes.
4. Implement changes.
5. Validate consistency.
6. Suggest commit messages following COMMIT_CONVENTION.md.

---

# Final Rule

Documentation is the contract.

Always consult:

```text
docs/ARCHITECTURE.md
docs/CONTENT_GUIDE.md
docs/COMMIT_CONVENTION.md
docs/ROADMAP.md
```

before making architectural, editorial, or workflow decisions.

When documentation exists:

* Follow it.

When documentation does not exist:

1. Prefer the simplest solution.
2. Prefer static solutions.
3. Prefer Astro-native features.
4. Prefer fewer dependencies.
5. Prefer maintainability over flexibility.

Consistency is more important than creativity.
