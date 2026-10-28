import { NextResponse } from "next/server";

import { submitNewsletterLead } from "@/features/leads/server/submitLead.server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "validation", message: "Expected JSON body." },
      { status: 400 },
    );
  }

  const result = await submitNewsletterLead(body);
  if (!result.ok) {
    const status =
      result.code === "validation"
        ? 400
        : result.code === "misconfigured"
          ? 503
          : result.code === "rateLimited"
            ? 429
            : 502;
    const response = NextResponse.json(result, { status });
    if (result.retryAfterSeconds !== undefined) {
      response.headers.set("Retry-After", String(result.retryAfterSeconds));
    }
    return response;
  }

  return NextResponse.json(result, { status: 201 });
}
