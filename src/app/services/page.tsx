// Bedrock Construction Group — Services Overview
// Order: Breadcrumb → SectionIntro → TrustBar → ServiceCards → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → ProcessTimeline → GuaranteeSection
//        → Testimonials → LocalServiceAreas → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faHouseChimney, faHammer, faBath, faBuilding, faDraftingCompass, faClipboardList,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faHouseChimney,    title: "New Home Construction",   body: "Custom and spec-built homes from foundation to final walkthrough. Written itemized bids, real timelines.",                link: "/services/new-home-construction" },
    { icon: faHammer,          title: "Home Additions & Remodels", body: "Structural additions and whole-home remodels matched to your existing construction.",                                  link: "/services/home-additions-remodels" },
    { icon: faBath,            title: "Kitchen & Bath Renovation", body: "Full gut renovations or targeted updates — licensed trades under one contract, financing available.",                  link: "/services/kitchen-bath-renovation" },
    { icon: faBuilding,        title: "Commercial Construction",  body: "New builds and tenant improvements for retail, office, and light industrial space.",                                    link: "/services/commercial-construction" },
    { icon: faDraftingCompass, title: "Design-Build Services",    body: "Design and construction under a single contract and a single point of contact.",                                        link: "/services/design-build-services" },
    { icon: faClipboardList,   title: "General Contracting",      body: "Full project management for owner-designed builds — permitting, scheduling, managed subcontractors.",                  link: "/services/general-contracting" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free On-Site Consultation",     description: "We walk the site, review your plans or goals, and scope the project with a written, itemized bid — no verbal estimates." },
    { icon: faCheckCircle,  title: "Written, Itemized Pricing",     description: "No lump-sum guessing, no surprise fees. You approve the price before we start — and it doesn't shift mid-project." },
    { icon: faShieldHalved, title: "Licensed, Bonded, AGC Member",  description: "Every project is backed by general liability insurance, a contractor bond, and our AGC membership. You know exactly who's on your project." },
    { icon: faUsers,        title: "2-Year Workmanship Warranty",   description: "Every project we complete is backed by a full 2 years of workmanship coverage. No fine print." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Projects completed since 2012",              suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Client satisfaction rating",                  suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years serving Waco and Central Texas",        suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faUsers,         title: "Managed Subcontractors, Not Strangers", description: "Every trade on your project is vetted, licensed, and scheduled by your dedicated project manager — not a random sub off the street." },
    { icon: faHeadset,       title: "One Point of Contact, Start to Finish", description: "You get a single project manager for the entire build — no coordinating plumbers, electricians, and inspectors yourself." },
    { icon: faShieldHalved,  title: "Financing Available",                   description: "New construction and major renovations don't have to strain your budget. We offer flexible financing options for qualified clients — ask us for details." },
  ];

  const processSteps = [
    { number: 1, title: "Consult",  description: "Call, text, or book online. We'll schedule a site visit that fits your timeline.",                      icon: faHeadset },
    { number: 2, title: "Scope",    description: "Project manager walks the site, defines scope, and clarifies your goals — no pressure.",                 icon: faSearch },
    { number: 3, title: "Bid",      description: "Written, itemized bid before any work starts. No surprises, no hidden fees.",                             icon: faFileContract },
    { number: 4, title: "Build",    description: "Managed construction with regular updates, backed by our 2-year workmanship warranty.",                   icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, description: "The price you approve is the price you pay. No lump-sum guessing, no change orders mid-job without your sign-off.", title: "Written, Itemized Pricing" },
    { icon: faRotateLeft,   description: "Every project is backed by a full 2 years of workmanship coverage. No fine print.",                                   title: "2-Year Workmanship Warranty" },
    { icon: faHeadset,      description: "Call us and a real project manager in Waco answers — no call centers, no hold queues.",                               title: "Real People Answer the Phone" },
    { icon: faLock,         description: "Licensed, bonded, and an AGC member. Proof of license and insurance available on request.",                           title: "Licensed, Bonded & Insured" },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — best availability and fastest response in the city.", badge: "Home Base" },
    { town: "Temple",       benefit: "Full residential and commercial service coverage.",                badge: "" },
    { town: "Killeen",      benefit: "Regular coverage near Fort Cavazos.",                               badge: "" },
    { town: "Hewitt",       benefit: "Full residential and commercial service coverage.",                badge: "" },
    { town: "Woodway",      benefit: "Custom builds and renovations for Woodway properties.",             badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most locations.",            badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written, itemized pricing",       us: "✅ Always",         others: "❌ Lump-sum guessing" },
    { feature: "2-year workmanship warranty",     us: "✅ Every project",  others: "❌ 1 year or less" },
    { feature: "Licensed, bonded, AGC member",    us: "✅ Verified",       others: "❌ Varies" },
    { feature: "Managed subcontractor crews",     us: "✅ Vetted & licensed", others: "❌ Unknown subs" },
    { feature: "Dedicated project manager",       us: "✅ One point of contact", others: "❌ Coordinate yourself" },
  ];

  const faq = [
    { question: "How much does construction cost in Waco?",         answer: "Additions and remodels run $150–$300 per square foot; new home construction runs $150–$250 per square foot; kitchen and bath renovations run $15,000–$80,000. We always provide a written, itemized bid before any work begins." },
    { question: "Do you work on both residential and commercial projects?", answer: "Yes — new home construction, remodels, and commercial buildouts and tenant improvements, all under the same licensed, bonded team." },
    { question: "What does your general contracting service include?",     answer: "Full project takeoff and bid, permitting, weekly progress reporting, and a managed, vetted subcontractor crew for every trade — from groundbreaking to final walkthrough." },
    { question: "Are you licensed and bonded?",                             answer: "Yes — Bedrock Construction Group is a licensed and bonded general contractor and a member of the Associated General Contractors of America (AGC). Proof of license and insurance available on request." },
    { question: "How long does a typical project take?",                    answer: "A kitchen remodel typically takes 6–10 weeks; a home addition takes 6–10 weeks; a new home build takes 7–10 months. We give you an honest schedule at the bid walkthrough." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Construction Services for Waco & Central Texas"
        subtitle="New construction, additions, renovations, and commercial builds — done right, priced fairly, backed by a 2-year workmanship warranty on every job."
      />

      <TrustBar headline="Trusted by 180+ Central Texas homes and businesses since 2012" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Project Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses Bedrock" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Construction Services FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Project?"
        subline="Free on-site consultation available. Written, itemized bids, 2-year workmanship warranty, licensed and bonded on every job."
        primaryText="Call Us Now"
        primaryLink="tel:+12547208100"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Service or Free Estimate"
          cityName="Waco"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
