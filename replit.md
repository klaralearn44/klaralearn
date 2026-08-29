# KlaraLearn

SEO-optimised marketing website for KlaraLearn (https://klaralearn.com) — a tutoring marketplace that connects UK secondary school students and parents with affordable private tutors (including tutors from developing countries) for the 11 Plus, GCSE, SATs, and Common Entrance exams.

## Run & Operate

- `pnpm --filter @workspace/marketing-site run dev` — run the marketing site
- `pnpm --filter @workspace/api-server run dev` — run the API server on `PORT`
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/marketing-site run build` — build and validate all prerendered marketing routes
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- External deployment instructions: `docs/deployment/vercel.md`
- Environment variable names and safe placeholders: `.env.example`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

- The marketing site is a static Vite artifact with build-time prerendering; do not add a catch-all rewrite that replaces route-specific HTML.
- Production canonicals use `VITE_SITE_URL`; Vercel production is indexable, while preview and development builds fail closed to no-index.
- Browser tutor requests are same-origin by default and can use `VITE_PUBLIC_API_ORIGIN` for a separately hosted API.
- The production API requires an exact `PUBLIC_CORS_ORIGINS` allowlist.

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
