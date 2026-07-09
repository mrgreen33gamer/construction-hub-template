// Bedrock Construction Group — Design-Build Services Page
// Order: Breadcrumb → SectionIntro → TrustBar → ProcessTimeline → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → GuaranteeSection → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faDraftingCompass, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faHouseChimney, faBuilding, faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export default function DesignBuildServicesPage() {

  const processSteps = [
    { number: 1, title: "Discovery & Site Assessment",   description: "We evaluate the site, your goals, and your budget range before any design work begins.",             icon: faSearch },
    { number: 2, title: "Design Development",             description: "We develop design options around your goals, with realistic cost implications for each.",           icon: faDraftingCompass },
    { number: 3, title: "Construction Under One Contract", description: "Design and construction move forward under a single contract with our team — no handoff to a separate builder.", icon: faHeadset },
    { number: 4, title: "Verify & Walkthrough",           description: "We test and inspect every finished element and walk you through the completed project.",              icon: faShieldHalved },
  ];

  const expectations = [
    { icon: faDraftingCompass, title: "Concept & Schematic Design",     description: "We develop initial design options around your goals and budget — you see real choices before anything is finalized." },
    { icon: faFileContract,    title: "Design-Phase Budget Estimate",   description: "A realistic cost range is established early, so design decisions stay aligned with the number that actually matters." },
    { icon: faCheckCircle,     title: "One Contract, One Team",         description: "Design and construction are managed by Bedrock start to finish — no separate architect-contractor handoff, no finger-pointing." },
    { icon: faClipboardList,   title: "Construction Documents & Permitting", description: "Final drawings and permit submittal are handled by us as part of the design-build process." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 60,  label: "Design-build projects delivered across Central Texas", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 95,  label: "Of design-build projects delivered on budget",         suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years of Central Texas design-build experience",       suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faSearch,       title: "Fewer Handoffs, Fewer Surprises",         description: "One team is responsible for design and construction — no finger-pointing between an architect and a separate contractor when something doesn't line up." },
    { icon: faShieldHalved, title: "Constructability Built Into Design",      description: "Our builders review every design decision before it's finalized, so what gets drawn is actually what can be built on budget." },
    { icon: faClock,        title: "Faster Path from Concept to Groundbreaking", description: "Design, permitting, and pre-construction steps overlap instead of happening one after another — projects move faster without cutting corners." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for design-build consultations.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full design-build service for Hewitt residential and commercial projects.", badge: "" },
    { town: "Woodway",      benefit: "Custom design-build projects for Woodway properties.",              badge: "" },
    { town: "Temple",       benefit: "Design-build coverage for Bell County projects.",                  badge: "" },
    { town: "Killeen",      benefit: "Design-build projects near Fort Cavazos.",                          badge: "" },
    { town: "China Spring", benefit: "Rural design-build projects — call ahead for site-visit scheduling.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Single contract for design and construction", us: "✅ One team, one contract", others: "❌ Separate architect + GC" },
    { feature: "Constructability review during design",        us: "✅ Built in",                others: "❌ Found after bidding" },
    { feature: "Written, itemized bid at construction start",  us: "✅ Always",                  others: "❌ Design fees separate from bid" },
    { feature: "One project manager, start to finish",         us: "✅ Single point of contact",  others: "❌ You coordinate the handoff" },
    { feature: "2-year workmanship warranty",                  us: "✅ Every project",            others: "❌ Varies by contractor" },
  ];

  const faq = [
    { question: "What is design-build, and how is it different from hiring an architect and a contractor separately?", answer: "In design-build, one company — us — handles both design and construction under a single contract. There's no handoff between a separate architect and general contractor, which means fewer surprises, fewer delays, and one point of accountability for the whole project." },
    { question: "How much does design-build cost?",                answer: "You pay a design fee for the design phase, followed by a written, itemized construction bid once the design is finalized. We give you a realistic budget range at the start of the design process so there are no surprises later." },
    { question: "How long does it take to go from first meeting to groundbreaking?",  answer: "Typically 2–4 months depending on project complexity and permitting timelines — faster than the traditional design-bid-build sequence because design and pre-construction steps overlap." },
    { question: "Do I own the final design and drawings?",         answer: "Yes — the design and construction documents are yours once the project is complete." },
    { question: "Can you design-build a commercial project too?",  answer: "Yes — design-build works for both residential and commercial projects, from home additions to retail and office builds." },
  ];

  const crossServices = [
    { icon: faHouseChimney,  title: "New Home Construction", body: "Already have a design? We'll build it.",                link: "/services/new-home-construction" },
    { icon: faBuilding,      title: "Commercial Construction", body: "Design-build for retail, office, and light industrial.", link: "/services/commercial-construction" },
    { icon: faClipboardList, title: "General Contracting",   body: "Have plans already? We can build from those too.",       link: "/services/general-contracting" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Design-Build Services" },
      ]} />

      <SectionIntro
        title="Design-Build Services in Waco, TX"
        subtitle="Design and construction under a single contract and a single point of contact — faster decisions, fewer handoffs, one team accountable end to end."
      />

      <TrustBar headline="60+ design-build projects delivered on budget across Central Texas" />

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Our Design-Build Process Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Design-Build by the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="How We Approach Design-Build" />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/design-build-services" title="Design-Build Services Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Design-Build FAQs" />
      </div>

      <CTABanner
        headline="Have an Idea? Let's Design It — Then Build It."
        subline="Honest design-build consultation for Waco-area projects. One contract, one team, one point of contact."
        primaryText="Schedule a Design Consultation"
        primaryLink="/contact"
        secondaryText="Call Us"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services We Offer" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Schedule a Design-Build Consultation"
          cityName="Waco"
          slug="services/design-build-services"
          spot="design-build-services-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
