// components/PageComponents/AuthorBio/AuthorBio.tsx
// FIX9: LinkedIn "Connect on LinkedIn" link now fires 'click' tracking.
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bedrock Construction Group",
  url: "https://www.bedrockconstructiontx.com",
  sameAs: [
    "https://facebook.com/bedrockconstructiontx",
  ],
  knowsAbout: [
    "General Contracting", "New Home Construction", "Home Additions & Remodels",
    "Kitchen & Bath Renovation", "Commercial Construction", "Central Texas Construction",
  ],
  description:
    "Licensed & bonded general contractor based in Waco, TX. Serving Central Texas homeowners and businesses with new home construction, remodels, and commercial builds since 2012.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/about/team.jpg",
  imageAlt = "The Bedrock Construction Group team",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Licensed & Bonded</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Project Management Team · Bedrock Construction Group</p>
          <h2 className={styles.title}>Bedrock Construction Group</h2>

          <p className={styles.description}>
            Licensed and bonded general contracting since 2012. Based in{" "}
            <strong>Waco, TX</strong> — serving <strong>{cityName}</strong> and the
            surrounding region. Every project starts with a written, itemized bid and is
            backed by a 2-year workmanship warranty.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>Licensed & bonded general contractor since 2012</li>
            <li>AGC of America member</li>
            <li>180+ projects completed across Central Texas</li>
            <li>2-year workmanship warranty on every project</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real project data &amp; 2026 Central Texas market conditions
          </p>

          <div className={styles.footer}>
            {/* Facebook link — tracked */}
            <a
              href="https://facebook.com/bedrockconstructiontx"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="Follow Bedrock Construction Group on Facebook"
              onClick={() => trackEvent({
                eventType:    'click',
                elementLabel: 'Follow on Facebook',
                section:      'AuthorBio',
              })}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
              Follow on Facebook
            </a>

            <div className={styles.badges}>
              <span className={styles.badge}>Since 2012</span>
              <span className={styles.badge}>4.8 ★ Rated</span>
              <span className={styles.badge}>Waco, TX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
