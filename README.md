# paintDemo — Painting & Renovation Frontend

Production Next.js App Router site (FR / EN / NL) for the painting and renovation marketing homepage.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- pnpm, Tailwind CSS 4, Motion for React
- Zod-validated lead forms (fail closed without backend)

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000/fr](http://localhost:3000/fr) (default locale).

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `BACKEND_API_URL` | For lead forms | Upstream API origin (no trailing slash). Without it, newsletter/estimate/callback fail closed with an honest error. |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Canonical site URL for metadata (e.g. `https://your-app.vercel.app`). |

Copy `.env.example` → `.env.local` for local work. Never commit `.env.local`.

## Deploy on Vercel

### 1. Push this repo

This repository root **is** the Next.js app (not a monorepo subfolder).

### 2. Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import **`ikram-lgtm/paintDemo`**.
3. Framework preset: **Next.js** (auto-detected).
4. **Root Directory:** leave empty (repo root).
5. **Install Command:** `pnpm install` (Vercel detects `packageManager` in `package.json`).
6. **Build Command:** `pnpm build` (default).
7. **Output:** Next.js default (no static export).

### 3. Environment variables (Project → Settings → Environment Variables)

Add for **Production** (and Preview if you want forms to work there):

```text
NEXT_PUBLIC_SITE_URL=https://YOUR_PROJECT.vercel.app
BACKEND_API_URL=https://your-api.example.com
```

Redeploy after saving env vars.

### 4. Domains

- Default: `*.vercel.app`
- Custom domain: Project → Settings → Domains → add DNS as shown by Vercel.
- Then set `NEXT_PUBLIC_SITE_URL` to that custom origin and redeploy.

### 5. Post-deploy checks

- `/fr`, `/en`, `/nl` load with correct `lang`
- No horizontal overflow on mobile
- Language switcher changes locale URL
- Lead forms show a clear error if `BACKEND_API_URL` is unset (expected)

## Project layout

```text
src/app/[locale]     Locale homepage routes
src/features/        Section features (hero, gallery, team, …)
src/shared/          i18n, motion tokens, UI chrome
public/              Images, SVGs, fonts assets
docs/                Design / content specs
```

## License

Private / proprietary unless otherwise stated.
