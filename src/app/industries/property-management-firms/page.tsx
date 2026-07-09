"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faClock, faBuilding, faFileContract, faUsers, faClipboardList, faShieldHalved,
  faSearch, faChartLine, faCheckCircle, faTrophy, faBath, faHammer,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementFirmsIndustryPage() {

  const painPoints = [
    {
      icon: faClock,
      problem: "Slow turnover renovations mean vacant units losing rent",
      consequence: "Every extra day a unit sits mid-renovation is a day of lost rent. Property managers need a contractor who treats turnover speed as the priority it is.",
    },
    {
      icon: faBuilding,
      problem: "Juggling different contractors across multiple properties",
      consequence: "Coordinating a separate contractor for each building means inconsistent quality, pricing, and scheduling — and no single contractor who really knows your portfolio.",
    },
    {
      icon: faFileContract,
      problem: "No standardized pricing across units and properties",
      consequence: "Without a consistent bid structure, every work order becomes a fresh negotiation — hard to budget, hard to compare, hard to plan capital expenditures around.",
    },
    {
      icon: faUsers,
      problem: "Unreliable response times on tenant improvement requests",
      consequence: "Commercial tenants expect build-outs to move fast once a lease is signed. A slow contractor response can cost you the lease itself.",
    },
    {
      icon: faClipboardList,
      problem: "No documentation trail for capital improvements",
      consequence: "Owners and investors want clear records of what was done, when, and for how much — verbal work orders don't hold up at audit or resale time.",
    },
    {
      icon: faShieldHalved,
      problem: "Working with unlicensed or uninsured trades on your properties",
      consequence: "An uninsured sub injured on your property is a liability exposure you don't want. Property managers need every contractor and sub properly licensed and covered.",
    },
  ];

  const whyFeatures = [
    {
      icon: faClock,
      title: "Fast Turnaround on Unit Turnovers",
      description: "We treat vacant-unit renovations as time-sensitive by default — clear scope, fast scheduling, and a crew that shows up when we say it will.",
    },
    {
      icon: faFileContract,
      title: "Standardized, Portfolio-Wide Pricing",
      description: "One consistent bid structure across every property in your portfolio, so budgeting and capital planning don't start from scratch on every work order.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed, Bonded Crews — Every Property",
      description: "General liability insurance, a contractor surety bond, and AGC membership on every job, protecting you and your ownership group from liability exposure.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Walkthrough & Standing Bid", description: "We walk your properties and establish standardized pricing for common scopes — unit turnovers, common-area updates, tenant improvements — so future work orders move fast.", icon: faSearch },
    { number: 2, title: "Work Order & Scheduling",              description: "Submit a work order for any property; we confirm scope and schedule against your vacancy or lease timeline.",                                                              icon: faClipboardList },
    { number: 3, title: "Construction & Progress Updates",      description: "Our crew executes the scope with regular updates, so you always know exactly where a unit or build-out stands.",                                                                     icon: faChartLine },
    { number: 4, title: "Documented Handoff",                   description: "Every completed job comes with photo documentation and a written summary — a clean record for owners, investors, and future resale.",                                                icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Projects completed across Central Texas",     suffix: "+", duration: 3 },
    { icon: faClock,     value: 14,  label: "Years of local general contracting experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,  label: "Projects delivered on or ahead of schedule",   suffix: "%", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Standardized portfolio-wide pricing",   us: "✅ One bid structure, every property",       others: "❌ Negotiate every work order" },
    { feature: "Turnover renovation speed",             us: "✅ Vacancy-timeline priority scheduling",     others: "❌ First-come, first-served" },
    { feature: "Licensed & bonded on every job",        us: "✅ Yes, always",                              others: "Sometimes" },
    { feature: "Documented handoff for owners",         us: "✅ Photos + written summary",                 others: "❌ Verbal only" },
    { feature: "Single contractor across your portfolio", us: "✅ One relationship, every property",       others: "❌ Different contractor per building" },
  ];

  const faq = [
    {
      question: "Do you work across multiple properties in a portfolio?",
      answer: "Yes — most of our property management clients use us across their entire portfolio for consistency in pricing, quality, and scheduling.",
    },
    {
      question: "How fast can you turn over a vacant unit?",
      answer: "Timeline depends on scope, but we prioritize vacant-unit renovations against your leasing timeline and communicate a firm schedule up front — not a vague estimate.",
    },
    {
      question: "Can you handle tenant improvement build-outs for commercial leases?",
      answer: "Yes — we build out commercial tenant spaces to lease specifications, coordinated against your lease commencement date.",
    },
    {
      question: "Do you provide documentation for capital improvements?",
      answer: "Yes — every completed job includes photo documentation and a written summary for your ownership group's records.",
    },
    {
      question: "Are your crews licensed and insured to work on our properties?",
      answer: "Yes — Bedrock is a licensed and bonded general contractor and AGC member, and every subcontractor we use is vetted and properly licensed and insured.",
    },
  ];

  const localAreas = [
    { town: "Waco",     benefit: "Home base — fastest response for Waco-area properties.",              highlight: "Headquarters" },
    { town: "Temple",   benefit: "Regular coverage for Bell County rental and commercial properties.",  highlight: "" },
    { town: "Killeen",  benefit: "High-turnover rental market near Fort Cavazos.",                       highlight: "" },
    { town: "Hewitt",   benefit: "Full coverage for Hewitt residential and commercial properties.",     highlight: "" },
    { town: "Woodway",  benefit: "Premium residential and commercial property portfolios.",              highlight: "" },
    { town: "Bellmead", benefit: "Full coverage for Bellmead multi-family and commercial properties.",  highlight: "" },
  ];

  const services = [
    { icon: faBath,          title: "Kitchen & Bath Renovation",                 body: "Fast, standardized unit-turnover renovations — kitchens and bathrooms refreshed between tenants.", link: "/services/kitchen-bath-renovation" },
    { icon: faBuilding,      title: "Commercial Construction",                   body: "Tenant improvement build-outs coordinated to your lease commencement date.",                          link: "/services/commercial-construction" },
    { icon: faHammer,        title: "Home Additions & Remodels",                 body: "Common-area updates and unit renovations across your residential portfolio.",                         link: "/services/home-additions-remodels" },
    { icon: faClipboardList, title: "General Contracting / Project Management",  body: "One contractor managing work orders across your entire property portfolio.",                          link: "/services/general-contracting" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management Firms" },
      ]} />

      <SectionIntro
        title="General Contracting for Property Management Firms"
        subtitle="Tenant improvements, unit turnovers, and ongoing renovation work across your whole portfolio — one licensed contractor who shows up when you call."
      />

      <TrustBar headline="Trusted by property management firms across Central Texas for fast, reliable turnovers" />

      <IndustryPainPoints
        industry="property management"
        painPoints={painPoints}
        ctaText="Get Portfolio Pricing"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="property management firms"
          features={whyFeatures}
          title="What Makes Bedrock Different for Property Managers"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your portfolio" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas property managers" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Built for Turnovers, Tenant Improvements & Portfolio Work"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="industries/property-management-firms"
          title="Serving Property Portfolios Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="property management firms" faq={faq} title="Property Manager FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Contractor Who Knows Your Whole Portfolio?"
        subline="Standardized pricing, fast turnovers, and licensed & bonded crews across every property you manage."
        primaryText="Get Portfolio Pricing"
        primaryLink="/contact"
        secondaryText="Call (254) 720-8100"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Portfolio"
          cityName="Waco"
          slug="industries/property-management-firms"
          spot="property-management-firms-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
