import "server-only";

import { appError, type AppResult } from "@/shared/server/httpErrors";
import { getBackendApiUrl } from "@/shared/server/env";

const WRITE_TIMEOUT_MS = 10_000;

export async function postUpstreamJson<TResponse>(
  path: string,
  body: unknown,
): Promise<AppResult<TResponse>> {
  const origin = getBackendApiUrl();
  if (!origin) {
    return appError(
      "misconfigured",
      "BACKEND_API_URL is not configured. Lead submission cannot complete.",
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WRITE_TIMEOUT_MS);

  try {
    const response = await fetch(`${origin}${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return appError(
        "upstream",
        "Upstream returned a non-JSON response.",
      );
    }

    const payload: unknown = await response.json();

    if (response.status === 429) {
      const retry = Number(response.headers.get("retry-after") ?? "60");
      return appError(
        "rateLimited",
        "Too many requests. Try again later.",
        Number.isFinite(retry) ? retry : 60,
      );
    }

    if (!response.ok) {
      return appError(
        response.status >= 500 ? "unavailable" : "upstream",
        "Upstream rejected the lead request.",
      );
    }

    return { ok: true, data: payload as TResponse };
  } catch {
    return appError(
      "unavailable",
      "Unable to reach the upstream API within the deadline.",
    );
  } finally {
    clearTimeout(timer);
  }
}
