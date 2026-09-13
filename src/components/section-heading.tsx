"use client";

import type { Localized } from "@/lib/i18n";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: Localized;
}) {
  const { t } = useLanguage();
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-xs tracking-[0.2em] text-brand uppercase">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
        {t(title)}
      </h2>
    </Reveal>
  );
}
