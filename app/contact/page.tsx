import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icon";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { socialLinks } from "@/data/social";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bolla Lokesh Reddy.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Whether it's an opportunity, a question about a project, or just to say hi — I'd love to hear from you."
        />
      </Reveal>

      <Reveal delay={0.05} className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-3">
          {socialLinks
            .filter((link) => link.url)
            .map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm transition-colors hover:border-foreground/30"
              >
                <SocialIcon icon={link.icon} className="h-4 w-4" />
                {link.label}
              </a>
            ))}
        </div>

        <ContactForm />
      </Reveal>
    </Container>
  );
}
