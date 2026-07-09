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
  faClock, faFileContract, faUsers, faBuilding, faClipboardList, faChartLine,
  faSearch, faCheckCircle, faTrophy, faHouseChimney, faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons";

export default function RealEstateDevelopersIndustryPage() {

  const painPoints = [
    {
      icon: faClock,
      problem: "Missed schedules blow your construction loan draw timeline",
      consequence: "Every week a build runs late is a week of carrying costs and interest you didn't budget for. Lenders don't extend draw schedules because a contractor fell behind.",
    },
    {
      icon: faFileContract,
      problem: "Vague verbal bids turn into change-order surprises mid-build",
      consequence: "A developer needs a number they can take to a lender, not a range that grows once the foundation is poured. Scope creep on a spec home erodes your margin fast.",
    },
    {
      icon: faUsers,
      problem: "Unreliable subcontractor scheduling stalls the whole project",
      consequence: "One no-show framing crew can push every trade behind it by weeks. Developers need a general contractor who owns subcontractor accountability, not just a list of phone numbers.",
    },
    {
      icon: faBuilding,
      problem: "No single point of contact across design, permitting, and construction",
      consequence: "Coordinating an architect, a permitting office, and a contractor separately means nobody owns the schedule end to end — and delays get blamed on whoever isn't in the room.",
    },
    {
      icon: faClipboardList,
      problem: "Punch lists and inspections dragging out your certificate of occupancy",
      consequence: "A slow final walkthrough process delays your closing or lease-up date directly — every day without a CO is a day the asset isn't earning.",
    },
    {
      icon: faChartLine,
      problem: "Budget overruns with no visibility until it's too late",
      consequence: "Without transparent, itemized bids and regular progress reporting, developers find out about cost overruns only when the final invoice lands.",
    },
  ];

  const whyFeatures = [
    {
      icon: faFileContract,
      title: "Written, Itemized Bids Your Lender Can Trust",
      description: "Every bid is broken down by line item — materials, labor, and schedule — so you can take it straight to your lender or investors without a discovery-driven change order six weeks in.",
    },
    {
      icon: faClock,
      title: "Schedules Built Around Your Draw Timeline",
      description: "We build the construction schedule around your financing milestones, not the other way around, and report progress against it weekly so you always know where the project stands.",
    },
    {
      icon: faUsers,
      title: "One Accountable Team, Start to Finish",
      description: "Bedrock manages every subcontractor and trade under one contract. When something needs to move faster, there's one project manager accountable for making it happen — not five phone numbers to chase.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Bid & Pre-Construction Planning", description: "We review your plans, site conditions, and financing timeline, then deliver a written, itemized bid and a construction schedule built to your draw schedule.", icon: faSearch },
    { number: 2, title: "Permitting & Subcontractor Lock-In", description: "We pull permits and lock in a vetted subcontractor crew for every trade before breaking ground — no scrambling for framers mid-project.", icon: faClipboardList },
    { number: 3, title: "Construction & Weekly Progress Reporting", description: "Your project manager reports progress against the schedule weekly, so you always have current numbers for lenders, investors, or partners.", icon: faChartLine },
    { number: 4, title: "Punch List, Inspection & Handoff", description: "We drive the final walkthrough and inspection process aggressively — your certificate of occupancy is the finish line, and we treat it that way.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180, label: "Projects completed across Central Texas",     suffix: "+", duration: 3 },
    { icon: faClock,     value: 14,  label: "Years of local general contracting experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,  label: "Projects delivered on or ahead of schedule",   suffix: "%", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Written, itemized bids",              us: "✅ Lender-ready, line-item detail",         others: "❌ Verbal ranges, discovery surprises" },
    { feature: "Schedule built to your draw timeline", us: "✅ Reported weekly",                        others: "❌ Best-effort, no reporting" },
    { feature: "Subcontractor accountability",         us: "✅ Vetted crew, managed by us",              others: "❌ You chase the subs yourself" },
    { feature: "Single point of contact",              us: "✅ One project manager, start to finish",   others: "❌ Architect, GC, and subs coordinate separately" },
    { feature: "Licensed, bonded, AGC member",         us: "✅ Yes",                                    others: "Sometimes" },
  ];

  const faq = [
    {
      question: "Can you deliver a written bid our lender will accept?",
      answer: "Yes — every Bedrock bid is itemized by line item (materials, labor, schedule) specifically so it holds up for construction loan underwriting and draw requests.",
    },
    {
      question: "Do you build to a construction loan draw schedule?",
      answer: "Yes — we build the project schedule around your draw milestones and report progress weekly so your numbers stay current for the lender.",
    },
    {
      question: "Do you handle spec homes and multi-unit projects, or only custom builds?",
      answer: "Both. We build ground-up custom homes, spec homes for resale, and small multi-unit projects for developers across Central Texas.",
    },
    {
      question: "Who manages the subcontractors on our project?",
      answer: "We do. Bedrock vets, schedules, and manages every subcontractor trade under one contract — you have a single project manager accountable for the whole build.",
    },
    {
      question: "Are you licensed, bonded, and insured for developer-scale projects?",
      answer: "Yes — Bedrock is a licensed and bonded general contractor and a member of the Associated General Contractors of America (AGC), with general liability insurance and a contractor surety bond on every project.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest turnaround for ground-up and spec builds.", highlight: "Headquarters" },
    { town: "Temple",       benefit: "Active new-construction market in Bell County.",                highlight: "" },
    { town: "Killeen",      benefit: "Steady development activity near Fort Cavazos.",                highlight: "" },
    { town: "Hewitt",       benefit: "Growing residential development corridor.",                     highlight: "" },
    { town: "Woodway",      benefit: "Premium residential development and custom builds.",             highlight: "" },
    { town: "China Spring", benefit: "Rural and acreage development sites.",                           highlight: "" },
  ];

  const services = [
    { icon: faHouseChimney,    title: "New Home Construction",                        body: "Ground-up custom and spec builds delivered on a schedule that protects your financing timeline.", link: "/services/new-home-construction" },
    { icon: faBuilding,        title: "Commercial Construction",                      body: "New builds and multi-unit projects for developers, delivered with lender-ready reporting.",       link: "/services/commercial-construction" },
    { icon: faDraftingCompass, title: "Design-Build Services",                        body: "One contract, one team, from design through certificate of occupancy.",                            link: "/services/design-build-services" },
    { icon: faClipboardList,   title: "General Contracting / Project Management",     body: "Full subcontractor management and schedule accountability for owner-designed developments.",       link: "/services/general-contracting" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Real Estate Developers" },
      ]} />

      <SectionIntro
        title="General Contracting for Real Estate Developers"
        subtitle="Ground-up builds and spec homes delivered on a schedule that protects your financing timeline — one accountable general contractor, from permit to certificate of occupancy."
      />

      <TrustBar headline="Trusted by real estate developers across Central Texas for on-schedule, on-budget delivery" />

      <IndustryPainPoints
        industry="real estate development"
        painPoints={painPoints}
        ctaText="Get a Lender-Ready Bid"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="real estate developers"
          features={whyFeatures}
          title="What Makes Bedrock Different for Developers"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your development" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas developers" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Built for Ground-Up and Multi-Unit Development"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="industries/real-estate-developers"
          title="Serving Developers Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="real estate developers" faq={faq} title="Developer FAQs" />
      </div>

      <CTABanner
        headline="Ready to Break Ground on Your Next Development?"
        subline="Written, lender-ready bids and schedules built around your draw timeline. Licensed, bonded, AGC member general contractor serving Central Texas developers."
        primaryText="Get a Lender-Ready Bid"
        primaryLink="/contact"
        secondaryText="Call (254) 720-8100"
        secondaryLink="tel:+12547208100"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Development Project"
          cityName="Waco"
          slug="industries/real-estate-developers"
          spot="real-estate-developers-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
