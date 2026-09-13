"use client";

import { useLanguage } from "@/lib/i18n";
import { education } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="02"
        title={{ it: "Formazione", en: "Education" }}
      />
      <div className="relative space-y-10 border-l border-border pl-8">
        {education.map((item, i) => (
          <Reveal key={item.institution + item.period} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-brand ring-4 ring-background" />
              <p className="font-mono text-xs text-muted-foreground">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {t(item.degree)}
              </h3>
              <p className="text-sm text-brand">{item.institution}</p>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                {t(item.description)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
