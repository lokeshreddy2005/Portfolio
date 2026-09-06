import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { projects, projectCategories } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend systems, machine learning, quantitative research, and full-stack projects by Bolla Lokesh Reddy.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Everything I've built"
          description="Coursework, team builds, and independent work spanning backend systems, machine learning, quantitative research, and full-stack development."
        />
      </Reveal>
      <div className="mt-10">
        <ProjectsExplorer projects={projects} categories={projectCategories} />
      </div>
    </Container>
  );
}
