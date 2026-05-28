# AI SEO / GEO setup

How the blog signals its content to AI assistants (ChatGPT, Claude, Perplexity, Google AI Overviews) and traditional search engines. This is the technical reference; for the rationale see the [original audit](./THEME.md#history).

## What's emitted, where

| Signal | File | Output | Pages affected |
|---|---|---|---|
| **JSON-LD `WebSite`** + SearchAction | `layouts/partials/head-schema.html` | `<script type="application/ld+json">` in `<head>` | Home |
| **JSON-LD `Person`** (+ `mainEntityOfPage`) | `layouts/partials/head-schema.html` | `<script type="application/ld+json">` in `<head>` | `/about/` |
| **JSON-LD `BlogPosting`** (+ nested `Person` author + `Organization` publisher + `image` as `ImageObject` with width/height when available) | `layouts/partials/head-schema.html` | `<script type="application/ld+json">` in `<head>` | Every `type = "post"` page |
| **JSON-LD `BreadcrumbList`** | `layouts/partials/head-schema.html` | Second `<script type="application/ld+json">` | Every `type = "post"` page |
| Cover image metadata lookup | `layouts/partials/cover-image-info.html` | Returns `dict` with `url, width, height, alt, isSVG, hasResource, available`. Called once per page by both `head.html` and `head-schema.html`. | All pages (internal helper) |
| `llms.txt` | `layouts/index.llmstxt.txt` + `[outputFormats.LLMSTXT]` in `config.toml` | `/llms.txt` at site root | Home (single file) |
| `canonical` URL | `layouts/partials/head.html` | `<link rel="canonical">` | All pages |
| RSS alternate | `layouts/partials/head.html` | `<link rel="alternate" type="application/rss+xml">` | All pages (falls back to site-wide feed on single posts) |
| `og:type=article` + `article:*` OG meta | `layouts/partials/head.html` | `<meta property="og:type">`, `article:published_time`, `article:author`, `article:section`, `article:tag`. `article:modified_time` is **only emitted when `Lastmod − PublishDate ≥ 24h`** (honest freshness signal). | Only `type = "post"` pages |
| `og:image` + `og:image:width/height/alt` | `layouts/partials/head.html` | `og:image:width` / `og:image:height` emitted when the cover is a raster page-bundle resource (Hugo exposes `.Width`/`.Height`). Skipped for SVG and external/legacy paths. `og:image:alt` from page title. | All pages with a cover |
| `og:locale` (e.g. `en_US`) | `layouts/partials/head.html` | Derived from `site.Language.Lang` (which is controlled by `defaultContentLanguage` in `config.toml`). Hyphen → underscore, region uppercased. | All pages |
| Twitter card adaptive | `layouts/partials/head.html` | `summary_large_image` if `image` front-matter present, else `summary`. Plus `twitter:site` / `twitter:creator` from `Site.Params.twitterHandle`. | All pages |
| `<time datetime="…">` | `layouts/_default/single.html`, `layouts/partials/post.html`, `layouts/index.html` | Replaces `<span>` around dates. ISO 8601 in `datetime` attr, human text inside. | All pages with a publish date |
| `<article>` wrapper | `layouts/_default/single.html`, `layouts/partials/post.html`, `layouts/index.html` | Replaces `<div>`/`<section>` around self-contained content | Posts, post cards, featured slider |
| `<h1>` on posts | `layouts/_default/single.html` | Was `<h2>` — now exactly one `<h1>` per post in body | Every post |
| Descriptive link text | `layouts/partials/post.html`, `layouts/index.html` | `aria-label="Read more about <title>"` (visible "Read more" stays) | All post-card and recent-post links |
| Sitemap `changefreq` | `config.toml` `[sitemap]` | `monthly` (was `always`, which is misleading for evergreen content) | All sitemap entries |
| Viewport allowing zoom | `layouts/partials/head.html` | Removed `maximum-scale=1` (WCAG 1.4.4 fix) | All pages |
| TOC (opt-in) | `layouts/_default/single.html` + `toc = true` in front matter | `<nav aria-label="Table of contents">` with Hugo `.TableOfContents` | Posts that set `toc = true` and have ≥1 heading |

## Where the data comes from

Schema fields are wired to existing front-matter / `config.toml` keys, so you generally don't think about them per-post:

- **Person / publisher**: `config.toml` → `[params]` → `nameSite`, `author`, `bio`, `jobTitle`, `twitterHandle`, `sameAs`, `logo`.
- **BlogPosting**: per-post front matter → `title`, `description`, `image`, `date`, `lastmod` (optional), `categories`, `tags`. Plus Hugo-derived `.Permalink`, `.WordCount`, `.Summary`.
- **BreadcrumbList**: hardcoded `Home → Posts → <Post Title>` per post.
- **WebSite**: `Site.Title`, `Site.Params.nameSite`, `Site.Params.description`, plus the search route `/search/?s={search_term_string}`.
- **llms.txt**: enumerates `RegularPages` with `Type == "post"` plus the about/contact pages, all taxonomies, and the optional secondary URLs (RSS, sitemap, search index, GitHub source).

If you change any of those values in `config.toml` or front matter, the schema updates on next build — no template edits needed.

## Why some choices are the way they are

### Why `safeJS` instead of `safeHTML` on jsonify

Hugo's auto-escaper treats content inside `<script>` as JS-string-literal context. Without `safeJS`, `{{ $schema | jsonify }}` ships as a single JSON-encoded string (every quote escaped, the whole thing wrapped in `"…"`) instead of raw JSON. Result: structurally invalid JSON-LD that crawlers reject. `safeJS` tells Hugo "this output is already valid JS — don't escape it again." See `layouts/partials/head-schema.html` and [Hugo's safeJS docs](https://gohugo.io/functions/safe/safejs/).

### Why `BlogPosting` and not `Article`

Both work, but `BlogPosting` is a subclass of `Article` (per [schema.org/BlogPosting](https://schema.org/BlogPosting)) and signals the content's nature more specifically. Google treats them the same for rich results; LLMs use the explicit type as a hint.

### Why the `article:*` OpenGraph fields in `<head>` AND the schema

Different consumers parse different things. Facebook / LinkedIn use the OG `article:*` namespace; Google + AI engines use Schema.org JSON-LD; X (Twitter) uses Twitter Card meta. We emit all three — duplication is intentional and cheap.

### Why `llms.txt` is generated, not static

A static file would go stale every time you publish a new post. Generating it from `Site.RegularPages` means every new post automatically appears in the index on next build. The `[outputFormats.LLMSTXT]` config + `layouts/index.llmstxt.txt` template do this work via Hugo's standard custom-output-format mechanism.

### Why `BlogPosting` publisher is `Organization`, not `Person`

The blog is a personal site, so it's tempting to set publisher = the author. But Schema.org's [Article spec](https://developers.google.com/search/docs/appearance/structured-data/article) requires `publisher` to be an `Organization` with a `logo.ImageObject` — Google rejects markup that uses `Person`. The author entity is still surfaced via the separate `author` field (nested `Person`).

## How to verify after changes

```powershell
# 1. Build cleanly
hugo --minify --gc

# 2. Inspect a single post for the three signals
$post = Get-Content 'public\blog\<slug>\index.html' -Raw
# JSON-LD scripts (should be 2: BlogPosting + BreadcrumbList)
([regex]::Matches($post, '<script type=application/ld\+json>([^<]+)</script>')).Count
# canonical, og:type, article:*, twitter:card present
$post -match '<link rel=canonical'
$post -match '<meta property="og:type" content="article">'
$post -match '<meta property="article:published_time"'
$post -match '<meta name=twitter:card content="summary_large_image">'

# 3. llms.txt exists at root and lists every post
Get-Content public\llms.txt -TotalCount 50
```

Then validate the JSON-LD with one of:

- [Schema Markup Validator](https://validator.schema.org/) — paste the rendered URL or HTML.
- [Google Rich Results Test](https://search.google.com/test/rich-results) — also flags Google-specific quirks.
- After deploy: [Bing Webmaster URL Inspection](https://www.bing.com/webmasters/) — ChatGPT Search uses Bing's index, so Bing-side validation matters more than it used to.

## What's deliberately NOT implemented

- **`FAQPage` / `HowTo` schema.** Both are high-value but only when the post genuinely IS a FAQ or a step-by-step tutorial. Adding them site-wide would be schema bloat (John Mueller flagged this exact anti-pattern). Add per-post when content fits the format.
- **Image sitemap.** Hugo's default sitemap already lists every URL; images are reached via the post HTML, so a separate sitemap-image.xml would add complexity for marginal gain.
- **Pre-rendering for AI crawlers.** The site is already 100% server-rendered HTML — no JS hydration to worry about.
- **Blocking AI crawlers in `robots.txt`.** The goal is to *be cited* by AI assistants, which means allowing `GPTBot`, `ClaudeBot`, `PerplexityBot`, etc. Current `static/robots.txt` allows all of them.
- **Per-post markdown alternate (`<post>.md`).** The llms.txt spec recommends pairing each HTML URL with a `.md` version. We don't generate them yet — `llms.txt` linking to the rendered HTML URLs works for any LLM with web-browsing capability (ChatGPT, Perplexity, Gemini), which covers the main use cases. Reconsider if Anthropic's web-browsing LLMs start preferring the `.md` variant.

## When to update what

- **New post**: nothing — front matter (`title`, `description`, `image`, `date`, `categories`, `tags`) already drives every schema field.
- **Edited an old post meaningfully**: set `lastmod = <ISO datetime>` in its front matter. Surfaces as `dateModified` in JSON-LD and as `article:modified_time` in OG.
- **Bio / role / handles changed**: edit `[params]` in `config.toml` (`bio`, `jobTitle`, `twitterHandle`, `sameAs`). Propagates to every page's schema on next build.
- **New social profile**: add to `[params].sameAs` in `config.toml`. Also add a `[[params.social]]` block for the footer icons.
- **Want TOC on a long post**: set `toc = true` in front matter.
