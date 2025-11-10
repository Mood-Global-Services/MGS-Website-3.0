import "server-only";
import Image from "next/image";
import { notFound } from "next/navigation";
import groq from "groq";
import { sanity, SANITY_CONFIG } from "@/utils/sanity.server";
import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import theme from "@/theme/theme";
import { PortableText } from "@portabletext/react";
import type {
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
  TypedObject,
} from "@portabletext/types";
import type {
  PortableTextComponents,
  PortableTextBlockComponent,
  PortableTextListComponent,
  PortableTextListItemComponent,
} from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import ShareBar from "@/components/blog/ShareBar";

type Category = { _id: string; title: string };
type Author = { _id: string; name: string };
type ResolvedImage = { url: string; alt?: string } | null;

type SanityImageBlock = {
  _type: "image";
  asset?: { _type: "reference"; _ref: string };
  alt?: string;
  caption?: string;
};

type PostFull = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  mainImage: ResolvedImage;
  author: Author | null;
  categories: ReadonlyArray<Category>;
  body: PortableTextBlock<
    PortableTextMarkDefinition,
    (PortableTextSpan & TypedObject) | SanityImageBlock,
    string,
    string
  >[];
};

/** ===== GROQ ===== */
const POST_BY_ID_QUERY = groq/* groq */ `
*[_type == "post" && _id == $id][0]{
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
  "categories": categories[]->{ _id, title },
  body
}
`;

export const revalidate = 60;

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "2-digit" });
}

function estimateReadingMinutes(blocks: PostFull["body"]): number {
  const words = blocks
    .flatMap((b) => ("children" in b && Array.isArray(b.children) ? b.children : []))
    .map((c) => (typeof c === "object" && c && "text" in c ? String((c as { text?: string }).text ?? "") : ""))
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const builder = imageUrlBuilder({
  projectId: SANITY_CONFIG.projectId,
  dataset: SANITY_CONFIG.dataset,
});

const BlockH2: PortableTextBlockComponent = ({ children }) => (
  <Typography variant="h4" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
    {children}
  </Typography>
);
const BlockH3: PortableTextBlockComponent = ({ children }) => (
  <Typography variant="h5" sx={{ mt: 3, mb: 1.5, fontWeight: 700 }}>
    {children}
  </Typography>
);
const BlockNormal: PortableTextBlockComponent = ({ children }) => (
  <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
    {children}
  </Typography>
);
const ListBullet: PortableTextListComponent = ({ children }) => (
  <Box component="ul" sx={{ pl: 3, mb: 2 }}>{children}</Box>
);
const ListNumber: PortableTextListComponent = ({ children }) => (
  <Box component="ol" sx={{ pl: 3, mb: 2 }}>{children}</Box>
);
const ListItemBullet: PortableTextListItemComponent = ({ children }) => (
  <Box component="li"><Typography component="span" variant="body1">{children}</Typography></Box>
);
const ListItemNumber: PortableTextListItemComponent = ({ children }) => (
  <Box component="li"><Typography component="span" variant="body1">{children}</Typography></Box>
);

const TypesImage: PortableTextComponents["types"] = {
  image: ({ value }) => {
    const v = value as SanityImageBlock;
    const src = v.asset ? builder.image(v).width(1600).fit("max").url() : null;
    if (!src) return null;

    return (
      <Box sx={{ my: 3 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={src}
            alt={v.alt ?? ""}
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            sizes="(min-width: 900px) 800px, 100vw"
          />
        </Box>
        {v.caption && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block", textAlign: "center" }}>
            {v.caption}
          </Typography>
        )}
      </Box>
    );
  },
};

const ptComponents: PortableTextComponents = {
  block: { h2: BlockH2, h3: BlockH3, normal: BlockNormal },
  list: { bullet: ListBullet, number: ListNumber },
  listItem: { bullet: ListItemBullet, number: ListItemNumber },
  types: TypesImage,
};

type PageProps = { params: Promise<{ id: string }> };

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  if (!id) notFound();

  const post = await sanity.fetch<PostFull | null>(
    POST_BY_ID_QUERY,
    { id },
    { next: { revalidate } }
  );
  if (!post) notFound();

  const readMins = estimateReadingMinutes(post.body);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      {post.categories.length > 0 && (
        <Stack direction="row" justifyContent="center" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
          {post.categories.map((c) => (
            <Chip
              key={c._id}
              label={c.title}
              size="small"
              variant="outlined"
              sx={{
                borderColor: theme.palette.brand.border1.main,
                boxShadow: `0 1px 0px 1px ${theme.palette.brand.border1.main}`,
                color: theme.palette.text.secondary,
                bgcolor: "transparent",
                borderRadius: 1.5,
                px: 1,
                py: 2,
                fontSize: "16px",
              }}
            />
          ))}
        </Stack>
      )}

      <Typography component="h1" variant="h2" sx={{ textAlign: "center", mb: 2 }}>
        {post.title}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4, color: "text.secondary" }}>
        {post.author?.name && (
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600 }}>
              {post.author.name}
            </Typography>
          </Stack>
        )}
        {post.publishedAt && (
          <>
            <Divider flexItem orientation="vertical" sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
            <Typography variant="body2">{formatDate(post.publishedAt)}</Typography>
          </>
        )}
        <>
          <Divider flexItem orientation="vertical" sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
          <Typography variant="body2">{readMins} min read</Typography>
        </>
      </Stack>

      {post.mainImage?.url && (
        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 2, overflow: "hidden", mb: 4 }}>
          <Image
            src={post.mainImage.url}
            alt={post.mainImage.alt ?? post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      )}

      <PortableText value={post.body} components={ptComponents} />

      <ShareBar url={`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/article/${post._id}`} title={post.title} />
    </Container>
  );
}
