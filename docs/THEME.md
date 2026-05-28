# Theme registry

Single source of truth for the design tokens (colors, surfaces, text, borders, brand) of [giulianopertile.com](https://www.giulianopertile.com/). Supports light and dark modes via Bootstrap 5.3's [`data-bs-theme`](https://getbootstrap.com/docs/5.3/customize/color-modes/) attribute.

## Files

| File | Role |
|---|---|
| `assets/scss/_root.scss` | **Executable** registry. All CSS custom properties live here. Edit this to change tokens. |
| `assets/scss/_variables.scss` | Sass aliases over the CSS vars. Exists for backward compat with the vendored Liva theme SCSS. Do not add new colors here. |
| `docs/THEME.md` (this file) | Human-readable companion. Tables, swatches, WCAG, rationale, history. Update this when you change tokens. |

> **Rule of thumb**: if you find yourself writing a hex color outside `_root.scss`, you're doing it wrong. Add a token to the registry instead.

---

## Light theme (default)

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--bs-primary` | `#00AAA1` | <span style="display:inline-block;width:60px;height:14px;background:#00AAA1;border:1px solid #d0d7de;"></span> | Brand teal — buttons, links, tag pills, primary CTA |
| `--bs-primary-rgb` | `0, 170, 161` |  | RGB tuple Bootstrap uses for `rgba()` derivations |
| `--bs-primary-darker` | `#007F7A` | <span style="display:inline-block;width:60px;height:14px;background:#007F7A;border:1px solid #d0d7de;"></span> | Brand ramp · darker shade. Used as ghost-tag text (AA pass on tinted bg) |
| `--bs-primary-lighter` | `#1ac4ba` | <span style="display:inline-block;width:60px;height:14px;background:#1ac4ba;border:1px solid #d0d7de;"></span> | Brand ramp · lighter shade. Used as `::selection` bg (vivid accent) |
| `--eb-body-bg` | `#ffffff` | <span style="display:inline-block;width:60px;height:14px;background:#ffffff;border:1px solid #d0d7de;"></span> | Page background |
| `--eb-surface` | `#f4fcff` | <span style="display:inline-block;width:60px;height:14px;background:#f4fcff;border:1px solid #d0d7de;"></span> | Cards, code blocks, tbody, blockquote |
| `--eb-surface-emphasis` | `#daf6ff` | <span style="display:inline-block;width:60px;height:14px;background:#daf6ff;border:1px solid #d0d7de;"></span> | Table thead, hover (one step darker than surface) |
| `--eb-text-strong` | `#222222` | <span style="display:inline-block;width:60px;height:14px;background:#222222;border:1px solid #d0d7de;"></span> | Headings, emphasis |
| `--eb-text-muted` | `#666666` | <span style="display:inline-block;width:60px;height:14px;background:#666666;border:1px solid #d0d7de;"></span> | Body copy |
| `--eb-text-light` | `#959595` | <span style="display:inline-block;width:60px;height:14px;background:#959595;border:1px solid #d0d7de;"></span> | Tertiary text, disabled |
| `--eb-border` | `#ACB9C4` | <span style="display:inline-block;width:60px;height:14px;background:#ACB9C4;border:1px solid #d0d7de;"></span> | Hairlines, dividers, form fields |
| `--eb-selection-bg` | `var(--bs-primary-lighter)` | <span style="display:inline-block;width:60px;height:14px;background:#1ac4ba;border:1px solid #d0d7de;"></span> | `::selection` background (derived from ramp) |
| `--eb-selection-fg` | `#ffffff` | <span style="display:inline-block;width:60px;height:14px;background:#ffffff;border:1px solid #d0d7de;"></span> | `::selection` foreground |
| `--eb-tag-bg` | `rgba(var(--bs-primary-rgb), 0.10)` | <span style="display:inline-block;width:60px;height:14px;background:#00AAA11A;border:1px solid #d0d7de;"></span> | Tag pill + social icon background (translucent teal — ghost in light too) |
| `--eb-tag-fg` | `var(--bs-primary-darker)` | <span style="display:inline-block;width:60px;height:14px;background:#007F7A;border:1px solid #d0d7de;"></span> | Tag pill + social icon text colour (derived from ramp; the darker shade passes WCAG AA on the ghost bg) |
| `--eb-tag-border` | `rgba(var(--bs-primary-rgb), 0.30)` | <span style="display:inline-block;width:60px;height:14px;background:#00AAA14D;border:1px solid #d0d7de;"></span> | Tag pill + social icon border (semi-transparent teal) |

WCAG contrast (text-strong `#222222` on body-bg `#ffffff`): **16.1 : 1** — AAA.

---

## Dark theme · "Warm-dark" (palette D)

Activated by `data-bs-theme="dark"` on `<html>`.

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--bs-primary` | `#2DD4CC` | <span style="display:inline-block;width:60px;height:14px;background:#2DD4CC;border:1px solid #30363d;"></span> | Brighter teal (so it still pops against dark BG) |
| `--bs-primary-rgb` | `45, 212, 204` |  | |
| `--bs-primary-darker` | `#1eb8b0` | <span style="display:inline-block;width:60px;height:14px;background:#1eb8b0;border:1px solid #30363d;"></span> | Brand ramp · darker shade. Used as `::selection` bg (saturated mid-teal that pops against dark body) |
| `--bs-primary-lighter` | `#5EEAD4` | <span style="display:inline-block;width:60px;height:14px;background:#5EEAD4;border:1px solid #30363d;"></span> | Brand ramp · lighter shade. Used as ghost-tag text (AAA contrast on translucent dark bg) |
| `--eb-body-bg` | `#16181c` | <span style="display:inline-block;width:60px;height:14px;background:#16181c;border:1px solid #30363d;"></span> | Warm-dark, not pure black |
| `--eb-surface` | `#1f2128` | <span style="display:inline-block;width:60px;height:14px;background:#1f2128;border:1px solid #30363d;"></span> | Cards, code blocks (clear step up from body) |
| `--eb-surface-emphasis` | `#2a2d36` | <span style="display:inline-block;width:60px;height:14px;background:#2a2d36;border:1px solid #30363d;"></span> | Thead, hover (bumped from `#262931` for clearer step over surface) |
| `--eb-text-strong` | `#e6e4e0` | <span style="display:inline-block;width:60px;height:14px;background:#e6e4e0;border:1px solid #30363d;"></span> | Cream white (lower halation than pure `#ffffff`) |
| `--eb-text-muted` | `#b3b6bd` | <span style="display:inline-block;width:60px;height:14px;background:#b3b6bd;border:1px solid #30363d;"></span> | Body copy (bumped from `#8e8f93`, contrast ~5.5→8.6 : 1, AAA) |
| `--eb-text-light` | `#6b6c70` | <span style="display:inline-block;width:60px;height:14px;background:#6b6c70;border:1px solid #30363d;"></span> | Tertiary, disabled |
| `--eb-border` | `#3a3e48` | <span style="display:inline-block;width:60px;height:14px;background:#3a3e48;border:1px solid #30363d;"></span> | Hairlines (bumped from `#2b2e35` for visibility) |
| `--eb-selection-bg` | `var(--bs-primary-darker)` | <span style="display:inline-block;width:60px;height:14px;background:#1eb8b0;border:1px solid #30363d;"></span> | `::selection` background (derived from ramp) |
| `--eb-selection-fg` | `#16181c` | <span style="display:inline-block;width:60px;height:14px;background:#16181c;border:1px solid #30363d;"></span> | `::selection` foreground |
| `--eb-tag-bg` | `rgba(var(--bs-primary-rgb), 0.15)` | <span style="display:inline-block;width:60px;height:14px;background:#2DD4CC26;border:1px solid #30363d;"></span> | Tag pill background (translucent teal — GitHub ghost pattern) |
| `--eb-tag-fg` | `var(--bs-primary-lighter)` | <span style="display:inline-block;width:60px;height:14px;background:#5EEAD4;border:1px solid #30363d;"></span> | Tag pill text (derived from ramp; Tailwind teal-300 equivalent, AAA contrast on translucent bg) |
| `--eb-tag-border` | `rgba(var(--bs-primary-rgb), 0.35)` | <span style="display:inline-block;width:60px;height:14px;background:#2DD4CC59;border:1px solid #30363d;"></span> | Tag pill border (semi-transparent teal) |

WCAG contrast (text-strong `#e6e4e0` on body-bg `#16181c`): **~14 : 1** — AAA.

---

## Color exceptions

The rule is: *if you find yourself writing a hex outside `_root.scss`, you're doing it wrong*. Two legitimate exceptions exist; both are documented here so nobody "fixes" them by accident.

### 1. `.btn-primary` keeps `$white` text

`assets/scss/_buttons.scss` declares `.btn-primary { color: $white; }`. In dark mode this renders as white text on the brighter teal `#2DD4CC` — the same "solid teal + white text" combination we deliberately moved AWAY from for tag pills and social icons (we switched those to the ghost pattern).

**Why this is correct for `.btn-primary`**: it's a **solid call-to-action button** (Ko-fi, "Get Started", etc.). Solid teal + white is the industry-standard pattern for primary CTAs — Material Design, GitHub primary buttons, Stripe, Tailwind UI all do this. The pattern we abandoned for tags was *decoration*; here we want *action*.

If you ever convert `.btn-primary` to ghost (translucent bg + brand text), update this section.

### 2. `sharingbuttons.io` keeps `border-radius: 5px` and brand colours

`assets/scss/_share-buttons.scss` (the share buttons under each post) has its own `border-radius: 5px` and hardcoded brand colours (Facebook blue, Twitter celeste, etc.). The rest of the theme uses `border-radius: 0`.

**Why this is correct**: the share buttons are *third-party widget output* from sharingbuttons.io. The 5px radius and brand palettes are their signature — keeping them communicates "this UI is borrowed, not ours". Theming them would actively mislead users about what the buttons do.

---

## How to swap the brand colour

The registry is designed so that changing the brand requires editing **one contiguous block per theme** in `_root.scss`. Example workflow for swapping teal → English green.

### Step 1 — Replace the LIGHT ramp

In `:root { ... }` of `assets/scss/_root.scss`:

```scss
--bs-primary: #00684A;            // English green
--bs-primary-rgb: 0, 104, 74;
--bs-primary-darker: #004D37;     // pick a -25% lightness shade; must pass WCAG AA on a ~10% tinted bg
--bs-primary-lighter: #1F8466;    // pick a +10% lightness shade for selection bg pop
```

### Step 2 — Replace the DARK ramp

In `[data-bs-theme="dark"] { ... }`:

```scss
--bs-primary: #3FB58F;            // lighter green for dark bg contrast
--bs-primary-rgb: 63, 181, 143;
--bs-primary-darker: #2D8A6A;     // selection bg in dark (saturated mid-shade)
--bs-primary-lighter: #7BD4B0;    // tag text in dark; ~Tailwind green-300
```

### Step 3 — Verify WCAG

| Pair | Required ratio | Tool |
|---|---|---|
| `--bs-primary-darker` over the light ghost bg (~10% tint of white) | ≥ 4.5 : 1 (AA Normal) | [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) |
| `--bs-primary-lighter` over the dark ghost bg (~15% tint of `#16181c`) | ≥ 4.5 : 1 (AA Normal) | same |
| `--bs-primary` over body-bg (both themes) | ≥ 3 : 1 (AA Large — buttons + links) | same |

If any pair fails, adjust the lighter/darker shades. The **8 values** above are the only edits required — every other token in the file references them via `var(--bs-primary*)`.

### Step 4 — Verify the build

```powershell
hugo --minify --gc   # must exit 0
hugo server         # spot-check both themes visually
```

### Step 5 — Update this doc

Update the swatch tables above (Light theme + Dark theme) with the new hex values, then add a row in [§History](#history) explaining the swap rationale.

### What still uses the brand colour automatically

The following surfaces are auto-themed via the ramp — you don't touch them when swapping:

- Links (`a:hover`, `.text-primary`)
- Bootstrap buttons (`.btn-primary`, `.btn-outline-primary`)
- Borders/focus rings (`.form-control:focus`, `.btn-outline-primary:focus`)
- Tag pills + social icons (`.eb-tag`, `.social-links li a`) — via `rgba(var(--bs-primary-rgb), …)`
- `::selection` background
- Pagination active state + hover
- Splide pagination dot active marker (featured post slider)
- Code block syntax highlighting accent (where Chroma uses primary)

Net effect: changing 8 numbers re-themes the entire site.

---

## Bootstrap pass-through

`_root.scss` also overrides a small set of Bootstrap-recognised vars so utilities like `.text-body-emphasis`, `.text-body-secondary`, `.bg-body`, `.border-secondary-subtle` etc. follow the same registry without further intervention:

```
--bs-body-bg, --bs-body-color, --bs-body-color-rgb,
--bs-emphasis-color, --bs-emphasis-color-rgb,
--bs-secondary-color, --bs-border-color
```

This is the recommended pattern for projects that consume precompiled Bootstrap (we do — `static/plugins/bootstrap/bootstrap.min.css`, v5.3.8) and therefore cannot override `$primary` at the Sass layer.

---

## Syntax highlighting (Chroma)

| Theme | Chroma style | Notes |
|---|---|---|
| Light | `manni` | Existing choice. Warm, friendly, good contrast. |
| Dark | `dracula` | Pink/green/purple accents that play well with the cream text and warm-dark surfaces. |

Wired in via `markup.highlight.noClasses = false` in `config.toml` plus two stylesheets generated at build-time (`assets/css/chroma-light.css`, `assets/css/chroma-dark.css`). At render time `layouts/partials/head.html` concatenates them — wrapping the dark rules under `[data-bs-theme="dark"]` — minifies, fingerprints, and emits a single cacheable `<link rel="stylesheet">` with an SRI integrity hash. End result: ~9 KB shared across all pages, cached after first request.

### Regenerating the stylesheets

```powershell
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText("$PWD\assets\css\chroma-light.css", (hugo gen chromastyles --style=manni  | Out-String), $utf8)
[System.IO.File]::WriteAllText("$PWD\assets\css\chroma-dark.css",  (hugo gen chromastyles --style=dracula | Out-String), $utf8)
```

The `UTF8Encoding($false)` is the `false` for "no BOM" — `>` redirection in PowerShell 5.x writes UTF-16 with BOM, which breaks the CSS parser. Use this exact incantation.

### First deploy after enabling class-based output

When `noClasses = false` was first set (commit history), Hugo went from emitting `<span style="color:#...">` for each token to emitting `<span class="k">…</span>` plus a separate stylesheet. **The first Netlify build after that change re-renders every post's HTML body**: the on-page diff is huge but visually equivalent to the previous deploy. Netlify invalidates its CDN cache automatically on each deploy, so visitors with a stale cache will see the new HTML on next navigation. No manual purge needed.

If you ever need to revert (e.g. issues with the external stylesheet pipeline):

1. Set `noClasses = true` in `config.toml` under `[markup.highlight]`.
2. Remove the Chroma `<link>` block from `layouts/partials/head.html`.
3. Delete the two `assets/css/chroma-*.css` files.

Hugo will go back to inline `style=` attributes; the site stops needing a separate stylesheet but loses the dark-mode-aware code highlighting.

---

## How to change a color

1. Edit the relevant token in `assets/scss/_root.scss` (both `:root` and `[data-bs-theme="dark"]` if it should differ).
2. Update the corresponding row in this file (the swatch and the value).
3. Add an entry to [§History](#history) explaining the why.
4. Run `hugo --minify --gc` to confirm the build still passes.
5. Spot-check in `hugo server` — both themes, plus toggle the `<html>` `data-bs-theme` attribute in DevTools.

## How to add a new token

1. In `_root.scss`, add it under the appropriate section (Brand · Surfaces · Text · Borders · Interactive) for BOTH `:root` and `[data-bs-theme="dark"]`.
2. Reference it anywhere as `var(--eb-your-token)` — never as a Sass variable (no need for backward compat for new tokens).
3. Add a row to the tables above.

## How to add a third theme (e.g. high-contrast)

Bootstrap's `color-mode` system allows arbitrary themes. Add a new block in `_root.scss`:

```scss
[data-bs-theme="high-contrast"] {
  --bs-primary: ...;
  // etc.
}
```

Then add a 4th button to the `data-bs-theme-value` group in the navbar toggle (`layouts/partials/header.html`), and a new row in the localStorage handler (`assets/js/script.js`). No other changes required.

---

## History

### 2026-05-28 — jQuery removal + Splide migration + dead-code cleanup

Closed the "vendored Liva theme legacy JS" chapter. Removed jQuery (84 KB) entirely along with three jQuery-dependent libs, replacing only what was still in use with vanilla equivalents. Net on-disk delta: **~136 KB less / 2 fewer HTTP requests / ~40 KB less over the wire (gzipped)**. The real win is mental, not Lighthouse: the codebase is now jQuery-free, and the only client-side libs left are Bootstrap 5.3 bundle (vanilla), Splide.js v4 (vanilla), Fuse.js (vanilla), mark.js v8 vanilla, and themify-icons CSS.

Changes, grouped by motivation:

1. **Dead code, removed without replacement**:
   - **Venobox** (jQuery lightbox, 29 KB JS+CSS). Initial audit incorrectly claimed there were zero `.venobox` elements in the codebase — there was actually one in `layouts/about/list.html` (the photo gallery). Caught in the post-implementation audit and addressed by migrating to **GLightbox** (vanilla, ~68 KB JS+CSS) — see entry below "GLightbox migration for /about/ gallery". Plugin dir deleted, `config.toml` entries removed, init line removed from `assets/js/script.js`.
   - **Preloader** (`layouts/partials/preloader.html` + `.preloader` SCSS rule + 100ms `$(window).on('load').fadeOut()` handler). Anti-pattern: a 100ms intentional FCP/LCP delay over a div that had no image (`preloader = ""` in config). With Hugo + Netlify CDN there's nothing to "preload". Partial deleted, SCSS rule deleted, baseof partial call removed, `[params.preloader]` block removed from `config.toml`, JS handler removed.
2. **Library replacements (vanilla)**:
   - **Slick → Splide.js v4** (`static/plugins/splide/{splide.min.js,splide-core.min.css}`, ~31 KB total vs Slick's ~58 KB). Slick was animating a *single* featured post — Splide v4 falls back to `type: 'fade'` with no pagination when there's only one slide, then re-enables `loop` + dots when slideCount > 1. Vertical (`direction: 'ttb'`) on ≥600px, horizontal on mobile, wheel-to-navigate, autoHeight to measure the tallest slide. Markup migrated to the required `.splide > .splide__track > .splide__list > li.splide__slide` nesting in `layouts/index.html`. Dot styles ported in `assets/scss/templates/_main.scss` (`.slick-dots`/`.slick-active` → `.splide__pagination`/`.is-active`, same thin-line aesthetic, theme-reactive via `var(--bs-primary)` / `var(--eb-border)`).
   - **mark.js v8 (jQuery plugin, 17 KB) → mark.js v8 (vanilla, 16.5 KB)**. Same version, same size, same `new Mark(ctx).mark(keyword)` API. The previous vendored copy used `module.exports=t(require("jquery"))`; the new one uses `module.exports=t()`. Drop-in.
   - **`search.js` jQuery → vanilla**. Line-by-line port: `$.getJSON` → `fetch().then(r => r.json())`, `$.each` → `forEach`, `$('#x').val()` → `getElementById('x').value`, `$('#x').append(html)` → `insertAdjacentHTML('beforeend', html)`, `$('#x').mark()` → `new Mark(getElementById('x')).mark()`. Added a `.catch` on the fetch (the jQuery version silently failed) and a `typeof Mark !== "undefined"` guard. Dropped a leftover dev `console.log({"matches":result})`.
   - **Search modal open/close** in `script.js`: `$('#searchOpen').on('click', …)` → `document.getElementById('searchOpen').addEventListener('click', …)`. 3 lines.
3. **jQuery itself deleted** (`static/plugins/jQuery/` + `config.toml` entry). Bootstrap 5+ has been vanilla since 2021, so the bundle keeps working untouched.

Files touched: `config.toml`, `layouts/_default/baseof.html`, `layouts/partials/preloader.html` (deleted), `layouts/index.html`, `assets/js/script.js`, `assets/scss/_common.scss`, `assets/scss/templates/_main.scss`, `static/plugins/jQuery/` (deleted), `static/plugins/slick/` (deleted), `static/plugins/venobox/` (deleted), `static/plugins/splide/` (added), `static/plugins/search/{mark.js,search.js}`, `docs/THEME.md`, `AGENTS.md`.

**Addendum — same-day post-implementation audit (4 fixes):**

The first reader test surfaced four issues that the initial audit missed. All fixed in the same session.

1. **Venobox was NOT zero-use — `/about/` gallery lost the lightbox.** The original audit grepped for `.venobox` in `content/` and `layouts/partials/` but missed `layouts/about/list.html:29`, which uses `class="venobox" data-gall="gallery"` to give the 14-image photo gallery a modal lightbox with prev/next navigation. Fix: migrated to **GLightbox v3.3.1** (vanilla, no jQuery dep, 55 KB JS + 13 KB CSS). Markup updated to `class="glightbox" data-gallery="about-gallery"`. Init added in `assets/js/script.js` (`GLightbox({ selector: '.glightbox' })`, guarded by `if (!document.querySelector('.glightbox')) return;` so it's a no-op on every other page). Lesson for future audits: grep all of `layouts/`, not just `partials/`, when checking for dead-code claims.

2. **Splide vertical broke with 2+ slides.** Adding a second featured post showed both slides rendering stacked vertically without clipping (track lost its `overflow: hidden`). Cause: `autoHeight: true` "has no effect on vertical sliders" per Splide v4 docs, but passing it on a `ttb` slider actively interferes with the `height` option. Fix: removed `autoHeight` from `assets/js/script.js`, kept `height: '450px'` as the single source of truth for vertical mode. The mobile breakpoint at <600px still uses `height: 'auto'` (horizontal, where auto behaves normally). Updated the gotcha block below.

3. **Doble X en search input.** `<input type="search">` triggers the WebKit/Blink native clear button — combined with our explicit `#searchClose` button it rendered two X's whenever the input had content. Fix: added a `::-webkit-search-cancel-button` + `::-webkit-search-decoration` `display: none` rule in `assets/scss/templates/_navigation.scss`. Kept `type="search"` for its semantic + mobile-keyboard + a11y benefits.

4. **Search modal didn't focus the input on open.** Clicking the lupa opened the modal but left the cursor wherever it was; the user had to click *again* inside the input to start typing. Fix: `setTimeout(() => searchInput.focus(), 0)` after `.add('open')` (the 0ms defer is needed because `visibility: hidden` blocks `.focus()` synchronously in some browsers, and the wrapper's transition needs one tick to start). Bonus: added a global `Escape` listener that closes the modal when open — standard modal UX.

Files touched in the addendum: `config.toml`, `layouts/about/list.html`, `assets/js/script.js`, `assets/scss/templates/_navigation.scss`, `static/plugins/glightbox/` (added), `static/plugins/search/search.js` (comment only), `docs/THEME.md`, `AGENTS.md`.

**Gotcha for future-me**: Splide vertical mode (`direction: 'ttb'`) needs an explicit `height` and **do NOT pass `autoHeight: true`** even though the docs say it's a no-op for vertical — it actually breaks the track's clipping. Use a fixed `height: '450px'` and `object-fit: cover` on `.card-img` if the cards differ much in height. Pagination has **two distinct designs by viewport**: vertical thin-line on the right column for ≥600px (ported from Slick), circular dots at the bottom for <600px (the horizontal line design from Slick collapsed visually with only 2-3 slides). Both are theme-reactive via `$primary-color` / `$border-color`. If you ever swap the theme, make sure to update the `&::before { content: none; }` reset that suppresses the global `.content ul li::before` themify bullet.

**Second addendum — same-day visual polish + focus root-cause fix (4 items):**

After the first addendum landed, a manual walkthrough surfaced four more issues that required a second round.

1. **Hover shadow on the featured card was being chopped in half.** The global `.card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.18); }` was inherited by `.featured-post.card`, but the parent `.splide__track` has `overflow: hidden` (necessary to clip slides) → the bottom half of the shadow disappeared. Fix: changed the selector in `assets/scss/_common.scss` from `.card` to `.card:not(.featured-post)`. The featured card is the home's main content (not a thumbnail), so the lift-on-hover affordance was unnecessary anyway.

2. **Search modal focus was *actually* broken — `visibility: hidden` was the culprit, not the timing.** The first addendum thought `setTimeout(() => input.focus(), 0)` would suffice, but browsers (Firefox especially) reject `.focus()` on `visibility: hidden` elements even when the style change is in-flight. Fix in two parts: (a) in `assets/scss/templates/_navigation.scss`, replaced `visibility: hidden` with `pointer-events: none` (input is still inert to clicks while modal closed, but programmatic focus works); (b) in `assets/js/script.js`, switched from `setTimeout(0)` to `requestAnimationFrame` — semantically correct for "focus after the next paint" and immune to future timing regressions.

3. **Cover image flush against the card's left edge.** The slide markup uses `<div class="row g-0">` (no gutters) for a tight image+text grid, but that put the cover (Flask logo, etc.) touching the card's left border. Fix: added `padding-left: 30px` to `.featured-post .col-md-5` in `_main.scss`, reset to `0` under `@include tablet` (where the col stacks full-width on top and centering matters more).

4. **Mobile pagination was visually broken — couldn't tell which slide was active.** The Slick-era design used horizontal lines (`width: 100%` on each `<li>` and `.splide__pagination__page`), which works for sliders with 5+ slides but collapses to overlapping invisible lines with only 2 slides. Replaced the entire `@media (max-width: 599px)` block in `_main.scss` with circular dots: 10px round, centered with `gap: 10px`, brand-coloured + `transform: scale(1.2)` on `.is-active`. Universally-recognised pattern, immediately clear which slide you're on.

Files touched in this second addendum: `assets/scss/_common.scss`, `assets/scss/templates/_navigation.scss`, `assets/scss/templates/_main.scss`, `assets/js/script.js`, `docs/THEME.md`.

**Lesson**: when a CSS property is documented as "blocks focus" (visibility, display: none), don't try to work around it with timing — change the property. Time-based fixes are fragile and ship as "intermittent" bugs.

### 2026-05-28 — Image pipeline + cookie banner modernization

Two unrelated polish passes bundled into one commit, plus a same-day audit+fix round (see addendum at the end of this entry):

1. **Image processing pipeline**. New render hook (`layouts/_default/_markup/render-image.html`) + shared `partials/picture.html` + cover-image updates in `single.html`/`post.html`/`index.html`. Raster body and cover images now emit `<picture>` with WebP + JPG `srcset` (widths 480/800/1200, capped at original), `loading="lazy"` (eager + `fetchpriority="high"` on the post hero), and intrinsic `width`/`height` (anti-CLS). SVG, animated GIF, and external URLs pass through with `loading="lazy"` only — see `AGENTS.md` §Images for the full contract. No theme-token changes; mentioned here because the cookie-box animation refactor lives in the same SCSS file.

2. **Cookie box animation**. The previous `.cookie-box-hide { display: none }` killed the `transition: all .75s …` on the parent — nothing animated. Replaced with `opacity` + `transform: translateY(10px)` + `visibility: hidden` and a `visibility` transition delayed on hide (so the fade-out actually plays before the element becomes inert). Also dropped the `js-cookie` CDN dep + jQuery IIFE in `footer.html`; the handler is now vanilla JS using `localStorage` (`cookie-consent-v1` key — bump the version to re-prompt). Banner is still informational only: GA + AdSense load before consent via `head.html`. See `AGENTS.md` §"Things to leave alone" for why we deliberately stop short of real gating.

**Addendum (same-day post-audit fixes):**

- **Quality bump**: WebP q82 / JPG q85 produced visible blur on the hero at xl/xxl — the browser was upscaling 800w→880w because the `sizes` attribute lied about the slot. Fixed by (a) raising WebP **q82 → q92** and JPG **q85 → q92**, (b) adding a **1600w** variant to the default pool (covers xxl + DPR 2), (c) computing `sizes` per breakpoint matching the real Bootstrap container × col grid. Hero files go from ~45 KB to ~150 KB — still ~30× smaller than the raw source. See `AGENTS.md` §Images → "Pipeline settings" for the exact numbers per caller, and don't tune them without reading the rationale.
- **Cookie banner bugfix**: the previous version of this entry shipped with a banner that **never appeared in production** — `script.js` was loaded BEFORE the banner markup in `footer.html`, so the IIFE's `getElementById` returned `null`, the handler never connected, and `.cookie-box-hide` stayed applied forever. Now wrapped in a `DOMContentLoaded` check (same pattern as the theme toggle). Smoke test: `localStorage.removeItem('cookie-consent-v1')` + reload → banner appears.
- **Defensive guards**: cover lookups in `single.html`/`post.html`/`index.html` now check `MediaType.Type` before processing — a future `cover.svg` would have crashed `.Process` (vectors can't be resized). Now falls back to a raw `<img>` for SVG covers.
- **Misc**: render-image hook now passes the markdown `title="..."` through to the partial for JPG/PNG (was only working for SVG/GIF/external); `picture.html` dedupes the largest-width process call by capturing `$lastRaster` in the loop; `<span>` wrapper dropped from the cookie box markup; `.Params.Image` check is consistent across all templates.

### 2026-05-28 — Dark mode rollout (single-day implementation)

Migrated the site from a single static SCSS palette to a dual-theme system. Palette **D · Warm-dark** chosen over GitHub (A — too stark/cold), Slate (B — too blue), and Material (C — teal pop too weak, body↔surface step too small), based on the side-by-side comparison in `mockups/dark-mode-preview.html`. Subsequent rounds in the same day refined dark-mode readability after first reader feedback, unified the ghost pattern across both themes, extracted the brand ramp for one-block-per-theme brand swaps, and bundled tech debt cleanup into the closing commit.

Milestones, in order:

1. **Initial dual-theme registry** (`assets/scss/_root.scss`). Light kept the existing palette (`#666`, `#222`, `#ACB9C4`, `#f4fcff`); dark introduced D · Warm-dark (`#16181c` body, `#2DD4CC` primary, `#e6e4e0` cream text). D balances "darker than Material so the teal pops" with "warmer than GitHub so it doesn't feel like a clone".
2. **Dark readability bump** after first reader feedback (body text felt dim, hairlines invisible): `--eb-text-muted` `#8e8f93`→`#b3b6bd` (WCAG ~5.5→8.6 : 1, AAA), `--eb-border` `#2b2e35`→`#3a3e48`, `--eb-surface-emphasis` `#262931`→`#2a2d36`. No light-mode changes.
3. **Tag pill tokens** (`--eb-tag-bg/fg/border`). Sidebar markup migrated from `bg-primary text-white` to a new `.eb-tag` class. First pass was dark-only (light kept solid teal + white).
4. **Ghost pattern unified across both themes** for `.eb-tag` AND `.social-links li a`. Light moved to ghost (`--eb-tag-bg rgba(0,170,161, 0.10)`, `--eb-tag-fg #007F7A`, `--eb-tag-border rgba(0,170,161, 0.30)`); social icons migrated from hardcoded `$primary-color`/`$white` to the same `--eb-tag-*` tokens; `border-radius: 0` on `.eb-tag` to respect the theme's all-square aesthetic. `#007F7A` (vs `--bs-primary` `#00AAA1`) is required to pass WCAG AA Normal (~5.2 : 1) on the ghost bg.
5. **Brand ramp refactor**: introduced `--bs-primary-darker` and `--bs-primary-lighter` per theme. `--eb-selection-bg` and `--eb-tag-fg` migrated from hardcoded hex to `var(--bs-primary-*)`. Net effect: brand swap = 8 hex edits in `_root.scss` (4 per theme), all in contiguous `Brand ramp` sections — zero hex hidden in downstream tokens. Documented full swap procedure with English-green example in §"How to swap the brand colour". Industry-standard pattern (Tailwind, Material Design, Radix UI).
6. **Closing cleanup**: theme toggle moved OUT of `.navbar-collapse` (always visible on mobile — GitHub/Linear/Vercel pattern); Disqus internal template + `disqusShortname` removed (Giscus is the live comments system); 267 lines of share-buttons CSS extracted from inline `<style>` to `assets/scss/_share-buttons.scss`; `.btn-container` moved from `_kofi.scss` to `_common.scss`; `_kofi.scss` deleted; legitimate exceptions (`.btn-primary $white`, share-buttons brand colours) documented in §"Color exceptions".
7. **Post-rollout polish** (this commit): `border-radius: 0` enforced on `pre.chroma` and inline `code` (all-square aesthetic was being broken by stale `4px`/`3px` values); `px-0` removed from blog grid `card-body` (text was hugging the edge once the `:hover` shadow made cards visible); stale Disqus mention removed from `AGENTS.md`; `ORDER MATTERS` comment added to the mermaid cache block to document the cache-before-CDN invariant.

---

## References

- [Bootstrap 5.3 Color modes documentation](https://getbootstrap.com/docs/5.3/customize/color-modes/) — the canonical guide we are following.
- [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) — for verifying AA/AAA on any new tokens.
