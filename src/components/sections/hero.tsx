"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { hero } from "@/content/site-content";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]"
      />

      <div className="section-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground"
        >
          <MapPin className="size-3.5" />
          {t(hero.location)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg text-brand sm:text-xl"
        >
          {t(hero.role)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          {t(hero.tagline)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-brand text-brand-foreground hover:bg-brand/90"
            render={<a href="#contact" />}
          >
            {t(hero.ctaPrimary)}
          </Button>
          <Button size="lg" variant="outline" render={<a href="#experience" />}>
            {t(hero.ctaSecondary)}
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
