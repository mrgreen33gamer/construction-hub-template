'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faFileContract, faClipboardList, faHammer, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Most home additions in Waco and McLennan County require a building permit — and skipping one can mean stop-work orders, fines, or trouble at resale. Here is what actually triggers a permit and how the process works.',
  },
  {
    type: 'tips',
    heading: 'What Typically Requires a Permit in Waco / McLennan County',
    items: [
      'Any addition that adds square footage or changes the building footprint',
      'New or relocated plumbing, electrical, or HVAC work',
      'Structural changes — load-bearing walls, new openings, foundation work',
      'Detached structures over a certain size (garages, workshops, ADUs)',
      'Re-roofing in some jurisdictions, depending on scope',
    ],
  },
  {
    type: 'cards',
    heading: 'Typical Home Addition Timeline',
    cards: [
      { icon: faFileContract, title: 'Design & Bid', body: '1-3 weeks — finalize scope and get your written, itemized bid.' },
      { icon: faClipboardList, title: 'Permit Application & Review', body: '2-6 weeks depending on the jurisdiction and scope — the step homeowners underestimate most.' },
      { icon: faHammer, title: 'Construction', body: '6-16 weeks depending on size — most single-room additions land in the 8-10 week range.' },
      { icon: faCheckCircle, title: 'Final Inspection & Close-Out', body: '1-2 weeks for final inspections and permit sign-off once construction wraps.' },
    ],
  },
  {
    type: 'table',
    heading: 'Permit Responsibility — DIY vs. Working With a GC',
    tableHeaders: ['Task', 'Doing It Yourself', 'With a General Contractor'],
    tableRows: [
      ['Pulling the permit', 'You apply and track it', 'GC pulls and manages it'],
      ['Inspection scheduling', 'You coordinate each trade', 'GC schedules and attends'],
      ['Code compliance', 'On you to research', "Built into the GC's bid and process"],
      ['Delays from rejected plans', 'You absorb the timeline hit', 'GC revises and resubmits'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "A permit that's pulled and closed properly protects your home's resale value — unpermitted additions are a common inspection red flag when you sell.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Home Addition Permits in Waco, TX: What Triggers One and How Long It Takes"
        description="Adding square footage almost always means pulling a permit. Here's what triggers permitting in McLennan County, the typical timeline, and how a GC handles it for you."
        imageSrc="/pages/blogs/home-addition-permits.jpg"
        imageAlt="Building permit documents for a home addition in Waco TX"
        category="Permitting"
        date="April 24, 2026"
        readTime={7}
        authorName="Bedrock Construction Group Team"
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Planning an Addition?"
        body="Bedrock Construction Group handles permitting, scheduling, and construction under one written bid — so you're not chasing the city yourself."
        buttonText="Get a Project Estimate"
        buttonHref="/services/home-additions-remodels"
      />
      <NewsletterSignup variant={1} spot="permit-guide-blog" />
    </>
  );
}
