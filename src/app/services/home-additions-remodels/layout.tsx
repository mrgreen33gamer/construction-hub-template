// src/app/services/home-additions-remodels/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services/home-additions-remodels`;

export const metadata: Metadata = {
  title: "Home Additions & Remodels in Waco, TX | Bedrock Construction Group",
  description:
    "Structural home additions and whole-home remodels in Waco, TX. Written, itemized bids, matched-finish construction, and a 2-year workmanship warranty.",
  keywords: [
    "home addition contractor Waco TX",
    "home remodel Waco Texas",
    "room addition Central Texas",
    "whole home remodel Waco",
    "general contractor additions Hewitt TX",
    "remodeling contractor Woodway TX",
    "Bedrock Construction Group remodels",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Home Additions & Remodels in Waco, TX | Bedrock Construction Group",
    description:
      "Structural additions and whole-home remodels for Waco and Central Texas. Written, itemized bids and a 2-year workmanship warranty.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Home additions and remodels in Waco, TX – Bedrock Construction Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Additions & Remodels in Waco, TX | Bedrock Construction Group",
    description: "Structural additions and whole-home remodels for Waco and Central Texas.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Additions & Remodels",
  description:
    "Structural home additions and whole-home remodels in Waco, TX matched to existing construction, with written itemized bids and a 2-year workmanship warranty.",
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
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Home Additions & Remodels",
  url,
};

export default function HomeAdditionsRemodelsLayout({ children }: { children: React.ReactNode }) {
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
