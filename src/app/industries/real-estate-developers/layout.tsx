// src/app/industries/real-estate-developers/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/industries/real-estate-developers`;

export const metadata: Metadata = {
  title: "General Contractor for Real Estate Developers | Bedrock Construction Group",
  description: "Ground-up builds and spec homes delivered on schedule for real estate developers in Waco and Central Texas. Written, lender-ready bids. Licensed & bonded.",
  keywords: [
    "general contractor for developers Waco",
    "spec home builder Central Texas",
    "new construction contractor Waco TX",
    "developer general contractor Texas",
    "construction loan draw schedule contractor",
    "Bedrock Construction Group developers",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "General Contractor for Real Estate Developers | Bedrock Construction Group",
    description: "Ground-up builds and spec homes delivered on a schedule that protects your financing timeline. Licensed & bonded general contractor in Waco, TX.",
    url, siteName: "Bedrock Construction Group", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero.png`, alt: "Bedrock Construction Group — Real Estate Developer Services" }],
  },
  twitter: { card: "summary_large_image", title: "General Contractor for Real Estate Developers | Bedrock Construction Group", description: "Ground-up builds and spec homes delivered on schedule for Central Texas developers.", images: [`${BASE_URL}/pages/seo-template-resources/about-hero.png`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "General Contracting for Real Estate Developers",
  description: "Ground-up construction, spec homes, and multi-unit development general contracting for real estate developers in Central Texas.",
  provider: { "@type": "GeneralContractor", name: "Bedrock Construction Group", url: BASE_URL, telephone: "+12547208100", address: { "@type": "PostalAddress", streetAddress: "615 Franklin Ave", addressLocality: "Waco", addressRegion: "TX", postalCode: "76701", addressCountry: "US" } },
  serviceType: "General Contracting, New Home Construction, Commercial Construction",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bedrock Construction Group — Real Estate Developer Services",
  description: "Licensed and bonded general contracting for real estate developers building in Central Texas.",
  url,
  provider: { "@type": "GeneralContractor", name: "Bedrock Construction Group", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["New Home Construction", "Commercial Construction", "Design-Build Services", "General Contracting"],
};

export default function RealEstateDevelopersIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
