"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faLightbulb,
  faBuilding, faClipboardList, faLandmark, faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const INDUSTRIES = [
  {
    slug: "real-estate-developers",
    label: "Real Estate Developers",
    desc: "Ground-up builds and spec homes on a schedule that protects your draw timeline.",
    icon: faBuilding,
  },
  {
    slug: "property-management-firms",
    label: "Property Management Firms",
    desc: "Fast unit turnovers and standardized pricing across your whole portfolio.",
    icon: faClipboardList,
  },
  {
    slug: "municipal-public-works",
    label: "Municipal & Public Works",
    desc: "Bonded, public-bid-ready contracting for public facility construction.",
    icon: faLandmark,
  },
];

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Organization Before We Bid",
      description: "Developers, property managers, and public agencies each work under different constraints — financing timelines, portfolio pricing, or bid compliance. We scope to those constraints, not a generic template.",
    },
    {
      icon: faShieldHalved,
      title: "Locally Operated, Licensed & Bonded",
      description: "We're based in Waco, TX and have served developers, property managers, and public agencies across Central Texas for 14+ years. Local knowledge plus the bonding and licensing your project requires.",
    },
    {
      icon: faLightbulb,
      title: "Design, Build & Project Management — Under One Roof",
      description: "Whether your project needs design-build coordination, subcontractor management, or public bid documentation — we handle all of it. No juggling separate vendors for one project.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Projects completed across Central Texas",     suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Projects delivered on or ahead of schedule",   suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years serving Central Texas organizations",    suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — serving all three industries across McLennan County.", highlight: "Headquarters" },
    { town: "Temple",       benefit: "Active development and public-facility market in Bell County.",         highlight: "" },
    { town: "Killeen",      benefit: "Developer and public-agency projects near Fort Cavazos.",                highlight: "" },
    { town: "Hewitt",       benefit: "Residential development and property-portfolio work.",                  highlight: "" },
    { town: "Woodway",      benefit: "Premium residential development and property management.",              highlight: "" },
    { town: "China Spring", benefit: "Rural and acreage development and public works coverage.",               highlight: "" },
  ];

  const comparisonRows = [
    { feature: "Written, itemized bids",                us: "✅ Every project, lender/audit-ready", others: "❌ Verbal ranges, surprises" },
    { feature: "Local Central Texas market knowledge",  us: "✅ 14+ years in Waco",                 others: "❌ Out-of-area contractors" },
    { feature: "Design, build & project management",    us: "✅ All in-house",                      others: "❌ Separate vendors" },
    { feature: "Licensed, bonded, AGC member",           us: "✅ Yes",                               others: "Sometimes" },
    { feature: "You get a documented project record",   us: "✅ Photos, change orders, inspections", others: "❌ Verbal only" },
  ];

  const faq = [
    {
      question: "What industries does Bedrock Construction Group work with?",
      answer: "We have dedicated experience serving real estate developers, property management firms, and municipal & public works agencies — plus standard residential and commercial construction for individual owners.",
    },
    {
      question: "Do you build to the same standard for every client type, or tailor the approach?",
      answer: "Every project is scoped to the client's real constraints. A developer's draw schedule, a property manager's portfolio pricing, and a municipality's bid compliance are different problems — we build our process around each one specifically.",
    },
    {
      question: "Do you serve organizations outside of Central Texas?",
      answer: "We're based in Waco and primarily serve McLennan, Bell, and the surrounding counties, but we've worked with developers and agencies from further out in Texas on a project basis.",
    },
    {
      question: "Can you handle both the construction and the project management for our organization?",
      answer: "Yes — we handle design-build coordination, subcontractor management, and project reporting under one contract, so your team isn't juggling separate vendors for one project.",
    },
    {
      question: "How do I know which service is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll walk your project, scope it honestly, and give you a written bid — no pressure, no overselling.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Specialized general contracting built for how your organization actually works — not a generic residential template with your logo swapped in."
      />

      <TrustBar headline="Trusted by developers, property managers, and public agencies across Central Texas for 14+ years" />

      {/* ── THE INDUSTRY GRID ── */}
      <div className={styles.section}>
        <div className={styles.industryGridHeader}>
          <h2 className={styles.industryGridHeading}>Browse by Industry</h2>
          <p className={styles.industryGridSub}>Click your industry to see exactly what we build for organizations like yours.</p>
        </div>
        <div className={styles.industryGrid}>
          {INDUSTRIES.map(({ slug, label, desc, icon }) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className={styles.industryCardLink}
              aria-label={`Learn about our ${label} services`}
            >
              <div className={styles.industryCard}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
                <div className={styles.industryCardText}>
                  <span className={styles.industryLabel}>{label}</span>
                  <p className={styles.industryDesc}>{desc}</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className={styles.industryArrow} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Central Texas"
          features={whyFeatures}
          title="Why Industry-Specific Contracting Matters"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          title="Industries Served Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="Why Organizations Choose Bedrock"
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Industry Services — Frequently Asked Questions"
        />
      </div>

      <CTABanner
        headline="Don't See Your Organization Type? Let's Talk."
        subline="We work with organizations outside our listed industries all the time. If you have a real project and a real timeline, we can scope it. Free consultation, no pressure."
        primaryText="Tell Us About Your Project"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Free Project Consultation"
          cityName="Waco"
          slug="industries"
          spot="industries-hub-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
