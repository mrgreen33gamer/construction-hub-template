// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Bedrock Construction Group — Waco TX General Contractor Since 2012",
  description:
    "Meet Bedrock Construction Group. Locally owned and operated in Waco, Texas since 2012. Licensed & bonded, AGC member, written itemized bids, and a 2-year workmanship warranty on every project. Serving Waco, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about Bedrock Construction Group",
    "Waco general contractor",
    "construction company Waco TX",
    "locally owned contractor Waco",
    "licensed bonded contractor Waco Texas",
    "Central Texas general contractor",
    "construction company history Waco",
    "AGC member Waco TX",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Bedrock Construction Group — Waco TX General Contractor Since 2012",
    description:
      "Locally owned and operated in Waco since 2012. Licensed & bonded, AGC member, written itemized bids, 2-year workmanship warranty. Serving all of Central Texas.",
    url,
    siteName: "Bedrock Construction Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bedrock Construction Group — Waco TX Since 2012",
    description:
      "Locally owned general contractor in Waco, TX. Licensed & bonded, written itemized bids, 2-year workmanship warranty.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${BASE_URL}/#organization`,
  name: "Bedrock Construction Group",
  url: BASE_URL,
  telephone: "+12547208100",
  email: "hello@bedrockconstructiontx.com",
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "615 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76701",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Waco",         containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  sameAs: [
    "https://facebook.com/bedrockconstructiontx",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: url },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
