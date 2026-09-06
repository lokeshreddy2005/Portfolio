"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="aurora-blob pointer-events-none absolute inset-0 -z-10"
      />
      <Container className="flex flex-col gap-6 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm text-accent"
        >
          {siteConfig.title} · Final-year @ IIT Hyderabad
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="gradient-text max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {siteConfig.heroStatement}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Button href="/projects">Explore my work</Button>
          <Button href="/resume" variant="outline">
            Resume
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 pt-4"
        >
          {socialLinks
            .filter((link) => link.url)
            .map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="focus-ring rounded-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <SocialIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
