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

## Light theme (default) · Conservatory

British Racing Green (`#004225`) brand + Nugget ocre accent (bronze `#856814` in light text, vibrant `#C59922` in dark text + decorative role in light) on a warm cream-tinted bg. Verde profundo as headings is the distinctive feature — the site reads as "engineering with character", not generic dev blog. See §History → "2026-05-28 — Conservatory rebrand" for full rationale.

### Brand ramp · verde

Used for **text/link/border-primary**. Pairs with `--eb-brand-solid` for solid backgrounds. See §"Brand solid vs brand text" for why these are split.

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--bs-primary` | `#004225` | <span style="display:inline-block;width:60px;height:14px;background:#004225;border:1px solid #d0d7de;"></span> | Body links, `.text-primary`, `.border-primary`, focus rings |
| `--bs-primary-rgb` | `0, 66, 37` |  | RGB tuple for `rgba()` derivations |
| `--bs-primary-darker` | `#002E19` | <span style="display:inline-block;width:60px;height:14px;background:#002E19;border:1px solid #d0d7de;"></span> | Deep green — headings (`text-strong`), ghost-tag fg (AAA on tinted bg) |
| `--bs-primary-lighter` | `#006939` | <span style="display:inline-block;width:60px;height:14px;background:#006939;border:1px solid #d0d7de;"></span> | `::selection` background (vivid pop on cream) |

### Accent ramp · ocre

Co-protagonist of the brand, not subordinate to it. Used for **metadata** (categories, dates, decorative lines).

**The ramp is asymmetric between themes** (same pattern as the verde brand ramp). In light, `--bs-accent` is a bronze (`#856814`, 4.57 : 1 over cream — AA Normal pass with margin). The vibrant nugget `#C59922` is reserved for `--bs-accent-lighter`, where it plays a **decorative role** (chip bg fills, borders, ::selection alt) — not text. In dark the ramp flips: `--bs-accent` IS the vibrant `#C59922` because the dark green-tinted bg gives it 6.80 : 1 contrast. See §"Why accent uses different hex per theme" for the WCAG rationale.

**Editorial label treatment**: `a.text-accent` (categories on cards, post headers, sidebar widget) gets `text-transform: uppercase` + `font-weight: 600` + `letter-spacing: 0.08em` + `font-size: 0.875rem` in `_common.scss`. The combination of editorial typography + bronze hex sells the brand identity *without* needing a vibrant hex that would fail WCAG on cream. Result: categories read as **"ENGINEERING"** magazine-style labels rather than plain links, both in light and dark themes (same treatment applied identically across modes).

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--bs-accent` | `#856814` | <span style="display:inline-block;width:60px;height:14px;background:#856814;border:1px solid #d0d7de;"></span> | **Text role**: `a.text-accent` (body categories, dates, decorative text) — AA Normal pass on cream (4.57 : 1) |
| `--bs-accent-rgb` | `133, 104, 20` |  | RGB tuple for `rgba()` derivations |
| `--bs-accent-darker` | `#5C440D` | <span style="display:inline-block;width:60px;height:14px;background:#5C440D;border:1px solid #d0d7de;"></span> | Hover/active state for accent links — AAA (7.97 : 1) on cream |
| `--bs-accent-lighter` | `#C59922` | <span style="display:inline-block;width:60px;height:14px;background:#C59922;border:1px solid #d0d7de;"></span> | **Decorative role**: vibrant nugget for bg fills, borders, chips (NOT for body text on cream — only 2.36 : 1) |

### Brand solid · constant green

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--eb-brand-solid` | `#004225` | <span style="display:inline-block;width:60px;height:14px;background:#004225;border:1px solid #d0d7de;"></span> | Solid backgrounds that always carry white text (`.btn-primary` bg, dropdown active). **Constant in both themes** — see §"Brand solid vs brand text". |

### Surfaces, text, borders

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--eb-body-bg` | `#F2EFE3` | <span style="display:inline-block;width:60px;height:14px;background:#F2EFE3;border:1px solid #d0d7de;"></span> | Warm cream — "papered" feel, not pure white |
| `--eb-surface` | `#E8E4D2` | <span style="display:inline-block;width:60px;height:14px;background:#E8E4D2;border:1px solid #d0d7de;"></span> | Cards, code blocks, blockquote, tbody (one step down) |
| `--eb-surface-emphasis` | `#DCD7C0` | <span style="display:inline-block;width:60px;height:14px;background:#DCD7C0;border:1px solid #d0d7de;"></span> | Table thead, hover (one more step for clear hierarchy) |
| `--eb-text-strong` | `#002E19` | <span style="display:inline-block;width:60px;height:14px;background:#002E19;border:1px solid #d0d7de;"></span> | Headings — **VERDE PROFUNDO**, the distinctive feature |
| `--eb-text-muted` | `#3D4A40` | <span style="display:inline-block;width:60px;height:14px;background:#3D4A40;border:1px solid #d0d7de;"></span> | Body copy — warm green-tinted gray |
| `--eb-text-light` | `#8A9088` | <span style="display:inline-block;width:60px;height:14px;background:#8A9088;border:1px solid #d0d7de;"></span> | Tertiary text, disabled |
| `--eb-border` | `#C9CDB5` | <span style="display:inline-block;width:60px;height:14px;background:#C9CDB5;border:1px solid #d0d7de;"></span> | Hairlines, dividers, form fields — cream-green tinted |

### Tag pills (derived)

| Token | Value | Purpose |
|---|---|---|
| `--eb-selection-bg` | `var(--bs-primary-lighter)` → `#006939` | `::selection` background |
| `--eb-selection-fg` | `#ffffff` | `::selection` foreground |
| `--eb-tag-bg` | `rgba(0, 66, 37, 0.10)` | Tag pill + social icon background (10% verde tint) |
| `--eb-tag-fg` | `var(--bs-primary-darker)` → `#002E19` | Tag pill + social icon text (AAA on ghost bg) |
| `--eb-tag-border` | `rgba(0, 66, 37, 0.30)` | Tag pill + social icon border |

WCAG contrast (text-strong `#002E19` on body-bg `#F2EFE3`): **~15 : 1** — AAA.

---

## Dark theme · Conservatory

Activated by `data-bs-theme="dark"` on `<html>`. Green-tinted dark bg (`#0A1814`) keeps the brand identity in dark mode without going pure black. `--bs-primary` inverts to a **lighter** green for text legibility, but `--eb-brand-solid` stays `#004225` for solid backgrounds. See §"Brand solid vs brand text" for the split.

### Brand ramp · verde (text role inverted)

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--bs-primary` | `#6FB089` | <span style="display:inline-block;width:60px;height:14px;background:#6FB089;border:1px solid #30363d;"></span> | Lighter green so links/text stay legible on dark bg |
| `--bs-primary-rgb` | `111, 176, 137` |  | |
| `--bs-primary-darker` | `#4F9269` | <span style="display:inline-block;width:60px;height:14px;background:#4F9269;border:1px solid #30363d;"></span> | `::selection` background (saturated mid-green that pops against dark body) |
| `--bs-primary-lighter` | `#8FC8A5` | <span style="display:inline-block;width:60px;height:14px;background:#8FC8A5;border:1px solid #30363d;"></span> | Ghost-tag text (AAA contrast on translucent dark bg) |

### Accent ramp · ocre

**Asymmetric with light**: here `--bs-accent` IS the vibrant `#C59922` because the dark green-tinted bg gives it 6.80 : 1 contrast (AA Normal pass). In light we had to darken it to `#856814` because cream bg only gives the vibrant nugget 2.36 : 1 (fail). The **editorial treatment** (uppercase + 600 + letter-spacing) applies identically to both themes — categories render as magazine-style labels in both modes. See §"Why accent uses different hex per theme" for the why.

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--bs-accent` | `#C59922` | <span style="display:inline-block;width:60px;height:14px;background:#C59922;border:1px solid #30363d;"></span> | **Text role** on dark bg — `.text-accent` (categories, dates, decorative accents). 6.80 : 1 (AA Normal pass) |
| `--bs-accent-rgb` | `197, 153, 34` |  | |
| `--bs-accent-darker` | `#A8801C` | <span style="display:inline-block;width:60px;height:14px;background:#A8801C;border:1px solid #30363d;"></span> | Hover state — slightly desaturated |
| `--bs-accent-lighter` | `#E5C572` | <span style="display:inline-block;width:60px;height:14px;background:#E5C572;border:1px solid #30363d;"></span> | Text on solid green bg (e.g. accent text inside footer/CTA panels) |

### Brand solid · CONSTANT (same as light)

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--eb-brand-solid` | `#004225` | <span style="display:inline-block;width:60px;height:14px;background:#004225;border:1px solid #30363d;"></span> | Same `#004225` as light — the identity green never changes. Solid bgs always carry white text. |

### Surfaces, text, borders

| Token | Value | Sample | Purpose |
|---|---|---|---|
| `--eb-body-bg` | `#0A1814` | <span style="display:inline-block;width:60px;height:14px;background:#0A1814;border:1px solid #30363d;"></span> | Green-tinted dark, not pure black |
| `--eb-surface` | `#0F2419` | <span style="display:inline-block;width:60px;height:14px;background:#0F2419;border:1px solid #30363d;"></span> | Cards, code blocks (clear step up from body) |
| `--eb-surface-emphasis` | `#163024` | <span style="display:inline-block;width:60px;height:14px;background:#163024;border:1px solid #30363d;"></span> | Thead, hover (one more step for hierarchy) |
| `--eb-text-strong` | `#E8EDE3` | <span style="display:inline-block;width:60px;height:14px;background:#E8EDE3;border:1px solid #30363d;"></span> | Cream-green tinted white (subtle warmth) |
| `--eb-text-muted` | `#B5C0B5` | <span style="display:inline-block;width:60px;height:14px;background:#B5C0B5;border:1px solid #30363d;"></span> | Body copy, WCAG ~8:1 (AAA) |
| `--eb-text-light` | `#6E786E` | <span style="display:inline-block;width:60px;height:14px;background:#6E786E;border:1px solid #30363d;"></span> | Tertiary, disabled |
| `--eb-border` | `#25382D` | <span style="display:inline-block;width:60px;height:14px;background:#25382D;border:1px solid #30363d;"></span> | Green-tinted dark border (visible but quiet) |

### Tag pills (derived)

