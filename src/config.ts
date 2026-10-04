/**
 * Global site configuration — the Astro equivalent of the Hexo site
 * `_config.yml` + theme `_config.yml` combined.
 *
 * Edit this file to customise the theme. No other file needs to change for
 * the common cases (title, menu, integrations).
 */
export interface SiteConfig {
  /** Default document title (used when a page has no title of its own). */
  title: string;
  /** Shown under the header on every page. Leave empty to hide. */
  subtitle: string;
  /** Default meta description. */
  description: string;
  /** Written into the `<meta name="author">` tag and post byline fallback. */
  author: string;
  /** Optional link used for the post byline fallback. */
  authorUrl: string;
  /** `<html lang>` value. */
  language: string;
  /** Absolute site URL, used for RSS links. Keep in sync with astro.config.mjs. */
  url: string;
  /** Navigation links rendered by the optional `Menu` component. */
  menu: Record<string, string>;
  /** Label for the "read more" link on excerpt cards. */
  excerptLink: string;
  /** Disqus shortname. Leave empty to disable comments. */
  disqusShortname: string;
  /** Google Analytics measurement ID (e.g. `G-XXXXXXX`). Leave empty to disable. */
  googleAnalytics: string;
}

export const site: SiteConfig = {
  title: "Jreey's blog",
  subtitle: '',
  description: "Jreey's personal blog",
  author: 'Jreey',
  authorUrl: 'https://github.com/myogg',
  language: 'en',
  url: '',
  menu: {
    Home: '/',
  },
  excerptLink: 'Read More',
  // Integrations are opt-in. Fill these in to enable them.
  disqusShortname: '',
  googleAnalytics: '',
};
