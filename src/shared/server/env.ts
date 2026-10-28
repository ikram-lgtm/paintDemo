import "server-only";

export function getBackendApiUrl(): string | null {
  const value = process.env.BACKEND_API_URL?.trim();
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