| Token | Value | Purpose |
|---|---|---|
| `--eb-selection-bg` | `var(--bs-primary-darker)` → `#4F9269` | `::selection` background |
| `--eb-selection-fg` | `#0A1814` | `::selection` foreground (matches `--eb-body-bg`) |
| `--eb-tag-bg` | `rgba(111, 176, 137, 0.15)` | Tag pill background (translucent green) |
| `--eb-tag-fg` | `var(--bs-primary-lighter)` → `#8FC8A5` | Tag pill text (AAA on ghost bg) |
| `--eb-tag-border` | `rgba(111, 176, 137, 0.35)` | Tag pill border |

WCAG contrast (text-strong `#E8EDE3` on body-bg `#0A1814`): **~14 : 1** — AAA.

---

## Brand solid vs brand text

The Conservatory system splits the brand verde into **two tokens with different roles**, instead of squeezing both into a single `--bs-primary` like most blog themes do. This is a deliberate decision; here's why.

### The problem with a single brand token

Bootstrap's default model has one `--bs-primary` that's used for **everything**: button backgrounds, button text on hover, link color, focus rings, borders. It works when the brand color has enough contrast to function in both roles (e.g. the previous teal `#00AAA1` had ~5:1 contrast both as text on white AND as bg with white text on top).

But `#004225` (British Racing Green) is **too dark for the text role on dark mode**: a `#004225` link on a `#0A1814` background is barely visible (~1.5:1, well below AA). So if we kept just one `--bs-primary`, we'd have to either:

1. Lighten the green significantly in dark mode → loses the "this is *my* verde" identity.
2. Keep `#004225` everywhere → links in dark mode become unreadable.

### The split

Two tokens, two roles:

| Token | Role | Light value | Dark value | Why |
|---|---|---|---|---|
| `--bs-primary` | **TEXT / LINK / BORDER** | `#004225` | `#6FB089` (lighter) | Varies by theme so contrast stays AA on both backgrounds. |
| `--eb-brand-solid` | **SOLID BACKGROUND** | `#004225` | `#004225` (same) | Constant in both themes — keeps the brand identity for buttons, footer panels, etc. White text on top always passes AAA. |

### What this means in practice

- `.btn-primary` background: always `#004225` (white text on top). Same in light + dark.
- `.dropdown-menu` active item bg: always `#004225` (white text on top).
- A link on a blog post body: `#004225` in light, `#6FB089` in dark. Both ≥4.5:1 on the respective body bg.
- `.text-primary` utility: follows `--bs-primary` (varies by theme).
- `.border-primary` utility: follows `--bs-primary` (varies by theme).

### Industry precedent

This split is the **standard pattern** in mature design systems:

- **Material Design 3** has `primary` (text role) and `primary-container` (bg role) — same idea.
- **Tailwind UI** convention is `primary-500` for text + `primary-600` for solid bgs.
- **Radix UI** colors split `9` (solid) from `11` (text contrast).
- **GitHub Primer** has `--fgColor-accent` (text) and `--bgColor-accent-emphasis` (solid).

If you're adding a new component, pick by role: does it carry text on top? `$brand-solid`. Is it the text itself? `$primary-color`.

### Splide active dot exception

The splide pagination active dot (`.splide__pagination__page.is-active`) uses `$primary-color`, NOT `$brand-solid`. Reason: in dark mode, `#004225` on `#0A1814` is nearly invisible — and the dot is a visibility indicator, not a "carries text" surface. Pure `--bs-primary` (which is `#6FB089` lighter green in dark) gives a clearly visible active state. See `assets/scss/templates/_main.scss` for the inline comment.

### `.btn-primary` border uses `$primary-color`, not `$brand-solid`

`.btn-primary` and the hover state of `.btn-outline-primary` use `border-color: $primary-color` (theme-aware) instead of `$brand-solid` (constant). In light mode this resolves to `#004225` — same as the bg — so the border is **invisible by design** (no visual change vs the previous "both = brand-solid" version). In dark mode it resolves to `#6FB089` (lighter green), adding a subtle outline so the button doesn't disappear into the dark green-tinted body. The bg + white text + AAA contrast contract stays untouched; the border is purely a definition cue. See `assets/scss/_buttons.scss` for the inline rationale.

---

## Why accent uses different hex per theme

Light `--bs-accent` is `#856814` (bronze). Dark `--bs-accent` is `#C59922` (vibrant nugget). Same token name, different hex. This isn't sloppiness — it's the same pattern already in use by `--bs-primary` (light `#004225`, dark `#6FB089`), applied to the accent because the contrast budget demands it.

The vibrant nugget `#C59922` over cream `#F2EFE3` gives **2.36 : 1** — not just below AA Normal (≥ 4.5 : 1), but also below AA Large (≥ 3 : 1). No amount of `font-weight` or `text-transform` rescues this number; categories on a cream bg using `#C59922` simply fail WCAG. So the light ramp uses a bronze (`#856814`, 4.57 : 1) and compensates the lost "vibrance" with **editorial typography** — uppercase + 600 weight + 0.08em tracking. The result reads as a magazine label, not a faded link.

### The contrast problem

The original Conservatory rollout shipped with `--bs-accent: #C59922` in **both** themes, on the (incorrect) assumption that the vibrant nugget would pass AA Large because categories "qualify as Large". Two things were wrong:

1. **Categories aren't Large.** They render as `<a>` plain inside `.card-body` and post headers, inheriting the body `font-size: 15px` regular (not bold, not uppercase). WCAG "Large" requires ≥ 18.66px **bold** or ≥ 24px regular. 15px regular = AA Normal territory.
2. **`#C59922` over cream `#F2EFE3` is 2.36 : 1.** That fails both AA Normal (≥ 4.5 : 1) AND AA Large (≥ 3 : 1). The original WCAG table in §History claimed `~3.4:1` and "AA Large pass" — a miscalculation in both the contrast number and the qualification rule.

### The fix

Light ramp inverted around the same hexes used previously, with the addition of a darker bronze:

| Token | Light (new) | Light (old, failed) | Dark | Reasoning |
|---|---|---|---|---|
| `--bs-accent` | `#856814` (4.57 : 1) | `#C59922` (2.36 : 1) ❌ | `#C59922` (6.80 : 1) | Text role: bronze in light passes AA Normal on cream; vibrant in dark passes AA Normal on dark bg. |
| `--bs-accent-darker` | `#5C440D` (7.97 : 1) | `#A8801C` | `#A8801C` | Hover/active state, AAA on cream. |
| `--bs-accent-lighter` | `#C59922` | `#E0B958` | `#E5C572` | Decorative role: vibrant nugget for bg fills, borders, ::selection alt — NOT for body text on cream. |

The vibrant nugget `#C59922` is **still in the palette** — it just moved roles. In light it's `--bs-accent-lighter` (decoration), in dark it's `--bs-accent` (text). The brand identity is preserved; the WCAG bug is gone.

### Editorial typography compensates the lost vibrance

The bronze `#856814` reads quieter than the nugget would. To preserve the visual energy of the brand metadata, `a.text-accent` adds editorial label typography in `_common.scss`:

```scss
a.text-accent {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.08em;
  font-size: 0.875rem;
  &:hover { color: var(--bs-accent-darker) !important; }  /* #5C440D AAA */
}
```

Why this works: a plain `Engineering` link in a body-size serif fades into surrounding text. `ENGINEERING` in 600-weight uppercase with 0.08em tracking is **instantly recognisable as a label** — the brain reads it as "category badge" before parsing the letters. Same pattern used by Vercel, Linear, Stripe, NYT, FT blogs. The bronze hex carries enough warmth to feel ocre-family; the typography carries the brand emphasis.

The treatment is scoped to `a.text-accent` (link only). `.text-accent` on a `<span>` or `<p>` stays plain bronze text — useful for dates, decorative one-liners, or anywhere the editorial label feel would be wrong.

### Industry precedent (again)

Same design-system convention that already justified `--bs-primary` asymmetry. Material Design 3, Tailwind UI, Radix, GitHub Primer — all vary the resolved hex per theme to keep "same perceived weight" against opposite substrates. A token is a **role**, not a hex constant.

### What to do if you swap the accent colour

Follow §"How to swap the brand colour" → Step 4. Verify each ramp's text-role hex (the `--bs-accent` itself) against each theme's `--eb-body-bg` with WebAIM — the same hex won't pass both. Pick a darker variant for light and let the vibrant one carry the dark role; that's the recipe. If the darker variant feels too quiet visually, lean on the editorial typography in `a.text-accent` (uppercase + weight + tracking) instead of bumping the hex luminance — typography compensates the visual energy without breaking the contrast contract.

---

## Color exceptions

The rule is: *if you find yourself writing a hex outside `_root.scss`, you're doing it wrong*. Four legitimate exceptions exist; all are documented here so nobody "fixes" them by accident.

### 1. `.btn-primary` keeps `$white` text

`assets/scss/_buttons.scss` declares `.btn-primary { color: $white; }`. Combined with `background: $brand-solid` (constant `#004225`), this is **white text on solid British Racing Green** in both themes — AAA contrast (~12:1).

**Why this is correct for `.btn-primary`**: it's a **solid call-to-action button** (Ko-fi, "Read more", "Subscribe"). Solid color + white text is the industry-standard pattern for primary CTAs — Material Design, GitHub primary buttons, Stripe, Tailwind UI all do this. The pattern we use for tags (ghost: translucent bg + brand text) communicates "metadata"; the solid pattern here communicates "action".

**Why the border uses `$primary-color` and not `$brand-solid`**: in light both resolve to `#004225` so the border is invisible (no behaviour change vs the previous version). In dark, `$primary-color` resolves to `#6FB089` (lighter green) so the button still has a visible outline against the dark green-tinted body. Documented in §"Brand solid vs brand text" → `.btn-primary` border exception above.

If you ever convert `.btn-primary` to ghost (translucent bg + brand text), update this section.

### 2. `sharingbuttons.io` keeps `border-radius: 5px` and brand colours

`assets/scss/_share-buttons.scss` (the share buttons under each post) has its own `border-radius: 5px` and hardcoded brand colours (Facebook blue, Twitter celeste, etc.). The rest of the theme uses `border-radius: 0`.

**Why this is correct**: the share buttons are *third-party widget output* from sharingbuttons.io. The 5px radius and brand palettes are their signature — keeping them communicates "this UI is borrowed, not ours". Theming them would actively mislead users about what the buttons do.

