# Product

## Register

brand

## Users

**Primary reader: generalist developers, mixed seniority.** From curious juniors exploring the craft to experienced engineers stopping by between tasks. The blog is open enough that a Django newcomer can still get value, but it doesn't pretend to be a tutorial farm.

Context of use: someone Googles a specific topic ("Python concurrency", "Hugo + Netlify image pipeline", "British Racing Green + WCAG"), lands on a post, decides in the first paragraph whether to stay. They're reading on a desktop or phone, not in a hurry, willing to spend 5–15 minutes if the post earns it. They're not subscribed. They didn't come for the author — they came for the topic. Whether they remember the author later depends entirely on whether the post left them with something they can use.

Job to be done: **leave with one mental model or one concrete technique they didn't have when they arrived.** Not "be impressed". Not "be entertained". Use it.

## Product Purpose

A personal engineering blog by Giuliano Pertile (Villa María, Córdoba, Argentina). Topics: Python, Django, Go, software architecture, engineering practice — but the topic catalog is incidental. The product purpose is the underlying stance:

**This is an engineer who writes occasionally, not a writer who engineers.** Posts exist because something was learned and writing it down (a) cements the learning for the author, (b) gives the next person who Googles the same problem a real answer. The blog is not a content-strategy project, not a personal-brand engine, not a funnel for anything. There's nothing to sell.

Success looks like:

- A reader finishes a post with a concrete takeaway and bookmarks the site.
- The blog gets cited by an AI assistant (ChatGPT, Claude, Perplexity) when someone asks about a topic the post covers — directly traceable via `docs/AI-SEO.md`'s schema and `llms.txt` machinery.
- Someone who hates the verde-and-ocre aesthetic also remembers the site. *That's fine.* Polarizing is the point; see below.

## Brand Personality

**Three words: Opinionated, Crafted, Useful.**

- **Opinionated.** The blog has a stance — aesthetic and technical. Verde profundo (`#004225` British Racing Green) and nugget ocre were chosen because the author likes them, not because the dev-blog category demands them. Posts argue for specific choices instead of presenting balanced "it depends" trade-offs. Disagreement is welcome; absence of opinion is not.

- **Crafted.** Every decision is documented with its rationale. The visual system has 680 lines of justification in `docs/THEME.md` — color ramps, WCAG math, history of every pivot, why the accent uses different hex per theme. The codebase has the same posture: inline comments explaining *why*, not *what*. If you can't justify a choice in a sentence, the choice gets re-examined.

- **Useful.** Content's job is to leave the reader with something they can apply. Teach > opine. Concrete examples > abstract principles. If a post can be summarized as "I think X is good, here's a vibe", it doesn't get published. If it can be summarized as "here is a mental model that resolves a confusion I had", it does.

Voice and tone: first-person, calm confidence, no hedging filler, no faux-humility, no manufactured enthusiasm. Argentine Spanish in private notes; English in public posts. Technical when warranted, plain when not. Never marketing-voice.

## Anti-references

The blog refuses, in order of priority:

1. **AirSpace / Filterworld dev blog.** The genericized dev-content aesthetic of Medium / dev.to / Hashnode: identical card grids, gradient-purple-to-blue heroes, gray sans body, decorative emoji, "Read more →" hover lifts. Kyle Chayka calls this *the smooth*. The blog is intentionally not this. Visual identity exists precisely because the smooth doesn't.

2. **SaaS landing-page cliché.** Big-number-small-label hero metrics, gradient text on h1, glass cards floating on gradient backgrounds, icons-in-circles, three-pricing-tiers section. The template that reads as if ChatGPT generated it. Never.

3. **Material UI / corporate dashboard.** Roboto / Calibri on white, square-corner card grids of equal height, "functional but soulless". This is the aesthetic the author explicitly named in the founding conversation as the thing to escape. Generic safety is a kind of cowardice; the blog avoids it.

