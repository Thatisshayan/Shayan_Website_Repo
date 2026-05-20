# Shayan Website Repo

Production-ready founder ecosystem website built with TanStack Start, React, TypeScript, and Vite.

## Overview

This site presents a multi-page ecosystem for founder-led projects, businesses, services, and opportunities.

Core pages:

- Home
- Projects
- Businesses
- Services
- About
- Contact
- Privacy
- Terms

Project pages:

- ACC
- Alphonso Ecosystem
- SessionGuard
- TapCash
- Obsidian Media
- Obsidian Studios
- Blazely
- Founder Project
- Cullinan Construction
- AI Tourist Assistant Platform
- UniUni DSP Opportunity

## Tech Stack

- TanStack Start
- TanStack Router
- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Install

```bash
npm install
```

## Dev

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run build:dev` - dev-mode build
- `npm run preview` - preview the build locally
- `npm run lint` - run ESLint
- `npm run format` - format the repo with Prettier

## Environment Variables

Copy `.env.example` to `.env` and replace the placeholders.

- `VITE_SITE_BASE_URL` - canonical base URL used by SEO and sitemap generation
- `VITE_SITE_CONTACT_EMAIL` - public contact email
- `VITE_SITE_CONTACT_PHONE` - public contact phone
- `VITE_SITE_LOCATION` - public location string
- `VITE_SITE_X_HANDLE` - X/Twitter handle placeholder
- `VITE_SITE_X_URL` - X/Twitter profile URL
- `VITE_SITE_LINKEDIN_URL` - LinkedIn profile URL
- `VITE_SITE_INSTAGRAM_URL` - Instagram profile URL
- `VITE_SITE_YOUTUBE_URL` - YouTube channel URL
- `VITE_SITE_DEFAULT_OG_IMAGE` - default Open Graph image path
- `VITE_SITE_LEGAL_NAME` - legal company name placeholder used in schema and admin notes
- `VITE_FORMSPREE_ENDPOINT` - optional contact delivery endpoint
- `VITE_NETLIFY_FORMS_ENDPOINT` - optional contact delivery endpoint
- `VITE_RESEND_CONTACT_ENDPOINT` - optional contact delivery endpoint
- `VITE_HUBSPOT_CONTACT_ENDPOINT` - optional contact delivery endpoint
- `VITE_AIRTABLE_CONTACT_ENDPOINT` - optional contact delivery endpoint
- `VITE_LOVABLE_CONTACT_ENDPOINT` - optional contact delivery endpoint
- `VITE_CONTACT_ENDPOINT` - fallback custom contact endpoint

## Add a New Project

1. Add the new entry to `src/data/projects.json`.
2. Include `slug`, `title`, `category`, `stage`, `status`, `summary`, `audience`, `problem`, `solution`, `features`, `businessModel`, `cta`, `ctaLabel`, `ctaHref`, and `tagline`.
3. Add tags and preview image paths if they are available.
4. The project detail route is file-based, so the new slug is picked up automatically by `src/routes/$slug.tsx`.
5. If the project belongs in a featured section, update the slug groups in `src/data/projects.ts`.

## Connect the Contact Form

The contact form is wired for local validation only until you connect a provider.

Supported future connection styles:

- Formspree
- Netlify Forms
- Resend
- HubSpot
- Airtable
- Lovable Cloud
- custom backend

Set one of the endpoint env vars listed above and the form will post JSON to that endpoint.

## Update `BASE_URL`

1. Set `VITE_SITE_BASE_URL` in `.env`.
2. Update the deploy target domain.
3. Rebuild the site so the canonical tags, sitemap, and social metadata use the new URL.

## After Connecting a Custom Domain

1. Set `VITE_SITE_BASE_URL` to the final production domain.
2. Redeploy the site.
3. Open `/sitemap.xml` and confirm the URLs use the live domain.
4. Inspect page source and confirm canonical tags point at the live domain.
5. Submit the sitemap to Google Search Console.
6. Test SSL on the bare domain and `www` variant.
7. Confirm `www` and non-`www` redirect behavior matches your preferred canonical host.
8. Recheck `robots.txt` after DNS and CDN propagation.
9. Verify the contact form provider endpoint after the domain switch.

## Deploy on Lovable

1. Import the repo or connect the GitHub project.
2. Set the environment variables.
3. Verify the deployed route list and metadata.
4. Publish once the contact endpoint and domain are confirmed.

## Deploy on Vercel

1. Create a new Vercel project from the GitHub repo.
2. Set the environment variables.
3. Leave the build command as `npm run build`.
4. Deploy and verify the canonical URLs, sitemap, and contact form behavior.

## Deploy on Netlify

1. Connect the GitHub repo or drag the build output into Netlify.
2. Set the environment variables.
3. This repo is already configured with `@netlify/vite-plugin-tanstack-start` and `netlify.toml`.
4. Netlify uses `vite build` and publishes `dist/client`.
5. Confirm `robots.txt` and `sitemap.xml` resolve from the live domain.

## Deploy on Cloudflare Pages

1. Connect the GitHub repo in Cloudflare Pages.
2. Set the environment variables.
3. Use `npm run build` as the build command.
4. Verify the live routes, sitemap, and contact provider configuration.

## Notes

- The contact form does not send messages until you connect a real provider.
- Project content is centralized in `src/data/projects.json`.
- The site is designed to stay multi-page and should not be collapsed into a single landing page.
