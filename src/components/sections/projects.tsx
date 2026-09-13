"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useLanguage } from "@/lib/i18n";
import { projects, contact } from "@/content/site-content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Projects() {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <section id="projects" className="section-container py-24 md:py-32">
        <SectionHeading
          eyebrow="05"
          title={{ it: "Progetti", en: "Projects" }}
        />
        <Reveal>
          <Card className="max-w-xl border border-dashed border-border bg-transparent">
            <CardContent className="flex flex-col items-start gap-4 pt-6">
              <p className="text-muted-foreground">
                {t({
                  it: "Sto ancora aggiungendo i miei progetti qui. Nel frattempo dai un'occhiata al mio GitHub.",
                  en: "I'm still adding my projects here. In the meantime, check out my GitHub.",
                })}
              </p>
              <Button variant="outline" render={<a href={contact.github} target="_blank" rel="noreferrer" />}>
                <GithubIcon className="size-4" />
                GitHub
                <ArrowUpRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="projects" className="section-container py-24 md:py-32">
      <SectionHeading eyebrow="05" title={{ it: "Progetti", en: "Projects" }} />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <Card className="h-full border border-transparent transition-colors hover:border-brand/40">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{t(project.description)}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              {(project.link || project.repo) && (
                <CardFooter className="gap-4 bg-transparent border-t-0 pt-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-brand hover:underline"
                    >
                      {t({ it: "Demo", en: "Demo" })}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <GithubIcon className="size-3.5" />
                      {t({ it: "Codice", en: "Code" })}
                    </a>
                  )}
                </CardFooter>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
