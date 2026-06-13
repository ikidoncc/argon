import rss from '@astrojs/rss';
import { getPosts } from '../utils/posts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const site = context.site
    ? context.site.toString()
    : 'https://ikidoncc.github.io/argon/';

  return rss({
    title: 'Argon',
    description:
      'Exploring technology, science, and lifelong learning. Argon is a personal blog and knowledge repository where I share articles, notes, experiments, and insights about software engineering, computer science, mathematics, physics, and anything else worth understanding.',
    site: site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description:
        post.data.description ||
        `${post.data.title} - Argon technical article.`,
      link: `argon/posts/${post.data.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
