# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm**.

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Run dev server at `localhost:4321` |
| `pnpm build` | Static build to `./dist/` (requires Contentful env vars) |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Type-check Astro + TypeScript (no separate lint/test setup) |

There is no test suite, linter, or formatter configured.

## Environment

Build/runtime requires three Contentful variables, copied from `.env.template` to `.env`:

```
CONTENTFUL_SPACE
CONTENTFUL_ACCESSTOKEN
CONTENTFUL_ENVIROMENT    # NOTE: misspelled "ENVIROMENT" on purpose — matches the
                         # GitHub Actions secret name and every read site in code.
                         # Do not "fix" the spelling without updating all call sites
                         # and the repo's GHA secret.
```

Without these, `pnpm build` and `pnpm dev` will fail when rendering any page that calls Contentful.

## Architecture

Astro 5 **static site** (no SSR adapter) deployed to GitHub Pages.

### Content pipeline — Contentful, not Astro content collections

This is the most important thing to know: blog posts are **not** local Markdown files. They come from Contentful at build time.

- `src/pages/index.astro`, `src/pages/blog/index.astro`, and `src/pages/blog/[...slug].astro` each instantiate a `contentful.createClient(...)` inline in the frontmatter and call `client.getEntries()`. There is no shared client module.
- `src/pages/blog/[...slug].astro` is the dynamic blog post route. `getStaticPaths()` pulls every Contentful entry and uses `post.sys.id` as the slug, so blog URLs are `/blog/<contentful-entry-id>/`.
- Post body lives in the Contentful field `markdown` (with `content` as a legacy fallback). It is rendered to HTML with `marked` and injected via `set:html`. Per the recent commit (`236db9b Switch from Contentful rich text to markdown rendering`), the rich-text renderer was replaced — prefer the `markdown` field for new work.
- `src/components/BlogCard.astro` expects the Contentful entry shape (`post.sys.id`, `post.fields.title`, `post.fields.heroImage.fields.file.url`), not Astro's `CollectionEntry<'blog'>`.

### Vestigial Astro-blog-template pieces

The project was scaffolded from `astro@latest --template blog`, and a few pieces of that template remain wired up but **do not match the Contentful pipeline**:

- `src/content.config.ts` declares a `blog` collection pointing at `src/content/blog/**/*.{md,mdx}`. That directory does not exist; the schema is unused at runtime.
- `src/pages/rss.xml.js` builds the RSS feed from `getCollection('blog')`, so the feed will currently be empty. Switch it to Contentful before relying on it.
- `src/layouts/BlogPost.astro` is typed as `CollectionEntry<'blog'>['data']` but is actually called with props derived from a Contentful entry in `[...slug].astro`. The types don't line up — treat the layout's `Props` type as aspirational.

When adding new blog functionality, follow the Contentful pattern in the existing pages rather than the Astro content-collection pattern from the template docs.

### Pages and components

- `src/pages/index.astro` — portfolio landing page; pulls latest 3 Contentful posts for the "Latest Blog Posts" section. Projects/skills are a hardcoded array inside the frontmatter.
- `src/pages/blog/index.astro` — full post list; renders `SearchBar` plus a list of `BlogCard`s.
- `src/components/SearchBar.astro` — **client-side only** title filtering. It runs in a `<script>` block on the rendered page, querying `#postsList .post-item .blog-card-title` text. If you rename those classes/IDs, the search breaks.
- `src/components/BaseHead.astro`, `Header.astro`, `Footer.astro`, `HeaderLink.astro`, `FormattedDate.astro` — generic shell components.
- `src/styles/global.css` defines the CSS custom properties (`--text`, `--bg`, `--card-bg`, `--accent`, `--shadow-*`, etc.) that every component pulls from.

### Site config

- `astro.config.mjs` sets `site: 'https://noplab.github.io'` and enables `mdx()` and `sitemap()` integrations.
- `src/consts.ts` holds `SITE_TITLE` / `SITE_DESCRIPTION` (Japanese; this is a Japanese-language portfolio).

### Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main` (and via `workflow_dispatch`). Node 18, pnpm latest. The three `CONTENTFUL_*` repository secrets are required for the build job to succeed.
