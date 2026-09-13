"use client";

import { useLanguage } from "@/lib/i18n";
import { about } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container py-24 md:py-32">
      <SectionHeading eyebrow="01" title={about.title} />
      <div className="max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              {t(p)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
