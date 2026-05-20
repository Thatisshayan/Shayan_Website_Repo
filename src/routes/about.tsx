import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/projects";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${SITE.brand}` },
      { name: "description", content: "Founder-led venture ecosystem combining AI infrastructure, product ventures, media brands, and service operations." },
      { property: "og:title", content: `About — ${SITE.brand}` },
      { property: "og:description", content: "Founder-led venture ecosystem from Toronto, Ontario." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title="A venture ecosystem built for execution."
        description={`${SITE.brand} is the public hub for ${SITE.owner}'s work — AI operating systems, product ventures, media and creative brands, service businesses, and active opportunity research.`}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose-style space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            The ecosystem exists because most operators are forced to choose between
            depth and breadth. We don't. Each project here is treated as its own
            business with its own positioning, audience, and craft — and each one
            connects back to the same underlying execution layer.
          </p>
          <p>
            On the AI side, the work focuses on building governed operating systems
            (ACC, Alphonso, Founder Project) where goals, agents, approvals, memory,
            and execution history live in one place. On the product side, ventures
            like SessionGuard and TapCash explore behavior analytics and reward
            economics. On the operating side, brands like Obsidian Media, Obsidian
            Studios, Blazely, and Cullinan Construction deliver real outcomes for
            real clients.
          </p>
          <p>
            The thesis is simple: the next generation of valuable companies will be
            led by operators who can think across infrastructure, product, brand,
            and execution in one continuous loop. This site is the public face of
            that loop.
          </p>
        </div>

        <dl className="mt-12 grid gap-6 rounded-2xl border border-border/60 bg-card/40 p-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Founder</dt>
            <dd className="mt-1 font-display text-base">{SITE.owner}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Based in</dt>
            <dd className="mt-1 font-display text-base">{SITE.location}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Focus</dt>
            <dd className="mt-1 font-display text-base">AI · Ventures · Media · Ops</dd>
          </div>
        </dl>
      </div>

      <CTASection
        title="Want to work together?"
        body="Engagements run from short consulting sprints to long-term operating partnerships."
      />
    </SiteShell>
  );
}
