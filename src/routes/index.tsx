import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Cpu, Megaphone, Hammer, Compass } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTASection } from "@/components/site/CTASection";
import {
  SITE,
  projects,
  getProjectsBySlugs,
  PRODUCT_SLUGS,
  BUSINESS_SLUGS,
  OPPORTUNITY_SLUGS,
} from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.brand} — AI products, ventures & operating systems` },
      { name: "description", content: SITE.tagline },
      { property: "og:title", content: SITE.brand },
      { property: "og:description", content: SITE.tagline },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Cpu, label: "AI Operating Systems", text: "ACC, Alphonso, Founder Project — execution-grade AI infrastructure." },
  { icon: Sparkles, label: "Product Ventures", text: "SessionGuard, TapCash — data, behavior, and rewards platforms." },
  { icon: Megaphone, label: "Media & Marketing", text: "Obsidian Media, Obsidian Studios, Blazely — content & growth systems." },
  { icon: Hammer, label: "Service Operations", text: "Cullinan Construction — premium execution for real-world builds." },
  { icon: Compass, label: "Opportunity Research", text: "AI Tourist Assistant, UniUni DSP — evaluating the next move." },
];

function HomePage() {
  const products = getProjectsBySlugs(PRODUCT_SLUGS);
  const businesses = getProjectsBySlugs(BUSINESS_SLUGS);
  const opportunities = getProjectsBySlugs(OPPORTUNITY_SLUGS);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grad" aria-hidden />
        <div className="absolute inset-0 grid-pattern" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="ring-grad inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            Founder-led venture ecosystem · {SITE.location}
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">
              A complete ecosystem of AI products, ventures and operating systems.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {SITE.brand} is the public hub for {SITE.owner}'s AI infrastructure,
            product ventures, media brands, service businesses, and opportunity research —
            each with its own dedicated page, positioning, and call to action.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Explore the ecosystem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="ring-grad inline-flex items-center rounded-full bg-foreground/5 px-5 py-3 text-sm font-medium text-foreground hover:bg-foreground/10"
            >
              Book a call
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: projects.length.toString(), v: "Dedicated pages" },
              { k: PRODUCT_SLUGS.length.toString(), v: "AI products" },
              { k: BUSINESS_SLUGS.length.toString(), v: "Service brands" },
              { k: OPPORTUNITY_SLUGS.length.toString(), v: "Open opportunities" },
            ].map((s) => (
              <div key={s.v} className="ring-grad rounded-xl bg-card/40 p-4">
                <div className="font-display text-3xl font-semibold text-foreground">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The five pillars
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-gradient">One operator. Five execution layers.</span>
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <div key={p.label} className="ring-grad rounded-2xl bg-card/40 p-5">
              <p.icon className="h-5 w-5 text-gold" />
              <h3 className="mt-4 font-display text-base font-semibold">{p.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <Section
        eyebrow="AI Products"
        title="Operating systems and platforms"
        items={products}
        viewAll="/projects"
      />

      {/* Businesses */}
      <Section
        eyebrow="Businesses"
        title="Service brands & venture operations"
        items={businesses}
        viewAll="/businesses"
      />

      {/* Opportunities */}
      <Section
        eyebrow="Opportunities"
        title="Active research & evaluation"
        items={opportunities}
        viewAll="/projects"
      />

      <CTASection />
    </SiteShell>
  );
}

function Section({
  eyebrow,
  title,
  items,
  viewAll,
}: {
  eyebrow: string;
  title: string;
  items: typeof projects;
  viewAll: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="text-gradient">{title}</span>
          </h2>
        </div>
        <Link
          to={viewAll}
          className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
