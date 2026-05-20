import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to build the next thing?",
  body = "Whether you need an AI system, a launch, or strategic execution — let's talk.",
  primary = { to: "/contact", label: "Book a call" },
  secondary,
}: {
  title?: string;
  body?: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="ring-grad relative overflow-hidden rounded-3xl bg-card/40 p-8 sm:p-12 lg:p-16">
        <div className="absolute inset-0 hero-grad opacity-60" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-gradient">{title}</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to={primary.to}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center rounded-full border border-border/80 bg-background/30 px-5 py-3 text-sm font-medium text-foreground hover:bg-background/60"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
