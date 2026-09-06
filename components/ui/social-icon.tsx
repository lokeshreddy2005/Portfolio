import { Code2, Mail, Phone, Trophy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { SocialLink } from "@/lib/types";
import { ComponentType, SVGProps } from "react";

const icons: Record<SocialLink["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  phone: Phone,
  codeforces: Code2,
  leetcode: Trophy,
};

export function SocialIcon({
  icon,
  className,
}: {
  icon: SocialLink["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
