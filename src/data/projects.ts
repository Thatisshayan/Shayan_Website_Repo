import raw from "./projects.json";

export type ProjectStage = "Live / active" | "In development" | "Concept" | "Opportunity";

export interface Project {
  title: string;
  slug: string;
  category: string;
  stage: ProjectStage;
  status: string;
  summary: string;
  audience: string;
  problem: string;
  solution: string;
  features: string[];
  cta: string;
  ctaLabel: string;
  ctaHref: string;
  tagline: string;
  businessModel?: string;
  featured?: boolean;
  tags?: string[];
  heroImage?: string;
  ogImage?: string;
}

export const projects: Project[] = raw as Project[];

export const BUSINESS_SLUGS = [
  "obsidian-media",
  "obsidian-studios",
  "blazely",
  "cullinan-construction",
];

export const PRODUCT_SLUGS = ["acc", "alphonso", "sessionguard", "tapcash", "founder-project"];

export const OPPORTUNITY_SLUGS = ["ai-tourist-assistant", "uniuni-dsp-opportunity"];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
  return slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is Project => Boolean(p));
}

export const SITE = {
  brand: "Shayan Venture Ecosystem",
  short: "SVE",
  owner: "Shayan Salimi",
  legalName:
    (import.meta.env.VITE_SITE_LEGAL_NAME as string | undefined)?.trim() ||
    "Legal company name placeholder",
  baseUrl:
    (import.meta.env.VITE_SITE_BASE_URL as string | undefined)?.trim() || "https://example.com",
  email:
    (import.meta.env.VITE_SITE_CONTACT_EMAIL as string | undefined)?.trim() ||
    "hello@shayansalimi.com",
  phone:
    (import.meta.env.VITE_SITE_CONTACT_PHONE as string | undefined)?.trim() || "+1 (000) 000-0000",
  location:
    (import.meta.env.VITE_SITE_LOCATION as string | undefined)?.trim() ||
    "Toronto / Ontario, Canada",
  tagline: "A founder-led ecosystem of AI products, service brands, and opportunity research.",
  social: {
    xHandle: (import.meta.env.VITE_SITE_X_HANDLE as string | undefined)?.trim() || "@example",
    x: (import.meta.env.VITE_SITE_X_URL as string | undefined)?.trim() || "https://x.com/example",
    linkedin:
      (import.meta.env.VITE_SITE_LINKEDIN_URL as string | undefined)?.trim() ||
      "https://www.linkedin.com/in/example",
    instagram:
      (import.meta.env.VITE_SITE_INSTAGRAM_URL as string | undefined)?.trim() ||
      "https://www.instagram.com/example",
    youtube:
      (import.meta.env.VITE_SITE_YOUTUBE_URL as string | undefined)?.trim() ||
      "https://www.youtube.com/@example",
  },
  images: {
    ogDefault:
      (import.meta.env.VITE_SITE_DEFAULT_OG_IMAGE as string | undefined)?.trim() ||
      "/social-preview.svg",
  },
};
