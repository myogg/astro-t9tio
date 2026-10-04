# t9t-blog-astro

An [Astro](https://astro.build) port of the `t9t-blog-hexo` Hexo theme
([source](https://github.com/t9tio/blog/tree/master/themes/t9t-blog-hexo)).

The visual output is intentionally identical to the original theme — the three
original stylesheets are reused unchanged.

## Requirements

- Node.js 18.17+ (or 20+)

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build to ./dist
npm run preview  # preview the production build
npm run check    # type-check .astro files
```

## Project structure

```
src/
├── config.ts              # site title, subtitle, menu, integrations
├── content.config.ts      # blog collection schema (frontmatter validation)
├── content/blog/          # markdown posts (file name = URL slug)
├── layouts/
│   └── BaseLayout.astro   # <html>, <head>, footer, analytics
├── components/
│   ├── Header.astro       # index header
│   ├── Menu.astro         # optional nav bar from site.menu
│   ├── PostCard.astro     # post excerpt card
│   └── Footer.astro
├── pages/
│   ├── index.astro        # post list
│   ├── [...slug].astro    # single post
│   └── rss.xml.ts         # RSS feed
├── styles/                # bulma.css, blog.css, index.css (original, unchanged)
└── utils/date.ts
```

## Hexo → Astro mapping

| Hexo | Astro |
| --- | --- |
| `layout/layout.ejs` | `src/layouts/BaseLayout.astro` |
| `_partial/head.ejs` | head section of `BaseLayout.astro` |
| `_partial/footer.ejs` | `src/components/Footer.astro` |
| `_partial/header.ejs` | `src/components/Header.astro` |
| `_partial/menu.ejs` | `src/components/Menu.astro` |
| `_partial/article-excerpt.ejs` | `src/components/PostCard.astro` |
| `layout/index.ejs` | `src/pages/index.astro` |
| `layout/post.ejs` | `src/pages/[...slug].astro` |
| Hexo `_config.yml` | `src/config.ts` + `astro.config.mjs` |
| `hexo-generator-feed` | `src/pages/rss.xml.ts` |

## Writing a post

Create a markdown file in `src/content/blog/`:

```markdown
---
title: My Post
date: 2020-03-01
description: Shown as the meta description and on excerpt cards.
tags: [notes]
---

Your content here.
```

The file name (`my-post.md`) becomes the URL (`/my-post/`). Set `draft: true`
to keep a post out of the build.

## Configuration

Edit `src/config.ts`:

| Field | Purpose |
| --- | --- |
| `title` / `description` | Default document title and meta description |
| `subtitle` | Text shown under the header (empty hides it) |
| `author` / `authorUrl` | `<meta name="author">`, footer byline and post byline link |
| `url` | Absolute site URL if you don't set `site` in `astro.config.mjs` |
| `menu` | Links rendered by `<Menu />` |
| `excerptLink` | Label for the "read more" link on `PostCard` |
| `disqusShortname` | Disqus shortname — **empty disables comments** |
| `googleAnalytics` | GA measurement ID — **empty disables analytics** |

Also update `site` in `astro.config.mjs` to your production URL.

## Differences from the Hexo original

- **Comments & analytics are off by default.** Set `disqusShortname` /
  `googleAnalytics` in `src/config.ts` to enable them.
- The feed is served at `/rss.xml` instead of `/atom.xml`. It stays disabled
  (404) until a site URL is set in `astro.config.mjs`.
- `Menu` and `PostCard` are provided as opt-in components; the original theme
  defined them but did not render them on any page.
- Branding (title, author, footer links) lives in `src/config.ts`; the
  original theme's Twitter/Sponsor links were removed.
