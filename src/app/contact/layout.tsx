// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bedrockconstructiontx.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Bedrock Construction Group | Free Estimate in Waco & Central Texas',
  description:
    'Contact Bedrock Construction Group for a free on-site estimate on new construction, additions, remodels, or commercial builds. Serving Waco, Temple, Killeen, and all of Central Texas. Call (254) 720-8100.',
  keywords: [
    'contact Bedrock Construction Group',
    'general contractor estimate Waco TX',
    'schedule construction consultation Waco',
    'construction estimate Central Texas',
    'Bedrock Construction contact',
    '254-720-8100',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Bedrock Construction Group | Free Estimate in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free on-site estimates, written itemized bids, 2-year workmanship warranty. Licensed & bonded.',
    url,
    siteName: 'Bedrock Construction Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bedrock Construction Group | Waco & Central Texas',
    description: 'Request a free on-site estimate. Call (254) 720-8100.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
