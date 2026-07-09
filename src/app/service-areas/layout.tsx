// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Construction Service Areas | Waco, Temple, Killeen & Central Texas | Bedrock',
  description:
    'Bedrock Construction Group serves Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and all of Central Texas. Written, itemized bids, licensed & bonded, 2-year workmanship warranty.',
  keywords: [
    'construction service areas Central Texas',
    'general contractor Waco TX',
    'general contractor Temple TX',
    'general contractor Killeen TX',
    'home builder Central Texas',
    'commercial construction Central Texas',
    'remodeling contractor Waco',
    'Bedrock Construction Group service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Construction Service Areas | Bedrock Construction Group — Central Texas',
    description:
      'Serving Waco and all of Central Texas with new construction, additions, remodels, and commercial builds. Free on-site estimates available.',
    url,
    siteName: 'Bedrock Construction Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Service Areas | Bedrock Construction Group — Central Texas',
    description: 'Serving Waco and all of Central Texas. Written, itemized bids, 2-year workmanship warranty.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Bedrock Construction Group',
  url: BASE_URL,
  telephone: '+12547208100',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '615 Franklin Ave',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76701',
    addressCountry: 'US',
  },
  areaServed: [
    'Waco, TX', 'Temple, TX', 'Killeen, TX', 'Hewitt, TX',
    'Woodway, TX', 'McGregor, TX', 'China Spring, TX', 'Bellmead, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
