// libs/local-db/projects.ts
// ─────────────────────────────────────────────────────────────────────────────
// Central data store for all completed projects shown on the /projects page
// and the /projects/[slug] case study pages. Edit here — ProjectCardGrid,
// BeforeAfter, and the case study route all read from this file automatically.
//
// ADDING A PROJECT:
//   1. Add an entry to the correct category array below.
//   2. Drop your images in /public/projects/{id}/
//   3. That's it. No other files need to change.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'New Home Construction'
  | 'Home Additions & Remodels'
  | 'Kitchen & Bath Renovation'
  | 'Commercial Construction'
  | 'Design-Build Services'
  | 'General Contracting';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  /** 2–3 sentence teaser shown on the card */
  shortDesc: string;
  /** Full story shown in the modal and case study page */
  fullDesc: string;
  /** Headline metric badge on the card image */
  result: string;
  tags: string[];
  /** images[0] = card thumbnail + modal hero */
  images: ProjectImage[];
  /** Optional before/after pair for the BeforeAfter slider component */
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW HOME CONSTRUCTION
// ─────────────────────────────────────────────────────────────────────────────
const newHomeProjects: Project[] = [
  {
    id: 'lakeshore-custom-home',
    title: 'Lakeshore Drive Custom Home',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'New Home Construction',
    year: '2025',
    sqft: '3,400 sq ft',
    duration: '9 months',
    shortDesc: 'Ground-up custom home build on a Woodway lakeshore lot — 4 bed, 3.5 bath, open-concept living with a full outdoor kitchen.',
    fullDesc: 'The homeowners came to us with an architect\'s plans and a hard deadline before their lease was up. Bedrock managed the full build from foundation to final walkthrough: site prep, framing, mechanical/electrical/plumbing coordination across every subcontractor trade, and finish carpentry. Weekly progress photos and a fixed monthly schedule kept the owners informed without them having to chase us for updates. Delivered two weeks ahead of the written timeline.',
    result: 'Delivered Early',
    tags: ['Custom Build', 'Foundation to Finish', 'Woodway'],
    images: [
      { src: '/pages/home/services/service-1.jpg', alt: 'Lakeshore Drive custom home exterior', caption: 'Completed exterior' },
      { src: '/pages/home/services/service-2.jpg', alt: 'Open-concept living area', caption: '' },
      { src: '/pages/home/services/service-4.jpg', alt: 'Outdoor kitchen and patio', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'spring-creek-spec-homes',
    title: 'Spring Creek Spec Home Cluster',
    client: 'Central Texas Development Partners',
    location: 'McGregor, TX',
    category: 'New Home Construction',
    year: '2024',
    sqft: '2,100–2,600 sq ft each',
    duration: '11 months (4 homes)',
    shortDesc: 'Four spec homes built on a fixed developer schedule and budget for a McGregor infill subdivision.',
    fullDesc: 'A regional developer needed four spec homes built to a strict draw schedule tied to construction financing. Bedrock delivered detailed, itemized bids up front so the numbers would hold through the loan process, then staged all four builds in parallel to hit every draw milestone on time. Zero missed inspections, zero financing delays caused by construction slippage.',
    result: 'On-Schedule Draws',
    tags: ['Spec Homes', 'Developer Build', 'McGregor'],
    images: [
      { src: '/pages/home/services/service-3.jpg', alt: 'Spring Creek spec home exteriors', caption: '' },
      { src: '/pages/home/welcome/mat-1.jpg', alt: 'Framing in progress', caption: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOME ADDITIONS & REMODELS
// ─────────────────────────────────────────────────────────────────────────────
const additionsProjects: Project[] = [
  {
    id: 'hewitt-primary-suite-addition',
    title: 'Hewitt Primary Suite Addition',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Home Additions & Remodels',
    year: '2025',
    sqft: '420 sq ft addition',
    duration: '7 weeks',
    shortDesc: 'A 420 sq ft primary suite addition matched seamlessly to the home\'s existing brick and roofline.',
    fullDesc: 'The homeowners wanted a primary suite addition that looked like it had always been part of the house, not a bolt-on. Bedrock sourced matching brick, replicated the existing roofline pitch, and tied the new HVAC zone into the home\'s existing system. Daily site cleanup kept the disruption to a minimum for a family living in the home through the entire build.',
    result: 'Seamless Match',
    tags: ['Room Addition', 'Primary Suite', 'Hewitt'],
    images: [
      { src: '/pages/home/welcome/mat-2.jpg', alt: 'New primary suite addition exterior', caption: '' },
      { src: '/pages/home/welcome/mat-3.jpg', alt: 'Primary suite interior', caption: '' },
    ],
    beforeImage: { src: '/pages/home/welcome/before.jpg', alt: 'Home exterior before addition' },
    afterImage:  { src: '/pages/home/welcome/after.jpg', alt: 'Home exterior after addition' },
    featured: true,
  },
  {
    id: 'mcgregor-garage-workshop',
    title: 'McGregor Detached Garage & Workshop',
    client: 'Private Residence',
    location: 'McGregor, TX',
    category: 'Home Additions & Remodels',
    year: '2025',
    sqft: '640 sq ft',
    duration: '6 weeks',
    shortDesc: 'Detached two-car garage with a full workshop above, built to match the main house.',
    fullDesc: 'A straightforward but detail-heavy build: matching siding and trim, a full electrical subpanel for shop equipment, and a staircase to a finished workshop loft above the garage bays. Built to the exact itemized bid signed at kickoff, no change-order surprises.',
    result: 'Zero Change Orders',
    tags: ['Detached Garage', 'Workshop', 'McGregor'],
    images: [
      { src: '/pages/home/welcome/hero-main.jpg', alt: 'Detached garage and workshop exterior', caption: '' },
    ],
  },
  {
    id: 'woodway-whole-home-remodel',
    title: 'Woodway Whole-Home Remodel',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Home Additions & Remodels',
    year: '2024',
    sqft: '2,800 sq ft renovated',
    duration: '4 months',
    shortDesc: 'Full interior remodel of a 1990s Woodway home — reworked floor plan, new mechanicals, modern finishes throughout.',
    fullDesc: 'The owners bought a dated but well-located home and wanted the interior rebuilt around a more open floor plan. Bedrock removed several non-structural walls, relocated the kitchen, replaced aging electrical and plumbing, and finished the whole home with a consistent modern palette. The family relocated temporarily and moved back in on the promised date.',
    result: 'On the Promised Date',
    tags: ['Whole-Home Remodel', 'Floor Plan Reconfiguration', 'Woodway'],
    images: [
      { src: '/pages/home/services/service-1.jpg', alt: 'Remodeled open-concept living space', caption: '' },
      { src: '/pages/home/services/service-2.jpg', alt: 'Updated kitchen and dining area', caption: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// KITCHEN & BATH RENOVATION
// ─────────────────────────────────────────────────────────────────────────────
const kitchenBathProjects: Project[] = [
  {
    id: 'woodway-kitchen-gut-remodel',
    title: 'Woodway Kitchen Gut Remodel',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Kitchen & Bath Renovation',
    year: '2026',
    sqft: '310 sq ft',
    duration: '5 weeks',
    shortDesc: 'Complete kitchen gut renovation — new layout, plumbing relocated, electrical updated, custom cabinetry.',
    fullDesc: 'A full gut renovation: existing layout torn out to the studs, plumbing and gas lines relocated for a new island, electrical brought up to current code, and custom cabinetry installed. Bedrock coordinated plumber, electrician, and cabinet installer under one schedule so the homeowners had a single point of contact for the entire project. Finished a week ahead of the written timeline.',
    result: 'Finished Early',
    tags: ['Kitchen Remodel', 'Custom Cabinetry', 'Woodway'],
    images: [
      { src: '/pages/home/services/service-4.jpg', alt: 'Renovated kitchen with custom cabinetry', caption: '' },
      { src: '/pages/home/services/service-3.jpg', alt: 'New kitchen island', caption: '' },
    ],
    beforeImage: { src: '/pages/home/welcome/before.jpg', alt: 'Original kitchen before renovation' },
    afterImage:  { src: '/pages/home/welcome/after.jpg', alt: 'Renovated kitchen after completion' },
    featured: true,
  },
  {
    id: 'bellmead-double-bath-renovation',
    title: 'Bellmead Double Bathroom Renovation',
    client: 'Private Residence',
    location: 'Bellmead, TX',
    category: 'Kitchen & Bath Renovation',
    year: '2025',
    sqft: '2 full baths',
    duration: '3 weeks',
    shortDesc: 'Two full bathrooms gutted and rebuilt with new tile work, fixtures, and updated plumbing.',
    fullDesc: 'Both bathrooms in this Bellmead home were original to the 1980s build. Bedrock gutted each down to the studs, replaced all plumbing and fixtures, and installed custom tile work in both showers. Completed in three weeks flat, exactly matching the schedule given at the bid walkthrough.',
    result: 'On-Schedule, 3 Weeks',
    tags: ['Bathroom Remodel', 'Tile Work', 'Bellmead'],
    images: [
      { src: '/pages/home/welcome/mat-1.jpg', alt: 'Renovated bathroom with custom tile', caption: '' },
    ],
  },
  {
    id: 'waco-historic-kitchen-update',
    title: 'Downtown Waco Historic Home Kitchen Update',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Kitchen & Bath Renovation',
    year: '2024',
    sqft: '260 sq ft',
    duration: '6 weeks',
    shortDesc: 'Sensitive kitchen renovation inside a historic Waco home — modern function without losing the home\'s character.',
    fullDesc: 'The owners of a historic Waco home wanted a modern, functional kitchen without disturbing the character of the house. Bedrock worked around original trim and flooring, preserved a period-appropriate window layout, and integrated modern appliances and cabinetry that fit the home\'s architectural style.',
    result: 'Character Preserved',
    tags: ['Historic Renovation', 'Kitchen Remodel', 'Waco'],
    images: [
      { src: '/pages/home/welcome/mat-2.jpg', alt: 'Renovated kitchen in historic home', caption: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMMERCIAL CONSTRUCTION
// ─────────────────────────────────────────────────────────────────────────────
const commercialProjects: Project[] = [
  {
    id: 'temple-retail-buildout',
    title: 'Temple Retail Center Tenant Buildout',
    client: 'Regional Retail Tenant',
    location: 'Temple, TX',
    category: 'Commercial Construction',
    year: '2025',
    sqft: '4,200 sq ft',
    duration: '10 weeks',
    shortDesc: 'Tenant improvement buildout inside an existing Temple retail center — opened on the promised date.',
    fullDesc: 'The tenant had a hard opening date tied to a lease agreement and needed a general contractor who would hold the line on schedule. Bedrock delivered a real itemized bid instead of a rough range, managed permitting with the city, and coordinated electrical, HVAC, and finish trades to open on the exact date promised at contract signing.',
    result: 'Opened On Date',
    tags: ['Tenant Improvement', 'Retail Buildout', 'Temple'],
    images: [
      { src: '/pages/home/welcome/mat-3.jpg', alt: 'Completed retail buildout interior', caption: '' },
      { src: '/pages/home/welcome/hero-main.jpg', alt: 'Storefront exterior', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'waco-office-renovation',
    title: 'Waco Professional Office Renovation',
    client: 'Local Professional Services Firm',
    location: 'Waco, TX',
    category: 'Commercial Construction',
    year: '2024',
    sqft: '3,100 sq ft',
    duration: '8 weeks',
    shortDesc: 'Full interior renovation of a professional office space — new layout, finishes, and updated mechanicals.',
    fullDesc: 'A growing local firm needed its office reconfigured for a larger team without relocating. Bedrock managed the renovation in phases so the client could keep working from part of the space throughout construction, minimizing business disruption.',
    result: 'Zero Business Disruption',
    tags: ['Office Renovation', 'Phased Construction', 'Waco'],
    images: [
      { src: '/pages/home/services/service-1.jpg', alt: 'Renovated office interior', caption: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN-BUILD SERVICES
// ─────────────────────────────────────────────────────────────────────────────
const designBuildProjects: Project[] = [
  {
    id: 'china-spring-design-build-home',
    title: 'China Spring Design-Build Custom Home',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Design-Build Services',
    year: '2025',
    sqft: '2,950 sq ft',
    duration: '10 months',
    shortDesc: 'Full design-build custom home — one contract, one team, from initial concept through move-in.',
    fullDesc: 'The homeowners wanted a single point of contact from concept through move-in, without coordinating between a separate architect and contractor. Bedrock\'s design-build team handled site planning, design development, and construction under one contract and one schedule — no finger-pointing between design and build phases, and no surprises when the drawings met the jobsite.',
    result: 'One Team, One Schedule',
    tags: ['Design-Build', 'Custom Home', 'China Spring'],
    images: [
      { src: '/pages/home/services/service-2.jpg', alt: 'Design-build custom home exterior', caption: '' },
      { src: '/pages/home/services/service-4.jpg', alt: 'Interior living space', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'bellmead-design-build-addition',
    title: 'Bellmead Design-Build Second Story Addition',
    client: 'Private Residence',
    location: 'Bellmead, TX',
    category: 'Design-Build Services',
    year: '2024',
    sqft: '780 sq ft addition',
    duration: '4 months',
    shortDesc: 'A second-story addition designed and built under one contract, from structural engineering through finish work.',
    fullDesc: 'Adding a full second story required structural engineering, new roof framing, and integration with the existing home\'s systems. Bedrock\'s design-build process meant the structural design was validated against real construction costs before a shovel hit the ground, keeping the final bid within 3% of the original design-phase estimate.',
    result: 'Within 3% of Estimate',
    tags: ['Design-Build', 'Second Story Addition', 'Bellmead'],
    images: [
      { src: '/pages/home/services/service-3.jpg', alt: 'Second story addition exterior', caption: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GENERAL CONTRACTING
// ─────────────────────────────────────────────────────────────────────────────
const generalContractingProjects: Project[] = [
  {
    id: 'killeen-municipal-facility-renovation',
    title: 'Killeen Municipal Facility Renovation',
    client: 'Local Municipal Client',
    location: 'Killeen, TX',
    category: 'General Contracting',
    year: '2025',
    sqft: '6,800 sq ft',
    duration: '14 weeks',
    shortDesc: 'General contracting oversight for a public facility renovation — managed subcontractors across every trade.',
    fullDesc: 'Bedrock served as general contractor for a public facility renovation, managing a full crew of vetted subcontractors across electrical, plumbing, HVAC, and finish trades under a single project manager. Public-sector bonding and insurance requirements were in place from day one of the bid process.',
    result: 'Full Trade Coordination',
    tags: ['General Contracting', 'Public Facility', 'Killeen'],
    images: [
      { src: '/pages/home/welcome/mat-1.jpg', alt: 'Renovated municipal facility interior', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'waco-multi-property-turnover',
    title: 'Waco Multi-Property Turnover Program',
    client: 'Regional Property Management Firm',
    location: 'Waco, TX',
    category: 'General Contracting',
    year: '2024',
    sqft: '12 units',
    duration: 'Ongoing',
    shortDesc: 'Ongoing general contracting for unit turnovers and renovations across a multi-property portfolio.',
    fullDesc: 'A regional property management firm needed a single general contractor who could handle unit turnovers and renovations across several properties without a new bid process for every job. Bedrock built a standing scope-of-work agreement with fixed per-unit pricing, cutting the firm\'s average vacancy-to-relet time significantly.',
    result: 'Faster Unit Turnaround',
    tags: ['Property Management', 'Unit Turnovers', 'Waco'],
    images: [
      { src: '/pages/home/welcome/mat-2.jpg', alt: 'Renovated rental unit interior', caption: '' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_PROJECTS: Project[] = [
  ...newHomeProjects,
  ...additionsProjects,
  ...kitchenBathProjects,
  ...commercialProjects,
  ...designBuildProjects,
  ...generalContractingProjects,
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'New Home Construction':     newHomeProjects,
  'Home Additions & Remodels': additionsProjects,
  'Kitchen & Bath Renovation': kitchenBathProjects,
  'Commercial Construction':   commercialProjects,
  'Design-Build Services':     designBuildProjects,
  'General Contracting':       generalContractingProjects,
};

export const CATEGORIES: ProjectCategory[] = [
  'New Home Construction',
  'Home Additions & Remodels',
  'Kitchen & Bath Renovation',
  'Commercial Construction',
  'Design-Build Services',
  'General Contracting',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export default ALL_PROJECTS;
