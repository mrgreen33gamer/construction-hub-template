// src/app/industries/property-management-firms/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/industries/property-management-firms`;

export const metadata: Metadata = {
  title: "General Contractor for Property Management Firms | Bedrock Construction Group",
  description: "Fast unit turnovers, tenant improvements, and standardized portfolio-wide pricing for property management firms in Waco and Central Texas. Licensed & bonded.",
  keywords: [
    "property management contractor Waco",
    "unit turnover contractor Central Texas",
    "tenant improvement contractor Waco TX",
    "portfolio maintenance general contractor",
    "property management renovation contractor",
    "Bedrock Construction Group property managers",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "General Contractor for Property Management Firms | Bedrock Construction Group",
    description: "Fast unit turnovers, tenant improvements, and standardized pricing across your whole portfolio. Licensed & bonded general contractor in Waco, TX.",
    url, siteName: "Bedrock Construction Group", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero.png`, alt: "Bedrock Construction Group — Property Management Services" }],
  },
  twitter: { card: "summary_large_image", title: "General Contractor for Property Management Firms | Bedrock Construction Group", description: "Fast unit turnovers, tenant improvements, and standardized pricing for Central Texas property portfolios.", images: [`${BASE_URL}/pages/seo-template-resources/about-hero.png`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "General Contracting for Property Management Firms",
  description: "Unit turnovers, tenant improvements, and portfolio-wide renovation general contracting for property management firms in Central Texas.",
  provider: { "@type": "GeneralContractor", name: "Bedrock Construction Group", url: BASE_URL, telephone: "+12547208100", address: { "@type": "PostalAddress", streetAddress: "615 Franklin Ave", addressLocality: "Waco", addressRegion: "TX", postalCode: "76701", addressCountry: "US" } },
  serviceType: "General Contracting, Kitchen & Bath Renovation, Commercial Construction",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bedrock Construction Group — Property Management Services",
  description: "Licensed and bonded general contracting for property management firms across Central Texas.",
  url,
  provider: { "@type": "GeneralContractor", name: "Bedrock Construction Group", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Kitchen & Bath Renovation", "Commercial Construction", "Home Additions & Remodels", "General Contracting"],
};

export default function PropertyManagementFirmsIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
