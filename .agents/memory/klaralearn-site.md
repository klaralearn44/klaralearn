---
name: KlaraLearn site structure
description: Page inventory, brand, routing conventions, and GEO/AEO content standards for the KlaraLearn marketing site
---

## Brand
- Navy #1B3D5C, Teal #00A896, Orange #E05C2A
- Fonts: Playfair Display (headings), Source Sans 3 (body)
- App URL: https://app.klaralearn.com (all CTAs)
- Backend is a Bubble app. Public tutor discovery is served through the first-party API proxy, not directly from Bubble.

## Public tutor cards
- Preserve routing/exam taxonomy (especially `11 Plus`) before limiting visual tags: source records can have many subjects, which otherwise hides their most important matching label.

**Why:** Bubble's public tutor records have optional, inconsistent fields and combine broad subject lists with curricula. The marketing site must surface relevant tutors without misleading parents when the live feed is unavailable.

**How to apply:** When extending the tutor taxonomy, make each routing-relevant label resilient to incomplete source metadata and ensure it survives visual tag limits. Tutor profile links use `https://app.klaralearn.com/publictutorcard/{slug}`.

## Tutor inventory status
- Use the Bubble version-test feed as current availability inventory, but never describe those profiles as reviewed, vetted, approved, or safeguarding-verified.

**Why:** The production Bubble Data API is unavailable. The user explicitly chose to show suitable version-test records as “Available tutors” so real profiles remain visible without making unsupported review claims.

**How to apply:** Proxy only the exact KlaraLearn Bubble tutor endpoints, sanitise fields, and require complete profile copy plus an in-range rate. Keep static samples out of discovery. If production is enabled later, restore explicit approval/safeguarding checks and reviewed wording only for records that pass them. Public responses must not be cached.

## Artifact
- Dir: artifacts/marketing-site
- Preview path: / (root)
- Workflow: `artifacts/marketing-site: web`

## Pages built (as of 2026-08-13)
Transactional: /, /subjects/11-plus/, /subjects/maths/, /subjects/gcse-maths/ (stub), /subjects/english/ (stub), /location/london/, /location/kent/, /location/online/, /how-it-works/, /about/, /parents/
Blog: /blog/, /blog/what-is-a-grammar-school/, /blog/what-is-the-11-plus/, /blog/11-plus-verbal-reasoning/, /blog/11-plus-practice-papers/, /blog/how-to-prepare-for-11-plus/, /blog/grammar-school-admissions/, /blog/grammar-school-fees/, /blog/how-much-does-tutoring-cost/, /blog/best-grammar-schools-uk/, /blog/grammar-school-vs-comprehensive/

## GEO/AEO content standards (apply to every new page)
- Quick Answer box immediately after H1: styled teal left-border callout, ≤60 words, self-contained direct answer for AI citation and featured snippet
- FAQPage JSON-LD on every page, ≥6 questions
- Article JSON-LD on every blog page (datePublished: 2025-09-01, dateModified: current)
- FAQ headings as exact PAA-style questions
- Specific numbers always (163 grammar schools, £15/hr, 36 Kent schools) — never vague language
- Comparison tables wherever pricing or options are discussed
- ≥3 internal links per page using wouter Link

**Why:** User explicitly requires GEO (AI citation) and AEO (featured snippet/PAA) optimisation. The Quick Answer box pattern is the core mechanism.

## Routing conventions
- Routes defined in App.tsx using wouter Switch/Route
- Page files: artifacts/marketing-site/src/pages/
- SEO component: artifacts/marketing-site/src/components/seo/SEOHead.tsx
- No new npm deps — use framer-motion, wouter, lucide-react, react-helmet-async (already installed)
