"use client";

import * as React from "react";
import { Box, type SxProps, type Theme } from "@mui/material";

/**
 * HeroGridTrail (MUI, TypeScript-safe)
 * - Div grid where cells light up under the pointer and fade out.
 * - Performance:
 *   • Pointer writes to a ref-backed Map (no state thrash)
 *   • Tick loop gated by IntersectionObserver (pauses off-screen)
 *   • ResizeObserver for responsive cols/rows from container
 *   • DOM size soft-cap (prevents massive node counts)
 *   • Properly restarts tick when prefers-reduced-motion flips
 */

type Props = {
  cellSize?: number;           // px per cell
  fadeDurationMs?: number;     // ms to fully fade
  tickMs?: number;             // ms cadence for fades (e.g., 50)
  borderIdle?: string;         // idle border color
  borderActive?: string;       // active border color (alpha applied at runtime)
  bgActive?: string;           // active bg color (alpha applied at runtime)
  background?: string;         // container background color
  ariaHidden?: boolean;
  sx?: SxProps<Theme>;
};

// Soft cap to avoid generating huge DOMs on very large containers
const MAX_CELLS = 6000;

export default function HeroGridTrail({
  cellSize = 40,
  fadeDurationMs = 1000,
  tickMs = 50,
  borderIdle = "#0D131B",
  borderActive = "rgba(23, 47, 194, 1)",
  bgActive = "rgba(2, 11, 32, 1)",
  background = "#01070E",
  ariaHidden = true,
  sx,
}: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // layout
  const [cols, setCols] = React.useState<number>(0);
  const [rows, setRows] = React.useState<number>(0);

  // active cells: Map<"col-row", timestampMs> — keeps pointer updates out of React state
  const hoveredRef = React.useRef<Map<string, number>>(new Map());

  // tick clock (drives fading), gated by visibility & reduced-motion
  const [now, setNow] = React.useState<number>(() => Date.now());
  const visibleRef = React.useRef<boolean>(true);
  const intervalRef = React.useRef<number | null>(null);
  const reducedRef = React.useRef<boolean>(false);

  // --- helpers ---------------------------------------------------------------

  const computeGrid = React.useCallback((): void => {
    const el = containerRef.current;
    if (!el) return;

    const w = Math.max(1, el.clientWidth);
    const h = Math.max(1, el.clientHeight);

    let c = Math.ceil(w / cellSize) + 1;
    let r = Math.ceil(h / cellSize) + 1;

    // soft cap to avoid huge DOMs
    if (c * r > MAX_CELLS) {
      const scale = Math.sqrt((c * r) / MAX_CELLS);
      c = Math.max(1, Math.floor(c / scale));
      r = Math.max(1, Math.floor(r / scale));
    }

    setCols(c);
    setRows(r);
  }, [cellSize]);

  const stopTick = React.useCallback((): void => {
    if (intervalRef.current != null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTick = React.useCallback((): void => {
    stopTick(); // ensure clean
    const cadence = reducedRef.current ? Math.max(tickMs * 2, 100) : tickMs;
    intervalRef.current = window.setInterval(() => {
      if (visibleRef.current) setNow(Date.now());
    }, cadence);
  }, [tickMs, stopTick]);

  // --- effects ---------------------------------------------------------------

  // Observe visibility to pause when off-screen
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Manage reduced-motion & ticking interval (with typed fallbacks)
  React.useEffect(() => {
    const mql: MediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mql.matches;

    const onChange = (ev: MediaQueryListEvent): void => {
      reducedRef.current = ev.matches;
      startTick(); // restart with new cadence
    };

    // initial start
    startTick();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
    } else {
      // Older Safari fallback
      const legacyListener: (this: MediaQueryList, ev: MediaQueryListEvent) => void = function (this, ev) {
        onChange(ev);
      };
      mql.addListener(legacyListener);
      return () => {
        stopTick();
        mql.removeListener(legacyListener);
      };
    }

    return () => {
      stopTick();
      mql.removeEventListener?.("change", onChange);
    };
  }, [startTick, stopTick]);

  // Compute cols/rows and keep them updated
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    computeGrid();
    const ro = new ResizeObserver(() => computeGrid());
    ro.observe(el);
    return () => ro.disconnect();
  }, [computeGrid]);

  // Stable pointer listeners
  const onMoveRef = React.useRef<(e: MouseEvent) => void>(() => { return; });
  const onTouchRef = React.useRef<(e: TouchEvent) => void>(() => { return; });
  const onLeaveRef = React.useRef<() => void>(() => { return; });

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    onMoveRef.current = (e: MouseEvent): void => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      hoveredRef.current.set(`${col}-${row}`, Date.now());
    };

    onTouchRef.current = (e: TouchEvent): void => {
      const t = e.touches[0];
      if (!t) return;
      const rect = el.getBoundingClientRect();
      const x = t.clientX - rect.left;
      const y = t.clientY - rect.top;
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      hoveredRef.current.set(`${col}-${row}`, Date.now());
    };

    onLeaveRef.current = (): void => {
      hoveredRef.current.clear();
    };

    const move = (e: MouseEvent): void => onMoveRef.current?.(e);
    const touch = (e: TouchEvent): void => onTouchRef.current?.(e);
    const leave = (): void => onLeaveRef.current?.();

    el.addEventListener("mousemove", move, { passive: true });
    el.addEventListener("touchmove", touch, { passive: true });
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("touchmove", touch);
      el.removeEventListener("mouseleave", leave);
    };
  }, [cellSize]);

  // Prune fully faded cells periodically (keeps Map small)
  React.useEffect(() => {
    const map = hoveredRef.current;
    const cutoff = now - fadeDurationMs - 50;
    for (const [key, ts] of map) {
      if (ts < cutoff) map.delete(key);
    }
  }, [now, fadeDurationMs]);

  // --- render ----------------------------------------------------------------

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%", // set height on the parent container using this
        overflow: "hidden",
        backgroundColor: background,
        // If this is purely decorative behind hero text, uncomment:
        // pointerEvents: "none",
        ...sx,
      }}
      aria-hidden={ariaHidden || undefined}
    >
      {/* Grid layer */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        {Array.from({ length: rows }).map((_, row) => (
          <Box key={row} sx={{ display: "flex", willChange: "contents" }}>
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
                    borderColor: opacity > 0 ? `rgba(23, 47, 194, ${opacity})` : borderIdle,
                    backgroundColor: opacity > 0 ? `rgba(2, 11, 32, ${opacity})` : "transparent",
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
