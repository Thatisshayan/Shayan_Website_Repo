import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { SITE } from "@/data/projects";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.brand}` },
      { name: "description", content: "Get in touch about projects, partnerships, services, or opportunities across the ecosystem." },
      { property: "og:title", content: `Contact — ${SITE.brand}` },
      { property: "og:description", content: "Get in touch about projects, partnerships, or services." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Share what you're building, the brand you want to engage, or the opportunity you'd like to explore."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-foreground hover:underline">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                    <p className="text-foreground">{SITE.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="text-foreground">{SITE.location}</p>
                  </div>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Inquiries are typically responded to within 1–2 business days.
            </p>
          </aside>

          <form
            className="ring-grad rounded-2xl bg-card/40 p-6 sm:p-8 lg:col-span-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="font-display text-xl font-semibold">Message received.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks — we'll be in touch shortly at the email you provided.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Company / context" name="company" />
                <Field label="Which project or brand?" name="project" placeholder="ACC, Obsidian Media, Cullinan Construction…" />
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:bg-background/60"
                    placeholder="Tell us what you're building or exploring."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90"
                >
                  Send message <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground">
                  This form is a static placeholder. Wire it to your email or CRM provider when ready.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:bg-background/60"
      />
    </div>
  );
}
