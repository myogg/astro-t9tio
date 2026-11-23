# PROJECT RECORD

## Current baseline
- Main was restored on 2026-11-23 to the pre-merge baseline commit `89c8d918b35b90691b5444e772966920982a4d64`.
- Pre-rollback snapshot preserved on branch `backup-before-rollback-2026-11-23` (starting SHA `d5f374412fdacbae51721beefe0cf7f4691917ca`).

## 2026-11-23 changes
- `src/pages/index.astro`: increased homepage article-list item bottom spacing from 15px to 28px; preserved valid Astro frontmatter and markup.
- `src/content/blog/`: removed all 318 Markdown article files at the user's request; theme, layouts, components, configuration, styles, and site code were retained.

## Commits
- Homepage spacing: `3568a4ec5cc42ed7ca7b1e954a9083358abde65b`.
- Remove 318 articles: `f5ea241de4105b27d909229062e6e36712b0f90e`.

## Deployment
- User confirmed the prior rollback deployment succeeded.
- The homepage-spacing and article-removal commits were pushed to `main`. A Codex2API supply-chain security alert was added on 2026-11-23; deployment for the latest article commit has not yet been independently verified.

- Security alert article: `src/content/blog/2026-11-23-codex2api-supply-chain-incident.md` (commit `259bd6fc25eb9d8d804497ed84d879a9aba41ee3`).

## Notes
- Article content was removed from the current `main` tree, not erased from Git history. Existing Git history and the backup branch retain the earlier versions.