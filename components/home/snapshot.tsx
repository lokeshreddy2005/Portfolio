"use client";

import { Container } from "@/components/ui/container";
import { Counter } from "@/components/motion/counter";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { experience } from "@/data/experience";

const pastInternship = experience.find((e) => e.type === "Internship");
const degree = education[0];
const codeforces = achievements.find((a) => a.id === "codeforces");
const leetcode = achievements.find((a) => a.id === "leetcode");

export function Snapshot() {
  return (
    <section className="border-b border-border py-16">
      <Container>
        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <RevealItem>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Currently
            </p>
            <p className="mt-2 text-base font-medium">{degree?.degree}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {degree?.institution} · Class of {degree?.year}
            </p>
          </RevealItem>
          <RevealItem>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Most recently
            </p>
            <p className="mt-2 text-base font-medium">{pastInternship?.role}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {pastInternship?.organization} · {pastInternship?.startDate}–
              {pastInternship?.endDate}
            </p>
          </RevealItem>
          <RevealItem>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Codeforces
            </p>
            <p className="mt-2 text-base font-medium">
              {codeforces ? (
                <Counter
                  value={codeforces.value ?? 0}
                  prefix={codeforces.prefix}
                  suffix={codeforces.suffix}
                />
              ) : (
                codeforces
              )}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Competitive programming
            </p>
          </RevealItem>
          <RevealItem>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              LeetCode
            </p>
            <p className="mt-2 text-base font-medium">
              {leetcode ? (
                <Counter
                  value={leetcode.value ?? 0}
                  prefix={leetcode.prefix}
                  suffix={leetcode.suffix}
                />
              ) : (
                leetcode
              )}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Problem solving
            </p>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
