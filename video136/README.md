# BitLinks - URL Shortener — Next.js + MongoDB

This repository contains a small URL shortener web application named BitLinks, built with Next.js (App Router) and MongoDB. It was created as part of a CodeWithHarry tutorial and demonstrates a minimal, production-ready structure for building server-rendered pages, API routes, and database-backed features.

**Tech stack:** `Next.js` (App Router), `React`, `Tailwind CSS` (configuration present), `mongodb` (official driver)

**Useful for:** learning Next.js 13+ App Router, creating simple APIs with server functions, and working with MongoDB from server-side code.

**Live demo:** Deployed to Vercel — `https://<your-vercel-deployment>.vercel.app` (replace with your actual deployment URL).

**Project layout (important files):**

- `app/` — App Router pages and routes (`page.js`, dynamic `[shorturl]/page.js`, and API under `app/api`).
- `components/` — React UI components (e.g., `Navbar.js`).
- `lib/mongodb.js` — MongoDB client helper (reads `MONGODB_URI` from environment).
- `shorten/` — UI for creating shortened URLs.
- `public/` — Static assets.

**Key dependencies (see `package.json`):**

- `next` 16.x, `react` 19.x, `mongodb` 7.x

## Quick Start

Prerequisites:

- Node.js (recommended v18+ or latest LTS)
- A MongoDB database (Atlas or self-hosted)

Install dependencies:

```powershell
npm install
```

Create a `.env.local` file in the project root with at least the following variable:

```text
MONGODB_URI=your_mongodb_connection_string
```

Recommended (optional):

```text
# Base URL used by any client-side redirects or displays. Example:
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Run the development server:

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` — Starts Next.js in development mode.
- `npm run build` — Builds the app for production.
- `npm run start` — Starts the production server (after `build`).
- `npm run lint` — Runs ESLint.

## Environment Variables

- `MONGODB_URI` (required): MongoDB connection string used by `lib/mongodb.js`.
- `NEXT_PUBLIC_BASE_URL` (optional): Public base URL for canonical links or redirects.

Keep secrets out of source control. Use `.env.local` for local development and your host's secret manager for production (Vercel Environment Variables, etc.).

## How It Works (high level)

- The app exposes a small UI that accepts a long URL and creates a short token.
- Server-side API (under `app/api/generate`) stores the mapping in MongoDB via `lib/mongodb.js`.
- The dynamic route `[shorturl]` reads the token and redirects to the original URL.

## Deploying

Deploy to Vercel for the simplest experience. Configure `MONGODB_URI` in the project settings (Environment Variables) on Vercel and push the repository.

Other hosts that support Node/Next.js will also work — ensure environment variables are set and the Node version matches your needs.

## License

This repository is provided as-is for learning. Add a license file if you plan to open-source it publicly.

---
