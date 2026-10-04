// RSS feed — replaces the Hexo `hexo-generator-feed` output.
// Available at `/rss.xml` once a site URL is configured
// (`site` in astro.config.mjs or `url` in src/config.ts).
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../config';

export async function GET(context: APIContext) {
  const base = context.site ?? (site.url ? new URL(site.url) : undefined);

  if (!base) {
    return new Response(
      'RSS feed is disabled. Set `site` in astro.config.mjs to enable it.',
      { status: 404, headers: { 'Content-Type': 'text/plain' } },
    );
  }

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: site.title,
    description: site.description,
    site: base,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.id}/`,
    })),
    customData: `<language>${site.language}</language>`,
  });
}
