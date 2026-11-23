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
