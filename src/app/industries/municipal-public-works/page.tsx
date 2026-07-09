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
  faFileContract, faShieldHalved, faUsers, faClock, faClipboardList, faBuilding,
  faSearch, faChartLine, faCheckCircle, faTrophy, faDraftingCompass, faBath,
} from "@fortawesome/free-solid-svg-icons";

export default function MunicipalPublicWorksIndustryPage() {

  const painPoints = [
    {
      icon: faFileContract,
      problem: "Contractors unfamiliar with the public bid process",
      consequence: "Public procurement has its own paperwork, timelines, and compliance requirements. A contractor who's never bid public work slows down your procurement office and risks disqualification.",
    },
    {
      icon: faShieldHalved,
      problem: "Bonding and insurance requirements not met",
      consequence: "Public projects require performance and payment bonds most residential contractors can't provide. Missing bonding capacity eliminates a contractor before the bid is even reviewed.",
    },
    {
      icon: faUsers,
      problem: "Prevailing wage compliance gaps",
      consequence: "Public works projects often require prevailing wage documentation. A contractor without a system for this creates audit risk for your agency, not just theirs.",
    },
    {
      icon: faClock,
      problem: "Public facility downtime disrupts services residents depend on",
      consequence: "A library, fire station, or municipal building under renovation still needs to function for the public. Poor phasing extends disruption longer than necessary.",
    },
    {
      icon: faClipboardList,
      problem: "Inadequate documentation for public records and audits",
      consequence: "Public spending requires a paper trail — change orders, inspections, and payment applications all need to hold up to public records requests and audits.",
    },
    {
      icon: faBuilding,
      problem: "Limited experience with ADA and public building code requirements",
      consequence: "Public facilities carry accessibility and code requirements beyond typical commercial work. Getting this wrong means costly rework and delayed occupancy.",
    },
  ];

  const whyFeatures = [
    {
      icon: faFileContract,
      title: "Public Bid Process Experience",
      description: "We understand public procurement — bid packages, pre-qualification, and the documentation your procurement office needs, submitted complete and on time.",
    },
    {
      icon: faShieldHalved,
      title: "Bonded for Public Project Requirements",
      description: "Bedrock carries the performance and payment bonding capacity required for public works, along with general liability insurance and AGC membership.",
    },
    {
      icon: faClipboardList,
      title: "Full Documentation & Compliance Trail",
      description: "Every change order, inspection, and payment application is documented to hold up under public records requests and agency audits.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Bid Package & Pre-Qualification", description: "We submit complete, compliant bid packages — bonding, insurance, and licensing documentation included — so your procurement process moves without delay.", icon: faFileContract },
    { number: 2, title: "Phased Construction Planning",    description: "For occupied public facilities, we build a phasing plan that keeps essential services running while work proceeds.",                                             icon: faSearch },
    { number: 3, title: "Construction & Compliance Reporting", description: "Regular progress reporting and documentation that satisfies both your project managers and public accountability requirements.",                             icon: faChartLine },
    { number: 4, title: "Inspection, Handoff & Records",   description: "A complete project record — inspections, change orders, and payment applications — delivered at closeout for your agency's files.",                                icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Projects completed across Central Texas",     suffix: "+", duration: 3 },
    { icon: faClock,     value: 14,  label: "Years of local general contracting experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,  label: "Projects delivered on or ahead of schedule",   suffix: "%", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Public bid process experience",              us: "✅ Bid packages submitted regularly", others: "❌ Residential-only experience" },
    { feature: "Performance & payment bonding",               us: "✅ Full bonding capacity",           others: "❌ Often can't meet requirement" },
    { feature: "Prevailing wage documentation",                us: "✅ Documented compliance",           others: "❌ Ad hoc or unavailable" },
    { feature: "Phased construction for occupied facilities", us: "✅ Standard practice",               others: "❌ Full closure required" },
    { feature: "Licensed, bonded, AGC member",                us: "✅ Yes",                             others: "Sometimes" },
  ];

  const faq = [
    {
      question: "Have you completed public sector or municipal projects before?",
      answer: "Yes — Bedrock has the bonding capacity, insurance, and documentation practices required for public works bidding and delivery.",
    },
    {
      question: "Can you provide performance and payment bonds?",
      answer: "Yes — we carry the bonding capacity required for public project bidding, in addition to our general liability insurance and AGC membership.",
    },
    {
      question: "Can you work on occupied public buildings without shutting them down?",
      answer: "In most cases, yes — we build a phased construction plan so essential public services keep running while renovation work proceeds.",
    },
    {
      question: "Do you handle prevailing wage documentation?",
      answer: "Yes — we document labor compliance for projects that require prevailing wage reporting.",
    },
    {
      question: "What kind of records do you provide at project closeout?",
      answer: "A complete project file — change orders, inspection records, and payment applications — ready for your agency's records and any audit requirements.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — familiar with City of Waco permitting and procurement.", highlight: "Headquarters" },
    { town: "Temple",       benefit: "Bell County municipal and public facility projects.",                 highlight: "" },
    { town: "Killeen",      benefit: "Public facility work near Fort Cavazos and Bell County.",             highlight: "" },
    { town: "Hewitt",       benefit: "Municipal and public works coverage for Hewitt.",                     highlight: "" },
    { town: "Woodway",      benefit: "Public facility construction and renovation coverage.",               highlight: "" },
    { town: "China Spring", benefit: "Rural municipal and public works project coverage.",                  highlight: "" },
  ];

  const services = [
    { icon: faBuilding,        title: "Commercial Construction",                     body: "New construction and renovation for public and municipal facilities.",                             link: "/services/commercial-construction" },
    { icon: faClipboardList,   title: "General Contracting / Project Management",    body: "Full project oversight and compliance documentation for public bid projects.",                     link: "/services/general-contracting" },
    { icon: faDraftingCompass, title: "Design-Build Services",                       body: "One contract, one team, for public facility design and construction.",                              link: "/services/design-build-services" },
    { icon: faBath,            title: "Kitchen & Bath Renovation",                   body: "Break room, restroom, and interior facility renovations for public buildings.",                     link: "/services/kitchen-bath-renovation" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Municipal & Public Works" },
      ]} />

      <SectionIntro
        title="General Contracting for Municipal & Public Works"
        subtitle="Public facility construction and renovation from a general contractor who understands bonding requirements, the public bid process, and prevailing wage compliance."
      />

      <TrustBar headline="Trusted by municipal and public agencies across Central Texas for compliant, on-schedule delivery" />

      <IndustryPainPoints
        industry="municipal and public works"
        painPoints={painPoints}
        ctaText="Discuss Your RFP"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="municipal and public agencies"
          features={whyFeatures}
          title="What Makes Bedrock Different for Public Projects"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your public project" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas public agencies" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Built for Public Facility Construction & Renovation"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="industries/municipal-public-works"
          title="Serving Public Agencies Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="municipal and public agencies" faq={faq} title="Public Works FAQs" />
      </div>

      <CTABanner
        headline="Ready to Discuss Your Public Works Project?"
        subline="Bonded, insured, and experienced with public bid requirements. Licensed & bonded general contractor serving Central Texas municipalities and public agencies."
        primaryText="Discuss Your RFP"
        primaryLink="/contact"
        secondaryText="Call (254) 720-8100"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Public Works Project"
          cityName="Waco"
          slug="industries/municipal-public-works"
          spot="municipal-public-works-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
