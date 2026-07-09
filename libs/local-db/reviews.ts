// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Bedrock Construction Group — used by Testimonials
// component, schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'New Home Construction',
    text:     "Bedrock built our home from the ground up and the whole process was refreshingly straightforward. The bid was itemized down to the fixtures, the schedule barely moved, and the project manager returned every call the same day. Best building experience friends who've built elsewhere say they've heard of.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Home Additions & Remodels',
    text:     'We added a 400 sq ft primary suite and the crew matched our existing brick and roofline so well you cannot tell where the old house ends and the addition begins. Clean jobsite every day, no surprise change orders. Worth every dollar.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Kitchen & Bath Renovation',
    text:     'Full gut kitchen remodel — new layout, plumbing moved, electrical updated. Bedrock handled every trade under one contract so we never had to coordinate subs ourselves. Finished a week ahead of the written timeline.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Commercial Construction',
    text:     'Had three general contractors bid our retail buildout. Bedrock was the only one who gave us a real itemized number instead of a rough range. The build stayed on budget and we opened on the date they promised us in September.',
  },
  {
    name:     'David M.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Design-Build Services',
    text:     'We went design-build so we would only have one point of contact from concept to move-in. It worked exactly like they said — one team, one schedule, no finger-pointing between architect and contractor. Genuinely low-stress for a custom build.',
  },
  {
    name:     'Angela W.',
    location: 'Killeen, TX',
    rating:   4,
    date:     'October 2025',
    service:  'General Contracting / Project Management',
    text:     "Permitting took longer than expected because of the city, which pushed our start back about two weeks — not Bedrock's fault, but I wish we'd been told sooner. Once they broke ground the project manager kept us updated constantly and the finished work is excellent.",
  },
  {
    name:     'Robert H.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Home Additions & Remodels',
    text:     'Detached garage with a workshop above it, built to match the main house. The crew showed up on time every single day and cleaned up before they left. Exactly the itemized bid we signed, no change-order games.',
  },
  {
    name:     'Cheryl B.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Kitchen & Bath Renovation',
    text:     'Two bathrooms gutted and rebuilt in three weeks flat, right on the schedule they gave us at the bid walkthrough. The tile work is better than anything we saw in the showroom. Already booked them for our kitchen next year.',
  },
];

export default reviews;
