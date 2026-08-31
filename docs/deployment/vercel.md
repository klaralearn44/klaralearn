# KlaraLearn external deployment

This repository is prepared for a GitHub-connected Vercel deployment of the
marketing site and its read-only tutor-feed gateway. Bubble remains the system
of record for tutor accounts, verification, availability, parents, bookings,
and sessions.

## Repository and Vercel settings

Create the Vercel project from the repository root, not from
`artifacts/marketing-site`. The committed `vercel.json` supplies these settings:

- Install command: `corepack enable && pnpm install --frozen-lockfile`
- Build command: `pnpm --filter @workspace/marketing-site run build`
- Output directory: `artifacts/marketing-site/dist/public`
- Framework: Vite
- Node: the version in `.nvmrc` (also constrained in the root `package.json`)
- `/api/public-tutors` is a Vercel Function that reads the approved Bubble feed
  server-side and returns only the public tutor fields.

The build prerenders every route in the shared route manifest. Do not add a
catch-all rewrite to `index.html`: that would replace the route-specific HTML
and weaken search indexing. Vercel's filesystem handling should serve each
generated route directory directly.

## Vercel environment variables

Set these for the **marketing site**:

| Variable | Production value | Preview value |
| --- | --- | --- |
| `VITE_SITE_URL` | `https://www.klaralearn.com` | `https://www.klaralearn.com` |
| `VITE_PUBLIC_API_ORIGIN` | empty when using the same-origin proxy | the API origin available to preview |
| `VITE_INDEXABLE_BUILD` | `true` (recommended explicit setting) | unset or `false` |

Vercel production builds are detected from `VERCEL_ENV=production`; preview
and development builds fail closed to no-index. Set the production value
explicitly as well so the intent is visible in the project settings. On other
CDN providers, only the exact value `true` enables indexing.

Only variables prefixed with `VITE_` are included in browser code. Never put
database credentials, Bubble credentials, session secrets, or API tokens in
these variables.

Keep `VITE_PUBLIC_API_ORIGIN` empty in Vercel Production so the browser
requests the same marketing-domain path. Vercel's root `api/public-tutors.ts`
Function handles that path; no Replit API deployment is required.

For a preview deployment that cannot use the production proxy, set
`VITE_PUBLIC_API_ORIGIN` to the HTTPS API origin without a trailing slash, such
as `https://api.example.com`. The client will request `/api/public-tutors` below
that origin.

## Vercel tutor gateway requirements

Set these variables in the Vercel project's Production environment. They are
server-only and must not use the `VITE_` prefix:

- `BUBBLE_PUBLIC_TUTORS_SOURCE_URL`
- `PUBLIC_TUTOR_SLUGS` / `PUBLIC_TUTOR_IDS` when an explicit production inventory is used
- `PUBLIC_TUTOR_APPROVAL_FIELD`, `PUBLIC_TUTOR_MIN_RATE`, and `PUBLIC_TUTOR_MAX_RATE`

The temporary deployment intentionally leaves
`BUBBLE_PUBLIC_TUTORS_SOURCE_URL` empty, which selects the exact allowlisted
Bubble version-test tutor feed. That feed does not currently include approval,
safeguarding, or qualification fields, so it is treated only as available
inventory: the gateway applies completeness and rate checks, returns a strict
public-field projection, and does not mark profiles as verified.

When Bubble's production Data API is enabled, set
`BUBBLE_PUBLIC_TUTORS_SOURCE_URL` to the exact HTTPS production public-tutor
endpoint. The same Function will then require the approval, safeguarding,
qualification, rate, and optional explicit-inventory rules before returning a
profile. Any source outside the two exact KlaraLearn Bubble paths fails closed.

Confirm the deployed Function after publishing:

```sh
curl -fsS https://www.klaralearn.com/api/public-tutors
```

Expected response shape:

```json
{"response":{"results":[{"_id":"...","fullname":"..."}]}}
```

Do not expose the Bubble source directly to the browser. The Vercel Function
keeps the Bubble source URL and all server-only configuration out of browser
code.

## Domain, DNS, and CDN

1. Add `klaralearn.com` to Vercel and follow Vercel's DNS instructions.
2. Add `www.klaralearn.com` if it will receive traffic; keep it as the Vercel
   primary domain and redirect the apex domain to it.
3. Use HTTPS for both the site and API. Do not point canonical URLs at a
   Vercel preview or an API hostname.
4. Keep hashed assets under `/assets/` cacheable for one year. HTML is
   configured for revalidation so metadata changes are not trapped behind a
   long CDN cache.
5. After a production deploy, request fresh versions of changed sitemap,
   robots, and route HTML only if the provider's cache view shows stale
   content. Do not purge immutable hashed assets unless debugging a provider
   issue.

## Indexing checklist

After the custom domain is live:

1. Confirm `https://www.klaralearn.com/robots.txt` contains
   `Sitemap: https://www.klaralearn.com/sitemap.xml`.
2. Confirm `https://www.klaralearn.com/sitemap.xml` returns XML and contains only
   canonical public routes.
3. Check a sample of the homepage, subject, location, blog, finder, privacy,
   and terms routes with direct requests, not only client-side navigation.
4. Confirm each canonical page has one canonical URL, one visible H1, a
   route-specific title and description, and parseable JSON-LD.
5. Confirm `/finder-a-tutor` is `noindex, follow`, canonicalizes to
   `/find-a-tutor`, and is absent from the sitemap.
6. Add the primary `www` property to Google Search Console and Bing Webmaster
   Tools, submit `/sitemap.xml`, and complete any requested DNS or HTML
   verification.
7. Keep preview builds non-indexable with `VITE_INDEXABLE_BUILD=false`.

The build will fail if route HTML or core metadata is missing. Search Console
and Bing still need to be connected by an account owner because verification
and data access are account-level actions.

## Local production-shaped check

From a fresh checkout:

```sh
corepack enable
pnpm install --frozen-lockfile
VITE_SITE_URL=https://www.klaralearn.com \
VITE_PUBLIC_API_ORIGIN=https://api.example.com \
VITE_INDEXABLE_BUILD=true \
pnpm --filter @workspace/marketing-site run build
```

The resulting files are in
`artifacts/marketing-site/dist/public`. Do not commit this generated directory.