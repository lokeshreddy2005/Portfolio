import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Cta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="max-w-md text-muted-foreground">
            I&apos;m open to software engineering and quantitative research
            roles. Reach out if you&apos;d like to talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact">Get in touch</Button>
            <Button href="/resume" variant="outline">
              View resume
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
