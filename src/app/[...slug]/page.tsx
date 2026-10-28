import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EstimateLeadForm } from "@/features/leads/ui/EstimateLeadForm";
import { CallbackLeadForm } from "@/features/leads/ui/CallbackLeadForm";
import { sitePageCopy } from "@/shared/config/siteNav";
import { PageShell } from "@/shared/ui/PageShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

function pathFromSlug(slug: string[]): string {
  return `/${slug.join("/")}`;
}

export async function generateStaticParams() {
  return Object.keys(sitePageCopy).map((path) => ({
    slug: path.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = sitePageCopy[path];
  if (!page) {
    return { title: "Page" };
  }
  return { title: page.title, description: page.description };
}

export default async function SitePage({ params }: PageProps) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = sitePageCopy[path];
  if (!page) {
    notFound();
  }

  return (
    <>
      <PageShell title={page.title} description={page.description} />
      {path === "/free-quote" ? (
        <div className="mx-auto max-w-3xl px-5 pb-20 md:px-8">
          <EstimateLeadForm />
        </div>
      ) : null}
      {path === "/contact" ? (
        <div
          id="callback"
          className="mx-auto max-w-3xl px-5 pb-20 md:px-8"
        >
          <CallbackLeadForm />
        </div>
      ) : null}
    </>
  );
}
