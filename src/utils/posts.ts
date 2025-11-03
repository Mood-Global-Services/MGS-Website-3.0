import "server-only";
import { sanity } from "@/utils/sanity.server";
import {
  POSTS_LIST,
  POST_BY_SLUG,
  type PostListItem,
  type PostFull,
} from "./queries";

export async function getPosts(
  options?: { revalidateSeconds?: number }
): Promise<ReadonlyArray<PostListItem>> {
  const revalidateSeconds = options?.revalidateSeconds ?? 60;
  const posts = await sanity.fetch<ReadonlyArray<PostListItem>>(
    POSTS_LIST,
    {},
    { next: { revalidate: revalidateSeconds } }
  );
  return posts;
}

export async function getPost(
  slug: string,
  options?: { revalidateSeconds?: number }
): Promise<PostFull | null> {
  const revalidateSeconds = options?.revalidateSeconds ?? 60;
  if (slug.trim().length === 0) return null;

  const post = await sanity.fetch<PostFull | null>(
    POST_BY_SLUG,
    { slug },
    { next: { revalidate: revalidateSeconds } }
  );

  return post;
}

export async function getLatestPosts(
  limit = 3,
  options?: { revalidateSeconds?: number }
): Promise<ReadonlyArray<PostListItem>> {
  const all = await getPosts({ revalidateSeconds: options?.revalidateSeconds });
  return all.slice(0, Math.max(0, limit));
}

export async function getAllPostSlugs(
  options?: { revalidateSeconds?: number }
): Promise<ReadonlyArray<string>> {
  const posts = await getPosts({ revalidateSeconds: options?.revalidateSeconds });
  return posts.map((p) => p.slug);
}
