# AGENTS.md

Instructions for AI coding agents working on this repository. Humans should read `README.md` first; this file is the agent-focused complement.

> Format follows the open [AGENTS.md](https://agents.md/) spec (used by OpenAI Codex, Google Jules, Cursor, Aider, GitHub Copilot coding agent, Windsurf, and others). The nearest `AGENTS.md` in the directory tree wins — this is the only one in the repo.

## Project overview

- **What**: Personal blog at <https://www.giulianopertile.com/>.
- **Stack**: [Hugo](https://gohugo.io/) static site generator + [Liva theme](https://github.com/gethugothemes/liva-hugo) (vendored under `layouts/`, `assets/`, `static/plugins/`). Dark mode + theme tokens (light/dark) live in `assets/scss/_root.scss` — see `docs/THEME.md`.
- **Deploy**: Netlify, auto-builds on push to the default branch using `netlify.toml` (`hugo --minify --gc`, `HUGO_VERSION = 0.162.0`).
- **No package manager, no Node, no Go modules.** Only the `hugo` CLI is required to develop locally.

## Setup (one-time)

You need **Hugo Extended** (non-extended will fail to build SCSS via `libsass`).

```powershell
# Verify
hugo version    # must include "+extended", e.g. "hugo v0.162.0+extended windows/amd64"
```

If missing, install via `winget install Hugo.Hugo.Extended`, `choco install hugo-extended`, or grab `hugo_extended_<ver>_windows-amd64.zip` from <https://github.com/gohugoio/hugo/releases/latest>. See `README.md` for full instructions.

## Commands

```powershell
# Local dev server (drafts included) — http://localhost:1313/
hugo server -D

# Local dev server matching production (excludes drafts)
hugo server

# Production build (same as Netlify) — outputs to public/
hugo --minify --gc

# Scaffold a new post as a Page Bundle (creates content/blog/<slug>/index.md from archetypes/default.md)
hugo new blog/<slug>/index.md
```

Prefer running `hugo server` (not `hugo` + serving manually) — it auto-reloads on file changes, including SCSS.

## Repo layout

```
content/blog/              # All blog posts live here as Hugo Page Bundles
  <slug>/
    index.md               # Post content + TOML front matter
    cover.{jpg,png}        # Cover image (used in hero, OG, Twitter cards)
    *.{jpg,png,gif,...}    # Any other images referenced in the post body
  _markdown-reference.md   # Draft cheatsheet (single file, not a bundle)
  new-post.md, post-10.md  # Draft placeholders from upstream theme
content/{about,contact}/   # Static pages
config.toml                # Site config (baseURL, menus, params, social links, analytics ID)
config/development/hugo.toml  # Dev-environment overrides (baseURL = http://localhost:1313/)
                              # Merged on top of config.toml when `hugo server` runs.
                              # Production (`hugo --minify --gc`) ignores it.
netlify.toml               # Build command + headers — do not change HUGO_VERSION lightly
archetypes/default.md      # Template used by `hugo new` (rich TOML front matter + cheatsheet)
layouts/                   # Hugo templates (Liva theme, vendored — edit with care)
  _default/                # baseof.html, list.html, single.html, index.json
  partials/                # head.html, header.html, footer.html, post.html, sidebar.html, share-buttons.html,
                           # picture.html, head-schema.html (JSON-LD; see docs/AI-SEO.md)
  index.html, 404.html, index.llmstxt.txt  # index.llmstxt.txt → /llms.txt (AI SEO; see docs/AI-SEO.md)
assets/scss/               # SCSS sources compiled by Hugo Extended (libsass)
  style.scss               # Entry point — imports _variables, _typography, _common, _buttons, _kofi, _mixins
  templates/               # Per-template partials
static/                    # Copied verbatim to site root
  images/, plugins/        # Theme assets (bootstrap, splide, search, themify-icons) — do not modify
data/gallery.yml           # Gallery data consumed by templates
public/                    # GENERATED — never commit changes here, never edit by hand
resources/_gen/            # GENERATED Hugo asset cache — never edit
```

Both `public/` and `resources/_gen/` are gitignored. If you see edits there, something is wrong.

## Writing a new blog post

This is the most common task. Posts are **Hugo Page Bundles**: each post is a directory `content/blog/<kebab-case-slug>/` containing `index.md` and its co-located images. Front matter is **TOML** (`+++` delimiters), not YAML.

Create `content/blog/<kebab-case-slug>/index.md`:

```toml
+++
categories = ["Programming"]
date = 2026-05-27T03:00:00Z
description = "One sentence (used in meta tags, social cards, and as the homepage summary)."
image = "/blog/<slug>/cover.jpg"
tags = ["Python", "Django"]
title = "Title in Title Case"
type = "post"
+++

Opening paragraph — this also appears under the title on the post page.

## First H2 heading

Body in standard Markdown. Code fences with language hints render via Hugo's `manni` Chroma theme.
```

Rules derived from existing posts (`content/blog/<slug>/index.md`):

- **Front matter is TOML (`+++`)**, not YAML (`---`). Match the existing posts; do not switch formats.
- `type = "post"` is required for the post layout (`layouts/_default/single.html`) to render correctly.
- `date` is an RFC 3339 timestamp (e.g. `2022-09-14T03:00:00Z`). It controls sort order and the displayed publish date.
- `image` is a **site-absolute** path under `/blog/<slug>/` — Hugo serves bundle resources from the post's URL. Used for the post hero, OpenGraph, and Twitter cards (see `layouts/partials/head.html`).
- `categories` map to `/categories/<slug>/` index pages. Reuse existing ones when possible (`Programming`, `Engineering`) before inventing new ones.
- `tags` are free-form but kebab-case-friendly (`"Python"`, `"Go"`, `"Django"`).
- Slug = directory name. Keep it lowercase, hyphen-separated, and stable (it becomes the permalink and the bundle path).

**Optional front-matter fields** (commented in `archetypes/default.md`; uncomment to activate):

- `lastmod = <RFC 3339>` — set ONLY when meaningfully editing a published post (typos don't count). Surfaces as JSON-LD `dateModified` and as a visible "Updated" label, **but only when ≥24h after `date`**. Omitting it suppresses both signals (no fake "updated today"). See `docs/AI-SEO.md` §"When to update what".
- `toc = true` — renders a `<nav>` Table of Contents (Hugo's `.TableOfContents`, built from H2-H4) at the top of the post. Off by default. Helps LLMs ground citations to specific sections of long posts.
- `featured = true` — pins the post to the home-page slider (`layouts/index.html`). Off by default. **Keep `type = "post"`** — `featured` is a presentation flag, not a content type. (Earlier versions of this repo used `type = "featured"`, which silently excluded those posts from the JSON-LD schema and llms.txt index because the AI SEO filters look for `type = "post"`.)

Drafts: set `draft = true` in the front matter while writing. The Netlify build runs `hugo` without `-D`, so drafts will not be published. Three drafts live in `content/blog/` as personal references (`new-post.md`, `post-10.md`, `_markdown-reference.md`) — they are intentionally kept as drafts; do not "fix" or delete them without being asked.

## Images

- **Post images live inside the post's Page Bundle**: `content/blog/<slug>/<file>.{jpg,png,gif,svg,webp}`.
- **Cover image**: name it `cover.jpg` or `cover.png` (one per post) and reference it from front matter as `image = "/blog/<slug>/cover.<ext>"`.
- **In-body images** in the post body: use **relative paths** — just the filename, e.g. `![alt](dragon-curve.jpg)`. Hugo resolves it against the bundle.
- **Cross-bundle references** (e.g. linking to another post's image): use the site-absolute path `/blog/<other-slug>/<file>`.
- **Image processing is automatic.** Hugo's render-image hook (`layouts/_default/_markup/render-image.html`) and the cover-image logic in `single.html`/`post.html`/`index.html` resize raster images to multiple widths, emit WebP + JPG/PNG variants in a `<picture>` tag with `srcset`, add `loading="lazy" decoding="async"`, and emit intrinsic `width`/`height` to prevent CLS. The shared building block is `layouts/partials/picture.html`. Drop multi-MB JPGs into the bundle without guilt — Hugo downscales at build time. Processed files are cached in `resources/_gen/` (gitignored). **See "Pipeline settings" below for the exact quality numbers** — they are tuned for visible-but-tolerable bandwidth cost; do not bump them without re-reading the rationale.

### Pipeline settings

These are the **current production values**. If you change them, update this table and the History entry in `docs/THEME.md`.

| Caller | File | Widths | WebP quality | Raster quality | `sizes` attribute |
|---|---|---|---|---|---|
| Body images (markdown) | `layouts/_default/_markup/render-image.html` | partial default | q92 | q92 | partial default |
| Hero post (cover, above-the-fold) | `layouts/_default/single.html` | 480, 800, 1200, 1600 | q92 | q92 | `(min-width: 1400px) 880px, (min-width: 1200px) 760px, (min-width: 992px) 640px, (min-width: 768px) 720px, 100vw` |
| Card thumb (list views, paginated grid) | `layouts/partials/post.html` | 400, 800 | q92 | q92 | `(min-width: 1400px) 440px, (min-width: 1200px) 380px, (min-width: 992px) 320px, (min-width: 768px) 360px, 100vw` |
| Featured slider (home) | `layouts/index.html` | 600, 1000 | q92 | q92 | `(min-width: 1400px) 500px, (min-width: 1200px) 430px, (min-width: 992px) 370px, (min-width: 768px) 310px, 100vw` |
| Recent-post circle thumb (home, 100×100) | `layouts/index.html` | 200 (single, no srcset) | q90 | n/a | n/a (background-image) |

**Why q92 (raised from q82, the Hugo/community default)** — q82 produced visible blur on hero images at xl/xxl. q92 is near-lossless to the eye and roughly 3× heavier than q82, but the resulting files are still ~30× smaller than the raw source. Trade-off was explicitly chosen: **prefer quality over bandwidth**. To tune, edit the `q92` literals in `layouts/partials/picture.html` (in the `range` block) and the `q90` literal in the recent-thumb block in `layouts/index.html`.

**Why 1600w in the default pool** — at xxl (viewport ≥ 1400px) with DPR 2, the hero slot needs ~1760 physical px to render crisp. 1200w upscales visibly on retina; 1600w covers it. Smaller-screen visitors still get 480 / 800 / 1200, so this is opt-in cost for high-DPR users on big screens.

**Why the actual srcset may include the original width** — `picture.html` always caps variants to the original (no upscaling). If the original falls **between** standard widths (e.g. a 1024w cover with widths `[480, 800, 1200, 1600]` → picked `[480, 800]`), the partial appends the original as the max variant → final srcset `[480w, 800w, 1024w]`. Without this, the browser would upscale 800w → blur at xxl. **Skipped when the original is huge** (e.g. 5472w hero) — the largest standard (1600w) already covers it and we don't want a useless 5472w variant.

**Why accurate `sizes` matters** — without it, the browser picks the variant based on a (misleading) declared slot size and may pick a too-small variant + upscale → blur. The values above mirror Bootstrap container widths × column ratios at each breakpoint. **Rule of thumb**: when changing the column grid for an image (e.g. `col-lg-8` → `col-lg-6`), also re-derive the `sizes` attribute. Otherwise the browser will silently pick the wrong variant.

**SVG covers are safe but un-optimised** — `single.html`/`post.html`/`index.html` guard against `cover.svg` (`MediaType.Type == "image/svg+xml"`) and emit a raw `<img>` instead of calling `picture.html` (which would crash on `.Width` for vectors). Honest passthrough; optimise SVGs manually with SVGO.


- **What the pipeline does NOT optimise** (passthrough with `loading="lazy"` only):
  - **SVG** — Hugo can't resize vectors. If a committed SVG is huge (e.g. multi-MB tilings), optimise it manually with [SVGO](https://github.com/svg/svgo) before committing.
  - **Animated GIF** — Hugo's WebP encoder collapses animation to a single frame, so the hook passes animated GIFs through verbatim. If size matters, convert manually to animated WebP / AVIF with `cwebp` or `ffmpeg` and commit that instead.
  - **External URLs** (`http(s)://…`) and **site-absolute paths** (`/blog/<other-slug>/<file>`) — passthrough, since they're outside the Page Bundle.
- Do not put post-specific images in `static/images/` (that directory is for site chrome: logo, favicon, author photo, featured-post thumbnails wired into `data/gallery.yml`). Files under `static/` are NOT processed by the render hook — they're served verbatim.
- **External images (Wikimedia Commons, project brand assets, third-party screenshots)**: download into the Page Bundle — never hot-link. See [Image attribution](#image-attribution) below for the required caption format. Downloaded copies inside the bundle are auto-optimised by the render hook; hot-linked URLs are not.

## Image attribution

Any image you didn't author (Wikimedia Commons, third-party screenshots, etc.) needs an italicized caption directly below it linking the **title**, **author**, and **license** — pull all three from the file's `Summary` and `Licensing` tables on Commons. Leave a blank Markdown line between the image and the caption so it renders as a separate `<p>`:

```markdown
![descriptive alt](image-file.jpg)

*["Koch Snowflake"](https://commons.wikimedia.org/wiki/File:KochFlake.svg) by [Wxs](https://commons.wikimedia.org/wiki/User:Wxs), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) via Wikimedia Commons.*
```

Notes:

- The license must be a **link** to the Creative Commons deed (`creativecommons.org/licenses/...`), not plain text.
- Brand logos (Go, Python, Django) are trademarks, not CC works — link to the official brand page; no formal attribution needed.
- Own diagrams and screenshots need no attribution.

## Styling

- All site styles live in `assets/scss/`. The entry point is `style.scss`; it is compiled by `{{ $styles := resources.Get "scss/style.scss" | toCSS | minify }}` in `layouts/partials/head.html`.
- **Theme registry**: all design tokens (colors, surfaces, text, borders) for both light and dark mode live in `assets/scss/_root.scss` as CSS custom properties. This is the **single source of truth** — if you need to change a color, edit it there and update `docs/THEME.md`. Do NOT add hex colors in other SCSS files; reference `var(--eb-*)` or `var(--bs-*)` instead.
- Dark mode is toggled via Bootstrap 5.3's `data-bs-theme` attribute on `<html>`. The token under `[data-bs-theme="dark"]` in `_root.scss` activates automatically.
- `_variables.scss` exists for backward compat with the vendored Liva theme SCSS — its Sass variables are aliases over the CSS custom properties. Do not add new colors there.
- Edit the partial `_*.scss` files for site-wide changes. Mixins go in `_mixins.scss`.
- Do **not** add CSS via `<style>` blocks in templates or content unless you have a good reason — keep styling centralized in SCSS.
- Third-party CSS/JS plugins live under `static/plugins/`. As of the May 2026 jQuery removal, the inventory is: `bootstrap/` (Bootstrap 5.3.x bundle with Popper — vanilla, no jQuery dep), `splide/` (Splide.js v4 — replaces the old jQuery Slick slider; init in `assets/js/script.js`), `glightbox/` (GLightbox v3.3.1 — replaces the old jQuery Venobox lightbox; powers the `/about/` photo gallery, init in `assets/js/script.js`), `search/` (Fuse.js + mark.js v8 vanilla + the site's own `search.js`), and `themify-icons/` (icon font CSS). All vendored. If a plugin needs replacing, do it deliberately and update `config.toml` `[params.plugins]`.

## Editing templates

The theme is **vendored**, not pulled as a Hugo module. That means any change to `layouts/`, `assets/`, or `static/plugins/` is permanent in this repo.

- Prefer the smallest viable change. If a tweak can live in `assets/scss/` or in front matter, do it there.
- Keep Hugo template syntax (`{{ ... }}`) intact. The post layout is `layouts/_default/single.html`; the list layout is `layouts/_default/list.html`; the base layout is `layouts/_default/baseof.html`.
- `layouts/_default/_markup/` contains render hooks (`render-image.html`, `render-codeblock-mermaid.html`) — touch with caution; the image hook is the entry point for the auto-optimisation pipeline described in §Images.
- **JSON-LD / Schema.org / llms.txt** — lives in `layouts/partials/head-schema.html` (per-page-type schema selector) and `layouts/index.llmstxt.txt` (llms.txt generator). Wired into `<head>` via `head.html` and into Hugo outputs via `[outputFormats.LLMSTXT]` in `config.toml`. **Read `docs/AI-SEO.md` before touching any of these** — silent escape bugs (e.g. forgetting `safeJS` on `jsonify`) ship broken structured data that crawlers reject.

## Things to leave alone unless explicitly asked

- `public/` and `resources/_gen/` — generated, gitignored, never edit.
- `netlify.toml` `HUGO_VERSION` — bumping requires a manual local verification with the same version.
- Google Analytics ID, Google AdSense client, Giscus repo IDs — these are wired into `config.toml` and `layouts/`. Do not change them without being asked.
- The three draft files in `content/blog/` (`new-post.md`, `post-10.md`, `_markdown-reference.md`) — see note above.
- `theme.toml` — metadata of the upstream Liva theme; not consumed by the build.
- **Cookie banner** (`layouts/partials/footer.html` + handler in `assets/js/script.js`) is **informational only** — Google Analytics + AdSense load before consent via `head.html`. If you want real GDPR-style gating, defer those scripts in `head.html` and dispatch their load from the I-Accept click handler. Don't "fix" the banner thinking it currently gates anything.

## Verification before declaring done

After any change that could affect rendering (content, front matter, layouts, SCSS, config):

```powershell
# 1. Fast feedback — does the dev server still build and serve?
hugo server -D
#    Then open http://localhost:1313/ and the specific page you touched.

# 2. Production parity — does the real build succeed without -D?
hugo --minify --gc
#    Must exit 0. Inspect public/<path>/index.html for the affected page if in doubt.
```

If the build emits warnings about missing front matter fields, image paths, or template errors, fix them before stopping — Netlify will surface the same errors on deploy.

Do not commit `public/` or `resources/_gen/`. Do not run `hugo` and check in its output.

## Good / avoid

- Good: new post is a Page Bundle `content/blog/<slug>/index.md` + co-located images, TOML front matter, `type = "post"`, `image = "/blog/<slug>/cover.<ext>"`, reuses an existing category, builds clean with `hugo --minify --gc`.
- Good: SCSS change lands in `assets/scss/_common.scss` (or a similarly-scoped partial) and is verified in `hugo server`.
- Good: any externally-sourced image is downloaded into the Page Bundle and captioned with TASL attribution (see [Image attribution](#image-attribution)).
- Avoid: switching a post to YAML front matter, dropping `type = "post"`, or inventing a new category for a single use.
- Avoid: editing `public/`, vendoring new JS into `static/plugins/`, or adding inline `<style>` blocks in templates.
- Avoid: committing large unoptimized images (>1MB) into the bundle without being asked.
- Avoid: hot-linking external images (e.g. `https://upload.wikimedia.org/...`) or embedding a CC-licensed image without an attribution caption.

## Permissions

Safe to do without asking:

- Read any file, run `hugo version`, `hugo server`, `hugo --minify --gc`, `hugo new`.
- Create or edit files under `content/`, `assets/scss/`, `data/`.

Ask first before:

- Editing `config.toml`, `netlify.toml`, `archetypes/default.md`.
- Modifying any file under `layouts/` or `static/plugins/`.
- Deleting posts, images, or anything under `static/`.
- Running `git commit`, `git push`, or any destructive `git` operation.
- Bumping `HUGO_VERSION` in `netlify.toml`.
