# SISE Website Architecture

> Last updated: 2026-07
>
> This document describes the current architecture of the Hugo project.
> It should be updated whenever layouts or rendering logic changes.

---

## Project Principle

Information should exist in exactly one place.

Layouts may display information.

Layouts should never duplicate information.

Content editors should edit only files inside `content/`.

---

# Rendering Flow

Homepage (/)

layouts/index.html
│
▼
layouts/\_default/baseof.html
│
▼
main block
│
├── hero.html
├── intro.html
├── featured-topics.html
├── latest-posts.html
├── latest-podcasts.html
└── latest-workshops.html

---

# Layouts

## layouts/index.html

Purpose:
Homepage only.

Status:
:white_check_mark: Active

Calls:

- hero.html
- intro.html
- featured-topics.html
- latest-posts.html
- latest-podcasts.html
- latest-workshops.html

Called by:

- Hugo (homepage)

---

## layouts/\_default/baseof.html

Purpose:
Shared layout used by all pages.

Status:
:white_check_mark: Active

Responsibilities:

- HTML document
- Head section
- CSS loading
- Header (currently inline)
- Main content
- Footer (currently inline)

Calls:

- css.html

Planned refactoring:

Move Header into:

layouts/partials/header.html

Move Footer into:

layouts/partials/footer.html

Goal:

baseof.html should only assemble the page,
not contain large HTML components.

---

# Infrastructure Partials

These files belong to the Hugo build pipeline.

## layouts/\_partials/css.html

Purpose:

Loads and compiles the site's CSS.

Status:

:white_check_mark: Active

Called by:

baseof.html

Loads:

assets/css/main.css

---

# Homepage Partials

## hero.html

Purpose:

Homepage hero section.

Status:

:white_check_mark: Active

Called by:

layouts/index.html

---

## intro.html

Purpose:

Shows the introduction of the collective.

Status:

:x: In development

Planned behaviour:

- Read content from

content/ueber-uns/\_index.md

- Show only .Summary

- Link to /ueber-uns/

---

## featured-topics.html

Purpose:

Displays manually selected highlighted posts.

Status:

:white_check_mark: Active

Data source:

Pages with

featured: true

---

## latest-posts.html

Purpose:

Displays newest post.

Status:

:white_check_mark: Active

Data source:

content/aktuelles/

---

## latest-podcasts.html

Purpose:

Displays newest podcast.

Status:

:x: Not implemented

Data source:

content/podcasts/

---

## latest-workshops.html

Purpose:

Displays newest workshop.

Status:

:x: Not implemented

Data source:

content/workshops/

---

# Navigation

Current location:

layouts/\_default/baseof.html

Status:

:heavy_exclamation_mark: Needs refactoring

Current issue:

Parent menu items with children
(Materialien, Über uns)
are rendered as buttons,
therefore they are not clickable.

Goal:

Extract navigation into

layouts/partials/header.html

Support:

- clickable parent page
- dropdown submenu
- keyboard accessibility

---

# Footer

Current location:

layouts/\_default/baseof.html

Status:

:heavy_exclamation_mark:` Needs refactoring

Goal:

Move into

layouts/partials/footer.html

---

# CSS

Build pipeline

layouts/\_partials/css.html

↓

assets/css/main.css

↓

Tailwind CSS

↓

assets/css/custom.css

↓

Site styling

---

# Content Structure

content/

- \_index.md
- aktuelles/
- ueber-uns/
- workshops/
- podcasts/
- materialien/
  - inhalte-beitraege/
  - zine/
  - collagen/
  - gruppenneugruendung/
- links/

---

# Refactoring Roadmap

Phase 1
☐ Finish homepage components

Phase 2
☐ Extract Header

Phase 3
☐ Extract Footer

Phase 4
☐ Rewrite Navigation

Phase 5
☐ Remove dead code

Phase 6
☐ Polish CSS

## Front Matter on Regular and Section Pages

e.i:

Regular workshop

title
date
summary
featured
thumbnail
tags
draft

---

Workshop section

title
description
hero_image
intro
draft
