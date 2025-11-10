"use client";

import { useCallback, useMemo, useState, type ReactElement } from "react";
import { Box, Stack, Typography, ButtonBase, Tooltip, type SxProps, type Theme } from "@mui/material";
import Link from "next/link";
import theme from "@/theme/theme";

export type ShareBarProps = {
  url: string;
  title?: string;
  sx?: SxProps<Theme>;
  className?: string;
};

type PlatformKey = "notion" | "linkedin" | "github" | "instagram" | "x";

function TextPill(props: {
  children: string;
  onClick?: () => void;
  href?: string;
  tooltip?: string;
}): ReactElement {
  const content = (
    <Typography
      variant="subtitle1"
      sx={{
        color: "text.secondary",
        px: 1,
        py: 0.5,
        borderRadius: 1.5,
        transition: "background-color 120ms ease, color 120ms ease",
        "&:hover": {
          color: theme.palette.text.primary,
          bgcolor: theme.palette.brand.cardHover1.main,
        },
      }}
    >
      {props.children}
    </Typography>
  );

  if (props.href) {
    return (
      <Link href={props.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <ButtonBase disableRipple sx={{ borderRadius: 2 }}>{content}</ButtonBase>
      </Link>
    );
  }

  return (
    <Tooltip title={props.tooltip ?? ""} arrow disableHoverListener={!props.tooltip}>
      <ButtonBase onClick={props.onClick} disableRipple sx={{ borderRadius: 2 }}>
        {content}
      </ButtonBase>
    </Tooltip>
  );
}

export default function ShareBar({ url, title, sx, className }: ShareBarProps): ReactElement {
  const [copiedKey, setCopiedKey] = useState<PlatformKey | null>(null);

  const encoded = useMemo(() => ({
    url: encodeURIComponent(url),
    text: encodeURIComponent(title ?? ""),
  }), [url, title]);

  const shareLinks: Record<Exclude<PlatformKey, "notion" | "github" | "instagram">, string> = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded.url}`,
    x: `https://twitter.com/intent/tweet?url=${encoded.url}${encoded.text ? `&text=${encoded.text}` : ""}`,
  };

  const handleCopy = useCallback((key: PlatformKey) => {
    void (async () => {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1200);
      } catch {
      }
    })();
  }, [url]);

  return (
    <Box
      className={className}
      sx={{
        borderRadius: 2,
        border: `1px solid ${theme.palette.brand.border1.main}`,
        bgcolor: theme.palette.background.default,
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2 },
        mt: 4,
        ...sx,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6" align="center" sx={{ fontWeight: 400 }}>
          Share on
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
          <TextPill
            onClick={() => handleCopy("notion")}
            tooltip={copiedKey === "notion" ? "Link copied" : "Copy link"}
          >
            Notion
          </TextPill>

          <TextPill href={shareLinks.linkedin}>LinkedIn</TextPill>

          <TextPill
            onClick={() => handleCopy("github")}
            tooltip={copiedKey === "github" ? "Link copied" : "Copy link"}
          >
            GitHub
          </TextPill>

          <TextPill
            onClick={() => handleCopy("instagram")}
            tooltip={copiedKey === "instagram" ? "Link copied" : "Copy link"}
          >
            Instagram
          </TextPill>

          <TextPill href={shareLinks.x}>X</TextPill>
        </Stack>
      </Stack>
    </Box>
  );
}
