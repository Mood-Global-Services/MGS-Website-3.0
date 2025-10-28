"use client";

import * as React from "react";
import { Box, type SxProps, type Theme } from "@mui/material";

/**
 * HeroGridTrail (MUI)
 * - Div-based grid (no Tailwind), each cell is a MUI Box
 * - Mouse hover lights cells; they fade out over time
 * - Performance-friendly: mouse moves update a ref, not React state; a lightweight timer drives re-render
 * - ResizeObserver recalculates cols/rows when the container changes size
 * - Respects prefers-reduced-motion (slows down updates)
 */

type Props = {
  cellSize?: number;           // px per cell (logical CSS pixels)
  fadeDurationMs?: number;     // ms until a cell fully fades
  tickMs?: number;             // update cadence (ms) for fades
  borderIdle?: string;         // border color when idle
  borderActive?: string;       // border color for active cells (alpha applied)
  bgActive?: string;           // background color for active cells (alpha applied)
  background?: string;         // container background
  ariaHidden?: boolean;
  sx?: SxProps<Theme>;
};

export default function HeroGridTrail({
  cellSize = 40,
  fadeDurationMs = 1000,
  tickMs = 50,
  borderIdle = "#0D131B",
  borderActive = "rgba(23, 47, 194, 1)", // alpha controlled via inline style
  bgActive = "rgba(2, 11, 32, 1)",       // alpha controlled via inline style
  background = "#01070E",
  ariaHidden = true,
  sx,
}: Props) {
  // Container & layout
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [cols, setCols] = React.useState(0);
  const [rows, setRows] = React.useState(0);

  // Map<"col-row", timestamp> stored in a ref to avoid rerenders on mousemove
  const hoveredRef = React.useRef<Map<string, number>>(new Map());

  // A lightweight "clock" that rerenders at a fixed cadence to update fades
  const [now, setNow] = React.useState<number>(() => Date.now());

  // Reduced motion → slow the tick so it’s gentler on CPU and eyes
  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduced = mql.matches;
    const interval = setInterval(
      () => setNow(Date.now()),
      reduced ? Math.max(tickMs * 2, 100) : tickMs
    );
    const onChange = () => {
      clearInterval(interval);
      // restart with new cadence (simple path: reload page cadence on change)
      // In most apps, reduced-motion rarely toggles live; okay to keep it simple.
    };
    try {
      mql.addEventListener("change", onChange);
    } catch {
      mql.addListener?.(onChange as unknown as (event: MediaQueryListEvent) => void);
    }
    return () => {
      clearInterval(interval);
      try {
        mql.removeEventListener("change", onChange);
      } catch {
        mql.removeListener?.(onChange as unknown as (event: MediaQueryListEvent) => void);
      }
    };
  }, [tickMs]);

  // Compute cols/rows from container size (not window), and keep it updated
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const compute = () => {
      const w = Math.max(1, el.clientWidth);
      const h = Math.max(1, el.clientHeight);
      setCols(Math.ceil(w / cellSize) + 1);
      setRows(Math.ceil(h / cellSize) + 1);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cellSize]);

  // Mouse tracking (container-local)
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      const key = `${col}-${row}`;
      hoveredRef.current.set(key, Date.now());
      // Note: we do NOT set React state here—avoids re-render storms.
    };

    el.addEventListener("mousemove", onMove, { passive: true });

    // Optional: also light up on touch
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const rect = el.getBoundingClientRect();
      const x = t.clientX - rect.left;
      const y = t.clientY - rect.top;
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      hoveredRef.current.set(`${col}-${row}`, Date.now());
    };
    el.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      el.removeEventListener("mousemove", onMove as unknown as (event: MouseEvent) => void);
      el.removeEventListener("touchmove", onTouch as unknown as (event: TouchEvent) => void);
    };
  }, [cellSize]);

  // Prune fully faded cells occasionally (keeps the Map small)
  React.useEffect(() => {
    const map = hoveredRef.current;
    const cutoff = now - fadeDurationMs - 50;
    let changed = false;
    for (const [key, ts] of map) {
      if (ts < cutoff) {
        map.delete(key);
        changed = true;
      }
    }
    // No setState needed; cells with 0 opacity render as idle
  }, [now, fadeDurationMs]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%", // set a height on the parent container
        overflow: "hidden",
        backgroundColor: background,
        // If purely decorative behind content:
        // pointerEvents: "none",
        ...sx,
      }}
      aria-hidden={ariaHidden || undefined}
    >
      {/* Grid layer */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        {Array.from({ length: rows }).map((_, row) => (
          <Box key={row} sx={{ display: "flex" }}>
            {Array.from({ length: cols }).map((_, col) => {
              const key = `${col}-${row}`;
              const ts = hoveredRef.current.get(key);
              let opacity = 0;
              if (ts) {
                const elapsed = now - ts;
                opacity = Math.max(0, 1 - elapsed / fadeDurationMs);
              }

              return (
                <Box
                  key={key}
                  sx={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    boxSizing: "border-box",
                    border: "1px solid",
                    borderColor:
                      opacity > 0
                        ? `rgba(23, 47, 194, ${opacity})`
                        : borderIdle,
                    backgroundColor:
                      opacity > 0
                        ? `rgba(2, 11, 32, ${opacity})`
                        : "transparent",
                  }}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
