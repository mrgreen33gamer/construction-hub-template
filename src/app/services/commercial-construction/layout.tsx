// src/app/services/commercial-construction/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services/commercial-construction`;

export const metadata: Metadata = {
  title: "Commercial Construction in Waco, TX | Bedrock Construction Group",
  description:
    "Commercial construction and tenant improvements in Waco, TX for retail, office, and light industrial space. Written pricing, licensed crew, 2-year workmanship warranty.",
  keywords: [
    "commercial construction Waco TX",
    "tenant improvement Waco Texas",
    "commercial general contractor Central Texas",
    "retail buildout Waco",
    "office construction Temple TX",
    "commercial contractor Killeen TX",
    "Bedrock Construction Group commercial",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Commercial Construction in Waco, TX | Bedrock Construction Group",
    description:
      "New builds and tenant improvements for Waco and Central Texas businesses. Written pricing and a 2-year workmanship warranty.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Commercial construction in Waco, TX – Bedrock Construction Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Construction in Waco, TX | Bedrock Construction Group",
    description: "New builds and tenant improvements for Waco and Central Texas businesses.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Construction",
  description:
    "New commercial construction and tenant improvements in Waco, TX for retail, office, and light industrial space, with written pricing and a 2-year workmanship warranty.",
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
    { "@type": "City", name: "Waco",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",   containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",  containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",   containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",  containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Commercial Construction",
  url,
};

export default function CommercialConstructionLayout({ children }: { children: React.ReactNode }) {
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
