// Bedrock Construction Group — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHouseChimney, faHammer, faBath, faBuilding, faDraftingCompass, faClipboardList,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers, faFileContract,
  faHeadset, faSearch, faCheckCircle,
  faFileAlt, faRotateLeft, faLock, faStar, faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      icon: faHouseChimney,
      title: "New Home Construction",
      body: "Custom and spec-built homes from foundation to final walkthrough. Right-sized scope, real timelines, no surprises.",
      link: "/services/new-home-construction",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHammer,
      title: "Home Additions & Remodels",
      body: "Add square footage or reimagine what you already have — structural additions, whole-home remodels, done to match your existing build.",
      link: "/services/home-additions-remodels",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faBath,
      title: "Kitchen & Bath Renovation",
      body: "Full gut renovations or targeted updates. Licensed trades on every job — plumbing, electrical, and finish carpentry under one contract.",
      link: "/services/kitchen-bath-renovation",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Construction",
      body: "New builds and tenant improvements for retail, office, and light industrial space. Managed to your business's timeline, not ours.",
      link: "/services/commercial-construction",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faDraftingCompass,
      title: "Design-Build Services",
      body: "Design and construction under a single contract and a single point of contact — faster decisions, fewer handoffs, one team accountable end to end.",
      link: "/services/design-build-services",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faClipboardList,
      title: "General Contracting / Project Management",
      body: "Full project oversight for owner-designed builds — permitting, scheduling, and a managed subcontractor crew for every trade.",
      link: "/services/general-contracting",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  // ── Impact metrics (moved up — builds trust before selling) ─────────────────
  const metrics = [
    { icon: faTrophy,    value: 180,  label: "Projects completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 14,   label: "Years of local contracting experience",   suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Client satisfaction rating",              suffix: "%", duration: 2 },
  ];

  // ── Why Choose Us (3 differentiators) ───────────────────────────────────────
  const whyFeatures = [
    {
      icon: faFileContract,
      title: "Written, Itemized Bids",
      description: "No verbal estimates and no vague scope. Every project starts with a detailed, written bid — the price you sign is the price you pay, barring approved changes.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed, Bonded & AGC Member",
      description: "Every project is backed by general liability insurance, a contractor surety bond, and our membership in the Associated General Contractors of America. No unlicensed subs, no shortcuts.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2012",
      description: "We're not a franchise. Bedrock was founded in Waco, and every decision — from bid to final walkthrough — is made locally by people who live here.",
    },
  ];

  // ── How it works (process) ───────────────────────────────────────────────────
  const processSteps = [
    {
      number: 1,
      title: "Call or Request a Quote",
      description: "Phone, text, or the form below — your choice. We'll schedule a site visit or consultation that fits your timeline.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess & Scope the Project",
      description: "Our project manager walks the site, reviews your goals, and defines the exact scope — explained in plain English, not contractor jargon.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Written, Itemized Bid",
      description: "Detailed price before we break ground. You decide — zero pressure to proceed. The bid covers materials and labor and doesn't shift mid-project.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Built Right, Warrantied",
      description: "Quality materials, a managed subcontractor crew, and a 2-year workmanship warranty on every completed project. We finish when it's done right — not when we feel like it.",
      icon: faCheckCircle,
    },
  ];

  // ── What to expect (moved lower — reinforces process detail after trust built) ─
  const expectations = [
    {
      icon: faSearch,
      title: "Honest Project Assessment",
      description: "We scope what's actually needed — not what's most profitable to sell. You see the full plan before we recommend anything.",
    },
    {
      icon: faHardHat,
      title: "Clean, Respectful Jobsites",
      description: "Site fencing, daily cleanup, neighbors and property protected. Every single project, residential or commercial.",
    },
    {
      icon: faCheckCircle,
      title: "Written, Itemized Bid",
      description: "Detailed bid before any work starts. The number doesn't shift when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Materials & Craftsmanship",
      description: "We use trade-quality materials on every project, backed by the full 2-year workmanship warranty. No cut corners.",
    },
  ];

  // ── Service areas ────────────────────────────────────────────────────────────
  const localAreas = [
    { town: "Waco",         benefit: "Home base — our project managers and crews are on-site fastest here.",     badge: "Home Base" },
    { town: "Temple",       benefit: "Full coverage for residential and commercial builds in Temple.",           badge: "" },
    { town: "Killeen",      benefit: "Regular coverage for new construction and remodels near Fort Cavazos.",    badge: "" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",          badge: "" },
    { town: "Woodway",      benefit: "Custom builds and renovations for Woodway homes and businesses.",          badge: "" },
    { town: "McGregor",     benefit: "Rural and in-town coverage for McGregor projects.",                        badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",          badge: "" },
    { town: "Bellmead",     benefit: "Full coverage for Bellmead residential and commercial projects.",          badge: "" },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  const faq = [
    {
      question: "How much does a home addition or renovation cost in Waco?",
      answer: "Most additions run $150–$300 per square foot depending on scope and finishes. Kitchen and bath renovations typically range $15,000–$80,000. We always provide a written, itemized bid before any work begins — no verbal estimates.",
    },
    {
      question: "Do you handle both design and construction?",
      answer: "Yes — our design-build service manages your project from concept through completion under one contract and one point of contact, so decisions move faster and nothing gets lost between handoffs.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Timeline depends on scope, permitting, and season. After your free on-site estimate we'll give you an honest start date and project schedule — not a vague 'a few weeks.'",
    },
    {
      question: "Do you use subcontractors?",
      answer: "Yes — we vet, license-check, and manage a trusted network of subcontractors for every trade. Our project managers oversee quality and schedule from start to finish.",
    },
    {
      question: "Are you licensed and bonded in Texas?",
      answer: "Yes — Bedrock Construction Group is a licensed and bonded general contractor and a member of the Associated General Contractors of America (AGC). Proof of license and insurance is available on request.",
    },
    {
      question: "Do you offer a warranty on completed work?",
      answer: "Yes — every completed project is backed by a 2-year workmanship warranty covering labor and construction defects.",
    },
  ];

  // ── TrustBar badges (construction-specific) ─────────────────────────────────
  const trustBadges = [
    { icon: faStar,          label: "4.8 Google Rating",     sub: "350+ Reviews" },
    { icon: faShieldHalved,  label: "Licensed & Bonded",      sub: "General Contractor" },
    { icon: faTrophy,        label: "AGC Member",             sub: "Associated General Contractors" },
    { icon: faClock,         label: "On-Time Delivery",       sub: "Real Project Schedules" },
    { icon: faHardHat,       label: "Free Estimates",         sub: "On-Site Consultations" },
    { icon: faFileAlt,       label: "Written, Itemized Bids", sub: "No Surprises" },
    { icon: faRotateLeft,    label: "2-Year Warranty",        sub: "Workmanship Guarantee" },
    { icon: faLock,          label: "Managed Subcontractors", sub: "Vetted & Licensed" },
    { icon: faFileContract,  label: "180+ Projects",          sub: "Completed" },
    { icon: faUsers,         label: "Locally Owned",          sub: "Since 2012" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted general contractor — licensed, bonded, and warrantied on every job"
      />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Construction Services for Your Project"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes Bedrock Different"
        />
      </div>
      <CTABanner
        headline="Builds Managed Like a Pro."
        subline="Remodels and light commercial construction with clear phases, schedules, and one accountable PM."
        primaryText="Call (254) 720-8100"
        primaryLink="tel:+12547208100"
        secondaryText="Start Project Consult"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Project, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Construction Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request a Free Estimate"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
