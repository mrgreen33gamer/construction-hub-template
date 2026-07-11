// src/app/services/design-build-services/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services/design-build-services`;

export const metadata: Metadata = {
  title: "Design-Build Services in Waco, TX | Bedrock Construction Group",
  description:
    "Design-build services in Waco, TX — design and construction under a single contract. Faster timelines, one point of contact, 2-year workmanship warranty.",
  keywords: [
    "design build contractor Waco TX",
    "design build firm Central Texas",
    "design build home Waco",
    "design build commercial Waco Texas",
    "design build contractor Temple TX",
    "Bedrock Construction Group design build",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Design-Build Services in Waco, TX | Bedrock Construction Group",
    description:
      "Design and construction under a single contract for Waco and Central Texas projects. One team, one point of contact.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Design-build services in Waco, TX – Bedrock Construction Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design-Build Services in Waco, TX | Bedrock Construction Group",
    description: "Design and construction under a single contract for Waco and Central Texas projects.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Design-Build Services",
  description:
    "Design-build services in Waco, TX combining design and construction under a single contract with one project manager from concept through completion.",
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
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Design-Build Services",
  url,
};

export default function DesignBuildServicesLayout({ children }: { children: React.ReactNode }) {
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
