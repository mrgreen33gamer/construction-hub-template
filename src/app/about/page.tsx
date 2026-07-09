// Bedrock Construction Group — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faFileContract,
  faHandshake,
  faClipboardCheck,
  faPeopleGroup,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2012",
      description: "Bedrock Construction Group was founded in Waco. We're not a franchise — every bid, every schedule decision, and every project manager assignment is made locally, by people who live here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust On Your Property",
      description: "Every subcontractor on our network is vetted and license-checked, and every project is overseen by a Bedrock project manager. We treat every jobsite with the same care we'd want on our own property — fenced, clean, no mess left behind.",
    },
    {
      icon: faFileContract,
      title: "Honest From the First Bid",
      description: "We won't pad a scope to inflate the price, and we won't lowball a bid to win the job and hit you with change orders later. Our reputation is built on written, itemized bids — and 180+ completed projects prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 180,  label: "Projects completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Client satisfaction rate",                 suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years serving Central Texas families",     suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "We Listen First",              description: "Every project starts with a site visit and a real conversation about scope, budget, and timeline — before we talk numbers.", icon: faHandshake },
    { number: 2, title: "We Bid It in Writing",          description: "An itemized, written bid you can actually read — materials, labor, and timeline laid out line by line, not a vague range.", icon: faClipboardCheck },
    { number: 3, title: "We Manage Every Trade",         description: "Our project managers vet and coordinate every subcontractor on the job, so you have one point of contact from permit to punch list.", icon: faPeopleGroup },
    { number: 4, title: "We Stand Behind the Work",      description: "Every completed project is backed by a 2-year workmanship warranty — because the job isn't done until you're satisfied.", icon: faAward },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Bedrock Construction Group"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2012. We do honest general contracting at fair, written prices for the families and businesses we've called neighbors for over a decade."
      />

      <TrustBar headline="180+ Central Texas projects completed — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="14 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's General Contractor — Ready When You Are"
        subline="Free on-site estimates. Written, itemized bids. 2-year workmanship warranty. Licensed & bonded."
        primaryText="Call Us Now"
        primaryLink="tel:+12547208100"
        secondaryText="Request an Estimate Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
