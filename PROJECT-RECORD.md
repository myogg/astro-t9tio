# PROJECT RECORD

## Current baseline
- Main was restored on 2026-11-23 to the pre-merge baseline commit `89c8d918b35b90691b5444e772966920982a4d64`.
- Pre-rollback snapshot preserved on branch `backup-before-rollback-2026-11-23` (starting SHA `d5f374412fdacbae51721beefe0cf7f4691917ca`).

## 2026-11-23 changes
- `src/pages/index.astro`: increased homepage article-list item bottom spacing from 15px to 28px.
- `src/content/blog/`: removed the original 318 Markdown articles at the user's request; theme and site functionality were retained.
- Added TRMNL.Bar introduction: `src/content/blog/2026-11-23-trmnl-bar-desktop-dashboard.md`. The article includes both user-provided images and the project link. It was shortened at the user's request.
- Added NVIDIA SimReady Assets article: `src/content/blog/2026-11-23-nvidia-simready-assets.md`. Includes user-provided MP4 via native HTML5 video player and source links. The article distinguishes the original post's 2,575 assets / 472GB from the later Hugging Face page count of 2,919 assets / 518GB.

## Commits
- Homepage spacing: `3568a4ec5cc42ed7ca7b1e954a9083358abde65b`.
- Remove 318 articles: `f5ea241de4105b27d909229062e6e36712b0f90e`.
- Codex2API security article: `259bd6fc25eb9d8d804497ed84d879a9aba41ee3`.
- TRMNL.Bar article: `cfaec24dfc679446522e218c69bfd1d27ed85630`.
- NVIDIA SimReady Assets article: `b9d788adc4220f661d81368f340e4306502df346`.

## Deployment
- User confirmed the prior rollback deployment succeeded.
- Deployment status for the latest article commits has not yet been independently verified.

## Notes
- Article content removed from the current `main` tree was not erased from Git history. Existing Git history and the backup branch retain earlier versions.


## 2026-11-23 article heading consistency
- Removed the duplicate leading H1 from `src/content/blog/2026-11-23-codex2api-supply-chain-incident.md` and `src/content/blog/2026-11-23-trmnl-bar-desktop-dashboard.md`. The frontmatter `title` remains the sole page-level article title; body section headings continue from `##`.
- Codex2API content commit: `9bb08d5f6733411f5a85ab5e39148b23be111f56`.
- TRMNL.Bar content commit: `e20732bb9a2d241c4c271ccdbdca3a8c0be7ca56`.
- Deployment status: not yet verified.


## Permanent article authoring rule (2026-11-23)
- The article page template renders the page-level title from frontmatter `title`. Do not repeat that title as a leading Markdown H1 (`# ...`) in the article body.
- Article body content should begin directly with prose or media. Use `##` for the first section heading and `###` for subsections.
- Before publishing or updating any Markdown article, inspect the body after the closing frontmatter delimiter and check for a duplicate leading H1, especially one matching the frontmatter title. Remove or correct duplicates before commit.
- After publishing, verify the rendered article page shows exactly one page-level title.
- This is a standing content rule for all future articles in `myogg/astro-t9tio`, not just the three articles from 2026-11-23.


## 2026-11-23 Illacrimo theme migration to main

- User requested that ongoing work use `main` directly rather than a separate test branch.
- Migrated the responsive Illacrimo-inspired site frame and stylesheet to `main`, while retaining the current `main` history, article collection, homepage spacing, TTS, Giscus, RSS, and Cloudflare Worker configuration.
- Added `src/components/IllacrimoFrame.astro` and `src/styles/illacrimo.css`.
- Updated `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, and `src/pages/[...slug].astro` to use the shared frame.
- Updated site branding to `Jreely'blog` and set the document language to Chinese; removed the header subtitle/tagline per the user's prior instruction.
- Added the fiber-optic drone / bird-nest article at `src/content/blog/2026-11-23-guangxian-wurenji-guangxianniaochao.md`.
- Added locally stored WebP assets under `public/images/articles/`: `fiber-optic-bird-nest.webp` and `fiber-optic-drone.webp`. Article references use local paths; source and license credits are retained.
- The current `main` commit before migration was `123706dc4458c29dbf3050bb69c142aa38dfa68c`. Migration is based on that commit, not on the old test-branch base.
- Production deployment and responsive visual review must be verified after the main-branch commit.

- Main migration commit: `3a3952f73d3f4c9ef7388e4ae78ca617ca15183e`.
