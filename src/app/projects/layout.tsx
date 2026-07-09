// src/app/projects/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/projects`;

export const metadata: Metadata = {
  title: 'Completed Projects & Portfolio | Bedrock Construction Group — Waco, TX',
  description: 'Real projects built by Bedrock Construction Group for homeowners and businesses across Central Texas — new home construction, additions, kitchen and bath renovation, and commercial buildouts in Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Completed Projects & Portfolio | Bedrock Construction Group',
    description: 'Real projects built by Bedrock Construction Group for Central Texas homeowners and businesses.',
    url, siteName: 'Bedrock Construction Group', locale: 'en_US', type: 'website',
    images: [{ url: `${BASE_URL}/logos/bedrock-construction-banner.png`, alt: 'Bedrock Construction Group projects — Waco TX' }],
  },
  twitter: { card: 'summary_large_image', title: 'Completed Projects & Portfolio | Bedrock Construction Group', description: 'Real projects for Central Texas homeowners and businesses.', images: [`${BASE_URL}/logos/bedrock-construction-banner.png`] },
  robots: { index: true, follow: true },
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Bedrock Construction Group — Completed Projects & Portfolio',
  description: 'A portfolio of new home construction, additions and remodels, kitchen and bath renovation, and commercial construction projects completed by Bedrock Construction Group across Central Texas, including Waco, Temple, Killeen, Hewitt, Woodway, and surrounding areas.',
  url,
  about: {
    '@type': 'GeneralContractor',
    name: 'Bedrock Construction Group',
    url: BASE_URL,
    address: { '@type': 'PostalAddress', addressLocality: 'Waco', addressRegion: 'TX', addressCountry: 'US' },
  },
  hasPart: [
    { '@type': 'CreativeWork', name: 'Lakeshore Drive Custom Home', description: 'Ground-up custom home build on a Woodway lakeshore lot.', locationCreated: { '@type': 'City', name: 'Woodway', containedInPlace: { '@type': 'State', name: 'Texas' } } },
    { '@type': 'CreativeWork', name: 'Hewitt Primary Suite Addition', description: 'Primary suite addition matched to the home\'s existing brick and roofline.', locationCreated: { '@type': 'City', name: 'Hewitt', containedInPlace: { '@type': 'State', name: 'Texas' } } },
    { '@type': 'CreativeWork', name: 'Woodway Kitchen Gut Remodel', description: 'Complete kitchen renovation with custom cabinetry.', locationCreated: { '@type': 'City', name: 'Woodway', containedInPlace: { '@type': 'State', name: 'Texas' } } },
    { '@type': 'CreativeWork', name: 'Temple Retail Center Tenant Buildout', description: 'Tenant improvement buildout inside an existing Temple retail center.', locationCreated: { '@type': 'City', name: 'Temple', containedInPlace: { '@type': 'State', name: 'Texas' } } },
    { '@type': 'CreativeWork', name: 'China Spring Design-Build Custom Home', description: 'Full design-build custom home from concept through move-in.', locationCreated: { '@type': 'City', name: 'China Spring', containedInPlace: { '@type': 'State', name: 'Texas' } } },
    { '@type': 'CreativeWork', name: 'Killeen Municipal Facility Renovation', description: 'General contracting for a public facility renovation.', locationCreated: { '@type': 'City', name: 'Killeen', containedInPlace: { '@type': 'State', name: 'Texas' } } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: url },
  ],
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
