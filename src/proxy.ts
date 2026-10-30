import { NextResponse, type NextRequest } from "next/server";

import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/shared/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

/** Existing non-locale app routes kept as-is for this pass. */
const PASSTHROUGH_PREFIXES = [
  "/api",
  "/uslugi",
  "/proekty",
  "/o-kompanii",
  "/etapy",
  "/kontakty",
  "/raschet",
  "/paintpro",
] as const;

function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookieName)?.value;
  if (cookie && isLocale(cookie)) {
    return cookie;
  }
  return defaultLocale;
}

function withPathname(
  request: NextRequest,
  extra?: Headers,
): NextResponse {
  const requestHeaders = new Headers(extra ?? request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (PASSTHROUGH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return withPathname(request);
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", maybeLocale);
    requestHeaders.set("x-pathname", pathname);

    // Locale-prefixed marketing pages that live outside [locale]
    if (segments[1] === "paintpro") {
      const url = request.nextUrl.clone();
      url.pathname = "/paintpro";
      const response = NextResponse.rewrite(url, {
        request: { headers: requestHeaders },
      });
      response.cookies.set(localeCookieName, maybeLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      return response;
    }

    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.cookies.set(localeCookieName, maybeLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  if (pathname === "/") {
    const locale = preferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  if (maybeLocale && maybeLocale.length === 2) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return withPathname(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
