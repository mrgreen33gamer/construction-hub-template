// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | General Contractor for Texas Organizations | Bedrock Construction Group",
  description:
    "Bedrock Construction Group builds for real estate developers, property management firms, and municipal & public works agencies across Waco and Central Texas. Licensed & bonded general contractor.",
  keywords: [
    "general contractor for developers Waco TX",
    "property management contractor Central Texas",
    "municipal contractor Waco",
    "public works general contractor Texas",
    "commercial general contractor Central Texas",
    "Bedrock Construction Group industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Bedrock Construction Group — Waco, TX",
    description:
      "General contracting built for real estate developers, property management firms, and municipal & public works agencies across Central Texas.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/bedrock-construction-banner.png`, alt: "Bedrock Construction Group — Industries Served" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Bedrock Construction Group",
    description: "General contracting for real estate developers, property management firms, and municipal & public works agencies across Central Texas.",
    images: [`${BASE_URL}/logos/bedrock-construction-banner.png`],
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry-Specific General Contracting — Waco TX",
  description:
    "Bedrock Construction Group provides general contracting tailored to real estate developers, property management firms, and municipal & public works agencies across Central Texas.",
  provider: {
    "@type": "GeneralContractor",
    name: "Bedrock Construction Group",
    url: BASE_URL,
    telephone: "+12547208100",
    address: {
      "@type": "PostalAddress",
      streetAddress: "615 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76701",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: "General Contracting, New Home Construction, Commercial Construction",
  url,
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
