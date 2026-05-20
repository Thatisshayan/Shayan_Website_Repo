import type { Project } from "@/data/projects";
import { SITE } from "@/data/projects";

export type SeoInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: "website" | "article";
};

export function absoluteUrl(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalized, SITE.baseUrl).toString();
}

export function buildSeoHead({
  title,
  description,
  pathname,
  image = SITE.images.ogDefault,
  type = "website",
}: SeoInput) {
  const canonical = absoluteUrl(pathname);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: SITE.brand },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "theme-color", content: "#0b0b16" },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.brand,
    legalName: SITE.legalName,
    url: SITE.baseUrl,
    description: SITE.tagline,
    founder: SITE.owner,
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: SITE.location,
    sameAs: [SITE.social.x, SITE.social.linkedin, SITE.social.instagram, SITE.social.youtube],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE.baseUrl,
    description: SITE.tagline,
    publisher: {
      "@type": "Organization",
      name: SITE.brand,
    },
  };
}

export function projectSchema(project: Project) {
  if (project.slug === "cullinan-construction") {
    return {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: project.title,
      url: absoluteUrl(`/${project.slug}`),
      description: project.summary,
      areaServed: SITE.location,
      provider: {
        "@type": "Organization",
        name: SITE.brand,
      },
    };
  }

  if (["acc", "alphonso", "sessionguard", "tapcash", "founder-project"].includes(project.slug)) {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      url: absoluteUrl(`/${project.slug}`),
      description: project.summary,
      applicationCategory: project.category,
      operatingSystem: "Web",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    url: absoluteUrl(`/${project.slug}`),
    description: project.summary,
    category: project.category,
    brand: {
      "@type": "Brand",
      name: SITE.brand,
    },
  };
}
