# Construction Hub Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from an existing template and re-skinned. This is run #4 in that series (after landscaping, roofing, and painting), forking `hvac-template` into `construction-hub-template`, following the established [template re-skin playbook].

The marketplace catalog (`libs/local-db/templates.ts` in the main Scott Apps site) already defines the `construction-hub` slug as `comingSoon: true` with required feature set: Before/after project gallery, Case study pages, Subcontractor section, Licensing badge section, Service area pages. Required page list: Home, Projects, Services, About, Subcontractors, Contact.

`hvac-template` is the chosen fork base specifically because it still contains an orphaned `src/app/projects/` page and several unused sibling components (`BeforeAfter`, `CaseStudyGrid`, `HighlightedProject`, `InsuredBadge`, `ProjectCardGrid`) — leftover Scott-Apps-own-agency portfolio scaffolding from an older template generation, already flagged for deletion in prior reskin runs (landscaping, roofing already removed it). For Construction Hub this scaffolding is not stale — it maps directly onto the catalog's required project-gallery/case-study/licensing features, so it gets reskinned into real content instead of deleted.

## Business Identity (locked, reuse verbatim in every task dispatch)

- **Business name:** Bedrock Construction Group
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead (Central Texas cluster, consistent with existing landscaping/roofing/painting builds)
- **Founded:** 2012
- **Credential/license line:** "Licensed & Bonded General Contractor" + AGC (Associated General Contractors of America) member badge
- **Guarantee:** 2-Year Workmanship Warranty
- **Social proof:** 4.8★, 350+ reviews, "180+ projects completed"
- **Brand accent color:** construction amber/safety-yellow (`#F5A623`-ish) paired with charcoal — distinct from HVAC orange, roofing blue, landscaping green, painting's chosen accent
- **Phone:** (254) 720-8100 / `tel:+12547208100`
- **Email:** hello@bedrockconstructiontx.com
- **Address:** 615 Franklin Ave, Waco, TX 76701
- No per-city SEO subpages (same standing decision as prior three runs)

## Services (6)

1. New Home Construction
2. Home Additions & Remodels
3. Kitchen & Bath Renovation
4. Commercial Construction
5. Design-Build Services
6. General Contracting / Project Management

## Industries Served (3, B2B vertical pattern — same shape as prior runs)

1. Real Estate Developers
2. Property Management Firms
3. Municipal & Public Works

## Pages

Standard set carried from the template (about, contact, blogs, service-areas, industries, services) plus:

- **Projects** (`src/app/projects/`) — reskin of the existing orphaned agency-portfolio page. Drop the `ScottAppsCTA` self-promotion block entirely (not relevant to any trade). Rewire `ProjectCardGrid` to real before/after renovation project data; incorporate `BeforeAfter` component for visual before/after comparisons.
- **Case studies** (`src/app/projects/[slug]/` or similar, new route) — individual project detail pages using `CaseStudyGrid` / `HighlightedProject`, populated from a new `libs/local-db/projects.ts`-equivalent data file (rewritten, not the old agency project data).
- **Subcontractors** (`src/app/subcontractors/`, entirely new page — no existing sibling to reskin) — trust-building page: "we vet and manage top subcontractors," patterned visually after the existing `WhyChooseUs`/`TrustBar` component layout conventions.
- **Licensing badge section** — `InsuredBadge` component reworded/repurposed into the licensing/bonding trust badge called for by the catalog feature list.

## Non-goals

- No per-city SEO subpages.
- No new component primitives beyond what `hvac-template`'s shared library already offers (Subcontractors page composes existing components in a new arrangement, not new component code).
- No deploy/marketplace-catalog-flip work — out of scope for this build pass, same as prior runs (logged as a follow-up in memory once shipped).

## Process

Follow the established playbook exactly:

1. **Step 0 sweep** (before any page content): shared components, `layout.tsx`, root `page.tsx`, `robots.ts`/`llms.txt`/`sitemap.xml`, accent-color SCSS token + any hardcoded hex duplicates, vendor-identity leaks (admin/legal/API-infra files), orphan reachability check.
2. **Page-by-page content**, sibling-reference pattern, batched multi-page dispatch once a reference page per category is proven.
3. **Final sweep + Playwright QA** — 375/768/1440px across ~7 representative pages, screenshot + console-error check, explicit visual confirmation of the amber/charcoal accent color (the roofing run's accent-color bug was only caught by an actual screenshot, not grep).

## Success Criteria

- All catalog-required features present and functioning: before/after gallery, case studies, subcontractors page, licensing badges, service area pages.
- Zero old-trade (HVAC) or vendor-identity (Scott Apps agency) content remaining anywhere in the codebase, including admin/legal/infra files.
- Correct accent color verified via rendered screenshot, not just the SCSS variable.
- Dev server boots clean, zero horizontal overflow at 375/768/1440px, zero console errors across the QA page set.
