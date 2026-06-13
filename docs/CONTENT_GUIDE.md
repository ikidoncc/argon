# Content Guide

## Objective

This document defines the rules for creating, organizing, maintaining, and publishing content in the Argon project.

The purpose of this document is to ensure editorial consistency, file organization, and complete traceability of articles over time.

---

# Philosophy

Each article is an independent unit.

An article must contain:

- Content
- Images
- Diagrams
- Videos
- Supporting files

All related resources must remain within the article's own folder.

There should be no global images or assets folder.

---

# Article Structure

Mandatory format:

```text
src/content/

├── 0001-linux-kernel/
│   ├── index.md
│   ├── cover.webp
│   ├── scheduler-diagram.webp
│   └── assets/
│       ├── benchmark.csv
│       └── architecture.pdf
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

# Article Identification

Every article receives a permanent identifier.

Format:

```text
0001
0002
0003
...
```

The identifier must never change.

Even if the slug or title is changed.

---

# Reserved IDs

Article IDs are subject to the following rules:

- Article IDs are permanent.
- Article IDs are unique.
- Article IDs must never be reused.
- Deleting an article does not release its ID.
- IDs are part of the project's editorial history.

---

# Folder Name

Mandatory format:

```text
<id>-<slug>
```

Examples:

```text
0001-linux-kernel
0002-postgres-internals
0003-how-dns-works
0004-redis-architecture
```

---

# index.md

Every article must have a main file named:

```text
index.md
```

Do not use:

```text
article.md
post.md
content.md
main.md
```

---

# Frontmatter

Every article must start with frontmatter.

Minimum structure:

```yaml
---
id: '0001'
title: Linux Kernel Internals
slug: linux-kernel
date: 2026-06-13
tags:
  - linux
  - kernel
cover: ./cover.webp
draft: false
---
```

---

# Fields

## id

Permanent identifier.

Example:

```yaml
id: '0001'
```

---

## title

Title displayed to the user.

Example:

```yaml
title: Linux Kernel Internals
```

---

## slug

Human-readable URL slug.

Example:

```yaml
slug: linux-kernel
```

Result:

```text
/posts/linux-kernel
```

---

## date

Publication date.

Format:

```yaml
date: YYYY-MM-DD
```

Example:

```yaml
date: 2026-06-13
```

---

## tags

List of categories.

Example:

```yaml
tags:
  - linux
  - kernel
  - operating-systems
```

---

## cover

Cover image.

Example:

```yaml
cover: ./cover.webp
```

---

## draft

Determines whether the article is published.

Example:

```yaml
draft: false
```

---

# Tag Naming Convention

Use:

- lowercase letters
- English words
- kebab-case

Correct:

```yaml
tags:
  - operating-systems
  - distributed-systems
  - database-internals
```

Incorrect:

```yaml
tags:
  - OperatingSystems
  - BancoDeDados
  - Sistemas Distribuidos
```

---

# File Naming Convention

Use:

```text
lowercase
kebab-case
```

Correct:

```text
memory-management.webp
wal-diagram.webp
request-flow.svg
```

Incorrect:

```text
MemoryManagement.webp
MinhaImagem.png
REQUEST_FLOW.svg
```

---

# Images

Images must be stored in the root directory of the article.

Example:

```text
0002-postgres-internals/

├── index.md
├── cover.webp
├── wal-diagram.webp
├── transaction-flow.webp
└── assets/
```

Reference:

```md
![WAL](./wal-diagram.webp)
```

---

# Assets

Supporting files must be placed in the folder:

```text
assets/
```

Examples:

```text
assets/

benchmark.csv
presentation.pdf
demo.mp4
results.json
```

---

# Videos

Local videos must be placed in:

```text
assets/
```

Example:

```text
assets/
└── architecture-demo.mp4
```

---

# Numbering

New articles must always receive the next sequential ID.

Example:

```text
0001
0002
0003
0004
```

Never reuse deleted IDs.

If article 0003 is deleted:

```text
0001
0002
0004
0005
```

The ID 0003 remains reserved in history.

---

# Publishing Workflow

Recommended flow:

## 1. Create folder

```text
0005-how-http-works/
```

## 2. Create index.md

```text
0005-how-http-works/index.md
```

## 3. Add assets

```text
0005-how-http-works/

index.md
cover.webp
request-flow.svg
assets/
```

## 4. Commit

```text
content(0005): publish how http works article
```

---

# Updates

Every subsequent change must use the same ID.

Examples:

```text
content(0005): add request flow diagram

content(0005): update caching section

content(0005): fix typo in introduction

content(0005): add benchmark results
```

---

# Content Deletion

When an article is removed:

- the ID must not be reused;
- the Git history must remain intact;
- the slug can only be reused through an explicit decision.

---

# Recommended Structure

Complete example:

```text
0017-how-dns-works/

├── index.md
├── cover.webp
├── recursive-resolution.webp
├── authoritative-server.webp
│
└── assets/
    ├── dns-trace.txt
    ├── benchmark.csv
    └── packet-capture.pcap
```

---

# Language

The project follows strict language requirements:

- Metadata must be written in English.
- Tags must be written in English.
- Slugs must be written in English.
- File names must be written in English.
- Project documentation must be written in English.

---

# Editorial Quality

Before publishing, verify:

- title is defined;
- slug is defined;
- tags are defined;
- cover image is defined;
- links are working;
- images are loading correctly;
- spelling is reviewed;
- frontmatter is valid.

---

# Long-Term Content Goals

The content of Argon must remain:

- organized;
- traceable;
- versionable;
- portable;
- independent of external platforms.

Each article must be able to exist as a complete unit within the repository.
