// Bedrock Construction Group — Home Additions & Remodels Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhyChooseUs → WhatToExpect
//        → ProcessTimeline → ImpactMetrics → Testimonials → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faHammer, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine,
  faHouseChimney, faBath, faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeAdditionsRemodelsPage() {

  const whyFeatures = [
    { icon: faClock,        title: "Real Timelines, Not Guesses",       description: "We give you an honest schedule at the bid walkthrough and stick to it — additions and remodels finish when we say they will." },
    { icon: faHammer,       title: "Additions That Match Your Home",    description: "Structural additions built to match your existing brick, roofline, and finishes — not a visible add-on." },
    { icon: faShieldHalved, title: "Licensed Trades, Not Handymen",     description: "Structural, plumbing, and electrical work is done by licensed trades on every project — not a general handyman crew." },
  ];

  const expectations = [
    { icon: faSearch,       title: "Full Site & Structural Assessment", description: "We evaluate your existing structure, foundation, and utilities before we ever write a bid — so the number you see is the number that holds." },
    { icon: faFileContract, title: "Written, Itemized Remodel Quote",   description: "Detailed price before any work starts. No hourly billing, no surprise change orders." },
    { icon: faCheckCircle,  title: "Built to Match Existing Construction", description: "Brick, siding, trim, and rooflines matched so the addition reads as part of the original house, not an afterthought." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty",       description: "Every addition and remodel we complete is backed by a full 2 years of workmanship coverage." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Request a Quote", description: "Phone, text, or the form below. We'll schedule a site visit that fits your timeline.",              icon: faHeadset },
    { number: 2, title: "Site Walk & Scope",       description: "We assess the existing structure and define the exact scope — explained in plain English.",          icon: faSearch },
    { number: 3, title: "Written, Itemized Bid",   description: "Detailed price before any work begins. You decide — zero pressure to proceed.",                       icon: faFileContract },
    { number: 4, title: "Build & Walkthrough",     description: "Managed construction with regular updates, finished with a walkthrough and your 2-year warranty.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 95,  label: "Additions and remodels completed since 2012", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,  label: "On-time project completion rate",             suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,  label: "Years of Central Texas remodeling experience",suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for additions and remodels.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full addition and remodel coverage for Hewitt homes.",       badge: "" },
    { town: "Woodway",      benefit: "Matched-finish additions for Woodway neighborhoods.",         badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for site-visit availability.",   badge: "" },
    { town: "Temple",       benefit: "Full remodel coverage for Bell County homes.",                badge: "" },
    { town: "Killeen",      benefit: "Bell County additions and remodels on request.",              badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written, itemized quote before work starts", us: "✅ Always written",   others: "❌ Verbal range only" },
    { feature: "2-year workmanship warranty",                us: "✅ Every project",     others: "❌ 1 year or less" },
    { feature: "Matched to existing construction",           us: "✅ Brick, roof, trim", others: "❌ Visible add-on look" },
    { feature: "Licensed structural, plumbing, electrical",  us: "✅ Every trade",       others: "❌ Handyman crews" },
    { feature: "Dedicated project manager",                  us: "✅ One point of contact", others: "❌ Coordinate subs yourself" },
  ];

  const faq = [
    { question: "How much does a home addition cost in Waco?",              answer: "Most additions run $150–$300 per square foot depending on scope, foundation type, and finishes. We always provide a written, itemized bid before any work begins." },
    { question: "Will the addition match my existing home?",                answer: "Yes — we match brick, siding, roofline, and trim to the original structure so the addition reads as part of the house, not a visible add-on." },
    { question: "Do I need a permit for a home addition or remodel?",       answer: "In almost all cases, yes. Our project manager handles permitting and inspections as part of every project — you don't have to deal with the city yourself." },
    { question: "Can you remodel while I'm still living in the house?",     answer: "In most cases, yes. We phase the work and seal off active construction areas to minimize disruption to the rest of your home." },
    { question: "How long does a typical addition or remodel take?",       answer: "A single-room addition typically takes 6–10 weeks; a whole-home remodel can run several months. We give you an honest schedule at the bid walkthrough." },
  ];

  const crossServices = [
    { icon: faHouseChimney,  title: "New Home Construction", body: "Building from the ground up instead?",                    link: "/services/new-home-construction" },
    { icon: faBath,          title: "Kitchen & Bath Renovation", body: "Full or partial kitchen and bath remodels.",          link: "/services/kitchen-bath-renovation" },
    { icon: faClipboardList, title: "General Contracting",   body: "Full project management for owner-designed builds.",     link: "/services/general-contracting" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Home Additions & Remodels" },
      ]} />

      <SectionIntro
        title="Home Additions & Remodels in Waco, TX"
        subtitle="Structural additions and whole-home remodels — matched to your existing construction, written itemized bids, 2-year workmanship warranty."
      />

      <TrustBar headline="Trusted by 180+ Central Texas homeowners for additions, remodels, and new builds" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Addition & Remodel Work Done Right" />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect on an Addition or Remodel" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/home-additions-remodels" title="Additions & Remodels Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Home Additions & Remodels FAQs" />
      </div>

      <CTABanner
        headline="Ready to Add On or Remodel? Let's Talk."
        subline="Free on-site consultation, written itemized bid, 2-year workmanship warranty on every project."
        primaryText="Call Us Now"
        primaryLink="tel:+12547208100"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services We Offer" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Schedule a Remodel Consultation"
          cityName="Waco"
          slug="services/home-additions-remodels"
          spot="home-additions-remodels-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
