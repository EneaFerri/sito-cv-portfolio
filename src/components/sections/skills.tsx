"use client";

import { useLanguage } from "@/lib/i18n";
import { skills } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-container py-24 md:py-32">
      <SectionHeading
        eyebrow="04"
        title={{ it: "Competenze", en: "Skills" }}
      />
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title.it} delay={i * 0.08}>
            <Card className="h-full border border-transparent transition-colors hover:border-brand/40">
              <CardHeader>
                <CardTitle>{t(group.title)}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
