// src/app/industries/municipal-public-works/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/industries/municipal-public-works`;

export const metadata: Metadata = {
  title: "General Contractor for Municipal & Public Works | Bedrock Construction Group",
  description: "Bonded general contracting for municipal and public works projects in Waco and Central Texas — public bid experience, prevailing wage compliance, and full documentation.",
  keywords: [
    "municipal general contractor Waco",
    "public works contractor Central Texas",
    "government building contractor Texas",
    "bonded contractor public bid Waco",
    "prevailing wage contractor Texas",
    "Bedrock Construction Group public works",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "General Contractor for Municipal & Public Works | Bedrock Construction Group",
    description: "Bonded, insured, and experienced with public bid requirements. Licensed & bonded general contractor serving Central Texas municipalities and public agencies.",
    url, siteName: "Bedrock Construction Group", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero.png`, alt: "Bedrock Construction Group — Municipal & Public Works Services" }],
  },
  twitter: { card: "summary_large_image", title: "General Contractor for Municipal & Public Works | Bedrock Construction Group", description: "Bonded general contracting for municipal and public works projects across Central Texas.", images: [`${BASE_URL}/pages/seo-template-resources/about-hero.png`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "General Contracting for Municipal & Public Works",
  description: "Public facility construction and renovation for municipal and public agencies in Central Texas, including public bid, bonding, and prevailing wage compliance.",
  provider: { "@type": "GeneralContractor", name: "Bedrock Construction Group", url: BASE_URL, telephone: "+12547208100", address: { "@type": "PostalAddress", streetAddress: "615 Franklin Ave", addressLocality: "Waco", addressRegion: "TX", postalCode: "76701", addressCountry: "US" } },
  serviceType: "General Contracting, Commercial Construction, Design-Build Services",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bedrock Construction Group — Municipal & Public Works Services",
  description: "Licensed and bonded general contracting for municipal and public works projects across Central Texas.",
  url,
  provider: { "@type": "GeneralContractor", name: "Bedrock Construction Group", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Commercial Construction", "General Contracting", "Design-Build Services", "Kitchen & Bath Renovation"],
};

export default function MunicipalPublicWorksIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
