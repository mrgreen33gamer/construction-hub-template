// src/app/services/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// /services parent layout:
// - Broad "all services" metadata (no city/keyword cannibalization)
// - OfferCatalog schema listing all 6 construction services
// - BreadcrumbList for the /services route
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Construction Services in Waco, TX | Bedrock Construction Group",
  description:
    "New home construction, additions and remodels, kitchen and bath renovation, commercial construction, design-build, and general contracting for Waco and Central Texas. Written, itemized bids.",
  keywords: [
    "general contractor Waco TX",
    "new home construction Waco",
    "home remodeling Central Texas",
    "commercial construction Waco",
    "design build Waco TX",
    "Bedrock Construction Group services",
    "construction company Waco Texas",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Construction Services in Waco, TX | Bedrock Construction Group",
    description:
      "New construction, additions, renovations, and commercial builds for Waco and Central Texas businesses and homeowners. Written, itemized bids, licensed and bonded.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=3`,
        alt: "Bedrock Construction Group — Construction Services for Central Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services | Bedrock Construction Group",
    description:
      "New home construction, remodels, commercial construction, and design-build for Central Texas. Written, itemized bids, 2-year workmanship warranty.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=3`],
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Bedrock Construction Group — Construction Services",
  description:
    "Full-service general contracting offerings for Central Texas: new home construction, home additions and remodels, kitchen and bath renovation, commercial construction, design-build services, and general contracting / project management.",
  provider: {
    "@type": "GeneralContractor",
    name: "Bedrock Construction Group",
    url: BASE_URL,
    telephone: "+12547208100",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "New Home Construction",
        description:
          "Custom and spec-built homes from foundation to final walkthrough, with written itemized bids and a 2-year workmanship warranty.",
        url: `${BASE_URL}/services/new-home-construction`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Home Additions & Remodels",
        description:
          "Structural additions and whole-home remodels matched to your existing construction.",
        url: `${BASE_URL}/services/home-additions-remodels`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Kitchen & Bath Renovation",
        description:
          "Full gut renovations or targeted updates with licensed trades under one contract.",
        url: `${BASE_URL}/services/kitchen-bath-renovation`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Construction",
        description:
          "New builds and tenant improvements for retail, office, and light industrial space.",
        url: `${BASE_URL}/services/commercial-construction`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Design-Build Services",
        description:
          "Design and construction under a single contract and a single point of contact.",
        url: `${BASE_URL}/services/design-build-services`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "General Contracting / Project Management",
        description:
          "Full project management for owner-designed builds — permitting, scheduling, and managed subcontractors.",
        url: `${BASE_URL}/services/general-contracting`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
