"use client";

import { useState, useTransition } from "react";

import { requestCallbackAction } from "@/features/leads/actions/leadActions";

export function CallbackLeadForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [pending, startTransition] = useTransition();

  return (
    <form
      className="flex max-w-md flex-col gap-4 rounded-[20px] bg-card p-6 shadow-[0_12px_32px_rgba(17,18,19,0.08)]"
      action={(formData) => {
        setMessage(null);
        startTransition(async () => {
          const result = await requestCallbackAction(formData);
          if (!result.ok) {
            setIsError(true);
            setMessage(result.message);
            return;
          }
          setIsError(false);
          setMessage("Your request has been received.");
        });
      }}
    >
      <h2 className="m-0 text-xl font-bold text-ink">Request a callback</h2>
      <label className="flex flex-col gap-1 text-sm text-ink">
        Name
        <input
          name="name"
          required
          minLength={2}
          className="h-11 rounded-full border border-border px-4"
          autoComplete="name"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-ink">
        Phone
        <input
          name="phone"
          required
          minLength={10}
          className="h-11 rounded-full border border-border px-4"
          autoComplete="tel"
          inputMode="tel"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center rounded-full bg-button-ink px-5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Sending…" : "Call me back"}
      </button>
      {message ? (
        <p
          role="status"
          className={`m-0 text-sm ${isError ? "text-red-700" : "text-ink"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
