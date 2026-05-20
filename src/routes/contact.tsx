import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import type { SubmitHandler, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { SITE } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo";
import { getContactSchema, submitContactForm, type ContactFormValues } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoHead({
      title: `Contact - ${SITE.brand}`,
      description:
        "Get in touch about projects, partnerships, services, or opportunities across the ecosystem.",
      pathname: "/contact",
    }),
  component: ContactPage,
});

type ContactState =
  | { kind: "idle" }
  | { kind: "loading"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function ContactPage() {
  const [state, setState] = useState<ContactState>({ kind: "idle" });
  const schema = useMemo(() => getContactSchema(), []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      project: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setState({ kind: "loading", message: "Checking your message..." });
    const result = await submitContactForm(values);

    if (result.ok) {
      setState({
        kind: "success",
        message: result.message,
      });
      reset();
      return;
    }

    setState({
      kind: "error",
      message: result.message,
    });
  };

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
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="text-foreground">{SITE.location}</p>
                  </div>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Inquiries are typically responded to within 1-2 business days.
            </p>
          </aside>

          <form
            className="ring-grad rounded-2xl bg-card/40 p-6 sm:p-8 lg:col-span-3"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {state.kind !== "idle" && (
              <div
                className={`mb-6 rounded-2xl border px-4 py-3 text-sm ${
                  state.kind === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-100"
                }`}
              >
                <p className="font-medium">
                  {state.kind === "success" ? "Message sent" : "Submission issue"}
                </p>
                <p className="mt-1 text-sm opacity-90">{state.message}</p>
              </div>
            )}

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  register={register}
                  error={errors.name?.message}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  placeholder="you@example.com"
                  register={register}
                  error={errors.email?.message}
                  required
                  type="email"
                />
              </div>
              <Field
                label="Company / context"
                name="company"
                placeholder="Brand, company, or project context"
                register={register}
                error={errors.company?.message}
              />
              <Field
                label="Which project or brand?"
                name="project"
                placeholder="ACC, Obsidian Media, Cullinan Construction..."
                register={register}
                error={errors.project?.message}
              />
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:bg-background/60"
                  placeholder="Tell us what you're building or exploring."
                />
                {errors.message?.message && (
                  <p className="mt-2 text-xs text-rose-300">{errors.message.message}</p>
                )}
              </div>

              <input
                {...register("honeypot")}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="sr-only"
                placeholder="Leave this field blank"
              />

              <button
                type="submit"
                disabled={isSubmitting || state.kind === "loading"}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting || state.kind === "loading" ? "Sending..." : "Send message"}
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs text-muted-foreground">
                This form validates locally and is ready to connect to Formspree, Netlify Forms,
                Resend, HubSpot, Airtable, Lovable Cloud, or a custom backend. No delivery provider
                is connected yet unless you configure one. Until then, submissions are validated
                locally only.
              </p>
            </div>
          </form>
        </div>
      </div>
    </SiteShell>
  );
}

type FieldProps = {
  label: string;
  name: keyof ContactFormValues;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<ContactFormValues>;
  error?: string;
};

function Field({ label, name, type = "text", required, placeholder, register, error }: FieldProps) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary/60 focus:bg-background/60"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
    </div>
  );
}
