---
name: Engineered Blog
description: A British Racing Green notebook for engineering essays by Giuliano Pertile.
colors:
  british-racing-green: "#004225"
  verde-profundo: "#002E19"
  british-racing-green-vivid: "#006939"
  british-racing-green-light-on-dark: "#6FB089"
  british-racing-green-mid-on-dark: "#4F9269"
  british-racing-green-bright-on-dark: "#8FC8A5"
  british-racing-green-solid: "#004225"
  nugget-bronze: "#856814"
  nugget-bronze-deep: "#5C440D"
  nugget-ocre: "#C59922"
  nugget-ocre-soft: "#A8801C"
  nugget-ocre-glow: "#E5C572"
  conservatory-cream: "#F2EFE3"
  conservatory-cream-shaded: "#E8E4D2"
  conservatory-cream-deep: "#DCD7C0"
  forest-floor: "#0A1814"
  forest-floor-step: "#0F2419"
  forest-floor-deep: "#163024"
  text-strong-light: "#002E19"
  text-strong-dark: "#E8EDE3"
  text-muted-light: "#3D4A40"
  text-muted-dark: "#B5C0B5"
  text-light-light: "#8A9088"
  text-light-dark: "#6E786E"
  border-cream: "#C9CDB5"
  border-forest: "#25382D"
  overlay-bg-light: "#2D2D2D"
  overlay-fg-light: "#F5F5F5"
  overlay-bg-dark: "#1B2A22"
  overlay-fg-dark: "#E8EDE3"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1.3
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875em"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  flat: "0px"
spacing:
  xs: "8px"
  sm: "10px"
  md: "16px"
  lg: "30px"
  xl: "50px"
  "2xl": "80px"
  "3xl": "150px"
components:
  button-primary:
    backgroundColor: "{colors.british-racing-green-solid}"
    textColor: "{colors.pure-white}"
    typography: "{typography.body}"
    rounded: "{rounded.flat}"
    padding: "10px 15px"
  button-primary-hover:
    backgroundColor: "{colors.british-racing-green-solid}"
    textColor: "{colors.pure-white}"
  button-outline-primary:
    backgroundColor: "transparent"
    textColor: "{colors.text-strong-light}"
    typography: "{typography.body}"
    rounded: "{rounded.flat}"
    padding: "10px 15px"
  button-outline-primary-hover:
    backgroundColor: "{colors.british-racing-green-solid}"
    textColor: "{colors.pure-white}"
  tag-pill:
    backgroundColor: "#0042251A"
    textColor: "{colors.verde-profundo}"
    rounded: "{rounded.flat}"
    padding: "0.5rem 0.85rem"
  tag-pill-hover:
    backgroundColor: "#00422533"
    textColor: "{colors.verde-profundo}"
  form-control:
    backgroundColor: "{colors.conservatory-cream}"
    textColor: "{colors.text-muted-light}"
    rounded: "{rounded.flat}"
    height: "50px"
  form-control-focus:
    backgroundColor: "{colors.conservatory-cream}"
    textColor: "{colors.text-strong-light}"
  card:
    backgroundColor: "{colors.conservatory-cream-shaded}"
    textColor: "{colors.text-muted-light}"
    rounded: "{rounded.flat}"
  category-label:
    textColor: "{colors.nugget-bronze}"
    typography: "{typography.label}"
  category-label-hover:
    textColor: "{colors.nugget-bronze-deep}"
---

# Design System: Engineered Blog

## 1. Overview

**Creative North Star: "British Racing Green Notebook"**

The name is the system. A notebook in British Racing Green (`#004225`) — not metaphor, not mood-board — *the actual color*, treated as identity. Verde profundo headings (`#002E19`), nugget ocre accents (`#856814` light / `#C59922` dark), and a warm cream `#F2EFE3` body that reads as paper, not screen. Dark mode is a green-tinted forest (`#0A1814`) — the same notebook, lit from the other side. The system is committed to its colors the way a personal notebook is committed to its cover.

