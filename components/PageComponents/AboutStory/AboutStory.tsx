// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Bids & Real Timelines</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              "We started Bedrock because too many homeowners in Central Texas were getting
              vague verbal estimates instead of real, itemized bids — and paying for it in
              change-order surprises."
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Bedrock Construction Group</span>
              <span className={styles.pullTitle}>Waco, TX</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2012 in Waco, TX, Bedrock Construction Group started with one crew and one
              principle: give clients a written, itemized bid up front, hold the schedule we commit
              to, and back the finished work with a real warranty. No verbal-estimate surprises, no
              upsell pressure, no vague scope.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with a licensed and bonded general contracting team and
              a managed network of vetted subcontractors who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2012', label: 'Founded in Waco' },
                { year: '2016', label: 'Expanded to a full project-management team' },
                { year: '2020', label: '100 projects completed' },
                { year: '2026', label: '180+ projects completed' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
