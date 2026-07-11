// src/app/services/kitchen-bath-renovation/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services/kitchen-bath-renovation`;

export const metadata: Metadata = {
  title: "Kitchen & Bath Renovation in Waco, TX | Bedrock Construction Group",
  description:
    "Kitchen and bathroom renovation in Waco, TX. Full gut renovations or targeted updates, licensed trades, financing available, 2-year workmanship warranty.",
  keywords: [
    "kitchen renovation Waco TX",
    "bathroom remodel Waco Texas",
    "kitchen remodel Central Texas",
    "bathroom renovation contractor Waco",
    "kitchen remodeling contractor Hewitt TX",
    "bathroom remodel Woodway TX",
    "Bedrock Construction Group renovations",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Kitchen & Bath Renovation in Waco, TX | Bedrock Construction Group",
    description:
      "Full gut renovations or targeted kitchen and bath updates for Waco and Central Texas. Licensed trades, 2-year workmanship warranty.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Kitchen and bath renovation in Waco, TX – Bedrock Construction Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen & Bath Renovation in Waco, TX | Bedrock Construction Group",
    description: "Full gut renovations or targeted kitchen and bath updates for Waco and Central Texas.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen & Bath Renovation",
  description:
    "Full gut renovations or targeted kitchen and bath updates in Waco, TX with licensed plumbing, electrical, and tile trades and a 2-year workmanship warranty.",
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
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Kitchen & Bath Renovation",
  url,
};

export default function KitchenBathRenovationLayout({ children }: { children: React.ReactNode }) {
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
