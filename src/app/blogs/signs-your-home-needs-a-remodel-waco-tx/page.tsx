'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faHouseChimney, faExclamationTriangle, faDollarSign, faBath, faSearch } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Every home reaches a point where another patch job stops making sense. Here are the clearest signs a Central Texas home is overdue for a real remodel — not just another repair.',
  },
  {
    type: 'cards',
    heading: '7 Signs It’s Time to Remodel',
    cards: [
      { icon: faClock, title: 'Your systems are 20+ years old', body: 'Plumbing, electrical, and roofing all have a service life — replacing during a remodel is far cheaper than emergency repairs later.' },
      { icon: faHouseChimney, title: 'The layout doesn’t work for how you live now', body: 'Closed-off kitchens, a single bathroom for a growing family, no home office — floor plans age just as much as materials do.' },
      { icon: faExclamationTriangle, title: 'Deferred maintenance is piling up', body: 'A running list of "we\'ll get to it" items is usually cheaper to solve together in one project than one at a time.' },
      { icon: faDollarSign, title: 'You’re comparing to a move instead', body: 'If you\'re pricing new homes because yours "doesn\'t work anymore," a remodel is often the better financial move.' },
      { icon: faBath, title: 'Original kitchen or bath finishes', body: 'Original-to-the-house kitchens and bathrooms are usually the single biggest value-add renovation for resale.' },
      { icon: faSearch, title: 'Visible cracks, water stains, or settling', body: 'These are signs to get a professional assessment before cosmetic work — not after.' },
    ],
  },
  {
    type: 'table',
    heading: 'Repair vs. Remodel — When Does It Make Sense?',
    tableHeaders: ['Situation', 'Keep Repairing', 'Time to Remodel'],
    tableRows: [
      ['Single system nearing end of life', 'Yes — replace that one system', 'No, unless bundling with other work'],
      ['Multiple systems aging together', 'No — repairs compound', 'Yes — bundle into one project'],
      ['Layout no longer fits your life', 'N/A', 'Yes'],
      ['Planning to sell in 1-2 years', 'Targeted repairs only', 'Only if remodel adds resale value'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "A written, itemized bid from a licensed GC costs nothing to get — it's the fastest way to know whether repair or remodel actually makes financial sense for your home.",
  },
  {
    type: 'tips',
    heading: 'Before You Decide',
    items: [
      'Get a written assessment, not just a verbal walk-through',
      'Ask which items are cosmetic vs. structural',
      'Compare the remodel bid against 2-3 years of likely repair costs',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Waco Home Is Overdue for a Remodel"
        description="Aging systems, a layout that doesn't work anymore, deferred maintenance piling up — here are the signs it's time to remodel instead of patch things again."
        imageSrc="/pages/home/services/service-2.jpg"
        imageAlt="Construction crew assessing a Waco TX home ahead of a remodel"
        category="Remodeling"
        date="April 28, 2026"
        readTime={7}
        authorName="Bedrock Construction Group Team"
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure If You Need a Repair or a Full Remodel?"
        body="Get an honest, written assessment from Bedrock Construction Group — no pressure, no upsell."
        buttonText="Get My Free Assessment"
        buttonHref="/services/kitchen-bath-renovation"
      />
      <NewsletterSignup variant={1} spot="remodel-signs-blog" />
    </>
  );
}
