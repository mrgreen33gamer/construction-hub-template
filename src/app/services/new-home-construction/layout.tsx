// src/app/services/new-home-construction/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services/new-home-construction`;

export const metadata: Metadata = {
  title: "New Home Construction in Waco, TX | Bedrock Construction Group",
  description:
    "Custom and spec-built new home construction in Waco, TX. Written, itemized bids, real timelines, and a 2-year workmanship warranty. Licensed & bonded, AGC member.",
  keywords: [
    "new home construction Waco TX",
    "custom home builder Waco Texas",
    "home builder Central Texas",
    "spec home builder Waco",
    "general contractor new construction Waco",
    "custom home builder Hewitt TX",
    "custom home builder Woodway TX",
    "Bedrock Construction Group new homes",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "New Home Construction in Waco, TX | Bedrock Construction Group",
    description:
      "Custom and spec-built new home construction for Waco and Central Texas. Written, itemized bids and a 2-year workmanship warranty.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "New home construction in Waco, TX – Bedrock Construction Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Home Construction in Waco, TX | Bedrock Construction Group",
    description: "Custom and spec-built new home construction for Waco and Central Texas.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Home Construction",
  description:
    "Custom and spec-built new home construction in Waco, TX including site consultation, permitting, managed subcontractor crews, and a 2-year workmanship warranty.",
  provider: {
    "@type": "GeneralContractor",
    name: "Bedrock Construction Group",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",         containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "New Home Construction",
  url,
};

export default function NewHomeConstructionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
