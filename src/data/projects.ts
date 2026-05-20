import raw from "./projects.json";

export interface Project {
  title: string;
  slug: string;
  category: string;
  status: string;
  summary: string;
  audience: string;
  problem: string;
  solution: string;
  features: string[];
  cta: string;
  tagline: string;
}

export const projects: Project[] = raw as Project[];

export const BUSINESS_SLUGS = [
  "obsidian-media",
  "obsidian-studios",
  "blazely",
  "cullinan-construction",
];

export const PRODUCT_SLUGS = [
  "acc",
  "alphonso",
  "sessionguard",
  "tapcash",
  "founder-project",
];

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
  email: "hello@shayansalimi.com", // placeholder
  phone: "+1 (000) 000-0000", // placeholder
  location: "Toronto / Ontario, Canada",
  tagline:
    "A complete ecosystem of AI products, business ventures, media brands, and operating systems.",
};
