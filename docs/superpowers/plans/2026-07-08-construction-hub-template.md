# Bedrock Construction Group — Implementation Plan

**Goal:** Re-skin the forked `hvac-template` codebase (now `construction-hub-template`) into a complete "Bedrock Construction Group" marketing site, reusing 100% of the existing architecture and component library. Business identity, services, industries, and page list are locked in `docs/superpowers/specs/2026-07-08-construction-hub-design.md` — read that first.

**Method:** Sibling-reference pattern (per spec §Process). Every new page/section is a 1:1 structural clone of an existing HVAC-era sibling of the same shape (same components, same prop shapes), with only copy/data/slugs changed. No new component primitives except the two new pages called out below (Subcontractors, Case Study detail), which compose only existing components.

**Slug/content mapping (services, 6):**
| Old (HVAC) slug | New slug | New service |
|---|---|---|
| ac-repair | new-home-construction | New Home Construction |
| heating | home-additions-remodels | Home Additions & Remodels |
| installation | kitchen-bath-renovation | Kitchen & Bath Renovation |
| duct-cleaning | commercial-construction | Commercial Construction |
| indoor-air-quality | design-build-services | Design-Build Services |
| maintenance | general-contracting | General Contracting / Project Management |

Each old service dir also has `waco-tx/temple-tx/killeen-tx` city subpages — **delete these**, per spec's "no per-city SEO subpages" standing decision (same as landscaping/roofing/painting).

**Slug/content mapping (industries, 3):**
| Old slug | New slug | New industry |
|---|---|---|
| automotive | real-estate-developers | Real Estate Developers |
| manufacturing | property-management-firms | Property Management Firms |
| oil-gas | municipal-public-works | Municipal & Public Works |

**Blog posts (3, new topics, Central Texas locale kept):**
| Old slug | New slug | New topic |
|---|---|---|
| heat-pump-vs-traditional-hvac-texas | how-to-choose-a-general-contractor-waco-tx | What to check before hiring a GC |
| how-often-should-you-replace-hvac-filter | home-addition-permit-guide-waco-tx | Permitting/timeline guide for additions |
| signs-ac-needs-replacement-waco-tx | signs-your-home-needs-a-remodel-waco-tx | Signs a remodel is overdue |

**Global constraints:** business identity, colors, phone/email/address all come verbatim from the spec's "Business Identity (locked)" block — do not re-derive or vary them per task. After every task: `npm run typecheck` from `construction-hub-template/` must pass before committing.

## Tasks

1. **Brand tokens** — `src/app/globalVariables.scss`: swap navy/orange HVAC palette for amber (`#F5A623`-ish) + charcoal, keep token *names* unchanged so no component SCSS needs touching.
2. **Header & Footer rebrand** — logo text, tagline, marquee items, phone/email/address, licensing line ("Licensed & Bonded General Contractor").
3. **Vendor/infra sweep** — `robots.ts`, `sitemap.xml/route.ts`, `llms.txt/route.ts`, `not-found.tsx`, `privacy-policy`, root `layout.tsx` metadata, admin login/dashboard header strings — remove all HVAC/Arctic-Air and any Scott-Apps-agency identity leaks.
4. **Licensing badge rework** — `InsuredBadge` component reworded from generic "insured" messaging to the AGC/licensed-and-bonded trust badge called for by the catalog feature list.
5. **Homepage hero** — `Pages/Home/WelcomePage` content.
6. **Homepage body** — `src/app/page.tsx`: services array (6, new), metrics, WhyChooseUs, process steps, expectations, local areas, FAQ, trust badges, CTA banner copy.
7–12. **Service pages ×6** — per slug map above, sibling-cloned from the matching old HVAC service page; delete each old service dir's city subpages.
13. **Services index** — `services/page.tsx` + `services/layout.tsx`.
14–16. **Industry pages ×3** — per slug map above.
17. **Industries index** — `industries/page.tsx` + `industries/layout.tsx`.
18. **Reviews data** — `libs/local-db/reviews.ts`, construction-flavored review copy, same shape.
19–21. **Blog posts ×3** — per slug map above; delete old HVAC blog dirs, create new ones (layout + page + module.scss), sibling-cloned structure.
22. **About / Contact / Service Areas** — copy pass only, same component composition.
23. **Projects page** — reskin `src/app/projects/page.tsx`: drop `ScottAppsCTA` block entirely, rewire `ProjectCardGrid` + `BeforeAfter` to real renovation/build project data via new `libs/local-db/projects.ts`.
24. **Case study detail pages** — new route `src/app/projects/[slug]/page.tsx` using `CaseStudyGrid`/`HighlightedProject`, driven by `libs/local-db/projects.ts`.
25. **Subcontractors page** — new `src/app/subcontractors/page.tsx` + `layout.tsx`: "we vet and manage top subcontractors" trust page, composed from existing `WhyChooseUs`/`TrustBar`-pattern components only.
26. **Final sweep** — grep for leftover HVAC/Arctic-Air/vendor-identity strings repo-wide; `npm run typecheck` + `npm run lint`; dev-server visual QA at 375/768/1440px across home, services index, one service page, industries index, projects, subcontractors, contact; confirm amber/charcoal accent color via rendered screenshot (not just the SCSS var); zero console errors.

Each task = one commit, prefixed `brand:`, `feat:`, or `content:` as appropriate, matching the convention used in landscaping/roofing/painting-template.
