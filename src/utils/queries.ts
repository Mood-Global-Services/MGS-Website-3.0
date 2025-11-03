import groq from "groq";
import type { PortableTextBlock } from "@portabletext/types";

export type Slug = { _type: "slug"; current: string };

export type Ref = { _type: "reference"; _ref: string; _weak?: boolean };

export type ImageRef = {
  _type: "image";
  asset: Ref;
  alt?: string;
};

export type Category = {
  _id: string;
  title: string;
  slug?: Slug;
};

export type Author = {
  _id: string;
  name: string;
  image?: ImageRef;
};

export type ResolvedImage = {
  url: string;
  alt?: string;
} | null;

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  mainImage: ResolvedImage;
  categories: ReadonlyArray<Category>;
};

export type PostFull = PostListItem & {
  body?: ReadonlyArray<PortableTextBlock>;
  author?: Author | null;
};

export const POSTS_LIST = groq`
*[_type == "post" && defined(slug.current)]
| order(publishedAt desc){
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
  "categories": categories[]->{
    _id, title, slug
  }
}
`;

export const POST_BY_SLUG = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  body,
  "mainImage": select(
    defined(mainImage.asset) => {
      "url": coalesce(mainImage.asset->url, ""),
      "alt": mainImage.alt
    },
    null
  ),
  "categories": categories[]->{
    _id, title, slug
  },
  "author": author->{
    _id, name, image
  }
}
`;
