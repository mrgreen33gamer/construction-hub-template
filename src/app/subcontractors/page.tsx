// src/app/subcontractors/page.tsx
"use client";

import styles from './page.module.scss';

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import InsuredBadge from "#/PageComponents/InsuredBadge/InsuredBadge";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";

import {
  faFileContract, faUserShield, faMagnifyingGlassChart,
  faClipboardCheck, faHandshakeSimple, faUserGear, faStamp,
} from "@fortawesome/free-solid-svg-icons";

export default function SubcontractorsPage() {

  const whyFeatures = [
    {
      icon: faFileContract,
      title: "License & Insurance Verification",
      description: "Every subcontractor must show current licensing (where applicable), general liability insurance, and workers' comp before they're cleared for a Bedrock jobsite — no exceptions, no expired paperwork.",
    },
    {
      icon: faMagnifyingGlassChart,
      title: "Background & Reference Checks",
      description: "We check work history and call references before any subcontractor joins our network. You're never the first job a crew has ever shown up to.",
    },
    {
      icon: faClipboardCheck,
      title: "On-Site Quality Audits",
      description: "Our project managers inspect subcontractor work at every phase — not just the final walkthrough. Problems get caught and corrected before they're covered up by the next trade.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Vetting & Onboarding",
      description: "License, insurance, and reference checks completed before a subcontractor ever joins our approved network.",
      icon: faUserShield,
    },
    {
      number: 2,
      title: "Scheduled to the Project Timeline",
      description: "Every trade is scheduled against the master project plan by a Bedrock project manager — subs don't self-coordinate around your property.",
      icon: faHandshakeSimple,
    },
    {
      number: 3,
      title: "On-Site Supervision",
      description: "A Bedrock project manager is on site through every trade's work, not just checking in after the fact.",
      icon: faUserGear,
    },
    {
      number: 4,
      title: "Final Inspection & Sign-Off",
      description: "Work is inspected against the original bid before any payment releases — and before it's called done.",
      icon: faStamp,
    },
  ];

  const faq = [
    {
      question: "Do you use subcontractors, or does Bedrock do all the work in-house?",
      answer: "We use a managed network of vetted, licensed subcontractors for specialty trades — electrical, plumbing, HVAC, and more — while Bedrock's own project managers oversee every job from bid to final walkthrough. You always have one point of contact, regardless of how many trades are on site.",
    },
    {
      question: "How do you vet subcontractors before they work on my property?",
      answer: "Every subcontractor in our network is checked for current licensing (where applicable), general liability insurance, and workers' comp, plus a review of past work and references. We don't bring in a crew we haven't already screened.",
    },
    {
      question: "Who's responsible if a subcontractor's work isn't right?",
      answer: "Bedrock is. As general contractor, we manage and stand behind every trade on the project — including the 2-year workmanship warranty. You don't have to chase down individual subs to get something fixed.",
    },
    {
      question: "Will the same subcontractors be on site the whole project?",
      answer: "Different trades are scheduled in at the right phase of the build — framers, electricians, plumbers, and finish crews don't all show up on day one. Your project manager keeps you informed of who's on site and when.",
    },
    {
      question: "Is my business or property insured against subcontractor accidents?",
      answer: "Every subcontractor in our network must carry their own general liability and workers' comp coverage, in addition to Bedrock's own general liability insurance and contractor bond. Proof of coverage is available on request.",
    },
    {
      question: "I run a subcontracting business — how do I get considered for your network?",
      answer: "Reach out through our contact page with your trade, license/insurance information, and references. We review new subcontractor relationships on an ongoing basis as project volume requires.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Subcontractors"
        subtitle="We vet, license-check, and manage a trusted network of Central Texas subcontractors so every trade on your project meets the same standard we hold ourselves to."
      />

      <TrustBar
        headline="Every subcontractor on a Bedrock jobsite is licensed, insured, and held to our standard"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="How We Vet Every Subcontractor"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <InsuredBadge variant="section" ctaLink="/contact" />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Subcontractor Questions — Answered Straight"
        />
      </div>

      <CTABanner
        headline="Questions About Who's Working On Your Project?"
        subline="Talk to a Bedrock project manager — every trade on your job is vetted, licensed, and managed under one contract."
        primaryText="Call (254) 720-8100"
        primaryLink="tel:+12547208100"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
