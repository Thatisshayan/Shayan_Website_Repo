import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please add your name."),
  email: z.string().trim().email("Please add a valid email address."),
  company: z.string().trim().optional().default(""),
  project: z.string().trim().optional().default(""),
  message: z.string().trim().min(20, "Please add a little more detail."),
  honeypot: z.string().trim().optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

type ContactSubmissionResult =
  | {
      ok: true;
      status: "validated" | "submitted";
      message: string;
    }
  | {
      ok: false;
      status: "error" | "unconfigured" | "spam";
      message: string;
    };

type ContactProvider =
  | "formspree"
  | "netlify-forms"
  | "resend"
  | "hubspot"
  | "airtable"
  | "lovable-cloud"
  | "custom-backend";

const PROVIDER_ENV_KEYS: Array<[ContactProvider, string[]]> = [
  ["formspree", ["VITE_FORMSPREE_ENDPOINT"]],
  ["netlify-forms", ["VITE_NETLIFY_FORMS_ENDPOINT"]],
  ["resend", ["VITE_RESEND_CONTACT_ENDPOINT"]],
  ["hubspot", ["VITE_HUBSPOT_CONTACT_ENDPOINT"]],
  ["airtable", ["VITE_AIRTABLE_CONTACT_ENDPOINT"]],
  ["lovable-cloud", ["VITE_LOVABLE_CONTACT_ENDPOINT"]],
  ["custom-backend", ["VITE_CONTACT_ENDPOINT"]],
];

export function getContactSchema() {
  return contactSchema;
}

export function getContactProvider(): {
  provider: ContactProvider;
  endpoint: string;
} | null {
  const env = import.meta.env as Record<string, string | undefined>;
  for (const [provider, keys] of PROVIDER_ENV_KEYS) {
    for (const key of keys) {
      const endpoint = env[key]?.trim();
      if (endpoint) {
        return { provider, endpoint };
      }
    }
  }
  return null;
}

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmissionResult> {
  if (values.honeypot) {
    return {
      ok: false,
      status: "spam",
      message: "Spam protection triggered.",
    };
  }

  const provider = getContactProvider();
  if (!provider) {
    return {
      ok: false,
      status: "unconfigured",
      message: "The form is valid, but no delivery provider is connected yet. Nothing was sent.",
    };
  }

  try {
    const response = await fetch(provider.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Contact-Provider": provider.provider,
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        company: values.company,
        project: values.project,
        message: values.message,
        source: "website-contact-form",
      }),
    });

    if (!response.ok) {
      throw new Error(`Provider returned ${response.status}`);
    }

    return {
      ok: true,
      status: "submitted",
      message: "Message sent successfully.",
    };
  } catch (error) {
    return {
      ok: false,
      status: "error",
      message:
        error instanceof Error ? error.message : "The contact provider could not be reached.",
    };
  }
}
