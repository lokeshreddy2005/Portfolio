import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a Computer Science student at IIT Hyderabad.`,
};

const interests = [
  "Machine Learning",
  "Distributed Systems",
  "Quantitative Finance",
  "Operating Systems",
];

const personalInterests = [
  "Cricket",
  "Mobile gaming",
  "Spiritual reading",
  "Web series",
];

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow="About" title="A bit about me" />
      </Reveal>

      <Reveal delay={0.05} className="mt-10 max-w-2xl space-y-5 leading-relaxed text-foreground/90">
        <p>
          I&apos;m a Computer Science and Engineering student at IIT
          Hyderabad, currently in my final year. Most of my work sits at the
          intersection of systems programming, machine learning, and
          full-stack development — I like building things where I have to
          understand what&apos;s happening underneath the abstraction, not
          just call an API.
        </p>
        <p>
          That shows up in the projects I gravitate toward: a fault-tolerant
          distributed job processing system, a hybrid lexical-and-dense
          search engine, a compiler for a graph-programming DSL, and a
          distributed Bitcoin mining framework comparing threading and MPI
          strategies. I&apos;ve also been spending time on the quantitative
          side — backtesting a cross-sectional momentum strategy with the
          same rigor around look-ahead bias that I&apos;d bring to any other
          system. I&apos;m as comfortable reasoning about cache associativity
          as I am about retrieval fusion or point-in-time data alignment.
        </p>
        <p>
          Most recently, I worked as a Machine Learning Engineering Intern on
          Adobe&apos;s Content Intelligence team (May–July 2026), building a
          pipeline that extracts structural layout intelligence from
          marketing email HTML using DOM geometry, Gemini-based semantic
          annotation, and embedding clustering. I&apos;m back on campus now,
          finishing my final year.
        </p>
        <p>
          On campus, I coordinate internship outreach for the Office of
          Career Services, run machine learning workshops as ML Coordinator
          at Tinkerer&apos;s Lab, and previously maintained the website for
          Ek Bharat Shrestha Bharat. I also compete on Codeforces and
          LeetCode, and play for my hostel&apos;s cricket team.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium text-muted-foreground">
            Areas of interest
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium text-muted-foreground">
            Outside of engineering
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {personalInterests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
