import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { SITE } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeoHead({
      title: `Terms of Service - ${SITE.brand}`,
      description: "Terms governing use of the website and services.",
      pathname: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <article className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-foreground/85 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          Placeholder terms - review with legal counsel before relying on them.
        </p>
        <h2 className="mt-10 font-display text-xl font-semibold text-foreground">1. Acceptance</h2>
        <p className="mt-3">
          By accessing this website, you agree to these terms. If you do not agree, do not use the
          site or services.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
          2. Use of the site
        </h2>
        <p className="mt-3">
          Content on this site is for informational purposes and does not constitute professional,
          financial, or legal advice.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
          3. Intellectual property
        </h2>
        <p className="mt-3">
          All content, branding, and product descriptions are the property of the ecosystem owner
          unless otherwise stated.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
          4. No warranties
        </h2>
        <p className="mt-3">
          The site and content are provided &quot;as is&quot; without warranties of any kind. We
          make no guarantees about availability, accuracy, or results.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">5. Liability</h2>
        <p className="mt-3">
          To the maximum extent permitted by law, we are not liable for indirect or consequential
          damages arising from use of this site.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">6. Changes</h2>
        <p className="mt-3">
          We may update these terms at any time. Continued use of the site constitutes acceptance of
          the updated terms.
        </p>
      </article>
    </SiteShell>
  );
}
