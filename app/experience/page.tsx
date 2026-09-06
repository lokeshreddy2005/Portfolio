import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { experience } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internship and leadership experience of Bolla Lokesh Reddy at Adobe and IIT Hyderabad.",
};

function ExperienceCard({
  entry,
}: {
  entry: (typeof experience)[number];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-lg font-semibold tracking-tight">{entry.role}</h3>
        <p className="font-mono text-xs text-muted-foreground">
          {entry.startDate} – {entry.endDate}
        </p>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {entry.organization}
      </p>
      <p className="mt-4 leading-relaxed text-foreground/90">
        {entry.description}
      </p>
      {entry.responsibilities.length > 0 ? (
        <ul className="mt-4 space-y-2.5">
          {entry.responsibilities.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {entry.technologies ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ExperiencePage() {
  const internships = experience.filter((e) => e.type === "Internship");
  const leadership = experience.filter((e) => e.type === "Leadership");

  return (
    <Container className="py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Internship experience and campus leadership roles at IIT Hyderabad."
        />
      </Reveal>

      {internships.length > 0 ? (
        <div className="mt-12">
          <h2 className="text-sm font-medium text-muted-foreground">
            Internship
          </h2>
          <RevealGroup className="mt-4 flex flex-col gap-5">
            {internships.map((entry) => (
              <RevealItem key={entry.id}>
                <ExperienceCard entry={entry} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      ) : null}

      {leadership.length > 0 ? (
        <div className="mt-12">
          <h2 className="text-sm font-medium text-muted-foreground">
            Leadership & Campus Roles
          </h2>
          <RevealGroup className="mt-4 flex flex-col gap-5">
            {leadership.map((entry) => (
              <RevealItem key={entry.id}>
                <ExperienceCard entry={entry} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      ) : null}
    </Container>
  );
}
