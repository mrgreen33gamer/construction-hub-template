"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faHardHat, faClock, faAward,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/projects',       label: 'Projects' },
  { href: '/subcontractors', label: 'Subcontractors' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/new-home-construction',   label: 'New Home Construction' },
  { href: '/services/home-additions-remodels', label: 'Home Additions & Remodels' },
  { href: '/services/kitchen-bath-renovation',  label: 'Kitchen & Bath Renovation' },
  { href: '/services/commercial-construction',  label: 'Commercial Construction' },
  { href: '/services/design-build-services',    label: 'Design-Build Services' },
  { href: '/services/general-contracting',      label: 'General Contracting' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Temple, TX', 'Killeen, TX',
  'Hewitt, TX', 'Woodway, TX', 'McGregor, TX',
  'China Spring, TX', 'Bellmead, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved, label: 'Licensed & Bonded' },
  { icon: faHardHat,      label: 'AGC Member' },
  { icon: faClock,        label: 'On-Time Delivery' },
  { icon: faAward,        label: '2-Yr Warranty' },
];

const SOCIALS = [
  { href: 'https://facebook.com/bedrockconstructiontx', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/bedrockconstructiontx',      icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      {/* ── TRUST STRIP ── */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Get a Free Estimate →
          </Link>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Col 1 — Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l9-8 9 8"/>
                  <path d="M5 9.5V21h14V9.5"/>
                  <path d="M9 21v-6h6v6"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Bedrock Construction Group</span>
                <span className={styles.logoSub}>Waco, Texas</span>
              </div>
            </Link>

            <p className={styles.tagline}>
              Licensed &amp; bonded general contracting. Transparent bids, real timelines, zero surprises. Serving Central Texas since 2012.
            </p>

            <div className={styles.contactBlock}>
              <a href="tel:+12547208100" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                (254) 720-8100
              </a>
              <a href="mailto:hello@bedrockconstructiontx.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@bedrockconstructiontx.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                615 Franklin Ave, Waco, TX 76701
              </span>
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Service Areas */}
          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.areaList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <span className={styles.areaDot} />
                  {area}
                </li>
              ))}
              <li className={styles.areaMore}>+ All of Central Texas</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Bedrock Construction Group. All Rights Reserved. | Licensed &amp; Bonded General Contractor · AGC Member
          </p>
          <a href="tel:+12547208100" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Talk To Our Team', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Talk to Our Team
          </a>
        </div>
      </div>

    </footer>
  );
}