### 3. Ko-fi widget hex is hardcoded in `single.html`

`layouts/_default/single.html` initialises the Ko-fi widget with `kofiwidget2.init('Support Me on Ko-fi', '#004225', 'W7W2DRG2T')`. The hex `#004225` matches `--eb-brand-solid` (constant verde across themes), and white text on top passes AAA in both themes.

**Why this can't go in `_root.scss`**: the Ko-fi widget script (`Widget_2.js`) reads the color at init time as a JavaScript string argument. CSS custom properties (`var(--eb-brand-solid)`) can't reach script arguments — the widget isn't a styled DOM element we control; it's an iframe whose styling Ko-fi controls. The hex literal is the only styling hook the widget exposes.

If you ever swap the brand verde, **update this hex too** (and the inline comment in `single.html`). The pair to find is: `kofiwidget2.init( ... '#004225' ... )` — the second argument.

### 4. `mockups/` is gitignored (design exploration artifacts)

`mockups/` contains the palette-explorer HTML files used during the Conservatory rebrand exploration (`mockups/index.html`, `mockups/dark-mode-preview.html`). These are **not source** (Hugo doesn't read them) and **not build output** (Hugo doesn't write them) — they're throwaway design probes that informed the decision but don't need to live in the deployed site.

**Why gitignored, not deleted**: they're useful as a local sandbox if you ever want to riff on a new palette before committing to changes in `_root.scss`. Keep them on disk for context, but don't commit — the canonical record of the rebrand lives in §History below.

If you ever want to publish a palette explorer as a permanent reference (e.g. as a `/colors/` route), move the relevant file out of `mockups/` into `content/` or `layouts/` and update this section.

---

## How to swap the brand colour

The Conservatory system has **three ramps** to edit: the brand verde (text role, varies by theme), the brand verde **solid** (bg role, constant), and the ocre accent. Total: **13 hex values** in `_root.scss`. Plus 1 hex outside (`single.html` Ko-fi widget — see §Color exceptions). Plus update this doc.

### Step 1 — Replace the LIGHT brand ramp (verde)

In `:root { ... }` of `assets/scss/_root.scss`:

```scss
--bs-primary: #YOURGREEN;          // body links, .text-primary, .border-primary
--bs-primary-rgb: r, g, b;
--bs-primary-darker: #DEEPGREEN;   // ~-25% lightness; headings + ghost-tag fg
--bs-primary-lighter: #VIVIDGREEN; // ~+10% lightness; selection bg
```

### Step 2 — Replace the DARK brand ramp (verde)

In `[data-bs-theme="dark"] { ... }`. In dark, `--bs-primary` is **lighter** (text-role inverted) so links stay legible on dark bg:

```scss
--bs-primary: #LIGHTERGREEN;       // legible on dark body
--bs-primary-rgb: r, g, b;
--bs-primary-darker: #SATGREEN;    // selection bg pop
--bs-primary-lighter: #BRIGHTGREEN;// ghost-tag fg
```

### Step 3 — Replace `--eb-brand-solid` (BOTH themes)

`--eb-brand-solid` is the **constant** green used for solid bgs (button, dropdown active). Same hex in light + dark. Usually equal to `--bs-primary` in light:

```scss
--eb-brand-solid: #YOURGREEN;      // same in :root AND [data-bs-theme="dark"]
```

### Step 4 — Replace the accent ramp (ocre or other) for BOTH themes

`--bs-accent*` is for metadata (categories, dates, decorative lines). **The ramp is asymmetric between themes** — same pattern as the brand verde ramp — because the same hex doesn't carry equal contrast on opposite substrates. Pick the hex that hits the text-role contrast budget on each theme's body bg (verify with §Step 6).

```scss
// :root (light) — hex chosen for body-text contrast on light bg
--bs-accent: #DARKACCENT;          // .text-accent text role — must pass AA Normal (≥4.5:1) on body-bg
--bs-accent-rgb: r, g, b;
--bs-accent-darker: #DEEPACCENT;   // hover/active state (darker still, ideally AAA)
--bs-accent-lighter: #VIBRANTACC;  // decorative bg/borders/chips — vibrant, NOT for text on light bg

// [data-bs-theme="dark"] — ramp flips because dark bg gives vibrant hex enough contrast
--bs-accent: #VIBRANTACC;          // .text-accent text role on dark bg — must pass AA Normal
--bs-accent-rgb: r, g, b;
--bs-accent-darker: #MIDACCENT;    // hover/active state — slightly desaturated
--bs-accent-lighter: #BRIGHTACC;   // text on solid green bg (footer/CTA panels) — bumped for darker substrate
```

> **Note**: the editorial typography in `_common.scss` (`a.text-accent` uppercase + `font-weight: 600` + `letter-spacing: 0.08em` + `font-size: 0.875rem`) is hex-independent. It carries the magazine-label brand mark across any accent palette — no need to touch it when swapping colours. If a future swap wants a *different* metadata feel (e.g. all-lowercase + serif), edit `a.text-accent` in `_common.scss` directly; the colour ramp above stays separate.

### Step 5 — Update `single.html` Ko-fi hex

Change `kofiwidget2.init('Support Me on Ko-fi', '#OLDGREEN', '...')` to the new `--eb-brand-solid` value. The widget can't read CSS vars (see §Color exceptions § 3).

### Step 6 — Verify WCAG

| Pair | Required ratio | Tool |
|---|---|---|
| `--bs-primary-darker` over light ghost bg (~10% tint of `--eb-body-bg`) | ≥ 4.5 : 1 (AA Normal) | [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) |
| `--bs-primary-lighter` over dark ghost bg (~15% tint of `--eb-body-bg` dark) | ≥ 4.5 : 1 (AA Normal) | same |
| `--bs-primary` over body-bg (both themes) | ≥ 4.5 : 1 (AA Normal — links) | same |
| `--bs-accent` over body-bg (light) | ≥ 4.5 : 1 (AA Normal — category text is 15px regular, NOT Large) | same |
| `--bs-accent` over body-bg (dark) | ≥ 4.5 : 1 (AA Normal) | same |
| White over `--eb-brand-solid` | ≥ 4.5 : 1 (AA Normal — btn text) | same |

If any pair fails, adjust the corresponding `*-darker`/`*-lighter` shade — don't touch the core `--bs-primary` / `--bs-accent` / `--eb-brand-solid` if possible (they're the identity of the brand).

### Step 7 — Verify the build

```powershell
hugo --minify --gc   # must exit 0
hugo server          # spot-check both themes visually
```

### Step 8 — Update this doc

