'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faShieldHalved, faFileContract, faUsers, faStar, faClock, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Hiring a general contractor is one of the biggest financial decisions Central Texas homeowners make — and one of the easiest to get wrong. Here is exactly what to check before you sign anything.',
  },
  {
    type: 'cards',
    heading: '7 Things to Verify Before You Hire a GC',
    cards: [
      { icon: faShieldHalved, title: 'Licensed & Bonded', body: "Texas doesn't require a statewide GC license, so ask directly for proof of bonding and general liability insurance — and call the insurer to confirm it's active." },
      { icon: faFileContract, title: 'Written, Itemized Bid', body: 'A real bid breaks out materials, labor, and allowances line by line. A one-page verbal number is a red flag, not a deal.' },
      { icon: faUsers, title: 'AGC Membership', body: 'Associated General Contractors of America membership means a contractor has agreed to a code of conduct and is part of the local trade community — not a fly-by-night operation.' },
      { icon: faStar, title: 'Recent Local References', body: 'Ask for 2-3 addresses of projects completed in the last year, not just a review screenshot. Drive by if you can.' },
      { icon: faClock, title: 'A Realistic Timeline', body: 'If every contractor quotes the same 6-week addition except one who promises 2 weeks, that’s the one to worry about.' },
      { icon: faRotateLeft, title: 'A Real Workmanship Warranty', body: 'Ask what’s covered, for how long, and get it in writing. "We stand behind our work" is not a warranty.' },
    ],
  },
  {
    type: 'table',
    heading: 'Verbal Quote vs. Written Bid — What’s the Difference?',
    tableHeaders: ['What You Get', 'Verbal Quote', 'Written Itemized Bid'],
    tableRows: [
      ['Price breakdown', 'One lump number', 'Materials, labor, allowances listed separately'],
      ['Change-order protection', 'None', 'Scope is defined, changes require sign-off'],
      ['Comparable across contractors', 'Difficult', 'Easy — apples to apples'],
      ['Legally binding detail', 'Minimal', 'Full scope attached to the contract'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "If a contractor won't put the bid in writing before you sign, that's your answer — walk away.",
  },
  {
    type: 'tips',
    heading: 'Red Flags to Walk Away From',
    items: [
      'Asks for more than 10-30% down before any work starts',
      "No local address or can't name a recent local project",
      'Pressures you to sign same-day to "lock in the price"',
      'Cannot produce proof of insurance when asked directly',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Choose a General Contractor in Waco, TX: 7 Things to Check Before You Sign"
        description="Hiring the wrong GC can cost you months and thousands in change orders. Here's exactly what to verify before you sign a contract in Central Texas."
        imageSrc="/pages/home/services/service-3.jpg"
        imageAlt="General contractor reviewing blueprints for a Waco TX remodel"
        category="Hiring"
        date="April 20, 2026"
        readTime={8}
        authorName="Bedrock Construction Group Team"
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready to Get a Real, Written Bid?"
        body="Bedrock Construction Group is a licensed and bonded general contractor and AGC member — get an itemized estimate with no pressure."
        buttonText="Get My Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="choose-a-contractor-blog" />
    </>
  );
}
