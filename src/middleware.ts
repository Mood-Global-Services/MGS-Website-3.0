// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STRIP_PARAMS = [
  "__gchrome_remoteframetoken",
  "gclid",
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "_hsmi",
  "_hsenc",
];

export function middleware(req: NextRequest) {
  // Only redirect for safe methods to avoid interfering with POST/PUT, etc.
  if (req.method !== "GET" && req.method !== "HEAD") {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  let changed = false;

  for (const p of STRIP_PARAMS) {
    if (url.searchParams.has(p)) {
      url.searchParams.delete(p);
      changed = true;
    }
  }

  if (changed) {
    // 308 preserves method and is cache-friendly
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

// Exclude static assets from middleware
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
