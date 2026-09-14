"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { nav, hero } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
        >
          {hero.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex size-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-3.5" />
            ) : (
              <Moon className="size-3.5" />
            )}
          </button>
          <button
            onClick={toggleLang}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
            aria-label="Toggle language"
          >
            {lang === "it" ? "IT" : "EN"} / {lang === "it" ? "EN" : "IT"}
          </button>
          <Button size="sm" render={<a href="#contact" />}>
            {t({ it: "Contattami", en: "Contact me" })}
          </Button>
        </div>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="section-container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t(item.label)}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => {
                  toggleLang();
                  setOpen(false);
                }}
                className="self-start rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {lang === "it" ? "Switch to EN" : "Passa a IT"}
              </button>
              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="flex size-7 items-center justify-center rounded-full border border-border text-muted-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-3.5" />
                ) : (
                  <Moon className="size-3.5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
