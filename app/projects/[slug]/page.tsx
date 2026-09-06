import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { getProjectBySlug, projects } from "@/data/projects";
import { categoryColors } from "@/lib/category-colors";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/brand-icons";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

function Section({
  title,
  children,
  accentClass,
}: {
  title: string;
  children: React.ReactNode;
  accentClass: string;
}) {
  return (
    <Reveal className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className={cn("font-mono text-xs uppercase tracking-widest", accentClass)}>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const colors = categoryColors[project.category];

  return (
    <Container className="py-16 sm:py-24">
      <Link
        href="/projects"
        className="focus-ring inline-flex items-center gap-1.5 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All projects
      </Link>

      <Reveal className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className={cn("font-mono text-xs uppercase tracking-widest", colors.text)}>
            {project.category}
          </p>
          {project.team ? (
            <span className="text-xs text-muted-foreground">
              {project.team}
            </span>
          ) : null}
          {project.incomplete ? (
            <span className="rounded-full bg-foreground/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              Draft — details coming soon
            </span>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-3">
          {project.live ? (
            <Button href={project.live} external size="sm">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          ) : null}
          {project.github ? (
            <Button href={project.github} external variant="outline" size="sm">
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </Button>
          ) : (
            <span className="font-mono text-xs text-muted-foreground">
              [ repo link coming soon ]
            </span>
          )}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-x-12 lg:grid-cols-[2fr_1fr]">
        <div>
          {project.problem ? (
            <Section title="Problem" accentClass={colors.text}>
              <p className="leading-relaxed text-foreground/90">
                {project.problem}
              </p>
            </Section>
          ) : null}

          {project.approach ? (
            <Section title="Approach" accentClass={colors.text}>
              <ul className="space-y-3">
                {project.approach.map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/90">
                    <span className={cn("mt-2.5 h-1 w-1 shrink-0 rounded-full", colors.dot)} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          <Section title="Highlights" accentClass={colors.text}>
            <ul className="space-y-3">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 text-foreground/90">
                  <span className={cn("mt-2.5 h-1 w-1 shrink-0 rounded-full", colors.dot)} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {project.learnings ? (
            <Section title="What I learned" accentClass={colors.text}>
              <ul className="space-y-3">
                {project.learnings.map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/90">
                    <span className={cn("mt-2.5 h-1 w-1 shrink-0 rounded-full", colors.dot)} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}
        </div>

        <Reveal className="mt-14 lg:mt-0">
          <div className={cn("rounded-2xl border bg-card p-6", colors.border)}>
            <p className="text-sm font-medium">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            {project.team ? (
              <>
                <p className="mt-5 text-sm font-medium">Team</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.team}
                </p>
              </>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
