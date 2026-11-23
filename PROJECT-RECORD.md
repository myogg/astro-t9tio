# PROJECT-RECORD

## Current work: Illacrimo-inspired theme redesign

- Repository: `myogg/astro-t9tio`
- Working branch: `illacrimo-theme-rebuild`
- Base branch: `main`
- Base commit: `89c8d918b35b90691b5444e772966920982a4d64`
- Design reference: Illacrimo Plus 2.0.4 (2008-era WordPress theme)
- Goal: vivid navy / cyan / white palette, three-column desktop layout, animated sidebars, single-column mobile layout.
- Content and integrations are to remain intact: Astro Content Collections, TTS player and Worker proxy, Giscus comments, RSS, and footer links.

## Files changed

| File | Change |
|---|---|
| `src/components/IllacrimoFrame.astro` | New shared header, desktop columns, recent-post rail, archive/meta rail |
| `src/styles/illacrimo.css` | New Illacrimo-inspired palette, responsive layout, sidebar entrance animation, article and footer styling |
| `src/layouts/BaseLayout.astro` | Load the new theme stylesheet; set Chinese document language and theme color |
| `src/pages/index.astro` | Render homepage inside the shared frame |
| `src/pages/[...slug].astro` | Render article pages inside the shared frame; retain TTS and Giscus |
| `README.md` | Update project description and structure |

## Commits

- `0457bf8f5671469675d02c813415446779d36269` — add Illacrimo frame
- `f29997f7685388565f05a83bca4c2d896a85b77e` — add responsive theme CSS
- `72ab210d5556a4cce2c8cc3dcc021d4ae6c585f3` — update base layout
- `0b525ae190028e597baf30cd2ae9e9b6199132e6` — update homepage
- `259a29c8680e30cc4fd3d3f2a2b57cbf5755c9a5` — update article layout
- `4d1e5f197de76283a10c35fa0b8318d4c4774ed2` — refine frame links and branding
- `c8d996cb600c0bfdf82682a776b8fa23b8fbc067` — polish theme CSS
- README update: `9671d1ce74d34f7896a9c92f7db624693aad4faa`

## Deployment and verification

- Code is on the isolated test branch; `main` has not been changed.
- Build status: **not yet verified**. This repository currently has no GitHub Actions workflow in its tree; run `npm ci`, `npm run check`, and `npm run build` before merging or deploying.
- Visual review still needed at desktop, tablet, and phone widths.
- The sidebar entrance animation is a CSS implementation inspired by the original behavior; exact pixel/timing parity with the original WordPress script has not yet been verified.
