# PROJECT-RECORD

## Current work: Illacrimo-inspired theme redesign

- Repository: `myogg/astro-t9tio`
- Working branch: `illacrimo-theme-rebuild`
- Production branch: `main`
- Base commit: `89c8d918b35b90691b5444e772966920982a4d64`
- Design reference: Illacrimo Plus 2.0.4 (2008-era WordPress theme)
- Goal: vivid navy / cyan / white palette, three-column desktop layout, animated sidebars, single-column mobile layout.
- Preserve Astro Content Collections, TTS player and Worker proxy, Giscus comments, RSS, and footer links.

## Files changed

| File | Change |
|---|---|
| `src/components/IllacrimoFrame.astro` | Shared header, desktop columns, recent-post rail, archive/meta rail |
| `src/styles/illacrimo.css` | Illacrimo-inspired palette, responsive layout, sidebar entrance animation, article and footer styling |
| `src/layouts/BaseLayout.astro` | Load theme stylesheet; set Chinese document language and theme color |
| `src/pages/index.astro` | Render homepage inside shared frame |
| `src/pages/[...slug].astro` | Render article pages inside shared frame; retain TTS and Giscus |
| `README.md` | Update project description and structure |
| `.github/workflows/astro-ci.yml` | Run npm ci, Astro check, and Astro build on branch pushes and PRs |
| `.github/workflows/illacrimo-check.yml` | Additional branch validation workflow |
| `src/content/blog/2026-11-23-guangxian-wurenji-guangxianniaochao.md` | Add Chinese article on fiber-optic drone cables and bird nests; embed two credited source images |

## Verification and deployment

- All theme work is on `illacrimo-theme-rebuild`; `main` remains unchanged until PR #3 is merged.
- PR #3: `https://github.com/myogg/astro-t9tio/pull/3`.
- Existing branch CI run #6 (`45098291942`) passed: install, `npm run check`, and `npm run build`.
- The repository's Cloudflare Worker configuration uses Wrangler with Worker name `astro-t9tio` and static assets in `dist`.
- User confirmed Cloudflare automatically builds/deploys when the connected production branch in this repository is changed. The intended production path is therefore to update `main`, not create a second Worker.
- Before production deployment, preserve the current Cloudflare production version so it can be rolled back if necessary.
- Production Worker hostname: `astro-t9tio.xxjss.workers.dev`; custom domain: `jiangnana.dpdns.org`.
- Deployment after merging PR #3 must be verified in Cloudflare before claiming success.
- Desktop, tablet, and phone visual review remains outstanding.
- Sidebar motion is a CSS implementation inspired by Illacrimo Plus; exact parity with the original WordPress animation is not verified.
- 2026-11-23 article commit: `b4c9818bda53221efd84c05bcfc0e7f520d171d9`.
- The two article images are embedded from the original National Geographic Media image CDN with visible source/license credits; the binary image files were not copied into this repository.
- The article is on the working branch only; production deployment is not verified.

## Recent commits

- Added preview workflow temporarily, then removed it after confirming the user wants to use the existing Cloudflare production build path:
  - add: `be382db49a0d716949e85c3ffa261563b7a61912`
  - remove: `411561db720a0cbedfcce910df81677528d3bdc5`
- Project record updated to reflect the existing Cloudflare deployment workflow.

## 2026-11-23 article image localization

- Article: `src/content/blog/2026-11-23-guangxian-wurenji-guangxianniaochao.md`.
- Added dedicated article image directory: `public/images/articles/`.
- Added `fiber-optic-bird-nest.webp` and `fiber-optic-drone.webp`; optimized WebP assets, 640px maximum width.
- Replaced both third-party CDN image references with local `/images/articles/...` paths.
- Image source and license credits remain in the article.
- Image blobs: nest `b2219c631a68dee58017655c7b758483354198e6`; drone `2515f11a237adb8dd4952b010aef5ba73ae0ca93`.
- Image tree commit: `89e02e72cb59ca0b4b5d032788e7053be6ece390`.
- Article reference update commit: `a63dfb4c8d2a84b0c0614abc0d39fd7352de7d1f`.
- All changes remain on `illacrimo-theme-rebuild`; production branch `main` was not changed. Deployment must be checked separately.
