# Commit Convention

## Objective

This document defines the commit rules for the Argon project.

The objective is to maintain a clean, traceable, and predictable history, allowing the tracking of both code evolution and the evolution of each published article.

The Git history should function as living documentation of the project.

---

# Principles

Every commit must:

- Represent a single intent
- Be small and focused
- Have a clear message
- Be written in English
- Follow the patterns defined in this document

The following are not allowed:

- Generic commits
- Commits with multiple unrelated changes
- Vague messages
- Temporary commits

Invalid examples:

```text
update
fix
changes
misc
temp
wip
teste
ajustes
```

---

# Structure

Standard format:

```text
<type>: <description>
```

or

```text
<type>(scope): <description>
```

---

# Allowed Types

## feat

New feature.

Example:

```text
feat: add dark mode
```

---

## fix

Bug fix.

Example:

```text
fix: correct rss generation
```

---

## refactor

Refactoring without changing behavior.

Example:

```text
refactor: simplify article loading
```

---

## style

Visual changes.

Example:

```text
style: improve homepage layout
```

---

## build

Build-related changes.

Example:

```text
build: configure astro sitemap
```

---

## ci

Changes related to CI/CD workflows.

Example:

```text
ci: configure github pages deployment
```

---

## docs

Manually created or modified documentation.

Example:

```text
docs: update deployment guide
```

---

## chore

Maintenance tasks.

Example:

```text
chore: update dependencies
```

---

# Articles

## Identification

Each article receives a permanent identifier.

Example:

```text
0001-linux-kernel
0002-postgres-internals
0003-redis-architecture
```

The identifier must never change.

Even if:

```text
0001-linux-kernel
```

becomes:

```text
0001-linux-kernel-internals
```

the ID remains:

```text
0001
```

---

## Reserved Article IDs

Article IDs are subject to the following rules:

- **Permanent**: Once assigned to an article, the ID is permanently bound to it.
- **Unique**: Each ID must uniquely identify a single article.
- **No Reuse**: Article IDs must never be reused.
- **Retention**: Deleting or removing an article does not free up its ID for future use.
- **History**: Preserved IDs remain as part of the project's editorial history.

---

## Structure

```text
src/content/

├── 0001-linux-kernel/
│   ├── index.md
│   └── assets/
│
├── 0002-postgres-internals/
│   ├── index.md
│   └── assets/
│
└── 0003-redis-architecture/
    ├── index.md
    └── assets/
```

---

# content Type

All article-related commits must use the following type:

```text
content
```

Mandatory format:

```text
content(<article-id>): <description>
```

---

## New article

Example:

```text
content(0001): publish linux kernel article
```

---

## Content change

Example:

```text
content(0001): expand scheduler section
```

---

## Correction

Example:

```text
content(0001): fix typo in memory chapter
```

---

## Image addition

Example:

```text
content(0001): add scheduler diagram
```

---

## Video addition

Example:

```text
content(0001): add architecture walkthrough video
```

---

## Large update

Example:

```text
content(0001): rewrite memory management section
```

---

## New article publication

Example:

```text
content(0002): publish postgres internals article
```

---

## Multiple Article Changes

When committing changes:

- **Avoid modifying multiple articles** in a single commit.
- **Prefer one commit per article** to isolate edits.
- **Do not use generic messages** such as:
  ```text
  content: update articles
  ```
- **Maintain a clean editorial history** by separating concerns.

---

# Editorial History

The purpose is to track the complete history of an article.

Example:

```text
content(0001): publish linux kernel article
content(0001): add scheduler diagram
content(0001): expand process chapter
content(0001): update memory management section

content(0002): publish postgres internals article
content(0002): add wal architecture diagram
content(0002): update transaction chapter
```

This makes it possible to view the complete editorial history of a specific article.

---

# ai Type

Used exclusively for documentation created by AI.

AI-generated content should not be mixed with manual documentation.

Format:

```text
ai: <description>
```

---

## Examples

```text
ai: add project specification

ai: create architecture documentation

ai: generate commit convention

ai: create article template

ai: generate content workflow documentation
```

---

## Optional Scope

When necessary:

```text
ai(architecture): generate project blueprint

ai(workflow): create publishing workflow

ai(content): generate article structure specification
```

---

# AI Documentation Rules

All AI-generated documentation must use the type:

```text
ai
```

Never use:

```text
docs
```

for content produced entirely by AI.

Objective:

Clearly separate human documentation from generated documentation.

---

# Language

All commit messages must be written in English.

Correct:

```text
feat: add dark mode

content(0001): add scheduler diagram

ai: generate architecture specification
```

Incorrect:

```text
feat: adicionar tema escuro

content(0001): adicionar imagem

ai: gerar documentação
```

---

# Commit Size

Each commit must represent a single logical change.

Correct:

```text
content(0001): add scheduler diagram

content(0001): update memory chapter

content(0001): fix typo in introduction
```

Incorrect:

```text
content(0001): update article and add images and fix typos
```

---

# Pull Requests

Every Pull Request must:

- Build successfully
- Pass validations
- Have a clear description
- Not contain temporary commits
- Respect this convention

---

# Forbidden Commits

Never use:

```text
update
fix
temp
misc
wip
changes
teste
ajustes
coisas
```

---

# Valid Examples

```text
feat: add article search

fix: correct rss generation

style: improve homepage typography

build: configure sitemap generation

ci: add github pages deployment

docs: update deployment guide

content(0001): publish linux kernel article

content(0001): add scheduler diagram

content(0001): expand memory management section

content(0002): publish postgres internals article

ai: generate architecture specification

ai: create commit convention

ai(workflow): generate publishing workflow
```

---

# Philosophy

The Git history is part of the project documentation.

A person should be able to understand:

- the evolution of the system;
- the evolution of the documentation;
- the evolution of each article;

just by reading the commit history.

Each commit should represent a meaningful step in Argon's evolution.
