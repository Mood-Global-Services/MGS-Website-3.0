import { NextResponse, type NextRequest } from "next/server";
import groq from "groq";
import { sanity } from "@/utils/sanity.server";


type Category = { _id: string; title: string };
type Author = { _id: string; name: string };
type ResolvedImage = { url: string; alt?: string } | null;

export type ArticlesQuery = {
  offset: number;
  limit: number;
  q?: string;
  categoryId?: string;
  author?: string;
};

export type ArticleRow = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  mainImage: ResolvedImage;
  author: Author | null;
  categories: ReadonlyArray<Category>;
};

export type ArticlesResponse =
  | {
      ok: true;
      total: number;
      items: ReadonlyArray<ArticleRow>;
      categories: ReadonlyArray<Category>;
    }
  | { ok: false; error: string };

const BASE_FIELDS = groq/* groq */ `
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  "mainImage": select(
    defined(mainImage.asset) => {
      "url": coalesce(mainImage.asset->url, ""),
      "alt": mainImage.alt
    },
    null
  ),
  "author": author->{ _id, name },
  "categories": categories[]->{ _id, title }
`;

const COUNT_QUERY = groq/* groq */ `
count(
  *[
    _type == "post" &&
    defined(slug.current) &&
    ($q == null || title match $q || description match $q) &&
    ($categoryId == null || $categoryId in categories[]._ref) &&
    ($author == null || author->name match $author)
  ]
)
`;

const LIST_QUERY = groq/* groq */ `
*[
  _type == "post" &&
  defined(slug.current) &&
  ($q == null || title match $q || description match $q) &&
  ($categoryId == null || $categoryId in categories[]._ref) &&
  ($author == null || author->name match $author)
]
| order(publishedAt desc)[$offset...$end]{
  ${BASE_FIELDS}
}
`;

const ALL_CATEGORIES_QUERY = groq/* groq */ `
*[_type == "category"] | order(title asc) { _id, title }
`;

function sanitizeLike(s: string): string {
  return `*${s.replace(/"/g, '\\"')}*`;
}

function parseBody(body: unknown): ArticlesQuery | null {
  const b = body as Partial<ArticlesQuery> | null;
  if (!b || typeof b !== "object") return null;

  const offsetNum = Number((b as { offset?: unknown }).offset);
  const limitNum = Number((b as { limit?: unknown }).limit);

  if (!Number.isFinite(offsetNum) || offsetNum < 0) return null;
  if (!Number.isFinite(limitNum) || limitNum <= 0) return null;

  const LIMIT_CAP = 50;
  const offset = Math.trunc(offsetNum);
  const limit = Math.min(Math.trunc(limitNum), LIMIT_CAP);

  const q =
    typeof b.q === "string" && b.q.trim().length > 0
      ? sanitizeLike(b.q.trim())
      : undefined;

  const categoryId =
    typeof b.categoryId === "string" && b.categoryId.trim().length > 0
      ? b.categoryId.trim()
      : undefined;

  const author =
    typeof b.author === "string" && b.author.trim().length > 0
      ? sanitizeLike(b.author.trim())
      : undefined;

  return { offset, limit, q, categoryId, author };
}


export async function POST(
  req: NextRequest
): Promise<NextResponse<ArticlesResponse>> {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      body = null;
    }

    const parsed = parseBody(body);
    if (!parsed) {
      return NextResponse.json<ArticlesResponse>(
        { ok: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { offset, limit, q, categoryId, author } = parsed;
    const end = offset + limit;

    const params = {
      q: q ?? null,
      categoryId: categoryId ?? null,
      author: author ?? null,
      offset,
      end,
    } as const;

    const [total, items, categories] = await Promise.all([
      sanity.fetch<number>(COUNT_QUERY, params),
      sanity.fetch<ReadonlyArray<ArticleRow>>(LIST_QUERY, params),
      sanity.fetch<ReadonlyArray<Category>>(ALL_CATEGORIES_QUERY),
    ]);

    const res = NextResponse.json<ArticlesResponse>(
      { ok: true, total, items, categories },
      { status: 200 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (err) {
    console.error("articles route error:", err instanceof Error ? err.message : String(err));
    const res = NextResponse.json<ArticlesResponse>(
      { ok: false, error: "Failed to fetch articles" },
      { status: 500 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
}