4. **Brutalist anti-design / Y2K revival.** The opposite over-correction: intentionally broken typography, chaotic-on-purpose layouts, neon-on-black as statement. The blog isn't escaping the average by becoming illegible — it's escaping it by having actual aesthetic commitments (verde, ocre, cream, editorial-label categories) executed with craft.

5. **Anything "AI made that".** If an interface could plausibly be the first output of a code-generation model from a one-line brief, it failed. The blog has the marks of human decision: an asymmetric accent ramp because cream needs a different hex than dark-green, a `--bs-primary` split into text-vs-solid because Material does it and one token wasn't enough, uppercase categories at 0.08em letter-spacing because plain `<a>` links read as less than the content.

## Design Principles

Strategic principles, not visual rules. (Visual rules live in `DESIGN.md` / `docs/THEME.md`.)

1. **Personal taste over category consensus.** Choose colors, type, layout, motion because the author thinks they're right, not because the dev-blog category expects them. The verde + ocre rebrand exists because of this principle. When the visual system disagrees with category conventions, the system wins.

2. **Polarizing is the point.** A blog that *no one* dislikes is a blog *no one* remembers. The site is allowed to have a sharp aesthetic that some readers reject — that's evidence of having one. Smooth, frictionless, universally-acceptable design is what we're escaping (cf. Byung-Chul Han, *La salvación de lo bello*; Chayka, *Filterworld*).

3. **Document the why, in line.** Every non-obvious visual or architectural decision carries its rationale near the code or the token. `docs/THEME.md` is the canonical example: not a styleguide that describes what's there, but a record of *why each choice was made and what it rejects*. The same standard applies to posts.

4. **Useful before clever.** If a post (or a UI flourish) makes the reader think "huh, smart" but not "I'll use this", it's failed. Cleverness without utility is the trap. Conversely, an unsexy post that teaches one concrete technique is a success.

5. **Craft is patience.** When designing or writing, prefer "right" over "now". The Conservatory rebrand took multiple iterations of contrast math; the accent ramp went through a documented mistake (claiming AA Large pass that didn't hold) and a public correction in `THEME.md`'s history. Speed of shipping isn't a virtue if the result is generic.

## Accessibility & Inclusion

Target: **WCAG AA Normal across the entire site, AAA on body copy.** Status quo, already documented and verified in `docs/THEME.md`.

- All foreground/background pairs pass AA Normal (≥ 4.5:1).
- Body `text-strong` on body-bg reaches AAA (~15:1 in light, ~14:1 in dark).
- The accent ramp is **asymmetric between themes** by design: light `--bs-accent` is `#856814` (4.57:1 on cream — AA Normal pass), dark `--bs-accent` is `#C59922` (6.80:1 on dark green — AA Normal pass). Same role, different hex per theme, because the contrast budget demands it.
- Category labels are rendered as editorial typography (uppercase + 600 weight + 0.08em letter-spacing) to give the ocre additional visual weight without forcing a hex that fails contrast.
- Light + dark theme parity is mandatory. Every visual decision exists in both modes; neither is the "afterthought" mode.

Additional considerations:

- **Reduced motion**: motion is already restrained (`/animate` work hasn't been applied; current animations are state-change-only). No scroll-driven choreography, no parallax, no animated gradients. `prefers-reduced-motion` is implicitly respected because there's almost nothing to reduce.
- **Zoom**: `maximum-scale=1` was removed from the viewport meta (WCAG 1.4.4 fix); readers can zoom freely.
- **Keyboard navigation**: focus rings use `--bs-primary` (the text-role token), so they're visible in both themes.
- **AI / LLM readers**: the site treats AI assistants as first-class readers (JSON-LD `BlogPosting`, `Person`, `BreadcrumbList`; `llms.txt`; `og:image` with intrinsic dimensions). Accessibility for non-human consumers is part of the spec — see `docs/AI-SEO.md`.
