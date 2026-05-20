import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { SITE } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeoHead({
      title: `Privacy Policy - ${SITE.brand}`,
      description: "How information is collected, used, and protected across the ecosystem.",
      pathname: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <article className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-foreground/85 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          Placeholder policy - review with legal counsel before relying on it for any regulated
          jurisdiction.
        </p>
        <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
          1. Information we collect
        </h2>
        <p className="mt-3">
          We collect information you voluntarily submit through forms (such as the contact form),
          basic technical data needed to serve the website, and analytics events used to improve
          content and performance.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
          2. How we use it
        </h2>
        <p className="mt-3">
          Information is used solely to respond to your inquiry, deliver requested services, operate
          the website, and improve content. We do not sell personal information.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">3. Cookies</h2>
        <p className="mt-3">
          The site may use essential and analytics cookies. You can disable cookies in your browser
          settings.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">
          4. Third-party services
        </h2>
        <p className="mt-3">
          We may rely on third-party services for analytics, email delivery, and hosting. These
          providers process information according to their own policies.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">5. Your rights</h2>
        <p className="mt-3">
          You may request access, correction, or deletion of personal information by contacting us
          via the contact page.
        </p>
        <h2 className="mt-8 font-display text-xl font-semibold text-foreground">6. Contact</h2>
        <p className="mt-3">
          For privacy questions, reach out via the contact page or email listed there.
        </p>
      </article>
    </SiteShell>
  );
}
