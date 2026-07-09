// src/app/projects/page.tsx
"use client";

import styles from './page.module.scss';

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import ProjectCardGrid from "#/PageComponents/ProjectCardGrid/ProjectCardGrid";
import BeforeAfter from "#/PageComponents/BeforeAfter/BeforeAfter";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import InsuredBadge from "#/PageComponents/InsuredBadge/InsuredBadge";
import Variant1 from "#/PageComponents/ContactForms/Variant1/Form";

import reviews from "&/local-db/reviews";
import ALL_PROJECTS from "&/local-db/projects";

const beforeAfterItems = ALL_PROJECTS
  .filter((p) => p.beforeImage && p.afterImage)
  .map((p) => ({
    beforeSrc: p.beforeImage!.src,
    afterSrc: p.afterImage!.src,
    beforeAlt: p.beforeImage!.alt,
    afterAlt: p.afterImage!.alt,
    clientName: `${p.title} — ${p.location}`,
    result: p.result,
  }));

export default function ProjectsPage() {
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="Our Projects"
        subtitle="Real builds and renovations for Central Texas homeowners and businesses — see what's possible for your property"
      />

      {/* Before/after slider — visual proof of the transformation */}
      {beforeAfterItems.length > 0 && (
        <div className={styles.section}>
          <BeforeAfter
            title="Real Renovations. Real Results."
            subtitle="Drag the slider to see the transformation — before and after, side by side."
            items={beforeAfterItems}
          />
        </div>
      )}

      {/* Project card grid — reads from libs/local-db/projects.ts */}
      <div className={styles.section}>
        <ProjectCardGrid
          title="Selected Projects"
          subtitle="New builds, additions, renovations, and commercial construction across Central Texas — click any card to see the full story"
        />
      </div>

      {/* Testimonials */}
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      {/* Licensing / bonding CTA */}
      <div className={styles.section}>
        <InsuredBadge variant="section" ctaLink="/contact" />
      </div>

      {/* Contact form */}
      <div className={styles.section}>
        <Variant1
          title="Want Results Like These for Your Property?"
          cityName="Waco"
          slug="projects"
          spot="projects-page"
          formVariant={1}
        />
      </div>
    </main>
  );
}
