// Bedrock Construction Group — New Home Construction Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//        → LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHouseChimney, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine,
  faHammer, faDraftingCompass, faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export default function NewHomeConstructionPage() {

  const expectations = [
    { icon: faSearch,       title: "Site & Design Consultation",              description: "We walk the lot, review your plans or help develop them, and scope the full build before any bid is written." },
    { icon: faFileContract, title: "Written, Itemized Bid Before We Break Ground", description: "You get a detailed price before any work starts. It doesn't change unless you approve a written change order." },
    { icon: faCheckCircle,  title: "Managed Build, Start to Finish",           description: "One project manager oversees permitting, subcontractors, and inspections from groundbreaking to final walkthrough." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty",              description: "Every new home we build is backed by a full 2 years of workmanship coverage on labor and construction defects." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Real Project Schedules",       description: "We give you an honest build timeline up front and update you at every milestone — no vanishing act between framing and drywall." },
    { icon: faHouseChimney, title: "Custom and Spec Builds",        description: "Fully custom designs or proven spec plans — we build both, sized and priced for your lot and budget." },
    { icon: faShieldHalved, title: "Licensed, Bonded, AGC Member",  description: "Every build is backed by general liability insurance, a contractor bond, and our AGC membership. No unlicensed subs, no shortcuts." },
  ];

  const processSteps = [
    { number: 1, title: "Consultation & Site Walk", description: "We visit the lot, review your goals and budget, and scope what the build actually requires.",              icon: faHeadset },
    { number: 2, title: "Design & Scope",           description: "Working from your plans (or ours), we finalize the scope of work down to the finishes.",                  icon: faSearch },
    { number: 3, title: "Written, Itemized Bid",    description: "Detailed price before we break ground. You decide — zero pressure to proceed.",                          icon: faFileContract },
    { number: 4, title: "Build & Walkthrough",      description: "Managed construction with regular updates, ending in a full walkthrough and your 2-year warranty.",       icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Homes and projects completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,  label: "Client satisfaction rating",                          suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years of local contracting experience",               suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available project managers.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full new-construction coverage throughout Hewitt.",          badge: "" },
    { town: "Woodway",      benefit: "Custom home builds for Woodway lots and neighborhoods.",     badge: "" },
    { town: "McGregor",     benefit: "Rural and in-town lots — call ahead for scheduling.",         badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for site-visit availability.",   badge: "" },
    { town: "Temple",       benefit: "Full new-home coverage for Bell County lots.",                badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written, itemized bid before groundbreaking", us: "✅ Always written",      others: "❌ Verbal range only" },
    { feature: "2-year workmanship warranty",                 us: "✅ Every build",          others: "❌ 1 year or less" },
    { feature: "AGC member, licensed & bonded",                us: "✅ Verified",              others: "❌ Not always" },
    { feature: "Dedicated project manager",                    us: "✅ One point of contact",  others: "❌ Coordinate subs yourself" },
    { feature: "Managed subcontractor crews",                  us: "✅ Vetted & licensed",      others: "❌ Unknown subs" },
  ];

  const faq = [
    { question: "How much does it cost to build a new home in Waco?",         answer: "Most builds run $150–$250 per square foot depending on lot conditions and finishes, with custom finish packages running higher. We always provide a written, itemized bid before any work begins." },
    { question: "Do you build custom homes or only from existing plans?",     answer: "Both — fully custom designs from your architect or ours, or proven spec plans we've built before. Either way you get the same written bid and 2-year workmanship warranty." },
    { question: "How long does a new home build take?",                      answer: "Most single-family homes take 7–10 months from groundbreaking to final walkthrough, depending on size, weather, and permitting. We give you an honest schedule up front and update you at every milestone." },
    { question: "Do you handle permitting?",                                  answer: "Yes — our project manager handles permitting, inspections, and utility coordination as part of every build. You don't have to chase down the city yourself." },
    { question: "Are you licensed and bonded in Texas?",                     answer: "Yes — Bedrock Construction Group is a licensed and bonded general contractor and a member of the Associated General Contractors of America (AGC). Proof of license and insurance is available on request." },
    { question: "Do you use subcontractors for framing, electrical, and plumbing?", answer: "Yes — we vet, license-check, and manage a trusted subcontractor network for every trade, overseen by our project managers from groundbreaking to final walkthrough." },
  ];

  const crossServices = [
    { icon: faHammer,          title: "Home Additions & Remodels", body: "Add space or update what you already have.",              link: "/services/home-additions-remodels" },
    { icon: faDraftingCompass, title: "Design-Build Services",     body: "Design and construction under a single contract.",         link: "/services/design-build-services" },
    { icon: faClipboardList,   title: "General Contracting",       body: "Full project management for owner-designed builds.",       link: "/services/general-contracting" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "New Home Construction" },
      ]} />

      <SectionIntro
        title="New Home Construction in Waco, TX"
        subtitle="Custom and spec-built homes from foundation to final walkthrough — written, itemized bids, real timelines, and a 2-year workmanship warranty."
      />

      <TrustBar headline="180+ Central Texas homes and projects built by Bedrock since 2012" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Build With Us" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Builds With Bedrock" />
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
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/new-home-construction" title="New Home Construction Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="New Home Construction FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Break Ground? Let's Talk."
        subline="Free on-site consultation, written itemized bid, 2-year workmanship warranty on every new home."
        primaryText="Call Us Now"
        primaryLink="tel:+12547208100"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Request a Build Estimate"
          cityName="Waco"
          slug="services/new-home-construction"
          spot="new-home-construction-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
