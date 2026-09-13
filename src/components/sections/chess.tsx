"use client";

import { ChessKnight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { chess } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Chess() {
  const { t } = useLanguage();

  return (
    <section id="chess" className="section-container py-24 md:py-32">
      <Reveal>
        <Card className="relative overflow-hidden border border-border bg-secondary/20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[100px]"
          />
          <CardContent className="relative flex flex-col items-center gap-5 py-14">
            <ChessKnight className="size-10 text-brand" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              {t(chess.title)}
            </h2>
            <Button
              size="lg"
              className="mt-2 bg-brand text-brand-foreground hover:bg-brand/90"
              render={<a href={chess.url} target="_blank" rel="noreferrer" />}
            >
              {t(chess.cta)}
              <ArrowUpRight className="size-4" />
            </Button>
            <p className="font-mono text-xs text-muted-foreground">
              @{chess.username}
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
