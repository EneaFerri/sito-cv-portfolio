"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact, hero } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-container flex flex-col items-center py-24 text-center md:py-32"
    >
      <Reveal className="flex flex-col items-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
          {t(contact.title)}
        </h2>
        <p className="mt-4 max-w-md text-balance text-muted-foreground">
          {t(contact.subtitle)}
        </p>

        <Button
          size="lg"
          className="mt-8 bg-brand text-brand-foreground hover:bg-brand/90"
          render={<a href={`mailto:${contact.email}`} />}
        >
          <Mail className="size-4" />
          {contact.email}
        </Button>

        <div className="mt-8 flex items-center gap-6">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-brand"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-brand"
          >
            <GithubIcon className="size-5" />
          </a>
        </div>
      </Reveal>

      <footer className="mt-24 w-full border-t border-border pt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {hero.name}
      </footer>
    </section>
  );
}
