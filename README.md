# Nuca Systems — nucasystems.com

Next.js (App Router, TypeScript) single-page presentation site for **Nuca Systems**, built from the design and content of `nuca-systems.html`. Uses Tailwind CSS and Radix UI.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and set:

   - `RESEND_API_KEY` — your [Resend](https://resend.com) API key
   - `CONTACT_FROM_EMAIL` — verified sender (e.g. `onboarding@resend.dev` or your domain)
   - `CONTACT_TO_EMAIL` — inbox for contact form submissions (e.g. `info@nucasystems.com`)

3. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project structure

- **`/app`** — `layout.tsx`, `page.tsx` (landing), `/contact/page.tsx`, `/api/contact/route.ts`, `globals.css`
- **`/components`** — `Header`, `Footer`, `Reveal`, `/sections/*` (Hero, Services, ITConsulting, Media, About, Contact), `ContactForm`, `/ui/Toaster`
- **`/content/siteContent.ts`** — all copy and labels (source of truth from the HTML)
- **`/lib/validateContact.ts`** — Zod schema and server-side validation for the contact form

## Features

- Single-page landing with anchored sections: Home, Services, IT Consulting, Media, About, Contact
- Optional `/contact` route that reuses the same Contact section
- Sticky header with blur, scroll-based active nav (IntersectionObserver)
- Tailwind theme tokens matching the HTML (navy, blue, red, cyan, etc.)
- Fonts: Outfit (headings), DM Sans (body) via `next/font/google`
- Scroll reveal animations (IntersectionObserver, no heavy libs)
- Contact form: Radix Select for “I’m interested in…”, Resend for sending email, Zod validation, honeypot (`website`) for spam
- Success/error feedback via Radix Toast

## Build

```bash
npm run build
npm start
```

## SEO

Metadata (title, description, OG) is set in `app/layout.tsx` from `content/siteContent.ts`.