Update the swatch tables above (Light theme + Dark theme) with the new hex values, then add a row in [§History](#history) explaining the swap rationale.

### What still uses the brand colour automatically

The following surfaces are auto-themed via the ramps — you don't touch them when swapping:

- Body links + `a:hover`, `.text-primary` (auto from `--bs-primary`)
- `.text-accent` utility (auto from `--bs-accent`)
- Bootstrap buttons `.btn-primary` + `.btn-outline-primary` hover (bg: `--eb-brand-solid`, border: `--bs-primary`)
- Borders/focus rings (`.form-control:focus`, `.btn-outline-primary` resting border) — from `--bs-primary`
- Tag pills + social icons (`.eb-tag`, `.social-links li a`) — from `rgba(var(--bs-primary-rgb), …)`
- `::selection` background — from `--bs-primary-lighter` (light) / `--bs-primary-darker` (dark)
- Pagination active state — from `--bs-accent` (2px underline echoes the editorial category treatment); pagination hover — reveals the reserved 2px underline in `--bs-primary` (verde) + lifts arrows from `--eb-text-light` to `--bs-primary`; numbered items rest on `--bs-primary`
- Splide pagination dot active marker — from `--bs-primary` (intentional; see §Brand solid vs brand text)
- Dropdown active — from `--eb-brand-solid`
- Categories on the home + post pages + **sidebar widget** — from `--bs-accent` via `.text-accent` (asymmetric per theme). **Exception**: the footer "Categories" widget uses `text-body-emphasis` (`--eb-text-strong`) by design — the footer is a navigation block where every link follows the same emphasis pattern (Contact Me, Social Contacts, Quick Links, Categories) for internal visual coherence, not a metadata-display surface. Don't "fix" this in a future audit.
- Code block syntax highlighting accent — from Chroma stylesheets (separate; see §Syntax highlighting)

Net effect: changing 13 numbers re-themes the entire site, plus the Ko-fi hex (14 total).

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

### 2026-05-30 — Center body images + Mermaid diagrams

Content figures shipped flush-left and read as misaligned, worst on small ones — logos and the BFS Mermaid tree in *The Definitive Guide to Graph Problems* hugged the left margin with dead space to their right. Centered both, by default, inside `.content` (`assets/scss/templates/_main.scss`) — the universal blog convention (Medium, Ghost, dev.to), zero authoring friction (`![]()` just works).

Two DOM cases, one visual result:

- **Raster images** render as `<picture><img class="img-fluid">`; the `<img>` is inline (`img-fluid` only caps width), so it hugged the left of its wrapping `<p>`. Fix: `img { display:block; margin-left/right:auto }` + `picture { display:block }` so the block img's auto margins resolve against the full column width (an inline `<picture>` wrapping a block child is otherwise ill-defined across browsers). SVG logos (`![](go-logo.svg)`) render as `<img>` too, so they center via the same rule.
- **Mermaid diagrams** render client-side into `<div class="mermaid">` whose `<svg>` is inline-level. Fix: `.mermaid { text-align:center }` — the standard mermaid-centering approach. (An earlier draft also forced `svg { display:block; margin:auto }` as a fallback; dropped in audit as redundant + coupling to mermaid's output.)

Scope: only `.content` (post + `about`/`contact` bodies). The hero cover (in `<header>`), featured slider, card thumbs, recent-post thumbs and author avatar all sit OUTSIDE `.content` — untouched. Images that already fill the column read identically; this only re-centers narrow images and diagrams. `img-fluid` still caps width at 100%, so nothing overflows. Verified no inline images or linked images (`[![…]]`) exist in `content/`, so forcing `display:block` breaks no existing flow.

### 2026-05-30 — Home a11y quick wins (Lighthouse Accessibility 91 → 97)

A Lighthouse pass (mobile, production build served locally) on the home flagged a set of binary a11y fails. Fixed the genuine, low-risk ones; the score went **91 → 97**.

- **🟡 `landmark-one-main`.** The page had no `<main>`. Wrapped the `{{ block "main" }}` in `layouts/_default/baseof.html` with `<main>`. Every page gets the landmark (it's in the base template).
- **🟡 `heading-order` + no `<h1>` on the home.** The hero was an `<a class="h1">` (presentational), so the home had NO `<h1>` and the first real heading was a footer `<h6>` (after the sidebar `<h4>`) — a skip. Gave the home a single **visually-hidden `<h1>`** at the top of `<main>` (the visible hero is a Splide *loop* slider that clones slides, so a real `<h1>` there would emit duplicates — refined in Fase 2 below). To keep the chain skip-free across the *shared* sidebar/footer, promoted **sidebar widget titles `<h4>` → `<h2>`** and **footer column headings `<h6>` → `<h2>`**, each pinned to its previous size (`.widget-title { font-size: 1.25rem }`, new `.footer-col-title { font-size: 1rem }`) so the visuals are unchanged. Chain is now `h1 → h2 (sidebar) → h2 (footer)` — skip-free, and robust on every page (going up a level is always allowed; the only descents are by 1).
- **🟡 `label-content-name-mismatch`.** The cookie button showed "I Accept" but carried `aria-label="Accept cookies"` (the visible text wasn't contained in the name — WCAG 2.5.3). Removed the aria-label so the visible "I Accept" IS the accessible name (it sits inside `role="region" aria-label="Cookie notice"`).
- **🟡 `link-text` (the real instance).** The sidebar "Know More" link was generic. Added `aria-label="Know More about {{ .Site.Params.Author }}"` (descriptive, and still *contains* the visible text so it doesn't trip Label-in-Name).
- **🟡 `link-in-text-block`.** The copyright-holder link in the colophon sentence relied on colour alone. Gave `.footer-colophon a` a resting underline (WCAG 1.4.1). The footer COLUMN links are standalone list items (not in a text block), so they keep the hover-only underline.

**Not fixed — not real / out of scope:**

- **`color-contrast`** flags the `aria-hidden` `.wordmark` span against `<body>`. The wordmark text is `--eb-text-strong` over the body bg — **~15:1 in light, ~14:1 in dark**, comfortably AAA. It's a false positive: the navbar is `bg-transparent`, so axe can't resolve the effective background and flags it. Fixing it would mean giving the header an opaque background (a design change for an audit artifact) — declined.
- **`link-text`** reported 10 empty-name links, but the report carried no node snippets/selectors AND a regex over the rendered HTML found **0** empty `/blog//tags/` anchors (every post link has text or an aria-label). Flaky/JS-transient capture, not a DOM issue.
- **`third-party-cookies` / `inspector-issues` / Performance 53** are GA + AdSense (load in `<head>` before consent) — a product decision, not a markup fix. CLS is 0.01; the layout work didn't regress perf (mobile hero is full-width regardless of the desktop col change).

⚠️ **Guard**: don't revert the sidebar `<h2>` / footer `<h2>` headings back to `<h4>`/`<h6>` — the pinned font-sizes keep them visually identical, and the levels are what keep `heading-order` skip-free under the page `<h1>`. Don't "fix" the wordmark `color-contrast` by backgrounding the header.

**Fase 2 (audit follow-up).** The hero was first made a real `<h1>`, but the featured slider runs Splide in **loop** mode, which clones slides → multiple/duplicate `<h1>`s in the DOM. Switched to a single **visually-hidden `<h1>`** at the top of `<main>` with the visible hero back to a presentational `<a class="h1">` — one clean h1, heading-order still skip-free, no visual change. Also bumped the featured image `widths` `[600, 1100]` → `[600, 800, 1100]` so mid-size / retina-mobile picks a closer variant (`AGENTS.md` table updated). Deferred from the audit: focus-ring double-line on outline buttons (standard/acceptable) and the pre-existing about/contact heading gaps (separate pass, other pages).

**Files touched**

- `layouts/_default/baseof.html` — `<main>` landmark
- `layouts/index.html` — visually-hidden `<h1>` at top of `<main>`; hero stays a presentational `<a class="h1">`; featured `widths` `[600, 800, 1100]`
- `layouts/partials/sidebar.html` — widget titles `<h4>` → `<h2>`; "Know More" `aria-label`
- `layouts/partials/footer.html` — column headings `<h6>` → `<h2>` (`.footer-col-title`); cookie button mismatched `aria-label` removed
- `assets/scss/templates/_main.scss` — `.widget-title` + `.footer-col-title` font-size pins; `.footer-colophon a` resting underline
- `docs/THEME.md` — this entry

### 2026-05-30 — Home polish: hero display weight, site-wide focus rings, summary ellipsis

`/impeccable polish` follow-up to the "Home layout" pass below. Three fixes, all alignment-to-system (no new tokens or patterns invented):

- **🔴 The hero was rendering at the wrong weight.** The home hero title (`layouts/index.html`) carried Bootstrap's `fw-bold` (`font-weight: 700 !important`), which silently overrode the `.h1` Display-800 weight from `_typography.scss`. So the single biggest type on the site — the one element the Display-800 rule reserves for weight 800 (`DESIGN.md` §3) — was shipping at 700. Removed `fw-bold`; the documented 800 now applies. Colour was already right (`.text-body-emphasis` → `--bs-emphasis-color` → `--eb-text-strong` = verde profundo) so it stays. Added a guard comment so `fw-bold` doesn't creep back.
- **🟡 Keyboard focus was invisible on content links + buttons (WCAG 2.4.7).** `_common.scss` (`a:focus { outline: 0 }`) and `_buttons.scss` (`.btn:focus { outline: 0 }`) strip the default outline, but only the chrome re-added a `:focus-visible` ring (nav links, theme toggle, search, pagination). Content links (hero title, categories, post titles, footer links) and every `.btn` ("Read more", Ko-fi support) had NO visible keyboard focus — which contradicted both PRODUCT.md's "focus rings are visible" claim *and* `DESIGN.md` §Buttons ("Focus ring is the standard browser outline scoped via `--bs-primary`"). Added one site-wide `a:focus-visible, .btn:focus-visible` fallback in `_common.scss` (imported after `_buttons`, so it wins the cascade) reusing the exact documented 2px `--bs-primary` + 2px-offset ring already used by the chrome. Now every focusable surface honours it; mouse clicks still show no ring (`:focus-visible`, not `:focus`). This realises the spec the docs already described — it's alignment, not a new decision.
- **🔵 Hero summary ellipsis.** `<p class="card-text">{{.Summary}}...</p>` appended a literal three-dot `...` unconditionally — wrong when a post defines a complete manual `summary`, and a different glyph from the feed's typographic `…` (Hugo's `truncate` in `partials/post.html`). Now `{{ .Summary }}{{ if .Truncated }}…{{ end }}`: a real `…`, and only when Hugo actually truncated.

⚠️ **Guard for future audits**: don't re-add `fw-bold` (or any `fw-*`) to the hero title — `.h1` already carries the reserved 800 weight. Don't remove the `:focus-visible` block thinking the chrome covers focus; it only covers nav / pagination, not content links or `.btn`.

**Files touched**

- `layouts/index.html` — hero title dropped `fw-bold` (+ guard comment); hero summary uses conditional `…` via `.Truncated`
- `assets/scss/_common.scss` — site-wide `a:focus-visible, .btn:focus-visible` ring (WCAG 2.4.7; realises `DESIGN.md` §Buttons)
- `docs/THEME.md` — this entry

### 2026-05-30 — Home layout: full-width hero spine + two-zone rhythm

`/impeccable layout` on the home page (`layouts/index.html`). Two structural fixes, no colour / component / chrome change:

- **Consistent left spine.** The featured hero was inset (`col-10`, centered) while the recent strip and the paginated feed span the full container — so the page had no shared left edge: the hero floated ~8% inward, then the content jumped to the container edge. `col-10` was an inherited Liva default with no documented rationale (unlike, say, the wordmark squares). Widened the hero to `col-12` (dropped `justify-content-center`) so all three home zones share one left spine. The hero's `.col-md-5` cover also dropped its `padding-left: 30px` — that inset only made sense inside col-10; at full width the cover has to sit flush at the container edge to align with the rest. Bigger, more substantial hero as a bonus.
- **Two-zone rhythm (hierarchy from space).** The recent-posts `<section>` was bare — no padding, *borrowing* 80px from the hero's `section-sm` bottom above and 150px from the feed's `.section` top below. Now the hero is `section-sm pb-0` and `.recent-posts` carries an explicit `padding-top: 50px` (the `xl` token), so featured + recent read as ONE "highlights" cluster (tight 50px gap) and the 150px major break is reserved for the jump to the main feed: `[hero + recent] … break … [feed]`.
- **Image pipeline kept in sync.** Widening the hero changed the `col-md-5` slot size, so the featured `sizes` was re-derived (`540 / 465 / 390 / 300px` across xxl / xl / lg / md) and `widths` bumped `[600, 1000]` → `[600, 1100]` to cover xxl retina (~540px @2x). `AGENTS.md`'s image-pipeline table row was updated to match — the standing rule is to re-derive `sizes` whenever an image's column grid changes.

⚠️ **Guard for future audits**: the full-width hero is deliberate (the left spine). Don't "restore" the `col-10` inset or the `.col-md-5` `padding-left: 30px` thinking they went missing — both were removed on purpose. The 50px hero→recent gap vs the 150px break is the intended two-zone hierarchy; keep them distinct (don't flatten both to one value).

**Files touched**

- `layouts/index.html` — featured `section-sm` → `section-sm pb-0`; slider `col-10` → `col-12`; dropped `justify-content-center`; recent `<section>` → `<section class="recent-posts">`; featured image `sizes` / `widths` + comment
- `assets/scss/templates/_main.scss` — removed the `.featured-post .col-md-5` left inset; added `.recent-posts { padding-top: 50px }` (two-zone rhythm)
- `AGENTS.md` — image-pipeline table: Featured slider row (`widths` + `sizes`)
- `docs/THEME.md` — this entry

### 2026-05-30 — Header + footer polish (footer hairline, 44px tap targets)

`/impeccable polish` on the chrome — small, conservative refinements only (a prior `bolder` drench was explicitly rejected and reverted; this pass keeps the original look, no colour/identity change). Three approved items:

- **Footer separation.** The `<footer>` had only an ad-hoc `mt-2` margin and no top divider, so the four-column footer floated as if it were more body content (the only `border-top` was on the colophon, at the very bottom). Now a single **container-width** hairline in the shared divider token (`--eb-border` — the same one used by widgets, tables and the colophon) sits at the top of the footer's inner `.container` (matching the colophon divider's width, not a full-bleed line on the `<footer>`), and `mt-2` is replaced by `section-sm` (80px) top padding. Markup: `<footer class=" mt-2">` → `<footer class="site-footer">`; rule in `templates/_main.scss`. No background, no colour shift — just the divider + rhythm the rest of the site already uses.
- **Header tap targets.** `#theme-toggle` and `.search-btn` were one-offs at ~30–32px, smaller than the nav links (20px padding ≈ 58px) and under the 44px best-practice. Both now get `display: inline-flex` + `min-width/height: 44px` (icon centred), consistent with each other and the nav rhythm. The visible icons are unchanged and the 44px min-height stays under the navbar row height, so there's no layout growth.
- **Code hygiene.** Trimmed stray trailing whitespace on the `{{ if … }}` guards (`header.html` nameSite guards; `footer.html` nameSite / mobile-or / location guards and the colophon's closing `</div>`) and fixed `{{ .Site.Params.nameSite}}` → `{{ … }}` spacing. Output-invisible; cleaner source.

Deferred (offered, not selected): absolutely centring the desktop wordmark, which the asymmetric social-left / nav-right clusters currently nudge off true centre.

**Same-session `audit-then-fix` pass**: 🟡 the footer hairline was full-bleed on `<footer>` while the colophon divider below it is container-width — moved the border + 80px padding to the inner `.container` so the two lines match (no full-bleed line). 🔵 the hamburger (`.navbar-toggler`) was brought to the same 44×44 target as the toggle/search; 🔵 the `{{ if or  … }}` double space was collapsed; 🔵 `DESIGN.md` gained a §Footer subsection. **Deferred**: per-template variation in the air above the hairline (home `.section pb-0` sits flush vs list/single `.section-sm` ≈ 80px) — both read fine.

**Files touched**

- `assets/scss/templates/_main.scss` — `.site-footer > .container` hairline (container-width) + 80px top padding
- `assets/scss/templates/_navigation.scss` — `#theme-toggle` / `.search-btn` / `.navbar-toggler` 44px hit targets
- `layouts/partials/header.html`, `layouts/partials/footer.html` — `site-footer` class + whitespace/spacing hygiene
- `DESIGN.md` — §Footer subsection (separation + structure)
- `docs/THEME.md` — this entry

### 2026-05-30 — Living wordmark (variable-weight pointer reaction)

`/overdrive` on the header wordmark (the author name). The tension: overdrive wants "wow", but the brand is matte / flat / all-square / motion-quiet — so the wow here is **typographic craft, not spectacle**. Of three proposed directions, picked the one that uses the system's OWN material: Archivo is a variable font (`font-weight: 100 900`, `_fonts.scss`), so the name now thickens toward the cursor along the REAL weight axis — rest **700 → peak 800**, "ink pooling under the hand" — and the two ocre flank squares scale a touch with proximity. No new colour, no gradient, no glass, nothing scroll-driven, nothing auto-playing.

**Why this is on-brand, not a category cliché.** It's a *response to interaction* (state-change motion — the only kind the system already uses), not ambient animation. It reuses the documented type axis instead of adding a new visual. The rest state is pixel-identical to the old static masthead (700). `prefers-reduced-motion`, touch / coarse pointers, and no-JS all fall back to that static 700 — pure progressive enhancement.

⚠️ **Two-way guard for future audits**: do **not** strip this thinking it's "motion for its own sake" (it's interaction-driven and reduced-motion-gated — compliant with the restraint principle), and do **not** escalate it into a colour shift, a scroll-driven / auto-playing animation, or push the peak past 800 (800 is the reserved display weight; going further, or adding ambient motion, WOULD cross into the spectacle the brand rejects). Rest must stay 700.

**Implementation**: the name is split into per-glyph `.wordmark__char` spans by a new `layouts/partials/wordmark.html` — visual-only (the span tree is `aria-hidden` and the `<a>` carries an `aria-label`, so screen readers still announce the name once, not letter by letter). Weight is driven by a single self-parking `requestAnimationFrame` loop in `assets/js/script.js` (gaussian falloff from the pointer + exponential-ease lerp; glyph centres measured on enter / resize / fonts-ready, never per frame, to avoid read-after-write reflow). Squares scale via a `--wm-pulse` custom property on the anchor (`_navigation.scss`), defaulting to `scale(1)` so the no-JS render is identical. Both guards are re-evaluated at runtime via `matchMedia` `'change'`.

**Same-session `audit-then-fix` pass**: applied 🟡 documentation (this entry + `DESIGN.md` / `PRODUCT.md`), 🟡 a misleading "no layout property animated" code comment (weight *does* reflow the tiny wordmark box — comment corrected), and 🔵 three micro-opts (guard the `--wm-pulse` write, re-evaluate the media queries at runtime, rAF-throttle the resize remeasure). **Deferred by choice**: widening the 700→800 range and per-glyph width-locking — the centred masthead's width breathes slightly on hover by design; kept because it reads as intentional, not janky.

**Files touched**

- `layouts/partials/wordmark.html` — NEW; per-glyph span split with the a11y wrapper
- `layouts/partials/header.html` — both brand anchors call the partial + carry `aria-label`
- `assets/scss/templates/_navigation.scss` — `.wordmark` / `.wordmark__space` rules; squares scale via `--wm-pulse`
- `assets/js/script.js` — "Living wordmark" rAF engine (guarded, self-parking, runtime-reactive)
- `DESIGN.md` — §5 Navigation: wordmark-motion note
- `PRODUCT.md` — reduced-motion line updated (an explicit, gated animation now exists)
- `docs/THEME.md` — this entry

**Follow-up fix (2026-05-30) — square symmetry.** The span split introduced a subtle regression: the partial's trailing newline became a whitespace text node inside the brand `<a>`, between the `.wordmark` span and the `::after` ocre square (the `<a>`'s last child), pushing the RIGHT square ~1 space farther than the LEFT (the `::before` has no preceding text node). The old plain-text name had no trailing node, so it only surfaced once the partial shipped — caught by comparing local vs prod. Fixed by trimming the partial's trailing newline so its output ends exactly at `</span>` (dash-trimmed comment at the foot of `layouts/partials/wordmark.html`). Symmetric ▪ mark restored, living-wordmark behaviour untouched.

### 2026-05-29 — Self-host fonts (variable woff2) + post-typeset audit fixes

An `audit-then-fix` pass over the "Typeset: Archivo" change surfaced one 🔴 regression plus perf/CLS findings. Fixes:

**Self-hosted fonts — supersedes the Google Fonts `<link>` from the entry below.** Both families now ship from `/fonts/` as **variable** woff2 (latin subset): `archivo.woff2` (~35KB, axis 100–900) and `jetbrainsmono.woff2` (~31KB, axis 100–800). One `@font-face` per family with a `font-weight` RANGE (`assets/scss/_fonts.scss`) → a single request per family covers every weight we use. This removes the render-blocking third-party stylesheet + the cross-origin handshake (🟡 #3), lets `head.html` **preload** the Archivo woff2 to shrink the swap window (🟡 #2 / CLS), and drops the Google dependency (privacy). `font-display: swap` keeps text visible during load. Naturally moots the earlier "drop JetBrains 500" idea — a variable file has no per-weight downloads.
  - **Why variable + range, not 7 static files**: Google's css2 serves Archivo/JetBrains as variable fonts — requesting discrete weights returned the SAME file 5×/2× (byte-identical). One variable file + a weight range is ~66KB total vs ~237KB of redundant static copies.
  - **Why preload only Archivo**: it paints every page above the fold; JetBrains Mono is code-only (usually below the fold), so it loads on demand via `@font-face` + swap (no preload).
  - **Latin subset is enough for ES/EN**: Latin-1 Supplement (U+00A0–00FF) carries á é í ó ú ñ ¿ ¡.

**🔴 Byline wrap fixed.** `.post-meta` had no `font-size`, so it inherited body — and after body went 15px→16px + the wider Archivo, "By {author} · {date}" wrapped to a second line in the narrow grid cards. Set `.post-meta { font-size: 0.875rem }` (14px): restores the single line and puts metadata one step below body, where the scale always intended it.

**🔵 Heading-scale collision.** `h4` 1.375rem → 1.25rem (20px), so it stays below `h3`'s mobile `clamp()` floor (~22px) instead of sitting at the same size on small screens.

**🔵 Antialiasing kept.** `-webkit-font-smoothing: antialiased` (pre-existing) left as-is: it's conventional, and removing it thickens/blurs text on some displays. Archivo 400's mild lightness is acceptable.

**Closure (audit Fase 2).** Remaining audit items resolved:
- **Glyph coverage verified.** Google's `latin` subset declares the General Punctuation glyphs we use — em-dash `—` (U+2014), en-dash `–` (U+2013), curly quotes, ellipsis (U+2026) — so they render in Archivo, not a fallback (checked in a post). No fallback-font flash on punctuation.
- **Cache header (🟡).** `netlify.toml` now sets `Cache-Control: public, max-age=31536000, immutable` for `/fonts/*`; the self-host perf win was being lost to Netlify's default revalidation. Filenames aren't content-hashed, so changing a glyph means renaming the file to bust the cache.
- **`design.json` synced.** `.impeccable/design.json` (the source of truth the `/impeccable` skills read) still said "Raleway 400 at 15px" and hardcoded Raleway/Consolas in component CSS. Updated to Archivo + JetBrains Mono, body 16px, and renamed the two type rules (One-Text-Family, Display-800/Headings-700).
- **Preload made root-relative.** `head.html` preload href `absURL` → `/fonts/archivo.woff2`, so it byte-matches the `@font-face` fetch regardless of the `baseURL` (www) vs `HUGO_BASEURL` (non-www) split. Resolving the www/non-www mismatch site-wide is a separate SEO decision, intentionally deferred.

**Files touched**

- `assets/scss/_fonts.scss` — NEW: two variable `@font-face` (Archivo, JetBrains Mono)
- `assets/scss/style.scss` — `@import 'fonts';` as the first import
- `layouts/partials/head.html` — removed the Google `<link>` + preconnects; added `preload` of `/fonts/archivo.woff2` (root-relative, not absURL — matches the @font-face fetch)
- `static/fonts/archivo.woff2`, `static/fonts/jetbrainsmono.woff2` — NEW (variable, latin subset)
- `assets/scss/templates/_main.scss` — `.post-meta { font-size: 0.875rem }`
- `assets/scss/_typography.scss` — `h4` → 1.25rem
- `DESIGN.md` — §3: self-hosted note, h4 20px, new Meta bullet
- `netlify.toml` — `Cache-Control: public, max-age=31536000, immutable` for `/fonts/*`
- `.impeccable/design.json` — typography synced (Archivo + JetBrains Mono, body 16px, 2 rules renamed, dos/donts)
- `docs/THEME.md` — this entry

### 2026-05-29 — Typeset: Archivo replaces inherited Raleway + rem modular scale

`/impeccable typeset` flagged that the type was the one part of the system still wearing the category uniform. The brand (verde + ocre + cream + all-square) was a sharp, documented set of choices — but the *font* was **Raleway, the Liva theme default**, never actually chosen. `DESIGN.md` had rationalised it post-hoc as deliberate ("humanist geometric sans … a deliberate pick"); it wasn't. This pass makes the type an actual decision.

**Font: Raleway → Archivo (Omnibus-Type).** A squared humanist grotesque. Picked against the brand-voice words (*opinionated · crafted · useful*; physical object: "a 1960s engineering field manual") and *against* the reflex defaults — Inter, IBM Plex, Space Grotesk were rejected (training-data monoculture), and the editorial-serif lane (Fraunces/Playfair display-italic) rejected as the second-order reflex. Archivo's slightly squared letterforms rhyme with the `border-radius: 0` signature, and its wide weight range carries hierarchy without a second text family.

**Code: system monospace → JetBrains Mono.** The blog is code-heavy; the code font is now a deliberate engineering voice, not "whatever the OS ships". Wired by overriding Bootstrap's `--bs-font-monospace` token in `_root.scss` — one definition, since Bootstrap applies it to `code/pre/kbd/samp` and `pre.chroma` + inline `<code>` inherit it. This is the documented exception to the old One-Family Rule (now "One-Text-Family"): mono is scoped to code only.

**Scale: flat px → modular rem with fluid `clamp()`.** The old scale was px-based, body 15px (below the 16px readability floor), and muddy at the bottom (body 15 → h6 16 ≈ 1.07×). New scale: 1rem (16px) base, ~1.25 ratio, `rem` units (honours the reader's browser font-size — WCAG 1.4.4). The top three levels (h1/h2/h3) are fluid via `clamp(min, calc(min + vw), max)` so the hero scales with the viewport. **h1 is Archivo 800** (the display weight that carries the hero); h2–h6 stay 700.

**Loading: SCSS `@import` → `<link>` + `preconnect`.** The fonts were loaded by an `@import url(…Raleway)` at the top of `_typography.scss`. `@import` is render-blocking *and* serial — the browser must download + parse the stylesheet before it even discovers the font URL. Moved to a `<link rel="stylesheet">` in `head.html` with `preconnect` to the font hosts and `display=swap` (no FOIT).

⚠️ **LibSass gotcha** (recorded so it isn't re-hit): `clamp(2.25rem, 1.7rem + 2.75vw, 3rem)` fails Hugo's `toCSS` (LibSass) with *"Incompatible units: 'vw' and 'rem'"* — LibSass tries to evaluate the `+` at compile time. Wrapping the fluid term in `calc()` — `clamp(2.25rem, calc(1.7rem + 2.75vw), 3rem)` — defers it to the browser. Valid CSS, compiles clean.

**Files touched**

- `assets/scss/_variables.scss` — `$primary-font: 'Raleway'` → `'Archivo'` + rationale comment
- `assets/scss/_root.scss` — new `--bs-font-monospace` (JetBrains Mono) in the `:root` Fonts section
- `assets/scss/_typography.scss` — removed the render-blocking `@import`; body 15px → 1rem; flat px scale → modular rem scale with fluid `clamp()` on h1/h2/h3; h1 weight 800
- `layouts/partials/head.html` — added `preconnect` + Google Fonts `<link>` for Archivo + JetBrains Mono (replacing the @import)
- `DESIGN.md` — §3 Typography rewritten (Archivo + JetBrains Mono, new scale, weights, One-Text-Family + Display-800 rules); frontmatter `typography.*` updated; §5 component font references
- `docs/THEME.md` — this entry

### 2026-05-29 — Wordmark ocre flourish (header brand mark)

Follow-up to "Ocre above the fold": continued the `colorize` pass into the header. The wordmark is now flanked by two small ocre squares — `▪ Giuliano Pertile ▪` — the one ocre touch in the header chrome.

**Why this does NOT break the Verde-and-Ocre rule.** The header is verde/chrome territory (verde = action). The guardrail that keeps this compliant: the squares are a **decorative mark**, not the text colour and not an interactive affordance. The wordmark text stays `--eb-text-strong` (verde profundo / cream); ocre lives only in the ornaments. Decorative marks are ocre's documented role ("decorative lines"), so this is the rule *applied to chrome*, not an exception.

⚠️ **Two-way guard for future audits**: do **not** strip the ocre squares thinking they violate the role split (they don't — they're decorative), and do **not** escalate by colouring the wordmark *text* ocre (that WOULD promote ocre to chrome/action — the line we won't cross).

**Shape**: a square, not a round period, to echo the system's `border-radius: 0` signature. Symmetric flanking suits the centred desktop masthead; on mobile (left-aligned wordmark) it reads as a bracketed mark.

**Considered and rejected**: single trailing square ("square full-stop" — fine, but less balanced under the centred masthead); a colour period (round — clashes with the all-square rule); an accent underline (reads too close to a link affordance, and links are underline-free site-wide). Landed on two flanking squares.

**Implementation**: `::before` + `::after` on `.navbar-brand.text-body-emphasis` in `_navigation.scss` — no HTML change. Scoped to `.text-body-emphasis` so only the TEXT wordmark is marked, never the logo-image variant (the `{{else}}` branch in `header.html`). `0.32em` square, `0.3em` gap, `vertical-align: 0.08em`. Decorative → no WCAG text-contrast budget; ocre reads in both themes (`#856814` bronze on cream, `#C59922` vibrant on forest).

**Files touched**

- `assets/scss/templates/_navigation.scss` — added `.navbar-brand.text-body-emphasis::before/::after` ocre squares + rationale comment
- `DESIGN.md` — §5 Navigation: wordmark flourish note
- `docs/THEME.md` — this entry

### 2026-05-29 — Ocre above the fold (hero kicker, flush-left hero, ocre byline separator)

`/impeccable colorize` analysis: the nugget ocre accent — one of the two brand voices — was absent from the home page's **first viewport**. The featured-post hero rendered verde + neutral only; the first ocre element (the category label) lived in the post grid, three sections down. *"Rare by design (~10%)"* had quietly become *"absent above the fold"*, which is a different thing. Fix: surface ocre above the fold using the system's existing **signature component**, with **no new exception** to the Verde-and-Ocre role split (the header/chrome stays verde — promoting ocre to action/chrome was explicitly rejected).

**Changes**

1. **Hero category kicker.** The featured-post slider (`layouts/index.html`) now leads with the ocre editorial category label (`a.text-accent`), reordered to **category → title → meta → summary** — matching the grid card (`post.html`) and single-post header (`single.html`). Puts the signature ocre mark above the fold; no new tokens; role-compliant (categories = metadata = ocre). Title got `mt-2` for breathing room under the kicker.

2. **Flush-left hero.** Removed `.featured-post .card-title { margin-left: -10% }` from `_main.scss`. The theme's left "break-out" overhang read as a *misalignment* once the kicker sat directly above the title; flush-left also matches the grid cards + single-post. Mobile font-size (30px) retained; rationale comment added inline.

3. **Byline separator: verde → ocre.** The `.post-meta` separator (`<span class="border-bottom …">`) switched from `border-primary` (verde) to `border-accent` (ocre) across all five instances (hero, recent posts, grid card, single ×2). Concrete instance of the *ocre owns decorative lines* role (§Accent ramp) — the verde separator was the prior deviation. Non-text hairline, so no WCAG contrast requirement.

**Tried and reverted** (recorded so a future pass doesn't re-litigate)

- **Bullet separator (`•`).** Swapped the hairline for a middot/bullet (the conventional editorial byline separator). Reverted — preferred the original hairline, kept ocre.
- **Date in ocre.** Added `text-accent` to the publish `<time>`. Reverted: with the ocre kicker + ocre separator already on the row, an ocre date pushed the meta zone past the ~10% ocre budget — "too much". Date stays `--eb-text-muted`. This was a **density** call, not a contrast one — an ocre date passes AA in both themes (`#856814` 4.57:1 light, `#C59922` 6.80:1 dark). The single-post "Updated" date was always left muted as a secondary signal.

**Net effect**: two ocre touchpoints above the fold (category kicker + byline hairline), ocre share unchanged in spirit (~10%), Verde-and-Ocre role split intact.

**Files touched**

- `layouts/index.html` — featured-post hero: added category kicker, reordered to category→title→meta→summary, title `mt-2`; hero + recent-post `.post-meta` separators `border-primary` → `border-accent`
- `layouts/partials/post.html` — grid-card `.post-meta` separator `border-primary` → `border-accent`
- `layouts/_default/single.html` — both `.post-meta` separators `border-primary` → `border-accent`
- `assets/scss/templates/_main.scss` — removed `.featured-post .card-title { margin-left: -10% }` overhang (mobile 30px kept); added rationale comment
- `DESIGN.md` — §2 Nugget Ocre: byline separator as the canonical decorative line; §5 Categories: hero kicker placement + flush-left note
- `docs/THEME.md` — this entry

### 2026-05-29 — Pagination hover made perceptible (verde underline)

`/impeccable polish` flagged that the pagination hover was effectively invisible. The hover only shifted text colour from `--bs-primary` to `--bs-primary-darker`, which fails in BOTH themes:

- **Light**: `#004225` → `#002E19` — two near-black dark greens on cream; the delta is below the perceptual threshold, so hover read as "nothing happened".
- **Dark**: `#6FB089` → `#4F9269` — the "darker" ramp step goes the WRONG direction on a dark bg, *reducing* the number's contrast against `#0A1814`. Hover looked like a fade-out, not a highlight.

No second affordance existed: the `border-bottom: 2px solid transparent` space was reserved at rest but only ever coloured by `.active` (ocre).

**Fix**: `.page-link:hover/:focus` now reveals that reserved underline in `--bs-primary` (verde) and holds the text colour at `--bs-primary` (no colour shift on the numbers — the underline is the signal). Arrow hover lifts from muted `--eb-text-light` to `--bs-primary` and inherits the same underline from the base rule. The signal is now a binary, symmetric "underline appears" that reads identically in both themes, with zero layout shift (the space was already reserved) and no new tokens.

**Why an underline, not a bg tint**: pagination is the one component explicitly specified as "numbered text, not boxes" (DESIGN.md §5). A hover bg would reintroduce the box. The underline reuses the system's existing "current-context" marker and preserves the Verde-and-Ocre role split — **verde = action/hover, ocre = current page** — so hover (verde) and active (ocre) stay visually distinct. Specificity check: `.active .page-link` (0,4,0) is declared after `.page-link:hover` (0,4,0), so hovering the current page keeps the ocre underline.

**Files touched**

- `assets/scss/templates/_main.scss` — `.page-link:hover/:focus` adds `border-bottom-color: var(--bs-primary)` and holds `color: var(--bs-primary)`; arrow hover `--bs-primary-darker` → `--bs-primary`; both inline comment blocks rewritten with the rationale above
- `DESIGN.md` — §5 Pagination updated to describe the verde hover underline
- `docs/THEME.md` — auto-theme line in §"What still uses the brand colour automatically" updated (hover now `--bs-primary`, not `--bs-primary-darker`); this entry

### 2026-05-29 — Form-control WCAG SC 1.4.11 fix (`--eb-input-border`)

`/impeccable critique` of the color system flagged a WCAG 2.1 SC 1.4.11 (non-text contrast) failure on `.form-control` in resting state. The control's resting border resolved to `var(--bs-border-color)` → `var(--eb-border)` (via Bootstrap 5.3's `.form-control` default + our `--bs-border-color: var(--eb-border)` mapping in `_root.scss`). At **1.42:1** over cream and **1.46:1** over forest (verified via the WCAG relative luminance formula), the input was effectively invisible to low-vision users until focus — and focus only triggers AFTER you've found and clicked the input. Catch-22.

**Fix**: new token `--eb-input-border: #6E786E`, constant in both themes (declared in `:root` AND `[data-bs-theme="dark"]` with the same value, following the precedent set by `--eb-brand-solid`). Contrast:

- vs. `#F2EFE3` (cream, light body): **3.99:1** ✓ passes SC 1.4.11
- vs. `#0A1814` (forest, dark body): **3.97:1** ✓ passes SC 1.4.11

`#6E786E` is mid-gray-green with WCAG relative luminance ~0.179 — one of the rare hexes that clears 3:1 over both very-light and very-dark substrates (the symmetric clearance is convenient but not unique: any hex whose luminance sits in the ~0.16–0.22 range over substrates of luminance ~0.01 and ~0.86 hits the same window). Same hex that `--eb-text-light` carries in dark mode (where it's tertiary text); reusing the visual tone keeps the system cohesive. Applied to `.form-control` directly in `_common.scss` as `border-color: var(--eb-input-border)`.

**Why a new token rather than darkening `--eb-border`**: cards and inputs have different contrast requirements. A card distinguishes itself from the body via the surface step (`--eb-surface` is one tone up); the border is decorative hairline and does **not** need 3:1. An input, on the other hand, sits at the same level as body (`--eb-body-bg` IS the input bg), so the border IS the affordance — 3:1 is mandatory. Keeping the two roles in separate tokens preserves the quiet hairline aesthetic on cards while making inputs WCAG-compliant.

**Known follow-up**: the placeholder text (also using `--eb-text-light` = `#8A9088` in light) sits at ~2.83:1 over cream — below 3:1 best-practice. SC 1.4.11 doesn't strictly require placeholder contrast (placeholders are presentational, not informational), but worth a future audit pass. Not fixed in this run.

**Files touched**

- `assets/scss/_root.scss` — added `--eb-input-border: #6E786E` to both `:root` and `[data-bs-theme="dark"]` blocks
- `assets/scss/_common.scss` — `.form-control` now sets `border-color: var(--eb-input-border)` at rest (focus border stays as `$primary-color`)
- `docs/THEME.md` — this entry

### 2026-05-28 — Conservatory rebrand (teal → British Racing Green + Nugget)

Replaced the original teal brand (`#00AAA1` light / `#2DD4CC` dark) with **British Racing Green** (`#004225`) as primary + **Nugget** ocre (`#C59922`) as co-protagonist accent, on a warm cream-tinted bg (`#F2EFE3`) — palette **E · Conservatory** in the exploration phase. Verde profundo (`#002E19`) as `text-strong` is the distinctive feature: every heading carries the brand identity, so the site reads as "engineering with character", not generic dev blog.

This was an **identity change**, not a contrast tune-up. The site went from "a blog that happens to use teal" to "Giuliano's blog" — visually committed, intentional, opinionated.

**Why verde + ocre**

Started from the goal of moving away from the "generic warm-dark + teal pop" look (which works but doesn't say anything about *me*). Explored 7 palettes in a dedicated `mockups/palette-explorer.html` covering the spectrum from "Bold Editorial" (NYT-style, max contrast monochrome + accents) to "Forest Deep" (verde dominates everything) to "Linen" (warm-cream bg with verde only as accents). The decision criteria:

1. **Has to feel like mine.** A blog about engineering practice deserves a non-generic palette. Verde inglés + ocre nugget is the visual equivalent of writing in first person.
2. **Has to be readable at 2am.** Conservatory bg + verde profundo headings + warm-gray body = comfortable for long reading sessions. Tested directly in the explorer; the cream-tinted bg is materially easier on the eyes than pure white.
3. **Ocre as co-protagonist, not subordinate.** The 75% verde-neutro / 15% surface-step / 10% ocre proportion comes from classic editorial design (think old-school magazines: paper + serif + an occasional ornament). Ocre isn't "secondary" — it carries the metadata role (categories, dates) while verde carries the action role (links, buttons). They're co-equal in the system; that's why the ocre got its own ramp (`--bs-accent-*`) instead of being parked under `--bs-secondary`.

**Why split `--bs-primary` from `--eb-brand-solid`**

The previous teal had ~5:1 contrast in both roles (text on white AND bg with white text on top), so a single `--bs-primary` worked. `#004225` is much darker — perfect for solid backgrounds (white text → AAA), but **invisible as text** on dark mode (`#004225` link on `#0A1814` bg ≈ 1.5:1, fails WCAG decisively).

Three options, two rejected:

| Approach | Why rejected |
|---|---|
| One `--bs-primary`, lighten in dark | Dark-mode brand color becomes `#6FB089` lighter green — the brand identity fades. Footer/buttons look like generic mint-green. |
| One `--bs-primary`, keep `#004225` everywhere | Links in dark mode unreadable. Bad UX. |
| **Two tokens, two roles** ✓ | `--bs-primary` (text role, varies) + `--eb-brand-solid` (bg role, constant `#004225`). Industry-standard pattern in Material Design 3, Tailwind, Radix, GitHub Primer. |

This split adds **one token** to the system and 2-3 lines in `_buttons.scss`. The clarity gain is worth more than the complexity cost. New section §"Brand solid vs brand text" documents the why for future-me.

**Why verde profundo for headings (`#002E19`)**

This is the choice that made Conservatory feel different from "Linen" (which has `text-strong: #1A1817` warm black). The deep green headings push the brand identity into every page, not just the chrome (nav, buttons, footer). It's the equivalent of having your writing in a custom typeface — barely noticeable individually, hugely impactful in aggregate.

Risk: deep-green headings could feel oppressive in long sessions. Mitigation: the bg `#F2EFE3` is warm enough that the contrast (~15:1) reads as "serious editorial", not "haunted forest". If the post-implementation feel proves otherwise, the fallback is one line: `--eb-text-strong: #1A1817;` reverts to warm-black headings without affecting anything else.

**Files touched**

- `assets/scss/_root.scss` — full rewrite of both light + dark blocks (16 values per theme + new accent ramp + new brand-solid token).
- `assets/scss/_variables.scss` — added `$brand-solid` + `$accent-color` Sass aliases for backward compat with vendored Liva SCSS.
- `assets/scss/_buttons.scss` — `.btn-primary` and `.btn-outline-primary` hover state switched from `$primary-color` to `$brand-solid` so white text keeps AAA contrast in both themes.
- `assets/scss/_common.scss` — added `.text-accent` / `.bg-accent` / `.border-accent` utility classes (parallel to Bootstrap's `.text-primary` / `.bg-primary` / `.border-primary`).
- `layouts/partials/post.html`, `layouts/_default/single.html` — category links switched from `class="text-primary"` (verde) to `class="text-accent"` (ocre). Coherent with "verde = action, ocre = metadata".
- `layouts/_default/single.html` — Ko-fi widget init hex changed from `#00AAA1` (old teal) to `#004225` (new verde brand-solid). Documented as the 3rd legitimate Color Exception (can't be a CSS var because the widget reads a JS string at init time).
- `docs/THEME.md` (this file) — full rewrite of Light + Dark theme tables, new §"Brand solid vs brand text" section, expanded §"How to swap the brand colour" to cover 3 ramps + 13 hex values, updated §"Color exceptions" with the Ko-fi exception.

**WCAG verification (all AAA except where noted)**

| Pair | Calculated | Pass |
|---|---|---|
| `text-strong #002E19` on light `body-bg #F2EFE3` | ~15:1 | AAA |
| `text-muted #3D4A40` on light `body-bg #F2EFE3` | ~7.5:1 | AAA |
| `text-strong #E8EDE3` on dark `body-bg #0A1814` | ~14:1 | AAA |
| `text-muted #B5C0B5` on dark `body-bg #0A1814` | ~8:1 | AAA |
| `bs-primary #004225` (link) on light `body-bg #F2EFE3` | ~12:1 | AAA |
| `bs-primary #6FB089` (link) on dark `body-bg #0A1814` | ~7:1 | AAA |
| `bs-accent #C59922` on light `body-bg #F2EFE3` | ~3.4:1 | AA Large (categories are bold/uppercase — qualifies) |
| `bs-accent #C59922` on dark `body-bg #0A1814` | ~5.2:1 | AA Normal |
| White on `--eb-brand-solid #004225` (btn-primary text) | ~12:1 | AAA |

**The splide exception** (documented in `_main.scss` and §"Brand solid vs brand text"): the splide pagination active dot uses `$primary-color` (varies) instead of `$brand-solid` (constant). In dark mode, `#004225` on `#0A1814` is nearly invisible — and the active dot's job is **visibility**, not branding. Using `--bs-primary` gives `#6FB089` in dark, which is clearly visible. This is the single intentional break in the "solid bg = always brand-solid" rule, called out so future-me doesn't "fix" it.

---

### 2026-05-28 — Conservatory contrast fix (post-rebrand audit)

Same-day audit of the Conservatory rebrand surfaced three issues that the initial implementation got wrong. All three fixed in this entry; details and rationale below.

**1. Critical: `--bs-accent: #C59922` failed WCAG on cream bg.**

The rebrand entry above claimed `bs-accent #C59922` over light body-bg was `~3.4:1` and "AA Large pass (categories are bold/uppercase)". Both halves were wrong:

- Recalculated with the WCAG 2.1 relative-luminance formula, the actual contrast is **2.36 : 1**. Below the AA Large threshold (≥ 3 : 1), and well below AA Normal (≥ 4.5 : 1).
- Categories are **not** bold or uppercase. They render as `<a>` plain inside `.card-body` and post headers, inheriting `body { font-size: 15px }` regular. WCAG "Large" requires ≥ 18.66px **bold** or ≥ 24px regular — 15px regular falls under Normal.

Fix: made the accent ramp asymmetric per theme, mirroring the pre-existing `--bs-primary` pattern.

| Token | Light (old, failed) | Light (new, pass) | Dark (new, pass) |
|---|---|---|---|
| `--bs-accent` | `#C59922` (2.36 : 1) ❌ | `#856814` (4.57 : 1) ✅ AA Normal | `#C59922` (6.80 : 1) ✅ AA Normal |
| `--bs-accent-rgb` | `197, 153, 34` | `133, 104, 20` | `197, 153, 34` (unchanged) |
| `--bs-accent-darker` | `#A8801C` | `#5C440D` (7.97 : 1, AAA) | `#A8801C` (unchanged) |
| `--bs-accent-lighter` | `#E0B958` | `#C59922` (vibrant nugget, decorative role) | `#E5C572` (unchanged) |

The vibrant nugget `#C59922` didn't leave the palette — it changed roles. In light it moved from `--bs-accent` (text) to `--bs-accent-lighter` (decoration: bg fills, borders, chips). In dark it stayed as `--bs-accent` (text on dark bg has plenty of contrast). The brand identity is preserved across both themes; what changed is *which token holds it where*.

**Editorial typography compensates the lost vibrance in light.** After the first iteration shipped with `#806014` (more conservative bronze, 5.06 : 1), reading the page side-by-side revealed the categories felt **too quiet** — the warmth of the nugget was missing. Two ways out: (a) bump the hex luminance (but past `#856814` the contrast budget runs out), or (b) lean on **typography** to carry the visual emphasis. Picked (b): added `text-transform: uppercase` + `font-weight: 600` + `letter-spacing: 0.08em` + `font-size: 0.875rem` to `a.text-accent` in `_common.scss`. Final hex landed at `#856814` (4.57 : 1, slightly brighter than the initial `#806014`) and the editorial label treatment makes `ENGINEERING` read as a deliberate brand mark rather than a faded link. Same pattern used by Vercel, Linear, Stripe, NYT, FT blogs for category metadata.

Added a new doc section §"Why accent uses different hex per theme" with the full rationale, the editorial typography snippet, and a recipe for future accent swaps.

**2. Important: sidebar category links bypassed `.text-accent`.**

`layouts/partials/sidebar.html` rendered the Category widget as `<li><a href="...">` with no class, so the links fell back to `a { color: var(--bs-primary) }` (verde). Meanwhile, the same categories in homepage cards (`layouts/partials/post.html`) and post headers (`layouts/_default/single.html`) used `class="text-accent"` (ocre). Inconsistent: same content, two colours depending on location.

Fix: added `class="text-accent"` to the sidebar link. Now all categories — cards, post headers, sidebar — share the ocre identity, consistent across the site. Listed `§"What still uses the brand colour automatically"` accordingly.

**3. Minor: `.btn-primary` lost its outline in dark mode.**

The initial rebrand set `border-color: $brand-solid` on `.btn-primary`. In light that's invisible (same as the bg), as intended. In **dark** that means a `#004225` border on a `#0A1814` body — the button melts into the surrounding dark surface from a distance. The contrast contract (white text on `#004225` bg, AAA) was fine; the affordance was poor.

Fix: changed `border-color` on `.btn-primary` (and the hover of `.btn-outline-primary`) from `$brand-solid` (constant `#004225`) to `$primary-color` (theme-aware: `#004225` in light, `#6FB089` in dark). Light behaviour unchanged. Dark gains a subtle lighter-green outline that defines the button silhouette without touching the bg/text contrast pair. Documented as an addition to §"Brand solid vs brand text" and a clarification in §Color exceptions §1.

**Easy-win clean-ups bundled in:**

- **Stale comment in `_root.scss`**: the comment above the `.dropdown-menu` override block claimed the pattern "covers both light and dark themes" via `var(--bs-primary)` alone — but the actual override uses both `var(--bs-primary)` (in `.text-primary` etc.) and `var(--eb-brand-solid)` (in the dropdown). Rewrote the comment to reflect both vars and explain that the cascade resolves at use-time.
- **Stale comment about "same hex in both themes" for the accent ramp**: removed everywhere it appeared (`_root.scss` light + dark blocks, `_variables.scss` alias, `THEME.md` accent tables and Step 4 of swap procedure). All updated to reflect the new asymmetry.
- **Splide active dot rationale**: the existing comment in `_main.scss` mentioned `$primary-color` vs `$brand-solid` only obliquely. Added an explicit sentence explaining *why* the dot uses the theme-aware one (visibility against dark bg, the active dot's role is to stand out, not to brand-anchor).
- **`mockups/` gitignored**: the palette-explorer HTML files under `mockups/` were committable but not source nor output. Added to `.gitignore` with a comment, and a 4th legitimate Color Exception in this doc explaining the rationale (keep on disk for local design probes, don't commit — history lives in THEME.md).
- **Misleading note about `featured = true`**: the previous History entry ended with a parenthetical implying that the home-page slider had been migrated from `type="featured"` to `featured = true`. Reading the actual `layouts/index.html` shows it iterates `where .Site.RegularPages "Params.featured" true` — the change predates the Conservatory rebrand and the note was misleading by association. Removed.

**Files touched in this audit fix**

- `assets/scss/_root.scss` — new asymmetric accent ramp in `:root` (final hex `#856814`), updated comments in both `:root` and `[data-bs-theme="dark"]` blocks to reference the editorial typography, fixed stale comment above `.dropdown-menu` override.
- `assets/scss/_variables.scss` — rewrote the `$accent-color` inline comment: the previous (now stale) version said *"same hex in both themes"*; the new version explicitly states *"asymmetric: bronze #856814 light, vibrant #C59922 dark"* to reflect the actual ramp.
- `assets/scss/_buttons.scss` — `border-color: $brand-solid` → `$primary-color` on `.btn-primary` + `.btn-outline-primary` hover, with full rationale in the inline comment.
- `assets/scss/_common.scss` — added `a.text-accent` editorial label treatment (uppercase + 600 + tracking + 0.875rem + hover-to-darker) with full rationale comment.
- `assets/scss/templates/_main.scss` — splide pagination comment block extended with `$primary-color` vs `$brand-solid` rationale.
- `layouts/partials/sidebar.html` — added `class="text-accent"` to the Category widget links.
- `.gitignore` — added `mockups/`.
- `docs/THEME.md` (this file) — new §"Why accent uses different hex per theme" (with editorial typography sub-section), updated Light + Dark accent tables (with editorial treatment note), updated Step 4 of swap procedure, new §Color exceptions §4 (mockups), updated §1 (btn-primary border note), §"What still uses the brand colour automatically" updated to list sidebar widget, removed stale "Drafts pinned to home" paragraph from the previous History entry, added this entry.

**WCAG re-verification (light accent only — dark was already correct)**

| Pair | Calculated | Pass |
|---|---|---|
| `bs-accent #856814` on light `body-bg #F2EFE3` | 4.57 : 1 | AA Normal |
| `bs-accent-darker #5C440D` on light `body-bg #F2EFE3` | 7.97 : 1 | AAA |
| `bs-accent-lighter #C59922` on light `body-bg #F2EFE3` | 2.36 : 1 | (decorative only — not used as text) |
| `bs-accent #C59922` on dark `body-bg #0A1814` | 6.80 : 1 | AA Normal |

**Lesson for future audits**: when a previous entry claims a contrast ratio AND a WCAG qualification rule (e.g. "AA Large because text is bold"), verify *both* independently against the actual rendered markup. The previous entry's claim looked plausible — ocre on cream, bold-looking metadata — but neither the number nor the rule survived contact with `font-size: 15px` regular `<a>` tags. Audit the markup, not the intent.

**Addendum — pagination editorial restyle (same-day visual polish):**

The blog index/category pagination kept the Bootstrap-default boxed look (gray `#dee2e6` border + light gray bg) which didn't blend with the cream/verde/ocre palette — visible as a cool gray patch inside a warm composition. Refactored `.pagination` in `assets/scss/templates/_main.scss` to an **editorial numbered-text style**: no boxes, no bg, just text. The active page is anchored with a 2px `--bs-accent` underline + `font-weight: 600` — the same ocre that marks categories, so "current context" is communicated by the **same accent colour in two surfaces** (categories + active page). Flechas (`«`, `‹`, `›`, `»`) are muted to `--eb-text-light` and slightly smaller so the eye lands on the numbers. Same visual pattern used by Substack, Stripe Blog, Vercel Blog, NYT. No layout shift on hover because the `.page-link` reserves the 2px underline space with `border-bottom: 2px solid transparent` at rest.

This was a small but high-impact change: the pagination was the **last "generic CMS"** element in the site (everything else — categories, tags, cards, headings — already follows the Conservatory editorial language). Closing this loop makes the design feel **fully intentional** end-to-end rather than "Conservatory rebrand with a Bootstrap pagination escape valve".

---

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
