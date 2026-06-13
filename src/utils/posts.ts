import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/**
 * Get all posts for a specific language, sorted by date in descending order.
 * In production, draft posts are filtered out.
 */
export async function getPosts(lang: string = 'en'): Promise<Post[]> {
  const allPosts = await getCollection('posts');

  return allPosts
    .filter(
      (post) =>
        (import.meta.env.DEV || !post.data.draft) && post.data.lang === lang
    )
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
