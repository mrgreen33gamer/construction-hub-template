// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-your-home-needs-a-remodel-waco-tx',
    title:    '7 Signs Your Waco Home Is Overdue for a Remodel',
    excerpt:  "Aging systems, a layout that doesn't work anymore, deferred maintenance piling up — here are the signs it's time to remodel instead of patch things again.",
    category: 'Remodeling',
    date:     'April 28, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/signs-you-need-a-remodel.jpg',
    imageAlt: 'Outdated kitchen in a Waco TX home ready for renovation',
    featured: true,
  },
  {
    slug:     'home-addition-permit-guide-waco-tx',
    title:    'Home Addition Permits in Waco, TX: What Triggers One and How Long It Takes',
    excerpt:  "Adding square footage almost always means pulling a permit. Here's what triggers permitting in McLennan County, the typical timeline, and how a GC handles it for you.",
    category: 'Permitting',
    date:     'April 24, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/home-addition-permits.jpg',
    imageAlt: 'Building permit documents for a home addition in Waco TX',
  },
  {
    slug:     'how-to-choose-a-general-contractor-waco-tx',
    title:    'How to Choose a General Contractor in Waco, TX: 7 Things to Check Before You Sign',
    excerpt:  "Hiring the wrong GC can cost you months and thousands in change orders. Here's exactly what to verify before you sign a contract in Central Texas.",
    category: 'Hiring',
    date:     'April 20, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/choosing-a-general-contractor.jpg',
    imageAlt: 'Homeowner reviewing a general contractor bid in Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }