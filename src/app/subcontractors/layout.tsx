// src/app/subcontractors/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/subcontractors`;

export const metadata: Metadata = {
  title: 'Subcontractors | Bedrock Construction Group — Waco, TX',
  description: 'How Bedrock Construction Group vets, licenses-checks, and manages every subcontractor on a project — from onboarding through final inspection.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Subcontractors | Bedrock Construction Group',
    description: 'How Bedrock vets, license-checks, and manages every subcontractor on a project.',
    url, siteName: 'Bedrock Construction Group', locale: 'en_US', type: 'website',
    images: [{ url: `${BASE_URL}/logos/bedrock-construction-banner.png`, alt: 'Bedrock Construction Group subcontractor management' }],
  },
  twitter: { card: 'summary_large_image', title: 'Subcontractors | Bedrock Construction Group', description: 'How Bedrock vets and manages every subcontractor on a project.', images: [`${BASE_URL}/logos/bedrock-construction-banner.png`] },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Subcontractors', item: url },
  ],
};

export default function SubcontractorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
