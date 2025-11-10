"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, type ReactElement } from "react";
import {
  Autocomplete,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import theme from "@/theme/theme";

import arrow from "@/assets/images/icons/arrow.webp"

type Category = { _id: string; title: string };
type Author = { _id: string; name: string };
type ResolvedImage = { url: string; alt?: string } | null;

type ArticleRow = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  mainImage: ResolvedImage;
  author: Author | null;
  categories: ReadonlyArray<Category>;
};

type ArticlesResponse =
  | {
      ok: true;
      total: number;
      items: ReadonlyArray<ArticleRow>;
      categories: ReadonlyArray<Category>;
    }
  | { ok: false; error: string };

type QueryState = {
  page: number;
  pageSize: number;
  q: string;
  categoryId: string | null;
  author: string;
};

const PAGE_SIZE_DEFAULT = 5;

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "2-digit" });
}

function AuthorLabel(props: { name?: string }) {
  if (!props.name) return null;
  return (
    <Typography
      component="span"
      sx={{
        fontWeight: 600,
        color: theme.palette.brand.mgsBlue1.main,
        cursor: "pointer",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {props.name}
    </Typography>
  );
}

function Tags(props: { categories: ReadonlyArray<Category> }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {props.categories.slice(0, 1).map((c) => (
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

const inputSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "transparent",
    borderRadius: 3,
    "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.24)" },
    "&.Mui-focused fieldset": { borderColor: theme.palette.brand.border1.main },
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
} as const;

const autoCompleteSlotProps = {
  paper: {
    sx: {
      bgcolor: theme.palette.background.default,
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "none",
      borderRadius: 2,
      mt: 0.5,
    },
  },
  listbox: {
    sx: {
      "& .MuiAutocomplete-option": {
        "&[aria-selected='true']": {
          backgroundColor: theme.palette.brand.cardHover1.main,
        },
        "&.Mui-focused": {
          backgroundColor: theme.palette.brand.cardHover1.main,
        },
      },
    },
  },
} as const;

const cardSx = {
  borderRadius: 2,
  border: "1px solid rgba(255,255,255,0.12)",
  bgcolor: theme.palette.background.default,
  transition: "border-color 150ms ease",
  "&:hover": { borderColor: theme.palette.brand.border1.main },
} as const;

export default function ArticlesSectionClient(): ReactElement {
  const [categories, setCategories] = useState<ReadonlyArray<Category>>([]);
  const [items, setItems] = useState<ReadonlyArray<ArticleRow>>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<ReadonlyArray<string>>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<ReadonlyArray<string>>([]);

  const [query, setQuery] = useState<QueryState>({
    page: 1,
    pageSize: PAGE_SIZE_DEFAULT,
    q: "",
    categoryId: null,
    author: "",
  });

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / query.pageSize)), [total, query.pageSize]);

  const authorOptions = useMemo<ReadonlyArray<string>>(() => {
    const set = new Set<string>();
    for (const it of items) {
      if (it.author?.name) set.add(it.author.name);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const fetchArticles = useCallback(async (qState: QueryState) => {
    setLoading(true);
    setErrorText("");
    try {
      const offset = (qState.page - 1) * qState.pageSize;
      const body = {
        offset,
        limit: qState.pageSize,
        q: qState.q.trim().length ? `*${qState.q.trim()}*` : undefined,
        categoryId: qState.categoryId ?? undefined,
        author: qState.author.trim().length ? `*${qState.author.trim()}*` : undefined,
      };

      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        cache: "no-store",
      });

      const data = (await res.json()) as ArticlesResponse;
      if (!res.ok || !data.ok) throw new Error((!data.ok && data.error) || "Request failed");

      setItems(data.items);
      setTotal(data.total);
      setCategories(data.categories);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setErrorText(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchArticles(query);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (items.length === 0 && total === 0 && categories.length === 0) return;
    void fetchArticles(query);
  }, [query, fetchArticles]); // eslint-disable-line react-hooks/exhaustive-deps

  const setPage = (p: number) => setQuery((prev) => ({ ...prev, page: Math.min(Math.max(1, p), totalPages) }));

  const onSearch = () => setPage(1);

  useEffect(() => {
    setQuery((prev) => ({
      ...prev,
      categoryId: selectedCategoryIds.length > 0 ? selectedCategoryIds[0] : null,
      author: selectedAuthors.length > 0 ? selectedAuthors[0] : "",
      page: 1,
    }));
  }, [selectedCategoryIds, selectedAuthors]);

  return (
    <Grid container spacing={4} sx={{ width: "75%" }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Stack spacing={2.25}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Search
          </Typography>

          <TextField
            fullWidth
            size="medium"
            placeholder="Article name"
            value={query.q}
            onChange={(e) => setQuery((p) => ({ ...p, q: e.target.value }))}
            sx={inputSx}
          />

          <Autocomplete
            multiple
            disableCloseOnSelect
            options={categories}
            getOptionLabel={(o: Category) => o.title}
            value={categories.filter((c) => selectedCategoryIds.includes(c._id))}
            onChange={(_, newValue: ReadonlyArray<Category>) =>
              setSelectedCategoryIds(newValue.map((v) => v._id))
            }
            renderTags={(value: ReadonlyArray<Category>, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option._id}
                  label={option.title}
                  size="small"
                  sx={{ borderRadius: 1.5 }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Categories"
                size="medium"
                sx={inputSx}
              />
            )}
            slotProps={autoCompleteSlotProps}
          />

          <Autocomplete
            multiple
            disableCloseOnSelect
            options={authorOptions}
            value={selectedAuthors as string[]}
            onChange={(_, newValue: ReadonlyArray<string>) => setSelectedAuthors(newValue)}
            renderTags={(value: ReadonlyArray<string>, getTagProps) =>
              value.map((name, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={name}
                  label={name}
                  size="small"
                  sx={{ borderRadius: 1.5 }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Authors"
                size="medium"
                sx={inputSx}
              />
            )}
            slotProps={autoCompleteSlotProps}
            filterSelectedOptions
          />
          <Stack width="100%" direction="row" alignItems="center" justifyContent="center" position="relative" sx={{
                    zIndex: 2
                }}>
                    <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1} action={() => {
                        onSearch();
                    }}>
                        <div className="flex items-center justify-center gap-1">
                            <Typography component="span" variant="h6" marginRight={1}>
                                Search
                            </Typography>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                </span>
                            </span>
                        </div>
                    </SideTabbedButton>
                </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 9 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Tabs
            value={query.categoryId ?? "ALL"}
            onChange={(_, val: string) => {
              if (val === "ALL") {
                setSelectedCategoryIds([]);
              } else {
                setSelectedCategoryIds([val]);
              }
            }}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            TabIndicatorProps={{ style: { backgroundColor: theme.palette.brand.mgsBlue1.main } }}
            textColor="inherit"
            sx={{
              "& .MuiTabs-scrollButtons": { color: "text.secondary" },
            }}
          >
            <Tab value="ALL" label="All Articles" sx={{ textTransform: "none", minHeight: 36 }} />
            {categories.map((c) => (
              <Tab
                key={c._id}
                value={c._id}
                label={c.title}
                sx={{ textTransform: "none", minHeight: 36, px: 1 }}
              />
            ))}
          </Tabs>
        </Stack>

        <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.12)" }} />

        <Stack spacing={2.5}>
          {items.map((post) => (
            <Card key={post._id} elevation={0} sx={cardSx}>
              <CardActionArea component={Link} href={`/article/${post._id}`} sx={{ p: { xs: 1.5, sm: 2 } }}>
                <Grid container spacing={2} alignItems="stretch">
                  <Grid size={{ xs: 12, sm: 4, md: 3.5 }}>
                    {post.mainImage?.url && (
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "1 / 1",
                          borderRadius: 1.5,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={post.mainImage.url}
                          alt={post.mainImage.alt ?? post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(min-width: 1200px) 260px, (min-width: 900px) 33vw, 100vw"
                        />
                      </Box>
                    )}
                  </Grid>

                  <Grid size={{ xs: 12, sm: 8, md: 8.5 }}>
                    <CardContent sx={{ py: 0 }}>
                      <Stack spacing={1}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <AuthorLabel name={post.author?.name ?? ""} />
                          {post.publishedAt && (
                            <Typography variant="caption" color="text.secondary">
                              {formatDate(post.publishedAt)}
                            </Typography>
                          )}
                        </Stack>

                        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                          {post.title}
                        </Typography>

                        {post.description && (
                          <Typography variant="body2" color="text.secondary">
                            {post.description}
                          </Typography>
                        )}

                        <Tags categories={post.categories} />
                      </Stack>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          ))}

          {items.length === 0 && !loading && (
            <Typography color="text.secondary">No results.</Typography>
          )}
          {errorText && (
            <Typography color="error" variant="body2">
              {errorText}
            </Typography>
          )}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 4, color: "text.secondary" }}
        >
          <Typography
            component="button"
            onClick={() => setPage(query.page - 1)}
            disabled={query.page <= 1}
            style={{
              background: "none",
              border: 0,
              padding: 0,
              color: "inherit",
              fontSize: "14px",
              cursor: query.page <= 1 ? "not-allowed" : "pointer",
            }}
          >
            previous page
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            {Array.from({ length: Math.min(7, totalPages) }, (_, i) => i + 1).map((p) => (
              <Typography
                key={p}
                component="button"
                onClick={() => setPage(p)}
                style={{
                  background: "none",
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  color: p === query.page ? theme.palette.brand.mgsBlue1.main : "inherit",
                  fontWeight: p === query.page ? 700 : 400,
                }}
              >
                {p}
              </Typography>
            ))}
            {totalPages > 7 && <Typography>…</Typography>}
            {totalPages > 7 && (
              <Typography
                component="button"
                onClick={() => setPage(totalPages)}
                style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}
              >
                {totalPages}
              </Typography>
            )}
          </Stack>

          <Typography
            component="button"
            onClick={() => setPage(query.page + 1)}
            disabled={query.page >= totalPages}
            style={{
              background: "none",
              border: 0,
              padding: 0,
              color: "inherit",
              fontSize: "14px",
              cursor: query.page >= totalPages ? "not-allowed" : "pointer",
            }}
          >
            next page
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
