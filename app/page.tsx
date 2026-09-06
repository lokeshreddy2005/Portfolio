import { Hero } from "@/components/home/hero";
import { Snapshot } from "@/components/home/snapshot";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsSection } from "@/components/home/skills-section";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Snapshot />
      <FeaturedProjects />
      <SkillsSection />
      <Cta />
    </>
  );
}
