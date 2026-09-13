"use client";

import { useLanguage } from "@/lib/i18n";
import { experience } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="03"
        title={{ it: "Esperienze", en: "Experience" }}
      />
      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((item, i) => (
          <Reveal key={item.company + item.period} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-brand ring-4 ring-background" />
              <p className="font-mono text-xs text-muted-foreground">
                {item.period} · {item.location}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{t(item.role)}</h3>
              <p className="text-sm text-brand">{item.company}</p>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                {t(item.description)}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
