import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few projects that best represent how I think about problems — from backend systems to machine learning to quantitative research."
          />
          <Button href="/projects" variant="outline" size="sm">
            View all projects
          </Button>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
