// Bedrock Construction Group — Commercial Construction Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhyChooseUs → ImpactMetrics
//        → WhatToExpect → ProcessTimeline → GuaranteeSection → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant3            from "#/PageComponents/ContactForms/Variant3/Form";

import {
  faBuilding, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faClipboardList, faDraftingCompass, faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialConstructionPage() {

  const whyFeatures = [
    { icon: faBuilding,      title: "Retail, Office & Light Industrial Experience", description: "New builds and tenant improvements for retail, office, and light industrial space — we know the code requirements for each." },
    { icon: faClock,         title: "Built Around Your Business's Timeline",        description: "We phase work to minimize downtime and disruption to your operations, and we tell you the real schedule up front." },
    { icon: faClipboardList, title: "One Point of Contact, Bid to Occupancy",       description: "Your project manager owns permitting, subcontractors, and inspections — you get one number to call, not five." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 40,  label: "Commercial builds and tenant improvements completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 95,  label: "On-time project completion rate",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years of commercial contracting experience",           suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,        title: "Pre-Construction Site & Scope Review", description: "We walk the space, review your lease or ownership requirements, and define scope before any bid is written." },
    { icon: faBuilding,      title: "Full Build or Tenant Improvement",     description: "Ground-up commercial construction or interior tenant improvements — both handled under one contract." },
    { icon: faCheckCircle,   title: "Code-Compliant, Inspected Work",       description: "Every phase is built to code and scheduled for the required inspections — no surprises at certificate-of-occupancy time." },
    { icon: faShieldHalved,  title: "Post-Project Report & Warranty",      description: "You get a closeout report and punch-list sign-off, backed by our 2-year workmanship warranty." },
  ];

  const processSteps = [
    { number: 1, title: "Schedule a Consultation", description: "Call or book online. We'll schedule a site walk that fits your business's schedule.",             icon: faHeadset },
    { number: 2, title: "Pre-Construction Review", description: "We review your space, lease requirements, and goals, and define exact project scope.",           icon: faSearch },
    { number: 3, title: "Written, Itemized Bid",   description: "Detailed price before any work begins, covering every trade and phase.",                          icon: faFileContract },
    { number: 4, title: "Build & Walkthrough",     description: "Managed construction with regular updates, ending in inspection sign-off and your 2-year warranty.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Written, Itemized Bid",       description: "Full cost breakdown by trade and phase before you sign — no lump-sum guessing." },
    { icon: faRotateLeft,   title: "Punch List Sign-Off",         description: "We don't consider a project complete until every punch-list item is resolved to your satisfaction." },
    { icon: faShieldHalved, title: "Licensed & Insured Crew",     description: "Every commercial project is backed by general liability insurance and our contractor bond." },
    { icon: faLock,         title: "No High-Pressure Change Orders", description: "Change orders are written, priced, and approved by you before we proceed — never billed as a surprise." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for commercial projects.", badge: "Home Base" },
    { town: "Temple",       benefit: "Full commercial construction coverage for Bell County.",  badge: "" },
    { town: "Killeen",      benefit: "Commercial builds and tenant improvements near Fort Cavazos.", badge: "" },
    { town: "Hewitt",       benefit: "Full commercial coverage for Hewitt businesses.",         badge: "" },
    { town: "Woodway",      benefit: "Retail and office builds for Woodway businesses.",         badge: "" },
    { town: "Bellmead",     benefit: "Commercial coverage for Bellmead businesses.",             badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full build or tenant improvement scope",  us: "✅ Both handled",         others: "❌ Often one or the other" },
    { feature: "Written, itemized pricing",                us: "✅ Before work starts",    others: "❌ Open-ended estimate" },
    { feature: "Closeout report & photo documentation",    us: "✅ Every project",          others: "❌ Rarely provided" },
    { feature: "Licensed & bonded crew",                    us: "✅ Verified",                others: "❌ Not always" },
    { feature: "No high-pressure change orders",             us: "✅ Written & approved first", others: "❌ Frequent surprise billing" },
  ];

  const faq = [
    { question: "How much does a commercial buildout cost in Waco?",           answer: "Tenant improvements typically run $60–$150 per square foot depending on scope and finish level. Ground-up commercial builds vary widely by use and size. We provide a written, itemized bid after a site walk." },
    { question: "Do you handle permitting and inspections for commercial projects?", answer: "Yes — our project manager handles permitting, code compliance, and inspection scheduling as part of every commercial project." },
    { question: "Can you build while my business stays open?",                  answer: "In many cases, yes. We phase work and coordinate hours to minimize disruption to your operations — we'll walk through the plan with you up front." },
    { question: "Do you build ground-up commercial or only interior buildouts?", answer: "Both — new construction and tenant improvements, from retail and office to light industrial space." },
    { question: "How do you handle change orders?",                             answer: "Every change order is written, priced, and approved by you before we proceed. You'll never see a surprise line item on the final invoice." },
  ];

  const crossServices = [
    { icon: faDraftingCompass, title: "Design-Build Services", body: "Design and construction under a single contract.",       link: "/services/design-build-services" },
    { icon: faClipboardList,   title: "General Contracting",   body: "Full project management for owner-designed builds.",     link: "/services/general-contracting" },
    { icon: faHouseChimney,    title: "New Home Construction", body: "Residential builds, if that's what you need instead.",   link: "/services/new-home-construction" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Construction" },
      ]} />

      <SectionIntro
        title="Commercial Construction in Waco, TX"
        subtitle="New builds and tenant improvements for retail, office, and light industrial space — managed to your business's timeline, backed by a 2-year workmanship warranty."
      />

      <TrustBar headline="40+ commercial builds and tenant improvements completed across Central Texas" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Businesses Build With Bedrock" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Commercial Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How We Manage Your Commercial Project" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-construction" title="Commercial Construction Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Construction FAQs" />
      </div>

      <CTABanner
        headline="Ready to Build or Renovate Your Space?"
        subline="Full commercial builds and tenant improvements for Waco-area businesses. Written pricing, licensed crew, 2-year workmanship warranty."
        primaryText="Schedule Now"
        primaryLink="/contact"
        secondaryText="Call Us"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Pair With These Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant3
          title="Request a Commercial Project Quote"
          cityName="Waco"
          slug="services/commercial-construction"
          spot="commercial-construction-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
