import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { Award, GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Academic achievements and competitive programming record of Bolla Lokesh Reddy.",
};

export default function AchievementsPage() {
  const academic = achievements.filter((a) => a.category === "Academic");
  const competitive = achievements.filter(
    (a) => a.category === "Competitive Programming"
  );

  return (
    <Container className="py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Record & recognition"
          description="Academic entrance results and competitive programming standing."
        />
      </Reveal>

      <div className="mt-12">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <GraduationCap className="h-4 w-4" />
          Academic
        </div>
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2">
          {academic.map((item) => (
            <RevealItem
              key={item.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Award className="h-4 w-4" />
          Competitive Programming
        </div>
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2">
          {competitive.map((item) => (
            <RevealItem
              key={item.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.value ? (
                  <Counter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                ) : (
                  item.detail
                )}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="mt-12">
        <h2 className="text-sm font-medium text-muted-foreground">
          Education
        </h2>
        <Reveal className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="px-5 py-3 font-medium">Degree</th>
                <th className="px-5 py-3 font-medium">Institution</th>
                <th className="px-5 py-3 font-medium">Year</th>
                <th className="px-5 py-3 font-medium">Score</th>
              </tr>
            </thead>
            <tbody>
              {education.map((entry) => (
                <tr
                  key={entry.degree}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-5 py-3.5">{entry.degree}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {entry.institution}
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {entry.year}
                  </td>
                  <td className="px-5 py-3.5 font-mono text-xs">
                    {entry.score} {entry.scoreLabel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </Container>
  );
}
