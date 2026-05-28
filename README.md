# Personal Blog

Built with [Hugo](https://gohugo.io/) (static site generator). Deployed on Netlify.

## Requirements

- **Hugo Extended** — required because the project uses SCSS (`assets/scss/`). The non-extended version will fail to build.

## Install Hugo Extended (Windows)

The project uses `libsass` (a C library) for SCSS, so installing via `go install` does **not** work out of the box (it requires CGO + a C compiler). The easiest path is to use the precompiled binary.

1. Download `hugo_extended_X.Y.Z_windows-amd64.zip` from [github.com/gohugoio/hugo/releases/latest](https://github.com/gohugoio/hugo/releases/latest).
2. Extract `hugo.exe` into any folder on your `PATH`. If you have Go installed, `C:\Users\<your-user>\go\bin\` is already on `PATH` and works fine.
3. Open a **new** terminal and verify:

```powershell
hugo version
```

The output must include `+extended`, e.g. `hugo v0.x.x+extended windows/amd64`.

> Alternatives: `choco install hugo-extended`, `scoop install hugo-extended`, or `winget install Hugo.Hugo.Extended`.

## Run the dev server

From the project root:

```powershell
hugo server -D
```

- Serves the site at <http://localhost:1313/>
- `-D` includes posts marked as `draft: true`
- Auto-reloads on file changes

> **Note on drafts**: A few posts in `content/blog/` have `draft = true` — they serve as personal markdown references (`_markdown-reference.md`, `new-post.md`, `post-10.md`). The `-D` flag shows them locally; the Netlify build (`hugo` without `-D`) ignores them. To see exactly what visitors see, run `hugo server` (without `-D`).

## Write a new post

Posts are [Hugo Page Bundles](https://gohugo.io/content-management/page-bundles/) — each one is a directory `content/blog/<slug>/` containing `index.md` and its images at the same level.

```powershell
hugo new blog/<kebab-case-slug>/index.md
```

The archetype (`archetypes/default.md`) generates a post with full TOML front matter pre-filled and a markdown cheatsheet in an HTML comment block — delete the comment block before publishing. For a complete reference of every supported feature (headings, code blocks with highlight, mermaid diagrams, tables, footnotes, etc.), see `content/blog/_markdown-reference.md`.

## Build for production

```powershell
hugo --minify --gc
```

Generates the static site in `public/` — the same command Netlify runs (see `netlify.toml`).

