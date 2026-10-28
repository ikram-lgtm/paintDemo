/** Verified public site origin only. Never invent a production domain. */
export function getVerifiedSiteUrl(): string | null {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) {
    return null;
  }
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return null;
    }
    return value.replace(/\/$/, "");
  } catch {
    return null;
  }
}