The whole point of this look is to **not look like the dev-blog category**. There's a documented thing in this codebase about *the smooth* — the genericized aesthetic of Medium, Hashnode, dev.to, the gradient-purple-to-blue hero, the equal-height card grid, the gray sans on white. Kyle Chayka calls it AirSpace; Byung-Chul Han calls smooth surfaces a kind of aesthetic poverty. The Engineered Blog is the refusal of that. The verde + ocre + cream was chosen because Giuliano Pertile likes them. Some readers will love the result. Some will reject it. Both responses are evidence that the system has identity. A blog no one reacts to is a blog no one remembers.

Density is restrained. Type is set on a warm field. Layout breathes — `.section` is `150px` top and bottom, which is a lot, and the rhythm is intentional. Motion exists but stays quiet: 0.15–0.2s ease transitions on state changes, one shadow on card hover, nothing scroll-driven, nothing animated for its own sake. Shape is uniformly `border-radius: 0` — the *all-square* rule below. Every visual decision is documented with its rationale in `docs/THEME.md` (the implementation registry — 680 lines of "why each hex"). DESIGN.md is the spec; THEME.md is the executable record.

**Frontmatter convention.** The YAML at the top of this file captures **light-theme** token values (the project's `:root` defaults). Dark-mode variants are documented per-token in Section 2 — every token with a `-light` suffix has a sibling with a `-dark` suffix carrying the dark hex. Components reference the light variant by default; consult Section 2 and `docs/THEME.md` for the dark-mode resolution and the rationale behind each asymmetric ramp.

**Key Characteristics:**

- **British Racing Green is the brand**, not a "primary accent". It's the heading color, the link color, the button color, the focus ring. You can't read a page without it. (`#004225` light, `#6FB089` lighter green for text legibility on dark bg — same brand, different role.)
- **Nugget ocre is dual-role with verde, not subordinate.** Categories, dates, decorative lines. It carries the *metadata* role while verde carries the *action* role. Two colors with two distinct roles, not one primary and one accent. Co-equal in **role-distinctness**, not in surface coverage — verde dominates by area (chrome + headings + links ≈ 65%); ocre is rarer by design (categories + decorative ≈ 10%). What matters is that each owns its role exclusively.
- **The all-square rule.** `border-radius: 0` on every native surface — buttons, cards, form controls, tag pills, code blocks, inline code. The one exception is the third-party share-buttons widget (5px); kept as-is because borrowing should look borrowed.
- **Conservatory cream, not white.** Body bg is `#F2EFE3` (warm, papered) in light and `#0A1814` (green-tinted dark, not black) in dark. Pure neutrals are absent on purpose.
- **Categories are labels, not links.** `ENGINEERING` in uppercase + 600 weight + 0.08em letter-spacing. The combination of editorial typography + bronze ocre sells the brand identity *while staying AA Normal* on cream — see Section 3, *The Editorial Label Rule*.
- **WCAG AA Normal everywhere; AAA on body.** Documented per-pair in `docs/THEME.md`. Light and dark are first-class; neither is the afterthought.
- **Asymmetric ramps.** Both verde and ocre use different hexes per theme because the same hex doesn't carry equal weight on opposite substrates. A token is a role, not a hex constant. (`--bs-accent` is `#856814` bronze in light, `#C59922` vibrant in dark — same role, different value.)

## 2. Colors

The palette is built on three voices: **British Racing Green** (action, identity), **Nugget Ocre** (metadata, warmth), and **Conservatory Cream / Forest Floor** (substrate, depth). Three colors do almost everything; nothing else is needed.

### Primary — British Racing Green family

The brand carries action: links, headings, buttons, focus rings.

- **British Racing Green** (`#004225`): body links, `.text-primary`, `.border-primary`, focus rings in light mode. The identity hex. Also the constant `--eb-brand-solid` used for solid backgrounds (`.btn-primary`, dropdown active) in *both* themes — the green that never changes.
- **Verde Profundo** (`#002E19`): headings (`--eb-text-strong`) in light mode. ~15:1 over cream — AAA contrast, near-black with a green undertone. The most distinctive feature of the system: every `<h1>`-`<h6>` carries the brand identity, not just the chrome.
- **British Racing Green Vivid** (`#006939`): `::selection` background in light. Saturated mid-green that pops on cream.
- **British Racing Green (dark text role)** (`#6FB089`): links and `.text-primary` in dark mode. Lighter green so text stays legible on `#0A1814` body. Same brand, inverted ramp.
- **British Racing Green Mid (dark selection)** (`#4F9269`): `::selection` background in dark.
- **British Racing Green Bright (dark tag fg)** (`#8FC8A5`): tag-pill text in dark, AAA on translucent dark bg.

### Secondary — Nugget Ocre family

The accent carries metadata: categories, dates, decorative lines. Dual-role with verde, not subordinate — verde owns the action surface, ocre owns the metadata surface; neither is a sub-tier of the other. The canonical *decorative line* is the byline separator in `.post-meta` — a short ocre `border-accent` hairline (it was verde `border-primary` until the 2026-05-29 "Ocre above the fold" pass; the verde version was the deviation).

- **Nugget Bronze** (`#856814`): `a.text-accent` text role in light mode — categories, dates. 4.57:1 over cream (AA Normal pass with margin). Always rendered with the editorial label treatment (see Section 3).
- **Nugget Bronze Deep** (`#5C440D`): hover state for accent links in light. 7.97:1 — AAA on cream.
- **Nugget Ocre** (`#C59922`): the vibrant nugget. *Decorative* role in light (bg fills, chips, borders — never as body text on cream, because 2.36:1 fails AA). *Text* role in dark — 6.80:1 over `#0A1814` is AA Normal pass.
- **Nugget Ocre Soft** (`#A8801C`): hover for accent links in dark.
- **Nugget Ocre Glow** (`#E5C572`): accent text on solid green backgrounds (e.g. footer/CTA panels in dark mode).

### Neutral — substrate, text, borders

The whole system sits on warm cream or green-tinted dark. White and black are deliberately absent; tinted neutrals carry the brand mood even through "background" tokens.

#### Surfaces (light)

- **Conservatory Cream** (`#F2EFE3`): `--eb-body-bg`. Warm cream — "papered" feel, never pure white.
- **Conservatory Cream Shaded** (`#E8E4D2`): `--eb-surface`. Cards, code blocks, blockquotes, `tbody`. One step down from body.
- **Conservatory Cream Deep** (`#DCD7C0`): `--eb-surface-emphasis`. Table `thead`, hover states, attention surfaces. One more step for hierarchy.

#### Surfaces (dark)

- **Forest Floor** (`#0A1814`): `--eb-body-bg` in dark. Green-tinted dark, not black.
- **Forest Floor Step** (`#0F2419`): `--eb-surface` in dark. Cards, code blocks.
- **Forest Floor Deep** (`#163024`): `--eb-surface-emphasis` in dark. Thead, hover.

#### Text

- **Text Strong (light)** (`#002E19`): same hex as Verde Profundo. Different role, same value. Headings in light. AAA contrast (~15:1) on cream.
- **Text Strong (dark)** (`#E8EDE3`): headings in dark. Cream-tinted white with subtle warmth.
- **Text Muted (light)** (`#3D4A40`): body copy in light. Warm green-tinted gray, harmonizes with cream. ~7.5:1, AAA.
- **Text Muted (dark)** (`#B5C0B5`): body copy in dark. ~8:1, AAA.
- **Text Light (light)** (`#8A9088`): tertiary text, disabled states.
- **Text Light (dark)** (`#6E786E`): tertiary text, disabled, pagination arrows.

#### Borders

- **Border Cream** (`#C9CDB5`): hairlines, dividers, form fields in light. Cream-green tinted; never pure gray.
- **Border Forest** (`#25382D`): same role in dark. Green-tinted, visible but quiet.

### Named Rules

**The Verde-and-Ocre Rule.** Verde carries action (links, buttons, focus, headings). Ocre carries metadata (categories, dates, decorative lines). The two are co-equal **in role-distinctness**, *not* in surface coverage — verde dominates by area (≈65% of colored elements), ocre is rarer (≈10%). What matters is that each owns its role exclusively: don't promote ocre to action use; don't demote verde to decoration. The role split is the identity; the area split is just how the roles land in practice.

**The Tinted-Neutral Rule.** No pure black (`#000`), no pure white (`#fff`) on body surfaces. The only acceptable use of `#FFFFFF` is **text on `--eb-brand-solid`** (`.btn-primary`, dropdown active), where solid-green-with-white-text is the AAA-passing CTA pattern. Everywhere else: warmth.

**The Asymmetric-Ramp Rule.** A token is a *role*, not a hex constant. Both `--bs-primary` and `--bs-accent` resolve to different hexes per theme because the same hex can't carry equal weight on opposite substrates. The rule generalizes: when you add a new color token, define it for both themes by what it *does*, then pick the hex that hits the contrast budget for each substrate.

**The Brand-Solid-vs-Brand-Text Rule.** Brand verde is two tokens. `--bs-primary` is the text-role token; it varies per theme so links stay legible. `--eb-brand-solid` is the solid-bg-role token; it's *constant* `#004225` in both themes because white-on-solid-green is the AAA CTA pattern in both modes. If you're adding a new component, pick by role: does it carry text on top? `$brand-solid`. Is it the text itself? `$primary-color`. (Inherited from Material `primary` vs `primary-container`; Tailwind `primary-500` vs `primary-600`; Radix `9` vs `11`; GitHub `fgColor-accent` vs `bgColor-accent-emphasis`.)

## 3. Typography

**Display / Body / Label Font:** Archivo (**self-hosted** variable woff2, weight axis 400–800; `assets/scss/_fonts.scss`). One grotesque carries headings, body, and the editorial labels.
**Code Font:** JetBrains Mono (**self-hosted** variable woff2) for code blocks (`pre.chroma`) + inline `<code>`; syntax-highlighted with Chroma (`manni` light, `dracula` dark). Wired via Bootstrap's `--bs-font-monospace` token in `_root.scss`.

Fonts are **self-hosted** (one variable woff2 per family, latin subset, ~66KB total, served from `/fonts/`), not loaded from Google — no render-blocking third-party stylesheet, Archivo is preloaded in `head.html`, and there's no Google dependency. See `docs/THEME.md` History → "Self-host fonts".

**Character:** Archivo is a squared humanist grotesque (Omnibus-Type) — a confident, slightly mechanical letterform whose near-square geometry rhymes with the all-square (`border-radius: 0`) system. It replaced the inherited Raleway theme default (Raleway was never chosen — it shipped with Liva). Archivo earns its place against the brand-voice words (*opinionated · crafted · useful*) and *against* the reflex defaults (Inter, IBM Plex, Space Grotesk — rejected as training-data monoculture; the editorial-serif lane rejected as the second-order reflex). Its wide weight range (400 body → 800 display) carries the hierarchy so the system still needs only one *text* family; the verde + ocre + rhythm do the rest. See `docs/THEME.md` History → 2026-05-29 "Typeset: Archivo".

### Hierarchy

The scale is **modular on a 1rem (16px) base, ratio ~1.25**, expressed in `rem` (honours the reader's browser font-size — WCAG 1.4.4). The top three levels are **fluid** via `clamp(min, calc(min + vw), max)` so the hero scales with the viewport; body stays fixed.

- **Display** (Archivo **800**, `clamp(2.25rem, calc(1.7rem + 2.75vw), 3rem)` → 36–48px, 1.3, `-0.015em` tracking): `<h1>` on post pages and the home hero title. The biggest type on the screen, and the **only** 800-weight in the system. Renders in Verde Profundo (`#002E19`) on cream; cream-white (`#E8EDE3`) on Forest Floor.
- **Headline** (Archivo 700, `clamp(1.75rem, calc(1.45rem + 1.5vw), 2.25rem)` → 28–36px, 1.3, `-0.01em`): `<h2>` — major in-post sections. The most-used heading by volume.
- **Title** (Archivo 700, `clamp(1.4rem, calc(1.25rem + 0.75vw), 1.75rem)` → ~22–28px, 1.3): `<h3>` — sub-sections.
- **Body** (Archivo 400, 1rem/16px, 1.7 line-height): paragraph text — bumped from the old 15px (below the 16px readability floor). Body line length is intentionally **not** capped at 65–75ch. Posts use Bootstrap's `.col-lg-8` grid, which at xl/xxl viewports produces ~115–135ch lines — past the typographic recommendation. Known deviation; reconsider with `max-width: 70ch` on `p` in `_typography.scss` if reader feedback surfaces complaints.
- **Label** (Archivo 600, 0.875rem, 0.08em letter-spacing, uppercase): the editorial category treatment — see *The Editorial Label Rule* below.
- **Meta** (Archivo 500, 0.875rem/14px, muted): the byline/date row (`.post-meta`) — one step below body so it reads as secondary metadata and fits on a single line in the narrow grid cards (it had inherited body size, which wrapped after the Archivo + 16px change).
- **Sub-headings** (h4 1.25rem/20px, h5 1.125rem/18px, h6 1rem/16px, Archivo 700 / 1.3): h6 equals body size — distinguished by weight (700), not size. Not formal roles in the Stitch frontmatter; documented here so an agent designing a new h4 doesn't reinvent the size.
- **Code** (JetBrains Mono 400): code blocks (`pre.chroma`) and inline `<code>` — see §5 Code Blocks.

### Named Rules

**The Editorial Label Rule.** Every `a.text-accent` (categories on cards, post headers, sidebar widget) is rendered as a *label*, not a link. Specifically: `text-transform: uppercase` + `font-weight: 600` + `letter-spacing: 0.08em` + `font-size: 0.875rem`. The brain reads `ENGINEERING` as a category badge before parsing the letters. This is the trick that lets the bronze ocre `#856814` pass WCAG AA Normal on cream — typography carries the brand emphasis that the muted hex can't. Same pattern used by Vercel, Linear, Stripe, NYT, FT blogs. Scoped to `<a>` only: plain `.text-accent` on `<span>` or `<p>` (dates, decorative one-liners) stays as bronze body text without the label treatment.

**The One-Text-Family Rule.** Archivo carries all *prose* — headings, body, labels. Don't add a serif "for editorial feel"; don't add a second sans. The single text family is the editorial choice; diversifying weakens it. **The one deliberate exception is JetBrains Mono for code** (`pre.chroma`, inline `<code>`) — a register-justified pick for a code-heavy blog, wired via `--bs-font-monospace`. Mono is scoped to code only; never use it for prose or labels.

**The Display-800 / Headings-700 Rule.** `<h1>` (the display role) is Archivo **800** — the single 800-weight, reserved for the hero. `<h2>`–`<h6>` are 700. Body is 400; labels are 600 (the only mid-weight). Hierarchy comes from **size + the h1 weight jump**, not from per-level weight contrast. Don't introduce a 500 or 900 heading weight, and don't promote h2–h6 to 800.

## 4. Elevation

**Flat by default.** The system uses tonal layering, not shadows, for depth. Three steps of warm cream (`#F2EFE3` → `#E8E4D2` → `#DCD7C0`) — or three steps of Forest Floor (`#0A1814` → `#0F2419` → `#163024`) — carry the hierarchy. Body sits at step 1. Cards, code blocks, blockquotes, `tbody` sit at step 2. Table `thead`, row hover, attention surfaces sit at step 3. The eye reads the step difference as *depth* without needing shadows. The whole site has exactly **one** intentional shadow.

### Shadow Vocabulary

- **Card lift** (`box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18)`): the *only* shadow in the system. Applied on `:hover` to `.card:not(.featured-post)` — generic post cards on listings and the sidebar. Tuned to be subtle on light cream and visible enough on dark forest. **Not applied to `.featured-post`** because that card lives inside the splide track which has `overflow: hidden` to clip slides — the bottom half of the shadow would get chopped. (Also, the featured card *is* the main content on the home, not a thumbnail; the lift affordance doesn't add information.)

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows are a *response* to state — and only one state (hover) on one surface (the non-featured post card). Don't add ambient shadows to convey "this is a card". The tonal step does that. Don't add shadows on `:focus`; the focus ring (`--bs-primary` border) is the affordance there. Don't add an "elevated container" shadow scale (sm/md/lg). There's one shadow; that's the spec.

**The Tonal-Step Rule.** When you need depth, change the tone, not the shadow. Cards step UP one cream level. Hover steps UP one more. Code blocks step UP. Body stays at step 1. Picking the right step is the answer; "give it a shadow" is the wrong answer.

## 5. Components

Components are uniformly square (`border-radius: 0`), uniformly Archivo, and uniformly committed to the verde + ocre + cream palette. The whole component shelf is short — buttons, cards, form controls, tag pills, the category label — and that's it. There's no chip variant family, no modal system worth documenting, no toast pattern. The blog reads.

### Buttons

- **Shape:** square (`border-radius: 0`). `1px solid` border. Padding `10px 15px`. Font Archivo 14px / 500 / `text-transform: capitalize`. Transition `0.2s ease`.
- **Primary** (`.btn-primary`): bg `--eb-brand-solid` (`#004225` constant in both themes), text pure white, border `--bs-primary` (theme-aware: `#004225` light, `#6FB089` dark). Used for CTAs — "Read More", Ko-fi support button, "Subscribe". The bg/text contract gives AAA contrast (~12:1) in both modes; the border is the *definition* cue (invisible in light because same hex as bg; subtly visible lighter-green in dark so the button doesn't melt into Forest Floor).
- **Outline Primary** (`.btn-outline-primary`): transparent bg, text `--eb-text-strong` (verde profundo light, cream dark), border `--bs-primary`. On hover fills with `--eb-brand-solid` + white text — same contract as `.btn-primary`. Used as a secondary CTA where solid would be too loud.
- **Hover / Focus:** no scale transforms, no shadow, no glow. The state change is the color fill (outline → primary on hover) or staying-the-same (primary stays primary; no hover-darken). Focus ring is the standard browser outline scoped via `--bs-primary`. No bouncy easing.

### Tag Pills (`.eb-tag`)

- **Style:** ghost — translucent verde bg with verde-darker text and verde border. `bg: rgba(0, 66, 37, 0.10)` light / `rgba(111, 176, 137, 0.15)` dark. `color: #002E19` light / `#8FC8A5` dark. `border: 1px solid rgba(0, 66, 37, 0.30)` light / `rgba(111, 176, 137, 0.35)` dark.
- **Shape:** square (`border-radius: 0`). Padding `0.5rem 0.85rem`. Font 0.9rem / 500.
- **State:** hover bumps bg opacity to 0.20 (light) — same color, more weight. No transform.
- **Used for:** the sidebar tag widget, plus the **sidebar** social-icon row (`.social-links`, same `--eb-tag-*` tokens — visual consistency between metadata pills and social affordances). **The footer's "Social Contacts" list is plain text links** (`text-body-emphasis`), *not* icon pills: the ghost-pill boxes read as washed-out squares on the cream footer, and the footer is a uniform navigation block (Contact Me / Social Contacts / Categories / Quick Links). This matches the footer-as-navigation-block exception already documented in `docs/THEME.md`. Don't convert the footer back to icon pills in a future audit.

### Cards / Containers

- **Shape:** square (`border-radius: 0`).
- **Background:** `--eb-surface` (`#E8E4D2` light / `#0F2419` dark) — one tonal step above body.
- **Border:** `1px solid --eb-border` (`#C9CDB5` light / `#25382D` dark).
- **Shadow:** none at rest. On hover, `.card:not(.featured-post)` gets the single Card Lift shadow (see Elevation). Featured cards (the home slider) stay flat at all states — their parent track has `overflow: hidden` that would chop the shadow.
- **Internal padding:** `1rem` (Bootstrap 5.3 default `.card-body`; not viewport-responsive).

### Inputs / Fields

- **Style:** `--eb-body-bg` (cream/forest), 1px border `--eb-border`, text `--eb-text-muted`. `border-radius: 0`. `height: 50px` for `.form-control`; `height: 150px` for `textarea.form-control`.
- **Focus:** border-color shifts to `--bs-primary` (verde). No box-shadow, no glow. Outline removed (`box-shadow: none; outline: 0;`).
- **Placeholder:** `font-size: 13px`, inherits text-muted color.

### Navigation

- **Style:** plain Archivo, top horizontal bar with mobile collapse. Theme toggle lives OUTSIDE the `.navbar-collapse` so it's always visible on mobile (GitHub/Linear/Vercel pattern). Search icon (lupa) opens a fullscreen modal that focuses the input on open (`requestAnimationFrame`, not `setTimeout`); `Escape` closes.
- **Active/Hover:** body links use `--bs-primary`. Hover transitions to `--bs-primary` with `0.2s ease`.
- **Wordmark:** the author name in Archivo 700, `--eb-text-strong` (verde profundo / cream), flanked by two small ocre squares — `▪ Giuliano Pertile ▪`. This is the **one ocre touch in the header chrome**, kept **decorative** (the squares, not the text) so it stays inside the Verde-and-Ocre rule (ocre = decorative mark; verde = action/chrome). The square shape echoes the all-square signature. Two-way guard: don't colour the wordmark *text* ocre (that promotes ocre to chrome/action), and don't strip the squares in an audit (they're role-compliant). See `docs/THEME.md` History → 2026-05-29 "Wordmark ocre flourish".

### Pagination

- **Editorial numbered-text** — *not* boxes. No bg, no border. Page numbers as plain Archivo; active page anchored with a `2px` `--bs-accent` underline + `font-weight: 600` (the same ocre that marks categories — repeating the accent in two surfaces unifies "current context"). Arrows (`«`, `‹`, `›`, `»`) muted to `--eb-text-light` and slightly smaller so the eye lands on the numbers. **Hover/focus reveals the reserved underline in `--bs-primary` (verde)** and lifts the arrows from muted to verde — a binary "underline appears" signal that reads in both themes, where the older colour-only shift (`--bs-primary` → `--bs-primary-darker`) was imperceptible on cream and went the wrong way on dark. No layout shift (`border-bottom: 2px solid transparent` reserves the underline space at rest, so both hover and `.active` only toggle its colour). Verde hover underline + ocre active underline keeps the Verde-and-Ocre role split (verde = action, ocre = current page). Same pattern as Substack, Stripe Blog, Vercel Blog, NYT.

### Categories — the signature

- **Style:** `a.text-accent` rendered with the Editorial Label treatment — Archivo 600, 0.875rem, `text-transform: uppercase`, `letter-spacing: 0.08em`. Color is `--bs-accent` (bronze `#856814` light / vibrant `#C59922` dark). Hover transitions to `--bs-accent-darker` (`#5C440D` light / `#A8801C` dark) — AAA on respective bg.
- **Placement:** leads the card on listings, the post header on `single.html`, **and the featured-post hero on the home**. The home hero reorders to category → title → meta → summary so the kicker sits **above the fold**; the hero title is flush-left with it (the theme's `-10%` break-out overhang was removed). See `docs/THEME.md` History → 2026-05-29 "Ocre above the fold".
- **Why this is the signature component:** it's the one place where typography and color work together to produce the "magazine label" feel that defines the system's mood. It's also the workaround that makes the asymmetric accent ramp pass WCAG without losing brand warmth in light mode (see Section 2, *The Asymmetric-Ramp Rule*).

### Code Blocks

- **Style:** `background --eb-surface` (one tonal step up from body), `border-radius: 0`, **JetBrains Mono** (via Bootstrap's `--bs-font-monospace`, overridden in `_root.scss`), syntax-highlighted via Chroma class-based output. Two stylesheets shipped: `chroma-light.css` (manni style) and `chroma-dark.css` (dracula). The dark rules are wrapped under `[data-bs-theme="dark"]` and concatenated at build time into a single fingerprinted stylesheet with SRI integrity.
- **Inline `<code>`:** same `--eb-surface` background, `border-radius: 0`, JetBrains Mono. Used in body copy for variable names and short identifiers.

### Splide Slider (home featured post)

- **Vertical on ≥600px** (`direction: 'ttb'`), horizontal on `<600px`. Fixed `height: 450px` in vertical mode (do **not** pass `autoHeight: true` — actively breaks the track's clipping). Vertical pagination is thin-line dots on the right column; mobile pagination is circular dots at the bottom (10px round, `gap: 10px`, `transform: scale(1.2)` on `.is-active`).
- **Active dot color uses `--bs-primary`** (theme-aware), NOT `--eb-brand-solid` — because in dark mode `#004225` on `#0A1814` is nearly invisible, and the active dot's job is *visibility*, not branding. The single documented break in the "solid bg = always brand-solid" rule.

## 6. Do's and Don'ts

### Do

- **Do** use British Racing Green (`#004225` light, `#6FB089` dark text) for action — links, buttons, focus rings, headings.
- **Do** use Nugget Ocre (`#856814` bronze in light, `#C59922` vibrant in dark) for metadata — categories, dates, decorative lines.
- **Do** render every `a.text-accent` as an editorial label: uppercase, 600 weight, 0.08em letter-spacing, 0.875rem.
- **Do** keep `border-radius: 0` on every native surface. Buttons, cards, form controls, tag pills, code blocks, inline code, blockquotes.
- **Do** use Conservatory Cream (`#F2EFE3`) as the body background in light. Use Forest Floor (`#0A1814`) — green-tinted, not black — in dark.
- **Do** use tonal steps for depth (body → surface → surface-emphasis). Shadows are a state response, not an ambient layer.
- **Do** keep Archivo as the sole *text* family (headings, body, labels). JetBrains Mono is the one deliberate exception, scoped to code only.
- **Do** verify any new color pair against WCAG AA Normal (4.5:1) on the actual rendered substrate — both themes — before adding it to `_root.scss`. Update `docs/THEME.md` with the ratio.
- **Do** document the *why* of every visual decision inline (the codebase's posture; see `docs/THEME.md` history for the model).

### Don't

- **Don't** introduce gradients, glassmorphism, or backdrop-blur effects. The system is matte, flat, and committed to its color values; smooth gradient surfaces dilute the identity.
- **Don't** introduce a "secondary" or "tertiary" color outside the verde + ocre + cream palette. Three voices is enough. New roles get derived ramps within those three.
- **Don't** use pure white (`#FFFFFF`) on body surfaces. The only legitimate `#FFFFFF` is *text on `--eb-brand-solid`* (e.g. `.btn-primary`, dropdown active).
- **Don't** use pure black (`#000`). Use Verde Profundo (`#002E19`) for the darkest light-mode heading and Forest Floor (`#0A1814`) for the darkest dark-mode bg.
- **Don't** add ambient shadows to cards, modals, or panels. The single hover lift is the whole shadow vocabulary.
- **Don't** introduce additional border radii (4px, 8px, "pill" buttons). The all-square rule is the spec.
- **Don't** add a second *text* family. No serif "for editorial", no second sans. (JetBrains Mono for code is the one sanctioned non-text family — don't extend it to prose or labels.)
- **Don't** use `--bs-accent-lighter` as body text on cream in light mode. The token's *light* value is `#C59922` (vibrant nugget) — only 2.36:1 over cream, fails WCAG. In LIGHT it's reserved for **decorative-only** use (bg fills, borders, chips). In DARK the same token resolves to `#E5C572` and plays a **legitimate text role** (accent text on solid green panels, e.g. footer CTAs). Mind the asymmetric semantics: the *token* exists in both themes, but the *use-case* differs. If you need vibrant-ocre as text on cream, you can't — darken to `--bs-accent` (`#856814` bronze) and rely on the Editorial Label treatment for emphasis.
- **Don't** render category links as plain `<a>` text without the Editorial Label treatment. The label *is* the signature; plain ocre links lose the brand mark.
- **Don't** replicate the **AirSpace / Filterworld dev blog** template: gradient hero, equal-height card grid with icon-headline-summary, gray sans on white, decorative emoji. Anti-reference #1 from `PRODUCT.md`.
- **Don't** replicate the **SaaS landing-page cliché**: big-number-small-label hero metrics, gradient text on h1, glass cards on gradient bg, icons-in-circles, three-pricing-tiers section. Anti-reference #2.
- **Don't** drift toward **Material UI / corporate-dashboard** aesthetics: Roboto/Calibri on white, square-card grids of identical height, "functional but soulless". Anti-reference #3 — the one Giuliano explicitly named as the thing to escape.
- **Don't** overcorrect into **brutalist anti-design / Y2K revival**: intentionally broken typography, chaotic layouts, neon-on-black as statement. The blog is escaping the smooth *with craft*, not with chaos. Anti-reference #4.
- **Don't** ship anything that could plausibly be the first one-line-brief output of a code-generation model. The system's marks of identity are deliberate human decisions: the asymmetric accent ramp, the brand-solid-vs-brand-text split, the editorial-label categories. Match that bar.
- **Don't** edit hex values outside `assets/scss/_root.scss`. The implementation registry is the executable source of truth; this file (`DESIGN.md`) is the spec.
