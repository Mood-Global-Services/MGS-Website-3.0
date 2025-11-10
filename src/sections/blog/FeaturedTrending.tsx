import "server-only";
import Image from "next/image";
import Link from "next/link";
import { sanity } from "@/utils/sanity.server";
import groq from "groq";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
  Grid
} from "@mui/material";
import theme from "@/theme/theme";

type Category = { _id: string; title: string };
type Author = { _id: string; name: string };
type ResolvedImage = { url: string; alt?: string } | null;

type PostBase = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  mainImage: ResolvedImage;
  author: Author | null;
  categories: ReadonlyArray<Category>;
  commentCount: number;
};

type FeaturedTrendingData = {
  featured: PostBase | null;
  trending: ReadonlyArray<PostBase>;
};

const FEATURED_TRENDING_QUERY = groq`
{
  "featured": *[_type=="post" && defined(slug.current)]
    | order(publishedAt desc)[0]{
      _id,title,"slug":slug.current,description,publishedAt,
      "mainImage": select(defined(mainImage.asset)=>{"url":coalesce(mainImage.asset->url,""),"alt":mainImage.alt},null),
      "author": author->{_id,name},
      "categories": categories[]->{_id,title},
      "commentCount": count(*[_type=="comment" && approved==true && post._ref == ^._id])
    },
  "trending": *[_type=="post" && defined(slug.current)]
    | order(count(*[_type=="comment" && approved==true && post._ref == ^._id]) desc, publishedAt desc)[0...4]{
      _id,title,"slug":slug.current,description,publishedAt,
      "mainImage": select(defined(mainImage.asset)=>{"url":coalesce(mainImage.asset->url,""),"alt":mainImage.alt},null),
      "author": author->{_id,name},
      "categories": categories[]->{_id,title},
      "commentCount": count(*[_type=="comment" && approved==true && post._ref == ^._id])
    }
}
`;

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "2-digit" });
}

function AuthorAndDate(props: { author?: string; date?: string }) {
    return (
      <Stack direction="row" spacing={2} alignItems="center">
        {props.author && (
          <Typography
            component="span"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: 600,
              color: theme.palette.brand.mgsBlue1.main,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {props.author}
          </Typography>
        )}
        {props.date && (
          <Typography variant="caption" color="text.secondary">
            {formatDate(props.date)}
          </Typography>
        )}
      </Stack>
    );
  }  

function Tags(props: { categories: ReadonlyArray<Category> }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {props.categories.slice(0, 2).map((c) => (
        <Chip
          key={c._id}
          label={c.title}
          size="small"
          variant="outlined"
          sx={{
            borderColor: theme.palette.brand.border1.main,
            color: theme.palette.text.secondary,
            bgcolor: "transparent",
            borderRadius: 1.5,
            px: 0.5,
          }}
        />
      ))}
    </Stack>
  );
}

export const revalidate = 60;

export default async function FeaturedTrending() {
  const data = await sanity.fetch<FeaturedTrendingData>(FEATURED_TRENDING_QUERY, {}, { next: { revalidate } });
  const { featured, trending } = data;

  const cardBaseSx = {
    borderRadius: 2,
    bgcolor: theme.palette.background.default,
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    transition: "border-color 150ms ease",
    "&:hover": { backgroundColor: theme.palette.background.default, borderColor: theme.palette.brand.border1.main },
  } as const;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Featured Post
          </Typography>

          {featured ? (
            <Card elevation={0} sx={{ ...cardBaseSx, display: "flex", flexDirection: "column", flex: 1 }}>
              <CardActionArea component={Link} href={`/article/${featured._id}`} sx={{ alignItems: "stretch", display: "flex", flexDirection: "column", flex: 1 }}>
                {featured.mainImage?.url && (
                  <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", flexShrink: 0 }}>
                    <Image
                      src={featured.mainImage.url}
                      alt={featured.mainImage.alt ?? featured.title}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </Box>
                )}

                <CardContent sx={{ pt: 2.25, pb: 2.5, display: "flex", flexDirection: "column", gap: 1.25, flex: 1 }}>
                  <AuthorAndDate author={featured.author?.name} date={featured.publishedAt} />
                  <Typography component="h2" variant="h5" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                    {featured.title}
                  </Typography>
                  {featured.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 880 }}>
                      {featured.description}
                    </Typography>
                  )}
                  <Tags categories={featured.categories} />
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <Box sx={{ color: "text.secondary" }}>No posts yet.</Box>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Trending
          </Typography>

          <Stack spacing={2}>
            {trending.map((post) => (
              <Card key={post._id} elevation={0} sx={cardBaseSx}>
                <CardActionArea component={Link} href={`/article/${post._id}`}>
                  <CardContent sx={{ py: 2.25 }}>
                    <Stack spacing={1}>
                      <AuthorAndDate author={post.author?.name} date={post.publishedAt} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                        {post.title}
                      </Typography>
                      <Tags categories={post.categories} />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
            {trending.length === 0 && <Box sx={{ color: "text.secondary" }}>No trending posts yet.</Box>}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
