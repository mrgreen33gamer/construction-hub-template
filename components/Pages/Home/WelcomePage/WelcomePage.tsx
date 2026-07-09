// Construction Hub Hero — Site Plan + Phasing Board
// Self-drawing construction site plan (foundation, crane, framing) — not a house wireframe.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function ConstructionSitePlan({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));
    paths.forEach((el, i) => {
      const length = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 400;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `blueprintDraw 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      el.style.animationDelay = `${0.2 + i * 0.05}s`;
      // Safety: always reveal lines even if keyframes fail
      window.setTimeout(() => {
        el.style.strokeDashoffset = '0';
      }, 2200 + i * 50);
    });
  }, []);

  return (
    <div className={styles.schematicWrap} role="img" aria-label={label}>
      <div className={styles.schematicGrid} aria-hidden="true" />
      <div className={styles.planBadge} aria-hidden="true">
        PHASE 02 · FRAMING
      </div>
      <svg
        ref={svgRef}
        className={styles.schematic}
        viewBox="0 0 380 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Site boundary */}
        <rect data-draw x="18" y="28" width="344" height="290" rx="3" className={styles.traceDim} />

        {/* Foundation slab */}
        <rect data-draw x="48" y="170" width="200" height="110" className={styles.traceMain} />
        <line data-draw x1="48" y1="200" x2="248" y2="200" className={styles.traceDim} />
        <line data-draw x1="48" y1="230" x2="248" y2="230" className={styles.traceDim} />
        <line data-draw x1="98" y1="170" x2="98" y2="280" className={styles.traceDim} />
        <line data-draw x1="148" y1="170" x2="148" y2="280" className={styles.traceDim} />
        <line data-draw x1="198" y1="170" x2="198" y2="280" className={styles.traceDim} />

        {/* Framing studs / walls */}
        <path
          data-draw
          d="M60 170 L60 95 L148 55 L236 95 L236 170"
          className={styles.traceMain}
        />
        <line data-draw x1="104" y1="75" x2="104" y2="170" className={styles.traceDim} />
        <line data-draw x1="148" y1="55" x2="148" y2="170" className={styles.traceAccent} />
        <line data-draw x1="192" y1="75" x2="192" y2="170" className={styles.traceDim} />

        {/* Roof ridge / truss hint */}
        <path data-draw d="M60 95 L148 40 L236 95" className={styles.traceAccent} />
        <line data-draw x1="100" y1="72" x2="148" y2="95" className={styles.traceDim} />
        <line data-draw x1="196" y1="72" x2="148" y2="95" className={styles.traceDim} />

        {/* Tower crane */}
        <line data-draw x1="300" y1="280" x2="300" y2="48" className={styles.traceMain} />
        <line data-draw x1="300" y1="48" x2="340" y2="48" className={styles.traceAccent} />
        <line data-draw x1="300" y1="48" x2="250" y2="58" className={styles.traceMain} />
        <line data-draw x1="250" y1="58" x2="250" y2="95" className={styles.traceAccent} />
        <rect data-draw x="242" y="95" width="16" height="12" className={styles.traceAccent} />
        <line data-draw x1="285" y1="280" x2="315" y2="280" className={styles.traceDim} />
        <line data-draw x1="290" y1="290" x2="310" y2="290" className={styles.traceDim} />

        {/* Material staging piles */}
        <path data-draw d="M270 250 L285 220 L300 250 Z" className={styles.traceAccent} />
        <path data-draw d="M310 255 L325 230 L340 255 Z" className={styles.traceDim} />

        {/* Access road */}
        <path
          data-draw
          d="M18 300 Q90 290 148 300 T248 295 L360 300"
          className={styles.traceAccent}
        />

        {/* Dimension callouts */}
        <line data-draw x1="48" y1="295" x2="248" y2="295" className={styles.traceDim} />
        <line data-draw x1="48" y1="290" x2="48" y2="300" className={styles.traceDim} />
        <line data-draw x1="248" y1="290" x2="248" y2="300" className={styles.traceDim} />

        {/* Solid nodes (always visible) */}
        <circle cx="148" cy="40" r="4" className={styles.nodeAccent} />
        <circle cx="300" cy="48" r="4" className={styles.nodeAccent} />
        <circle cx="250" cy="101" r="3.5" className={styles.node} />
        <circle cx="60" cy="170" r="3" className={styles.node} />
        <circle cx="236" cy="170" r="3" className={styles.node} />
      </svg>
      <div className={styles.schematicCaption} aria-hidden="true">
        <span className={styles.captionDot} />
        SITE PLAN · LIVE
      </div>
      <div className={styles.phaseChips} aria-hidden="true">
        <span className={styles.phaseDone}>Demo</span>
        <span className={styles.phaseDone}>Foundation</span>
        <span className={styles.phaseActive}>Framing</span>
        <span className={styles.phaseTodo}>Finish</span>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted General Contractor — Since 2012";
  const headlineLines = ['Design It.', 'Build It.'];
  const headlineAccent = 'Bedrock.';
  const subheadline =
    'Written, itemized bids. Real timelines. A 2-year workmanship warranty on every project. Serving Waco and Central Texas with a licensed, bonded general contracting team.';
  const primaryCta = { label: 'Call (254) 720-8100', href: 'tel:+12547208100' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = ['Free Estimates', 'No Hidden Fees', 'Licensed & Bonded', '14+ Yrs Local', '2-Yr Warranty'];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <ConstructionSitePlan label="Bedrock construction site plan" />
        </motion.div>
      </div>
    </section>
  );
}
