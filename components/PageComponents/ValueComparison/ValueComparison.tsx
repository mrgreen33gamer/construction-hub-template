'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface ComparisonRow {
  feature:  string;
  us:       boolean | string;
  others:   boolean | string;
}

interface ValueComparisonProps {
  rows?:  ComparisonRow[];
  title?: string;
}

const DEFAULT_ROWS: ComparisonRow[] = [
  { feature: 'Itemized, written bid before work begins', us: true,  others: false },
  { feature: '2-Year workmanship warranty',              us: true,  others: false },
  { feature: 'Licensed & bonded general contractor',     us: true,  others: 'Sometimes' },
  { feature: 'No hidden change-order fees',               us: true,  others: false },
  { feature: 'AGC member',                                us: true,  others: false },
  { feature: 'Vetted, managed subcontractor crews',       us: true,  others: 'Sometimes' },
  { feature: 'Dedicated project manager per job',         us: true,  others: false },
  { feature: 'Satisfaction guarantee',                    us: true,  others: false },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className={`${styles.icon} ${styles.iconYes}`} aria-label="Yes">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className={`${styles.icon} ${styles.iconNo}`} aria-label="No">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
    );
  }
  return <span className={styles.iconMaybe}>{value}</span>;
}

export default function ValueComparison({ rows = DEFAULT_ROWS, title = 'Bedrock vs. The Other Guys' }: ValueComparisonProps) {
  return (
    <section className={styles.section} aria-label="Value comparison">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Side by Side</span>
          <h2 className={styles.title}>{title}</h2>
        </motion.div>

        <div className={styles.colHeaders}>
          <div className={styles.colHeaderFeature} />
          <div className={styles.colHeaderUs}>
            <span className={styles.colLogoMark}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l9-8 9 8"/>
                <path d="M5 9.5V21h14V9.5"/>
                <path d="M9 21v-6h6v6"/>
              </svg>
            </span>
            Bedrock
          </div>
          <div className={styles.colHeaderOthers}>Competitors</div>
        </div>

        <div className={styles.rowList}>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className={styles.compRow}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <span className={styles.featureLabel}>{row.feature}</span>
              <div className={styles.cellUs}><StatusIcon value={row.us} /></div>
              <div className={styles.cellOthers}><StatusIcon value={row.others} /></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.bottomStrip}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className={styles.stripText}>8 for 8. No fine print.</span>
          <a href="/contact" className={styles.stripCta}>Get Your Free Estimate →</a>
        </motion.div>

      </div>
    </section>
  );
}
