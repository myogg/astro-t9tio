# PROJECT-RECORD

## Current work: Illacrimo-inspired theme redesign

- Repository: `myogg/astro-t9tio`
- Working branch: `illacrimo-theme-rebuild`
- Base branch: `main`
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

## Verification and deployment

- All work remains on `illacrimo-theme-rebuild`; `main` has not been changed or merged.
- CI workflow was added in commit `2e3e557a252698140ed40de5738b9fab17a404ff`.
- GitHub Actions run #2 (`45098110792`) was observed as **in progress** at the time of this update. Do not mark the build as passed until its conclusion is confirmed.
- Earlier notes referred to run #1, but its result could not be independently confirmed from the current workflow-run lookup.
- Desktop, tablet, and phone visual review remains outstanding.
- Sidebar motion is a CSS implementation inspired by Illacrimo Plus; exact parity with the original WordPress animation is not verified.
- No Cloudflare preview URL has been verified yet.
