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

## 2026-11-23 fiber-optic drone / bird-nest article published separately
- After reverting the incorrect theme migration, the article was restored to `main` as a standalone content change; no theme files were merged.
- Added `src/content/blog/2026-11-23-guangxian-wurenji-guangxianniaochao.md`.
- Added local WebP assets: `public/images/articles/fiber-optic-bird-nest.webp` and `public/images/articles/fiber-optic-drone.webp`; the article uses repository-local image paths and retains source/license credits.
- Commit: `21f43ad466831080fafbe57d535f62125a640838`.
- Deployment status: not yet verified.
- Branch `illacrimo-theme-rebuild`: deletion is still pending; do not merge it into `main`.

## 2026-11-24 Telegram 13.3 article and image
- Added `src/content/blog/2026-11-24-telegram-13-3-update.md` to `main`; the article uses the repository-local image `/images/articles/telegram-13-3-update.webp`.
- Added the supplied Telegram screenshot as `public/images/articles/telegram-13-3-update.webp` (WebP, approximately 7 KB).
- Article content commit: `fc60afe4ec4ba05dc563ef7a9a08f1a73266cf48`; project-record update: `ea201b09802eac60773b28562d50de1ae2509149`.
- Image commit: `6d5c068f817390f38d14ddf2bf38152ce27ff8fe`.
- Deployment status: not yet verified.

## 2026-11-24 Telegram Bot API 10.5 article and image
- Added `src/content/blog/2026-11-24-telegram-bot-api-10-5.md` to `main`; it references the repository-local image `/images/articles/telegram-bot-api-10-5.webp`.
- Added the user-supplied banner as `public/images/articles/telegram-bot-api-10-5.webp` (WebP, 1200px wide, 10,860 bytes).
- Astro article, image, and this project-record update were committed together: `cae59f4ea93caf82fe00f9ecd7e83d5aa3d325e5`.
- Deployment status: not yet verified.


## 2026-11-28 — Windows built-in device drivers article
- Added `src/content/blog/2026-11-28-microsoft-windows-inbox-drivers.md` to `main`.
- Article title: 微软推进以 Windows 内置驱动取代部分第三方驱动.
- Commit: `66e576a1a808e0e09280cee47e3520e18ef92365`.
- Based on the user's Chinese source text and TechSpot's report published Nov 27, 2026: https://www.techspot.com/news/114721-microsoft-wants-replace-most-third-party-device-drivers.html.
- Covers Windows Ready Print, SoundWire, SDCA, I3C, USB Ethernet, MIPI camera class drivers, and Microsoft's Driver Quality Initiative (DQI). No unsupported claim that third-party drivers will immediately disappear.
- No image was supplied, so no image asset was added.
- No theme, layout, CSS, configuration, homepage, or existing article files were changed.
- Deployment status: not yet verified; the article commit is on `main`, but the Cloudflare deployment and rendered page still need checking.
