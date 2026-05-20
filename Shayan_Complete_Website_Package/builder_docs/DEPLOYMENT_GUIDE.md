# Deployment Guide

## What this package is

This repo is a TanStack Start website with a public marketing shell, project routes, SEO metadata, sitemap generation, and a client-side contact form that can be connected to a real provider later.

## Before You Deploy

1. Copy `.env.example` to `.env`.
2. Set `VITE_SITE_BASE_URL` to the real production domain.
3. Set the public contact email and phone placeholders.
4. Connect a real contact endpoint if you want messages to be delivered.
5. Verify every project page, footer link, sitemap URL, and canonical tag.

## Lovable

1. Import the GitHub repo into Lovable.
2. Set the environment variables.
3. Confirm the route list still includes the full ecosystem.
4. Verify the contact form behavior before publishing.

## Vercel

1. Create a new Vercel project from the repo.
2. Set the environment variables.
3. Use `npm run build` as the build command.
4. Deploy and validate the live sitemap, robots file, and canonical URLs.

## Netlify

1. Connect the repo or build output.
2. Set the environment variables.
3. Use `npm run build` as the build command.
4. Check that `robots.txt` and `sitemap.xml` resolve from the production domain.

## Cloudflare Pages

1. Connect the repo in Cloudflare Pages.
2. Set the environment variables.
3. Use `npm run build` as the build command.
4. Verify the deployed pages and project routes.

## Post-Deploy Checks

- Open the Home, Projects, Businesses, Services, About, Contact, Privacy, and Terms pages.
- Open each project page.
- Confirm the header and footer navigation.
- Confirm the canonical URL on each page.
- Confirm the sitemap includes all required routes.
- Confirm the contact form shows validation and unconfigured-provider states honestly.
- Confirm no placeholder text was left in production-sensitive fields.
