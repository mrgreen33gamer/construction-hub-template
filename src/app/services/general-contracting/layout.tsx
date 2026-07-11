// src/app/services/general-contracting/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services/general-contracting`;

export const metadata: Metadata = {
  title: "General Contracting & Project Management in Waco, TX | Bedrock Construction Group",
  description:
    "General contracting and project management in Waco, TX for owner-designed builds. Written itemized bids, weekly progress reports, managed subcontractors, 2-year workmanship warranty.",
  keywords: [
    "general contractor Waco TX",
    "project management construction Waco Texas",
    "general contracting Central Texas",
    "owner builder general contractor Waco",
    "construction project manager Temple TX",
    "Bedrock Construction Group general contracting",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "General Contracting & Project Management in Waco, TX | Bedrock Construction Group",
    description:
      "Full project oversight for owner-designed builds in Waco and Central Texas. Managed subcontractors, weekly reporting, 2-year workmanship warranty.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "General contracting and project management in Waco, TX – Bedrock Construction Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "General Contracting & Project Management in Waco, TX | Bedrock Construction Group",
    description: "Full project oversight for owner-designed builds in Waco and Central Texas.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "General Contracting / Project Management",
  description:
    "General contracting and project management services in Waco, TX for owner-designed builds, including permitting, subcontractor management, and weekly progress reporting.",
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
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "General Contracting",
  url,
};

export default function GeneralContractingLayout({ children }: { children: React.ReactNode }) {
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
