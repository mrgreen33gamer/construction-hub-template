// Bedrock Construction Group — Kitchen & Bath Renovation Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → ImpactMetrics → WhatToExpect
//        → WhyChooseUs → ProcessTimeline → GuaranteeSection → LocalServiceAreas
//        → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faBath, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faHouseChimney, faHammer, faClipboardList,
  faRuler, faDollarSign, faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function KitchenBathRenovationPage() {

  const metrics = [
    { icon: faTrophy,    value: 110,  label: "Kitchen and bath renovations completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 100,  label: "Satisfaction rate on completed renovations", suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years renovating homes in Waco and beyond", suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faRuler,        title: "Design Sized to Your Space",        description: "We measure and plan the layout before any demo starts, so the design actually fits how you cook, bathe, and live." },
    { icon: faSearch,       title: "Honest Material Recommendations",   description: "We'll present cabinetry, countertop, and tile options at multiple price points with honest pros and cons. You choose — we install." },
    { icon: faCheckCircle,  title: "Licensed Trades, Clean Installation", description: "Full renovation by licensed plumbing, electrical, and tile trades — no subs skipped, no shortcuts taken." },
    { icon: faShieldHalved, title: "Final Walkthrough & Warranty",      description: "We walk every finished space with you before handoff, backed by our full 2-year workmanship warranty." },
  ];

  const whyFeatures = [
    { icon: faDollarSign, title: "Financing Available",                        description: "Kitchen and bath renovations are a real investment. We offer flexible financing for qualified homeowners — ask us for details." },
    { icon: faRuler,      title: "We Design Around How You Actually Use the Space", description: "Not just a pretty layout — we plan storage, workflow, and traffic patterns around your daily routine." },
    { icon: faStar,       title: "Trusted Local Trade Partners",               description: "We work with vetted Central Texas suppliers for cabinetry, countertops, and tile, so materials arrive on schedule and match what you approved." },
  ];

  const processSteps = [
    { number: 1, title: "Free In-Home Design Consultation", description: "We measure your space, discuss your goals, and talk through material and layout options before any commitment.", icon: faRuler },
    { number: 2, title: "Written, Itemized Bid",            description: "Flat, itemized quote covering materials and labor — before any commitment is made.",                              icon: faFileContract },
    { number: 3, title: "Renovation Days",                  description: "Licensed trades execute the work on the schedule we gave you, with daily cleanup and dust containment.",             icon: faHammer },
    { number: 4, title: "Final Walkthrough & Warranty",     description: "We walk every finished space with you, register any product warranties, and back the labor with our 2-year warranty.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Written, Itemized Bid",         body: "The price we quote is the price you pay — regardless of how long the renovation takes." },
    { icon: faRotateLeft,   title: "2-Year Workmanship Warranty",   body: "We warrant our renovation labor for a full 2 years. If something we did causes a problem, we come back at no charge." },
    { icon: faShieldHalved, title: "Trade Partner Warranties Included", body: "New cabinetry, countertops, and fixtures come with the full manufacturer warranty, registered on your behalf." },
    { icon: faLock,         title: "Licensed, Insured Crew Only",   body: "Every renovation is done by our own licensed, bonded team overseeing every trade — no shortcuts." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and full crew availability.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full renovation service for Hewitt homes.",                  badge: "" },
    { town: "Woodway",      benefit: "Premium kitchen and bath renovations for Woodway properties.", badge: "" },
    { town: "China Spring", benefit: "Rural renovation coverage — call for timeline details.",     badge: "" },
    { town: "Killeen",      benefit: "Bell County renovations for Killeen area homeowners.",       badge: "" },
    { town: "Temple",       benefit: "Full kitchen and bath coverage for Bell County homes.",      badge: "" },
  ];

  const comparisonRows = [
    { feature: "In-home design consultation",          us: "✅ Always included",     others: "❌ Often skipped" },
    { feature: "Licensed crew — no unknown subs",       us: "✅ Our own team",         others: "❌ Frequently subbed out" },
    { feature: "Written, itemized quote",               us: "✅ Before work begins",   others: "❌ Open-ended estimate" },
    { feature: "Manufacturer warranty registration",    us: "✅ We handle it",         others: "❌ Left to homeowner" },
    { feature: "2-year workmanship warranty",           us: "✅ Every renovation",     others: "❌ 90 days or less" },
    { feature: "Financing available",                   us: "✅ Flexible options",     others: "❌ Cash/card only" },
  ];

  const faq = [
    { question: "How much does a kitchen or bathroom renovation cost in Waco?", answer: "Kitchen renovations typically run $25,000–$80,000 depending on layout changes and finish level. Bathroom renovations run $15,000–$40,000. We provide a flat, itemized quote after an in-home design consultation." },
    { question: "How long does a kitchen or bath renovation take?",            answer: "A bathroom renovation typically takes 3–5 weeks; a full kitchen renovation runs 6–10 weeks depending on scope and material lead times." },
    { question: "What's included in the design consultation?",                answer: "We measure your space, discuss layout and material options at different price points, and walk you through what a realistic budget and timeline look like — no obligation to proceed." },
    { question: "What cabinetry, countertop, and tile brands do you work with?", answer: "We partner with trusted Central Texas suppliers for cabinetry, countertops, tile, and fixtures. You choose within your budget from real options — we handle ordering and installation." },
    { question: "Do you offer financing?",                                     answer: "Yes — flexible financing options are available for qualified homeowners. Ask us when you get your quote." },
    { question: "What happens to my old cabinets and fixtures?",               answer: "We remove and properly dispose of your old materials as part of the renovation — one less thing for you to manage." },
  ];

  const crossServices = [
    { icon: faHammer,        title: "Home Additions & Remodels", body: "Need more than just a kitchen or bath? We build additions too.",  link: "/services/home-additions-remodels" },
    { icon: faHouseChimney,  title: "New Home Construction",     body: "Building new instead of renovating? We do that too.",             link: "/services/new-home-construction" },
    { icon: faClipboardList, title: "General Contracting",       body: "Full project management for owner-designed renovations.",         link: "/services/general-contracting" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Kitchen & Bath Renovation" },
      ]} />

      <SectionIntro
        title="Kitchen & Bath Renovation in Waco, TX"
        subtitle="Full gut renovations or targeted updates — licensed trades, honest material options, financing available, backed by a 2-year workmanship warranty."
      />

      <TrustBar headline="110+ kitchen and bath renovations completed across Central Texas by our own licensed crew" />

      <div className={styles.section}>
        <ImpactMetrics title="Our Renovation Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Renovation Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose Bedrock for Renovations" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/kitchen-bath-renovation" title="Kitchen & Bath Renovation Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Kitchen & Bath Renovation FAQs" />
      </div>

      <CTABanner
        headline="Ready for a New Kitchen or Bath? Let's Start with a Free Design Consult."
        subline="In-home assessment, written itemized quote, financing available. Our own licensed crew handles every trade."
        primaryText="Get a Free Quote"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services We Offer" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant2
          title="Schedule a Free Renovation Consultation"
          cityName="Waco"
          slug="services/kitchen-bath-renovation"
          spot="kitchen-bath-renovation-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
