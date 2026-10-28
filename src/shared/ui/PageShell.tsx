import Link from "next/link";

type PageShellProps = {
  title: string;
  description: string;
};

export function PageShell({ title, description }: PageShellProps) {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-3xl flex-col px-5 py-16 md:px-8">
      <Link
        href="/"
        className="mb-10 text-sm font-medium text-muted no-underline hover:text-ink"
      >
        ← Home
      </Link>
      <h1 className="m-0 text-4xl font-bold text-ink">{title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
    </main>
  );
}
