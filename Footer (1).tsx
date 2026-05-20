import { Link } from "@tanstack/react-router";
import { SITE, getProjectsBySlugs, PRODUCT_SLUGS, BUSINESS_SLUGS } from "@/data/projects";

export function Footer() {
  const products = getProjectsBySlugs(PRODUCT_SLUGS);
  const businesses = getProjectsBySlugs(BUSINESS_SLUGS);
  return (
    <footer className="mt-32 border-t border-border/50 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary via-accent to-gold text-xs font-bold text-background">
                SVE
              </span>
              <span className="font-display text-base font-semibold">{SITE.brand}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              {SITE.location}
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Ecosystem
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/projects" className="text-foreground/80 hover:text-foreground">Projects</Link></li>
              <li><Link to="/businesses" className="text-foreground/80 hover:text-foreground">Businesses</Link></li>
              <li><Link to="/services" className="text-foreground/80 hover:text-foreground">Services</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={"/$slug" as any}
                    params={{ slug: p.slug } as any}
                    className="text-foreground/80 hover:text-foreground"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Businesses
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {businesses.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={"/$slug" as any}
                    params={{ slug: p.slug } as any}
                    className="text-foreground/80 hover:text-foreground"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
