import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
          and Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
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
                <SocialIcon icon={link.icon} className="h-4 w-4" />
              </a>
            ))}
        </div>
      </Container>
    </footer>
  );
}
