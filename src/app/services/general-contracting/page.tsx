// Bedrock Construction Group — General Contracting / Project Management Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → GuaranteeSection → ProcessTimeline → ImpactMetrics → Testimonials
//        → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect     from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import ValueComparison  from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant2         from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faClipboardList, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function GeneralContractingPage() {

  const expectations = [
    { icon: faClipboardList, title: "Full Project Takeoff & Bid",     description: "We review your plans and provide a detailed, itemized bid covering every trade before construction starts." },
    { icon: faSearch,        title: "Permitting & Inspection Management", description: "We pull permits, schedule inspections, and keep the project moving through the city's process — you don't have to." },
    { icon: faCheckCircle,   title: "Weekly Progress Reporting",       description: "You get a written update on schedule, budget, and any open items every week — not just when something goes wrong." },
    { icon: faUsers,         title: "Managed Subcontractor Crews",    description: "Every trade on your project is vetted, licensed, and scheduled by your dedicated project manager." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Prevent Budget and Schedule Surprises", description: "Most cost overruns come from unclear scope and poor subcontractor coordination. Our project managers close those gaps before they become change orders." },
    { icon: faShieldHalved, title: "Licensed, Bonded Oversight of Every Trade", description: "Every subcontractor on your project is vetted, licensed, and insured before they set foot on site — you never have to chase down proof of insurance yourself." },
    { icon: faUsers,        title: "One Project Manager, Start to Finish",  description: "A single point of contact manages your budget, schedule, and every trade — so you're never coordinating plumbers and electricians yourself." },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Written, Itemized Bid",       description: "Full cost breakdown by trade before you sign — no lump-sum guessing." },
    { icon: faRotateLeft,   title: "2-Year Workmanship Warranty", description: "Every project we manage is backed by our workmanship warranty." },
    { icon: faHeadset,      title: "Weekly Project Updates",      description: "Scheduled reporting on budget, schedule, and any open items." },
    { icon: faLock,         title: "Licensed, Bonded & AGC Member", description: "Every subcontractor is vetted and insured before starting work on your project." },
  ];

  const processSteps = [
    { number: 1, title: "Plan Review & Bid",     description: "We review your architectural plans and provide a written, itemized bid by trade — no contract, no obligation.", icon: faFileContract },
    { number: 2, title: "Permit & Schedule",     description: "We pull permits and build a full project schedule before the first subcontractor arrives on site.",              icon: faSearch },
    { number: 3, title: "Managed Construction",  description: "Every trade is scheduled, inspected, and coordinated by your dedicated project manager.",                       icon: faUsers },
    { number: 4, title: "Closeout & Warranty",   description: "Final walkthrough, punch-list sign-off, and your 2-year workmanship warranty on the completed project.",        icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Projects managed across Central Texas",          suffix: "+", duration: 2 },
    { icon: faChartLine, value: 95,  label: "On-time, on-budget completion rate",              suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years of local project management experience",   suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Written, itemized bid by trade",   us: "✅ Always",                others: "❌ Lump-sum guessing" },
    { feature: "Weekly written progress reports",  us: "✅ Every project",         others: "❌ Verbal updates only" },
    { feature: "Subcontractors vetted & insured",  us: "✅ Every trade",           others: "❌ Unverified" },
    { feature: "Dedicated project manager",        us: "✅ One point of contact",  others: "❌ Coordinate yourself" },
    { feature: "2-year workmanship warranty",      us: "✅ Every project",         others: "❌ Not always included" },
  ];

  const faq = [
    { question: "What does a general contractor actually do on my project?",   answer: "Your general contractor manages permitting, subcontractor scheduling, budget tracking, quality inspections, and city inspections from groundbreaking to final walkthrough — so you have one point of contact instead of five." },
    { question: "I already have architectural plans — can you just build from those?", answer: "Yes — this is exactly what our general contracting / project management service is for. We take your existing plans, provide a written itemized bid, and manage construction end to end." },
    { question: "How do you select subcontractors?",                          answer: "We work from a vetted network of licensed, insured subcontractors for every trade. Your project manager checks credentials and schedules them directly — you're never handed a name and a phone number to sort out yourself." },
    { question: "How often will I get updates on my project?",                answer: "Weekly written progress reports covering schedule, budget, and any open items — plus direct access to your project manager any time something comes up." },
    { question: "Is there a minimum project size for general contracting services?", answer: "No — we quote projects of various sizes, from single-trade coordination on an existing renovation to full ground-up builds. Tell us what you need and we'll give you a straight answer on fit." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "General Contracting" },
      ]} />

      <SectionIntro
        title="General Contracting & Project Management in Waco, TX"
        subtitle="Full project oversight for owner-designed builds — permitting, scheduling, and a managed subcontractor crew for every trade."
      />

      <TrustBar headline="180+ Central Texas projects managed by the Bedrock team" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What's Included in Every Managed Project" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Owners Choose Bedrock to Manage Their Build" />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="General Contracting FAQs" />
      </div>

      <CTABanner
        headline="Have Plans? Let's Manage the Build."
        subline="Written itemized bid, weekly progress reports, licensed and insured subcontractor oversight — every project backed by a 2-year workmanship warranty."
        primaryText="Get a Bid"
        primaryLink="/contact"
        secondaryText="Call Us First"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <Variant2
          title="Request Project Management Services"
          cityName="Waco"
          slug="services/general-contracting"
          spot="general-contracting-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
