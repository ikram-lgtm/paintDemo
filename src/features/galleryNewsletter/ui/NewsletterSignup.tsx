"use client";

import { useState, type FormEvent } from "react";

import type { NewsletterFormCopy } from "@/features/galleryNewsletter/model/galleryNewsletterTypes";

type NewsletterSignupProps = {
  endpoint: string;
  privacyPolicyHref: string;
  copy: NewsletterFormCopy;
};

type SubmissionState = "idle" | "loading" | "success" | "error";

export function NewsletterSignup({
  endpoint,
  privacyPolicyHref,
  copy,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent || status === "loading") return;
    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), consent: true }),
      });
      if (!response.ok) throw new Error("Unable to subscribe");
      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="mx-auto max-w-[465px] font-sans"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex h-[51px] items-center rounded-full border border-[#D9D3C9] bg-white/84 py-[5px] pr-1.5 pl-5 shadow-[0_4px_18px_rgba(25,33,27,0.025)] focus-within:border-[#C49145] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[rgba(196,145,69,0.16)]">
        <label className="sr-only" htmlFor="gallery-newsletter-email">
          {copy.emailLabel}
        </label>
        <input
          id="gallery-newsletter-email"
          className="block min-w-0 flex-1 border-0 bg-transparent text-[13px] text-[#1B312A] outline-none placeholder:text-[#818079]"
          type="email"
          name="email"
          placeholder={copy.emailPlaceholder}
          autoComplete="email"
          maxLength={254}
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading"}
        />
        <button
          className="grid size-10 shrink-0 place-items-center rounded-full border-0 bg-[#C49145] transition-[background-color,transform] duration-150 enabled:hover:translate-x-0.5 enabled:hover:bg-[#9F6C2B] disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transition-none motion-reduce:enabled:hover:translate-x-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0F2B25]"
          type="submit"
          aria-label={copy.subscribe}
          disabled={!consent || status === "loading"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG */}
          <img
            src="/gallery-newsletter/svgs/arrow-right.svg"
            alt=""
            width={21}
            height={21}
          />
        </button>
      </div>
      <label className="mx-auto mt-3 flex max-w-[460px] items-start justify-center gap-2 text-left text-[11px] leading-[1.4] text-[#5E625A]">
        <input
          type="checkbox"
          className="mt-px accent-[#C49145]"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>
          {copy.consent}{" "}
          <a
            href={privacyPolicyHref}
            className="text-[#0F2B25] underline underline-offset-[3px]"
          >
            {copy.privacy}
          </a>
        </span>
      </label>
      <p
        className="mt-2 mb-0 min-h-[18px] text-xs text-[#24473D]"
        aria-live="polite"
        role="status"
      >
        {status === "success" ? copy.success : null}
        {status === "error" ? copy.error : null}
      </p>
    </form>
  );
}
